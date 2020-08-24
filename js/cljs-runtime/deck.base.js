goog.provide('deck.base');
var module$node_modules$$deck_DOT_gl$extensions$dist$es5$index=shadow.js.require("module$node_modules$$deck_DOT_gl$extensions$dist$es5$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
console.log("LOADED CLJS DECK BASE APP");
deck.base.mapbox_token = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
deck.base.active_layers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
deck.base.assoc_cljs_data = (function deck$base$assoc_cljs_data(o,data){
goog.object.set(o,"data",cljs.core.to_array(data));

return o;
});
deck.base.set_tooltip = (function deck$base$set_tooltip(var_args){
var G__105290 = arguments.length;
switch (G__105290) {
case 2:
return deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$2 = (function (p__105291,label){
var vec__105292 = p__105291;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105292,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105292,(1),null);
return deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),label,cljs.core.PersistentArrayMap.EMPTY);
}));

(deck.base.set_tooltip.cljs$core$IFn$_invoke$arity$3 = (function (p__105295,label,p__105296){
var vec__105297 = p__105295;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105297,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105297,(1),null);
var map__105300 = p__105296;
var map__105300__$1 = (((((!((map__105300 == null))))?(((((map__105300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105300):map__105300);
var font_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105300__$1,new cljs.core.Keyword(null,"font-color","font-color",-2019660285),"white");
var tooltip = document.getElementById("tooltip");
var el = (cljs.core.truth_(tooltip)?tooltip:(function (){var new_el = document.createElement("div");
new_el.setAttribute("id","tooltip");

document.body.append(new_el);

return new_el;
})());
if(cljs.core.truth_(label)){
(el.innerHTML = label);

(el.style.display = "block");

(el.style.position = "absolute");

(el.style.zIndex = (10));

(el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + (20))),"px"].join(''));

(el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (20))),"px"].join(''));

return (el.style.color = font_color);
} else {
return (el.style.display = "none");
}
}));

(deck.base.set_tooltip.cljs$lang$maxFixedArity = 3);

deck.base.window_resolve = (function deck$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__105302_SHARP_,p2__105303_SHARP_){
return (p1__105302_SHARP_[p2__105303_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
deck.base.set_hiccup_tooltip = (function deck$base$set_hiccup_tooltip(p__105304,hiccup){
var vec__105305 = p__105304;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105305,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105305,(1),null);
var tooltip = document.getElementById("tooltip");
var el = (cljs.core.truth_(tooltip)?tooltip:(function (){var new_el = document.createElement("div");
new_el.setAttribute("id","tooltip");

document.body.append(new_el);

return new_el;
})());
if(cljs.core.truth_(hiccup)){
(el.innerHTML = module$node_modules$react_dom$server_browser.renderToStaticMarkup(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(deck.base.window_resolve(new cljs.core.Symbol("sablono.interpreter","element","sablono.interpreter/element",-1789587768,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup], null))));

(el.style.display = "block");

(el.style.position = "absolute");

(el.style.zIndex = (10));

(el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((x + (20))),"px"].join(''));

return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((y + (20))),"px"].join(''));
} else {
return (el.style.display = "none");
}
});
deck.base.compile_and_add_layer = (function deck$base$compile_and_add_layer(layer_props){
var compiled_layer_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__105308){
var vec__105309 = p__105308;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105309,(1),null);
if(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(v["rep"]),null,(1),null))], 0))))], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__105312){
var map__105313 = p__105312;
var map__105313__$1 = (((((!((map__105313 == null))))?(((((map__105313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105313):map__105313);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105313__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105313__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),deck.base.set_tooltip,new cljs.core.Symbol(null,"set-hiccup-tooltip","set-hiccup-tooltip",2017825951,null),deck.base.set_hiccup_tooltip], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null))], null);
} else {
return null;
}
}),layer_props)));
var uses_functions_QMARK_ = cljs.core.some((function (p__105315){
var vec__105316 = p__105315;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105316,(1),null);
return cognitect.transit.tagged_value_QMARK_(v);
}),layer_props);
if(cljs.core.truth_(uses_functions_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deck.base.active_layers,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__105319 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__105319) : deck.layers.key__GT_class.call(null,G__105319));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deck.base.assoc_cljs_data(cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer_props))], null)));

return (deck.base.rerender.cljs$core$IFn$_invoke$arity$0 ? deck.base.rerender.cljs$core$IFn$_invoke$arity$0() : deck.base.rerender.call(null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(deck.base.active_layers,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__105320 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__105320) : deck.layers.key__GT_class.call(null,G__105320));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_bean.core.__GT_js(layer_props)], null)));

