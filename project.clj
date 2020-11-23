(defproject euler-taylor-svg "0.1.0-SNAPSHOT"

  :min-lein-version "2.7.1"


  :plugins [[reifyhealth/lein-git-down "0.3.7"]
            [lein-cljsbuild "1.1.8"]]
  :middleware [lein-git-down.plugin/inject-properties]
  :repositories [["public-gitlab" "git://gitlab.com/"]]
  :git-down {webjunk {:coordinates booking4/webjunk}}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [reagent "0.10.0" ]

                 [webjunk "3b49a1b"]]
  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "taylor-svg.test-runner"]}

  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:output-to "resources/public/cljs-out/dev-main.js"
                                   :optimizations :advanced}}]}
  
  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.12"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   
                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets ^{:protect false} ["target"]}})

