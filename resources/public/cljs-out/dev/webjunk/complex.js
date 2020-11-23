// Compiled by ClojureScript 1.10.773 {}
goog.provide('webjunk.complex');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
webjunk.complex.Complex = (function (real,imag,__meta,__extmap,__hash){
this.real = real;
this.imag = imag;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716187;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(webjunk.complex.Complex.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(webjunk.complex.Complex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k21233,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__21238 = k21233;
var G__21238__$1 = (((G__21238 instanceof cljs.core.Keyword))?G__21238.fqn:null);
switch (G__21238__$1) {
case "real":
return self__.real;

break;
case "imag":
return self__.imag;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21233,else__4383__auto__);

}
}));

(webjunk.complex.Complex.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__21239){
var vec__21240 = p__21239;
var k__4403__auto__ = cljs.core.nth.call(null,vec__21240,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__21240,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(webjunk.complex.Complex.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,index,not_found){
var self__ = this;
var this$__$1 = this;
var G__21243 = index;
switch (G__21243) {
case (0):
return this$__$1.real;

break;
case (1):
return this$__$1.imag;

break;
default:
return not_found;

}
}));

(webjunk.complex.Complex.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,index){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = cljs.core.nth.call(null,this$__$1,index,null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new error("Bad index for complex number"));
}
}));

(webjunk.complex.Complex.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#webjunk.complex.Complex{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"real","real",388296937),self__.real],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"imag","imag",1339868951),self__.imag],null))], null),self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21232){
var self__ = this;
var G__21232__$1 = this;
return (new cljs.core.RecordIter((0),G__21232__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"real","real",388296937),new cljs.core.Keyword(null,"imag","imag",1339868951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(webjunk.complex.Complex.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(webjunk.complex.Complex.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new webjunk.complex.Complex(self__.real,self__.imag,self__.__meta,self__.__extmap,self__.__hash));
}));

(webjunk.complex.Complex.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-406468699 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(webjunk.complex.Complex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21234,other21235){
var self__ = this;
var this21234__$1 = this;
return (((!((other21235 == null)))) && ((this21234__$1.constructor === other21235.constructor)) && (cljs.core._EQ_.call(null,this21234__$1.real,other21235.real)) && (cljs.core._EQ_.call(null,this21234__$1.imag,other21235.imag)) && (cljs.core._EQ_.call(null,this21234__$1.__extmap,other21235.__extmap)));
}));

(webjunk.complex.Complex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"real","real",388296937),null,new cljs.core.Keyword(null,"imag","imag",1339868951),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new webjunk.complex.Complex(self__.real,self__.imag,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(webjunk.complex.Complex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__21232){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__21244 = cljs.core.keyword_identical_QMARK_;
var expr__21245 = k__4388__auto__;
if(cljs.core.truth_(pred__21244.call(null,new cljs.core.Keyword(null,"real","real",388296937),expr__21245))){
return (new webjunk.complex.Complex(G__21232,self__.imag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21244.call(null,new cljs.core.Keyword(null,"imag","imag",1339868951),expr__21245))){
return (new webjunk.complex.Complex(self__.real,G__21232,self__.__meta,self__.__extmap,null));
} else {
return (new webjunk.complex.Complex(self__.real,self__.imag,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__21232),null));
}
}
}));

(webjunk.complex.Complex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"real","real",388296937),self__.real,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"imag","imag",1339868951),self__.imag,null))], null),self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__21232){
var self__ = this;
var this__4379__auto____$1 = this;
return (new webjunk.complex.Complex(self__.real,self__.imag,G__21232,self__.__extmap,self__.__hash));
}));

(webjunk.complex.Complex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(webjunk.complex.Complex.prototype.call = (function (self__,index){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.nth.call(null,this$,index);
}));

(webjunk.complex.Complex.prototype.apply = (function (self__,args21237){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21237)));
}));

(webjunk.complex.Complex.prototype.cljs$core$IFn$_invoke$arity$1 = (function (index){
var self__ = this;
var this$ = this;
return cljs.core.nth.call(null,this$,index);
}));

