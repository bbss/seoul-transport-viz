goog.provide('clj_d3.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$d3$dist$d3_node=shadow.js.require("module$node_modules$d3$dist$d3_node", {});
clj_d3.base.window_resolve = (function clj_d3$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__104712_SHARP_,p2__104714_SHARP_){
return (p1__104712_SHARP_[p2__104714_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
clj_d3.base.use_path_sub = clj_d3.base.window_resolve(new cljs.core.Symbol("browjure.state","use-path-sub","browjure.state/use-path-sub",1862929956,null));
clj_d3.base.set_path_value = clj_d3.base.window_resolve(new cljs.core.Symbol("browjure.state","set-path-value","browjure.state/set-path-value",-153771031,null));
clj_d3.base.compile = (function clj_d3$base$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),clj_d3.base.set_path_value,new cljs.core.Symbol(null,"d3","d3",302222018,null),module$node_modules$d3$dist$d3_node], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});

clj_d3.base.component = (function (){var G__104727 = (function clj_d3$base$component(props__83397__auto__,maybe_ref__83398__auto__){
var vec__104731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__83397__auto__),maybe_ref__83398__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104731,(0),null);

var component_ref = module$node_modules$react$index.useRef();
var dep_values = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__104746){
var vec__104756 = p__104746;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104756,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__104756,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(clj_d3.base.use_path_sub.cljs$core$IFn$_invoke$arity$1 ? clj_d3.base.use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : clj_d3.base.use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props))));
var map__104736 = props;
var map__104736__$1 = (((((!((map__104736 == null))))?(((((map__104736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104736):map__104736);
var render_ref_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__104736__$1,new cljs.core.Keyword("d3","render-ref-fn","d3/render-ref-fn",1246789713));
var render_ref_fn__$1 = clj_d3.base.compile((render_ref_fn["rep"]));
module$node_modules$react$index.useEffect((function (){
var G__104778_104877 = dep_values;
var G__104779_104878 = component_ref.current;
(render_ref_fn__$1.cljs$core$IFn$_invoke$arity$2 ? render_ref_fn__$1.cljs$core$IFn$_invoke$arity$2(G__104778_104877,G__104779_104878) : render_ref_fn__$1.call(null,G__104778_104877,G__104779_104878));

return (function (){
return null;
});
}),[dep_values]);

return helix.core.get_react().createElement("svg",helix.impl.props.merge_obj((function (){var obj104833 = ({"key":["d3",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props))].join(''),"ref":component_ref});
return obj104833;
})(),helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-props","container-props",-1692729191).cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__104836 = G__104727;
goog.object.set(G__104836,"displayName","clj-d3.base/component");

return G__104836;
} else {
return G__104727;
}
})();



clj_d3.base.handler = (function clj_d3$base$handler(){
return null;
});

//# sourceMappingURL=clj_d3.base.js.map
