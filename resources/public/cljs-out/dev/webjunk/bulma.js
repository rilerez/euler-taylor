// Compiled by ClojureScript 1.10.773 {}
goog.provide('webjunk.bulma');
goog.require('cljs.core');
goog.require('webjunk.pseudotag');
var ret__4785__auto___20934 = (function (){
webjunk.bulma.aif = (function webjunk$bulma$aif(var_args){
var G__20933 = arguments.length;
switch (G__20933) {
case 4:
return webjunk.bulma.aif.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return webjunk.bulma.aif.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(webjunk.bulma.aif.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("webjunk.bulma","aif","webjunk.bulma/aif",220318770,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(webjunk.bulma.aif.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"it","it",-1630841225,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)))));
}));

(webjunk.bulma.aif.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(webjunk.bulma.aif.cljs$lang$macro = true);

webjunk.bulma.charset_utf8 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"charset","charset",-1063822193),"utf-8"], null)], null);
webjunk.bulma.font_awesome_tag = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defer","defer",-40276405),true,new cljs.core.Keyword(null,"src","src",-1651076051),"https://use.fontawesome.com/releases/v5.14.0/js/all.js"], null)], null);
webjunk.bulma.responsive_tag = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width=device-width, initial-scale=1"], null)], null);
/**
 * Control is a pseudotag that constructs a `div` (tag can be overridden) with
 *   Bulma's control class. It also knows about icons. The attribute
 *   `:left-icon-class` and `:right-icon-class` generate the respective icon
 *   spans. The attribute `:both-icon-class` applies to every icon generated.
 *   The `:tag` attribute overrides the outermost tag `control` constructs
 *   (defaults to `:div`).
 */
webjunk.bulma.control = (function webjunk$bulma$control(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20942 = arguments.length;
var i__4737__auto___20943 = (0);
while(true){
if((i__4737__auto___20943 < len__4736__auto___20942)){
args__4742__auto__.push((arguments[i__4737__auto___20943]));

var G__20944 = (i__4737__auto___20943 + (1));
i__4737__auto___20943 = G__20944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.control.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.control.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__20937 = webjunk.pseudotag.ensure_attr.call(null,args);
var seq__20938 = cljs.core.seq.call(null,vec__20937);
var first__20939 = cljs.core.first.call(null,seq__20938);
var seq__20938__$1 = cljs.core.next.call(null,seq__20938);
var attr = first__20939;
var children = seq__20938__$1;
var map__20940 = attr;
var map__20940__$1 = (((((!((map__20940 == null))))?(((((map__20940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20940):map__20940);
var class$ = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var left_icon_class = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"left-icon-class","left-icon-class",-1132510913));
var right_icon_class = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"right-icon-class","right-icon-class",-2125353185));
var both_icon_class = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"both-icon-class","both-icon-class",2075343213));
var tag = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632));
var intercepted__20131__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([tag,right_icon_class,left_icon_class,both_icon_class,class$]);
var attr__$1 = cljs.core.apply.call(null,cljs.core.dissoc,attr,intercepted__20131__auto__);
var control_PLUS_class_PLUS_icon = webjunk.pseudotag.str_space.call(null,"control",class$,(cljs.core.truth_(left_icon_class)?"has-icons-left":null),(cljs.core.truth_(right_icon_class)?"has-icons-right":null));
return webjunk.pseudotag.ptag_apply.call(null,tag,cljs.core.assoc.call(null,attr__$1,new cljs.core.Keyword(null,"class","class",-2030961996),control_PLUS_class_PLUS_icon),(function (){var temp__5718__auto__ = left_icon_class;
if(cljs.core.truth_(temp__5718__auto__)){
var it = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-left","span.icon.is-left",-120713916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),webjunk.pseudotag.str_space.call(null,both_icon_class,it)], null)], null)], null);
} else {
return null;
}
})(),(function (){var temp__5718__auto__ = right_icon_class;
if(cljs.core.truth_(temp__5718__auto__)){
var it = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-right","span.icon.is-right",-316829691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),webjunk.pseudotag.str_space.call(null,both_icon_class,it)], null)], null)], null);
} else {
return null;
}
})(),children);
}));

(webjunk.bulma.control.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.control.cljs$lang$applyTo = (function (seq20936){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20936));
}));