(webjunk.complex.Complex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"real","real",2028828464,null),new cljs.core.Symbol(null,"imag","imag",-1314566818,null)], null);
}));

(webjunk.complex.Complex.cljs$lang$type = true);

(webjunk.complex.Complex.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"webjunk.complex/Complex",null,(1),null));
}));

(webjunk.complex.Complex.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"webjunk.complex/Complex");
}));

/**
 * Positional factory function for webjunk.complex/Complex.
 */
webjunk.complex.__GT_Complex = (function webjunk$complex$__GT_Complex(real,imag){
return (new webjunk.complex.Complex(real,imag,null,null,null));
});

/**
 * Factory function for webjunk.complex/Complex, taking a map of keywords to field values.
 */
webjunk.complex.map__GT_Complex = (function webjunk$complex$map__GT_Complex(G__21236){
var extmap__4419__auto__ = (function (){var G__21247 = cljs.core.dissoc.call(null,G__21236,new cljs.core.Keyword(null,"real","real",388296937),new cljs.core.Keyword(null,"imag","imag",1339868951));
if(cljs.core.record_QMARK_.call(null,G__21236)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__21247);
} else {
return G__21247;
}
})();
return (new webjunk.complex.Complex(new cljs.core.Keyword(null,"real","real",388296937).cljs$core$IFn$_invoke$arity$1(G__21236),new cljs.core.Keyword(null,"imag","imag",1339868951).cljs$core$IFn$_invoke$arity$1(G__21236),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});

webjunk.complex.real = (function webjunk$complex$real(z){
return z.real;
});
webjunk.complex.imag = (function webjunk$complex$imag(z){
return z.imag;
});
webjunk.complex.realish_QMARK_ = (function webjunk$complex$realish_QMARK_(z){
return (webjunk.complex.imag.call(null,z) === (0));
});
webjunk.complex.try_realize = (function webjunk$complex$try_realize(z){
if(webjunk.complex.realish_QMARK_.call(null,z)){
return webjunk.complex.real.call(null,z);
} else {
return z;
}
});
webjunk.complex.complex = (function webjunk$complex$complex(var_args){
var G__21251 = arguments.length;
switch (G__21251) {
case 0:
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$0 = (function (){
return webjunk.complex.complex.call(null,(0),(0));
}));

(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1 = (function (x){
return webjunk.complex.complex.call(null,x,(0));
}));

(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new webjunk.complex.Complex(x,y,null,null,null));
}));

(webjunk.complex.complex.cljs$lang$maxFixedArity = 2);

webjunk.complex.complex_QMARK_ = (function webjunk$complex$complex_QMARK_(x){
return (x instanceof webjunk.complex.Complex);
});
webjunk.complex.ensure_complex = (function webjunk$complex$ensure_complex(x){
if(webjunk.complex.complex_QMARK_.call(null,x)){
return x;
} else {
return webjunk.complex.complex.call(null,x,(0));
}
});
webjunk.complex.complex_map = (function webjunk$complex$complex_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21255 = arguments.length;
var i__4737__auto___21256 = (0);
while(true){
if((i__4737__auto___21256 < len__4736__auto___21255)){
args__4742__auto__.push((arguments[i__4737__auto___21256]));

var G__21257 = (i__4737__auto___21256 + (1));
i__4737__auto___21256 = G__21257;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.complex.complex_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.complex.complex_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,zs){
return webjunk.complex.complex.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,webjunk.complex.real,zs)),cljs.core.apply.call(null,f,cljs.core.map.call(null,webjunk.complex.imag,zs)));
}));

(webjunk.complex.complex_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.complex.complex_map.cljs$lang$applyTo = (function (seq21253){
var G__21254 = cljs.core.first.call(null,seq21253);
var seq21253__$1 = cljs.core.next.call(null,seq21253);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21254,seq21253__$1);
}));

