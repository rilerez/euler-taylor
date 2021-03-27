// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true}
goog.provide('webjunk.complex');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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

(webjunk.complex.Complex.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8321,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8326 = k8321;
var G__8326__$1 = (((G__8326 instanceof cljs.core.Keyword))?G__8326.fqn:null);
switch (G__8326__$1) {
case "real":
return self__.real;

break;
case "imag":
return self__.imag;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8321,else__4383__auto__);

}
}));

(webjunk.complex.Complex.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8327){
var vec__8328 = p__8327;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8328,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8328,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(webjunk.complex.Complex.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,index,not_found){
var self__ = this;
var this$__$1 = this;
var G__8331 = index;
switch (G__8331) {
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
var or__4126__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(this$__$1,index,null);
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
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#webjunk.complex.Complex{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$real,self__.real],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$imag,self__.imag],null))], null),self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8320){
var self__ = this;
var G__8320__$1 = this;
return (new cljs.core.RecordIter((0),G__8320__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$real,cljs.core.cst$kw$imag], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__8332 = (function (coll__4377__auto__){
return (-406468699 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__8332(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(webjunk.complex.Complex.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8322,other8323){
var self__ = this;
var this8322__$1 = this;
return (((!((other8323 == null)))) && ((this8322__$1.constructor === other8323.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8322__$1.real,other8323.real)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8322__$1.imag,other8323.imag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8322__$1.__extmap,other8323.__extmap)));
}));

(webjunk.complex.Complex.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$real,null,cljs.core.cst$kw$imag,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new webjunk.complex.Complex(self__.real,self__.imag,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(webjunk.complex.Complex.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8320){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8333 = cljs.core.keyword_identical_QMARK_;
var expr__8334 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__8336 = cljs.core.cst$kw$real;
var G__8337 = expr__8334;
return (pred__8333.cljs$core$IFn$_invoke$arity$2 ? pred__8333.cljs$core$IFn$_invoke$arity$2(G__8336,G__8337) : pred__8333.call(null,G__8336,G__8337));
})())){
return (new webjunk.complex.Complex(G__8320,self__.imag,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8338 = cljs.core.cst$kw$imag;
var G__8339 = expr__8334;
return (pred__8333.cljs$core$IFn$_invoke$arity$2 ? pred__8333.cljs$core$IFn$_invoke$arity$2(G__8338,G__8339) : pred__8333.call(null,G__8338,G__8339));
})())){
return (new webjunk.complex.Complex(self__.real,G__8320,self__.__meta,self__.__extmap,null));
} else {
return (new webjunk.complex.Complex(self__.real,self__.imag,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8320),null));
}
}
}));

(webjunk.complex.Complex.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$real,self__.real,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$imag,self__.imag,null))], null),self__.__extmap));
}));

(webjunk.complex.Complex.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8320){
var self__ = this;
var this__4379__auto____$1 = this;
return (new webjunk.complex.Complex(self__.real,self__.imag,G__8320,self__.__extmap,self__.__hash));
}));

(webjunk.complex.Complex.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(webjunk.complex.Complex.prototype.call = (function (self__,index){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$,index);
}));

(webjunk.complex.Complex.prototype.apply = (function (self__,args8325){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8325)));
}));

(webjunk.complex.Complex.prototype.cljs$core$IFn$_invoke$arity$1 = (function (index){
var self__ = this;
var this$ = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$,index);
}));

(webjunk.complex.Complex.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$real,cljs.core.cst$sym$imag], null);
}));

(webjunk.complex.Complex.cljs$lang$type = true);

(webjunk.complex.Complex.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"webjunk.complex/Complex",null,(1),null));
}));