return (deck.base.rerender.cljs$core$IFn$_invoke$arity$0 ? deck.base.rerender.cljs$core$IFn$_invoke$arity$0() : deck.base.rerender.call(null));
}
});
if((typeof deck !== 'undefined') && (typeof deck.base !== 'undefined') && (typeof deck.base.default_view_state !== 'undefined')){
} else {
deck.base.default_view_state = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"latitude","latitude",394867543),37.618889,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),-122.375,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(10),new cljs.core.Keyword(null,"bearing","bearing",-1189702101),(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"width","width",-384071477),goog.object.get(window,"innerWidth"),new cljs.core.Keyword(null,"height","height",1025178622),goog.object.get(window,"innerHeight")], null));
}
deck.base.rerender = (function deck$base$rerender(){
return module$node_modules$react_dom$index.render(deck.layers.deck(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),deck.base.default_view_state,new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.vals(cljs.core.deref(deck.base.active_layers))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref(deck.base.mapbox_token))?deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),cljs.core.deref(deck.base.mapbox_token),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),document.getElementById("app"));
});
deck.base.handler = (function deck$base$handler(p__105321){
var map__105322 = p__105321;
var map__105322__$1 = (((((!((map__105322 == null))))?(((((map__105322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105322):map__105322);
var command = map__105322__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105322__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105322__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105322__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
console.log("deck handler command: ",command);

var G__105324_105363 = type;
var G__105324_105364__$1 = (((G__105324_105363 instanceof cljs.core.Keyword))?G__105324_105363.fqn:null);
switch (G__105324_105364__$1) {
case "mapbox-token":
if(cljs.core.truth_(cljs.core.deref(deck.base.mapbox_token))){
} else {
cljs.core.reset_BANG_(deck.base.mapbox_token,payload);
}

break;
case "register-plugin":
if(cljs.core.truth_(new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(payload))){
cljs.core.reset_BANG_(deck.base.mapbox_token,new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(payload));
} else {
}

break;
case "visualize":
deck.base.compile_and_add_layer(payload);

break;
case "erase":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deck.base.active_layers,cljs.core.dissoc,payload);

deck.base.rerender();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__105324_105364__$1)].join('')));

}

return deck.base.rerender();
});
deck.base.set_path_value = deck.base.window_resolve(new cljs.core.Symbol("browjure.state","set-path-value","browjure.state/set-path-value",-153771031,null));
deck.base.compile = (function deck$base$compile(form){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),deck.base.set_tooltip,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__105325){
var map__105326 = p__105325;
var map__105326__$1 = (((((!((map__105326 == null))))?(((((map__105326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105326):map__105326);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105326__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105326__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),deck.base.set_path_value], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
});
deck.base.compile_layer_props = (function deck$base$compile_layer_props(layer_props){
var compiled_layer_props = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__105328){
var vec__105329 = p__105328;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105329,(1),null);
if(cljs.core.truth_(cognitect.transit.tagged_value_QMARK_(v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clj->js","cljs.core/clj->js",-1490083117,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(v["rep"]),null,(1),null))], 0))))], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document,new cljs.core.Symbol(null,"data-filter","data-filter",819088047,null),(function (p__105332){
var map__105333 = p__105332;
var map__105333__$1 = (((((!((map__105333 == null))))?(((((map__105333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105333):map__105333);
var fp64 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105333__$1,new cljs.core.Keyword(null,"fp64","fp64",1314988535));
var filter_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105333__$1,new cljs.core.Keyword(null,"filter-size","filter-size",-437273305));
return (new module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension(({"filterSize": filter_size, "fp64": fp64})));
}),new cljs.core.Symbol(null,"DataFilterExtension","DataFilterExtension",-1060952149,null),module$node_modules$$deck_DOT_gl$extensions$dist$es5$index.DataFilterExtension,new cljs.core.Symbol(null,"set-tooltip","set-tooltip",-550723715,null),deck.base.set_tooltip,new cljs.core.Symbol(null,"set-path-value","set-path-value",424354368,null),deck.base.set_path_value], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null))], null);
} else {
return null;
}
}),layer_props)));
var uses_functions_QMARK_ = cljs.core.some((function (p__105335){
var vec__105336 = p__105335;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105336,(1),null);
return cognitect.transit.tagged_value_QMARK_(v);
}),layer_props);
if(cljs.core.truth_(uses_functions_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__105339 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__105339) : deck.layers.key__GT_class.call(null,G__105339));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [deck.base.assoc_cljs_data(cljs_bean.core.__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([layer_props,compiled_layer_props], 0))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(layer_props))], null));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__105340 = new cljs.core.Keyword(null,"layer-type","layer-type",816560917).cljs$core$IFn$_invoke$arity$1(layer_props);
return (deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1 ? deck.layers.key__GT_class.cljs$core$IFn$_invoke$arity$1(G__105340) : deck.layers.key__GT_class.call(null,G__105340));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_bean.core.__GT_js(layer_props)], null));
}
});
deck.base.embed_component = (function deck$base$embed_component(var_args){
var args__4742__auto__ = [];
var len__4736__auto___105366 = arguments.length;
var i__4737__auto___105367 = (0);
while(true){
if((i__4737__auto___105367 < len__4736__auto___105366)){
args__4742__auto__.push((arguments[i__4737__auto___105367]));

var G__105368 = (i__4737__auto___105367 + (1));
i__4737__auto___105367 = G__105368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return deck.base.embed_component.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(deck.base.embed_component.cljs$core$IFn$_invoke$arity$variadic = (function (config_or_layers){
var layers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layer-type","layer-type",816560917),config_or_layers);
var config = (function (){var or__4126__auto__ = cljs.core.some(cljs.core.identity,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,config_or_layers));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (c){
if(cljs.core.truth_(c)){
return module$node_modules$react_dom$index.render(deck.layers.deck(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"container","container",-1736937707),c,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),deck.base.default_view_state,new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(deck.base.compile_layer_props,layers)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(config);
}
})())?deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),(function (){var or__4126__auto__ = cljs.core.deref(deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(config);
}
})(),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),c);
} else {
return null;
}
})], null),new cljs.core.Keyword(null,"container-props","container-props",-1692729191).cljs$core$IFn$_invoke$arity$1(config)], 0))], null);
}));