webjunk.complex.r_PLUS_ = cljs.core._PLUS_;
webjunk.complex.r_ = cljs.core._;
webjunk.complex.r_STAR_ = cljs.core._STAR_;
webjunk.complex.rdiv = cljs.core._SLASH_;
webjunk.complex.c_PLUS_ = (function webjunk$complex$c_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21259 = arguments.length;
var i__4737__auto___21260 = (0);
while(true){
if((i__4737__auto___21260 < len__4736__auto___21259)){
args__4742__auto__.push((arguments[i__4737__auto___21260]));

var G__21261 = (i__4737__auto___21260 + (1));
i__4737__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.complex.c_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.complex.c_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (zs){
return cljs.core.apply.call(null,webjunk.complex.complex_map,webjunk.complex.r_PLUS_,zs);
}));

(webjunk.complex.c_PLUS_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.complex.c_PLUS_.cljs$lang$applyTo = (function (seq21258){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21258));
}));

try{var values__20339__auto___21263 = (new cljs.core.List(null,webjunk.complex.c_PLUS_.call(null,webjunk.complex.complex.call(null,(1),(2)),webjunk.complex.complex.call(null,(3),(4))),(new cljs.core.List(null,webjunk.complex.complex.call(null,(4),(6)),null,(1),null)),(2),null));
var result__20340__auto___21264 = cljs.core.apply.call(null,cljs.core._EQ_,values__20339__auto___21263);
if(cljs.core.truth_(result__20340__auto___21264)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",22,new cljs.core.Keyword(null,"pass","pass",1574159993),5,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"c+","c+",578150062,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(3),(4))),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(4),(6))),56,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21263),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",22,new cljs.core.Keyword(null,"fail","fail",1706214930),5,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"c+","c+",578150062,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(3),(4))),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(4),(6))),56,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21263),null,(1),null)),(2),null)),null]));
}

}catch (e21262){var t__20390__auto___21265 = e21262;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",22,new cljs.core.Keyword(null,"error","error",-978969032),5,55,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"c+","c+",578150062,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(3),(4))),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(4),(6))),56,t__20390__auto___21265,null]));
}webjunk.complex.c_ = (function webjunk$complex$c_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21267 = arguments.length;
var i__4737__auto___21268 = (0);
while(true){
if((i__4737__auto___21268 < len__4736__auto___21267)){
args__4742__auto__.push((arguments[i__4737__auto___21268]));

var G__21269 = (i__4737__auto___21268 + (1));
i__4737__auto___21268 = G__21269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.complex.c_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.complex.c_.cljs$core$IFn$_invoke$arity$variadic = (function (zs){
return cljs.core.apply.call(null,webjunk.complex.complex_map,webjunk.complex.r_,zs);
}));

(webjunk.complex.c_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.complex.c_.cljs$lang$applyTo = (function (seq21266){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21266));
}));

webjunk.complex.i = webjunk.complex.complex.call(null,(0),(1));
webjunk.complex.c_STAR_ = (function webjunk$complex$c_STAR_(var_args){
var G__21274 = arguments.length;
switch (G__21274) {
case 0:
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21282 = arguments.length;
var i__4737__auto___21283 = (0);
while(true){
if((i__4737__auto___21283 < len__4736__auto___21282)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21283]));

var G__21284 = (i__4737__auto___21283 + (1));
i__4737__auto___21283 = G__21284;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return webjunk.complex.complex.call(null,(1),(0));
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (z){
return webjunk.complex.ensure_complex.call(null,z);
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
var vec__21275 = u;
var x = cljs.core.nth.call(null,vec__21275,(0),null);
var y = cljs.core.nth.call(null,vec__21275,(1),null);
var vec__21278 = v;
var a = cljs.core.nth.call(null,vec__21278,(0),null);
var b = cljs.core.nth.call(null,vec__21278,(1),null);
return webjunk.complex.complex.call(null,webjunk.complex.r_.call(null,webjunk.complex.r_STAR_.call(null,x,a),webjunk.complex.r_STAR_.call(null,y,b)),webjunk.complex.r_PLUS_.call(null,webjunk.complex.r_STAR_.call(null,x,b),webjunk.complex.r_STAR_.call(null,a,y)));
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,v,zs){
return cljs.core.reduce.call(null,webjunk.complex.c_STAR_,webjunk.complex.c_STAR_.call(null,u,v),zs);
}));