webjunk.bulma.columns = (function webjunk$bulma$columns(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20949 = arguments.length;
var i__4737__auto___20950 = (0);
while(true){
if((i__4737__auto___20950 < len__4736__auto___20949)){
args__4742__auto__.push((arguments[i__4737__auto___20950]));

var G__20951 = (i__4737__auto___20950 + (1));
i__4737__auto___20950 = G__20951;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.columns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.columns.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "columns";
var vec__20946 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20947 = cljs.core.seq.call(null,vec__20946);
var first__20948 = cljs.core.first.call(null,seq__20947);
var seq__20947__$1 = cljs.core.next.call(null,seq__20947);
var new_attr__20158__auto__ = first__20948;
var kids__20159__auto__ = seq__20947__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"columns","columns",1998437288);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.columns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.columns.cljs$lang$applyTo = (function (seq20945){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20945));
}));

webjunk.bulma.column = (function webjunk$bulma$column(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20956 = arguments.length;
var i__4737__auto___20957 = (0);
while(true){
if((i__4737__auto___20957 < len__4736__auto___20956)){
args__4742__auto__.push((arguments[i__4737__auto___20957]));

var G__20958 = (i__4737__auto___20957 + (1));
i__4737__auto___20957 = G__20958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.column.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.column.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "column";
var vec__20953 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20954 = cljs.core.seq.call(null,vec__20953);
var first__20955 = cljs.core.first.call(null,seq__20954);
var seq__20954__$1 = cljs.core.next.call(null,seq__20954);
var new_attr__20158__auto__ = first__20955;
var kids__20159__auto__ = seq__20954__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"column","column",2078222095);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.column.cljs$lang$applyTo = (function (seq20952){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20952));
}));

webjunk.bulma.container = (function webjunk$bulma$container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20963 = arguments.length;
var i__4737__auto___20964 = (0);
while(true){
if((i__4737__auto___20964 < len__4736__auto___20963)){
args__4742__auto__.push((arguments[i__4737__auto___20964]));

var G__20965 = (i__4737__auto___20964 + (1));
i__4737__auto___20964 = G__20965;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.container.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.container.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "container";
var vec__20960 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20961 = cljs.core.seq.call(null,vec__20960);
var first__20962 = cljs.core.first.call(null,seq__20961);
var seq__20961__$1 = cljs.core.next.call(null,seq__20961);
var new_attr__20158__auto__ = first__20962;
var kids__20159__auto__ = seq__20961__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"container","container",-1736937707);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.container.cljs$lang$applyTo = (function (seq20959){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20959));
}));

webjunk.bulma.section = (function webjunk$bulma$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20970 = arguments.length;
var i__4737__auto___20971 = (0);
while(true){
if((i__4737__auto___20971 < len__4736__auto___20970)){
args__4742__auto__.push((arguments[i__4737__auto___20971]));

var G__20972 = (i__4737__auto___20971 + (1));
i__4737__auto___20971 = G__20972;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "section";
var vec__20967 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20968 = cljs.core.seq.call(null,vec__20967);
var first__20969 = cljs.core.first.call(null,seq__20968);
var seq__20968__$1 = cljs.core.next.call(null,seq__20968);
var new_attr__20158__auto__ = first__20969;
var kids__20159__auto__ = seq__20968__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"section","section",-300141526);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.section.cljs$lang$applyTo = (function (seq20966){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20966));
}));

webjunk.bulma.field = (function webjunk$bulma$field(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20977 = arguments.length;
var i__4737__auto___20978 = (0);
while(true){
if((i__4737__auto___20978 < len__4736__auto___20977)){
args__4742__auto__.push((arguments[i__4737__auto___20978]));

var G__20979 = (i__4737__auto___20978 + (1));
i__4737__auto___20978 = G__20979;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.field.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.field.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "field";
var vec__20974 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20975 = cljs.core.seq.call(null,vec__20974);
var first__20976 = cljs.core.first.call(null,seq__20975);
var seq__20975__$1 = cljs.core.next.call(null,seq__20975);
var new_attr__20158__auto__ = first__20976;
var kids__20159__auto__ = seq__20975__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"field","field",-1302436500);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.field.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.field.cljs$lang$applyTo = (function (seq20973){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20973));
}));

