// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('webjunk.bulma');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('webjunk.pseudotag');
var ret__4785__auto___7797 = (function (){
webjunk.bulma.aif = (function webjunk$bulma$aif(var_args){
var G__7796 = arguments.length;
switch (G__7796) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$webjunk$bulma_SLASH_aif,null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(webjunk.bulma.aif.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_if_DASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$it,null,(1),null)),(new cljs.core.List(null,test,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0))));
}));

(webjunk.bulma.aif.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(webjunk.bulma.aif.cljs$lang$macro = true);

webjunk.bulma.charset_utf8 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$charset,"utf-8"], null)], null);
webjunk.bulma.font_awesome_tag = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$script,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$defer,true,cljs.core.cst$kw$src,"https://use.fontawesome.com/releases/v5.14.0/js/all.js"], null)], null);
webjunk.bulma.responsive_tag = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"viewport",cljs.core.cst$kw$content,"width=device-width, initial-scale=1"], null)], null);
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
var len__4736__auto___7805 = arguments.length;
var i__4737__auto___7806 = (0);
while(true){
if((i__4737__auto___7806 < len__4736__auto___7805)){
args__4742__auto__.push((arguments[i__4737__auto___7806]));

var G__7807 = (i__4737__auto___7806 + (1));
i__4737__auto___7806 = G__7807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.control.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.control.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7800 = webjunk.pseudotag.ensure_attr(args);
var seq__7801 = cljs.core.seq(vec__7800);
var first__7802 = cljs.core.first(seq__7801);
var seq__7801__$1 = cljs.core.next(seq__7801);
var attr = first__7802;
var children = seq__7801__$1;
var map__7803 = attr;
var map__7803__$1 = (((((!((map__7803 == null))))?(((((map__7803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7803):map__7803);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$class);
var left_icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$left_DASH_icon_DASH_class);
var right_icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$right_DASH_icon_DASH_class);
var both_icon_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$both_DASH_icon_DASH_class);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7803__$1,cljs.core.cst$kw$tag,cljs.core.cst$kw$div);
var intercepted__5431__auto__ = cljs.core.PersistentHashSet.createAsIfByAssoc([tag,right_icon_class,left_icon_class,both_icon_class,class$]);
var attr__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,attr,intercepted__5431__auto__);
var control_PLUS_class_PLUS_icon = webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["control",class$,(cljs.core.truth_(left_icon_class)?"has-icons-left":null),(cljs.core.truth_(right_icon_class)?"has-icons-right":null)], 0));
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr__$1,cljs.core.cst$kw$class,control_PLUS_class_PLUS_icon),(function (){var temp__5718__auto__ = left_icon_class;
if(cljs.core.truth_(temp__5718__auto__)){
var it = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon$is_DASH_left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([both_icon_class,it], 0))], null)], null)], null);
} else {
return null;
}
})(),(function (){var temp__5718__auto__ = right_icon_class;
if(cljs.core.truth_(temp__5718__auto__)){
var it = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon$is_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,webjunk.pseudotag.str_space.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([both_icon_class,it], 0))], null)], null)], null);
} else {
return null;
}
})(),children], 0));
}));

(webjunk.bulma.control.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.control.cljs$lang$applyTo = (function (seq7799){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7799));
}));

