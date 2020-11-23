// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28277){
var map__28278 = p__28277;
var map__28278__$1 = (((((!((map__28278 == null))))?(((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var m = map__28278__$1;
var n = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28280_28312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28281_28313 = null;
var count__28282_28314 = (0);
var i__28283_28315 = (0);
while(true){
if((i__28283_28315 < count__28282_28314)){
var f_28316 = cljs.core._nth.call(null,chunk__28281_28313,i__28283_28315);
cljs.core.println.call(null,"  ",f_28316);


var G__28317 = seq__28280_28312;
var G__28318 = chunk__28281_28313;
var G__28319 = count__28282_28314;
var G__28320 = (i__28283_28315 + (1));
seq__28280_28312 = G__28317;
chunk__28281_28313 = G__28318;
count__28282_28314 = G__28319;
i__28283_28315 = G__28320;
continue;
} else {
var temp__5720__auto___28321 = cljs.core.seq.call(null,seq__28280_28312);
if(temp__5720__auto___28321){
var seq__28280_28322__$1 = temp__5720__auto___28321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28280_28322__$1)){
var c__4556__auto___28323 = cljs.core.chunk_first.call(null,seq__28280_28322__$1);
var G__28324 = cljs.core.chunk_rest.call(null,seq__28280_28322__$1);
var G__28325 = c__4556__auto___28323;
var G__28326 = cljs.core.count.call(null,c__4556__auto___28323);
var G__28327 = (0);
seq__28280_28312 = G__28324;
chunk__28281_28313 = G__28325;
count__28282_28314 = G__28326;
i__28283_28315 = G__28327;
continue;
} else {
var f_28328 = cljs.core.first.call(null,seq__28280_28322__$1);
cljs.core.println.call(null,"  ",f_28328);


var G__28329 = cljs.core.next.call(null,seq__28280_28322__$1);
var G__28330 = null;
var G__28331 = (0);
var G__28332 = (0);
seq__28280_28312 = G__28329;
chunk__28281_28313 = G__28330;
count__28282_28314 = G__28331;
i__28283_28315 = G__28332;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28333 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28333);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28333)))?cljs.core.second.call(null,arglists_28333):arglists_28333));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28284_28334 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28285_28335 = null;
var count__28286_28336 = (0);
var i__28287_28337 = (0);
while(true){
if((i__28287_28337 < count__28286_28336)){
var vec__28298_28338 = cljs.core._nth.call(null,chunk__28285_28335,i__28287_28337);
var name_28339 = cljs.core.nth.call(null,vec__28298_28338,(0),null);
var map__28301_28340 = cljs.core.nth.call(null,vec__28298_28338,(1),null);
var map__28301_28341__$1 = (((((!((map__28301_28340 == null))))?(((((map__28301_28340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28301_28340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28301_28340):map__28301_28340);
var doc_28342 = cljs.core.get.call(null,map__28301_28341__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28343 = cljs.core.get.call(null,map__28301_28341__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28339);

cljs.core.println.call(null," ",arglists_28343);

if(cljs.core.truth_(doc_28342)){
cljs.core.println.call(null," ",doc_28342);
} else {
}


var G__28344 = seq__28284_28334;
var G__28345 = chunk__28285_28335;
var G__28346 = count__28286_28336;
var G__28347 = (i__28287_28337 + (1));
seq__28284_28334 = G__28344;
chunk__28285_28335 = G__28345;
count__28286_28336 = G__28346;
i__28287_28337 = G__28347;
continue;
} else {
var temp__5720__auto___28348 = cljs.core.seq.call(null,seq__28284_28334);
if(temp__5720__auto___28348){
var seq__28284_28349__$1 = temp__5720__auto___28348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28284_28349__$1)){
var c__4556__auto___28350 = cljs.core.chunk_first.call(null,seq__28284_28349__$1);
var G__28351 = cljs.core.chunk_rest.call(null,seq__28284_28349__$1);
var G__28352 = c__4556__auto___28350;
var G__28353 = cljs.core.count.call(null,c__4556__auto___28350);
var G__28354 = (0);
seq__28284_28334 = G__28351;
chunk__28285_28335 = G__28352;
count__28286_28336 = G__28353;
i__28287_28337 = G__28354;
continue;
} else {
var vec__28303_28355 = cljs.core.first.call(null,seq__28284_28349__$1);
var name_28356 = cljs.core.nth.call(null,vec__28303_28355,(0),null);
var map__28306_28357 = cljs.core.nth.call(null,vec__28303_28355,(1),null);
var map__28306_28358__$1 = (((((!((map__28306_28357 == null))))?(((((map__28306_28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28306_28357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28306_28357):map__28306_28357);
var doc_28359 = cljs.core.get.call(null,map__28306_28358__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28360 = cljs.core.get.call(null,map__28306_28358__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28356);

cljs.core.println.call(null," ",arglists_28360);

if(cljs.core.truth_(doc_28359)){
cljs.core.println.call(null," ",doc_28359);
} else {
}


var G__28361 = cljs.core.next.call(null,seq__28284_28349__$1);
var G__28362 = null;
var G__28363 = (0);
var G__28364 = (0);
seq__28284_28334 = G__28361;
chunk__28285_28335 = G__28362;
count__28286_28336 = G__28363;
i__28287_28337 = G__28364;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__28308 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28309 = null;
var count__28310 = (0);
var i__28311 = (0);
while(true){
if((i__28311 < count__28310)){
var role = cljs.core._nth.call(null,chunk__28309,i__28311);
var temp__5720__auto___28365__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28365__$1)){
var spec_28366 = temp__5720__auto___28365__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28366));
} else {
}


var G__28367 = seq__28308;
var G__28368 = chunk__28309;
var G__28369 = count__28310;
var G__28370 = (i__28311 + (1));
seq__28308 = G__28367;
chunk__28309 = G__28368;
count__28310 = G__28369;
i__28311 = G__28370;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__28308);
if(temp__5720__auto____$1){
var seq__28308__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28308__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28308__$1);
var G__28371 = cljs.core.chunk_rest.call(null,seq__28308__$1);
var G__28372 = c__4556__auto__;
var G__28373 = cljs.core.count.call(null,c__4556__auto__);
var G__28374 = (0);
seq__28308 = G__28371;
chunk__28309 = G__28372;
count__28310 = G__28373;
i__28311 = G__28374;
continue;
} else {
var role = cljs.core.first.call(null,seq__28308__$1);
var temp__5720__auto___28375__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28375__$2)){
var spec_28376 = temp__5720__auto___28375__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28376));
} else {
}


var G__28377 = cljs.core.next.call(null,seq__28308__$1);
var G__28378 = null;
var G__28379 = (0);
var G__28380 = (0);
seq__28308 = G__28377;
chunk__28309 = G__28378;
count__28310 = G__28379;
i__28311 = G__28380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28381 = cljs.core.conj.call(null,via,t);
var G__28382 = cljs.core.ex_cause.call(null,t);
via = G__28381;
t = G__28382;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28385 = datafied_throwable;
var map__28385__$1 = (((((!((map__28385 == null))))?(((((map__28385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);
var via = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28386 = cljs.core.last.call(null,via);
var map__28386__$1 = (((((!((map__28386 == null))))?(((((map__28386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28386):map__28386);
var type = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__28386__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28387 = data;
var map__28387__$1 = (((((!((map__28387 == null))))?(((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
var problems = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28388 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__28388__$1 = (((((!((map__28388 == null))))?(((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var top_data = map__28388__$1;
var source = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__28393 = phase;
var G__28393__$1 = (((G__28393 instanceof cljs.core.Keyword))?G__28393.fqn:null);
switch (G__28393__$1) {
case "read-source":
var map__28394 = data;
var map__28394__$1 = (((((!((map__28394 == null))))?(((((map__28394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28394):map__28394);
var line = cljs.core.get.call(null,map__28394__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28394__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28396 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__28396__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28396,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28396);
var G__28396__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28396__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28396__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28396__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28396__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28397 = top_data;
var G__28397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__28397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28397);
var G__28397__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__28397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28397__$1);
var G__28397__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28397__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28397__$2);
var G__28397__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28397__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28397__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28397__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28397__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28398 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28398,(0),null);
var method = cljs.core.nth.call(null,vec__28398,(1),null);
var file = cljs.core.nth.call(null,vec__28398,(2),null);
var line = cljs.core.nth.call(null,vec__28398,(3),null);
var G__28401 = top_data;
var G__28401__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__28401,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28401);
var G__28401__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__28401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28401__$1);
var G__28401__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__28401__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28401__$2);
var G__28401__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__28401__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28401__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__28401__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28401__$4;
}

break;
case "execution":
var vec__28402 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__28402,(0),null);
var method = cljs.core.nth.call(null,vec__28402,(1),null);
var file = cljs.core.nth.call(null,vec__28402,(2),null);
var line = cljs.core.nth.call(null,vec__28402,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__28384_SHARP_){
var or__4126__auto__ = (p1__28384_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__28384_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__28405 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28405__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__28405,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28405);
var G__28405__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__28405__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28405__$1);
var G__28405__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__28405__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28405__$2);
var G__28405__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__28405__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28405__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__28405__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28405__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28393__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28409){
var map__28410 = p__28409;
var map__28410__$1 = (((((!((map__28410 == null))))?(((((map__28410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28410):map__28410);
var triage_data = map__28410__$1;
var phase = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__28410__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28412 = phase;
var G__28412__$1 = (((G__28412 instanceof cljs.core.Keyword))?G__28412.fqn:null);
switch (G__28412__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28413_28422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28414_28423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28415_28424 = true;
var _STAR_print_fn_STAR__temp_val__28416_28425 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28415_28424);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28416_28425);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28407_SHARP_){
return cljs.core.dissoc.call(null,p1__28407_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28414_28423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28413_28422);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28417_28426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28418_28427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28419_28428 = true;
var _STAR_print_fn_STAR__temp_val__28420_28429 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28419_28428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28420_28429);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__28408_SHARP_){
return cljs.core.dissoc.call(null,p1__28408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28418_28427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28417_28426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28412__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
