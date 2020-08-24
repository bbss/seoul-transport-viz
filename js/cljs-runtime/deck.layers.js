goog.provide('deck.layers');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_map_gl$dist$es5$index=shadow.js.require("module$node_modules$react_map_gl$dist$es5$index", {});
var module$node_modules$deck_DOT_gl$dist$es5$index=shadow.js.require("module$node_modules$deck_DOT_gl$dist$es5$index", {});
deck.layers.component_factory = (function deck$layers$component_factory(component){
return (function() { 
var G__102143__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,component,cljs.core.clj__GT_js(props),children);
};
var G__102143 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__102144__i = 0, G__102144__a = new Array(arguments.length -  1);
while (G__102144__i < G__102144__a.length) {G__102144__a[G__102144__i] = arguments[G__102144__i + 1]; ++G__102144__i;}
  children = new cljs.core.IndexedSeq(G__102144__a,0,null);
} 
return G__102143__delegate.call(this,props,children);};
G__102143.cljs$lang$maxFixedArity = 1;
G__102143.cljs$lang$applyTo = (function (arglist__102145){
var props = cljs.core.first(arglist__102145);
var children = cljs.core.rest(arglist__102145);
return G__102143__delegate(props,children);
});
G__102143.cljs$core$IFn$_invoke$arity$variadic = G__102143__delegate;
return G__102143;
})()
;
});
deck.layers.layer_factory = (function deck$layers$layer_factory(layer_fn){
return (function() { 
var G__102146__delegate = function (arg,rest){
return (new layer_fn(arg,rest));
};
var G__102146 = function (arg,var_args){
var rest = null;
if (arguments.length > 1) {
var G__102148__i = 0, G__102148__a = new Array(arguments.length -  1);
while (G__102148__i < G__102148__a.length) {G__102148__a[G__102148__i] = arguments[G__102148__i + 1]; ++G__102148__i;}
  rest = new cljs.core.IndexedSeq(G__102148__a,0,null);
} 
return G__102146__delegate.call(this,arg,rest);};
G__102146.cljs$lang$maxFixedArity = 1;
G__102146.cljs$lang$applyTo = (function (arglist__102152){
var arg = cljs.core.first(arglist__102152);
var rest = cljs.core.rest(arglist__102152);
return G__102146__delegate(arg,rest);
});
G__102146.cljs$core$IFn$_invoke$arity$variadic = G__102146__delegate;
return G__102146;
})()
;
});
deck.layers.deck = deck.layers.component_factory(module$node_modules$deck_DOT_gl$dist$es5$index.default);
deck.layers.static_map = deck.layers.component_factory(module$node_modules$react_map_gl$dist$es5$index.StaticMap);
deck.layers.lighting_effect = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.LightingEffect);
deck.layers.camera_light = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._CameraLight);
deck.layers.sun_light = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._SunLight);
deck.layers.post_process_effect = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.PostProcessEffect);
deck.layers.layers_pass = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._LayersPass);
deck.layers.layer_manager = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.LayerManager);
deck.layers.attribute_manager = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.AttributeManager);
deck.layers.layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Layer);
deck.layers.composite_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.CompositeLayer);
deck.layers.deck_renderer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.DeckRenderer);
deck.layers.viewport = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Viewport);
deck.layers.web_mercator_viewport = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.WebMercatorViewport);
deck.layers.view = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.View);
deck.layers.map_view = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.MapView);
deck.layers.first_person_view = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.FirstPersonView);
deck.layers.orbit_view = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.OrbitView);
deck.layers.orthographic_view = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.OrthographicView);
deck.layers.controller = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Controller);
deck.layers.map_controller = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.MapController);
deck.layers.first_person_controller = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.FirstPersonController);
deck.layers.orbit_controller = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.OrbitController);
deck.layers.orthographic_controller = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.OrthographicController);
deck.layers.effect = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Effect);
deck.layers.layer_extension = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.LayerExtension);
deck.layers.linear_interpolator = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.LinearInterpolator);
deck.layers.fly_to_interpolator = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.FlyToInterpolator);
module$node_modules$deck_DOT_gl$dist$es5$index.log = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.log);
deck.layers.tesselator = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Tesselator);
deck.layers.arc_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ArcLayer);
deck.layers.bitmap_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.BitmapLayer);
deck.layers.icon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.IconLayer);
deck.layers.line_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.LineLayer);
deck.layers.point_cloud_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.PointCloudLayer);
deck.layers.scatterplot_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ScatterplotLayer);
deck.layers.column_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ColumnLayer);
deck.layers.grid_cell_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.GridCellLayer);
deck.layers.path_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.PathLayer);
deck.layers.polygon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.PolygonLayer);
deck.layers.geo_json_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.GeoJsonLayer);
deck.layers.text_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.TextLayer);
deck.layers.solid_polygon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.SolidPolygonLayer);
deck.layers.multi_icon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._MultiIconLayer);
deck.layers.great_circle_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.GreatCircleLayer);
deck.layers.s2_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.S2Layer);
deck.layers.tile_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.TileLayer);
deck.layers.trips_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.TripsLayer);
deck.layers.h3_cluster_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.H3ClusterLayer);
deck.layers.h3_hexagon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.H3HexagonLayer);
deck.layers.tile_3d_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.Tile3DLayer);
deck.layers.terrain_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.TerrainLayer);
deck.layers.mvt_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.MVTLayer);
deck.layers.screen_grid_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ScreenGridLayer);
deck.layers.cpu_grid_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.CPUGridLayer);
deck.layers.hexagon_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.HexagonLayer);
deck.layers.contour_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ContourLayer);
deck.layers.grid_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.GridLayer);
deck.layers.gpu_grid_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.GPUGridLayer);
deck.layers.heatmap_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.HeatmapLayer);
deck.layers.gpu_grid_aggregator = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._GPUGridAggregator);
deck.layers.cpu_aggregator = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._CPUAggregator);
deck.layers.aggregation_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._AggregationLayer);
deck.layers.bin_sorter = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index._BinSorter);
deck.layers.simple_mesh_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.SimpleMeshLayer);
deck.layers.scenegraph_layer = deck.layers.layer_factory(module$node_modules$deck_DOT_gl$dist$es5$index.ScenegraphLayer);
deck.layers.key__GT_class = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hexagon-layer","hexagon-layer",911695840),new cljs.core.Keyword(null,"bin-sorter","bin-sorter",1389295937),new cljs.core.Keyword(null,"map-view","map-view",-1787821599),new cljs.core.Keyword(null,"scatterplot-layer","scatterplot-layer",-1115673919),new cljs.core.Keyword(null,"heatmap-layer","heatmap-layer",316635874),new cljs.core.Keyword(null,"solid-polygon-layer","solid-polygon-layer",1030016770),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"simple-mesh-layer","simple-mesh-layer",422874916),new cljs.core.Keyword(null,"fly-to-interpolator","fly-to-interpolator",-1010932731),new cljs.core.Keyword(null,"geo-json-layer","geo-json-layer",1279697285),new cljs.core.Keyword(null,"tile-3d-layer","tile-3d-layer",1764691397),new cljs.core.Keyword(null,"tile-layer","tile-layer",192729190),new cljs.core.Keyword(null,"terrain-layer","terrain-layer",-1673535258),new cljs.core.Keyword(null,"map-controller","map-controller",959697222),new cljs.core.Keyword(null,"sun-light","sun-light",-1966448441),new cljs.core.Keyword(null,"orthographic-view","orthographic-view",71835431),new cljs.core.Keyword(null,"grid-cell-layer","grid-cell-layer",-1349736376),new cljs.core.Keyword(null,"trips-layer","trips-layer",2121641704),new cljs.core.Keyword(null,"linear-interpolator","linear-interpolator",-608361399),new cljs.core.Keyword(null,"mvt-layer","mvt-layer",146129225),new cljs.core.Keyword(null,"tesselator","tesselator",1413862121),new cljs.core.Keyword(null,"attribute-manager","attribute-manager",-1415207959),new cljs.core.Keyword(null,"memoize","memoize",378809642),new cljs.core.Keyword(null,"first-person-controller","first-person-controller",-1121623254),new cljs.core.Keyword(null,"great-circle-layer","great-circle-layer",-1302857685),new cljs.core.Keyword(null,"post-process-effect","post-process-effect",1032395979),new cljs.core.Keyword(null,"first-person-view","first-person-view",-729956212),new cljs.core.Keyword(null,"gpu-grid-aggregator","gpu-grid-aggregator",-234764052),new cljs.core.Keyword(null,"contour-layer","contour-layer",604504237),new cljs.core.Keyword(null,"icon-layer","icon-layer",-707742419),new cljs.core.Keyword(null,"point-cloud-layer","point-cloud-layer",1453033453),new cljs.core.Keyword(null,"multi-icon-layer","multi-icon-layer",-1487937682),new cljs.core.Keyword(null,"bitmap-layer","bitmap-layer",-326483793),new cljs.core.Keyword(null,"polygon-layer","polygon-layer",1016367439),new cljs.core.Keyword(null,"s2-layer","s2-layer",-411618832),new cljs.core.Keyword(null,"layers-pass","layers-pass",-1811075343),new cljs.core.Keyword(null,"layer-manager","layer-manager",1025232690),new cljs.core.Keyword(null,"camera-light","camera-light",1331097426),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"text-layer","text-layer",1854142675),new cljs.core.Keyword(null,"line-layer","line-layer",-397021100),new cljs.core.Keyword(null,"h3-hexagon-layer","h3-hexagon-layer",2101516884),new cljs.core.Keyword(null,"gpu-grid-layer","gpu-grid-layer",1308842677),new cljs.core.Keyword(null,"web-mercator-viewport","web-mercator-viewport",1899412950),new cljs.core.Keyword(null,"scenegraph-layer","scenegraph-layer",-1566127912),new cljs.core.Keyword(null,"layer-extension","layer-extension",1036343096),new cljs.core.Keyword(null,"lighting-effect","lighting-effect",-1839595656),new cljs.core.Keyword(null,"grid-layer","grid-layer",931351929),new cljs.core.Keyword(null,"effect","effect",347343289),new cljs.core.Keyword(null,"aggregation-layer","aggregation-layer",1539242681),new cljs.core.Keyword(null,"deck-renderer","deck-renderer",-1958376325),new cljs.core.Keyword(null,"cpu-aggregator","cpu-aggregator",1346901339),new cljs.core.Keyword(null,"arc-layer","arc-layer",-1388087845),new cljs.core.Keyword(null,"viewport","viewport",443342715),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"orbit-controller","orbit-controller",597725341),new cljs.core.Keyword(null,"h3-cluster-layer","h3-cluster-layer",-1461762691),new cljs.core.Keyword(null,"orbit-view","orbit-view",93150653),new cljs.core.Keyword(null,"column-layer","column-layer",-1847372610),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"path-layer","path-layer",-28105537),new cljs.core.Keyword(null,"cpu-grid-layer","cpu-grid-layer",-1148747553),new cljs.core.Keyword(null,"screen-grid-layer","screen-grid-layer",-990438145),new cljs.core.Keyword(null,"orthographic-controller","orthographic-controller",-431479489),new cljs.core.Keyword(null,"composite-layer","composite-layer",-266099841)],[deck.layers.hexagon_layer,deck.layers.bin_sorter,deck.layers.map_view,deck.layers.scatterplot_layer,deck.layers.heatmap_layer,deck.layers.solid_polygon_layer,deck.layers.controller,deck.layers.simple_mesh_layer,deck.layers.fly_to_interpolator,deck.layers.geo_json_layer,deck.layers.tile_3d_layer,deck.layers.tile_layer,deck.layers.terrain_layer,deck.layers.map_controller,deck.layers.sun_light,deck.layers.orthographic_view,deck.layers.grid_cell_layer,deck.layers.trips_layer,deck.layers.linear_interpolator,deck.layers.mvt_layer,deck.layers.tesselator,deck.layers.attribute_manager,cljs.core.memoize,deck.layers.first_person_controller,deck.layers.great_circle_layer,deck.layers.post_process_effect,deck.layers.first_person_view,deck.layers.gpu_grid_aggregator,deck.layers.contour_layer,deck.layers.icon_layer,deck.layers.point_cloud_layer,deck.layers.multi_icon_layer,deck.layers.bitmap_layer,deck.layers.polygon_layer,deck.layers.s2_layer,deck.layers.layers_pass,deck.layers.layer_manager,deck.layers.camera_light,deck.layers.layer,deck.layers.text_layer,deck.layers.line_layer,deck.layers.h3_hexagon_layer,deck.layers.gpu_grid_layer,deck.layers.web_mercator_viewport,deck.layers.scenegraph_layer,deck.layers.layer_extension,deck.layers.lighting_effect,deck.layers.grid_layer,deck.layers.effect,deck.layers.aggregation_layer,deck.layers.deck_renderer,deck.layers.cpu_aggregator,deck.layers.arc_layer,deck.layers.viewport,module$node_modules$deck_DOT_gl$dist$es5$index.log,deck.layers.orbit_controller,deck.layers.h3_cluster_layer,deck.layers.orbit_view,deck.layers.column_layer,deck.layers.view,deck.layers.path_layer,deck.layers.cpu_grid_layer,deck.layers.screen_grid_layer,deck.layers.orthographic_controller,deck.layers.composite_layer]);

//# sourceMappingURL=deck.layers.js.map
