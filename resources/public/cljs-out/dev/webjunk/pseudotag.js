// Compiled by ClojureScript 1.10.773 {}
goog.provide('webjunk.pseudotag');
goog.require('cljs.core');
webjunk.pseudotag.str_space = (function webjunk$pseudotag$str_space(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20170 = arguments.length;
var i__4737__auto___20171 = (0);
while(true){
if((i__4737__auto___20171 < len__4736__auto___20170)){
args__4742__auto__.push((arguments[i__4737__auto___20171]));

var G__20172 = (i__4737__auto___20171 + (1));
i__4737__auto___20171 = G__20172;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic = (function (rest){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.filter.call(null,cljs.core.identity,rest)));
}));

(webjunk.pseudotag.str_space.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.pseudotag.str_space.cljs$lang$applyTo = (function (seq20169){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20169));
}));

var ret__4785__auto___20181 = (function (){
/**
 * This macro destructures `destrs` from `val`, collecting the
 *   keywords it destructured on into `tracker`. This is useful so pseudotags
 *   can intercept new attributes without passing them to a real tag.
 */
webjunk.pseudotag.destructure_track = (function webjunk$pseudotag$destructure_track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20182 = arguments.length;
var i__4737__auto___20183 = (0);
while(true){
if((i__4737__auto___20183 < len__4736__auto___20182)){
args__4742__auto__.push((arguments[i__4737__auto___20183]));

var G__20184 = (i__4737__auto___20183 + (1));
i__4737__auto___20183 = G__20184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return webjunk.pseudotag.destructure_track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(webjunk.pseudotag.destructure_track.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20177,body){
var vec__20178 = p__20177;
var destrs = cljs.core.nth.call(null,vec__20178,(0),null);
var val = cljs.core.nth.call(null,vec__20178,(1),null);
var tracker = cljs.core.nth.call(null,vec__20178,(2),null);
var key_binds = cljs.core.concat.call(null,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(destrs),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(destrs),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(destrs));
var plain_binds = cljs.core.map.call(null,destrs,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,cljs.core.keys.call(null,destrs)));
var all_keys = cljs.core.concat.call(null,key_binds,plain_binds);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,destrs,null,(1),null)),(new cljs.core.List(null,val,null,(1),null)),(new cljs.core.List(null,tracker,null,(1),null)),(new cljs.core.List(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_keys),null,(1),null)))))),null,(1),null)),body)));
}));

(webjunk.pseudotag.destructure_track.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(webjunk.pseudotag.destructure_track.cljs$lang$applyTo = (function (seq20173){
var G__20174 = cljs.core.first.call(null,seq20173);
var seq20173__$1 = cljs.core.next.call(null,seq20173);
var G__20175 = cljs.core.first.call(null,seq20173__$1);
var seq20173__$2 = cljs.core.next.call(null,seq20173__$1);
var G__20176 = cljs.core.first.call(null,seq20173__$2);
var seq20173__$3 = cljs.core.next.call(null,seq20173__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20174,G__20175,G__20176,seq20173__$3);
}));

return null;
})()
;
(webjunk.pseudotag.destructure_track.cljs$lang$macro = true);

