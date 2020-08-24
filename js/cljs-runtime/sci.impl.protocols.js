goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101710 = arguments.length;
var i__4737__auto___101711 = (0);
while(true){
if((i__4737__auto___101711 < len__4736__auto___101710)){
args__4742__auto__.push((arguments[i__4737__auto___101711]));

var G__101712 = (i__4737__auto___101711 + (1));
i__4737__auto___101711 = G__101712;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__101372 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101372,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101372,(1),null);
var vec__101375 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101375,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101375,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__101379){
var vec__101382 = p__101379;
var seq__101383 = cljs.core.seq(vec__101382);
var first__101384 = cljs.core.first(seq__101383);
var seq__101383__$1 = cljs.core.next(seq__101383);
var method_name = first__101384;
var ___$2 = seq__101383__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__101341__auto__","x__101341__auto__",-106843113,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__101342__auto__","args__101342__auto__",1151624232,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__101343__auto__","methods__101343__auto__",2045271612,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__101341__auto__","x__101341__auto__",-106843113,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__101343__auto__","methods__101343__auto__",2045271612,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__101341__auto__","x__101341__auto__",-106843113,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__101342__auto__","args__101342__auto__",1151624232,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__101347__auto__","x__101347__auto__",1884810811,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__101348__auto__","args__101348__auto__",386103034,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__101350__auto__","meta__101350__auto__",-1994221781,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__101347__auto__","x__101347__auto__",1884810811,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__101351__auto__","method__101351__auto__",852298859,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__101350__auto__","meta__101350__auto__",-1994221781,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__101351__auto__","method__101351__auto__",852298859,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__101351__auto__","method__101351__auto__",852298859,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__101347__auto__","x__101347__auto__",1884810811,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__101348__auto__","args__101348__auto__",386103034,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__101347__auto__","x__101347__auto__",1884810811,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq101355){
var G__101356 = cljs.core.first(seq101355);
var seq101355__$1 = cljs.core.next(seq101355);
var G__101357 = cljs.core.first(seq101355__$1);
var seq101355__$2 = cljs.core.next(seq101355__$1);
var G__101358 = cljs.core.first(seq101355__$2);
var seq101355__$3 = cljs.core.next(seq101355__$2);
var G__101359 = cljs.core.first(seq101355__$3);
var seq101355__$4 = cljs.core.next(seq101355__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101356,G__101357,G__101358,G__101359,seq101355__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101774 = arguments.length;
var i__4737__auto___101776 = (0);
while(true){
if((i__4737__auto___101776 < len__4736__auto___101774)){
args__4742__auto__.push((arguments[i__4737__auto___101776]));

var G__101777 = (i__4737__auto___101776 + (1));
i__4737__auto___101776 = G__101777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__101424_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__101424_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__101442 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__101442.cljs$core$IFn$_invoke$arity$2 ? fexpr__101442.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__101442.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__101425_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__101425_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__101449){
var vec__101451 = p__101449;
var seq__101452 = cljs.core.seq(vec__101451);
var first__101453 = cljs.core.first(seq__101452);
var seq__101452__$1 = cljs.core.next(seq__101452);
var type = first__101453;
var meths = seq__101452__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq101429){
var G__101430 = cljs.core.first(seq101429);
var seq101429__$1 = cljs.core.next(seq101429);
var G__101431 = cljs.core.first(seq101429__$1);
var seq101429__$2 = cljs.core.next(seq101429__$1);
var G__101432 = cljs.core.first(seq101429__$2);
var seq101429__$3 = cljs.core.next(seq101429__$2);
var G__101433 = cljs.core.first(seq101429__$3);
var seq101429__$4 = cljs.core.next(seq101429__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101430,G__101431,G__101432,G__101433,seq101429__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101788 = arguments.length;
var i__4737__auto___101789 = (0);
while(true){
if((i__4737__auto___101789 < len__4736__auto___101788)){
args__4742__auto__.push((arguments[i__4737__auto___101789]));

var G__101792 = (i__4737__auto___101789 + (1));
i__4737__auto___101789 = G__101792;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__101477 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__101479 = null;
var count__101480 = (0);
var i__101481 = (0);
while(true){
if((i__101481 < count__101480)){
var vec__101583 = chunk__101479.cljs$core$IIndexed$_nth$arity$2(null,i__101481);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101583,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101583,(1),null);
var proto_ns_101794 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_101795 = sci.impl.vars.getName(proto_ns_101794);
var seq__101588_101796 = cljs.core.seq(mmap);
var chunk__101589_101797 = null;
var count__101590_101798 = (0);
var i__101591_101799 = (0);
while(true){
if((i__101591_101799 < count__101590_101798)){
var vec__101612_101801 = chunk__101589_101797.cljs$core$IIndexed$_nth$arity$2(null,i__101591_101799);
var fn_name_101802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101612_101801,(0),null);
var f_101803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101612_101801,(1),null);
var fn_sym_101804 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_101802));
var env_101805 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_101806 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_101805,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_101795,fn_sym_101804], null));
var multi_method_101807 = cljs.core.deref(multi_method_var_101806);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_101807,atype,f_101803);


var G__101808 = seq__101588_101796;
var G__101809 = chunk__101589_101797;
var G__101810 = count__101590_101798;
var G__101811 = (i__101591_101799 + (1));
seq__101588_101796 = G__101808;
chunk__101589_101797 = G__101809;
count__101590_101798 = G__101810;
i__101591_101799 = G__101811;
continue;
} else {
var temp__5735__auto___101812 = cljs.core.seq(seq__101588_101796);
if(temp__5735__auto___101812){
var seq__101588_101815__$1 = temp__5735__auto___101812;
if(cljs.core.chunked_seq_QMARK_(seq__101588_101815__$1)){
var c__4556__auto___101816 = cljs.core.chunk_first(seq__101588_101815__$1);
var G__101817 = cljs.core.chunk_rest(seq__101588_101815__$1);
var G__101818 = c__4556__auto___101816;
var G__101819 = cljs.core.count(c__4556__auto___101816);
var G__101820 = (0);
seq__101588_101796 = G__101817;
chunk__101589_101797 = G__101818;
count__101590_101798 = G__101819;
i__101591_101799 = G__101820;
continue;
} else {
var vec__101617_101822 = cljs.core.first(seq__101588_101815__$1);
var fn_name_101823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101617_101822,(0),null);
var f_101824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101617_101822,(1),null);
var fn_sym_101827 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_101823));
var env_101828 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_101831 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_101828,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_101795,fn_sym_101827], null));
var multi_method_101832 = cljs.core.deref(multi_method_var_101831);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_101832,atype,f_101824);


