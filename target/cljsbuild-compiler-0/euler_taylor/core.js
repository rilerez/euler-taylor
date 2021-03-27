// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('euler_taylor.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.pprint');
goog.require('webjunk.bulma');
goog.require('webjunk.complex');
goog.require('webjunk.svg');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof euler_taylor !== 'undefined') && (typeof euler_taylor.core !== 'undefined') && (typeof euler_taylor.core.state !== 'undefined')){
} else {
euler_taylor.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$t,3.14,cljs.core.cst$kw$term,cljs.core.rand_int((6)),cljs.core.cst$kw$zoom,(1)], null));
}
euler_taylor.core.get_app_element = (function euler_taylor$core$get_app_element(){
return goog.dom.getElement("app");
});
euler_taylor.core.pows_of = (function euler_taylor$core$pows_of(z){
return cljs.core.iterate((function (p1__8481_SHARP_){
return (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(p1__8481_SHARP_,z) : webjunk.complex._STAR_.call(null,p1__8481_SHARP_,z));
}),(1));
});
euler_taylor.core.facts = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(webjunk.complex._STAR_,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((1),(0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
euler_taylor.core.taylor_terms = (function euler_taylor$core$taylor_terms(z){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(webjunk.complex._SLASH_,euler_taylor.core.pows_of(z),euler_taylor.core.facts);
});
euler_taylor.core.partial_sums = (function euler_taylor$core$partial_sums(series){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(webjunk.complex._PLUS_,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$0(),series);
});
euler_taylor.core.tau = (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2((2),Math.PI) : webjunk.complex._STAR_.call(null,(2),Math.PI));
euler_taylor.core.term_count = (40);
euler_taylor.core.fmt = (function euler_taylor$core$fmt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8483 = arguments.length;
var i__4737__auto___8484 = (0);
while(true){
if((i__4737__auto___8484 < len__4736__auto___8483)){
args__4742__auto__.push((arguments[i__4737__auto___8484]));

var G__8485 = (i__4737__auto___8484 + (1));
i__4737__auto___8484 = G__8485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return euler_taylor.core.fmt.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(euler_taylor.core.fmt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.cl_format,null,args);
}));

(euler_taylor.core.fmt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(euler_taylor.core.fmt.cljs$lang$applyTo = (function (seq8482){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8482));
}));

euler_taylor.core.vecline = (function euler_taylor$core$vecline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8491 = arguments.length;
var i__4737__auto___8492 = (0);
while(true){
if((i__4737__auto___8492 < len__4736__auto___8491)){
args__4742__auto__.push((arguments[i__4737__auto___8492]));

var G__8493 = (i__4737__auto___8492 + (1));
i__4737__auto___8492 = G__8493;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return euler_taylor.core.vecline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(euler_taylor.core.vecline.cljs$core$IFn$_invoke$arity$variadic = (function (n,z0,z1,children){
var len = (function (){var G__8490 = (webjunk.complex._.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$2(z0,z1) : webjunk.complex._.call(null,z0,z1));
return (webjunk.complex.abs.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.abs.cljs$core$IFn$_invoke$arity$1(G__8490) : webjunk.complex.abs.call(null,G__8490));
})();
var cutoff = .3;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(webjunk.svg.line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[(((len >= cutoff))?" arrowed":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.cst$kw$term.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(euler_taylor.core.state))))?" selected":null)].join('')], null),z0,z1,children)], null);
}));