webjunk.bulma.label = (function webjunk$bulma$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20984 = arguments.length;
var i__4737__auto___20985 = (0);
while(true){
if((i__4737__auto___20985 < len__4736__auto___20984)){
args__4742__auto__.push((arguments[i__4737__auto___20985]));

var G__20986 = (i__4737__auto___20985 + (1));
i__4737__auto___20985 = G__20986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "label";
var vec__20981 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20982 = cljs.core.seq.call(null,vec__20981);
var first__20983 = cljs.core.first.call(null,seq__20982);
var seq__20982__$1 = cljs.core.next.call(null,seq__20982);
var new_attr__20158__auto__ = first__20983;
var kids__20159__auto__ = seq__20982__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"label","label",1718410804);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.label.cljs$lang$applyTo = (function (seq20980){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20980));
}));

webjunk.bulma.input = (function webjunk$bulma$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20991 = arguments.length;
var i__4737__auto___20992 = (0);
while(true){
if((i__4737__auto___20992 < len__4736__auto___20991)){
args__4742__auto__.push((arguments[i__4737__auto___20992]));

var G__20993 = (i__4737__auto___20992 + (1));
i__4737__auto___20992 = G__20993;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "input";
var vec__20988 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20989 = cljs.core.seq.call(null,vec__20988);
var first__20990 = cljs.core.first.call(null,seq__20989);
var seq__20989__$1 = cljs.core.next.call(null,seq__20989);
var new_attr__20158__auto__ = first__20990;
var kids__20159__auto__ = seq__20989__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"input","input",556931961);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.input.cljs$lang$applyTo = (function (seq20987){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20987));
}));

webjunk.bulma.button = (function webjunk$bulma$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20998 = arguments.length;
var i__4737__auto___20999 = (0);
while(true){
if((i__4737__auto___20999 < len__4736__auto___20998)){
args__4742__auto__.push((arguments[i__4737__auto___20999]));

var G__21000 = (i__4737__auto___20999 + (1));
i__4737__auto___20999 = G__21000;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "button";
var vec__20995 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__20996 = cljs.core.seq.call(null,vec__20995);
var first__20997 = cljs.core.first.call(null,seq__20996);
var seq__20996__$1 = cljs.core.next.call(null,seq__20996);
var new_attr__20158__auto__ = first__20997;
var kids__20159__auto__ = seq__20996__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"button","button",1456579943);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.button.cljs$lang$applyTo = (function (seq20994){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20994));
}));

webjunk.bulma.buttons = (function webjunk$bulma$buttons(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21005 = arguments.length;
var i__4737__auto___21006 = (0);
while(true){
if((i__4737__auto___21006 < len__4736__auto___21005)){
args__4742__auto__.push((arguments[i__4737__auto___21006]));

var G__21007 = (i__4737__auto___21006 + (1));
i__4737__auto___21006 = G__21007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.buttons.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.buttons.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "buttons";
var vec__21002 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21003 = cljs.core.seq.call(null,vec__21002);
var first__21004 = cljs.core.first.call(null,seq__21003);
var seq__21003__$1 = cljs.core.next.call(null,seq__21003);
var new_attr__20158__auto__ = first__21004;
var kids__20159__auto__ = seq__21003__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"buttons","buttons",-1953831197);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.buttons.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.buttons.cljs$lang$applyTo = (function (seq21001){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21001));
}));

webjunk.bulma.navbar = (function webjunk$bulma$navbar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21012 = arguments.length;
var i__4737__auto___21013 = (0);
while(true){
if((i__4737__auto___21013 < len__4736__auto___21012)){
args__4742__auto__.push((arguments[i__4737__auto___21013]));

var G__21014 = (i__4737__auto___21013 + (1));
i__4737__auto___21013 = G__21014;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar";
var vec__21009 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21010 = cljs.core.seq.call(null,vec__21009);
var first__21011 = cljs.core.first.call(null,seq__21010);
var seq__21010__$1 = cljs.core.next.call(null,seq__21010);
var new_attr__20158__auto__ = first__21011;
var kids__20159__auto__ = seq__21010__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar","navbar",1584396041);
return new cljs.core.Keyword(null,"nav","nav",719540477);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar.cljs$lang$applyTo = (function (seq21008){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21008));
}));

