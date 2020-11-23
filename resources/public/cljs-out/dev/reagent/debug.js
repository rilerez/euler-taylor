// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__24002__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24002 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24003__i = 0, G__24003__a = new Array(arguments.length -  0);
while (G__24003__i < G__24003__a.length) {G__24003__a[G__24003__i] = arguments[G__24003__i + 0]; ++G__24003__i;}
  args = new cljs.core.IndexedSeq(G__24003__a,0,null);
} 
return G__24002__delegate.call(this,args);};
G__24002.cljs$lang$maxFixedArity = 0;
G__24002.cljs$lang$applyTo = (function (arglist__24004){
var args = cljs.core.seq(arglist__24004);
return G__24002__delegate(args);
});
G__24002.cljs$core$IFn$_invoke$arity$variadic = G__24002__delegate;
return G__24002;
})()
);

(o.error = (function() { 
var G__24005__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24005 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24006__i = 0, G__24006__a = new Array(arguments.length -  0);
while (G__24006__i < G__24006__a.length) {G__24006__a[G__24006__i] = arguments[G__24006__i + 0]; ++G__24006__i;}
  args = new cljs.core.IndexedSeq(G__24006__a,0,null);
} 
return G__24005__delegate.call(this,args);};
G__24005.cljs$lang$maxFixedArity = 0;
G__24005.cljs$lang$applyTo = (function (arglist__24007){
var args = cljs.core.seq(arglist__24007);
return G__24005__delegate(args);
});
G__24005.cljs$core$IFn$_invoke$arity$variadic = G__24005__delegate;
return G__24005;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