(euler_taylor.core.vecline.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(euler_taylor.core.vecline.cljs$lang$applyTo = (function (seq8486){
var G__8487 = cljs.core.first(seq8486);
var seq8486__$1 = cljs.core.next(seq8486);
var G__8488 = cljs.core.first(seq8486__$1);
var seq8486__$2 = cljs.core.next(seq8486__$1);
var G__8489 = cljs.core.first(seq8486__$2);
var seq8486__$3 = cljs.core.next(seq8486__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8487,G__8488,G__8489,seq8486__$3);
}));

euler_taylor.core.taylor_lines = (function euler_taylor$core$taylor_lines(terms,time){
var sums = euler_taylor.core.partial_sums(euler_taylor.core.taylor_terms(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((0),time)));
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,sums,cljs.core.rest(sums));
var map__8494 = cljs.core.deref(euler_taylor.core.state);
var map__8494__$1 = (((((!((map__8494 == null))))?(((((map__8494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8494):map__8494);
var peek = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$peek);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8494__$1,cljs.core.cst$kw$term);
var zipped_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),pairs);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(terms,(function (){var iter__4529__auto__ = (function euler_taylor$core$taylor_lines_$_iter__8496(s__8497){
return (new cljs.core.LazySeq(null,(function (){
var s__8497__$1 = s__8497;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8497__$1);
if(temp__5720__auto__){
var s__8497__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8497__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8497__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8499 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8498 = (0);
while(true){
if((i__8498 < size__4528__auto__)){
var vec__8500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8498);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(0),null);
var vec__8503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8500,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8503,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8503,(1),null);
cljs.core.chunk_append(b__8499,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null),(cljs.core.truth_((function (){var fexpr__8506 = cljs.core.PersistentHashSet.createAsIfByAssoc([peek]);
return (fexpr__8506.cljs$core$IFn$_invoke$arity$1 ? fexpr__8506.cljs$core$IFn$_invoke$arity$1(n) : fexpr__8506.call(null,n));
})())?webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["shadow",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(term,n))?" selected":null)].join('')], null),a,b], 0)):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.vecline,n,a,b], null)], null));

var G__8530 = (i__8498 + (1));
i__8498 = G__8530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8499),euler_taylor$core$taylor_lines_$_iter__8496(cljs.core.chunk_rest(s__8497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8499),null);
}
} else {
var vec__8507 = cljs.core.first(s__8497__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507,(0),null);
var vec__8510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8510,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8510,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,n], null),(cljs.core.truth_((function (){var fexpr__8513 = cljs.core.PersistentHashSet.createAsIfByAssoc([peek]);
return (fexpr__8513.cljs$core$IFn$_invoke$arity$1 ? fexpr__8513.cljs$core$IFn$_invoke$arity$1(n) : fexpr__8513.call(null,n));
})())?webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,["shadow",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(term,n))?" selected":null)].join('')], null),a,b], 0)):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.vecline,n,a,b], null)], null),euler_taylor$core$taylor_lines_$_iter__8496(cljs.core.rest(s__8497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(zipped_pairs);
})()),cljs.core.take.cljs$core$IFn$_invoke$arity$2(terms,(function (){var iter__4529__auto__ = (function euler_taylor$core$taylor_lines_$_iter__8514(s__8515){
return (new cljs.core.LazySeq(null,(function (){
var s__8515__$1 = s__8515;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8515__$1);
if(temp__5720__auto__){
var s__8515__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8515__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8515__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8517 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8516 = (0);
while(true){
if((i__8516 < size__4528__auto__)){
var vec__8518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8516);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8518,(0),null);
var vec__8521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8518,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8521,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8521,(1),null);
cljs.core.chunk_append(b__8517,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,term))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webjunk.svg.line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"clicker",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$peek,n);
});})(i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(euler_taylor.core.state,cljs.core.dissoc,cljs.core.cst$kw$peek);
});})(i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
,cljs.core.cst$kw$on_DASH_click,((function (i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$term,n);
});})(i__8516,vec__8518,n,vec__8521,a,b,c__4527__auto__,size__4528__auto__,b__8517,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
], null),a,b], null):null));