webjunk.bulma.navbar_brand = (function webjunk$bulma$navbar_brand(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21019 = arguments.length;
var i__4737__auto___21020 = (0);
while(true){
if((i__4737__auto___21020 < len__4736__auto___21019)){
args__4742__auto__.push((arguments[i__4737__auto___21020]));

var G__21021 = (i__4737__auto___21020 + (1));
i__4737__auto___21020 = G__21021;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_brand.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_brand.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar-brand";
var vec__21016 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21017 = cljs.core.seq.call(null,vec__21016);
var first__21018 = cljs.core.first.call(null,seq__21017);
var seq__21017__$1 = cljs.core.next.call(null,seq__21017);
var new_attr__20158__auto__ = first__21018;
var kids__20159__auto__ = seq__21017__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar-brand","navbar-brand",-1723632363);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar_brand.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_brand.cljs$lang$applyTo = (function (seq21015){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21015));
}));

webjunk.bulma.navbar_menu = (function webjunk$bulma$navbar_menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21026 = arguments.length;
var i__4737__auto___21027 = (0);
while(true){
if((i__4737__auto___21027 < len__4736__auto___21026)){
args__4742__auto__.push((arguments[i__4737__auto___21027]));

var G__21028 = (i__4737__auto___21027 + (1));
i__4737__auto___21027 = G__21028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar-menu";
var vec__21023 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21024 = cljs.core.seq.call(null,vec__21023);
var first__21025 = cljs.core.first.call(null,seq__21024);
var seq__21024__$1 = cljs.core.next.call(null,seq__21024);
var new_attr__20158__auto__ = first__21025;
var kids__20159__auto__ = seq__21024__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar-menu","navbar-menu",-1467204180);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar_menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_menu.cljs$lang$applyTo = (function (seq21022){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21022));
}));

webjunk.bulma.navbar_burger = (function webjunk$bulma$navbar_burger(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21033 = arguments.length;
var i__4737__auto___21034 = (0);
while(true){
if((i__4737__auto___21034 < len__4736__auto___21033)){
args__4742__auto__.push((arguments[i__4737__auto___21034]));

var G__21035 = (i__4737__auto___21034 + (1));
i__4737__auto___21034 = G__21035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_burger.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_burger.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21030 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attrs = cljs.core.nth.call(null,vec__21030,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-burger","div.navbar-burger",499763601),attrs,cljs.core.repeat.call(null,(3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))], null);
}));

(webjunk.bulma.navbar_burger.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_burger.cljs$lang$applyTo = (function (seq21029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21029));
}));

webjunk.bulma.navbar_start = (function webjunk$bulma$navbar_start(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21040 = arguments.length;
var i__4737__auto___21041 = (0);
while(true){
if((i__4737__auto___21041 < len__4736__auto___21040)){
args__4742__auto__.push((arguments[i__4737__auto___21041]));

var G__21042 = (i__4737__auto___21041 + (1));
i__4737__auto___21041 = G__21042;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_start.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_start.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar-start";
var vec__21037 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21038 = cljs.core.seq.call(null,vec__21037);
var first__21039 = cljs.core.first.call(null,seq__21038);
var seq__21038__$1 = cljs.core.next.call(null,seq__21038);
var new_attr__20158__auto__ = first__21039;
var kids__20159__auto__ = seq__21038__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar-start","navbar-start",555109343);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar_start.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_start.cljs$lang$applyTo = (function (seq21036){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21036));
}));

webjunk.bulma.navbar_end = (function webjunk$bulma$navbar_end(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21047 = arguments.length;
var i__4737__auto___21048 = (0);
while(true){
if((i__4737__auto___21048 < len__4736__auto___21047)){
args__4742__auto__.push((arguments[i__4737__auto___21048]));

var G__21049 = (i__4737__auto___21048 + (1));
i__4737__auto___21048 = G__21049;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_end.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_end.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar-end";
var vec__21044 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21045 = cljs.core.seq.call(null,vec__21044);
var first__21046 = cljs.core.first.call(null,seq__21045);
var seq__21045__$1 = cljs.core.next.call(null,seq__21045);
var new_attr__20158__auto__ = first__21046;
var kids__20159__auto__ = seq__21045__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar-end","navbar-end",784785159);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar_end.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_end.cljs$lang$applyTo = (function (seq21043){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21043));
}));

webjunk.bulma.navbar_item = (function webjunk$bulma$navbar_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21054 = arguments.length;
var i__4737__auto___21055 = (0);
while(true){
if((i__4737__auto___21055 < len__4736__auto___21054)){
args__4742__auto__.push((arguments[i__4737__auto___21055]));

var G__21056 = (i__4737__auto___21055 + (1));
i__4737__auto___21055 = G__21056;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_item.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "navbar-item";
var vec__21051 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21052 = cljs.core.seq.call(null,vec__21051);
var first__21053 = cljs.core.first.call(null,seq__21052);
var seq__21052__$1 = cljs.core.next.call(null,seq__21052);
var new_attr__20158__auto__ = first__21053;
var kids__20159__auto__ = seq__21052__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"navbar-item","navbar-item",-1176247970);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.navbar_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_item.cljs$lang$applyTo = (function (seq21050){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21050));
}));

webjunk.bulma.menu = (function webjunk$bulma$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21061 = arguments.length;
var i__4737__auto___21062 = (0);
while(true){
if((i__4737__auto___21062 < len__4736__auto___21061)){
args__4742__auto__.push((arguments[i__4737__auto___21062]));

var G__21063 = (i__4737__auto___21062 + (1));
i__4737__auto___21062 = G__21063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "menu";
var vec__21058 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21059 = cljs.core.seq.call(null,vec__21058);
var first__21060 = cljs.core.first.call(null,seq__21059);
var seq__21059__$1 = cljs.core.next.call(null,seq__21059);
var new_attr__20158__auto__ = first__21060;
var kids__20159__auto__ = seq__21059__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"menu","menu",352255198);
return new cljs.core.Keyword(null,"nav","nav",719540477);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.menu.cljs$lang$applyTo = (function (seq21057){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21057));
}));

webjunk.bulma.menu_list = (function webjunk$bulma$menu_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21068 = arguments.length;
var i__4737__auto___21069 = (0);
while(true){
if((i__4737__auto___21069 < len__4736__auto___21068)){
args__4742__auto__.push((arguments[i__4737__auto___21069]));

var G__21070 = (i__4737__auto___21069 + (1));
i__4737__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.menu_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.menu_list.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "menu-list";
var vec__21065 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21066 = cljs.core.seq.call(null,vec__21065);
var first__21067 = cljs.core.first.call(null,seq__21066);
var seq__21066__$1 = cljs.core.next.call(null,seq__21066);
var new_attr__20158__auto__ = first__21067;
var kids__20159__auto__ = seq__21066__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"menu-list","menu-list",2125205647);
return new cljs.core.Keyword(null,"ul","ul",-1349521403);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.menu_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.menu_list.cljs$lang$applyTo = (function (seq21064){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21064));
}));

