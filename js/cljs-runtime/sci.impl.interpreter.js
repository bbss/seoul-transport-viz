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
var G__104651 = xs;
args__$2 = G__104651;
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
var G__104654 = xs;
args__$2 = G__104654;
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
var len__4736__auto___104655 = arguments.length;
var i__4737__auto___104656 = (0);
while(true){
if((i__4737__auto___104656 < len__4736__auto___104655)){
args__4742__auto__.push((arguments[i__4737__auto___104656]));

var G__104657 = (i__4737__auto___104656 + (1));
i__4737__auto___104656 = G__104657;
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
var G__104659 = ctx__$2;
var G__104660 = rest_let_bindings;
ctx__$1 = G__104659;
let_bindings__$1 = G__104660;
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
var G__104662 = nexprs;
exprs__$1 = G__104662;
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
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq103680){
var G__103681 = cljs.core.first(seq103680);
var seq103680__$1 = cljs.core.next(seq103680);
var G__103683 = cljs.core.first(seq103680__$1);
var seq103680__$2 = cljs.core.next(seq103680__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103681,G__103683,seq103680__$2);
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
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__103703){
var vec__103704 = p__103703;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103704,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103704,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103704,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103704,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__103713 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__103713,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__103713;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
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
if(cljs.core.sequential_QMARK_(libspec)){
var vec__103722 = libspec;
var seq__103723 = cljs.core.seq(vec__103722);
var first__103724 = cljs.core.first(seq__103723);
var seq__103723__$1 = cljs.core.next(seq__103723);
var lib_name = first__103724;
var opts = seq__103723__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__103728 = opts;
var vec__103729 = G__103728;
var seq__103730 = cljs.core.seq(vec__103729);
var first__103731 = cljs.core.first(seq__103730);
var seq__103730__$1 = cljs.core.next(seq__103730);
var opt_name = first__103731;
var first__103731__$1 = cljs.core.first(seq__103730__$1);
var seq__103730__$2 = cljs.core.next(seq__103730__$1);
var fst_opt = first__103731__$1;
var rst_opts = seq__103730__$2;
var ret__$1 = ret;
var G__103728__$1 = G__103728;
while(true){
var ret__$2 = ret__$1;
var vec__103742 = G__103728__$1;
var seq__103743 = cljs.core.seq(vec__103742);
var first__103744 = cljs.core.first(seq__103743);
var seq__103743__$1 = cljs.core.next(seq__103743);
var opt_name__$1 = first__103744;
var first__103744__$1 = cljs.core.first(seq__103743__$1);
var seq__103743__$2 = cljs.core.next(seq__103743__$1);
var fst_opt__$1 = first__103744__$1;
var rst_opts__$1 = seq__103743__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__103745 = opt_name__$1;
var G__103745__$1 = (((G__103745 instanceof cljs.core.Keyword))?G__103745.fqn:null);
switch (G__103745__$1) {
case "as":
var G__104686 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__104687 = rst_opts__$1;
ret__$1 = G__104686;
G__103728__$1 = G__104687;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__104688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__104689 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__104688;
G__103728__$1 = G__104689;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__104690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__104691 = rst_opts__$1;
ret__$1 = G__104690;
G__103728__$1 = G__104691;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103745__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__103752){
var vec__103753 = p__103752;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103753,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__103760){
var map__103761 = p__103760;
var map__103761__$1 = (((((!((map__103761 == null))))?(((((map__103761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103761):map__103761);
var _parsed_libspec = map__103761__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103761__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103761__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103761__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103761__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103761__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__103769 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103769,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__103779 = sci.impl.interpreter.parse_libspec(libspec);
var map__103779__$1 = (((((!((map__103779 == null))))?(((((map__103779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103779):map__103779);
var parsed_libspec = map__103779__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103779__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103779__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__103787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__103787) : load_fn.call(null,G__103787));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__103788 = temp__5733__auto____$2;
var map__103788__$1 = (((((!((map__103788 == null))))?(((((map__103788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103788):map__103788);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103788__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103788__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__103804_104708 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__103805_104709 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__103804_104708,G__103805_104709) : sci.impl.interpreter.eval_string_STAR_.call(null,G__103804_104708,G__103805_104709));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e103796){if((e103796 instanceof Error)){
var e_104710 = e103796;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_104710;
} else {
throw e103796;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
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
var len__4736__auto___104718 = arguments.length;
var i__4737__auto___104719 = (0);
while(true){
if((i__4737__auto___104719 < len__4736__auto___104718)){
args__4742__auto__.push((arguments[i__4737__auto___104719]));

var G__104725 = (i__4737__auto___104719 + (1));
i__4737__auto___104719 = G__104725;
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
var ret = (function (){var G__103825 = ctx;
var G__103826 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__103825,G__103826) : sci.impl.interpreter.interpret.call(null,G__103825,G__103826));
})();
if((ret instanceof cljs.core.Symbol)){
var G__104740 = (function (){var G__103827 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__103827,current_libspec);
} else {
return G__103827;
}
})();
var G__104741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__104742 = cljs.core.next(args__$1);
libspecs = G__104740;
current_libspec = G__104741;
args__$1 = G__104742;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__104743 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__104744 = null;
var G__104745 = cljs.core.next(args__$1);
libspecs = G__104743;
current_libspec = G__104744;
args__$1 = G__104745;
continue;
} else {
var G__104752 = (function (){var G__103828 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__103828,current_libspec);
} else {
return G__103828;
}
})();
var G__104753 = ret;
var G__104754 = cljs.core.next(args__$1);
libspecs = G__104752;
current_libspec = G__104753;
args__$1 = G__104754;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__103829 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__103829,current_libspec);
} else {
return G__103829;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__103808_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__103808_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq103809){
var G__103810 = cljs.core.first(seq103809);
var seq103809__$1 = cljs.core.next(seq103809);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103810,seq103809__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104781 = arguments.length;
var i__4737__auto___104784 = (0);
while(true){
if((i__4737__auto___104784 < len__4736__auto___104781)){
args__4742__auto__.push((arguments[i__4737__auto___104784]));

var G__104786 = (i__4737__auto___104784 + (1));
i__4737__auto___104784 = G__104786;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq103836){
var G__103837 = cljs.core.first(seq103836);
var seq103836__$1 = cljs.core.next(seq103836);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103837,seq103836__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__103846){
var vec__103849 = p__103846;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103849,(0),null);
var map__103852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103849,(1),null);
var map__103852__$1 = (((((!((map__103852 == null))))?(((((map__103852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103852):map__103852);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103852__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103852__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103852__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__103858 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103858,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103858,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__103861 = ctx;
var G__103862 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__103861,G__103862) : sci.impl.interpreter.interpret.call(null,G__103861,G__103862));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__103864 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__103864__$1 = (((((!((map__103864 == null))))?(((((map__103864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103864):map__103864);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103864__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103864__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103864__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__103878 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__103879 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__103879);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__103878);
}}catch (e103869){if((e103869 instanceof Error)){
var e = e103869;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__103872 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__103873 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__103872,G__103873) : sci.impl.interpreter.interpret.call(null,G__103872,G__103873));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__103874 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103874,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103874,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e103869;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__103880){
var vec__103881 = p__103880;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103881,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103881,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103884_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__103884_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__103884_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__103890){
var vec__103891 = p__103890;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103891,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103891,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103891,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103889_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__103889_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__103889_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__103896,p__103897){
var map__103898 = p__103896;
var map__103898__$1 = (((((!((map__103898 == null))))?(((((map__103898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103898):map__103898);
var ctx = map__103898__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103898__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__103899 = p__103897;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103899,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103899,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103899,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103899,(3),null);
var _expr = vec__103899;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103895_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__103895_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__103895_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__103906){
var vec__103907 = p__103906;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103907,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103907,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104873 = arguments.length;
var i__4737__auto___104874 = (0);
while(true){
if((i__4737__auto___104874 < len__4736__auto___104873)){
args__4742__auto__.push((arguments[i__4737__auto___104874]));

var G__104875 = (i__4737__auto___104874 + (1));
i__4737__auto___104874 = G__104875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__103916 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103916,(1),null);
var G__103919_104879 = k;
var G__103919_104880__$1 = (((G__103919_104879 instanceof cljs.core.Keyword))?G__103919_104879.fqn:null);
switch (G__103919_104880__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__103919_104879,G__103919_104880__$1,vec__103916,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__103919_104879,G__103919_104880__$1,vec__103916,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__103919_104879,G__103919_104880__$1,vec__103916,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__103919_104879,G__103919_104880__$1,vec__103916,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103919_104880__$1)].join('')));

}

var G__104891 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__104891;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq103911){
var G__103912 = cljs.core.first(seq103911);
var seq103911__$1 = cljs.core.next(seq103911);
var G__103913 = cljs.core.first(seq103911__$1);
var seq103911__$2 = cljs.core.next(seq103911__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103912,G__103913,seq103911__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.interpreter.eval_refer);
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
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
var f__$2 = (cljs.core.truth_((function (){var G__103942 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__103943 = (function (){var G__103944 = f__$1;
var G__103944__$1 = (((G__103944 == null))?null:cljs.core.meta(G__103944));
if((G__103944__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__103944__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__103942,G__103943) : sci.impl.utils.kw_identical_QMARK_.call(null,G__103942,G__103943));
})())?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
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
sci.impl.interpreter.eval_import = (function sci$impl$interpreter$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104907 = arguments.length;
var i__4737__auto___104908 = (0);
while(true){
if((i__4737__auto___104908 < len__4736__auto___104907)){
args__4742__auto__.push((arguments[i__4737__auto___104908]));

var G__104909 = (i__4737__auto___104908 + (1));
i__4737__auto___104908 = G__104909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__103946_SHARP_){
if(((cljs.core.seq_QMARK_(p1__103946_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__103946_SHARP_))))){
return cljs.core.second(p1__103946_SHARP_);
} else {
return p1__103946_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__103955 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103955,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103955,(1),null);
var seq__103958 = cljs.core.seq(classes);
var chunk__103959 = null;
var count__103960 = (0);
var i__103961 = (0);
while(true){
if((i__103961 < count__103960)){
var class$ = chunk__103959.cljs$core$IIndexed$_nth$arity$2(null,i__103961);
var fq_class_name_104913 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_104913))){
var cnn_104914 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_104914,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_104913);
} else {
var temp__5733__auto___104915 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5733__auto___104915)){
var rec_104916 = temp__5733__auto___104915;
var cnn_104917 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_104917,class$], null),rec_104916);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_104913)].join('')));
}
}


var G__104920 = seq__103958;
var G__104921 = chunk__103959;
var G__104922 = count__103960;
var G__104923 = (i__103961 + (1));
seq__103958 = G__104920;
chunk__103959 = G__104921;
count__103960 = G__104922;
i__103961 = G__104923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__103958);
if(temp__5735__auto__){
var seq__103958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__103958__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__103958__$1);
var G__104926 = cljs.core.chunk_rest(seq__103958__$1);
var G__104927 = c__4556__auto__;
var G__104928 = cljs.core.count(c__4556__auto__);
var G__104929 = (0);
seq__103958 = G__104926;
chunk__103959 = G__104927;
count__103960 = G__104928;
i__103961 = G__104929;
continue;
} else {
var class$ = cljs.core.first(seq__103958__$1);
var fq_class_name_104932 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_104932))){
var cnn_104936 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_104936,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_104932);
} else {
var temp__5733__auto___104937 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5733__auto___104937)){
var rec_104939 = temp__5733__auto___104937;
var cnn_104940 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_104940,class$], null),rec_104939);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_104932)].join('')));
}
}


var G__104941 = cljs.core.next(seq__103958__$1);
var G__104942 = null;
var G__104943 = (0);
var G__104944 = (0);
seq__103958 = G__104941;
chunk__103959 = G__104942;
count__103960 = G__104943;
i__103961 = G__104944;
continue;
}
} else {
return null;
}
}
break;
}
}),specs);
}));