webjunk.bulma.columns = (function webjunk$bulma$columns(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7812 = arguments.length;
var i__4737__auto___7813 = (0);
while(true){
if((i__4737__auto___7813 < len__4736__auto___7812)){
args__4742__auto__.push((arguments[i__4737__auto___7813]));

var G__7814 = (i__4737__auto___7813 + (1));
i__4737__auto___7813 = G__7814;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.columns.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.columns.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "columns";
var vec__7809 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7810 = cljs.core.seq(vec__7809);
var first__7811 = cljs.core.first(seq__7810);
var seq__7810__$1 = cljs.core.next(seq__7810);
var new_attr__5458__auto__ = first__7811;
var kids__5459__auto__ = seq__7810__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$columns;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.columns.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.columns.cljs$lang$applyTo = (function (seq7808){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7808));
}));

webjunk.bulma.column = (function webjunk$bulma$column(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7819 = arguments.length;
var i__4737__auto___7820 = (0);
while(true){
if((i__4737__auto___7820 < len__4736__auto___7819)){
args__4742__auto__.push((arguments[i__4737__auto___7820]));

var G__7821 = (i__4737__auto___7820 + (1));
i__4737__auto___7820 = G__7821;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.column.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.column.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "column";
var vec__7816 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7817 = cljs.core.seq(vec__7816);
var first__7818 = cljs.core.first(seq__7817);
var seq__7817__$1 = cljs.core.next(seq__7817);
var new_attr__5458__auto__ = first__7818;
var kids__5459__auto__ = seq__7817__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$column;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.column.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.column.cljs$lang$applyTo = (function (seq7815){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7815));
}));

webjunk.bulma.container = (function webjunk$bulma$container(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7826 = arguments.length;
var i__4737__auto___7827 = (0);
while(true){
if((i__4737__auto___7827 < len__4736__auto___7826)){
args__4742__auto__.push((arguments[i__4737__auto___7827]));

var G__7828 = (i__4737__auto___7827 + (1));
i__4737__auto___7827 = G__7828;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.container.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.container.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "container";
var vec__7823 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7824 = cljs.core.seq(vec__7823);
var first__7825 = cljs.core.first(seq__7824);
var seq__7824__$1 = cljs.core.next(seq__7824);
var new_attr__5458__auto__ = first__7825;
var kids__5459__auto__ = seq__7824__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$container;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.container.cljs$lang$applyTo = (function (seq7822){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7822));
}));

webjunk.bulma.section = (function webjunk$bulma$section(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7833 = arguments.length;
var i__4737__auto___7834 = (0);
while(true){
if((i__4737__auto___7834 < len__4736__auto___7833)){
args__4742__auto__.push((arguments[i__4737__auto___7834]));

var G__7835 = (i__4737__auto___7834 + (1));
i__4737__auto___7834 = G__7835;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "section";
var vec__7830 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7831 = cljs.core.seq(vec__7830);
var first__7832 = cljs.core.first(seq__7831);
var seq__7831__$1 = cljs.core.next(seq__7831);
var new_attr__5458__auto__ = first__7832;
var kids__5459__auto__ = seq__7831__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$section;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.section.cljs$lang$applyTo = (function (seq7829){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7829));
}));

webjunk.bulma.field = (function webjunk$bulma$field(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7840 = arguments.length;
var i__4737__auto___7841 = (0);
while(true){
if((i__4737__auto___7841 < len__4736__auto___7840)){
args__4742__auto__.push((arguments[i__4737__auto___7841]));

var G__7842 = (i__4737__auto___7841 + (1));
i__4737__auto___7841 = G__7842;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.field.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.field.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "field";
var vec__7837 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7838 = cljs.core.seq(vec__7837);
var first__7839 = cljs.core.first(seq__7838);
var seq__7838__$1 = cljs.core.next(seq__7838);
var new_attr__5458__auto__ = first__7839;
var kids__5459__auto__ = seq__7838__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$field;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.field.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.field.cljs$lang$applyTo = (function (seq7836){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7836));
}));

webjunk.bulma.label = (function webjunk$bulma$label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7847 = arguments.length;
var i__4737__auto___7848 = (0);
while(true){
if((i__4737__auto___7848 < len__4736__auto___7847)){
args__4742__auto__.push((arguments[i__4737__auto___7848]));

var G__7849 = (i__4737__auto___7848 + (1));
i__4737__auto___7848 = G__7849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "label";
var vec__7844 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7845 = cljs.core.seq(vec__7844);
var first__7846 = cljs.core.first(seq__7845);
var seq__7845__$1 = cljs.core.next(seq__7845);
var new_attr__5458__auto__ = first__7846;
var kids__5459__auto__ = seq__7845__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$label;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.label.cljs$lang$applyTo = (function (seq7843){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7843));
}));

webjunk.bulma.input = (function webjunk$bulma$input(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7854 = arguments.length;
var i__4737__auto___7855 = (0);
while(true){
if((i__4737__auto___7855 < len__4736__auto___7854)){
args__4742__auto__.push((arguments[i__4737__auto___7855]));

var G__7856 = (i__4737__auto___7855 + (1));
i__4737__auto___7855 = G__7856;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "input";
var vec__7851 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7852 = cljs.core.seq(vec__7851);
var first__7853 = cljs.core.first(seq__7852);
var seq__7852__$1 = cljs.core.next(seq__7852);
var new_attr__5458__auto__ = first__7853;
var kids__5459__auto__ = seq__7852__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$input;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.input.cljs$lang$applyTo = (function (seq7850){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7850));
}));

webjunk.bulma.button = (function webjunk$bulma$button(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7861 = arguments.length;
var i__4737__auto___7862 = (0);
while(true){
if((i__4737__auto___7862 < len__4736__auto___7861)){
args__4742__auto__.push((arguments[i__4737__auto___7862]));

var G__7863 = (i__4737__auto___7862 + (1));
i__4737__auto___7862 = G__7863;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "button";
var vec__7858 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7859 = cljs.core.seq(vec__7858);
var first__7860 = cljs.core.first(seq__7859);
var seq__7859__$1 = cljs.core.next(seq__7859);
var new_attr__5458__auto__ = first__7860;
var kids__5459__auto__ = seq__7859__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$button;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.button.cljs$lang$applyTo = (function (seq7857){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7857));
}));

webjunk.bulma.buttons = (function webjunk$bulma$buttons(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7868 = arguments.length;
var i__4737__auto___7869 = (0);
while(true){
if((i__4737__auto___7869 < len__4736__auto___7868)){
args__4742__auto__.push((arguments[i__4737__auto___7869]));

var G__7870 = (i__4737__auto___7869 + (1));
i__4737__auto___7869 = G__7870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.buttons.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.buttons.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "buttons";
var vec__7865 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7866 = cljs.core.seq(vec__7865);
var first__7867 = cljs.core.first(seq__7866);
var seq__7866__$1 = cljs.core.next(seq__7866);
var new_attr__5458__auto__ = first__7867;
var kids__5459__auto__ = seq__7866__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$buttons;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.buttons.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.buttons.cljs$lang$applyTo = (function (seq7864){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7864));
}));

webjunk.bulma.navbar = (function webjunk$bulma$navbar(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7875 = arguments.length;
var i__4737__auto___7876 = (0);
while(true){
if((i__4737__auto___7876 < len__4736__auto___7875)){
args__4742__auto__.push((arguments[i__4737__auto___7876]));

var G__7877 = (i__4737__auto___7876 + (1));
i__4737__auto___7876 = G__7877;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar";
var vec__7872 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7873 = cljs.core.seq(vec__7872);
var first__7874 = cljs.core.first(seq__7873);
var seq__7873__$1 = cljs.core.next(seq__7873);
var new_attr__5458__auto__ = first__7874;
var kids__5459__auto__ = seq__7873__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar;
return cljs.core.cst$kw$nav;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar.cljs$lang$applyTo = (function (seq7871){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7871));
}));

webjunk.bulma.navbar_brand = (function webjunk$bulma$navbar_brand(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7882 = arguments.length;
var i__4737__auto___7883 = (0);
while(true){
if((i__4737__auto___7883 < len__4736__auto___7882)){
args__4742__auto__.push((arguments[i__4737__auto___7883]));

var G__7884 = (i__4737__auto___7883 + (1));
i__4737__auto___7883 = G__7884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_brand.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_brand.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar-brand";
var vec__7879 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7880 = cljs.core.seq(vec__7879);
var first__7881 = cljs.core.first(seq__7880);
var seq__7880__$1 = cljs.core.next(seq__7880);
var new_attr__5458__auto__ = first__7881;
var kids__5459__auto__ = seq__7880__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar_DASH_brand;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar_brand.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_brand.cljs$lang$applyTo = (function (seq7878){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7878));
}));

webjunk.bulma.navbar_menu = (function webjunk$bulma$navbar_menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7889 = arguments.length;
var i__4737__auto___7890 = (0);
while(true){
if((i__4737__auto___7890 < len__4736__auto___7889)){
args__4742__auto__.push((arguments[i__4737__auto___7890]));

var G__7891 = (i__4737__auto___7890 + (1));
i__4737__auto___7890 = G__7891;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar-menu";
var vec__7886 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7887 = cljs.core.seq(vec__7886);
var first__7888 = cljs.core.first(seq__7887);
var seq__7887__$1 = cljs.core.next(seq__7887);
var new_attr__5458__auto__ = first__7888;
var kids__5459__auto__ = seq__7887__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar_DASH_menu;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar_menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_menu.cljs$lang$applyTo = (function (seq7885){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7885));
}));

webjunk.bulma.navbar_burger = (function webjunk$bulma$navbar_burger(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7896 = arguments.length;
var i__4737__auto___7897 = (0);
while(true){
if((i__4737__auto___7897 < len__4736__auto___7896)){
args__4742__auto__.push((arguments[i__4737__auto___7897]));

var G__7898 = (i__4737__auto___7897 + (1));
i__4737__auto___7897 = G__7898;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_burger.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_burger.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__7893 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7893,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_burger,attrs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span], null))], null);
}));

(webjunk.bulma.navbar_burger.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_burger.cljs$lang$applyTo = (function (seq7892){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7892));
}));

webjunk.bulma.navbar_start = (function webjunk$bulma$navbar_start(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7903 = arguments.length;
var i__4737__auto___7904 = (0);
while(true){
if((i__4737__auto___7904 < len__4736__auto___7903)){
args__4742__auto__.push((arguments[i__4737__auto___7904]));

var G__7905 = (i__4737__auto___7904 + (1));
i__4737__auto___7904 = G__7905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_start.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_start.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar-start";
var vec__7900 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7901 = cljs.core.seq(vec__7900);
var first__7902 = cljs.core.first(seq__7901);
var seq__7901__$1 = cljs.core.next(seq__7901);
var new_attr__5458__auto__ = first__7902;
var kids__5459__auto__ = seq__7901__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar_DASH_start;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar_start.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_start.cljs$lang$applyTo = (function (seq7899){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7899));
}));

webjunk.bulma.navbar_end = (function webjunk$bulma$navbar_end(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7910 = arguments.length;
var i__4737__auto___7911 = (0);
while(true){
if((i__4737__auto___7911 < len__4736__auto___7910)){
args__4742__auto__.push((arguments[i__4737__auto___7911]));

var G__7912 = (i__4737__auto___7911 + (1));
i__4737__auto___7911 = G__7912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_end.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_end.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar-end";
var vec__7907 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7908 = cljs.core.seq(vec__7907);
var first__7909 = cljs.core.first(seq__7908);
var seq__7908__$1 = cljs.core.next(seq__7908);
var new_attr__5458__auto__ = first__7909;
var kids__5459__auto__ = seq__7908__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar_DASH_end;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar_end.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_end.cljs$lang$applyTo = (function (seq7906){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7906));
}));

webjunk.bulma.navbar_item = (function webjunk$bulma$navbar_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7917 = arguments.length;
var i__4737__auto___7918 = (0);
while(true){
if((i__4737__auto___7918 < len__4736__auto___7917)){
args__4742__auto__.push((arguments[i__4737__auto___7918]));

var G__7919 = (i__4737__auto___7918 + (1));
i__4737__auto___7918 = G__7919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.navbar_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.navbar_item.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "navbar-item";
var vec__7914 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7915 = cljs.core.seq(vec__7914);
var first__7916 = cljs.core.first(seq__7915);
var seq__7915__$1 = cljs.core.next(seq__7915);
var new_attr__5458__auto__ = first__7916;
var kids__5459__auto__ = seq__7915__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$navbar_DASH_item;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.navbar_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.navbar_item.cljs$lang$applyTo = (function (seq7913){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7913));
}));

webjunk.bulma.menu = (function webjunk$bulma$menu(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7924 = arguments.length;
var i__4737__auto___7925 = (0);
while(true){
if((i__4737__auto___7925 < len__4736__auto___7924)){
args__4742__auto__.push((arguments[i__4737__auto___7925]));

var G__7926 = (i__4737__auto___7925 + (1));
i__4737__auto___7925 = G__7926;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "menu";
var vec__7921 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7922 = cljs.core.seq(vec__7921);
var first__7923 = cljs.core.first(seq__7922);
var seq__7922__$1 = cljs.core.next(seq__7922);
var new_attr__5458__auto__ = first__7923;
var kids__5459__auto__ = seq__7922__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$menu;
return cljs.core.cst$kw$nav;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.menu.cljs$lang$applyTo = (function (seq7920){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7920));
}));

webjunk.bulma.menu_list = (function webjunk$bulma$menu_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7931 = arguments.length;
var i__4737__auto___7932 = (0);
while(true){
if((i__4737__auto___7932 < len__4736__auto___7931)){
args__4742__auto__.push((arguments[i__4737__auto___7932]));

var G__7933 = (i__4737__auto___7932 + (1));
i__4737__auto___7932 = G__7933;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.menu_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.menu_list.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "menu-list";
var vec__7928 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7929 = cljs.core.seq(vec__7928);
var first__7930 = cljs.core.first(seq__7929);
var seq__7929__$1 = cljs.core.next(seq__7929);
var new_attr__5458__auto__ = first__7930;
var kids__5459__auto__ = seq__7929__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$menu_DASH_list;
return cljs.core.cst$kw$ul;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.menu_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.menu_list.cljs$lang$applyTo = (function (seq7927){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7927));
}));

webjunk.bulma.level = (function webjunk$bulma$level(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7938 = arguments.length;
var i__4737__auto___7939 = (0);
while(true){
if((i__4737__auto___7939 < len__4736__auto___7938)){
args__4742__auto__.push((arguments[i__4737__auto___7939]));

var G__7940 = (i__4737__auto___7939 + (1));
i__4737__auto___7939 = G__7940;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "level";
var vec__7935 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7936 = cljs.core.seq(vec__7935);
var first__7937 = cljs.core.first(seq__7936);
var seq__7936__$1 = cljs.core.next(seq__7936);
var new_attr__5458__auto__ = first__7937;
var kids__5459__auto__ = seq__7936__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$level;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.level.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level.cljs$lang$applyTo = (function (seq7934){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7934));
}));

webjunk.bulma.level_left = (function webjunk$bulma$level_left(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7945 = arguments.length;
var i__4737__auto___7946 = (0);
while(true){
if((i__4737__auto___7946 < len__4736__auto___7945)){
args__4742__auto__.push((arguments[i__4737__auto___7946]));

var G__7947 = (i__4737__auto___7946 + (1));
i__4737__auto___7946 = G__7947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_left.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_left.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "level-left";
var vec__7942 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7943 = cljs.core.seq(vec__7942);
var first__7944 = cljs.core.first(seq__7943);
var seq__7943__$1 = cljs.core.next(seq__7943);
var new_attr__5458__auto__ = first__7944;
var kids__5459__auto__ = seq__7943__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$level_DASH_left;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.level_left.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_left.cljs$lang$applyTo = (function (seq7941){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7941));
}));

webjunk.bulma.level_right = (function webjunk$bulma$level_right(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7952 = arguments.length;
var i__4737__auto___7953 = (0);
while(true){
if((i__4737__auto___7953 < len__4736__auto___7952)){
args__4742__auto__.push((arguments[i__4737__auto___7953]));

var G__7954 = (i__4737__auto___7953 + (1));
i__4737__auto___7953 = G__7954;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_right.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_right.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "level-right";
var vec__7949 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7950 = cljs.core.seq(vec__7949);
var first__7951 = cljs.core.first(seq__7950);
var seq__7950__$1 = cljs.core.next(seq__7950);
var new_attr__5458__auto__ = first__7951;
var kids__5459__auto__ = seq__7950__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$level_DASH_right;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.level_right.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_right.cljs$lang$applyTo = (function (seq7948){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7948));
}));

webjunk.bulma.level_item = (function webjunk$bulma$level_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7959 = arguments.length;
var i__4737__auto___7960 = (0);
while(true){
if((i__4737__auto___7960 < len__4736__auto___7959)){
args__4742__auto__.push((arguments[i__4737__auto___7960]));

var G__7961 = (i__4737__auto___7960 + (1));
i__4737__auto___7960 = G__7961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.level_item.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.level_item.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "level-item";
var vec__7956 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7957 = cljs.core.seq(vec__7956);
var first__7958 = cljs.core.first(seq__7957);
var seq__7957__$1 = cljs.core.next(seq__7957);
var new_attr__5458__auto__ = first__7958;
var kids__5459__auto__ = seq__7957__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$level_DASH_item;
return cljs.core.cst$kw$div;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.level_item.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.level_item.cljs$lang$applyTo = (function (seq7955){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7955));
}));

webjunk.bulma.textarea = (function webjunk$bulma$textarea(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7966 = arguments.length;
var i__4737__auto___7967 = (0);
while(true){
if((i__4737__auto___7967 < len__4736__auto___7966)){
args__4742__auto__.push((arguments[i__4737__auto___7967]));

var G__7968 = (i__4737__auto___7967 + (1));
i__4737__auto___7967 = G__7968;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "textarea";
var vec__7963 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7964 = cljs.core.seq(vec__7963);
var first__7965 = cljs.core.first(seq__7964);
var seq__7964__$1 = cljs.core.next(seq__7964);
var new_attr__5458__auto__ = first__7965;
var kids__5459__auto__ = seq__7964__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$textarea;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.textarea.cljs$lang$applyTo = (function (seq7962){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7962));
}));

webjunk.bulma.table = (function webjunk$bulma$table(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7973 = arguments.length;
var i__4737__auto___7974 = (0);
while(true){
if((i__4737__auto___7974 < len__4736__auto___7973)){
args__4742__auto__.push((arguments[i__4737__auto___7974]));

var G__7975 = (i__4737__auto___7974 + (1));
i__4737__auto___7974 = G__7975;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__5457__auto__){
var _PERCENT_ = "table";
var vec__7970 = webjunk.pseudotag.ensure_attr(args__5457__auto__);
var seq__7971 = cljs.core.seq(vec__7970);
var first__7972 = cljs.core.first(seq__7971);
var seq__7971__$1 = cljs.core.next(seq__7971);
var new_attr__5458__auto__ = first__7972;
var kids__5459__auto__ = seq__7971__$1;
var attr__5460__auto__ = webjunk.pseudotag.attr_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,_PERCENT_], null),new_attr__5458__auto__], 0));
var desugared_base_tag__5461__auto__ = (function (){var _PERCENT___$1 = cljs.core.cst$kw$table;
return _PERCENT___$1;
})();
return webjunk.pseudotag.ptag_apply.cljs$core$IFn$_invoke$arity$variadic(desugared_base_tag__5461__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__5460__auto__,kids__5459__auto__], 0));
}));

(webjunk.bulma.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.table.cljs$lang$applyTo = (function (seq7969){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7969));
}));

webjunk.bulma.select = (function webjunk$bulma$select(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7980 = arguments.length;
var i__4737__auto___7981 = (0);
while(true){
if((i__4737__auto___7981 < len__4736__auto___7980)){
args__4742__auto__.push((arguments[i__4737__auto___7981]));

var G__7982 = (i__4737__auto___7981 + (1));
i__4737__auto___7981 = G__7982;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.bulma.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.bulma.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__5447__auto__){
var vec__7977 = webjunk.pseudotag.ensure_attr(args__5447__auto__);
var seq__7978 = cljs.core.seq(vec__7977);
var first__7979 = cljs.core.first(seq__7978);
var seq__7978__$1 = cljs.core.next(seq__7978);
var attr = first__7979;
var options = seq__7978__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$select,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,attr,options], null)], null);
}));

(webjunk.bulma.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.bulma.select.cljs$lang$applyTo = (function (seq7976){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7976));
}));