/** @this {Function} */
(webjunk.complex.c_STAR_.cljs$lang$applyTo = (function (seq21271){
var G__21272 = cljs.core.first.call(null,seq21271);
var seq21271__$1 = cljs.core.next.call(null,seq21271);
var G__21273 = cljs.core.first.call(null,seq21271__$1);
var seq21271__$2 = cljs.core.next.call(null,seq21271__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21272,G__21273,seq21271__$2);
}));

(webjunk.complex.c_STAR_.cljs$lang$maxFixedArity = (2));

webjunk.complex.squared_length = (function webjunk$complex$squared_length(z){
var square = (function (p1__21285_SHARP_){
return webjunk.complex.r_STAR_.call(null,p1__21285_SHARP_,p1__21285_SHARP_);
});
var vec__21286 = z;
var x = cljs.core.nth.call(null,vec__21286,(0),null);
var y = cljs.core.nth.call(null,vec__21286,(1),null);
return webjunk.complex.r_PLUS_.call(null,square.call(null,x),square.call(null,y));
});
webjunk.complex.conjugate = (function webjunk$complex$conjugate(z){
return webjunk.complex.complex.call(null,webjunk.complex.real.call(null,z),webjunk.complex.r_.call(null,webjunk.complex.imag.call(null,z)));
});
webjunk.complex.cabs = (function webjunk$complex$cabs(z){
return Math.sqrt(webjunk.complex.squared_length.call(null,z));
});
webjunk.complex.cdiv = (function webjunk$complex$cdiv(var_args){
var G__21293 = arguments.length;
switch (G__21293) {
case 1:
return webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21295 = arguments.length;
var i__4737__auto___21296 = (0);
while(true){
if((i__4737__auto___21296 < len__4736__auto___21295)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21296]));

var G__21297 = (i__4737__auto___21296 + (1));
i__4737__auto___21296 = G__21297;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$1 = (function (z){
return webjunk.complex.c_STAR_.call(null,webjunk.complex.conjugate.call(null,z),webjunk.complex.complex.call(null,webjunk.complex.rdiv.call(null,webjunk.complex.squared_length.call(null,z))));
}));

(webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
return webjunk.complex.c_STAR_.call(null,u,webjunk.complex.cdiv.call(null,v));
}));

(webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$variadic = (function (u,v,zs){
return cljs.core.reduce.call(null,webjunk.complex.cdiv,webjunk.complex.cdiv.call(null,u,v),zs);
}));

/** @this {Function} */
(webjunk.complex.cdiv.cljs$lang$applyTo = (function (seq21290){
var G__21291 = cljs.core.first.call(null,seq21290);
var seq21290__$1 = cljs.core.next.call(null,seq21290);
var G__21292 = cljs.core.first.call(null,seq21290__$1);
var seq21290__$2 = cljs.core.next.call(null,seq21290__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21291,G__21292,seq21290__$2);
}));

(webjunk.complex.cdiv.cljs$lang$maxFixedArity = (2));