(deck.base.embed_component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(deck.base.embed_component.cljs$lang$applyTo = (function (seq105341){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq105341));
}));


deck.base.deck_component = (function (){var G__105344 = (function deck$base$deck_component(props__83397__auto__,maybe_ref__83398__auto__){
var vec__105345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__83397__auto__),maybe_ref__83398__auto__], null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105345,(0),null);

var use_path_sub = deck.base.window_resolve(new cljs.core.Symbol("browjure.state","use-path-sub","browjure.state/use-path-sub",1862929956,null));
var dep_values = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__105349){
var vec__105350 = p__105349;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105350,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105350,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,(use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(dep_path) : use_path_sub.call(null,dep_path))], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(props))));
var view_state = (function (){var G__105353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-state","view-state",-976675614)], null);
return (use_path_sub.cljs$core$IFn$_invoke$arity$1 ? use_path_sub.cljs$core$IFn$_invoke$arity$1(G__105353) : use_path_sub.call(null,G__105353));
})();
var map__105348 = props;
var map__105348__$1 = (((((!((map__105348 == null))))?(((((map__105348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105348):map__105348);
var data__GT_layers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105348__$1,new cljs.core.Keyword("deck","data->layers","deck/data->layers",-2136602585));
var data__GT_layers__$1 = deck.base.compile((data__GT_layers["rep"]));
return helix.core.get_react().createElement("div",helix.impl.props.merge_obj((function (){var obj105356 = ({"key":["deck",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props))].join(''),"ref":(function (c){
if(cljs.core.truth_(c)){
return module$node_modules$react_dom$index.render(deck.layers.deck(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),"deck",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"controller","controller",2013778659),true,new cljs.core.Keyword(null,"container","container",-1736937707),c,new cljs.core.Keyword(null,"pickingRadius","pickingRadius",473010889),(10),new cljs.core.Keyword(null,"initialViewState","initialViewState",740431837),(function (){var or__4126__auto__ = cljs.core.clj__GT_js(view_state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return deck.base.default_view_state;
}
})(),new cljs.core.Keyword(null,"layers","layers",1944875032),cljs.core.to_array(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__105357){
var vec__105358 = p__105357;
var layer_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105358,(0),null);
var layers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105358,(1),null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (layer){
return deck.base.compile_layer_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(layer,new cljs.core.Keyword(null,"layer-type","layer-type",816560917),layer_type));
}),layers));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data__GT_layers__$1.cljs$core$IFn$_invoke$arity$1 ? data__GT_layers__$1.cljs$core$IFn$_invoke$arity$1(dep_values) : data__GT_layers__$1.call(null,dep_values))], 0))),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(props);
}
})())?deck.layers.static_map(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),"map",new cljs.core.Keyword(null,"mapboxApiAccessToken","mapboxApiAccessToken",-842486051),(function (){var or__4126__auto__ = cljs.core.deref(deck.base.mapbox_token);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"mapbox-token","mapbox-token",1742898605).cljs$core$IFn$_invoke$arity$1(props);
}
})(),new cljs.core.Keyword(null,"reuseMaps","reuseMaps",-1634223454),true,new cljs.core.Keyword(null,"mapStyle","mapStyle",1133058219),"mapbox://styles/mapbox/dark-v9",new cljs.core.Keyword(null,"preventStyleDiffing","preventStyleDiffing",136247515),true], null)):null)], null)], null)),c);
} else {
return null;
}
})});
return obj105356;
})(),helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"container-props","container-props",-1692729191).cljs$core$IFn$_invoke$arity$1(props))));
});
if(goog.DEBUG === true){
var G__105361 = G__105344;
goog.object.set(G__105361,"displayName","deck.base/deck-component");

return G__105361;
} else {
return G__105344;
}
})();




//# sourceMappingURL=deck.base.js.map