(webjunk.complex.Complex.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"webjunk.complex/Complex");
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
webjunk.complex.map__GT_Complex = (function webjunk$complex$map__GT_Complex(G__8324){
var extmap__4419__auto__ = (function (){var G__8340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8324,cljs.core.cst$kw$real,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$imag], 0));
if(cljs.core.record_QMARK_(G__8324)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8340);
} else {
return G__8340;
}
})();
return (new webjunk.complex.Complex(cljs.core.cst$kw$real.cljs$core$IFn$_invoke$arity$1(G__8324),cljs.core.cst$kw$imag.cljs$core$IFn$_invoke$arity$1(G__8324),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

webjunk.complex.real = (function webjunk$complex$real(z){
return z.real;
});
webjunk.complex.imag = (function webjunk$complex$imag(z){
return z.imag;
});
webjunk.complex.realish_QMARK_ = (function webjunk$complex$realish_QMARK_(z){
return (webjunk.complex.imag(z) === (0));
});
webjunk.complex.try_realize = (function webjunk$complex$try_realize(z){
if(webjunk.complex.realish_QMARK_(z)){
return webjunk.complex.real(z);
} else {
return z;
}
});
webjunk.complex.complex = (function webjunk$complex$complex(var_args){
var G__8344 = arguments.length;
switch (G__8344) {
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
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((0),(0));
}));

(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1 = (function (x){
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2(x,(0));
}));

(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new webjunk.complex.Complex(x,y,null,null,null));
}));

(webjunk.complex.complex.cljs$lang$maxFixedArity = 2);

webjunk.complex.complex_QMARK_ = (function webjunk$complex$complex_QMARK_(x){
return (x instanceof webjunk.complex.Complex);
});
webjunk.complex.ensure_complex = (function webjunk$complex$ensure_complex(x){
if(webjunk.complex.complex_QMARK_(x)){
return x;
} else {
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2(x,(0));
}
});
webjunk.complex.complex_map = (function webjunk$complex$complex_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8348 = arguments.length;
var i__4737__auto___8349 = (0);
while(true){
if((i__4737__auto___8349 < len__4736__auto___8348)){
args__4742__auto__.push((arguments[i__4737__auto___8349]));

var G__8350 = (i__4737__auto___8349 + (1));
i__4737__auto___8349 = G__8350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return webjunk.complex.complex_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(webjunk.complex.complex_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,zs){
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(webjunk.complex.real,zs)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(webjunk.complex.imag,zs)));
}));

(webjunk.complex.complex_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webjunk.complex.complex_map.cljs$lang$applyTo = (function (seq8346){
var G__8347 = cljs.core.first(seq8346);
var seq8346__$1 = cljs.core.next(seq8346);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8347,seq8346__$1);
}));

webjunk.complex.r_PLUS_ = cljs.core._PLUS_;
webjunk.complex.r_ = cljs.core._;
webjunk.complex.r_STAR_ = cljs.core._STAR_;
webjunk.complex.rdiv = cljs.core._SLASH_;
webjunk.complex.c_PLUS_ = (function webjunk$complex$c_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8352 = arguments.length;
var i__4737__auto___8353 = (0);
while(true){
if((i__4737__auto___8353 < len__4736__auto___8352)){
args__4742__auto__.push((arguments[i__4737__auto___8353]));

var G__8354 = (i__4737__auto___8353 + (1));
i__4737__auto___8353 = G__8354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.complex.c_PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.complex.c_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (zs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(webjunk.complex.complex_map,webjunk.complex.r_PLUS_,zs);
}));

(webjunk.complex.c_PLUS_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.complex.c_PLUS_.cljs$lang$applyTo = (function (seq8351){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8351));
}));