var ret__4785__auto___20194 = (function (){
/**
 * Let-dissoc creates a let with map destructuring and dissocs the
 *   keys it grabbed from the map.
 */
webjunk.pseudotag.let_dissoc = (function webjunk$pseudotag$let_dissoc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20195 = arguments.length;
var i__4737__auto___20196 = (0);
while(true){
if((i__4737__auto___20196 < len__4736__auto___20195)){
args__4742__auto__.push((arguments[i__4737__auto___20196]));

var G__20197 = (i__4737__auto___20196 + (1));
i__4737__auto___20196 = G__20197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return webjunk.pseudotag.let_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(webjunk.pseudotag.let_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20190,body){
var vec__20191 = p__20190;
var destrs = cljs.core.nth.call(null,vec__20191,(0),null);
var the_map = cljs.core.nth.call(null,vec__20191,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","destructure-track","webjunk.pseudotag/destructure-track",1312834838,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,destrs,null,(1),null)),(new cljs.core.List(null,the_map,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"intercepted__20185__auto__","intercepted__20185__auto__",-1252185927,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,the_map,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,the_map,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"intercepted__20185__auto__","intercepted__20185__auto__",-1252185927,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(webjunk.pseudotag.let_dissoc.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(webjunk.pseudotag.let_dissoc.cljs$lang$applyTo = (function (seq20186){
var G__20187 = cljs.core.first.call(null,seq20186);
var seq20186__$1 = cljs.core.next.call(null,seq20186);
var G__20188 = cljs.core.first.call(null,seq20186__$1);
var seq20186__$2 = cljs.core.next.call(null,seq20186__$1);
var G__20189 = cljs.core.first.call(null,seq20186__$2);
var seq20186__$3 = cljs.core.next.call(null,seq20186__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20187,G__20188,G__20189,seq20186__$3);
}));

return null;
})()
;
(webjunk.pseudotag.let_dissoc.cljs$lang$macro = true);

webjunk.pseudotag.attr_merge = (function webjunk$pseudotag$attr_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20199 = arguments.length;
var i__4737__auto___20200 = (0);
while(true){
if((i__4737__auto___20200 < len__4736__auto___20199)){
args__4742__auto__.push((arguments[i__4737__auto___20200]));

var G__20201 = (i__4737__auto___20200 + (1));
i__4737__auto___20200 = G__20201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic = (function (attrs){
return cljs.core.apply.call(null,cljs.core.merge_with,webjunk.pseudotag.str_space,attrs);
}));

(webjunk.pseudotag.attr_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.pseudotag.attr_merge.cljs$lang$applyTo = (function (seq20198){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20198));
}));

webjunk.pseudotag.attr_QMARK_ = (function webjunk$pseudotag$attr_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.record_QMARK_.call(null,x)))));
});
webjunk.pseudotag.ensure_attr = (function webjunk$pseudotag$ensure_attr(lst){
if(webjunk.pseudotag.attr_QMARK_.call(null,cljs.core.first.call(null,lst))){
return lst;
} else {
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,lst);
}
});
webjunk.pseudotag.real_tag_QMARK_ = cljs.core.keyword_QMARK_;
webjunk.pseudotag.ptag_call = (function webjunk$pseudotag$ptag_call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20204 = arguments.length;
var i__4737__auto___20205 = (0);
while(true){
if((i__4737__auto___20205 < len__4736__auto___20204)){
args__4742__auto__.push((arguments[i__4737__auto___20205]));

var G__20206 = (i__4737__auto___20205 + (1));
i__4737__auto___20205 = G__20206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.pseudotag.ptag_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.pseudotag.ptag_call.cljs$core$IFn$_invoke$arity$variadic = (function (ptag,args){
if(cljs.core.truth_(webjunk.pseudotag.real_tag_QMARK_.call(null,ptag))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ptag], null),args);
} else {
return cljs.core.apply.call(null,ptag,args);
}
}));

(webjunk.pseudotag.ptag_call.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.pseudotag.ptag_call.cljs$lang$applyTo = (function (seq20202){
var G__20203 = cljs.core.first.call(null,seq20202);
var seq20202__$1 = cljs.core.next.call(null,seq20202);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20203,seq20202__$1);
}));

