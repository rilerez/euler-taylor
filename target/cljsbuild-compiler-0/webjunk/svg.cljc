(ns webjunk.svg
  (:require
   [webjunk.pseudotag :refer [deftagfn deftag ptag-apply let-dissoc]])
  #?(:cljs (:require-macros [webjunk.pseudotag :refer [deftagfn deftag let-dissoc]])))


(deftagfn line attr [start end & children]
  [:line (assoc attr
                :x1 (start 0) :y1 (start 1)
                :x2 (end   0) :y2 (end   1))
   children])


(deftagfn circle attr [center radius & children]
  [:circle (assoc attr :cx (center 0) :cy (center 1) :r radius)
   children])

(deftagfn rect attr [z dz & children]
  [:rect (assoc attr
                :x     ( z 0) :y      ( z 1)
                :width (dz 0) :height (dz 1))
   children])

(deftagfn textlike attr [& body]
  (let-dissoc [{:keys [tag z dz]} attr]
    (ptag-apply tag
                (merge attr
                       (if  z { :x ( z 0)  :y ( z 1)})
                       (if dz {:dx (dz 0) :dy (dz 1)}))
                body)))

(deftag text  {:tag :text}  textlike)
(deftag tspan {:tag :tspan} textlike)

(deftagfn foreignObject attr [& children]
  (let-dissoc [{:keys [z dz]} attr]
    [:foreignObject
     (merge attr
            (if  z {:x     ( z 0) :y      ( z 1)})
            (if dz {:width (dz 0) :height (dz 1)}))
     children]))