try{var values__8050__auto___8359 = (new cljs.core.List(null,webjunk.complex.c_PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((1),(2)),webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((3),(4))], 0)),(new cljs.core.List(null,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((4),(6)),null,(1),null)),(2),null));
var result__8051__auto___8360 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8050__auto___8359);
if(cljs.core.truth_(result__8051__auto___8360)){
var G__8357_8361 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",22,cljs.core.cst$kw$pass,5,51,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$c_PLUS_,cljs.core.list(cljs.core.cst$sym$complex,(1),(2)),cljs.core.list(cljs.core.cst$sym$complex,(3),(4))),cljs.core.list(cljs.core.cst$sym$complex,(4),(6))),52,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8359),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8357_8361) : cljs.test.report.call(null,G__8357_8361));
} else {
var G__8358_8362 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",22,cljs.core.cst$kw$fail,5,51,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$c_PLUS_,cljs.core.list(cljs.core.cst$sym$complex,(1),(2)),cljs.core.list(cljs.core.cst$sym$complex,(3),(4))),cljs.core.list(cljs.core.cst$sym$complex,(4),(6))),52,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8359),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8358_8362) : cljs.test.report.call(null,G__8358_8362));
}

}catch (e8355){var t__8101__auto___8363 = e8355;
var G__8356_8364 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",22,cljs.core.cst$kw$error,5,51,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$c_PLUS_,cljs.core.list(cljs.core.cst$sym$complex,(1),(2)),cljs.core.list(cljs.core.cst$sym$complex,(3),(4))),cljs.core.list(cljs.core.cst$sym$complex,(4),(6))),52,t__8101__auto___8363,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8356_8364) : cljs.test.report.call(null,G__8356_8364));
}webjunk.complex.c_ = (function webjunk$complex$c_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8366 = arguments.length;
var i__4737__auto___8367 = (0);
while(true){
if((i__4737__auto___8367 < len__4736__auto___8366)){
args__4742__auto__.push((arguments[i__4737__auto___8367]));

var G__8368 = (i__4737__auto___8367 + (1));
i__4737__auto___8367 = G__8368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return webjunk.complex.c_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(webjunk.complex.c_.cljs$core$IFn$_invoke$arity$variadic = (function (zs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(webjunk.complex.complex_map,webjunk.complex.r_,zs);
}));

(webjunk.complex.c_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(webjunk.complex.c_.cljs$lang$applyTo = (function (seq8365){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8365));
}));

webjunk.complex.i = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((0),(1));
webjunk.complex.c_STAR_ = (function webjunk$complex$c_STAR_(var_args){
var G__8373 = arguments.length;
switch (G__8373) {
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
var len__4736__auto___8385 = arguments.length;
var i__4737__auto___8386 = (0);
while(true){
if((i__4737__auto___8386 < len__4736__auto___8385)){
args_arr__4757__auto__.push((arguments[i__4737__auto___8386]));

var G__8387 = (i__4737__auto___8386 + (1));
i__4737__auto___8386 = G__8387;
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
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((1),(0));
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (z){
return webjunk.complex.ensure_complex(z);
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
var vec__8374 = u;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8374,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8374,(1),null);
var vec__8377 = v;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8377,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8377,(1),null);
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((function (){var G__8380 = (webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2(x,a) : webjunk.complex.r_STAR_.call(null,x,a));
var G__8381 = (webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2(y,b) : webjunk.complex.r_STAR_.call(null,y,b));
return (webjunk.complex.r_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_.cljs$core$IFn$_invoke$arity$2(G__8380,G__8381) : webjunk.complex.r_.call(null,G__8380,G__8381));
})(),(function (){var G__8382 = (webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2(x,b) : webjunk.complex.r_STAR_.call(null,x,b));
var G__8383 = (webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2(a,y) : webjunk.complex.r_STAR_.call(null,a,y));
return (webjunk.complex.r_PLUS_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_PLUS_.cljs$core$IFn$_invoke$arity$2(G__8382,G__8383) : webjunk.complex.r_PLUS_.call(null,G__8382,G__8383));
})());
}));

(webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,v,zs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(webjunk.complex.c_STAR_,webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2(u,v),zs);
}));

/** @this {Function} */
(webjunk.complex.c_STAR_.cljs$lang$applyTo = (function (seq8370){
var G__8371 = cljs.core.first(seq8370);
var seq8370__$1 = cljs.core.next(seq8370);
var G__8372 = cljs.core.first(seq8370__$1);
var seq8370__$2 = cljs.core.next(seq8370__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8371,G__8372,seq8370__$2);
}));

(webjunk.complex.c_STAR_.cljs$lang$maxFixedArity = (2));

webjunk.complex.squared_length = (function webjunk$complex$squared_length(z){
var square = (function (p1__8388_SHARP_){
return (webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_STAR_.cljs$core$IFn$_invoke$arity$2(p1__8388_SHARP_,p1__8388_SHARP_) : webjunk.complex.r_STAR_.call(null,p1__8388_SHARP_,p1__8388_SHARP_));
});
var vec__8389 = z;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8389,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8389,(1),null);
var G__8392 = square(x);
var G__8393 = square(y);
return (webjunk.complex.r_PLUS_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex.r_PLUS_.cljs$core$IFn$_invoke$arity$2(G__8392,G__8393) : webjunk.complex.r_PLUS_.call(null,G__8392,G__8393));
});
webjunk.complex.conjugate = (function webjunk$complex$conjugate(z){
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2(webjunk.complex.real(z),(function (){var G__8394 = webjunk.complex.imag(z);
return (webjunk.complex.r_.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.r_.cljs$core$IFn$_invoke$arity$1(G__8394) : webjunk.complex.r_.call(null,G__8394));
})());
});
webjunk.complex.cabs = (function webjunk$complex$cabs(z){
var G__8395 = webjunk.complex.squared_length(z);
return Math.sqrt(G__8395);
});
webjunk.complex.cdiv = (function webjunk$complex$cdiv(var_args){
var G__8400 = arguments.length;
switch (G__8400) {
case 1:
return webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___8403 = arguments.length;
var i__4737__auto___8404 = (0);
while(true){
if((i__4737__auto___8404 < len__4736__auto___8403)){
args_arr__4757__auto__.push((arguments[i__4737__auto___8404]));

var G__8405 = (i__4737__auto___8404 + (1));
i__4737__auto___8404 = G__8405;
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
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2(webjunk.complex.conjugate(z),webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1((function (){var G__8401 = webjunk.complex.squared_length(z);
return (webjunk.complex.rdiv.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.rdiv.cljs$core$IFn$_invoke$arity$1(G__8401) : webjunk.complex.rdiv.call(null,G__8401));
})()));
}));

(webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$2 = (function (u,v){
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2(u,webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$1(v));
}));

(webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$variadic = (function (u,v,zs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(webjunk.complex.cdiv,webjunk.complex.cdiv.cljs$core$IFn$_invoke$arity$2(u,v),zs);
}));

/** @this {Function} */
(webjunk.complex.cdiv.cljs$lang$applyTo = (function (seq8397){
var G__8398 = cljs.core.first(seq8397);
var seq8397__$1 = cljs.core.next(seq8397);
var G__8399 = cljs.core.first(seq8397__$1);
var seq8397__$2 = cljs.core.next(seq8397__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8398,G__8399,seq8397__$2);
}));

(webjunk.complex.cdiv.cljs$lang$maxFixedArity = (2));

webjunk.complex.cis = (function webjunk$complex$cis(t){
return webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2(Math.cos(t),Math.sin(t));
});
webjunk.complex.cexp = (function webjunk$complex$cexp(z){
return webjunk.complex.c_STAR_.cljs$core$IFn$_invoke$arity$2(webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((function (){var G__8406 = webjunk.complex.real(z);
return Math.exp(G__8406);
})(),(0)),webjunk.complex.cis(webjunk.complex.imag(z)));
});
webjunk.complex.make_op = (function webjunk$complex$make_op(complex_op,real_op){
return (function() { 
var G__8407__delegate = function (args){
if(cljs.core.truth_(cljs.core.some(webjunk.complex.complex_QMARK_,args))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(complex_op,cljs.core.map.cljs$core$IFn$_invoke$arity$2(webjunk.complex.ensure_complex,args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(real_op,args);
}
};
var G__8407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8408__i = 0, G__8408__a = new Array(arguments.length -  0);
while (G__8408__i < G__8408__a.length) {G__8408__a[G__8408__i] = arguments[G__8408__i + 0]; ++G__8408__i;}
  args = new cljs.core.IndexedSeq(G__8408__a,0,null);
} 
return G__8407__delegate.call(this,args);};
G__8407.cljs$lang$maxFixedArity = 0;
G__8407.cljs$lang$applyTo = (function (arglist__8409){
var args = cljs.core.seq(arglist__8409);
return G__8407__delegate(args);
});
G__8407.cljs$core$IFn$_invoke$arity$variadic = G__8407__delegate;
return G__8407;
})()
;
});
webjunk.complex._PLUS_ = webjunk.complex.make_op(webjunk.complex.c_PLUS_,cljs.core._PLUS_);
webjunk.complex._ = webjunk.complex.make_op(webjunk.complex.c_,cljs.core._);
webjunk.complex._STAR_ = webjunk.complex.make_op(webjunk.complex.c_STAR_,cljs.core._STAR_);
webjunk.complex._SLASH_ = webjunk.complex.make_op(webjunk.complex.cdiv,cljs.core._SLASH_);
webjunk.complex.exp = webjunk.complex.make_op(webjunk.complex.cexp,(function (p1__8410_SHARP_){
return Math.exp(p1__8410_SHARP_);
}));
webjunk.complex.abs = webjunk.complex.make_op(webjunk.complex.cabs,(function (p1__8411_SHARP_){
return Math.abs(p1__8411_SHARP_);
}));
webjunk.complex.c_cosh = (function webjunk$complex$c_cosh(z){
var G__8412 = (function (){var G__8414 = (webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1(z) : webjunk.complex.exp.call(null,z));
var G__8415 = (function (){var G__8416 = (webjunk.complex._.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$1(z) : webjunk.complex._.call(null,z));
return (webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1(G__8416) : webjunk.complex.exp.call(null,G__8416));
})();
return (webjunk.complex._PLUS_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._PLUS_.cljs$core$IFn$_invoke$arity$2(G__8414,G__8415) : webjunk.complex._PLUS_.call(null,G__8414,G__8415));
})();
var G__8413 = (2);
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8412,G__8413) : webjunk.complex._SLASH_.call(null,G__8412,G__8413));
});
webjunk.complex.c_sinh = (function webjunk$complex$c_sinh(z){
var G__8417 = (function (){var G__8419 = (webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1(z) : webjunk.complex.exp.call(null,z));
var G__8420 = (function (){var G__8421 = (webjunk.complex._.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$1(z) : webjunk.complex._.call(null,z));
return (webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex.exp.cljs$core$IFn$_invoke$arity$1(G__8421) : webjunk.complex.exp.call(null,G__8421));
})();
return (webjunk.complex._.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._.cljs$core$IFn$_invoke$arity$2(G__8419,G__8420) : webjunk.complex._.call(null,G__8419,G__8420));
})();
var G__8418 = (2);
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8417,G__8418) : webjunk.complex._SLASH_.call(null,G__8417,G__8418));
});
webjunk.complex.c_tanh = (function webjunk$complex$c_tanh(z){
var G__8422 = webjunk.complex.c_sinh(z);
var G__8423 = webjunk.complex.c_cosh(z);
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8422,G__8423) : webjunk.complex._SLASH_.call(null,G__8422,G__8423));
});
webjunk.complex.c_cos = (function webjunk$complex$c_cos(z){
var G__8424 = webjunk.complex.c_cosh((webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(webjunk.complex.i,z) : webjunk.complex._STAR_.call(null,webjunk.complex.i,z)));
var G__8425 = (2);
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8424,G__8425) : webjunk.complex._SLASH_.call(null,G__8424,G__8425));
});
try{var values__8050__auto___8433 = (new cljs.core.List(null,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1((1)),(new cljs.core.List(null,(function (){var G__8428 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(2));
var G__8429 = (function (){var G__8430 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(2));
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1(G__8430) : webjunk.complex._SLASH_.call(null,G__8430));
})();
return (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(G__8428,G__8429) : webjunk.complex._STAR_.call(null,G__8428,G__8429));
})(),null,(1),null)),(2),null));
var result__8051__auto___8434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8050__auto___8433);
if(cljs.core.truth_(result__8051__auto___8434)){
var G__8431_8435 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$pass,5,115,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),115,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8433),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8431_8435) : cljs.test.report.call(null,G__8431_8435));
} else {
var G__8432_8436 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$fail,5,115,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),115,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8433),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8432_8436) : cljs.test.report.call(null,G__8432_8436));
}

}catch (e8426){var t__8101__auto___8437 = e8426;
var G__8427_8438 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$error,5,115,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),115,t__8101__auto___8437,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8427_8438) : cljs.test.report.call(null,G__8427_8438));
}webjunk.complex.c_sin = (function webjunk$complex$c_sin(z){
var G__8439 = webjunk.complex.c_sinh((webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(webjunk.complex.i,z) : webjunk.complex._STAR_.call(null,webjunk.complex.i,z)));
var G__8440 = (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2((2),webjunk.complex.i) : webjunk.complex._STAR_.call(null,(2),webjunk.complex.i));
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8439,G__8440) : webjunk.complex._SLASH_.call(null,G__8439,G__8440));
});
webjunk.complex.c_tan = (function webjunk$complex$c_tan(z){
var G__8441 = webjunk.complex.c_sin(z);
var G__8442 = webjunk.complex.c_cos(z);
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$2(G__8441,G__8442) : webjunk.complex._SLASH_.call(null,G__8441,G__8442));
});
webjunk.complex.cosh = webjunk.complex.make_op(webjunk.complex.c_cosh,(function (p1__8443_SHARP_){
return Math.cosh(p1__8443_SHARP_);
}));
webjunk.complex.sinh = webjunk.complex.make_op(webjunk.complex.c_sinh,(function (p1__8444_SHARP_){
return Math.sinh(p1__8444_SHARP_);
}));
webjunk.complex.tanh = webjunk.complex.make_op(webjunk.complex.c_tanh,(function (p1__8445_SHARP_){
return Math.tanh(p1__8445_SHARP_);
}));
webjunk.complex.cos = webjunk.complex.make_op(webjunk.complex.c_cos,(function (p1__8446_SHARP_){
return Math.cos(p1__8446_SHARP_);
}));
webjunk.complex.sin = webjunk.complex.make_op(webjunk.complex.c_sin,(function (p1__8447_SHARP_){
return Math.sin(p1__8447_SHARP_);
}));
webjunk.complex.tan = webjunk.complex.make_op(webjunk.complex.c_tan,(function (p1__8448_SHARP_){
return Math.tan(p1__8448_SHARP_);
}));
webjunk.complex.human_str = (function webjunk$complex$human_str(p__8449){
var vec__8450 = p__8449;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8450,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8450,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),(((y < (0)))?"":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"i"].join('');
});
webjunk.complex.read_complex = (function webjunk$complex$read_complex(v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(webjunk.complex.complex,v);
});
try{var values__8050__auto___8460 = (new cljs.core.List(null,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1((1)),(new cljs.core.List(null,(function (){var G__8455 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(2));
var G__8456 = (function (){var G__8457 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(2));
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1(G__8457) : webjunk.complex._SLASH_.call(null,G__8457));
})();
return (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(G__8455,G__8456) : webjunk.complex._STAR_.call(null,G__8455,G__8456));
})(),null,(1),null)),(2),null));
var result__8051__auto___8461 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8050__auto___8460);
if(cljs.core.truth_(result__8051__auto___8461)){
var G__8458_8462 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$pass,5,138,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),138,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8460),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8458_8462) : cljs.test.report.call(null,G__8458_8462));
} else {
var G__8459_8463 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$fail,5,138,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),138,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8460),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8459_8463) : cljs.test.report.call(null,G__8459_8463));
}

}catch (e8453){var t__8101__auto___8464 = e8453;
var G__8454_8465 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$error,5,138,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(2))))),138,t__8101__auto___8464,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8454_8465) : cljs.test.report.call(null,G__8454_8465));
}try{var values__8050__auto___8473 = (new cljs.core.List(null,webjunk.complex.complex.cljs$core$IFn$_invoke$arity$1((1)),(new cljs.core.List(null,(function (){var G__8468 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(3));
var G__8469 = (function (){var G__8470 = webjunk.complex.complex.cljs$core$IFn$_invoke$arity$2((2),(3));
return (webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1 ? webjunk.complex._SLASH_.cljs$core$IFn$_invoke$arity$1(G__8470) : webjunk.complex._SLASH_.call(null,G__8470));
})();
return (webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2 ? webjunk.complex._STAR_.cljs$core$IFn$_invoke$arity$2(G__8468,G__8469) : webjunk.complex._STAR_.call(null,G__8468,G__8469));
})(),null,(1),null)),(2),null));
var result__8051__auto___8474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8050__auto___8473);
if(cljs.core.truth_(result__8051__auto___8474)){
var G__8471_8475 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$pass,5,139,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3))))),139,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8473),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8471_8475) : cljs.test.report.call(null,G__8471_8475));
} else {
var G__8472_8476 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$fail,5,139,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3))))),139,(new cljs.core.List(null,cljs.core.cst$sym$not,(new cljs.core.List(null,cljs.core.cons(cljs.core.cst$sym$_EQ_,values__8050__auto___8473),null,(1),null)),(2),null)),null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8472_8476) : cljs.test.report.call(null,G__8472_8476));
}

}catch (e8466){var t__8101__auto___8477 = e8466;
var G__8467_8478 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$type,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$expected,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$actual,cljs.core.cst$kw$message],["/home/riles/code/euler-taylor-github/target/cljsbuild-compiler-0/webjunk/complex.cljc",56,cljs.core.cst$kw$error,5,139,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$complex,(1)),cljs.core.list(cljs.core.cst$sym$_STAR_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3)),cljs.core.list(cljs.core.cst$sym$_SLASH_,cljs.core.list(cljs.core.cst$sym$complex,(2),(3))))),139,t__8101__auto___8477,null]);
(cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__8467_8478) : cljs.test.report.call(null,G__8467_8478));
}