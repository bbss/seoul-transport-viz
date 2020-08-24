goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__100953 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__100955 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__100955);

try{var G__100957 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__100957);

return G__100957;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__100953);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__100964 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__100965 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__100965);

try{var G__100966 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__100966);

return G__100966;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__100964);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__100967 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__100968 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__100968);

try{var G__100970 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__100970);

return G__100970;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__100967);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101194 = arguments.length;
var i__4737__auto___101196 = (0);
while(true){
if((i__4737__auto___101196 < len__4736__auto___101194)){
args__4742__auto__.push((arguments[i__4737__auto___101196]));

var G__101200 = (i__4737__auto___101196 + (1));
i__4737__auto___101196 = G__101200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__100984 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__100985 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__100986 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__100988 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__100989 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__100990 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__100988);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__100989);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__100990);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__100986);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__100985);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__100984);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq100977){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq100977));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101205 = arguments.length;
var i__4737__auto___101206 = (0);
while(true){
if((i__4737__auto___101206 < len__4736__auto___101205)){
args__4742__auto__.push((arguments[i__4737__auto___101206]));

var G__101208 = (i__4737__auto___101206 + (1));
i__4737__auto___101206 = G__101208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101007 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101008 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__101009 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__101010 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101011 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__101012 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101010);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101011);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__101012);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__101009);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101008);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101007);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq101004){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101004));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101223 = arguments.length;
var i__4737__auto___101225 = (0);
while(true){
if((i__4737__auto___101225 < len__4736__auto___101223)){
args__4742__auto__.push((arguments[i__4737__auto___101225]));

var G__101226 = (i__4737__auto___101225 + (1));
i__4737__auto___101225 = G__101226;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101024 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101025 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__101026 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__101027 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101028 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__101029 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101027);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101028);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__101029);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__101026);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101025);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101024);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq101021){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101021));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101244 = arguments.length;
var i__4737__auto___101245 = (0);
while(true){
if((i__4737__auto___101245 < len__4736__auto___101244)){
args__4742__auto__.push((arguments[i__4737__auto___101245]));

var G__101247 = (i__4737__auto___101245 + (1));
i__4737__auto___101245 = G__101247;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101049 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101050 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__101051 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__101052 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101053 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__101054 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101052);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101053);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__101054);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__101051);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101050);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101049);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq101040){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101040));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101252 = arguments.length;
var i__4737__auto___101253 = (0);
while(true){
if((i__4737__auto___101253 < len__4736__auto___101252)){
args__4742__auto__.push((arguments[i__4737__auto___101253]));

var G__101258 = (i__4737__auto___101253 + (1));
i__4737__auto___101253 = G__101258;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101072 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101073 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__101074 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101075 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101074);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101075);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101073);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101072);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq101060){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101060));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101273 = arguments.length;
var i__4737__auto___101277 = (0);
while(true){
if((i__4737__auto___101277 < len__4736__auto___101273)){
args__4742__auto__.push((arguments[i__4737__auto___101277]));

var G__101279 = (i__4737__auto___101277 + (1));
i__4737__auto___101277 = G__101279;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101103 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101104 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__101105 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__101106 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101107 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__101108 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101106);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101107);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__101108);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__101105);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101104);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101103);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq101085){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101085));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101319 = arguments.length;
var i__4737__auto___101320 = (0);
while(true){
if((i__4737__auto___101320 < len__4736__auto___101319)){
args__4742__auto__.push((arguments[i__4737__auto___101320]));

var G__101323 = (i__4737__auto___101320 + (1));
i__4737__auto___101320 = G__101323;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__101121 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__101122 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__101123 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__101124 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__101125 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__101126 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__101124);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__101125);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__101126);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__101123);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__101122);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__101121);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq101117){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq101117));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___101344 = arguments.length;
var i__4737__auto___101346 = (0);
while(true){
if((i__4737__auto___101346 < len__4736__auto___101344)){
args__4742__auto__.push((arguments[i__4737__auto___101346]));

var G__101352 = (i__4737__auto___101346 + (1));
i__4737__auto___101346 = G__101352;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__101140__auto__","s__101140__auto__",1455777045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__101140__auto__","s__101140__auto__",1455777045,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__101140__auto__","s__101140__auto__",1455777045,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq101141){
var G__101142 = cljs.core.first(seq101141);
var seq101141__$1 = cljs.core.next(seq101141);
var G__101143 = cljs.core.first(seq101141__$1);
var seq101141__$2 = cljs.core.next(seq101141__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__101142,G__101143,seq101141__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