webjunk.pseudotag.ptag_apply = (function webjunk$pseudotag$ptag_apply(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20209 = arguments.length;
var i__4737__auto___20210 = (0);
while(true){
if((i__4737__auto___20210 < len__4736__auto___20209)){
args__4742__auto__.push((arguments[i__4737__auto___20210]));

var G__20211 = (i__4737__auto___20210 + (1));
i__4737__auto___20210 = G__20211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic = (function (ptag,args){
return cljs.core.apply.call(null,cljs.core.apply,webjunk.pseudotag.ptag_call,ptag,args);
}));

(webjunk.pseudotag.ptag_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.pseudotag.ptag_apply.cljs$lang$applyTo = (function (seq20207){
var G__20208 = cljs.core.first.call(null,seq20207);
var seq20207__$1 = cljs.core.next.call(null,seq20207);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20208,seq20207__$1);
}));

var ret__4785__auto___20223 = (function (){
webjunk.pseudotag.deftagfn = (function webjunk$pseudotag$deftagfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20224 = arguments.length;
var i__4737__auto___20225 = (0);
while(true){
if((i__4737__auto___20225 < len__4736__auto___20224)){
args__4742__auto__.push((arguments[i__4737__auto___20225]));

var G__20226 = (i__4737__auto___20225 + (1));
i__4737__auto___20225 = G__20226;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return webjunk.pseudotag.deftagfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(webjunk.pseudotag.deftagfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,attr,p__20219,body){
var vec__20220 = p__20219;
var seq__20221 = cljs.core.seq.call(null,vec__20220);
var formal_args = seq__20221;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword("style","indent","style/indent",-39468490),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"defn","defn",-1766542329),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","attributes?","webjunk.pseudotag/attributes?",1408242020,null),null,(1),null)),formal_args)))),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__20212__auto__","args__20212__auto__",-284894991,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,attr,null,(1),null)),formal_args)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","ensure-attr","webjunk.pseudotag/ensure-attr",1143503322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__20212__auto__","args__20212__auto__",-284894991,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),body))),null,(1),null)))));
}));

(webjunk.pseudotag.deftagfn.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(webjunk.pseudotag.deftagfn.cljs$lang$applyTo = (function (seq20213){
var G__20214 = cljs.core.first.call(null,seq20213);
var seq20213__$1 = cljs.core.next.call(null,seq20213);
var G__20215 = cljs.core.first.call(null,seq20213__$1);
var seq20213__$2 = cljs.core.next.call(null,seq20213__$1);
var G__20216 = cljs.core.first.call(null,seq20213__$2);
var seq20213__$3 = cljs.core.next.call(null,seq20213__$2);
var G__20217 = cljs.core.first.call(null,seq20213__$3);
var seq20213__$4 = cljs.core.next.call(null,seq20213__$3);
var G__20218 = cljs.core.first.call(null,seq20213__$4);
var seq20213__$5 = cljs.core.next.call(null,seq20213__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20214,G__20215,G__20216,G__20217,G__20218,seq20213__$5);
}));

return null;
})()
;
(webjunk.pseudotag.deftagfn.cljs$lang$macro = true);

var ret__4785__auto___20232 = /**
 * The macro `deftag` defines a pseudo-tag (a function that acts like a
 *   hiccup tag). The symbol % refers to `tagname` as a string in the
 *   `init-attr` map and a keyword in `base-tag`
 */
webjunk.pseudotag.deftag = (function webjunk$pseudotag$deftag(_AMPERSAND_form,_AMPERSAND_env,tagname,init_attr,base_tag){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"attributes?","attributes?",1112579262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"children*","children*",567872114,null),null,(1),null)))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("style","indent","style/indent",-39468490),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"defn","defn",-1766542329),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__20227__auto__","args__20227__auto__",953529472,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name.call(null,tagname),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"new-attr__20228__auto__","new-attr__20228__auto__",1207105654,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"kids__20229__auto__","kids__20229__auto__",-1197581331,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","ensure-attr","webjunk.pseudotag/ensure-attr",1143503322,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__20227__auto__","args__20227__auto__",953529472,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"attr__20230__auto__","attr__20230__auto__",-1626176826,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","attr-merge","webjunk.pseudotag/attr-merge",1511292357,null),null,(1),null)),(new cljs.core.List(null,init_attr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-attr__20228__auto__","new-attr__20228__auto__",1207105654,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"desugared-base-tag__20231__auto__","desugared-base-tag__20231__auto__",1251469791,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null),cljs.core.keyword.call(null,tagname)], null),null,(1),null)),(new cljs.core.List(null,base_tag,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.pseudotag","ptag-apply","webjunk.pseudotag/ptag-apply",519722617,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"desugared-base-tag__20231__auto__","desugared-base-tag__20231__auto__",1251469791,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"attr__20230__auto__","attr__20230__auto__",-1626176826,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"kids__20229__auto__","kids__20229__auto__",-1197581331,null),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});
(webjunk.pseudotag.deftag.cljs$lang$macro = true);


//# sourceMappingURL=pseudotag.js.map
