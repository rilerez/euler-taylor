(ns webjunk.complex
  (:require [clojure.test :as t :refer [is]]
            [clojure.core :as core])
  (:refer-clojure :exclude [+ - * /]))


(defrecord Complex [real imag]
  #?(:clj clojure.lang.Indexed :cljs IIndexed)
  (#?(:clj nth :cljs -nth) [this index not-found]
    (case index
      0 (.-real this)
      1 (.-imag this)
      not-found))
  (#?(:clj nth :cljs -nth) [this index]
    (or (nth this index nil)
        (throw
         (#?(:clj  java.lang.IndexOutOfBoundsException.
             :cljs js/error.)
          "Bad index for complex number"))))

  #?(:clj clojure.lang.IFn :cljs IFn)
  (#?(:clj invoke :cljs -invoke) [this index]
    (nth this index))

  #?@(:cljs (IPrintWithWriter
             (-pr-writer [z writer _]
                         (write-all writer (human-str z))))))

(defn real [z] (.-real z))
(defn imag [z] (.-imag z))
(defn realish? [z] (zero? (imag z)))
(defn try-realize [z] (if (realish? z) (real z) z))

(defn complex
  ([] (complex 0 0))
  ([x] (complex x 0))
  ([x y] (Complex. x y)))
(defn complex? [x] (instance? Complex x))

(defn ensure-complex [x]
  (if (complex? x) x
      (complex x 0)))

(defn complex-map [f & zs]
  (complex (apply f (map real zs))
           (apply f (map imag zs))))

(def r+ core/+)
(def r- core/-)
(def r* core/*)
(def rdiv core//)

(defn c+ [& zs]
  (apply complex-map r+ zs))
(is (= (c+ (complex 1 2) (complex 3 4))
       (complex 4 6)))

(defn c- [& zs]
  (apply complex-map r- zs))

(def i (complex 0 1))

(defn c*
  ([] (complex 1 0))
  ([z] (ensure-complex z))
  ([u v]
   (let [[x y] u, [a b] v]
     (complex (r- (r* x a) (r* y b))
              (r+ (r* x b) (r* a y)))))
  ([u v & zs]
   (reduce c* (c* u v) zs)))


(defn squared-length [z]
  (let [square #(r* % %)
        [x y] z]
    (r+ (square x) (square y))))
(defn conjugate [z]
  (complex (real z) (r- (imag z))))
(defn cabs [z]
  (Math/sqrt (squared-length z)))

(defn cdiv
  ;; u = unit
  ;; t = real
  ;; 1/(tu) = (1/t) u* = tu*/(t^2)
  ;; z = ut -> 1/z     =  z*/|z|^2
  ;; zz*/|z|^2 = |z|^2/|z|^2 = 1
  ([z] (c* (conjugate z) (complex (rdiv (squared-length z)))))
  ([u v] (c* u (cdiv v)))
  ([u v & zs] (reduce cdiv (cdiv u v) zs)))

(defn cis [t]
  (complex (Math/cos t) (Math/sin t)))

(defn cexp [z]
  (c* (complex (Math/exp (real z)) 0)
      (cis (imag z))))

(defn make-op [complex-op real-op]
  (fn [& args]
    (if (some complex? args)
      (apply complex-op (map ensure-complex args))
      (apply real-op args))))

(def +   (make-op c+   core/+       ))
(def -   (make-op c-   core/-       ))
(def *   (make-op c*   core/*       ))
(def /   (make-op cdiv core//       ))
(def exp (make-op cexp #(Math/exp %)))
(def abs (make-op cabs #(Math/abs %)))

(defn c-cosh [z] (/ (+ (exp z) (exp (- z)))
                  2))
(defn c-sinh [z] (/ (- (exp z) (exp (- z)))
                  2))
(defn c-tanh [z] (/ (c-sinh z) (c-cosh z)))
(defn c-cos [z] (/ (c-cosh (* i z)) 2))
(is (= (complex 1) (* (complex 2 2) (/ (complex 2 2)))))
(defn c-sin [z] (/ (c-sinh (* i z)) (* 2 i)))
(defn c-tan [z] (/ (c-sin z) (c-cos z)))

(def cosh (make-op c-cosh #(Math/cosh %)))
(def sinh (make-op c-sinh #(Math/sinh %)))
(def tanh (make-op c-tanh #(Math/tanh %)))
(def cos  (make-op c-cos  #(Math/cos  %)))
(def sin  (make-op c-sin  #(Math/sin  %)))
(def tan  (make-op c-tan  #(Math/tan  %)))


(defn human-str [[x y]]
  (str x (if (neg? y) "" "+") y "i"))

#?(:clj
   (do (defn print-method Complex [z writer]
         (.write writer (human-str z)))
       (defmethod print-dup Complex [z writer]
         (.write writer (str "(webjunk.complex/complex" [(z 0) (z 1)] ")")))))

(defn read-complex [v] (apply complex v))

(is (= (complex 1) (* (complex 2 2) (/ (complex 2 2)))))
(is (= (complex 1) (* (complex 2 3) (/ (complex 2 3)))))
(/ (complex 2 2))
;; (comment
;;   (nth (complex 1 2) 0)
;;   (let [[x y] (complex 2 3)] [x y]))


;; (comment
;;   (defn read-complex [vec] (apply complex vec))
;;   (read-complex [1 3])
;;   (def reads (assoc *data-readers* :c read-complex))
;;   (binding [*data-readers* reads]
;;     (read-string  "#c[0 1]")
;;     )
;;   (set! *data-readers* reads)
;;   #c( 0 1 )
;;   )
