// Compiled by ClojureScript 1.10.773 {}
goog.provide('webjunk.svg');
goog.require('cljs.core');
goog.require('webjunk.pseudotag');
webjunk.svg.line = (function webjunk$svg$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21181 = arguments.length;
var i__4737__auto___21182 = (0);
while(true){
if((i__4737__auto___21182 < len__4736__auto___21181)){
args__4742__auto__.push((arguments[i__4737__auto___21182]));

var G__21183 = (i__4737__auto___21182 + (1));
i__4737__auto___21182 = G__21183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21178 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attr = cljs.core.nth.call(null,vec__21178,(0),null);
var start = cljs.core.nth.call(null,vec__21178,(1),null);
var end = cljs.core.nth.call(null,vec__21178,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"x1","x1",-1863922247),start.call(null,(0)),new cljs.core.Keyword(null,"y1","y1",589123466),start.call(null,(1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),end.call(null,(0)),new cljs.core.Keyword(null,"y2","y2",-718691301),end.call(null,(1)))], null);
}));

(webjunk.svg.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.line.cljs$lang$applyTo = (function (seq21177){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21177));
}));

webjunk.svg.circle = (function webjunk$svg$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21188 = arguments.length;
var i__4737__auto___21189 = (0);
while(true){
if((i__4737__auto___21189 < len__4736__auto___21188)){
args__4742__auto__.push((arguments[i__4737__auto___21189]));

var G__21190 = (i__4737__auto___21189 + (1));
i__4737__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21185 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attr = cljs.core.nth.call(null,vec__21185,(0),null);
var center = cljs.core.nth.call(null,vec__21185,(1),null);
var radius = cljs.core.nth.call(null,vec__21185,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"cx","cx",1272694324),center.call(null,(0)),new cljs.core.Keyword(null,"cy","cy",755331060),center.call(null,(1)),new cljs.core.Keyword(null,"r","r",-471384190),radius)], null);
}));

(webjunk.svg.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.circle.cljs$lang$applyTo = (function (seq21184){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21184));
}));

webjunk.svg.rect = (function webjunk$svg$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21195 = arguments.length;
var i__4737__auto___21196 = (0);
while(true){
if((i__4737__auto___21196 < len__4736__auto___21195)){
args__4742__auto__.push((arguments[i__4737__auto___21196]));

var G__21197 = (i__4737__auto___21196 + (1));
i__4737__auto___21196 = G__21197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21192 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attr = cljs.core.nth.call(null,vec__21192,(0),null);
var z = cljs.core.nth.call(null,vec__21192,(1),null);
var dz = cljs.core.nth.call(null,vec__21192,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"x","x",2099068185),z.call(null,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),z.call(null,(1)),new cljs.core.Keyword(null,"width","width",-384071477),dz.call(null,(0)),new cljs.core.Keyword(null,"height","height",1025178622),dz.call(null,(1)))], null);
}));

(webjunk.svg.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.rect.cljs$lang$applyTo = (function (seq21191){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21191));
}));

