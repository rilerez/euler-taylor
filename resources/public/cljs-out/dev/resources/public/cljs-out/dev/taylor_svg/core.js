// Compiled by ClojureScript 1.10.773 {}
goog.provide('taylor_svg.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('webjunk.bulma');
goog.require('webjunk.complex');
goog.require('webjunk.svg');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof taylor_svg !== 'undefined') && (typeof taylor_svg.core !== 'undefined') && (typeof taylor_svg.core.app_state !== 'undefined')){
} else {
taylor_svg.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"t","t",-1397832519),(0)], null));
}
taylor_svg.core.get_app_element = (function taylor_svg$core$get_app_element(){
return goog.dom.getElement("app");
});
taylor_svg.core.pows_of = (function taylor_svg$core$pows_of(z){
return cljs.core.iterate.call(null,(function (p1__31068_SHARP_){
return webjunk.complex._STAR_.call(null,p1__31068_SHARP_,z);
}),(1));
});
taylor_svg.core.facts = cljs.core.reductions.call(null,webjunk.complex._STAR_,(1),cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null)));
taylor_svg.core.taylor_terms = (function taylor_svg$core$taylor_terms(z){
return cljs.core.map.call(null,webjunk.complex._SLASH_,taylor_svg.core.pows_of.call(null,z),taylor_svg.core.facts);
});
taylor_svg.core.partial_sums = (function taylor_svg$core$partial_sums(series){
return cljs.core.reductions.call(null,webjunk.complex._PLUS_,webjunk.complex.complex.call(null),series);
});
taylor_svg.core.tau = webjunk.complex._STAR_.call(null,(2),Math.PI);
taylor_svg.core.term_count = (20);
taylor_svg.core.vecline = (function taylor_svg$core$vecline(z0,z1){
var len = webjunk.complex.abs.call(null,webjunk.complex._.call(null,z0,z1));
var cutoff = .3;
return webjunk.svg.line.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((len >= cutoff))?"arrowed":"")], null),z0,z1);
});
taylor_svg.core.taylor_lines = (function taylor_svg$core$taylor_lines(terms,time){
var sums = taylor_svg.core.partial_sums.call(null,taylor_svg.core.taylor_terms.call(null,webjunk.complex.complex.call(null,(0),time)));
var pairs = cljs.core.map.call(null,cljs.core.vector,sums,cljs.core.rest.call(null,sums));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),cljs.core.take.call(null,terms,(function (){var iter__4529__auto__ = (function taylor_svg$core$taylor_lines_$_iter__31069(s__31070){
return (new cljs.core.LazySeq(null,(function (){
var s__31070__$1 = s__31070;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31070__$1);
if(temp__5720__auto__){
var s__31070__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31070__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31070__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31072 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31071 = (0);
while(true){
if((i__31071 < size__4528__auto__)){
var vec__31073 = cljs.core._nth.call(null,c__4527__auto__,i__31071);
var a = cljs.core.nth.call(null,vec__31073,(0),null);
var b = cljs.core.nth.call(null,vec__31073,(1),null);
cljs.core.chunk_append.call(null,b__31072,taylor_svg.core.vecline.call(null,a,b));

var G__31079 = (i__31071 + (1));
i__31071 = G__31079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31072),taylor_svg$core$taylor_lines_$_iter__31069.call(null,cljs.core.chunk_rest.call(null,s__31070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31072),null);
}
} else {
var vec__31076 = cljs.core.first.call(null,s__31070__$2);
var a = cljs.core.nth.call(null,vec__31076,(0),null);
var b = cljs.core.nth.call(null,vec__31076,(1),null);
return cljs.core.cons.call(null,taylor_svg.core.vecline.call(null,a,b),taylor_svg$core$taylor_lines_$_iter__31069.call(null,cljs.core.rest.call(null,s__31070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,pairs);
})()));
});
taylor_svg.core.update_t = (function taylor_svg$core$update_t(p1__31080_SHARP_){
return cljs.core.swap_BANG_.call(null,taylor_svg.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"t","t",-1397832519),p1__31080_SHARP_.target.value);
});
taylor_svg.core.vline = (function taylor_svg$core$vline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31085 = arguments.length;
var i__4737__auto___31086 = (0);
while(true){
if((i__4737__auto___31086 < len__4736__auto___31085)){
args__4742__auto__.push((arguments[i__4737__auto___31086]));

var G__31087 = (i__4737__auto___31086 + (1));
i__4737__auto___31086 = G__31087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taylor_svg.core.vline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taylor_svg.core.vline.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__31082 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attr = cljs.core.nth.call(null,vec__31082,(0),null);
var x = cljs.core.nth.call(null,vec__31082,(1),null);
return webjunk.svg.line.call(null,attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(-5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(5)], null));
}));

(taylor_svg.core.vline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taylor_svg.core.vline.cljs$lang$applyTo = (function (seq31081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31081));
}));

taylor_svg.core.hline = (function taylor_svg$core$hline(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31092 = arguments.length;
var i__4737__auto___31093 = (0);
while(true){
if((i__4737__auto___31093 < len__4736__auto___31092)){
args__4742__auto__.push((arguments[i__4737__auto___31093]));

var G__31094 = (i__4737__auto___31093 + (1));
i__4737__auto___31093 = G__31094;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taylor_svg.core.hline.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taylor_svg.core.hline.cljs$core$IFn$_invoke$arity$variadic = (function (args__20147__auto__){
var vec__31089 = webjunk.pseudotag.ensure_attr.call(null,args__20147__auto__);
var attr = cljs.core.nth.call(null,vec__31089,(0),null);
var y = cljs.core.nth.call(null,vec__31089,(1),null);
return webjunk.svg.line.call(null,attr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-5),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),y], null));
}));

(taylor_svg.core.hline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taylor_svg.core.hline.cljs$lang$applyTo = (function (seq31088){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31088));
}));

