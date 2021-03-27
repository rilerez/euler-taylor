// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('webjunk.svg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('webjunk.pseudotag');
webjunk.svg.line = (function webjunk$svg$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7989 = arguments.length;
var i__4737__auto___7990 = (0);
while(true){
if((i__4737__auto___7990 < len__4736__auto___7989)){
args__4742__auto__.push((arguments[i__4737__auto___7990]));

var G__7991 = (i__4737__auto___7990 + (1));
i__4737__auto___7990 = G__7991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__7986 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__7987 = cljs.core.seq(vec__7986);
var first__7988 = cljs.core.first(seq__7987);
var seq__7987__$1 = cljs.core.next(seq__7987);
var attr = first__7988;
var first__7988__$1 = cljs.core.first(seq__7987__$1);
var seq__7987__$2 = cljs.core.next(seq__7987__$1);
var start = first__7988__$1;
var first__7988__$2 = cljs.core.first(seq__7987__$2);
var seq__7987__$3 = cljs.core.next(seq__7987__$2);
var end = first__7988__$2;
var children = seq__7987__$3;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$x1,(start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1((0)) : start.call(null,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y1,(start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1((1)) : start.call(null,(1))),cljs.core.cst$kw$x2,(end.cljs$core$IFn$_invoke$arity$1 ? end.cljs$core$IFn$_invoke$arity$1((0)) : end.call(null,(0))),cljs.core.cst$kw$y2,(end.cljs$core$IFn$_invoke$arity$1 ? end.cljs$core$IFn$_invoke$arity$1((1)) : end.call(null,(1)))], 0)),children], null);
}));

(webjunk.svg.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.line.cljs$lang$applyTo = (function (seq7985){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7985));
}));

webjunk.svg.circle = (function webjunk$svg$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7996 = arguments.length;
var i__4737__auto___7997 = (0);
while(true){
if((i__4737__auto___7997 < len__4736__auto___7996)){
args__4742__auto__.push((arguments[i__4737__auto___7997]));

var G__7998 = (i__4737__auto___7997 + (1));
i__4737__auto___7997 = G__7998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__7993 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__7994 = cljs.core.seq(vec__7993);
var first__7995 = cljs.core.first(seq__7994);
var seq__7994__$1 = cljs.core.next(seq__7994);
var attr = first__7995;
var first__7995__$1 = cljs.core.first(seq__7994__$1);
var seq__7994__$2 = cljs.core.next(seq__7994__$1);
var center = first__7995__$1;
var first__7995__$2 = cljs.core.first(seq__7994__$2);
var seq__7994__$3 = cljs.core.next(seq__7994__$2);
var radius = first__7995__$2;
var children = seq__7994__$3;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$cx,(center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((0)) : center.call(null,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cy,(center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((1)) : center.call(null,(1))),cljs.core.cst$kw$r,radius], 0)),children], null);
}));

(webjunk.svg.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.circle.cljs$lang$applyTo = (function (seq7992){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7992));
}));

webjunk.svg.rect = (function webjunk$svg$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8003 = arguments.length;
var i__4737__auto___8004 = (0);
while(true){
if((i__4737__auto___8004 < len__4736__auto___8003)){
args__4742__auto__.push((arguments[i__4737__auto___8004]));

var G__8005 = (i__4737__auto___8004 + (1));
i__4737__auto___8004 = G__8005;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__8000 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__8001 = cljs.core.seq(vec__8000);
var first__8002 = cljs.core.first(seq__8001);
var seq__8001__$1 = cljs.core.next(seq__8001);
var attr = first__8002;
var first__8002__$1 = cljs.core.first(seq__8001__$1);
var seq__8001__$2 = cljs.core.next(seq__8001__$1);
var z = first__8002__$1;
var first__8002__$2 = cljs.core.first(seq__8001__$2);
var seq__8001__$3 = cljs.core.next(seq__8001__$2);
var dz = first__8002__$2;
var children = seq__8001__$3;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attr,cljs.core.cst$kw$x,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((0)) : z.call(null,(0))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((1)) : z.call(null,(1))),cljs.core.cst$kw$width,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((0)) : dz.call(null,(0))),cljs.core.cst$kw$height,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((1)) : dz.call(null,(1)))], 0)),children], null);
}));

(webjunk.svg.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.rect.cljs$lang$applyTo = (function (seq7999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7999));
}));

