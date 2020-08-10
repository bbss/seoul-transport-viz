goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__81617 = xs;
args__$2 = G__81617;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__81618 = xs;
args__$2 = G__81618;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81619 = arguments.length;
var i__4737__auto___81620 = (0);
while(true){
if((i__4737__auto___81620 < len__4736__auto___81619)){
args__4742__auto__.push((arguments[i__4737__auto___81620]));

var G__81621 = (i__4737__auto___81620 + (1));
i__4737__auto___81620 = G__81621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__81622 = ctx__$2;
var G__81623 = rest_let_bindings;
ctx__$1 = G__81622;
let_bindings__$1 = G__81623;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__81624 = nexprs;
exprs__$1 = G__81624;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq80642){
var G__80643 = cljs.core.first(seq80642);
var seq80642__$1 = cljs.core.next(seq80642);
var G__80644 = cljs.core.first(seq80642__$1);
var seq80642__$2 = cljs.core.next(seq80642__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80643,G__80644,seq80642__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__80656){
var vec__80657 = p__80656;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80657,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__80664 = prev;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__80664,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__80664;
})():(function (){
sci.impl.vars.bindRoot(prev,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
var vec__80670 = libspec;
var seq__80671 = cljs.core.seq(vec__80670);
var first__80672 = cljs.core.first(seq__80671);
var seq__80671__$1 = cljs.core.next(seq__80671);
var lib_name = first__80672;
var opts = seq__80671__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__80676 = opts;
var vec__80678 = G__80676;
var seq__80679 = cljs.core.seq(vec__80678);
var first__80680 = cljs.core.first(seq__80679);
var seq__80679__$1 = cljs.core.next(seq__80679);
var opt_name = first__80680;
var first__80680__$1 = cljs.core.first(seq__80679__$1);
var seq__80679__$2 = cljs.core.next(seq__80679__$1);
var fst_opt = first__80680__$1;
var rst_opts = seq__80679__$2;
var ret__$1 = ret;
var G__80676__$1 = G__80676;
while(true){
var ret__$2 = ret__$1;
var vec__80689 = G__80676__$1;
var seq__80690 = cljs.core.seq(vec__80689);
var first__80691 = cljs.core.first(seq__80690);
var seq__80690__$1 = cljs.core.next(seq__80690);
var opt_name__$1 = first__80691;
var first__80691__$1 = cljs.core.first(seq__80690__$1);
var seq__80690__$2 = cljs.core.next(seq__80690__$1);
var fst_opt__$1 = first__80691__$1;
var rst_opts__$1 = seq__80690__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__80692 = opt_name__$1;
var G__80692__$1 = (((G__80692 instanceof cljs.core.Keyword))?G__80692.fqn:null);
switch (G__80692__$1) {
case "as":
var G__81626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__81627 = rst_opts__$1;
ret__$1 = G__81626;
G__80676__$1 = G__81627;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__81628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__81629 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__81628;
G__80676__$1 = G__81629;
continue;

break;
case "refer":
var G__81630 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"refer","refer",-964295553),fst_opt__$1);
var G__81631 = rst_opts__$1;
ret__$1 = G__81630;
G__80676__$1 = G__81631;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80692__$1)].join('')));

}
}
break;
}
}
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,current_ns,the_loaded_ns,lib_name,p__80693){
var map__80694 = p__80693;
var map__80694__$1 = (((((!((map__80694 == null))))?(((((map__80694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80694):map__80694);
var _parsed_libspec = map__80694__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80694__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80694__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var the_current_ns__$2 = (cljs.core.truth_(refer)?(function (){
if(cljs.core.sequential_QMARK_(refer)){
} else {
throw (new Error(":refer value must be a sequential collection of symbols"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,sym,(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__80697 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80697,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
}),the_current_ns__$1,refer);
})()
:the_current_ns__$1);
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__80727 = sci.impl.interpreter.parse_libspec(libspec);
var map__80727__$1 = (((((!((map__80727 == null))))?(((((map__80727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80727):map__80727);
var parsed_libspec = map__80727__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80727__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80727__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__80735 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__80735) : load_fn.call(null,G__80735));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__80736 = temp__5733__auto____$2;
var map__80736__$1 = (((((!((map__80736 == null))))?(((((map__80736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80736):map__80736);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80736__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_file,file]));

try{var G__80743_81639 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__80744_81640 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__80743_81639,G__80744_81640) : sci.impl.interpreter.eval_string_STAR_.call(null,G__80743_81639,G__80744_81640));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e80742){if((e80742 instanceof Error)){
var e_81641 = e80742;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_81641;
} else {
throw e80742;

}
}finally {sci.impl.utils.set_namespace_BANG_(ctx,cnn,null);
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81654 = arguments.length;
var i__4737__auto___81655 = (0);
while(true){
if((i__4737__auto___81655 < len__4736__auto___81654)){
args__4742__auto__.push((arguments[i__4737__auto___81655]));

var G__81656 = (i__4737__auto___81655 + (1));
i__4737__auto___81655 = G__81656;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__80765 = ctx;
var G__80766 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80765,G__80766) : sci.impl.interpreter.interpret.call(null,G__80765,G__80766));
})();
if((ret instanceof cljs.core.Symbol)){
var G__81664 = (function (){var G__80767 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80767,current_libspec);
} else {
return G__80767;
}
})();
var G__81665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__81666 = cljs.core.next(args__$1);
libspecs = G__81664;
current_libspec = G__81665;
args__$1 = G__81666;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__81671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__81672 = null;
var G__81673 = cljs.core.next(args__$1);
libspecs = G__81671;
current_libspec = G__81672;
args__$1 = G__81673;
continue;
} else {
var G__81674 = (function (){var G__80768 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80768,current_libspec);
} else {
return G__80768;
}
})();
var G__81675 = ret;
var G__81676 = cljs.core.next(args__$1);
libspecs = G__81674;
current_libspec = G__81675;
args__$1 = G__81676;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__80769 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__80769,current_libspec);
} else {
return G__80769;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__80751_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__80751_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq80752){
var G__80754 = cljs.core.first(seq80752);
var seq80752__$1 = cljs.core.next(seq80752);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80754,seq80752__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__80771){
var vec__80772 = p__80771;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80772,(0),null);
var map__80775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80772,(1),null);
var map__80775__$1 = (((((!((map__80775 == null))))?(((((map__80775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80775):map__80775);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80775__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__80778 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80778,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80778,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__80784 = ctx;
var G__80785 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80784,G__80785) : sci.impl.interpreter.interpret.call(null,G__80784,G__80785));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__80793 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__80793__$1 = (((((!((map__80793 == null))))?(((((map__80793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80793):map__80793);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80793__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__80806 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__80807 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__80807);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__80806);
}}catch (e80795){if((e80795 instanceof Error)){
var e = e80795;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__80797 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__80798 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__80797,G__80798) : sci.impl.interpreter.interpret.call(null,G__80797,G__80798));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__80799 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e80795;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__80808){
var vec__80809 = p__80808;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80809,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80812_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80812_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80812_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__80814){
var vec__80815 = p__80814;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80815,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80815,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80815,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80813_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80813_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80813_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__80820,p__80821){
var map__80822 = p__80820;
var map__80822__$1 = (((((!((map__80822 == null))))?(((((map__80822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80822):map__80822);
var ctx = map__80822__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80822__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__80823 = p__80821;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80823,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80823,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80823,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80823,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var target_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
}
})();
var resolved_class = (function (){var or__4126__auto__ = target_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var class_name = resolved_class.name;
var class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,class_symbol);
}
})();
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80819_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__80819_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__80819_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__80827){
var vec__80828 = p__80827;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80828,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80828,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__80834){
var vec__80835 = p__80834;
var seq__80836 = cljs.core.seq(vec__80835);
var first__80837 = cljs.core.first(seq__80836);
var seq__80836__$1 = cljs.core.next(seq__80836);
var _ = first__80837;
var first__80837__$1 = cljs.core.first(seq__80836__$1);
var seq__80836__$2 = cljs.core.next(seq__80836__$1);
var ns_sym = first__80837__$1;
var exprs = seq__80836__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__80838 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80838,(1),null);
var G__80841_81713 = k;
var G__80841_81714__$1 = (((G__80841_81713 instanceof cljs.core.Keyword))?G__80841_81713.fqn:null);
switch (G__80841_81714__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__80841_81713,G__80841_81714__$1,vec__80838,k,v,ns_sym__$1,vec__80835,seq__80836,first__80837,seq__80836__$1,_,first__80837__$1,seq__80836__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__80841_81713,G__80841_81714__$1,vec__80838,k,v,ns_sym__$1,vec__80835,seq__80836,first__80837,seq__80836__$1,_,first__80837__$1,seq__80836__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80841_81714__$1)].join('')));

}

var G__81729 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__81729;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,p__80842){
var vec__80843 = p__80842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80843,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80843,(1),null);
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__80851){
var vec__80852 = p__80851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80852,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80852,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80852,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__80861 = exprs;
var vec__80865 = G__80861;
var seq__80866 = cljs.core.seq(vec__80865);
var first__80867 = cljs.core.first(seq__80866);
var seq__80866__$1 = cljs.core.next(seq__80866);
var expr = first__80867;
var exprs__$1 = seq__80866__$1;
var G__80861__$1 = G__80861;
while(true){
var vec__80868 = G__80861__$1;
var seq__80869 = cljs.core.seq(vec__80868);
var first__80870 = cljs.core.first(seq__80869);
var seq__80869__$1 = cljs.core.next(seq__80869);
var expr__$1 = first__80870;
var exprs__$2 = seq__80869__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e80871){if((e80871 instanceof Error)){
var e = e80871;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e80871;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__81754 = exprs__$3;
G__80861__$1 = G__81754;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__81070 = cljs.core.count(args);
switch (G__81070) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg80877 = (function (){var G__81071 = ctx;
var G__81072 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81071,G__81072) : sci.impl.interpreter.interpret.call(null,G__81071,G__81072));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg80877) : f.call(null,arg80877));

break;
case (2):
var arg80878 = (function (){var G__81076 = ctx;
var G__81077 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81076,G__81077) : sci.impl.interpreter.interpret.call(null,G__81076,G__81077));
})();
var args__$1 = cljs.core.rest(args);
var arg80879 = (function (){var G__81078 = ctx;
var G__81079 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81078,G__81079) : sci.impl.interpreter.interpret.call(null,G__81078,G__81079));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg80878,arg80879) : f.call(null,arg80878,arg80879));

break;
case (3):
var arg80880 = (function (){var G__81080 = ctx;
var G__81081 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81080,G__81081) : sci.impl.interpreter.interpret.call(null,G__81080,G__81081));
})();
var args__$1 = cljs.core.rest(args);
var arg80881 = (function (){var G__81082 = ctx;
var G__81083 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81082,G__81083) : sci.impl.interpreter.interpret.call(null,G__81082,G__81083));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80882 = (function (){var G__81084 = ctx;
var G__81085 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81084,G__81085) : sci.impl.interpreter.interpret.call(null,G__81084,G__81085));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg80880,arg80881,arg80882) : f.call(null,arg80880,arg80881,arg80882));

