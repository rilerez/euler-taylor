// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('webjunk.pseudotag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
webjunk.pseudotag.str_space = (function webjunk$pseudotag$str_space(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5470 = arguments.length;
var i__4737__auto___5471 = (0);
while(true){
if((i__4737__auto___5471 < len__4736__auto___5470)){
args__4742__auto__.push((arguments[i__4737__auto___5471]));

var G__5472 = (i__4737__auto___5471 + (1));
i__4737__auto___5471 = G__5472;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,rest)));
}));

(webjunk.pseudotag.str_space.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.pseudotag.str_space.cljs$lang$applyTo = (function (seq5469){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5469));
}));

var ret__4785__auto___5481 = (function (){
/**
 * This macro destructures `destrs` from `val`, collecting the
 *   keywords it destructured on into `tracker`. This is useful so pseudotags
 *   can intercept new attributes without passing them to a real tag.
 */
webjunk.pseudotag.destructure_track = (function webjunk$pseudotag$destructure_track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5482 = arguments.length;
var i__4737__auto___5483 = (0);
while(true){
if((i__4737__auto___5483 < len__4736__auto___5482)){
args__4742__auto__.push((arguments[i__4737__auto___5483]));

var G__5484 = (i__4737__auto___5483 + (1));
i__4737__auto___5483 = G__5484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return webjunk.pseudotag.destructure_track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(webjunk.pseudotag.destructure_track.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__5477,body){
var vec__5478 = p__5477;
var destrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5478,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5478,(1),null);
var tracker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5478,(2),null);
var key_binds = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$syms.cljs$core$IFn$_invoke$arity$1(destrs),cljs.core.cst$kw$keys.cljs$core$IFn$_invoke$arity$1(destrs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$strs.cljs$core$IFn$_invoke$arity$1(destrs)], 0));
var plain_binds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(destrs,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(destrs)));
var all_keys = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(key_binds,plain_binds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,destrs,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tracker,null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,all_keys),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(webjunk.pseudotag.destructure_track.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(webjunk.pseudotag.destructure_track.cljs$lang$applyTo = (function (seq5473){
var G__5474 = cljs.core.first(seq5473);
var seq5473__$1 = cljs.core.next(seq5473);
var G__5475 = cljs.core.first(seq5473__$1);
var seq5473__$2 = cljs.core.next(seq5473__$1);
var G__5476 = cljs.core.first(seq5473__$2);
var seq5473__$3 = cljs.core.next(seq5473__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5474,G__5475,G__5476,seq5473__$3);
}));

return null;
})()
;
(webjunk.pseudotag.destructure_track.cljs$lang$macro = true);

