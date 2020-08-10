goog.provide('sci.core');
/**
 * Alpha! Returns a new sci var. API subject to change.
 */
sci.core.new_var = (function sci$core$new_var(var_args){
var G__81633 = arguments.length;
switch (G__81633) {
case 1:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.new_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__81634 = sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__81634);

return G__81634;
}));

(sci.core.new_var.cljs$core$IFn$_invoke$arity$2 = (function (name,val){
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name,val,cljs.core.meta(name));
}));

(sci.core.new_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return (new sci.impl.vars.SciVar(init_val,name,meta));
}));

(sci.core.new_var.cljs$lang$maxFixedArity = 3);

/**
 * Alpha! Same as new-var but adds :dynamic true to meta. API subject to
 *   change.
 */
sci.core.new_dynamic_var = (function sci$core$new_dynamic_var(var_args){
var G__81636 = arguments.length;
switch (G__81636) {
case 1:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
var G__81638 = sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name,null,null);
sci.impl.vars.unbind(G__81638);

return G__81638;
}));

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.meta(name));
}));

(sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,meta){
return (new sci.impl.vars.SciVar(init_val,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true)));
}));

(sci.core.new_dynamic_var.cljs$lang$maxFixedArity = 3);

/**
 * Sci var that represents sci's `clojure.core/*in*`
 */
sci.core.in$ = sci.impl.io.in$;
/**
 * Sci var that represents sci's `clojure.core/*out*`
 */
sci.core.out = sci.impl.io.out;
/**
 * Sci var that represents sci's `clojure.core/*err*`
 */
sci.core.err = sci.impl.io.err;
/**
 * Sci var that represents sci's `clojure.core/*print-length*`
 */
sci.core.print_length = sci.impl.io.print_length;
/**
 * Atomically alters the root binding of sci var v by applying f to its
 *   current value plus any args.
 */
sci.core.alter_var_root = (function sci$core$alter_var_root(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81686 = arguments.length;
var i__4737__auto___81687 = (0);
while(true){
if((i__4737__auto___81687 < len__4736__auto___81686)){
args__4742__auto__.push((arguments[i__4737__auto___81687]));

var G__81688 = (i__4737__auto___81687 + (1));
i__4737__auto___81687 = G__81688;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.core.alter_var_root.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.vars.alter_var_root,v,f,args);
}));

(sci.core.alter_var_root.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.core.alter_var_root.cljs$lang$applyTo = (function (seq81668){
var G__81669 = cljs.core.first(seq81668);
var seq81668__$1 = cljs.core.next(seq81668);
var G__81670 = cljs.core.first(seq81668__$1);
var seq81668__$2 = cljs.core.next(seq81668__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81669,G__81670,seq81668__$2);
}));

/**
 * Evaluates string `s` as one or multiple Clojure expressions using the Small Clojure Interpreter.
 * 
 *   The map `opts` may contain the following:
 * 
 *   - `:bindings`: a map of symbols to values, e.g.: `{'x 1}`. The
 *   symbols will acts as names bound to the corresponding values in the
 *   expressions.
 * 
 *   - `:namespaces`: a map of symbols to namespaces, where a namespace
 *   is a map with symbols to values, e.g.: `{'foo.bar {'x 1}}`. These
 *   namespaces can be used with `require`.
 * 
 *   - `:allow`: a seqable of allowed symbols. All symbols, even those
 *   brought in via `:bindings` or `:namespaces` have to be explicitly
 *   enumerated.
 * 
 *   - `:deny`: a seqable of disallowed symbols, e.g.: `[loop quote
 *   recur]`.
 * 
 *   - `:realize-max`: integer; when provided, program may realize a
 *   maximum number of elements from sequences, e.g. `(vec (range))` will
 *   throw for any number. This also applies to sequences returned from
 *   the expression to the caller.
 * 
 *   - `:preset`: a pretermined set of options. Currently only
 *   `:termination-safe` is supported, which will set `:realize-max` to
 *   `100` and disallows the symbols `loop`, `recur` and `trampoline`.
 * 
 *   - `:features`: when provided a non-empty set of keywords, sci will process reader conditionals using these features (e.g. #{:bb}).
 * 
 *   - `:env`: an atom with a map in which state from the
 *   evaluation (defined namespaced and vars) will be persisted for
 *   re-use over multiple calls.
 *   
 */
sci.core.eval_string = (function sci$core$eval_string(var_args){
var G__81678 = arguments.length;
switch (G__81678) {
case 1:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts);
}));

(sci.core.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.core.js.map