(sci.impl.interpreter.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq103947){
var G__103948 = cljs.core.first(seq103947);
var seq103947__$1 = cljs.core.next(seq103947);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103948,seq103947__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__103968){
var vec__103969 = p__103968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103969,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103969,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103969,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__103975 = exprs;
var vec__103976 = G__103975;
var seq__103977 = cljs.core.seq(vec__103976);
var first__103978 = cljs.core.first(seq__103977);
var seq__103977__$1 = cljs.core.next(seq__103977);
var expr = first__103978;
var exprs__$1 = seq__103977__$1;
var G__103975__$1 = G__103975;
while(true){
var vec__103981 = G__103975__$1;
var seq__103982 = cljs.core.seq(vec__103981);
var first__103983 = cljs.core.first(seq__103982);
var seq__103982__$1 = cljs.core.next(seq__103982);
var expr__$1 = first__103983;
var exprs__$2 = seq__103982__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e103985){if((e103985 instanceof Error)){
var e = e103985;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e103985;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__104956 = exprs__$3;
G__103975__$1 = G__104956;
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
var G__104179 = cljs.core.count(args);
switch (G__104179) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg103988 = (function (){var G__104182 = ctx;
var G__104183 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104182,G__104183) : sci.impl.interpreter.interpret.call(null,G__104182,G__104183));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg103988) : f.call(null,arg103988));

break;
case (2):
var arg103989 = (function (){var G__104185 = ctx;
var G__104186 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104185,G__104186) : sci.impl.interpreter.interpret.call(null,G__104185,G__104186));
})();
var args__$1 = cljs.core.rest(args);
var arg103990 = (function (){var G__104187 = ctx;
var G__104188 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104187,G__104188) : sci.impl.interpreter.interpret.call(null,G__104187,G__104188));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg103989,arg103990) : f.call(null,arg103989,arg103990));