break;
case (4):
var arg80883 = (function (){var G__81086 = ctx;
var G__81087 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81086,G__81087) : sci.impl.interpreter.interpret.call(null,G__81086,G__81087));
})();
var args__$1 = cljs.core.rest(args);
var arg80884 = (function (){var G__81088 = ctx;
var G__81089 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81088,G__81089) : sci.impl.interpreter.interpret.call(null,G__81088,G__81089));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80885 = (function (){var G__81090 = ctx;
var G__81091 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81090,G__81091) : sci.impl.interpreter.interpret.call(null,G__81090,G__81091));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80886 = (function (){var G__81092 = ctx;
var G__81093 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81092,G__81093) : sci.impl.interpreter.interpret.call(null,G__81092,G__81093));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg80883,arg80884,arg80885,arg80886) : f.call(null,arg80883,arg80884,arg80885,arg80886));

break;
case (5):
var arg80887 = (function (){var G__81094 = ctx;
var G__81095 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81094,G__81095) : sci.impl.interpreter.interpret.call(null,G__81094,G__81095));
})();
var args__$1 = cljs.core.rest(args);
var arg80888 = (function (){var G__81096 = ctx;
var G__81097 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81096,G__81097) : sci.impl.interpreter.interpret.call(null,G__81096,G__81097));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80889 = (function (){var G__81098 = ctx;
var G__81099 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81098,G__81099) : sci.impl.interpreter.interpret.call(null,G__81098,G__81099));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80890 = (function (){var G__81100 = ctx;
var G__81101 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81100,G__81101) : sci.impl.interpreter.interpret.call(null,G__81100,G__81101));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80891 = (function (){var G__81102 = ctx;
var G__81103 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81102,G__81103) : sci.impl.interpreter.interpret.call(null,G__81102,G__81103));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg80887,arg80888,arg80889,arg80890,arg80891) : f.call(null,arg80887,arg80888,arg80889,arg80890,arg80891));