webjunk.complex.cis = (function webjunk$complex$cis(t){
return webjunk.complex.complex.call(null,Math.cos(t),Math.sin(t));
});
webjunk.complex.cexp = (function webjunk$complex$cexp(z){
return webjunk.complex.c_STAR_.call(null,webjunk.complex.complex.call(null,Math.exp(webjunk.complex.real.call(null,z)),(0)),webjunk.complex.cis.call(null,webjunk.complex.imag.call(null,z)));
});
webjunk.complex.make_op = (function webjunk$complex$make_op(complex_op,real_op){
return (function() { 
var G__21298__delegate = function (args){
if(cljs.core.truth_(cljs.core.some.call(null,webjunk.complex.complex_QMARK_,args))){
return cljs.core.apply.call(null,complex_op,cljs.core.map.call(null,webjunk.complex.ensure_complex,args));
} else {
return cljs.core.apply.call(null,real_op,args);
}
};
var G__21298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21299__i = 0, G__21299__a = new Array(arguments.length -  0);
while (G__21299__i < G__21299__a.length) {G__21299__a[G__21299__i] = arguments[G__21299__i + 0]; ++G__21299__i;}
  args = new cljs.core.IndexedSeq(G__21299__a,0,null);
} 
return G__21298__delegate.call(this,args);};
G__21298.cljs$lang$maxFixedArity = 0;
G__21298.cljs$lang$applyTo = (function (arglist__21300){
var args = cljs.core.seq(arglist__21300);
return G__21298__delegate(args);
});
G__21298.cljs$core$IFn$_invoke$arity$variadic = G__21298__delegate;
return G__21298;
})()
;
});
webjunk.complex._PLUS_ = webjunk.complex.make_op.call(null,webjunk.complex.c_PLUS_,cljs.core._PLUS_);
webjunk.complex._ = webjunk.complex.make_op.call(null,webjunk.complex.c_,cljs.core._);
webjunk.complex._STAR_ = webjunk.complex.make_op.call(null,webjunk.complex.c_STAR_,cljs.core._STAR_);
webjunk.complex._SLASH_ = webjunk.complex.make_op.call(null,webjunk.complex.cdiv,cljs.core._SLASH_);
webjunk.complex.exp = webjunk.complex.make_op.call(null,webjunk.complex.cexp,(function (p1__21301_SHARP_){
return Math.exp(p1__21301_SHARP_);
}));
webjunk.complex.abs = webjunk.complex.make_op.call(null,webjunk.complex.cabs,(function (p1__21302_SHARP_){
return Math.abs(p1__21302_SHARP_);
}));
webjunk.complex.c_cosh = (function webjunk$complex$c_cosh(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex._PLUS_.call(null,webjunk.complex.exp.call(null,z),webjunk.complex.exp.call(null,webjunk.complex._.call(null,z))),(2));
});
webjunk.complex.c_sinh = (function webjunk$complex$c_sinh(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex._.call(null,webjunk.complex.exp.call(null,z),webjunk.complex.exp.call(null,webjunk.complex._.call(null,z))),(2));
});
webjunk.complex.c_tanh = (function webjunk$complex$c_tanh(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex.c_sinh.call(null,z),webjunk.complex.c_cosh.call(null,z));
});
webjunk.complex.c_cos = (function webjunk$complex$c_cos(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex.c_cosh.call(null,webjunk.complex._STAR_.call(null,webjunk.complex.i,z)),(2));
});
try{var values__20339__auto___21304 = (new cljs.core.List(null,webjunk.complex.complex.call(null,(1)),(new cljs.core.List(null,webjunk.complex._STAR_.call(null,webjunk.complex.complex.call(null,(2),(2)),webjunk.complex._SLASH_.call(null,webjunk.complex.complex.call(null,(2),(2)))),null,(1),null)),(2),null));
var result__20340__auto___21305 = cljs.core.apply.call(null,cljs.core._EQ_,values__20339__auto___21304);
if(cljs.core.truth_(result__20340__auto___21305)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"pass","pass",1574159993),5,119,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),119,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21304),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"fail","fail",1706214930),5,119,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),119,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21304),null,(1),null)),(2),null)),null]));
}

}catch (e21303){var t__20390__auto___21306 = e21303;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"error","error",-978969032),5,119,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),119,t__20390__auto___21306,null]));
}webjunk.complex.c_sin = (function webjunk$complex$c_sin(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex.c_sinh.call(null,webjunk.complex._STAR_.call(null,webjunk.complex.i,z)),webjunk.complex._STAR_.call(null,(2),webjunk.complex.i));
});
webjunk.complex.c_tan = (function webjunk$complex$c_tan(z){
return webjunk.complex._SLASH_.call(null,webjunk.complex.c_sin.call(null,z),webjunk.complex.c_cos.call(null,z));
});
webjunk.complex.cosh = webjunk.complex.make_op.call(null,webjunk.complex.c_cosh,(function (p1__21307_SHARP_){
return Math.cosh(p1__21307_SHARP_);
}));
webjunk.complex.sinh = webjunk.complex.make_op.call(null,webjunk.complex.c_sinh,(function (p1__21308_SHARP_){
return Math.sinh(p1__21308_SHARP_);
}));
webjunk.complex.tanh = webjunk.complex.make_op.call(null,webjunk.complex.c_tanh,(function (p1__21309_SHARP_){
return Math.tanh(p1__21309_SHARP_);
}));
webjunk.complex.cos = webjunk.complex.make_op.call(null,webjunk.complex.c_cos,(function (p1__21310_SHARP_){
return Math.cos(p1__21310_SHARP_);
}));
webjunk.complex.sin = webjunk.complex.make_op.call(null,webjunk.complex.c_sin,(function (p1__21311_SHARP_){
return Math.sin(p1__21311_SHARP_);
}));
webjunk.complex.tan = webjunk.complex.make_op.call(null,webjunk.complex.c_tan,(function (p1__21312_SHARP_){
return Math.tan(p1__21312_SHARP_);
}));
webjunk.complex.human_str = (function webjunk$complex$human_str(p__21313){
var vec__21314 = p__21313;
var x = cljs.core.nth.call(null,vec__21314,(0),null);
var y = cljs.core.nth.call(null,vec__21314,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),(((y < (0)))?"":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"i"].join('');
});
webjunk.complex.read_complex = (function webjunk$complex$read_complex(v){
return cljs.core.apply.call(null,webjunk.complex.complex,v);
});
try{var values__20339__auto___21318 = (new cljs.core.List(null,webjunk.complex.complex.call(null,(1)),(new cljs.core.List(null,webjunk.complex._STAR_.call(null,webjunk.complex.complex.call(null,(2),(2)),webjunk.complex._SLASH_.call(null,webjunk.complex.complex.call(null,(2),(2)))),null,(1),null)),(2),null));
var result__20340__auto___21319 = cljs.core.apply.call(null,cljs.core._EQ_,values__20339__auto___21318);
if(cljs.core.truth_(result__20340__auto___21319)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"pass","pass",1574159993),5,142,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),142,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21318),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"fail","fail",1706214930),5,142,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),142,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21318),null,(1),null)),(2),null)),null]));
}

}catch (e21317){var t__20390__auto___21320 = e21317;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"error","error",-978969032),5,142,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(2))))),142,t__20390__auto___21320,null]));
}try{var values__20339__auto___21322 = (new cljs.core.List(null,webjunk.complex.complex.call(null,(1)),(new cljs.core.List(null,webjunk.complex._STAR_.call(null,webjunk.complex.complex.call(null,(2),(3)),webjunk.complex._SLASH_.call(null,webjunk.complex.complex.call(null,(2),(3)))),null,(1),null)),(2),null));
var result__20340__auto___21323 = cljs.core.apply.call(null,cljs.core._EQ_,values__20339__auto___21322);
if(cljs.core.truth_(result__20340__auto___21323)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"pass","pass",1574159993),5,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3))))),143,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21322),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"fail","fail",1706214930),5,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3))))),143,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__20339__auto___21322),null,(1),null)),(2),null)),null]));
}

}catch (e21321){var t__20390__auto___21324 = e21321;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/home/riles/code/taylor-svg/resources/public/cljs-out/dev/webjunk/complex.cljc",56,new cljs.core.Keyword(null,"error","error",-978969032),5,143,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3)),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"complex","complex",-1238824944,null),(2),(3))))),143,t__20390__auto___21324,null]));
}webjunk.complex._SLASH_.call(null,webjunk.complex.complex.call(null,(2),(2)));

//# sourceMappingURL=complex.js.map
