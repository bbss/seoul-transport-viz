goog.provide('clj_sablono.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
clj_sablono.base.handler = (function clj_sablono$base$handler(p__94740){
var map__94741 = p__94740;
var map__94741__$1 = (((((!((map__94741 == null))))?(((((map__94741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94741):map__94741);
var command = map__94741__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94741__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94741__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
console.log("sablono base handler",command);

return module$node_modules$react_dom$index.render(sablono.interpreter.interpret(payload),document.getElementById("app"));
});

//# sourceMappingURL=clj_sablono.base.js.map