break;
case (6):
var arg80892 = (function (){var G__81104 = ctx;
var G__81105 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81104,G__81105) : sci.impl.interpreter.interpret.call(null,G__81104,G__81105));
})();
var args__$1 = cljs.core.rest(args);
var arg80893 = (function (){var G__81106 = ctx;
var G__81107 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81106,G__81107) : sci.impl.interpreter.interpret.call(null,G__81106,G__81107));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80894 = (function (){var G__81109 = ctx;
var G__81110 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81109,G__81110) : sci.impl.interpreter.interpret.call(null,G__81109,G__81110));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80895 = (function (){var G__81111 = ctx;
var G__81112 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81111,G__81112) : sci.impl.interpreter.interpret.call(null,G__81111,G__81112));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80896 = (function (){var G__81113 = ctx;
var G__81114 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81113,G__81114) : sci.impl.interpreter.interpret.call(null,G__81113,G__81114));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80897 = (function (){var G__81115 = ctx;
var G__81116 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81115,G__81116) : sci.impl.interpreter.interpret.call(null,G__81115,G__81116));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg80892,arg80893,arg80894,arg80895,arg80896,arg80897) : f.call(null,arg80892,arg80893,arg80894,arg80895,arg80896,arg80897));

break;
case (7):
var arg80898 = (function (){var G__81117 = ctx;
var G__81118 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81117,G__81118) : sci.impl.interpreter.interpret.call(null,G__81117,G__81118));
})();
var args__$1 = cljs.core.rest(args);
var arg80899 = (function (){var G__81119 = ctx;
var G__81120 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81119,G__81120) : sci.impl.interpreter.interpret.call(null,G__81119,G__81120));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80900 = (function (){var G__81121 = ctx;
var G__81122 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81121,G__81122) : sci.impl.interpreter.interpret.call(null,G__81121,G__81122));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80901 = (function (){var G__81123 = ctx;
var G__81124 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81123,G__81124) : sci.impl.interpreter.interpret.call(null,G__81123,G__81124));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80902 = (function (){var G__81125 = ctx;
var G__81126 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81125,G__81126) : sci.impl.interpreter.interpret.call(null,G__81125,G__81126));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80903 = (function (){var G__81131 = ctx;
var G__81132 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81131,G__81132) : sci.impl.interpreter.interpret.call(null,G__81131,G__81132));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80904 = (function (){var G__81133 = ctx;
var G__81134 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81133,G__81134) : sci.impl.interpreter.interpret.call(null,G__81133,G__81134));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg80898,arg80899,arg80900,arg80901,arg80902,arg80903,arg80904) : f.call(null,arg80898,arg80899,arg80900,arg80901,arg80902,arg80903,arg80904));

break;
case (8):
var arg80905 = (function (){var G__81136 = ctx;
var G__81137 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81136,G__81137) : sci.impl.interpreter.interpret.call(null,G__81136,G__81137));
})();
var args__$1 = cljs.core.rest(args);
var arg80906 = (function (){var G__81138 = ctx;
var G__81139 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81138,G__81139) : sci.impl.interpreter.interpret.call(null,G__81138,G__81139));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80907 = (function (){var G__81140 = ctx;
var G__81141 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81140,G__81141) : sci.impl.interpreter.interpret.call(null,G__81140,G__81141));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80908 = (function (){var G__81142 = ctx;
var G__81143 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81142,G__81143) : sci.impl.interpreter.interpret.call(null,G__81142,G__81143));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80909 = (function (){var G__81144 = ctx;
var G__81145 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81144,G__81145) : sci.impl.interpreter.interpret.call(null,G__81144,G__81145));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80910 = (function (){var G__81147 = ctx;
var G__81148 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81147,G__81148) : sci.impl.interpreter.interpret.call(null,G__81147,G__81148));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80911 = (function (){var G__81149 = ctx;
var G__81150 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81149,G__81150) : sci.impl.interpreter.interpret.call(null,G__81149,G__81150));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80912 = (function (){var G__81151 = ctx;
var G__81152 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81151,G__81152) : sci.impl.interpreter.interpret.call(null,G__81151,G__81152));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg80905,arg80906,arg80907,arg80908,arg80909,arg80910,arg80911,arg80912) : f.call(null,arg80905,arg80906,arg80907,arg80908,arg80909,arg80910,arg80911,arg80912));

break;
case (9):
var arg80913 = (function (){var G__81157 = ctx;
var G__81158 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81157,G__81158) : sci.impl.interpreter.interpret.call(null,G__81157,G__81158));
})();
var args__$1 = cljs.core.rest(args);
var arg80914 = (function (){var G__81159 = ctx;
var G__81160 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81159,G__81160) : sci.impl.interpreter.interpret.call(null,G__81159,G__81160));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80915 = (function (){var G__81161 = ctx;
var G__81162 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81161,G__81162) : sci.impl.interpreter.interpret.call(null,G__81161,G__81162));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80916 = (function (){var G__81163 = ctx;
var G__81164 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81163,G__81164) : sci.impl.interpreter.interpret.call(null,G__81163,G__81164));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80917 = (function (){var G__81165 = ctx;
var G__81166 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81165,G__81166) : sci.impl.interpreter.interpret.call(null,G__81165,G__81166));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80918 = (function (){var G__81167 = ctx;
var G__81168 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81167,G__81168) : sci.impl.interpreter.interpret.call(null,G__81167,G__81168));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80919 = (function (){var G__81169 = ctx;
var G__81170 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81169,G__81170) : sci.impl.interpreter.interpret.call(null,G__81169,G__81170));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80920 = (function (){var G__81171 = ctx;
var G__81172 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81171,G__81172) : sci.impl.interpreter.interpret.call(null,G__81171,G__81172));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80921 = (function (){var G__81173 = ctx;
var G__81174 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81173,G__81174) : sci.impl.interpreter.interpret.call(null,G__81173,G__81174));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg80913,arg80914,arg80915,arg80916,arg80917,arg80918,arg80919,arg80920,arg80921) : f.call(null,arg80913,arg80914,arg80915,arg80916,arg80917,arg80918,arg80919,arg80920,arg80921));