break;
case (3):
var arg103991 = (function (){var G__104189 = ctx;
var G__104190 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104189,G__104190) : sci.impl.interpreter.interpret.call(null,G__104189,G__104190));
})();
var args__$1 = cljs.core.rest(args);
var arg103992 = (function (){var G__104191 = ctx;
var G__104192 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104191,G__104192) : sci.impl.interpreter.interpret.call(null,G__104191,G__104192));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg103993 = (function (){var G__104193 = ctx;
var G__104194 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104193,G__104194) : sci.impl.interpreter.interpret.call(null,G__104193,G__104194));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg103991,arg103992,arg103993) : f.call(null,arg103991,arg103992,arg103993));

break;
case (4):
var arg103994 = (function (){var G__104195 = ctx;
var G__104196 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104195,G__104196) : sci.impl.interpreter.interpret.call(null,G__104195,G__104196));
})();
var args__$1 = cljs.core.rest(args);
var arg103995 = (function (){var G__104197 = ctx;
var G__104198 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104197,G__104198) : sci.impl.interpreter.interpret.call(null,G__104197,G__104198));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg103996 = (function (){var G__104199 = ctx;
var G__104200 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104199,G__104200) : sci.impl.interpreter.interpret.call(null,G__104199,G__104200));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg103997 = (function (){var G__104201 = ctx;
var G__104202 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104201,G__104202) : sci.impl.interpreter.interpret.call(null,G__104201,G__104202));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg103994,arg103995,arg103996,arg103997) : f.call(null,arg103994,arg103995,arg103996,arg103997));

break;
case (5):
var arg103998 = (function (){var G__104204 = ctx;
var G__104205 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104204,G__104205) : sci.impl.interpreter.interpret.call(null,G__104204,G__104205));
})();
var args__$1 = cljs.core.rest(args);
var arg103999 = (function (){var G__104207 = ctx;
var G__104208 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104207,G__104208) : sci.impl.interpreter.interpret.call(null,G__104207,G__104208));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104000 = (function (){var G__104209 = ctx;
var G__104210 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104209,G__104210) : sci.impl.interpreter.interpret.call(null,G__104209,G__104210));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104001 = (function (){var G__104212 = ctx;
var G__104213 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104212,G__104213) : sci.impl.interpreter.interpret.call(null,G__104212,G__104213));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104002 = (function (){var G__104216 = ctx;
var G__104217 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104216,G__104217) : sci.impl.interpreter.interpret.call(null,G__104216,G__104217));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg103998,arg103999,arg104000,arg104001,arg104002) : f.call(null,arg103998,arg103999,arg104000,arg104001,arg104002));

break;
case (6):
var arg104003 = (function (){var G__104218 = ctx;
var G__104219 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104218,G__104219) : sci.impl.interpreter.interpret.call(null,G__104218,G__104219));
})();
var args__$1 = cljs.core.rest(args);
var arg104004 = (function (){var G__104220 = ctx;
var G__104221 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104220,G__104221) : sci.impl.interpreter.interpret.call(null,G__104220,G__104221));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104005 = (function (){var G__104223 = ctx;
var G__104224 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104223,G__104224) : sci.impl.interpreter.interpret.call(null,G__104223,G__104224));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104006 = (function (){var G__104226 = ctx;
var G__104227 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104226,G__104227) : sci.impl.interpreter.interpret.call(null,G__104226,G__104227));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104007 = (function (){var G__104228 = ctx;
var G__104229 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104228,G__104229) : sci.impl.interpreter.interpret.call(null,G__104228,G__104229));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104008 = (function (){var G__104231 = ctx;
var G__104232 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104231,G__104232) : sci.impl.interpreter.interpret.call(null,G__104231,G__104232));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg104003,arg104004,arg104005,arg104006,arg104007,arg104008) : f.call(null,arg104003,arg104004,arg104005,arg104006,arg104007,arg104008));

break;
case (7):
var arg104009 = (function (){var G__104234 = ctx;
var G__104235 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104234,G__104235) : sci.impl.interpreter.interpret.call(null,G__104234,G__104235));
})();
var args__$1 = cljs.core.rest(args);
var arg104010 = (function (){var G__104236 = ctx;
var G__104237 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104236,G__104237) : sci.impl.interpreter.interpret.call(null,G__104236,G__104237));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104011 = (function (){var G__104238 = ctx;
var G__104239 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104238,G__104239) : sci.impl.interpreter.interpret.call(null,G__104238,G__104239));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104012 = (function (){var G__104240 = ctx;
var G__104241 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104240,G__104241) : sci.impl.interpreter.interpret.call(null,G__104240,G__104241));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104013 = (function (){var G__104242 = ctx;
var G__104243 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104242,G__104243) : sci.impl.interpreter.interpret.call(null,G__104242,G__104243));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104014 = (function (){var G__104244 = ctx;
var G__104245 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104244,G__104245) : sci.impl.interpreter.interpret.call(null,G__104244,G__104245));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104015 = (function (){var G__104246 = ctx;
var G__104247 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104246,G__104247) : sci.impl.interpreter.interpret.call(null,G__104246,G__104247));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg104009,arg104010,arg104011,arg104012,arg104013,arg104014,arg104015) : f.call(null,arg104009,arg104010,arg104011,arg104012,arg104013,arg104014,arg104015));

