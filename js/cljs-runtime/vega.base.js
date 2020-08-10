goog.provide('vega.base');
var module$node_modules$vega_lite$build$vega_lite=shadow.js.require("module$node_modules$vega_lite$build$vega_lite", {});
var module$node_modules$vega_embed$build$vega_embed=shadow.js.require("module$node_modules$vega_embed$build$vega_embed", {});
console.log("LOADED VEGA BASE");
vega.base.window_resolve = (function vega$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81684_SHARP_,p2__81685_SHARP_){
return (p1__81684_SHARP_[p2__81685_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
vega.base.compile = (function vega$base$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});
vega.base.dataset_component = (function vega$base$dataset_component(p__81694){
var map__81695 = p__81694;
var map__81695__$1 = (((((!((map__81695 == null))))?(((((map__81695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81695):map__81695);
var data__GT_vega_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81695__$1,new cljs.core.Keyword("vega","data->vega-spec","vega/data->vega-spec",-155039939));
var dependencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81695__$1,new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717));
var data__GT_vega_spec__$1 = vega.base.compile((data__GT_vega_spec["rep"]));
var data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (c){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81700){
var vec__81704 = p__81700;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81704,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81704,(1),null);
return (function (){var fexpr__81708 = vega.base.window_resolve(new cljs.core.Symbol("browjure.state","get-or-create-subject","browjure.state/get-or-create-subject",-741919012,null));
return (fexpr__81708.cljs$core$IFn$_invoke$arity$2 ? fexpr__81708.cljs$core$IFn$_invoke$arity$2(dep_path,null) : fexpr__81708.call(null,dep_path,null));
})().subscribe((function (r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,dep_name,r);

return module$node_modules$vega_embed$build$vega_embed.default(c,cljs.core.clj__GT_js((function (){var G__81726 = cljs.core.deref(data);
return (data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1 ? data__GT_vega_spec__$1.cljs$core$IFn$_invoke$arity$1(G__81726) : data__GT_vega_spec__$1.call(null,G__81726));
})()));
}));
}),dependencies));
})], null)], null);
});
vega.base.embed_component = (function vega$base$embed_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___81781 = arguments.length;
var i__4737__auto___81782 = (0);
while(true){
if((i__4737__auto___81782 < len__4736__auto___81781)){
args__4742__auto__.push((arguments[i__4737__auto___81782]));

var G__81783 = (i__4737__auto___81782 + (1));
i__4737__auto___81782 = G__81783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(vega.base.embed_component.cljs$core$IFn$_invoke$arity$variadic = (function (specs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function vega$base$iter__81734(s__81735){
return (new cljs.core.LazySeq(null,(function (){
var s__81735__$1 = s__81735;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__81735__$1);
if(temp__5735__auto__){
var s__81735__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81735__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__81735__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__81737 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__81736 = (0);
while(true){
if((i__81736 < size__4528__auto__)){
var spec = cljs.core._nth(c__4527__auto__,i__81736);
cljs.core.chunk_append(b__81737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (i__81736,spec,c__4527__auto__,size__4528__auto__,b__81737,s__81735__$2,temp__5735__auto__){
return (function (p1__81728_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__81728_SHARP_,cljs.core.clj__GT_js(spec));
});})(i__81736,spec,c__4527__auto__,size__4528__auto__,b__81737,s__81735__$2,temp__5735__auto__))
], null)], null));

var G__81812 = (i__81736 + (1));
i__81736 = G__81812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81737),vega$base$iter__81734(cljs.core.chunk_rest(s__81735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81737),null);
}
} else {
var spec = cljs.core.first(s__81735__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),((function (spec,s__81735__$2,temp__5735__auto__){
return (function (p1__81728_SHARP_){
return module$node_modules$vega_embed$build$vega_embed.default(p1__81728_SHARP_,cljs.core.clj__GT_js(spec));
});})(spec,s__81735__$2,temp__5735__auto__))
], null)], null),vega$base$iter__81734(cljs.core.rest(s__81735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(specs);
})()], null);
}));

(vega.base.embed_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(vega.base.embed_component.cljs$lang$applyTo = (function (seq81730){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81730));
}));

vega.base.handler = (function vega$base$handler(p__81755){
var map__81756 = p__81755;
var map__81756__$1 = (((((!((map__81756 == null))))?(((((map__81756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81756):map__81756);
var command = map__81756__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81756__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81756__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81756__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"visualize","visualize",-44099815))){
console.log("vega base handler",command);

return module$node_modules$vega_embed$build$vega_embed.default("#app",cljs.core.clj__GT_js(payload));
} else {
return null;
}
});

//# sourceMappingURL=vega.base.js.map