var G__8531 = (i__8516 + (1));
i__8516 = G__8531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8517),euler_taylor$core$taylor_lines_$_iter__8514(cljs.core.chunk_rest(s__8515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8517),null);
}
} else {
var vec__8524 = cljs.core.first(s__8515__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8524,(0),null);
var vec__8527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8524,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8527,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8527,(1),null);
return cljs.core.cons(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,term))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webjunk.svg.line,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"clicker",cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$peek,n);
});})(vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
,cljs.core.cst$kw$on_DASH_mouse_DASH_leave,((function (vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(euler_taylor.core.state,cljs.core.dissoc,cljs.core.cst$kw$peek);
});})(vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
,cljs.core.cst$kw$on_DASH_click,((function (vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$term,n);
});})(vec__8524,n,vec__8527,a,b,s__8515__$2,temp__5720__auto__,sums,pairs,map__8494,map__8494__$1,peek,term,zipped_pairs))
], null),a,b], null):null),euler_taylor$core$taylor_lines_$_iter__8514(cljs.core.rest(s__8515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(zipped_pairs);
})())], null);
});
euler_taylor.core.update_t = (function euler_taylor$core$update_t(p1__8532_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$t,p1__8532_SHARP_.target.value);
});
euler_taylor.core.update_zoom = (function euler_taylor$core$update_zoom(p1__8533_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(euler_taylor.core.state,cljs.core.assoc,cljs.core.cst$kw$zoom,p1__8533_SHARP_.target.value);
});
euler_taylor.core.infty = (100000);
euler_taylor.core.vline = (function euler_taylor$core$vline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8538 = arguments.length;
var i__4737__auto___8539 = (0);
while(true){
if((i__4737__auto___8539 < len__4736__auto___8538)){
args__4742__auto__.push((arguments[i__4737__auto___8539]));

var G__8540 = (i__4737__auto___8539 + (1));
i__4737__auto___8539 = G__8540;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return euler_taylor.core.vline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(euler_taylor.core.vline.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__8535 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(1),null);
return webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(webjunk.complex._.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$1(euler_taylor.core.infty) : webjunk.complex._.call(null,euler_taylor.core.infty))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,euler_taylor.core.infty], null)], 0));
}));

(euler_taylor.core.vline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(euler_taylor.core.vline.cljs$lang$applyTo = (function (seq8534){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8534));
}));

euler_taylor.core.hline = (function euler_taylor$core$hline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8545 = arguments.length;
var i__4737__auto___8546 = (0);
while(true){
if((i__4737__auto___8546 < len__4736__auto___8545)){
args__4742__auto__.push((arguments[i__4737__auto___8546]));

var G__8547 = (i__4737__auto___8546 + (1));
i__4737__auto___8546 = G__8547;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return euler_taylor.core.hline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(euler_taylor.core.hline.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__8542 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8542,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8542,(1),null);
return webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(webjunk.complex._.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$1(euler_taylor.core.infty) : webjunk.complex._.call(null,euler_taylor.core.infty)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.infty,y], null)], 0));
}));

(euler_taylor.core.hline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(euler_taylor.core.hline.cljs$lang$applyTo = (function (seq8541){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8541));
}));

euler_taylor.core.grid = (function (){var iter__4529__auto__ = (function euler_taylor$core$iter__8548(s__8549){
return (new cljs.core.LazySeq(null,(function (){
var s__8549__$1 = s__8549;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__8549__$1);
if(temp__5720__auto__){
var s__8549__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8549__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8549__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8551 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8550 = (0);
while(true){
if((i__8550 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__8550);
cljs.core.chunk_append(b__8551,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,euler_taylor.core.vline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"grid"], null),i], 0)),euler_taylor.core.hline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"grid"], null),i], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__8552 = (i__8550 + (1));
i__8550 = G__8552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8551),euler_taylor$core$iter__8548(cljs.core.chunk_rest(s__8549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8551),null);
}
} else {
var i = cljs.core.first(s__8549__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,euler_taylor.core.vline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"grid"], null),i], 0)),euler_taylor.core.hline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"grid"], null),i], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),euler_taylor$core$iter__8548(cljs.core.rest(s__8549__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((-50),(50)));
})();
euler_taylor.core.axes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,euler_taylor.core.hline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"axis"], null),(0)], 0)),euler_taylor.core.vline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"axis"], null),(0)], 0))], null);
euler_taylor.core.tex = (function euler_taylor$core$tex(var_args){
var G__8554 = arguments.length;
switch (G__8554) {
case 1:
return euler_taylor.core.tex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return euler_taylor.core.tex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(euler_taylor.core.tex.cljs$core$IFn$_invoke$arity$1 = (function (s){
return euler_taylor.core.tex.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(euler_taylor.core.tex.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,katex.renderToString(s,cljs.core.clj__GT_js(opts))], null)], null)], null);
}));