taylor_svg.core.grid = (function (){var iter__4529__auto__ = (function taylor_svg$core$iter__31095(s__31096){
return (new cljs.core.LazySeq(null,(function (){
var s__31096__$1 = s__31096;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31096__$1);
if(temp__5720__auto__){
var s__31096__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31096__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31096__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31098 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31097 = (0);
while(true){
if((i__31097 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__31097);
cljs.core.chunk_append.call(null,b__31098,(new cljs.core.List(null,taylor_svg.core.vline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),i),(new cljs.core.List(null,taylor_svg.core.hline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),i),null,(1),null)),(2),null)));

var G__31099 = (i__31097 + (1));
i__31097 = G__31099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31098),taylor_svg$core$iter__31095.call(null,cljs.core.chunk_rest.call(null,s__31096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31098),null);
}
} else {
var i = cljs.core.first.call(null,s__31096__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,taylor_svg.core.vline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),i),(new cljs.core.List(null,taylor_svg.core.hline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),i),null,(1),null)),(2),null)),taylor_svg$core$iter__31095.call(null,cljs.core.rest.call(null,s__31096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(-5),(5)));
})();
taylor_svg.core.axes = (new cljs.core.List(null,taylor_svg.core.hline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"axis"], null),(0)),(new cljs.core.List(null,taylor_svg.core.vline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"axis"], null),(0)),null,(1),null)),(2),null));
taylor_svg.core.hello_world = (function taylor_svg$core$hello_world(){
reagent.core.after_render.call(null,(function (){
return MathJax.typeset();
}));

var t = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,taylor_svg.core.app_state));
var vec__31100 = webjunk.complex.cis.call(null,t);
var x = cljs.core.nth.call(null,vec__31100,(0),null);
var y = cljs.core.nth.call(null,vec__31100,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article","article",-21685045),webjunk.bulma.section.call(null,webjunk.bulma.control.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"box"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.slider","input.slider",-271160402),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),webjunk.complex._.call(null,(7)),new cljs.core.Keyword(null,"max","max",61366548),(7),new cljs.core.Keyword(null,"step","step",1288888124),.01,new cljs.core.Keyword(null,"value","value",305978217),t,new cljs.core.Keyword(null,"on-change","on-change",-732046149),taylor_svg.core.update_t], null)], null),"$t=$",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),t,new cljs.core.Keyword(null,"on-change","on-change",-732046149),taylor_svg.core.update_t], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.pprint.cl_format.call(null,null,"$$e^{it} = \\sum_k \\frac{(it)^k}{k!}\\approx \\sum_k \\frac{(~,3Fi)^k}{k!}\\approx ~,3F~,3@Fi$$",t,x,y)], null)),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-5 -5 10 10"], null),taylor_svg.core.grid,taylor_svg.core.axes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"arrow",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"-5 -5 10 10",new cljs.core.Keyword(null,"orient","orient",1933743565),"auto",new cljs.core.Keyword(null,"markerWidth","markerWidth",-568766230),(10),new cljs.core.Keyword(null,"markerHeight","markerHeight",-1744163958),(10),new cljs.core.Keyword(null,"refX","refX",1265839261),(4),new cljs.core.Keyword(null,"refY","refY",113675749),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M0,0 L-2,3 L5,0 L-2,-3 Z"], null)], null)], null)], null),webjunk.svg.circle.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"unit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),(1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [taylor_svg.core.taylor_lines,taylor_svg.core.term_count,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,taylor_svg.core.app_state))], null)], null))], null);
});
taylor_svg.core.mount = (function taylor_svg$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taylor_svg.core.hello_world], null),el);
});
taylor_svg.core.mount_app_element = (function taylor_svg$core$mount_app_element(){
var temp__5720__auto__ = taylor_svg.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return taylor_svg.core.mount.call(null,el);
} else {
return null;
}
});
taylor_svg.core.mount_app_element.call(null);
taylor_svg.core.on_reload = (function taylor_svg$core$on_reload(){
return taylor_svg.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
