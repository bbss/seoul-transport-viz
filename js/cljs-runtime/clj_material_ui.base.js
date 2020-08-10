goog.provide('clj_material_ui.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
var module$node_modules$$material_ui$core$styles$createMuiTheme=shadow.js.require("module$node_modules$$material_ui$core$styles$createMuiTheme", {});
clj_material_ui.base.window_resolve = (function clj_material_ui$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__81689_SHARP_,p2__81690_SHARP_){
return (p1__81689_SHARP_[p2__81690_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
clj_material_ui.base.handler = (function clj_material_ui$base$handler(lib_event){
return console.log("material base app handler event: ",lib_event);
});
clj_material_ui.base.set_path_value = clj_material_ui.base.window_resolve(new cljs.core.Symbol("browjure.state","set-path-value","browjure.state/set-path-value",-153771031,null));
clj_material_ui.base.compile = (function clj_material_ui$base$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),clj_material_ui.base.set_path_value], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});
clj_material_ui.base.make_component = (function clj_material_ui$base$make_component(material_component_fn){
var use_path_sub = clj_material_ui.base.window_resolve(new cljs.core.Symbol("browjure.state","use-path-sub","browjure.state/use-path-sub",1862929956,null));
var use_combined_sub = clj_material_ui.base.window_resolve(new cljs.core.Symbol("browjure.state","use-combined-sub","browjure.state/use-combined-sub",1258866125,null));
console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.walk.postwalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Keyword(null,"style","style",-496642736))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))], null);
} else {
return form;
}
}),material_component_fn)], 0)));

console.log(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([material_component_fn], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"key->class","key->class",-2043546459,null),clj_material_ui.core.key__GT_class,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),clj_material_ui.base.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),use_path_sub,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)));

return (function (){
return module$node_modules$react$index.createElement(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.walk.postwalk((function (form){
if(((cljs.core.vector_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Keyword(null,"style","style",-496642736))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(form),null,(1),null)))))], null);
} else {
return form;
}
}),material_component_fn)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"key->class","key->class",-2043546459,null),clj_material_ui.core.key__GT_class,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),clj_material_ui.base.set_path_value,new cljs.core.Symbol(null,"use-combined-sub","use-combined-sub",764757410,null),use_combined_sub,new cljs.core.Symbol(null,"use-path-sub","use-path-sub",-792752499,null),use_path_sub,new cljs.core.Symbol(null,"$","$",-1580747756,null),helix.core.$], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null)));
});
});

clj_material_ui.base.material_root = (function (){var G__81740 = (function clj_material_ui$base$material_root(props__77089__auto__,maybe_ref__77090__auto__){
var vec__81741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__77089__auto__),maybe_ref__77090__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81741,(0),null);

var use_path_sub = clj_material_ui.base.window_resolve(new cljs.core.Symbol("browjure.state","use-path-sub","browjure.state/use-path-sub",1862929956,null));
var dep_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81746){
var vec__81750 = p__81746;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81750,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81750,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props)));
var map__81744 = props;
var map__81744__$1 = (((((!((map__81744 == null))))?(((((map__81744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__81744):map__81744);
var class_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81744__$1,new cljs.core.Keyword(null,"class-key","class-key",71822850));
var theme = module$node_modules$$material_ui$core$styles$createMuiTheme.default(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"useNextVariants","useNextVariants",-1997726210),true], null)], null)));
return helix.core.get_react().createElement(module$node_modules$$material_ui$core$styles$index.ThemeProvider,(function (){var obj82128 = ({"theme":theme,"key":"deck","children":new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props)});
return obj82128;
})());
});
if(goog.DEBUG === true){
var G__82129 = G__81740;
goog.object.set(G__82129,"displayName","clj-material-ui.base/material-root");

return G__82129;
} else {
return G__81740;
}
})();




clj_material_ui.base.material_ui_component = (function (){var G__82132 = (function clj_material_ui$base$material_ui_component(props__77089__auto__,maybe_ref__77090__auto__){
var vec__82133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__77089__auto__),maybe_ref__77090__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82133,(0),null);

var use_path_sub = clj_material_ui.base.window_resolve(new cljs.core.Symbol("browjure.state","use-path-sub","browjure.state/use-path-sub",1862929956,null));
var dep_values = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82141){
var vec__82143 = p__82141;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82143,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82143,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props)));
var compiled_props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__82146){
var vec__82148 = p__82146;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82148,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))?clj_material_ui.base.compile((v["rep"])):cljs.core.clj__GT_js(v))], null);
}),props));
var map__82138 = props;
var map__82138__$1 = (((((!((map__82138 == null))))?(((((map__82138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82138):map__82138);
var class_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82138__$1,new cljs.core.Keyword(null,"class-key","class-key",71822850));
console.log(dep_values,new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props));

return helix.core.get_react().createElement(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clj_material_ui.core.key__GT_class,class_key),helix.impl.props.merge_obj(({}),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(compiled_props)));
});
if(goog.DEBUG === true){
var G__82171 = G__82132;
goog.object.set(G__82171,"displayName","clj-material-ui.base/material-ui-component");

return G__82171;
} else {
return G__82132;
}
})();




//# sourceMappingURL=clj_material_ui.base.js.map
