(ns webjunk.bulma
  (:require [webjunk.pseudotag :refer
             [ensure-attr str-space deftag ptag-apply let-dissoc deftagfn]])
  #?(:cljs (:require-macros [webjunk.bulma :refer [aif]]
                            [webjunk.pseudotag :refer [deftagfn deftag let-dissoc]])))

(defmacro aif
  ([test then] `(aif ~test ~then nil))
  ([test then else] `(if-let [~'it ~test] ~then ~else)))

(def charset-utf8 [:meta {:charset "utf-8"}])
(def font-awesome-tag
  [:script {:defer true
            :src  "https://use.fontawesome.com/releases/v5.14.0/js/all.js"}])
(def responsive-tag
  [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}])


(defn control
  "Control is a pseudotag that constructs a `div` (tag can be overridden) with
  Bulma's control class. It also knows about icons. The attribute
  `:left-icon-class` and `:right-icon-class` generate the respective icon
  spans. The attribute `:both-icon-class` applies to every icon generated.
  The `:tag` attribute overrides the outermost tag `control` constructs
  (defaults to `:div`)."
  {:style/indent :defn
   :arglists     '([attributes? children*])}
  [& args]
  (let [[attr & children] (ensure-attr args)]
    (let-dissoc
        [{:keys [class left-icon-class right-icon-class both-icon-class tag]
          :or {tag :div}}
         attr]
      (let [control+class+icon
            (str-space "control" class
                       (when  left-icon-class "has-icons-left")
                       (when right-icon-class "has-icons-right"))]
        (ptag-apply
         tag
         (assoc attr :class control+class+icon)
         (aif  left-icon-class
              [:span.icon.is-left
               [:i {:class (str-space both-icon-class it)}]])
         (aif right-icon-class
              [:span.icon.is-right
               [:i {:class (str-space both-icon-class it)}]])
         children)))))

(deftag columns      {:class %        } :div)
(deftag column       {:class %        } :div)
(deftag container    {:class %        } :div)
(deftag section      {:class %        } %)

(deftag field        {:class %        } :div)
(deftag label        {:class %        } %)
(deftag input        {:class %        } %)

(deftag button       {:class %        } %)
(deftag buttons      {:class %        } :div)

(deftag navbar       {:class %        } :nav)
(deftag navbar-brand {:class %        } :div)
(deftag navbar-menu  {:class %        } :div)

(deftagfn navbar-burger attrs []
   [:div.navbar-burger attrs (repeat 3 [:span])])

(deftag navbar-start {:class %        } :div)
(deftag navbar-end   {:class %        } :div)
(deftag navbar-item  {:class %        } :div)

(deftag menu         {:class %        } :nav)
(deftag menu-list    {:class %        } :ul)

(deftag level        {:class %        } :div)
(deftag level-left   {:class %        } :div)
(deftag level-right  {:class %        } :div)
(deftag level-item   {:class %        } :div)

(deftag textarea     {:class %        } %)
(deftag table        {:class %        } %)

(deftagfn select attr [& options]
  [:div.select
   [:select attr options]])