break;
case (10):
var arg80922 = (function (){var G__81175 = ctx;
var G__81176 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81175,G__81176) : sci.impl.interpreter.interpret.call(null,G__81175,G__81176));
})();
var args__$1 = cljs.core.rest(args);
var arg80923 = (function (){var G__81177 = ctx;
var G__81178 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81177,G__81178) : sci.impl.interpreter.interpret.call(null,G__81177,G__81178));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80924 = (function (){var G__81179 = ctx;
var G__81180 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81179,G__81180) : sci.impl.interpreter.interpret.call(null,G__81179,G__81180));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80925 = (function (){var G__81181 = ctx;
var G__81182 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81181,G__81182) : sci.impl.interpreter.interpret.call(null,G__81181,G__81182));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80926 = (function (){var G__81183 = ctx;
var G__81184 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81183,G__81184) : sci.impl.interpreter.interpret.call(null,G__81183,G__81184));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80927 = (function (){var G__81185 = ctx;
var G__81186 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81185,G__81186) : sci.impl.interpreter.interpret.call(null,G__81185,G__81186));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80928 = (function (){var G__81187 = ctx;
var G__81188 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81187,G__81188) : sci.impl.interpreter.interpret.call(null,G__81187,G__81188));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80929 = (function (){var G__81189 = ctx;
var G__81190 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81189,G__81190) : sci.impl.interpreter.interpret.call(null,G__81189,G__81190));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80930 = (function (){var G__81191 = ctx;
var G__81192 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81191,G__81192) : sci.impl.interpreter.interpret.call(null,G__81191,G__81192));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80931 = (function (){var G__81193 = ctx;
var G__81194 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81193,G__81194) : sci.impl.interpreter.interpret.call(null,G__81193,G__81194));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg80922,arg80923,arg80924,arg80925,arg80926,arg80927,arg80928,arg80929,arg80930,arg80931) : f.call(null,arg80922,arg80923,arg80924,arg80925,arg80926,arg80927,arg80928,arg80929,arg80930,arg80931));

break;
case (11):
var arg80932 = (function (){var G__81195 = ctx;
var G__81196 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81195,G__81196) : sci.impl.interpreter.interpret.call(null,G__81195,G__81196));
})();
var args__$1 = cljs.core.rest(args);
var arg80933 = (function (){var G__81197 = ctx;
var G__81198 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81197,G__81198) : sci.impl.interpreter.interpret.call(null,G__81197,G__81198));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80934 = (function (){var G__81202 = ctx;
var G__81203 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81202,G__81203) : sci.impl.interpreter.interpret.call(null,G__81202,G__81203));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80935 = (function (){var G__81204 = ctx;
var G__81205 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81204,G__81205) : sci.impl.interpreter.interpret.call(null,G__81204,G__81205));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80936 = (function (){var G__81206 = ctx;
var G__81207 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81206,G__81207) : sci.impl.interpreter.interpret.call(null,G__81206,G__81207));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80937 = (function (){var G__81208 = ctx;
var G__81209 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81208,G__81209) : sci.impl.interpreter.interpret.call(null,G__81208,G__81209));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80938 = (function (){var G__81210 = ctx;
var G__81211 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81210,G__81211) : sci.impl.interpreter.interpret.call(null,G__81210,G__81211));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80939 = (function (){var G__81212 = ctx;
var G__81213 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81212,G__81213) : sci.impl.interpreter.interpret.call(null,G__81212,G__81213));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80940 = (function (){var G__81214 = ctx;
var G__81215 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81214,G__81215) : sci.impl.interpreter.interpret.call(null,G__81214,G__81215));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80941 = (function (){var G__81216 = ctx;
var G__81217 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81216,G__81217) : sci.impl.interpreter.interpret.call(null,G__81216,G__81217));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg80942 = (function (){var G__81218 = ctx;
var G__81219 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81218,G__81219) : sci.impl.interpreter.interpret.call(null,G__81218,G__81219));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg80932,arg80933,arg80934,arg80935,arg80936,arg80937,arg80938,arg80939,arg80940,arg80941,arg80942) : f.call(null,arg80932,arg80933,arg80934,arg80935,arg80936,arg80937,arg80938,arg80939,arg80940,arg80941,arg80942));

break;
case (12):
var arg80943 = (function (){var G__81220 = ctx;
var G__81221 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81220,G__81221) : sci.impl.interpreter.interpret.call(null,G__81220,G__81221));
})();
var args__$1 = cljs.core.rest(args);
var arg80944 = (function (){var G__81222 = ctx;
var G__81223 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81222,G__81223) : sci.impl.interpreter.interpret.call(null,G__81222,G__81223));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80945 = (function (){var G__81224 = ctx;
var G__81225 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81224,G__81225) : sci.impl.interpreter.interpret.call(null,G__81224,G__81225));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80946 = (function (){var G__81226 = ctx;
var G__81227 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81226,G__81227) : sci.impl.interpreter.interpret.call(null,G__81226,G__81227));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80947 = (function (){var G__81228 = ctx;
var G__81229 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81228,G__81229) : sci.impl.interpreter.interpret.call(null,G__81228,G__81229));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80948 = (function (){var G__81230 = ctx;
var G__81231 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81230,G__81231) : sci.impl.interpreter.interpret.call(null,G__81230,G__81231));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80949 = (function (){var G__81234 = ctx;
var G__81235 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81234,G__81235) : sci.impl.interpreter.interpret.call(null,G__81234,G__81235));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80950 = (function (){var G__81236 = ctx;
var G__81237 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81236,G__81237) : sci.impl.interpreter.interpret.call(null,G__81236,G__81237));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80951 = (function (){var G__81238 = ctx;
var G__81239 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81238,G__81239) : sci.impl.interpreter.interpret.call(null,G__81238,G__81239));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80952 = (function (){var G__81240 = ctx;
var G__81241 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81240,G__81241) : sci.impl.interpreter.interpret.call(null,G__81240,G__81241));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg80953 = (function (){var G__81242 = ctx;
var G__81243 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81242,G__81243) : sci.impl.interpreter.interpret.call(null,G__81242,G__81243));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg80954 = (function (){var G__81244 = ctx;
var G__81245 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81244,G__81245) : sci.impl.interpreter.interpret.call(null,G__81244,G__81245));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg80943,arg80944,arg80945,arg80946,arg80947,arg80948,arg80949,arg80950,arg80951,arg80952,arg80953,arg80954) : f.call(null,arg80943,arg80944,arg80945,arg80946,arg80947,arg80948,arg80949,arg80950,arg80951,arg80952,arg80953,arg80954));