break;
case (8):
var arg104016 = (function (){var G__104250 = ctx;
var G__104251 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104250,G__104251) : sci.impl.interpreter.interpret.call(null,G__104250,G__104251));
})();
var args__$1 = cljs.core.rest(args);
var arg104017 = (function (){var G__104253 = ctx;
var G__104254 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104253,G__104254) : sci.impl.interpreter.interpret.call(null,G__104253,G__104254));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104018 = (function (){var G__104255 = ctx;
var G__104256 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104255,G__104256) : sci.impl.interpreter.interpret.call(null,G__104255,G__104256));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104019 = (function (){var G__104257 = ctx;
var G__104258 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104257,G__104258) : sci.impl.interpreter.interpret.call(null,G__104257,G__104258));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104020 = (function (){var G__104259 = ctx;
var G__104260 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104259,G__104260) : sci.impl.interpreter.interpret.call(null,G__104259,G__104260));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104021 = (function (){var G__104261 = ctx;
var G__104262 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104261,G__104262) : sci.impl.interpreter.interpret.call(null,G__104261,G__104262));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104022 = (function (){var G__104265 = ctx;
var G__104266 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104265,G__104266) : sci.impl.interpreter.interpret.call(null,G__104265,G__104266));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104023 = (function (){var G__104268 = ctx;
var G__104269 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104268,G__104269) : sci.impl.interpreter.interpret.call(null,G__104268,G__104269));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg104016,arg104017,arg104018,arg104019,arg104020,arg104021,arg104022,arg104023) : f.call(null,arg104016,arg104017,arg104018,arg104019,arg104020,arg104021,arg104022,arg104023));

break;
case (9):
var arg104024 = (function (){var G__104270 = ctx;
var G__104271 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104270,G__104271) : sci.impl.interpreter.interpret.call(null,G__104270,G__104271));
})();
var args__$1 = cljs.core.rest(args);
var arg104025 = (function (){var G__104272 = ctx;
var G__104273 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104272,G__104273) : sci.impl.interpreter.interpret.call(null,G__104272,G__104273));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104026 = (function (){var G__104274 = ctx;
var G__104275 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104274,G__104275) : sci.impl.interpreter.interpret.call(null,G__104274,G__104275));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104027 = (function (){var G__104276 = ctx;
var G__104277 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104276,G__104277) : sci.impl.interpreter.interpret.call(null,G__104276,G__104277));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104028 = (function (){var G__104278 = ctx;
var G__104279 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104278,G__104279) : sci.impl.interpreter.interpret.call(null,G__104278,G__104279));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104029 = (function (){var G__104280 = ctx;
var G__104281 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104280,G__104281) : sci.impl.interpreter.interpret.call(null,G__104280,G__104281));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104030 = (function (){var G__104282 = ctx;
var G__104283 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104282,G__104283) : sci.impl.interpreter.interpret.call(null,G__104282,G__104283));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104031 = (function (){var G__104284 = ctx;
var G__104285 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104284,G__104285) : sci.impl.interpreter.interpret.call(null,G__104284,G__104285));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104032 = (function (){var G__104286 = ctx;
var G__104287 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104286,G__104287) : sci.impl.interpreter.interpret.call(null,G__104286,G__104287));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg104024,arg104025,arg104026,arg104027,arg104028,arg104029,arg104030,arg104031,arg104032) : f.call(null,arg104024,arg104025,arg104026,arg104027,arg104028,arg104029,arg104030,arg104031,arg104032));

break;
case (10):
var arg104033 = (function (){var G__104288 = ctx;
var G__104289 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104288,G__104289) : sci.impl.interpreter.interpret.call(null,G__104288,G__104289));
})();
var args__$1 = cljs.core.rest(args);
var arg104034 = (function (){var G__104291 = ctx;
var G__104292 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104291,G__104292) : sci.impl.interpreter.interpret.call(null,G__104291,G__104292));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104035 = (function (){var G__104293 = ctx;
var G__104294 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104293,G__104294) : sci.impl.interpreter.interpret.call(null,G__104293,G__104294));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104036 = (function (){var G__104295 = ctx;
var G__104296 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104295,G__104296) : sci.impl.interpreter.interpret.call(null,G__104295,G__104296));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104037 = (function (){var G__104297 = ctx;
var G__104298 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104297,G__104298) : sci.impl.interpreter.interpret.call(null,G__104297,G__104298));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104038 = (function (){var G__104299 = ctx;
var G__104300 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104299,G__104300) : sci.impl.interpreter.interpret.call(null,G__104299,G__104300));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104039 = (function (){var G__104301 = ctx;
var G__104302 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104301,G__104302) : sci.impl.interpreter.interpret.call(null,G__104301,G__104302));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104040 = (function (){var G__104303 = ctx;
var G__104304 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104303,G__104304) : sci.impl.interpreter.interpret.call(null,G__104303,G__104304));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104041 = (function (){var G__104305 = ctx;
var G__104306 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104305,G__104306) : sci.impl.interpreter.interpret.call(null,G__104305,G__104306));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104042 = (function (){var G__104307 = ctx;
var G__104308 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104307,G__104308) : sci.impl.interpreter.interpret.call(null,G__104307,G__104308));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg104033,arg104034,arg104035,arg104036,arg104037,arg104038,arg104039,arg104040,arg104041,arg104042) : f.call(null,arg104033,arg104034,arg104035,arg104036,arg104037,arg104038,arg104039,arg104040,arg104041,arg104042));

break;
case (11):
var arg104043 = (function (){var G__104309 = ctx;
var G__104310 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104309,G__104310) : sci.impl.interpreter.interpret.call(null,G__104309,G__104310));
})();
var args__$1 = cljs.core.rest(args);
var arg104044 = (function (){var G__104311 = ctx;
var G__104312 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104311,G__104312) : sci.impl.interpreter.interpret.call(null,G__104311,G__104312));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104045 = (function (){var G__104313 = ctx;
var G__104314 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104313,G__104314) : sci.impl.interpreter.interpret.call(null,G__104313,G__104314));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104046 = (function (){var G__104316 = ctx;
var G__104317 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104316,G__104317) : sci.impl.interpreter.interpret.call(null,G__104316,G__104317));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104047 = (function (){var G__104318 = ctx;
var G__104319 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104318,G__104319) : sci.impl.interpreter.interpret.call(null,G__104318,G__104319));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104048 = (function (){var G__104320 = ctx;
var G__104321 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104320,G__104321) : sci.impl.interpreter.interpret.call(null,G__104320,G__104321));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104049 = (function (){var G__104322 = ctx;
var G__104323 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104322,G__104323) : sci.impl.interpreter.interpret.call(null,G__104322,G__104323));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104050 = (function (){var G__104324 = ctx;
var G__104325 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104324,G__104325) : sci.impl.interpreter.interpret.call(null,G__104324,G__104325));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104051 = (function (){var G__104326 = ctx;
var G__104327 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104326,G__104327) : sci.impl.interpreter.interpret.call(null,G__104326,G__104327));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104052 = (function (){var G__104328 = ctx;
var G__104329 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104328,G__104329) : sci.impl.interpreter.interpret.call(null,G__104328,G__104329));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104053 = (function (){var G__104330 = ctx;
var G__104331 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104330,G__104331) : sci.impl.interpreter.interpret.call(null,G__104330,G__104331));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg104043,arg104044,arg104045,arg104046,arg104047,arg104048,arg104049,arg104050,arg104051,arg104052,arg104053) : f.call(null,arg104043,arg104044,arg104045,arg104046,arg104047,arg104048,arg104049,arg104050,arg104051,arg104052,arg104053));