webjunk.bulma.level = (function webjunk$bulma$level(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21075 = arguments.length;
var i__4737__auto___21076 = (0);
while(true){
if((i__4737__auto___21076 < len__4736__auto___21075)){
args__4742__auto__.push((arguments[i__4737__auto___21076]));

var G__21077 = (i__4737__auto___21076 + (1));
i__4737__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "level";
var vec__21072 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21073 = cljs.core.seq.call(null,vec__21072);
var first__21074 = cljs.core.first.call(null,seq__21073);
var seq__21073__$1 = cljs.core.next.call(null,seq__21073);
var new_attr__20158__auto__ = first__21074;
var kids__20159__auto__ = seq__21073__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"level","level",1290497552);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.level.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level.cljs$lang$applyTo = (function (seq21071){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21071));
}));

webjunk.bulma.level_left = (function webjunk$bulma$level_left(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21082 = arguments.length;
var i__4737__auto___21083 = (0);
while(true){
if((i__4737__auto___21083 < len__4736__auto___21082)){
args__4742__auto__.push((arguments[i__4737__auto___21083]));

var G__21084 = (i__4737__auto___21083 + (1));
i__4737__auto___21083 = G__21084;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_left.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_left.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "level-left";
var vec__21079 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21080 = cljs.core.seq.call(null,vec__21079);
var first__21081 = cljs.core.first.call(null,seq__21080);
var seq__21080__$1 = cljs.core.next.call(null,seq__21080);
var new_attr__20158__auto__ = first__21081;
var kids__20159__auto__ = seq__21080__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"level-left","level-left",-1409191385);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.level_left.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_left.cljs$lang$applyTo = (function (seq21078){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21078));
}));

webjunk.bulma.level_right = (function webjunk$bulma$level_right(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21089 = arguments.length;
var i__4737__auto___21090 = (0);
while(true){
if((i__4737__auto___21090 < len__4736__auto___21089)){
args__4742__auto__.push((arguments[i__4737__auto___21090]));

var G__21091 = (i__4737__auto___21090 + (1));
i__4737__auto___21090 = G__21091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_right.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_right.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "level-right";
var vec__21086 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21087 = cljs.core.seq.call(null,vec__21086);
var first__21088 = cljs.core.first.call(null,seq__21087);
var seq__21087__$1 = cljs.core.next.call(null,seq__21087);
var new_attr__20158__auto__ = first__21088;
var kids__20159__auto__ = seq__21087__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"level-right","level-right",-1849748346);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.level_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_right.cljs$lang$applyTo = (function (seq21085){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21085));
}));