break;
case (13):
var arg80955 = (function (){var G__81246 = ctx;
var G__81247 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81246,G__81247) : sci.impl.interpreter.interpret.call(null,G__81246,G__81247));
})();
var args__$1 = cljs.core.rest(args);
var arg80956 = (function (){var G__81248 = ctx;
var G__81249 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81248,G__81249) : sci.impl.interpreter.interpret.call(null,G__81248,G__81249));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80957 = (function (){var G__81250 = ctx;
var G__81251 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81250,G__81251) : sci.impl.interpreter.interpret.call(null,G__81250,G__81251));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80958 = (function (){var G__81252 = ctx;
var G__81253 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81252,G__81253) : sci.impl.interpreter.interpret.call(null,G__81252,G__81253));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80959 = (function (){var G__81254 = ctx;
var G__81255 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81254,G__81255) : sci.impl.interpreter.interpret.call(null,G__81254,G__81255));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80960 = (function (){var G__81256 = ctx;
var G__81257 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81256,G__81257) : sci.impl.interpreter.interpret.call(null,G__81256,G__81257));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80961 = (function (){var G__81258 = ctx;
var G__81259 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81258,G__81259) : sci.impl.interpreter.interpret.call(null,G__81258,G__81259));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80962 = (function (){var G__81260 = ctx;
var G__81261 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81260,G__81261) : sci.impl.interpreter.interpret.call(null,G__81260,G__81261));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80963 = (function (){var G__81262 = ctx;
var G__81263 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81262,G__81263) : sci.impl.interpreter.interpret.call(null,G__81262,G__81263));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80964 = (function (){var G__81264 = ctx;
var G__81265 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81264,G__81265) : sci.impl.interpreter.interpret.call(null,G__81264,G__81265));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg80965 = (function (){var G__81266 = ctx;
var G__81267 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81266,G__81267) : sci.impl.interpreter.interpret.call(null,G__81266,G__81267));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg80966 = (function (){var G__81268 = ctx;
var G__81269 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81268,G__81269) : sci.impl.interpreter.interpret.call(null,G__81268,G__81269));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg80967 = (function (){var G__81270 = ctx;
var G__81271 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81270,G__81271) : sci.impl.interpreter.interpret.call(null,G__81270,G__81271));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg80955,arg80956,arg80957,arg80958,arg80959,arg80960,arg80961,arg80962,arg80963,arg80964,arg80965,arg80966,arg80967) : f.call(null,arg80955,arg80956,arg80957,arg80958,arg80959,arg80960,arg80961,arg80962,arg80963,arg80964,arg80965,arg80966,arg80967));

break;
case (14):
var arg80969 = (function (){var G__81273 = ctx;
var G__81274 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81273,G__81274) : sci.impl.interpreter.interpret.call(null,G__81273,G__81274));
})();
var args__$1 = cljs.core.rest(args);
var arg80970 = (function (){var G__81275 = ctx;
var G__81276 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81275,G__81276) : sci.impl.interpreter.interpret.call(null,G__81275,G__81276));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80971 = (function (){var G__81277 = ctx;
var G__81278 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81277,G__81278) : sci.impl.interpreter.interpret.call(null,G__81277,G__81278));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80972 = (function (){var G__81279 = ctx;
var G__81280 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81279,G__81280) : sci.impl.interpreter.interpret.call(null,G__81279,G__81280));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80973 = (function (){var G__81281 = ctx;
var G__81282 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81281,G__81282) : sci.impl.interpreter.interpret.call(null,G__81281,G__81282));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80974 = (function (){var G__81283 = ctx;
var G__81284 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81283,G__81284) : sci.impl.interpreter.interpret.call(null,G__81283,G__81284));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80975 = (function (){var G__81285 = ctx;
var G__81286 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81285,G__81286) : sci.impl.interpreter.interpret.call(null,G__81285,G__81286));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80976 = (function (){var G__81287 = ctx;
var G__81288 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81287,G__81288) : sci.impl.interpreter.interpret.call(null,G__81287,G__81288));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80977 = (function (){var G__81289 = ctx;
var G__81290 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81289,G__81290) : sci.impl.interpreter.interpret.call(null,G__81289,G__81290));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80978 = (function (){var G__81292 = ctx;
var G__81293 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81292,G__81293) : sci.impl.interpreter.interpret.call(null,G__81292,G__81293));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg80979 = (function (){var G__81294 = ctx;
var G__81295 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81294,G__81295) : sci.impl.interpreter.interpret.call(null,G__81294,G__81295));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg80980 = (function (){var G__81297 = ctx;
var G__81298 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81297,G__81298) : sci.impl.interpreter.interpret.call(null,G__81297,G__81298));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg80981 = (function (){var G__81299 = ctx;
var G__81300 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81299,G__81300) : sci.impl.interpreter.interpret.call(null,G__81299,G__81300));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg80982 = (function (){var G__81302 = ctx;
var G__81303 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81302,G__81303) : sci.impl.interpreter.interpret.call(null,G__81302,G__81303));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg80969,arg80970,arg80971,arg80972,arg80973,arg80974,arg80975,arg80976,arg80977,arg80978,arg80979,arg80980,arg80981,arg80982) : f.call(null,arg80969,arg80970,arg80971,arg80972,arg80973,arg80974,arg80975,arg80976,arg80977,arg80978,arg80979,arg80980,arg80981,arg80982));