webjunk.svg.textlike = (function webjunk$svg$textlike(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21204 = arguments.length;
var i__4737__auto___21205 = (0);
while(true){
if((i__4737__auto___21205 < len__4736__auto___21204)){
args__4742__auto__.push((arguments[i__4737__auto___21205]));

var G__21206 = (i__4737__auto___21205 + (1));
i__4737__auto___21205 = G__21206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.textlike.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.textlike.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21199 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var seq__21200 = cljs.core.seq.call(null,vec__21199);
var first__21201 = cljs.core.first.call(null,seq__21200);
var seq__21200__$1 = cljs.core.next.call(null,seq__21200);
var attr = first__21201;
var body = seq__21200__$1;
var map__21202 = attr;
var map__21202__$1 = (((((!((map__21202 == null))))?(((((map__21202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21202):map__21202);
var tag = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var z = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var dz = cljs.core.get.call(null,map__21202__$1,new cljs.core.Keyword(null,"dz","dz",887240762));
var intercepted__20131__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([tag,dz,z]);
var attr__$1 = cljs.core.apply.call(null,cljs.core.dissoc,attr,intercepted__20131__auto__);
return webjunk.pseudotag.ptag_apply.call(null,tag,cljs.core.merge.call(null,attr__$1,(cljs.core.truth_(z)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),z.call(null,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),z.call(null,(1))], null):null),(cljs.core.truth_(dz)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dx","dx",-381796732),dz.call(null,(0)),new cljs.core.Keyword(null,"dy","dy",1719547243),dz.call(null,(1))], null):null)),body);
}));

(webjunk.svg.textlike.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.textlike.cljs$lang$applyTo = (function (seq21198){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21198));
}));

webjunk.svg.text = (function webjunk$svg$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21211 = arguments.length;
var i__4737__auto___21212 = (0);
while(true){
if((i__4737__auto___21212 < len__4736__auto___21211)){
args__4742__auto__.push((arguments[i__4737__auto___21212]));

var G__21213 = (i__4737__auto___21212 + (1));
i__4737__auto___21212 = G__21213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "text";
var vec__21208 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21209 = cljs.core.seq.call(null,vec__21208);
var first__21210 = cljs.core.first.call(null,seq__21209);
var seq__21209__$1 = cljs.core.next.call(null,seq__21209);
var new_attr__20158__auto__ = first__21210;
var kids__20159__auto__ = seq__21209__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"text","text",-1790561697);
return webjunk.svg.textlike;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.svg.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.text.cljs$lang$applyTo = (function (seq21207){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21207));
}));

webjunk.svg.tspan = (function webjunk$svg$tspan(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21218 = arguments.length;
var i__4737__auto___21219 = (0);
while(true){
if((i__4737__auto___21219 < len__4736__auto___21218)){
args__4742__auto__.push((arguments[i__4737__auto___21219]));

var G__21220 = (i__4737__auto___21219 + (1));
i__4737__auto___21219 = G__21220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "tspan";
var vec__21215 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21216 = cljs.core.seq.call(null,vec__21215);
var first__21217 = cljs.core.first.call(null,seq__21216);
var seq__21216__$1 = cljs.core.next.call(null,seq__21216);
var new_attr__20158__auto__ = first__21217;
var kids__20159__auto__ = seq__21216__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tspan","tspan",-1557853197)], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"tspan","tspan",-1557853197);
return webjunk.svg.textlike;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.svg.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.tspan.cljs$lang$applyTo = (function (seq21214){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21214));
}));

webjunk.svg.foreignObject = (function webjunk$svg$foreignObject(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21227 = arguments.length;
var i__4737__auto___21228 = (0);
while(true){
if((i__4737__auto___21228 < len__4736__auto___21227)){
args__4742__auto__.push((arguments[i__4737__auto___21228]));

var G__21229 = (i__4737__auto___21228 + (1));
i__4737__auto___21228 = G__21229;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.svg.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.svg.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21222 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var seq__21223 = cljs.core.seq.call(null,vec__21222);
var first__21224 = cljs.core.first.call(null,seq__21223);
var seq__21223__$1 = cljs.core.next.call(null,seq__21223);
var attr = first__21224;
var children = seq__21223__$1;
var map__21225 = attr;
var map__21225__$1 = (((((!((map__21225 == null))))?(((((map__21225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21225):map__21225);
var z = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var dz = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"dz","dz",887240762));
var intercepted__20131__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([dz,z]);
var attr__$1 = cljs.core.apply.call(null,cljs.core.dissoc,attr,intercepted__20131__auto__);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),cljs.core.merge.call(null,attr__$1,(cljs.core.truth_(z)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),z.call(null,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),z.call(null,(1))], null):null),(cljs.core.truth_(dz)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),dz.call(null,(0)),new cljs.core.Keyword(null,"height","height",1025178622),dz.call(null,(1))], null):null)),children], null);
}));

(webjunk.svg.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.svg.foreignObject.cljs$lang$applyTo = (function (seq21221){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21221));
}));


//# sourceMappingURL=svg.js.map