break;
case (12):
var arg104054 = (function (){var G__104332 = ctx;
var G__104333 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104332,G__104333) : sci.impl.interpreter.interpret.call(null,G__104332,G__104333));
})();
var args__$1 = cljs.core.rest(args);
var arg104055 = (function (){var G__104334 = ctx;
var G__104335 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104334,G__104335) : sci.impl.interpreter.interpret.call(null,G__104334,G__104335));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104056 = (function (){var G__104336 = ctx;
var G__104337 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104336,G__104337) : sci.impl.interpreter.interpret.call(null,G__104336,G__104337));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104057 = (function (){var G__104338 = ctx;
var G__104339 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104338,G__104339) : sci.impl.interpreter.interpret.call(null,G__104338,G__104339));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104058 = (function (){var G__104341 = ctx;
var G__104342 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104341,G__104342) : sci.impl.interpreter.interpret.call(null,G__104341,G__104342));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104059 = (function (){var G__104344 = ctx;
var G__104345 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104344,G__104345) : sci.impl.interpreter.interpret.call(null,G__104344,G__104345));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104060 = (function (){var G__104348 = ctx;
var G__104349 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104348,G__104349) : sci.impl.interpreter.interpret.call(null,G__104348,G__104349));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104061 = (function (){var G__104350 = ctx;
var G__104351 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104350,G__104351) : sci.impl.interpreter.interpret.call(null,G__104350,G__104351));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104062 = (function (){var G__104352 = ctx;
var G__104353 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104352,G__104353) : sci.impl.interpreter.interpret.call(null,G__104352,G__104353));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104063 = (function (){var G__104354 = ctx;
var G__104355 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104354,G__104355) : sci.impl.interpreter.interpret.call(null,G__104354,G__104355));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104064 = (function (){var G__104356 = ctx;
var G__104357 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104356,G__104357) : sci.impl.interpreter.interpret.call(null,G__104356,G__104357));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104065 = (function (){var G__104361 = ctx;
var G__104362 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104361,G__104362) : sci.impl.interpreter.interpret.call(null,G__104361,G__104362));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg104054,arg104055,arg104056,arg104057,arg104058,arg104059,arg104060,arg104061,arg104062,arg104063,arg104064,arg104065) : f.call(null,arg104054,arg104055,arg104056,arg104057,arg104058,arg104059,arg104060,arg104061,arg104062,arg104063,arg104064,arg104065));

break;
case (13):
var arg104066 = (function (){var G__104367 = ctx;
var G__104368 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104367,G__104368) : sci.impl.interpreter.interpret.call(null,G__104367,G__104368));
})();
var args__$1 = cljs.core.rest(args);
var arg104067 = (function (){var G__104369 = ctx;
var G__104370 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104369,G__104370) : sci.impl.interpreter.interpret.call(null,G__104369,G__104370));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104068 = (function (){var G__104372 = ctx;
var G__104373 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104372,G__104373) : sci.impl.interpreter.interpret.call(null,G__104372,G__104373));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104069 = (function (){var G__104374 = ctx;
var G__104375 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104374,G__104375) : sci.impl.interpreter.interpret.call(null,G__104374,G__104375));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104070 = (function (){var G__104376 = ctx;
var G__104377 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104376,G__104377) : sci.impl.interpreter.interpret.call(null,G__104376,G__104377));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104071 = (function (){var G__104379 = ctx;
var G__104380 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104379,G__104380) : sci.impl.interpreter.interpret.call(null,G__104379,G__104380));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104072 = (function (){var G__104384 = ctx;
var G__104385 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104384,G__104385) : sci.impl.interpreter.interpret.call(null,G__104384,G__104385));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104073 = (function (){var G__104388 = ctx;
var G__104389 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104388,G__104389) : sci.impl.interpreter.interpret.call(null,G__104388,G__104389));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104074 = (function (){var G__104390 = ctx;
var G__104391 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104390,G__104391) : sci.impl.interpreter.interpret.call(null,G__104390,G__104391));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104075 = (function (){var G__104392 = ctx;
var G__104393 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104392,G__104393) : sci.impl.interpreter.interpret.call(null,G__104392,G__104393));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104076 = (function (){var G__104394 = ctx;
var G__104395 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104394,G__104395) : sci.impl.interpreter.interpret.call(null,G__104394,G__104395));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104077 = (function (){var G__104396 = ctx;
var G__104397 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104396,G__104397) : sci.impl.interpreter.interpret.call(null,G__104396,G__104397));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104078 = (function (){var G__104399 = ctx;
var G__104400 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104399,G__104400) : sci.impl.interpreter.interpret.call(null,G__104399,G__104400));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg104066,arg104067,arg104068,arg104069,arg104070,arg104071,arg104072,arg104073,arg104074,arg104075,arg104076,arg104077,arg104078) : f.call(null,arg104066,arg104067,arg104068,arg104069,arg104070,arg104071,arg104072,arg104073,arg104074,arg104075,arg104076,arg104077,arg104078));