break;
case (15):
var arg80983 = (function (){var G__81306 = ctx;
var G__81307 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81306,G__81307) : sci.impl.interpreter.interpret.call(null,G__81306,G__81307));
})();
var args__$1 = cljs.core.rest(args);
var arg80984 = (function (){var G__81308 = ctx;
var G__81309 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81308,G__81309) : sci.impl.interpreter.interpret.call(null,G__81308,G__81309));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg80985 = (function (){var G__81310 = ctx;
var G__81311 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81310,G__81311) : sci.impl.interpreter.interpret.call(null,G__81310,G__81311));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg80986 = (function (){var G__81312 = ctx;
var G__81313 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81312,G__81313) : sci.impl.interpreter.interpret.call(null,G__81312,G__81313));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg80987 = (function (){var G__81314 = ctx;
var G__81315 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81314,G__81315) : sci.impl.interpreter.interpret.call(null,G__81314,G__81315));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg80988 = (function (){var G__81316 = ctx;
var G__81317 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81316,G__81317) : sci.impl.interpreter.interpret.call(null,G__81316,G__81317));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg80989 = (function (){var G__81318 = ctx;
var G__81319 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81318,G__81319) : sci.impl.interpreter.interpret.call(null,G__81318,G__81319));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg80990 = (function (){var G__81320 = ctx;
var G__81321 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81320,G__81321) : sci.impl.interpreter.interpret.call(null,G__81320,G__81321));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg80991 = (function (){var G__81322 = ctx;
var G__81323 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81322,G__81323) : sci.impl.interpreter.interpret.call(null,G__81322,G__81323));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg80992 = (function (){var G__81327 = ctx;
var G__81328 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81327,G__81328) : sci.impl.interpreter.interpret.call(null,G__81327,G__81328));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg80993 = (function (){var G__81329 = ctx;
var G__81330 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81329,G__81330) : sci.impl.interpreter.interpret.call(null,G__81329,G__81330));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg80994 = (function (){var G__81331 = ctx;
var G__81332 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81331,G__81332) : sci.impl.interpreter.interpret.call(null,G__81331,G__81332));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg80995 = (function (){var G__81333 = ctx;
var G__81334 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81333,G__81334) : sci.impl.interpreter.interpret.call(null,G__81333,G__81334));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg80996 = (function (){var G__81335 = ctx;
var G__81336 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81335,G__81336) : sci.impl.interpreter.interpret.call(null,G__81335,G__81336));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg80997 = (function (){var G__81337 = ctx;
var G__81338 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81337,G__81338) : sci.impl.interpreter.interpret.call(null,G__81337,G__81338));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg80983,arg80984,arg80985,arg80986,arg80987,arg80988,arg80989,arg80990,arg80991,arg80992,arg80993,arg80994,arg80995,arg80996,arg80997) : f.call(null,arg80983,arg80984,arg80985,arg80986,arg80987,arg80988,arg80989,arg80990,arg80991,arg80992,arg80993,arg80994,arg80995,arg80996,arg80997));

break;
case (16):
var arg80998 = (function (){var G__81345 = ctx;
var G__81346 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81345,G__81346) : sci.impl.interpreter.interpret.call(null,G__81345,G__81346));
})();
var args__$1 = cljs.core.rest(args);
var arg80999 = (function (){var G__81347 = ctx;
var G__81348 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81347,G__81348) : sci.impl.interpreter.interpret.call(null,G__81347,G__81348));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81000 = (function (){var G__81349 = ctx;
var G__81350 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81349,G__81350) : sci.impl.interpreter.interpret.call(null,G__81349,G__81350));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81001 = (function (){var G__81351 = ctx;
var G__81352 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81351,G__81352) : sci.impl.interpreter.interpret.call(null,G__81351,G__81352));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81002 = (function (){var G__81353 = ctx;
var G__81354 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81353,G__81354) : sci.impl.interpreter.interpret.call(null,G__81353,G__81354));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81003 = (function (){var G__81355 = ctx;
var G__81356 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81355,G__81356) : sci.impl.interpreter.interpret.call(null,G__81355,G__81356));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81004 = (function (){var G__81357 = ctx;
var G__81358 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81357,G__81358) : sci.impl.interpreter.interpret.call(null,G__81357,G__81358));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81005 = (function (){var G__81360 = ctx;
var G__81361 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81360,G__81361) : sci.impl.interpreter.interpret.call(null,G__81360,G__81361));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81006 = (function (){var G__81362 = ctx;
var G__81363 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81362,G__81363) : sci.impl.interpreter.interpret.call(null,G__81362,G__81363));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81007 = (function (){var G__81365 = ctx;
var G__81366 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81365,G__81366) : sci.impl.interpreter.interpret.call(null,G__81365,G__81366));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81008 = (function (){var G__81367 = ctx;
var G__81368 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81367,G__81368) : sci.impl.interpreter.interpret.call(null,G__81367,G__81368));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81009 = (function (){var G__81369 = ctx;
var G__81370 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81369,G__81370) : sci.impl.interpreter.interpret.call(null,G__81369,G__81370));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81010 = (function (){var G__81372 = ctx;
var G__81373 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81372,G__81373) : sci.impl.interpreter.interpret.call(null,G__81372,G__81373));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81011 = (function (){var G__81374 = ctx;
var G__81375 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81374,G__81375) : sci.impl.interpreter.interpret.call(null,G__81374,G__81375));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81012 = (function (){var G__81376 = ctx;
var G__81377 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81376,G__81377) : sci.impl.interpreter.interpret.call(null,G__81376,G__81377));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81013 = (function (){var G__81378 = ctx;
var G__81379 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81378,G__81379) : sci.impl.interpreter.interpret.call(null,G__81378,G__81379));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg80998,arg80999,arg81000,arg81001,arg81002,arg81003,arg81004,arg81005,arg81006,arg81007,arg81008,arg81009,arg81010,arg81011,arg81012,arg81013) : f.call(null,arg80998,arg80999,arg81000,arg81001,arg81002,arg81003,arg81004,arg81005,arg81006,arg81007,arg81008,arg81009,arg81010,arg81011,arg81012,arg81013));

