goog.provide('sci.impl.fns');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(fn_name,macro_QMARK_,args){
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

sci.impl.fns.parse_fn_args_PLUS_body = (function sci$impl$fns$parse_fn_args_PLUS_body(ctx,interpret,eval_do_STAR_,p__77413,fn_name,macro_QMARK_,with_meta_QMARK_){
var map__77415 = p__77413;
var map__77415__$1 = (((((!((map__77415 == null))))?(((((map__77415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77415):map__77415);
var _m = map__77415__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77415__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77415__$1,new cljs.core.Keyword("sci.impl","var-arg-name","sci.impl/var-arg-name",1800498100));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77415__$1,new cljs.core.Keyword("sci.impl","params","sci.impl/params",-175360738));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77415__$1,new cljs.core.Keyword("sci.impl","body","sci.impl/body",-1493886648));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var f = (function() { 
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate = function (args){
while(true){
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx);
var bindings__$1 = (function (){var args__$1 = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args__$1);
} else {
if(args__$1){
} else {
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
}

var G__77469 = cljs.core.next(args__$1);
var G__77470 = cljs.core.next(params__$1);
var G__77471 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,fp,cljs.core.first(args__$1));
args__$1 = G__77469;
params__$1 = G__77470;
ret = G__77471;
continue;
}
} else {
if(args__$1){
sci.impl.fns.throw_arity(fn_name,macro_QMARK_,args__$1);
} else {
}

return ret;
}
break;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings__$1);
var ret = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(body)))?(function (){var G__77436 = ctx__$1;
var G__77437 = cljs.core.first(body);
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(G__77436,G__77437) : interpret.call(null,G__77436,G__77437));
})():(eval_do_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_do_STAR_.cljs$core$IFn$_invoke$arity$2(ctx__$1,body) : eval_do_STAR_.call(null,ctx__$1,body)));
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var G__77475 = sci.impl.types.getVal(ret);
args = G__77475;
continue;
} else {
return ret;
}
break;
}
};
var sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77476__i = 0, G__77476__a = new Array(arguments.length -  0);
while (G__77476__i < G__77476__a.length) {G__77476__a[G__77476__i] = arguments[G__77476__i + 0]; ++G__77476__i;}
  args = new cljs.core.IndexedSeq(G__77476__a,0,null);
} 
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate.call(this,args);};
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$maxFixedArity = 0;
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$lang$applyTo = (function (arglist__77477){
var args = cljs.core.seq(arglist__77477);
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate(args);
});
sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn__delegate;
return sci$impl$fns$parse_fn_args_PLUS_body_$_run_fn;
})()
;
if(cljs.core.truth_(with_meta_QMARK_)){
return cljs.core.with_meta(f,(cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052),fixed_arity], null)));
} else {
return f;
}
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__77439 = cljs.core.meta(f);
var map__77439__$1 = (((((!((map__77439 == null))))?(((((map__77439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77439):map__77439);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77439__$1,new cljs.core.Keyword("sci.impl","fixed-arity","sci.impl/fixed-arity",-1251617052));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77439__$1,new cljs.core.Keyword("sci.impl","min-var-args-arity","sci.impl/min-var-args-arity",-1081358721));
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4115__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4115__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,eval_do_STAR_,p__77450){
var map__77451 = p__77450;
var map__77451__$1 = (((((!((map__77451 == null))))?(((((map__77451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77451):map__77451);
var f = map__77451__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77451__$1,new cljs.core.Keyword("sci.impl","fn-bodies","sci.impl/fn-bodies",134751661));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77451__$1,new cljs.core.Keyword("sci.impl","fn-name","sci.impl/fn-name",-1172300569));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var call_self = (function() { 
var G__77499__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var G__77499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77501__i = 0, G__77501__a = new Array(arguments.length -  0);
while (G__77501__i < G__77501__a.length) {G__77501__a[G__77501__i] = arguments[G__77501__i + 0]; ++G__77501__i;}
  args = new cljs.core.IndexedSeq(G__77501__a,0,null);
} 
return G__77499__delegate.call(this,args);};
G__77499.cljs$lang$maxFixedArity = 0;
G__77499.cljs$lang$applyTo = (function (arglist__77503){
var args = cljs.core.seq(arglist__77503);
return G__77499__delegate(args);
});
G__77499.cljs$core$IFn$_invoke$arity$variadic = G__77499__delegate;
return G__77499;
})()
;
var ctx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),call_self):ctx);
var single_arity_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies));
var f__$1 = ((single_arity_QMARK_)?sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,cljs.core.first(fn_bodies),fn_name,macro_QMARK_,false):(function (){var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77446_SHARP_){
return sci.impl.fns.parse_fn_args_PLUS_body(ctx__$1,interpret,eval_do_STAR_,p1__77446_SHARP_,fn_name,macro_QMARK_,true);
}),fn_bodies);
return (function() { 
var G__77508__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5733__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5733__auto__)){
var f__$1 = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__77508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77526__i = 0, G__77526__a = new Array(arguments.length -  0);
while (G__77526__i < G__77526__a.length) {G__77526__a[G__77526__i] = arguments[G__77526__i + 0]; ++G__77526__i;}
  args = new cljs.core.IndexedSeq(G__77526__a,0,null);
} 
return G__77508__delegate.call(this,args);};
G__77508.cljs$lang$maxFixedArity = 0;
G__77508.cljs$lang$applyTo = (function (arglist__77528){
var args = cljs.core.seq(arglist__77528);
return G__77508__delegate(args);
});
G__77508.cljs$core$IFn$_invoke$arity$variadic = G__77508__delegate;
return G__77508;
})()
;
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__77447_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__77447_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
})):f__$1);
cljs.core.reset_BANG_(self_ref,f__$2);

return f__$2;
});

//# sourceMappingURL=sci.impl.fns.js.map