break;
case (14):
var arg104079 = (function (){var G__104402 = ctx;
var G__104403 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104402,G__104403) : sci.impl.interpreter.interpret.call(null,G__104402,G__104403));
})();
var args__$1 = cljs.core.rest(args);
var arg104080 = (function (){var G__104406 = ctx;
var G__104407 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104406,G__104407) : sci.impl.interpreter.interpret.call(null,G__104406,G__104407));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104081 = (function (){var G__104408 = ctx;
var G__104409 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104408,G__104409) : sci.impl.interpreter.interpret.call(null,G__104408,G__104409));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104082 = (function (){var G__104410 = ctx;
var G__104411 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104410,G__104411) : sci.impl.interpreter.interpret.call(null,G__104410,G__104411));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104083 = (function (){var G__104413 = ctx;
var G__104414 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104413,G__104414) : sci.impl.interpreter.interpret.call(null,G__104413,G__104414));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104084 = (function (){var G__104415 = ctx;
var G__104416 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104415,G__104416) : sci.impl.interpreter.interpret.call(null,G__104415,G__104416));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104085 = (function (){var G__104419 = ctx;
var G__104420 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104419,G__104420) : sci.impl.interpreter.interpret.call(null,G__104419,G__104420));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104086 = (function (){var G__104422 = ctx;
var G__104423 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104422,G__104423) : sci.impl.interpreter.interpret.call(null,G__104422,G__104423));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104087 = (function (){var G__104425 = ctx;
var G__104426 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104425,G__104426) : sci.impl.interpreter.interpret.call(null,G__104425,G__104426));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104088 = (function (){var G__104427 = ctx;
var G__104428 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104427,G__104428) : sci.impl.interpreter.interpret.call(null,G__104427,G__104428));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104089 = (function (){var G__104429 = ctx;
var G__104430 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104429,G__104430) : sci.impl.interpreter.interpret.call(null,G__104429,G__104430));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104090 = (function (){var G__104431 = ctx;
var G__104432 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104431,G__104432) : sci.impl.interpreter.interpret.call(null,G__104431,G__104432));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104091 = (function (){var G__104433 = ctx;
var G__104434 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104433,G__104434) : sci.impl.interpreter.interpret.call(null,G__104433,G__104434));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104092 = (function (){var G__104436 = ctx;
var G__104437 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104436,G__104437) : sci.impl.interpreter.interpret.call(null,G__104436,G__104437));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg104079,arg104080,arg104081,arg104082,arg104083,arg104084,arg104085,arg104086,arg104087,arg104088,arg104089,arg104090,arg104091,arg104092) : f.call(null,arg104079,arg104080,arg104081,arg104082,arg104083,arg104084,arg104085,arg104086,arg104087,arg104088,arg104089,arg104090,arg104091,arg104092));

break;
case (15):
var arg104093 = (function (){var G__104439 = ctx;
var G__104440 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104439,G__104440) : sci.impl.interpreter.interpret.call(null,G__104439,G__104440));
})();
var args__$1 = cljs.core.rest(args);
var arg104094 = (function (){var G__104442 = ctx;
var G__104443 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104442,G__104443) : sci.impl.interpreter.interpret.call(null,G__104442,G__104443));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104095 = (function (){var G__104444 = ctx;
var G__104445 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104444,G__104445) : sci.impl.interpreter.interpret.call(null,G__104444,G__104445));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104096 = (function (){var G__104446 = ctx;
var G__104447 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104446,G__104447) : sci.impl.interpreter.interpret.call(null,G__104446,G__104447));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104097 = (function (){var G__104448 = ctx;
var G__104449 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104448,G__104449) : sci.impl.interpreter.interpret.call(null,G__104448,G__104449));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104098 = (function (){var G__104454 = ctx;
var G__104455 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104454,G__104455) : sci.impl.interpreter.interpret.call(null,G__104454,G__104455));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104099 = (function (){var G__104456 = ctx;
var G__104457 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104456,G__104457) : sci.impl.interpreter.interpret.call(null,G__104456,G__104457));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104100 = (function (){var G__104462 = ctx;
var G__104463 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104462,G__104463) : sci.impl.interpreter.interpret.call(null,G__104462,G__104463));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104101 = (function (){var G__104464 = ctx;
var G__104465 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104464,G__104465) : sci.impl.interpreter.interpret.call(null,G__104464,G__104465));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104102 = (function (){var G__104470 = ctx;
var G__104471 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104470,G__104471) : sci.impl.interpreter.interpret.call(null,G__104470,G__104471));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104103 = (function (){var G__104472 = ctx;
var G__104473 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104472,G__104473) : sci.impl.interpreter.interpret.call(null,G__104472,G__104473));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104104 = (function (){var G__104474 = ctx;
var G__104475 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104474,G__104475) : sci.impl.interpreter.interpret.call(null,G__104474,G__104475));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104105 = (function (){var G__104476 = ctx;
var G__104477 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104476,G__104477) : sci.impl.interpreter.interpret.call(null,G__104476,G__104477));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104106 = (function (){var G__104480 = ctx;
var G__104481 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104480,G__104481) : sci.impl.interpreter.interpret.call(null,G__104480,G__104481));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg104107 = (function (){var G__104483 = ctx;
var G__104484 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104483,G__104484) : sci.impl.interpreter.interpret.call(null,G__104483,G__104484));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg104093,arg104094,arg104095,arg104096,arg104097,arg104098,arg104099,arg104100,arg104101,arg104102,arg104103,arg104104,arg104105,arg104106,arg104107) : f.call(null,arg104093,arg104094,arg104095,arg104096,arg104097,arg104098,arg104099,arg104100,arg104101,arg104102,arg104103,arg104104,arg104105,arg104106,arg104107));

break;
case (16):
var arg104108 = (function (){var G__104485 = ctx;
var G__104486 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104485,G__104486) : sci.impl.interpreter.interpret.call(null,G__104485,G__104486));
})();
var args__$1 = cljs.core.rest(args);
var arg104109 = (function (){var G__104487 = ctx;
var G__104488 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104487,G__104488) : sci.impl.interpreter.interpret.call(null,G__104487,G__104488));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104110 = (function (){var G__104489 = ctx;
var G__104490 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104489,G__104490) : sci.impl.interpreter.interpret.call(null,G__104489,G__104490));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104111 = (function (){var G__104491 = ctx;
var G__104492 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104491,G__104492) : sci.impl.interpreter.interpret.call(null,G__104491,G__104492));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104112 = (function (){var G__104493 = ctx;
var G__104494 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104493,G__104494) : sci.impl.interpreter.interpret.call(null,G__104493,G__104494));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104113 = (function (){var G__104495 = ctx;
var G__104496 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104495,G__104496) : sci.impl.interpreter.interpret.call(null,G__104495,G__104496));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104114 = (function (){var G__104497 = ctx;
var G__104498 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104497,G__104498) : sci.impl.interpreter.interpret.call(null,G__104497,G__104498));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104115 = (function (){var G__104499 = ctx;
var G__104500 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104499,G__104500) : sci.impl.interpreter.interpret.call(null,G__104499,G__104500));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104116 = (function (){var G__104501 = ctx;
var G__104502 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104501,G__104502) : sci.impl.interpreter.interpret.call(null,G__104501,G__104502));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104117 = (function (){var G__104503 = ctx;
var G__104504 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104503,G__104504) : sci.impl.interpreter.interpret.call(null,G__104503,G__104504));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104118 = (function (){var G__104505 = ctx;
var G__104506 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104505,G__104506) : sci.impl.interpreter.interpret.call(null,G__104505,G__104506));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104119 = (function (){var G__104507 = ctx;
var G__104508 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104507,G__104508) : sci.impl.interpreter.interpret.call(null,G__104507,G__104508));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104120 = (function (){var G__104509 = ctx;
var G__104510 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104509,G__104510) : sci.impl.interpreter.interpret.call(null,G__104509,G__104510));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104121 = (function (){var G__104511 = ctx;
var G__104512 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104511,G__104512) : sci.impl.interpreter.interpret.call(null,G__104511,G__104512));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg104122 = (function (){var G__104513 = ctx;
var G__104514 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104513,G__104514) : sci.impl.interpreter.interpret.call(null,G__104513,G__104514));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg104123 = (function (){var G__104515 = ctx;
var G__104516 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104515,G__104516) : sci.impl.interpreter.interpret.call(null,G__104515,G__104516));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg104108,arg104109,arg104110,arg104111,arg104112,arg104113,arg104114,arg104115,arg104116,arg104117,arg104118,arg104119,arg104120,arg104121,arg104122,arg104123) : f.call(null,arg104108,arg104109,arg104110,arg104111,arg104112,arg104113,arg104114,arg104115,arg104116,arg104117,arg104118,arg104119,arg104120,arg104121,arg104122,arg104123));