break;
case (17):
var arg81014 = (function (){var G__81380 = ctx;
var G__81381 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81380,G__81381) : sci.impl.interpreter.interpret.call(null,G__81380,G__81381));
})();
var args__$1 = cljs.core.rest(args);
var arg81015 = (function (){var G__81382 = ctx;
var G__81383 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81382,G__81383) : sci.impl.interpreter.interpret.call(null,G__81382,G__81383));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81016 = (function (){var G__81387 = ctx;
var G__81388 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81387,G__81388) : sci.impl.interpreter.interpret.call(null,G__81387,G__81388));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81017 = (function (){var G__81389 = ctx;
var G__81390 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81389,G__81390) : sci.impl.interpreter.interpret.call(null,G__81389,G__81390));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81018 = (function (){var G__81391 = ctx;
var G__81392 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81391,G__81392) : sci.impl.interpreter.interpret.call(null,G__81391,G__81392));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81019 = (function (){var G__81393 = ctx;
var G__81394 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81393,G__81394) : sci.impl.interpreter.interpret.call(null,G__81393,G__81394));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81020 = (function (){var G__81395 = ctx;
var G__81396 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81395,G__81396) : sci.impl.interpreter.interpret.call(null,G__81395,G__81396));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81021 = (function (){var G__81397 = ctx;
var G__81398 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81397,G__81398) : sci.impl.interpreter.interpret.call(null,G__81397,G__81398));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81022 = (function (){var G__81399 = ctx;
var G__81400 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81399,G__81400) : sci.impl.interpreter.interpret.call(null,G__81399,G__81400));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81023 = (function (){var G__81401 = ctx;
var G__81402 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81401,G__81402) : sci.impl.interpreter.interpret.call(null,G__81401,G__81402));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81024 = (function (){var G__81403 = ctx;
var G__81404 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81403,G__81404) : sci.impl.interpreter.interpret.call(null,G__81403,G__81404));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81025 = (function (){var G__81405 = ctx;
var G__81406 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81405,G__81406) : sci.impl.interpreter.interpret.call(null,G__81405,G__81406));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81026 = (function (){var G__81407 = ctx;
var G__81408 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81407,G__81408) : sci.impl.interpreter.interpret.call(null,G__81407,G__81408));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81027 = (function (){var G__81410 = ctx;
var G__81411 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81410,G__81411) : sci.impl.interpreter.interpret.call(null,G__81410,G__81411));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81028 = (function (){var G__81412 = ctx;
var G__81413 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81412,G__81413) : sci.impl.interpreter.interpret.call(null,G__81412,G__81413));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81029 = (function (){var G__81414 = ctx;
var G__81415 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81414,G__81415) : sci.impl.interpreter.interpret.call(null,G__81414,G__81415));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81030 = (function (){var G__81416 = ctx;
var G__81417 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81416,G__81417) : sci.impl.interpreter.interpret.call(null,G__81416,G__81417));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg81014,arg81015,arg81016,arg81017,arg81018,arg81019,arg81020,arg81021,arg81022,arg81023,arg81024,arg81025,arg81026,arg81027,arg81028,arg81029,arg81030) : f.call(null,arg81014,arg81015,arg81016,arg81017,arg81018,arg81019,arg81020,arg81021,arg81022,arg81023,arg81024,arg81025,arg81026,arg81027,arg81028,arg81029,arg81030));

break;
case (18):
var arg81031 = (function (){var G__81421 = ctx;
var G__81422 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81421,G__81422) : sci.impl.interpreter.interpret.call(null,G__81421,G__81422));
})();
var args__$1 = cljs.core.rest(args);
var arg81032 = (function (){var G__81423 = ctx;
var G__81424 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81423,G__81424) : sci.impl.interpreter.interpret.call(null,G__81423,G__81424));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81033 = (function (){var G__81425 = ctx;
var G__81426 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81425,G__81426) : sci.impl.interpreter.interpret.call(null,G__81425,G__81426));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81034 = (function (){var G__81427 = ctx;
var G__81428 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81427,G__81428) : sci.impl.interpreter.interpret.call(null,G__81427,G__81428));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81035 = (function (){var G__81429 = ctx;
var G__81430 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81429,G__81430) : sci.impl.interpreter.interpret.call(null,G__81429,G__81430));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81036 = (function (){var G__81431 = ctx;
var G__81432 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81431,G__81432) : sci.impl.interpreter.interpret.call(null,G__81431,G__81432));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81037 = (function (){var G__81433 = ctx;
var G__81434 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81433,G__81434) : sci.impl.interpreter.interpret.call(null,G__81433,G__81434));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81038 = (function (){var G__81435 = ctx;
var G__81436 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81435,G__81436) : sci.impl.interpreter.interpret.call(null,G__81435,G__81436));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81039 = (function (){var G__81437 = ctx;
var G__81438 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81437,G__81438) : sci.impl.interpreter.interpret.call(null,G__81437,G__81438));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81040 = (function (){var G__81441 = ctx;
var G__81442 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81441,G__81442) : sci.impl.interpreter.interpret.call(null,G__81441,G__81442));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81041 = (function (){var G__81443 = ctx;
var G__81444 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81443,G__81444) : sci.impl.interpreter.interpret.call(null,G__81443,G__81444));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81042 = (function (){var G__81445 = ctx;
var G__81446 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81445,G__81446) : sci.impl.interpreter.interpret.call(null,G__81445,G__81446));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81043 = (function (){var G__81447 = ctx;
var G__81448 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81447,G__81448) : sci.impl.interpreter.interpret.call(null,G__81447,G__81448));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81044 = (function (){var G__81449 = ctx;
var G__81450 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81449,G__81450) : sci.impl.interpreter.interpret.call(null,G__81449,G__81450));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81045 = (function (){var G__81451 = ctx;
var G__81452 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81451,G__81452) : sci.impl.interpreter.interpret.call(null,G__81451,G__81452));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81046 = (function (){var G__81453 = ctx;
var G__81454 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81453,G__81454) : sci.impl.interpreter.interpret.call(null,G__81453,G__81454));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81047 = (function (){var G__81455 = ctx;
var G__81456 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81455,G__81456) : sci.impl.interpreter.interpret.call(null,G__81455,G__81456));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81048 = (function (){var G__81458 = ctx;
var G__81459 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81458,G__81459) : sci.impl.interpreter.interpret.call(null,G__81458,G__81459));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg81031,arg81032,arg81033,arg81034,arg81035,arg81036,arg81037,arg81038,arg81039,arg81040,arg81041,arg81042,arg81043,arg81044,arg81045,arg81046,arg81047,arg81048) : f.call(null,arg81031,arg81032,arg81033,arg81034,arg81035,arg81036,arg81037,arg81038,arg81039,arg81040,arg81041,arg81042,arg81043,arg81044,arg81045,arg81046,arg81047,arg81048));