var G__101833 = cljs.core.next(seq__101588_101815__$1);
var G__101834 = null;
var G__101835 = (0);
var G__101836 = (0);
seq__101588_101796 = G__101833;
chunk__101589_101797 = G__101834;
count__101590_101798 = G__101835;
i__101591_101799 = G__101836;
continue;
}
} else {
}
}
break;
}


var G__101837 = seq__101477;
var G__101838 = chunk__101479;
var G__101839 = count__101480;
var G__101840 = (i__101481 + (1));
seq__101477 = G__101837;
chunk__101479 = G__101838;
count__101480 = G__101839;
i__101481 = G__101840;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__101477);
if(temp__5735__auto__){
var seq__101477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__101477__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__101477__$1);
var G__101842 = cljs.core.chunk_rest(seq__101477__$1);
var G__101843 = c__4556__auto__;
var G__101844 = cljs.core.count(c__4556__auto__);
var G__101845 = (0);
seq__101477 = G__101842;
chunk__101479 = G__101843;
count__101480 = G__101844;
i__101481 = G__101845;
continue;
} else {
var vec__101623 = cljs.core.first(seq__101477__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101623,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101623,(1),null);
var proto_ns_101846 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_101847 = sci.impl.vars.getName(proto_ns_101846);
var seq__101627_101848 = cljs.core.seq(mmap);
var chunk__101628_101849 = null;
var count__101629_101850 = (0);
var i__101630_101851 = (0);
while(true){
if((i__101630_101851 < count__101629_101850)){
var vec__101643_101853 = chunk__101628_101849.cljs$core$IIndexed$_nth$arity$2(null,i__101630_101851);
var fn_name_101854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101643_101853,(0),null);
var f_101857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101643_101853,(1),null);
var fn_sym_101859 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_101854));
var env_101860 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_101861 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_101860,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_101847,fn_sym_101859], null));
var multi_method_101862 = cljs.core.deref(multi_method_var_101861);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_101862,atype,f_101857);


