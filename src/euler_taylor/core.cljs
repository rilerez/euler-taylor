(ns ^:figwheel-hooks euler-taylor.core
  (:refer-clojure :exclude [ + - * /])
  (:require
   [cljs.pprint :refer [cl-format]]
   [webjunk.bulma :as bulma]
   [webjunk.complex :as complex :refer [complex  + - * / cis abs]]
   [webjunk.svg :as svg]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom])
  (:require-macros [webjunk.pseudotag :refer [deftagfn]]))


;; define your app data so that it doesn't get over-written on reload
(defonce state (atom {:t 3.14
                      :zoom 1}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn pows-of [z] (iterate #(* % z) 1))
(def facts (reductions * 1 (map inc (range))))
(defn taylor-terms [z] (map / (pows-of z) facts))
(defn partial-sums [series]
  (reductions  + (complex) series))

(def tau (* 2 Math/PI))
(def term-count 40)

(defn vecline [z0 z1 & children]
  (let [len (abs (- z0 z1))
        cutoff .3]
    (apply
     svg/line {:class (if (>= len cutoff) "arrowed" "")}
     z0 z1
     children)))

(defn taylor-lines [terms time]
  (let [sums (partial-sums (taylor-terms (complex 0 time)))
        pairs (map vector sums (rest sums))]
    (into [:<>]
          (take terms
                (for [[a b]  pairs]
                  ^{:key b}
                  (vecline a b))))))

(def update-t #(swap! state assoc :t (-> % .-target .-value)) )
(def update-zoom #(swap! state assoc :zoom (-> % .-target .-value)) )

(def infty 100000)

(deftagfn vline attr [x]
  (svg/line attr [x (- infty)] [x infty]))
(deftagfn hline attr [y]
  (svg/line attr [(- infty) y] [infty y]))

(def grid (for [i (range -50 50)]
            ^{:key i}
            [:<>
             (vline {:class "grid"} i)
             (hline {:class "grid"} i)]))
(def axes [:<>
           (hline {:class "axis"} 0)
           (vline {:class "axis"} 0)])


(defn hello-world []
  #_(reagent/after-render #(.typeset js/MathJax))
  (let [t (:t @state)
        [x y] (cis t)]
    [:<>
     [:h1 "Taylor series of $e^{it}$ in the complex plane"]
     [:p "$$e^{it}=\\sum_{n=0}^\\infty \\frac{(it)^n}{n!}$$"]
     [bulma/control {:class "box svgish"}
       [:div.level.is-mobile
        "zoom: " [:input.slider
                  {:type "range" :value (:zoom @state)
                   :min 1 :max 15 :step .2 :on-change update-zoom}]]
       [:div.level.is-mobile
        "$t=$" [:input.input.is-narrow
                {:type "text"  :value t :on-change update-t}]
        " "
        [:input.slider {:type "range" :min (- 14) :max 14 :step .02
                        :value t
                        :on-change update-t }]]]
     [:div.svg-container
      [:svg.diagram
       {
        :preserveAspectRatio "xMidYMid meet"
        :viewBox "-5 -5 10 10"}
       [:defs [:marker {:id "arrow"
                        :viewBox "-5 -5 10 10"
                        :orient "auto"
                        :markerWidth  10
                        :markerHeight 10
                        :refX 4
                        :refY 0}
               [:path {:d "M0,0 L-2,3 L5,0 L-2,-3 Z"}]]]
       [:g {:transform (str "scale(" (/ (:zoom @state)) ")")}
        grid axes
        [svg/circle {:id "unit"} [0 0] 1]
        [taylor-lines term-count t]]]]]))


(defn mount [el]
  (rdom/render [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your state to force rerendering depending on
  ;; your application
  ;; (swap! state update-in [:__figwheel_counter] inc)
  )