break;
case (19):
var arg81050 = (function (){var G__81476 = ctx;
var G__81477 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81476,G__81477) : sci.impl.interpreter.interpret.call(null,G__81476,G__81477));
})();
var args__$1 = cljs.core.rest(args);
var arg81051 = (function (){var G__81482 = ctx;
var G__81483 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81482,G__81483) : sci.impl.interpreter.interpret.call(null,G__81482,G__81483));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg81052 = (function (){var G__81501 = ctx;
var G__81503 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81501,G__81503) : sci.impl.interpreter.interpret.call(null,G__81501,G__81503));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg81053 = (function (){var G__81512 = ctx;
var G__81513 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81512,G__81513) : sci.impl.interpreter.interpret.call(null,G__81512,G__81513));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg81054 = (function (){var G__81514 = ctx;
var G__81515 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81514,G__81515) : sci.impl.interpreter.interpret.call(null,G__81514,G__81515));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg81055 = (function (){var G__81518 = ctx;
var G__81519 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81518,G__81519) : sci.impl.interpreter.interpret.call(null,G__81518,G__81519));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg81056 = (function (){var G__81520 = ctx;
var G__81521 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81520,G__81521) : sci.impl.interpreter.interpret.call(null,G__81520,G__81521));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg81057 = (function (){var G__81522 = ctx;
var G__81523 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81522,G__81523) : sci.impl.interpreter.interpret.call(null,G__81522,G__81523));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg81058 = (function (){var G__81524 = ctx;
var G__81525 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81524,G__81525) : sci.impl.interpreter.interpret.call(null,G__81524,G__81525));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg81059 = (function (){var G__81526 = ctx;
var G__81527 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81526,G__81527) : sci.impl.interpreter.interpret.call(null,G__81526,G__81527));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg81060 = (function (){var G__81528 = ctx;
var G__81529 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81528,G__81529) : sci.impl.interpreter.interpret.call(null,G__81528,G__81529));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg81061 = (function (){var G__81530 = ctx;
var G__81531 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81530,G__81531) : sci.impl.interpreter.interpret.call(null,G__81530,G__81531));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg81062 = (function (){var G__81532 = ctx;
var G__81533 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81532,G__81533) : sci.impl.interpreter.interpret.call(null,G__81532,G__81533));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg81063 = (function (){var G__81534 = ctx;
var G__81535 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81534,G__81535) : sci.impl.interpreter.interpret.call(null,G__81534,G__81535));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg81064 = (function (){var G__81537 = ctx;
var G__81538 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81537,G__81538) : sci.impl.interpreter.interpret.call(null,G__81537,G__81538));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg81065 = (function (){var G__81540 = ctx;
var G__81541 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81540,G__81541) : sci.impl.interpreter.interpret.call(null,G__81540,G__81541));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg81066 = (function (){var G__81542 = ctx;
var G__81543 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81542,G__81543) : sci.impl.interpreter.interpret.call(null,G__81542,G__81543));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg81067 = (function (){var G__81545 = ctx;
var G__81546 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81545,G__81546) : sci.impl.interpreter.interpret.call(null,G__81545,G__81546));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg81068 = (function (){var G__81547 = ctx;
var G__81548 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81547,G__81548) : sci.impl.interpreter.interpret.call(null,G__81547,G__81548));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg81050,arg81051,arg81052,arg81053,arg81054,arg81055,arg81056,arg81057,arg81058,arg81059,arg81060,arg81061,arg81062,arg81063,arg81064,arg81065,arg81066,arg81067,arg81068) : f.call(null,arg81050,arg81051,arg81052,arg81053,arg81054,arg81055,arg81056,arg81057,arg81058,arg81059,arg81060,arg81061,arg81062,arg81063,arg81064,arg81065,arg81066,arg81067,arg81068));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__2625_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__2625_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__2625_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__81555 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__81555)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__81555)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__81555)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__81555)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__81555)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__81555)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__81560 = ctx;
var G__81561 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81560,G__81561) : sci.impl.interpreter.interpret.call(null,G__81560,G__81561));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__81555)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__81555)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__81555)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__81555)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__81555)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__81555)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__81555)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__81555)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__81565 = ctx;
var G__81566 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81565,G__81566) : sci.impl.interpreter.interpret.call(null,G__81565,G__81566));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__81555)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__81555)){
return (new cljs.core.LazySeq(null,(function (){var G__81567 = ctx;
var G__81568 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__81567,G__81568) : sci.impl.interpreter.interpret.call(null,G__81567,G__81568));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__81555)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__81555)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__81555)){
return sci.impl.interpreter.eval_resolve(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__81555)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81555)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e81571){if((e81571 instanceof Error)){
var e = e81571;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e81571;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.meta(v);
if(cljs.core.truth_(and__4115__auto__)){
return (((!(sci.impl.vars.var_QMARK_(v)))) && ((!(sci.impl.vars.namespace_QMARK_(v)))));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__81587 = op;
var G__81587__$1 = (((G__81587 instanceof cljs.core.Keyword))?G__81587.fqn:null);
switch (G__81587__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81583_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81583_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81583_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81584_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81584_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81584_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81585_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__81585_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__81585_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__81973 = cljs.core.rest(exprs);
var G__81974 = (function (){var G__81602 = ctx;
var G__81603 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__81602,G__81603) : sci.impl.interpreter.eval_form.call(null,G__81602,G__81603));
})();
exprs = G__81973;
ret = G__81974;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var queue = cljs.core.PersistentVector.EMPTY;
var ret = null;
while(true){
var expr = (function (){var or__4126__auto__ = cljs.core.first(queue);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
}
})();
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
if(cljs.core.seq(queue)){
var G__81980 = cljs.core.rest(queue);
var G__81981 = ret__$1;
queue = G__81980;
ret = G__81981;
continue;
} else {
var G__81982 = cljs.core.PersistentVector.EMPTY;
var G__81983 = ret__$1;
queue = G__81982;
ret = G__81983;
continue;
}
}
break;
}
});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__81611 = arguments.length;
switch (G__81611) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = (function (){
sci.impl.vars.push_thread_bindings((cljs.core.truth_(cljs.core.deref(sci.impl.vars.current_ns))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,sci.impl.opts.user_ns])));

try{return sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
}finally {sci.impl.vars.pop_thread_bindings();
}})()
;
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