(euler_taylor.core.tex.cljs$lang$maxFixedArity = 2);

euler_taylor.core.hello_world = (function euler_taylor$core$hello_world(){
var t = cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(euler_taylor.core.state));
var vec__8556 = webjunk.complex.cis(t);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8556,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8556,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Taylor series of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.tex,"e^{it}"], null)," in the complex plane"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webjunk.bulma.control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"box svgish"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$level$is_DASH_mobile,"zoom: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$slider,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(euler_taylor.core.state)),cljs.core.cst$kw$min,(1),cljs.core.cst$kw$max,(15),cljs.core.cst$kw$step,.2,cljs.core.cst$kw$on_DASH_change,euler_taylor.core.update_zoom], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$level$is_DASH_mobile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.tex,"t="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$input$is_DASH_narrow,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,t,cljs.core.cst$kw$on_DASH_change,euler_taylor.core.update_t], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$slider,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$min,(webjunk.complex._.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$1((14)) : webjunk.complex._.call(null,(14))),cljs.core.cst$kw$max,(14),cljs.core.cst$kw$step,.02,cljs.core.cst$kw$value,t,cljs.core.cst$kw$on_DASH_change,euler_taylor.core.update_t], null)], null)], null)], null),(function (){var map__8559 = cljs.core.deref(euler_taylor.core.state);
var map__8559__$1 = (((((!((map__8559 == null))))?(((((map__8559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8559):map__8559);
var t__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8559__$1,cljs.core.cst$kw$t);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8559__$1,cljs.core.cst$kw$term);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.tex,["e^{it}=\\sum_{n=0}^\\infty \\frac{(it)^n}{n!}=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(euler_taylor.core.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["~,3F~,3@Fi",x,y], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$displayMode,true], null)], null),(cljs.core.truth_(n)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.tex,["n=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"\\quad","\\frac{(it)^{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"}}{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"!}= i^{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"}\\frac{t^{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"}}{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"!}= ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__8565 = cljs.core.mod(n,(4));
switch (G__8565) {
case (0):
return "";

break;
case (1):
return "i";

break;
case (2):
return "-";

break;
case (3):
return "-i";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8565)].join('')));

}
})())," \\frac{(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__$1),"i)^{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"}}","{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"!}=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var vec__8566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(euler_taylor.core.taylor_terms(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((0),t__$1)),n);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8566,(1),null);
return euler_taylor.core.fmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["~,3F~,3@Fi",x__$1,y__$1], 0));
})())].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$displayMode,true], null)], null):null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$svg_DASH_container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg$diagram,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$preserveAspectRatio,"xMidYMid meet",cljs.core.cst$kw$viewBox,"-5 -5 10 10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$marker,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$id,"arrow",cljs.core.cst$kw$viewBox,"-5 -5 10 10",cljs.core.cst$kw$orient,"auto",cljs.core.cst$kw$markerWidth,(10),cljs.core.cst$kw$markerHeight,(10),cljs.core.cst$kw$refX,(4),cljs.core.cst$kw$refY,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,"M0,0 L-2,3 L5,0 L-2,-3 Z"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$transform,["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__8570 = cljs.core.cst$kw$zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(euler_taylor.core.state));
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1(G__8570) : webjunk.complex._SLASH_.call(null,G__8570));
})()),")"].join('')], null),euler_taylor.core.grid,euler_taylor.core.axes,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [webjunk.svg.circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"unit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)], null),euler_taylor.core.taylor_lines(euler_taylor.core.term_count,t)], null)], null)], null)], null);
});
euler_taylor.core.mount = (function euler_taylor$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [euler_taylor.core.hello_world], null),el);
});
euler_taylor.core.mount_app_element = (function euler_taylor$core$mount_app_element(){
var temp__5720__auto__ = euler_taylor.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return euler_taylor.core.mount(el);
} else {
return null;
}
});
euler_taylor.core.mount_app_element();
euler_taylor.core.on_reload = (function euler_taylor$core$on_reload(){
return euler_taylor.core.mount_app_element();
});