break;
case (17):
var arg104124 = (function (){var G__104518 = ctx;
var G__104519 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104518,G__104519) : sci.impl.interpreter.interpret.call(null,G__104518,G__104519));
})();
var args__$1 = cljs.core.rest(args);
var arg104125 = (function (){var G__104520 = ctx;
var G__104521 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104520,G__104521) : sci.impl.interpreter.interpret.call(null,G__104520,G__104521));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104126 = (function (){var G__104522 = ctx;
var G__104523 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104522,G__104523) : sci.impl.interpreter.interpret.call(null,G__104522,G__104523));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104127 = (function (){var G__104524 = ctx;
var G__104525 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104524,G__104525) : sci.impl.interpreter.interpret.call(null,G__104524,G__104525));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104128 = (function (){var G__104526 = ctx;
var G__104527 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104526,G__104527) : sci.impl.interpreter.interpret.call(null,G__104526,G__104527));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104129 = (function (){var G__104528 = ctx;
var G__104529 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104528,G__104529) : sci.impl.interpreter.interpret.call(null,G__104528,G__104529));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104130 = (function (){var G__104530 = ctx;
var G__104531 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104530,G__104531) : sci.impl.interpreter.interpret.call(null,G__104530,G__104531));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104131 = (function (){var G__104532 = ctx;
var G__104533 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104532,G__104533) : sci.impl.interpreter.interpret.call(null,G__104532,G__104533));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104132 = (function (){var G__104534 = ctx;
var G__104535 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104534,G__104535) : sci.impl.interpreter.interpret.call(null,G__104534,G__104535));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104133 = (function (){var G__104536 = ctx;
var G__104537 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104536,G__104537) : sci.impl.interpreter.interpret.call(null,G__104536,G__104537));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104134 = (function (){var G__104538 = ctx;
var G__104539 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104538,G__104539) : sci.impl.interpreter.interpret.call(null,G__104538,G__104539));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104135 = (function (){var G__104540 = ctx;
var G__104541 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104540,G__104541) : sci.impl.interpreter.interpret.call(null,G__104540,G__104541));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104136 = (function (){var G__104542 = ctx;
var G__104543 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104542,G__104543) : sci.impl.interpreter.interpret.call(null,G__104542,G__104543));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104137 = (function (){var G__104544 = ctx;
var G__104545 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104544,G__104545) : sci.impl.interpreter.interpret.call(null,G__104544,G__104545));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg104138 = (function (){var G__104546 = ctx;
var G__104547 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104546,G__104547) : sci.impl.interpreter.interpret.call(null,G__104546,G__104547));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg104139 = (function (){var G__104548 = ctx;
var G__104549 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104548,G__104549) : sci.impl.interpreter.interpret.call(null,G__104548,G__104549));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg104140 = (function (){var G__104550 = ctx;
var G__104551 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104550,G__104551) : sci.impl.interpreter.interpret.call(null,G__104550,G__104551));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg104124,arg104125,arg104126,arg104127,arg104128,arg104129,arg104130,arg104131,arg104132,arg104133,arg104134,arg104135,arg104136,arg104137,arg104138,arg104139,arg104140) : f.call(null,arg104124,arg104125,arg104126,arg104127,arg104128,arg104129,arg104130,arg104131,arg104132,arg104133,arg104134,arg104135,arg104136,arg104137,arg104138,arg104139,arg104140));

break;
case (18):
var arg104141 = (function (){var G__104552 = ctx;
var G__104553 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104552,G__104553) : sci.impl.interpreter.interpret.call(null,G__104552,G__104553));
})();
var args__$1 = cljs.core.rest(args);
var arg104142 = (function (){var G__104554 = ctx;
var G__104555 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104554,G__104555) : sci.impl.interpreter.interpret.call(null,G__104554,G__104555));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104143 = (function (){var G__104556 = ctx;
var G__104557 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104556,G__104557) : sci.impl.interpreter.interpret.call(null,G__104556,G__104557));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104144 = (function (){var G__104558 = ctx;
var G__104559 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104558,G__104559) : sci.impl.interpreter.interpret.call(null,G__104558,G__104559));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104145 = (function (){var G__104560 = ctx;
var G__104561 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104560,G__104561) : sci.impl.interpreter.interpret.call(null,G__104560,G__104561));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104146 = (function (){var G__104562 = ctx;
var G__104563 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104562,G__104563) : sci.impl.interpreter.interpret.call(null,G__104562,G__104563));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104147 = (function (){var G__104564 = ctx;
var G__104565 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104564,G__104565) : sci.impl.interpreter.interpret.call(null,G__104564,G__104565));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104148 = (function (){var G__104566 = ctx;
var G__104567 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104566,G__104567) : sci.impl.interpreter.interpret.call(null,G__104566,G__104567));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104149 = (function (){var G__104568 = ctx;
var G__104569 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104568,G__104569) : sci.impl.interpreter.interpret.call(null,G__104568,G__104569));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104150 = (function (){var G__104570 = ctx;
var G__104571 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104570,G__104571) : sci.impl.interpreter.interpret.call(null,G__104570,G__104571));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104151 = (function (){var G__104572 = ctx;
var G__104573 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104572,G__104573) : sci.impl.interpreter.interpret.call(null,G__104572,G__104573));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104152 = (function (){var G__104574 = ctx;
var G__104575 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104574,G__104575) : sci.impl.interpreter.interpret.call(null,G__104574,G__104575));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104153 = (function (){var G__104576 = ctx;
var G__104577 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104576,G__104577) : sci.impl.interpreter.interpret.call(null,G__104576,G__104577));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104154 = (function (){var G__104578 = ctx;
var G__104579 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104578,G__104579) : sci.impl.interpreter.interpret.call(null,G__104578,G__104579));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg104155 = (function (){var G__104580 = ctx;
var G__104581 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104580,G__104581) : sci.impl.interpreter.interpret.call(null,G__104580,G__104581));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg104156 = (function (){var G__104582 = ctx;
var G__104583 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104582,G__104583) : sci.impl.interpreter.interpret.call(null,G__104582,G__104583));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg104157 = (function (){var G__104584 = ctx;
var G__104585 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104584,G__104585) : sci.impl.interpreter.interpret.call(null,G__104584,G__104585));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg104158 = (function (){var G__104586 = ctx;
var G__104587 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104586,G__104587) : sci.impl.interpreter.interpret.call(null,G__104586,G__104587));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg104141,arg104142,arg104143,arg104144,arg104145,arg104146,arg104147,arg104148,arg104149,arg104150,arg104151,arg104152,arg104153,arg104154,arg104155,arg104156,arg104157,arg104158) : f.call(null,arg104141,arg104142,arg104143,arg104144,arg104145,arg104146,arg104147,arg104148,arg104149,arg104150,arg104151,arg104152,arg104153,arg104154,arg104155,arg104156,arg104157,arg104158));

