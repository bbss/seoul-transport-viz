goog.provide('helix.impl.props');
helix.impl.props.aria_data_special_case_re = /^(aria-|data-).*/;
helix.impl.props.camel_regexp = RegExp("-(\\w)","g");
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
helix.impl.props.camel_case = (function helix$impl$props$camel_case(s){
if((((s instanceof cljs.core.Keyword)) || (typeof s === 'string') || ((s instanceof cljs.core.Symbol)))){
var name_str = cljs.core.name(s);
if((!((name_str.match(helix.impl.props.aria_data_special_case_re) == null)))){
return name_str;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name_str.substring((0),(1)),"'")){
return name_str.substring((1));
} else {
return name_str.replace(helix.impl.props.camel_regexp,(function (p1__76390_SHARP_,p2__76389_SHARP_){
return p2__76389_SHARP_.toUpperCase();
}));

}
}
} else {
return s;
}
});
helix.impl.props.kw__GT_str = (function helix$impl$props$kw__GT_str(kw){
var kw_ns = cljs.core.namespace(kw);
var kw_name = cljs.core.name(kw);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
helix.impl.props.set_obj = (function helix$impl$props$set_obj(o,k,v){
var G__76409 = o;
goog.object.set(G__76409,k,v);

return G__76409;
});
helix.impl.props.__GT_js = (function helix$impl$props$__GT_js(x){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(helix.impl.props.camel_case,cljs.core.name)], 0));
});
helix.impl.props.primitive_obj = (function helix$impl$props$primitive_obj(var_args){
var G__76435 = arguments.length;
switch (G__76435) {
case 0:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
}));

(helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__76472 = cljs.core.rest(m);
var G__76473 = (function (){var entry = cljs.core.first(m);
return helix.impl.props.set_obj(o,helix.impl.props.camel_case(helix.impl.props.kw__GT_str(cljs.core.key(entry))),helix.impl.props.__GT_js(cljs.core.val(entry)));
})();
m = G__76472;
o = G__76473;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props.primitive_obj.cljs$lang$maxFixedArity = 2);

helix.impl.props.into_js_array = (function helix$impl$props$into_js_array(aseq){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(aseq);
});
helix.impl.props.merge_obj = (function helix$impl$props$merge_obj(o1,o2){
if((o2 == null)){
return o1;
} else {
var G__76442 = o1;
goog.object.extend(G__76442,o2);

return G__76442;
}
});
helix.impl.props.seq_to_class = (function helix$impl$props$seq_to_class(class$){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,class$)));
});
helix.impl.props.normalize_class = (function helix$impl$props$normalize_class(class$){
if(typeof class$ === 'string'){
return class$;
} else {
if(cljs.core.sequential_QMARK_(class$)){
return helix.impl.props.seq_to_class(class$);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);

}
}
});
helix.impl.props._native_props = (function helix$impl$props$_native_props(var_args){
var G__76447 = arguments.length;
switch (G__76447) {
case 1:
return helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(helix.impl.props._native_props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__76515 = cljs.core.rest(m);
var G__76516 = (function (){var entry = cljs.core.first(m);
var k = cljs.core.key(entry);
var v = cljs.core.val(entry);
var G__76453 = k;
var G__76453__$1 = (((G__76453 instanceof cljs.core.Keyword))?G__76453.fqn:null);
switch (G__76453__$1) {
case "class":
return helix.impl.props.set_obj(o,"className",helix.impl.props.normalize_class(v));

break;
case "for":
return helix.impl.props.set_obj(o,"htmlFor",v);

break;
case "style":
return helix.impl.props.set_obj(o,"style",((cljs.core.vector_QMARK_(v))?helix.impl.props.into_js_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(helix.impl.props.primitive_obj,v)):helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(v)));

break;
case "value":
return helix.impl.props.set_obj(o,"value",(((v == null))?undefined:v));

break;
default:
return helix.impl.props.set_obj(o,helix.impl.props.camel_case(helix.impl.props.kw__GT_str(k)),v);

}
})();
m = G__76515;
o = G__76516;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._native_props.cljs$lang$maxFixedArity = 2);

helix.impl.props._props = (function helix$impl$props$_props(var_args){
var G__76459 = arguments.length;
switch (G__76459) {
case 1:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return helix.impl.props._props.cljs$core$IFn$_invoke$arity$2(m,helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(helix.impl.props._props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__76529 = cljs.core.rest(m);
var G__76530 = (function (){var entry = cljs.core.first(m);
return helix.impl.props.set_obj(o,helix.impl.props.kw__GT_str(cljs.core.key(entry)),cljs.core.val(entry));
})();
m = G__76529;
o = G__76530;
continue;
} else {
return o;
}
break;
}
}));

(helix.impl.props._props.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=helix.impl.props.js.map