webjunk.svg.textlike = (function webjunk$svg$textlike(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8012 = arguments.length;
var i__4737__auto___8013 = (0);
while(true){
if((i__4737__auto___8013 < len__4736__auto___8012)){
args__4742__auto__.push((arguments[i__4737__auto___8013]));

var G__8014 = (i__4737__auto___8013 + (1));
i__4737__auto___8013 = G__8014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.textlike.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.textlike.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__8007 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__8008 = cljs.core.seq(vec__8007);
var first__8009 = cljs.core.first(seq__8008);
var seq__8008__$1 = cljs.core.next(seq__8008);
var attr = first__8009;
var body = seq__8008__$1;
var map__8010 = attr;
var map__8010__$1 = (((((!((map__8010 == null))))?(((((map__8010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8010):map__8010);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8010__$1,cljs.core.cst$kw$tag);
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8010__$1,cljs.core.cst$kw$z);
var dz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8010__$1,cljs.core.cst$kw$dz);
var intercepted__5431__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([tag,dz,z]);
var attr__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,attr,intercepted__5431__auto__);
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__$1,(cljs.core.truth_(z)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((0)) : z.call(null,(0))),cljs.core.cst$kw$y,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((1)) : z.call(null,(1)))], null):null),(cljs.core.truth_(dz)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dx,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((0)) : dz.call(null,(0))),cljs.core.cst$kw$dy,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((1)) : dz.call(null,(1)))], null):null)], 0)),body], 0));
}));

(webjunk.svg.textlike.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.textlike.cljs$lang$applyTo = (function (seq8006){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8006));
}));

webjunk.svg.text = (function webjunk$svg$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8019 = arguments.length;
var i__4737__auto___8020 = (0);
while(true){
if((i__4737__auto___8020 < len__4736__auto___8019)){
args__4742__auto__.push((arguments[i__4737__auto___8020]));

var G__8021 = (i__4737__auto___8020 + (1));
i__4737__auto___8020 = G__8021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "text";
var vec__8016 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__8017 = cljs.core.seq(vec__8016);
var first__8018 = cljs.core.first(seq__8017);
var seq__8017__$1 = cljs.core.next(seq__8017);
var new_attr__5458__auto__ = first__8018;
var kids__5459__auto__ = seq__8017__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$text], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$text;
return webjunk.svg.textlike;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.svg.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.text.cljs$lang$applyTo = (function (seq8015){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8015));
}));

webjunk.svg.tspan = (function webjunk$svg$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8026 = arguments.length;
var i__4737__auto___8027 = (0);
while(true){
if((i__4737__auto___8027 < len__4736__auto___8026)){
args__4742__auto__.push((arguments[i__4737__auto___8027]));

var G__8028 = (i__4737__auto___8027 + (1));
i__4737__auto___8027 = G__8028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "tspan";
var vec__8023 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__8024 = cljs.core.seq(vec__8023);
var first__8025 = cljs.core.first(seq__8024);
var seq__8024__$1 = cljs.core.next(seq__8024);
var new_attr__5458__auto__ = first__8025;
var kids__5459__auto__ = seq__8024__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$tspan], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$tspan;
return webjunk.svg.textlike;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.svg.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.tspan.cljs$lang$applyTo = (function (seq8022){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8022));
}));

webjunk.svg.foreignObject = (function webjunk$svg$foreignObject(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8035 = arguments.length;
var i__4737__auto___8036 = (0);
while(true){
if((i__4737__auto___8036 < len__4736__auto___8035)){
args__4742__auto__.push((arguments[i__4737__auto___8036]));

var G__8037 = (i__4737__auto___8036 + (1));
i__4737__auto___8036 = G__8037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__8030 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__8031 = cljs.core.seq(vec__8030);
var first__8032 = cljs.core.first(seq__8031);
var seq__8031__$1 = cljs.core.next(seq__8031);
var attr = first__8032;
var children = seq__8031__$1;
var map__8033 = attr;
var map__8033__$1 = (((((!((map__8033 == null))))?(((((map__8033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8033):map__8033);
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8033__$1,cljs.core.cst$kw$z);
var dz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8033__$1,cljs.core.cst$kw$dz);
var intercepted__5431__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([dz,z]);
var attr__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,attr,intercepted__5431__auto__);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$foreignObject,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__$1,(cljs.core.truth_(z)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((0)) : z.call(null,(0))),cljs.core.cst$kw$y,(z.cljs$core$IFn$_invoke$arity$1 ? z.cljs$core$IFn$_invoke$arity$1((1)) : z.call(null,(1)))], null):null),(cljs.core.truth_(dz)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((0)) : dz.call(null,(0))),cljs.core.cst$kw$height,(dz.cljs$core$IFn$_invoke$arity$1 ? dz.cljs$core$IFn$_invoke$arity$1((1)) : dz.call(null,(1)))], null):null)], 0)),children], null);
}));

(webjunk.svg.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.foreignObject.cljs$lang$applyTo = (function (seq8029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8029));
}));