webjunk.bulma.level_item = (function webjunk$bulma$level_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21096 = arguments.length;
var i__4737__auto___21097 = (0);
while(true){
if((i__4737__auto___21097 < len__4736__auto___21096)){
args__4742__auto__.push((arguments[i__4737__auto___21097]));

var G__21098 = (i__4737__auto___21097 + (1));
i__4737__auto___21097 = G__21098;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_item.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "level-item";
var vec__21093 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21094 = cljs.core.seq.call(null,vec__21093);
var first__21095 = cljs.core.first.call(null,seq__21094);
var seq__21094__$1 = cljs.core.next.call(null,seq__21094);
var new_attr__20158__auto__ = first__21095;
var kids__20159__auto__ = seq__21094__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"level-item","level-item",-563309621);
return new cljs.core.Keyword(null,"div","div",1057191632);
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.level_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_item.cljs$lang$applyTo = (function (seq21092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21092));
}));

webjunk.bulma.textarea = (function webjunk$bulma$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21103 = arguments.length;
var i__4737__auto___21104 = (0);
while(true){
if((i__4737__auto___21104 < len__4736__auto___21103)){
args__4742__auto__.push((arguments[i__4737__auto___21104]));

var G__21105 = (i__4737__auto___21104 + (1));
i__4737__auto___21104 = G__21105;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "textarea";
var vec__21100 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21101 = cljs.core.seq.call(null,vec__21100);
var first__21102 = cljs.core.first.call(null,seq__21101);
var seq__21101__$1 = cljs.core.next.call(null,seq__21101);
var new_attr__20158__auto__ = first__21102;
var kids__20159__auto__ = seq__21101__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"textarea","textarea",-650375824);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.textarea.cljs$lang$applyTo = (function (seq21099){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21099));
}));

webjunk.bulma.table = (function webjunk$bulma$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21110 = arguments.length;
var i__4737__auto___21111 = (0);
while(true){
if((i__4737__auto___21111 < len__4736__auto___21110)){
args__4742__auto__.push((arguments[i__4737__auto___21111]));

var G__21112 = (i__4737__auto___21111 + (1));
i__4737__auto___21111 = G__21112;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__20157__auto__){
var _PERCENT_ = "table";
var vec__21107 = webjunk.pseudotag.ensure_attr.call(null,args__20157__auto__);
var seq__21108 = cljs.core.seq.call(null,vec__21107);
var first__21109 = cljs.core.first.call(null,seq__21108);
var seq__21108__$1 = cljs.core.next.call(null,seq__21108);
var new_attr__20158__auto__ = first__21109;
var kids__20159__auto__ = seq__21108__$1;
var attr__20160__auto__ = webjunk.pseudotag.attr_merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),_PERCENT_], null),new_attr__20158__auto__);
var desugared_base_tag__20161__auto__ = (function (){var _PERCENT___$1 = new cljs.core.Keyword(null,"table","table",-564943036);
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.call(null,desugared_base_tag__20161__auto__,attr__20160__auto__,kids__20159__auto__);
}));

(webjunk.bulma.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.table.cljs$lang$applyTo = (function (seq21106){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21106));
}));

webjunk.bulma.select = (function webjunk$bulma$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21117 = arguments.length;
var i__4737__auto___21118 = (0);
while(true){
if((i__4737__auto___21118 < len__4736__auto___21117)){
args__4742__auto__.push((arguments[i__4737__auto___21118]));

var G__21119 = (i__4737__auto___21118 + (1));
i__4737__auto___21118 = G__21119;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__21114 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var seq__21115 = cljs.core.seq.call(null,vec__21114);
var first__21116 = cljs.core.first.call(null,seq__21115);
var seq__21115__$1 = cljs.core.next.call(null,seq__21115);
var attr = first__21116;
var options = seq__21115__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select","div.select",1512138448),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),attr,options], null)], null);
}));

(webjunk.bulma.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.select.cljs$lang$applyTo = (function (seq21113){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21113));
}));


//# sourceMappingURL=bulma.js.map