var ret__4785__auto___5494 = (function (){
/**
 * Let-dissoc creates a let with map destructuring and dissocs the
 *   keys it grabbed from the map.
 */
webjunk.pseudotag.let_dissoc = (function webjunk$pseudotag$let_dissoc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5495 = arguments.length;
var i__4737__auto___5496 = (0);
while(true){
if((i__4737__auto___5496 < len__4736__auto___5495)){
args__4742__auto__.push((arguments[i__4737__auto___5496]));

var G__5497 = (i__4737__auto___5496 + (1));
i__4737__auto___5496 = G__5497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return webjunk.pseudotag.let_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(webjunk.pseudotag.let_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__5490,body){
var vec__5491 = p__5490;
var destrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5491,(0),null);
var the_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5491,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_destructure_DASH_track,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,destrs,null,(1),null)),(new cljs.core.List(null,the_map,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$intercepted__5485__auto__,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,the_map,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_dissoc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,the_map,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$intercepted__5485__auto__,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(webjunk.pseudotag.let_dissoc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(webjunk.pseudotag.let_dissoc.cljs$lang$applyTo = (function (seq5486){
var G__5487 = cljs.core.first(seq5486);
var seq5486__$1 = cljs.core.next(seq5486);
var G__5488 = cljs.core.first(seq5486__$1);
var seq5486__$2 = cljs.core.next(seq5486__$1);
var G__5489 = cljs.core.first(seq5486__$2);
var seq5486__$3 = cljs.core.next(seq5486__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5487,G__5488,G__5489,seq5486__$3);
}));

return null;
})()
;
(webjunk.pseudotag.let_dissoc.cljs$lang$macro = true);

webjunk.pseudotag.attr_merge = (function webjunk$pseudotag$attr_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5499 = arguments.length;
var i__4737__auto___5500 = (0);
while(true){
if((i__4737__auto___5500 < len__4736__auto___5499)){
args__4742__auto__.push((arguments[i__4737__auto___5500]));

var G__5501 = (i__4737__auto___5500 + (1));
i__4737__auto___5500 = G__5501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic = (function (attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,webjunk.pseudotag.str_space,attrs);
}));

(webjunk.pseudotag.attr_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.pseudotag.attr_merge.cljs$lang$applyTo = (function (seq5498){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5498));
}));

webjunk.pseudotag.attr_QMARK_ = (function webjunk$pseudotag$attr_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
webjunk.pseudotag.ensure_attr = (function webjunk$pseudotag$ensure_attr(lst){
if(webjunk.pseudotag.attr_QMARK_(cljs.core.first(lst))){
return lst;
} else {
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,lst);
}
});
webjunk.pseudotag.real_tag_QMARK_ = cljs.core.keyword_QMARK_;
webjunk.pseudotag.ptag_call = (function webjunk$pseudotag$ptag_call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5504 = arguments.length;
var i__4737__auto___5505 = (0);
while(true){
if((i__4737__auto___5505 < len__4736__auto___5504)){
args__4742__auto__.push((arguments[i__4737__auto___5505]));

var G__5506 = (i__4737__auto___5505 + (1));
i__4737__auto___5505 = G__5506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.pseudotag.ptag_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.pseudotag.ptag_call.cljs$core$IFn$_invoke$arity$variadic = (function (ptag,args){
if(cljs.core.truth_((webjunk.pseudotag.real_tag_QMARK_.cljs$core$IFn$_invoke$arity$1 ? webjunk.pseudotag.real_tag_QMARK_.cljs$core$IFn$_invoke$arity$1(ptag) : webjunk.pseudotag.real_tag_QMARK_.call(null,ptag)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ptag], null),args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ptag,args);
}
}));

(webjunk.pseudotag.ptag_call.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.pseudotag.ptag_call.cljs$lang$applyTo = (function (seq5502){
var G__5503 = cljs.core.first(seq5502);
var seq5502__$1 = cljs.core.next(seq5502);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5503,seq5502__$1);
}));

webjunk.pseudotag.ptag_apply = (function webjunk$pseudotag$ptag_apply(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5509 = arguments.length;
var i__4737__auto___5510 = (0);
while(true){
if((i__4737__auto___5510 < len__4736__auto___5509)){
args__4742__auto__.push((arguments[i__4737__auto___5510]));

var G__5511 = (i__4737__auto___5510 + (1));
i__4737__auto___5510 = G__5511;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic = (function (ptag,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.apply,webjunk.pseudotag.ptag_call,ptag,args);
}));

(webjunk.pseudotag.ptag_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.pseudotag.ptag_apply.cljs$lang$applyTo = (function (seq5507){
var G__5508 = cljs.core.first(seq5507);
var seq5507__$1 = cljs.core.next(seq5507);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5508,seq5507__$1);
}));

var ret__4785__auto___5523 = (function (){
webjunk.pseudotag.deftagfn = (function webjunk$pseudotag$deftagfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5524 = arguments.length;
var i__4737__auto___5525 = (0);
while(true){
if((i__4737__auto___5525 < len__4736__auto___5524)){
args__4742__auto__.push((arguments[i__4737__auto___5525]));

var G__5526 = (i__4737__auto___5525 + (1));
i__4737__auto___5525 = G__5526;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return webjunk.pseudotag.deftagfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(webjunk.pseudotag.deftagfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,attr,p__5519,body){
var vec__5520 = p__5519;
var seq__5521 = cljs.core.seq(vec__5520);
var formal_args = seq__5521;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$style_SLASH_indent,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$defn,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$arglists,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_attributes_QMARK_,null,(1),null)),formal_args)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__5512__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,attr,null,(1),null)),formal_args)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_ensure_DASH_attr,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__5512__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(webjunk.pseudotag.deftagfn.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(webjunk.pseudotag.deftagfn.cljs$lang$applyTo = (function (seq5513){
var G__5514 = cljs.core.first(seq5513);
var seq5513__$1 = cljs.core.next(seq5513);
var G__5515 = cljs.core.first(seq5513__$1);
var seq5513__$2 = cljs.core.next(seq5513__$1);
var G__5516 = cljs.core.first(seq5513__$2);
var seq5513__$3 = cljs.core.next(seq5513__$2);
var G__5517 = cljs.core.first(seq5513__$3);
var seq5513__$4 = cljs.core.next(seq5513__$3);
var G__5518 = cljs.core.first(seq5513__$4);
var seq5513__$5 = cljs.core.next(seq5513__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5514,G__5515,G__5516,G__5517,G__5518,seq5513__$5);
}));

return null;
})()
;
(webjunk.pseudotag.deftagfn.cljs$lang$macro = true);

var ret__4785__auto___5532 = /**
 * The macro `deftag` defines a pseudo-tag (a function that acts like a
 *   hiccup tag). The symbol % refers to `tagname` as a string in the
 *   `init-attr` map and a keyword in `base-tag`
 */
webjunk.pseudotag.deftag = (function webjunk$pseudotag$deftag(_AMPERSAND_form,_AMPERSAND_env,tagname,init_attr,base_tag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$arglists,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$attributes_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$children_STAR_,null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$style_SLASH_indent,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$defn,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__5527__auto__,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)),(new cljs.core.List(null,cljs.core.name(tagname),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new_DASH_attr__5528__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$kids__5529__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_ensure_DASH_attr,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__5527__auto__,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$attr__5530__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_attr_DASH_merge,null,(1),null)),(new cljs.core.List(null,init_attr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$new_DASH_attr__5528__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$desugared_DASH_base_DASH_tag__5531__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tagname)], null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,base_tag,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$webjunk$pseudotag_SLASH_ptag_DASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$desugared_DASH_base_DASH_tag__5531__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$attr__5530__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$kids__5529__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(webjunk.pseudotag.deftag.cljs$lang$macro = true);

