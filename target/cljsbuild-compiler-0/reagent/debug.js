// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5618__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5619__i = 0, G__5619__a = new Array(arguments.length -  0);
while (G__5619__i < G__5619__a.length) {G__5619__a[G__5619__i] = arguments[G__5619__i + 0]; ++G__5619__i;}
  args = new cljs.core.IndexedSeq(G__5619__a,0,null);
} 
return G__5618__delegate.call(this,args);};
G__5618.cljs$lang$maxFixedArity = 0;
G__5618.cljs$lang$applyTo = (function (arglist__5620){
var args = cljs.core.seq(arglist__5620);
return G__5618__delegate(args);
});
G__5618.cljs$core$IFn$_invoke$arity$variadic = G__5618__delegate;
return G__5618;
})()
);

(o.error = (function() { 
var G__5621__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5622__i = 0, G__5622__a = new Array(arguments.length -  0);
while (G__5622__i < G__5622__a.length) {G__5622__a[G__5622__i] = arguments[G__5622__i + 0]; ++G__5622__i;}
  args = new cljs.core.IndexedSeq(G__5622__a,0,null);
} 
return G__5621__delegate.call(this,args);};
G__5621.cljs$lang$maxFixedArity = 0;
G__5621.cljs$lang$applyTo = (function (arglist__5623){
var args = cljs.core.seq(arglist__5623);
return G__5621__delegate(args);
});
G__5621.cljs$core$IFn$_invoke$arity$variadic = G__5621__delegate;
return G__5621;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
