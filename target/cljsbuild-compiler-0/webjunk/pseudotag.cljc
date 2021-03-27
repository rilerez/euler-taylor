(ns webjunk.pseudotag
  #?(:cljs (:require-macros [webjunk.pseudotag :refer [destructure-track let-dissoc]])))


;;; pseudo-tags generalize hiccup tags
;;; a pseudo-tag is either
;;;   - a hiccup tag
;;;   - or a function with args [map? children*]
;;; that emits hiccup when called
;;;
;;; this way, we can declaritively define guis with pseudotags
;;; and work at a higher level of abstraction than hiccup but
;;; keep the ability to intermix plain hiccup


(defn str-space [& rest]
  (reduce str (interpose " " (filter identity rest))))

(defmacro destructure-track
  "This macro destructures `destrs` from `val`, collecting the
  keywords it destructured on into `tracker`. This is useful so pseudotags
  can intercept new attributes without passing them to a real tag."
  {:style/indent [1]}
  [[destrs val tracker] & body]
  (let [key-binds   (concat (:syms destrs)
                            (:keys destrs)
                            (:strs destrs))
        plain-binds (map destrs (filter symbol? (keys destrs)))
        all-keys    (concat key-binds plain-binds)]

    `(let [~destrs  ~val
           ~tracker ~(into #{} all-keys)]
       ~@body)))

(defmacro let-dissoc
  "Let-dissoc creates a let with map destructuring and dissocs the
  keys it grabbed from the map."
  [[destrs the-map] & body]
  `(destructure-track [~destrs ~the-map intercepted#]
     (let [~the-map (apply dissoc ~the-map intercepted#)]
       ~@body)))


(defn attr-merge [& attrs]
  (apply merge-with str-space attrs))

(defn attr? [x] (and (map? x) (not (record? x))))
(defn ensure-attr [lst]
  (if (attr? (first lst)) lst
      (cons {} lst)))

(def real-tag? keyword?)
(defn ptag-call [ptag & args]
  (if (real-tag? ptag)
    (into [ptag] args)
    (apply ptag args)))
(defn ptag-apply [ptag & args]
  (apply apply ptag-call ptag args))

(defmacro deftagfn [name attr [& formal-args] & body]
  `(defn ~name
     {:style/indent :defn
      :arglists     '([attributes? ~@formal-args])}
     [& args#]
     (let [[~attr ~@formal-args] (ensure-attr args#)]
       ~@body)))

(defmacro deftag
  "The macro `deftag` defines a pseudo-tag (a function that acts like a
  hiccup tag). The symbol % refers to `tagname` as a string in the
  `init-attr` map and a keyword in `base-tag`"
  [tagname init-attr base-tag]
  `(defn ~tagname
     {:arglists     '([~'attributes? ~'children*])
      :style/indent :defn}
     [& args#]
     (let [~'%                ~(name tagname)
           [new-attr# & kids#] (ensure-attr args#)
           attr#               (attr-merge ~init-attr new-attr#)
           desugared-base-tag# (let ~['% (keyword tagname)] ~base-tag)]
       (ptag-apply desugared-base-tag# attr# kids#))))
;; I considered allowing to override tag, but
;; since deftag just adds defaults, i don't think it's worth it?