break;
case (19):
var arg104159 = (function (){var G__104588 = ctx;
var G__104589 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104588,G__104589) : sci.impl.interpreter.interpret.call(null,G__104588,G__104589));
})();
var args__$1 = cljs.core.rest(args);
var arg104160 = (function (){var G__104590 = ctx;
var G__104591 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104590,G__104591) : sci.impl.interpreter.interpret.call(null,G__104590,G__104591));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg104161 = (function (){var G__104592 = ctx;
var G__104593 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104592,G__104593) : sci.impl.interpreter.interpret.call(null,G__104592,G__104593));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg104162 = (function (){var G__104594 = ctx;
var G__104595 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104594,G__104595) : sci.impl.interpreter.interpret.call(null,G__104594,G__104595));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg104163 = (function (){var G__104596 = ctx;
var G__104597 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104596,G__104597) : sci.impl.interpreter.interpret.call(null,G__104596,G__104597));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg104164 = (function (){var G__104598 = ctx;
var G__104599 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104598,G__104599) : sci.impl.interpreter.interpret.call(null,G__104598,G__104599));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg104165 = (function (){var G__104600 = ctx;
var G__104601 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104600,G__104601) : sci.impl.interpreter.interpret.call(null,G__104600,G__104601));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg104166 = (function (){var G__104602 = ctx;
var G__104603 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104602,G__104603) : sci.impl.interpreter.interpret.call(null,G__104602,G__104603));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg104167 = (function (){var G__104604 = ctx;
var G__104605 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104604,G__104605) : sci.impl.interpreter.interpret.call(null,G__104604,G__104605));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg104168 = (function (){var G__104606 = ctx;
var G__104607 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104606,G__104607) : sci.impl.interpreter.interpret.call(null,G__104606,G__104607));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg104169 = (function (){var G__104608 = ctx;
var G__104609 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104608,G__104609) : sci.impl.interpreter.interpret.call(null,G__104608,G__104609));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg104170 = (function (){var G__104610 = ctx;
var G__104611 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104610,G__104611) : sci.impl.interpreter.interpret.call(null,G__104610,G__104611));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg104171 = (function (){var G__104612 = ctx;
var G__104613 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104612,G__104613) : sci.impl.interpreter.interpret.call(null,G__104612,G__104613));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg104172 = (function (){var G__104614 = ctx;
var G__104615 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104614,G__104615) : sci.impl.interpreter.interpret.call(null,G__104614,G__104615));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg104173 = (function (){var G__104616 = ctx;
var G__104617 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104616,G__104617) : sci.impl.interpreter.interpret.call(null,G__104616,G__104617));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg104174 = (function (){var G__104618 = ctx;
var G__104619 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104618,G__104619) : sci.impl.interpreter.interpret.call(null,G__104618,G__104619));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg104175 = (function (){var G__104620 = ctx;
var G__104621 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104620,G__104621) : sci.impl.interpreter.interpret.call(null,G__104620,G__104621));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg104176 = (function (){var G__104622 = ctx;
var G__104623 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104622,G__104623) : sci.impl.interpreter.interpret.call(null,G__104622,G__104623));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg104177 = (function (){var G__104624 = ctx;
var G__104625 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104624,G__104625) : sci.impl.interpreter.interpret.call(null,G__104624,G__104625));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg104159,arg104160,arg104161,arg104162,arg104163,arg104164,arg104165,arg104166,arg104167,arg104168,arg104169,arg104170,arg104171,arg104172,arg104173,arg104174,arg104175,arg104176,arg104177) : f.call(null,arg104159,arg104160,arg104161,arg104162,arg104163,arg104164,arg104165,arg104166,arg104167,arg104168,arg104169,arg104170,arg104171,arg104172,arg104173,arg104174,arg104175,arg104176,arg104177));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__88873_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__88873_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__88873_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__104626 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__104626)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__104626)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__104626)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__104626)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__104626)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__104626)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__104626)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__104627 = ctx;
var G__104628 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104627,G__104628) : sci.impl.interpreter.interpret.call(null,G__104627,G__104628));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__104626)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__104626)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__104626)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__104626)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__104626)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__104626)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__104626)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__104626)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__104626)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__104629 = ctx;
var G__104630 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104629,G__104630) : sci.impl.interpreter.interpret.call(null,G__104629,G__104630));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__104626)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__104626)){
return (new cljs.core.LazySeq(null,(function (){var G__104631 = ctx;
var G__104632 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__104631,G__104632) : sci.impl.interpreter.interpret.call(null,G__104631,G__104632));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__104626)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__104626)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__104626)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__104626)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__104626)].join('')));

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
}catch (e104633){if((e104633 instanceof Error)){
var e = e104633;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e104633;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
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
var ret = ((cljs.core.not(op))?expr:(function (){var G__104643 = op;
var G__104643__$1 = (((G__104643 instanceof cljs.core.Keyword))?G__104643.fqn:null);
switch (G__104643__$1) {
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
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__104640_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__104640_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__104640_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__104641_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__104641_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__104641_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__104642_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__104642_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__104642_SHARP_));
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
var G__105006 = cljs.core.rest(exprs);
var G__105007 = (function (){var G__104646 = ctx;
var G__104647 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__104646,G__104647) : sci.impl.interpreter.eval_form.call(null,G__104646,G__104647));
})();
exprs = G__105006;
ret = G__105007;
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
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__105008 = ret__$1;
ret = G__105008;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__104649 = arguments.length;
switch (G__104649) {
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
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
