goog.provide('sci.impl.interop');
sci.impl.interop.invoke_instance_method = (function sci$impl$interop$invoke_instance_method(obj,_target_class,method_name,args){
if(("-" === method_name.charAt((0)))){
return (obj[cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1))]);
} else {
var temp__5733__auto__ = (obj[method_name]);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(method,obj,args);
} else {
throw (new Error(["Could not find method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)].join('')));
}
}
});
sci.impl.interop.invoke_static_method = (function sci$impl$interop$invoke_static_method(p__77353,args){
var vec__77356 = p__77353;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(1),null);
var temp__5733__auto__ = goog.object.get(class$,method_name);
if(cljs.core.truth_(temp__5733__auto__)){
var method = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(method,args);
} else {
throw (new Error("Could not find method",method_name));
}
});
sci.impl.interop.get_static_field = (function sci$impl$interop$get_static_field(_){
throw (new Error("Not implemented yet."));
});
sci.impl.interop.invoke_constructor = (function sci$impl$interop$invoke_constructor(constructor$,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(constructor$,args);
});
sci.impl.interop.fully_qualify_class = (function sci$impl$interop$fully_qualify_class(p__77366,sym){
var map__77367 = p__77366;
var map__77367__$1 = (((((!((map__77367 == null))))?(((((map__77367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77367):map__77367);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77367__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77367__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var or__4126__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
if(cljs.core.contains_QMARK_(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)))){
return sym;
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_(class__GT_opts,sym)){
return sym;
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var env__$1 = cljs.core.deref(env);
var or__4126__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(env__$1),sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
}
}
});
sci.impl.interop.resolve_class_opts = (function sci$impl$interop$resolve_class_opts(p__77393,sym){
var map__77395 = p__77393;
var map__77395__$1 = (((((!((map__77395 == null))))?(((((map__77395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77395):map__77395);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77395__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var class_opts = (function (){var or__4126__auto__ = (function (){var temp__5733__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5733__auto__)){
var ns_STAR_ = temp__5733__auto__;
if(("js" === ns_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,sym);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var env__$1 = cljs.core.deref(env);
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var cnn = sci.impl.vars.current_ns_name();
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
}
}
})();
return class_opts;
});
sci.impl.interop.resolve_class = (function sci$impl$interop$resolve_class(ctx,sym){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sci.impl.interop.resolve_class_opts(ctx,sym));
});

//# sourceMappingURL=sci.impl.interop.js.map