var G__101864 = seq__101627_101848;
var G__101865 = chunk__101628_101849;
var G__101866 = count__101629_101850;
var G__101867 = (i__101630_101851 + (1));
seq__101627_101848 = G__101864;
chunk__101628_101849 = G__101865;
count__101629_101850 = G__101866;
i__101630_101851 = G__101867;
continue;
} else {
var temp__5735__auto___101868__$1 = cljs.core.seq(seq__101627_101848);
if(temp__5735__auto___101868__$1){
var seq__101627_101869__$1 = temp__5735__auto___101868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__101627_101869__$1)){
var c__4556__auto___101870 = cljs.core.chunk_first(seq__101627_101869__$1);
var G__101871 = cljs.core.chunk_rest(seq__101627_101869__$1);
var G__101872 = c__4556__auto___101870;
var G__101873 = cljs.core.count(c__4556__auto___101870);
var G__101874 = (0);
seq__101627_101848 = G__101871;
chunk__101628_101849 = G__101872;
count__101629_101850 = G__101873;
i__101630_101851 = G__101874;
continue;
} else {
var vec__101650_101876 = cljs.core.first(seq__101627_101869__$1);
var fn_name_101877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101650_101876,(0),null);
var f_101878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__101650_101876,(1),null);
var fn_sym_101882 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_101877));
var env_101883 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_101884 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_101883,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_101847,fn_sym_101882], null));
var multi_method_101885 = cljs.core.deref(multi_method_var_101884);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_101885,atype,f_101878);


var G__101886 = cljs.core.next(seq__101627_101869__$1);
var G__101887 = null;
var G__101888 = (0);
var G__101889 = (0);
seq__101627_101848 = G__101886;
chunk__101628_101849 = G__101887;
count__101629_101850 = G__101888;
i__101630_101851 = G__101889;
continue;
}
} else {
}
}
break;
}


var G__101890 = cljs.core.next(seq__101477__$1);
var G__101891 = null;
var G__101892 = (0);
var G__101893 = (0);
seq__101477 = G__101890;
chunk__101479 = G__101891;
count__101480 = G__101892;
i__101481 = G__101893;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq101461){
var G__101462 = cljs.core.first(seq101461);
var seq101461__$1 = cljs.core.next(seq101461);
var G__101463 = cljs.core.first(seq101461__$1);
var seq101461__$2 = cljs.core.next(seq101461__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101462,G__101463,seq101461__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101897 = arguments.length;
var i__4737__auto___101898 = (0);
while(true){
if((i__4737__auto___101898 < len__4736__auto___101897)){
args__4742__auto__.push((arguments[i__4737__auto___101898]));

var G__101899 = (i__4737__auto___101898 + (1));
i__4737__auto___101898 = G__101899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__101658_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__101658_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__101674){
var vec__101675 = p__101674;
var seq__101676 = cljs.core.seq(vec__101675);
var first__101677 = cljs.core.first(seq__101676);
var seq__101676__$1 = cljs.core.next(seq__101676);
var proto = first__101677;
var meths = seq__101676__$1;
var protocol_var = (function (){var fexpr__101681 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__101681.cljs$core$IFn$_invoke$arity$2 ? fexpr__101681.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__101681.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__101661_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__101661_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq101662){
var G__101663 = cljs.core.first(seq101662);
var seq101662__$1 = cljs.core.next(seq101662);
var G__101664 = cljs.core.first(seq101662__$1);
var seq101662__$2 = cljs.core.next(seq101662__$1);
var G__101665 = cljs.core.first(seq101662__$2);
var seq101662__$3 = cljs.core.next(seq101662__$2);
var G__101666 = cljs.core.first(seq101662__$3);
var seq101662__$4 = cljs.core.next(seq101662__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101663,G__101664,G__101665,G__101666,seq101662__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101907 = arguments.length;
var i__4737__auto___101908 = (0);
while(true){
if((i__4737__auto___101908 < len__4736__auto___101907)){
args__4742__auto__.push((arguments[i__4737__auto___101908]));

var G__101909 = (i__4737__auto___101908 + (1));
i__4737__auto___101908 = G__101909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,interface$,meths){
var meths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),meths));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified","cljs.core/-reified",-1831583173,null),null,(1),null)),(new cljs.core.List(null,interface$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meths__$1,null,(1),null))], 0))));
}));

(sci.impl.protocols.reify.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq101691){
var G__101692 = cljs.core.first(seq101691);
var seq101691__$1 = cljs.core.next(seq101691);
var G__101693 = cljs.core.first(seq101691__$1);
var seq101691__$2 = cljs.core.next(seq101691__$1);
var G__101694 = cljs.core.first(seq101691__$2);
var seq101691__$3 = cljs.core.next(seq101691__$2);
var G__101695 = cljs.core.first(seq101691__$3);
var seq101691__$4 = cljs.core.next(seq101691__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101692,G__101693,G__101694,G__101695,seq101691__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__101702_SHARP_){
return cljs.core.get_method(p1__101702_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__101704_SHARP_){
return cljs.core.get_method(p1__101704_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
