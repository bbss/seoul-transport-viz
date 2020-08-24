goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__94732__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__94215 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__94216 = cljs.core.seq(vec__94215);
var first__94217 = cljs.core.first(seq__94216);
var seq__94216__$1 = cljs.core.next(seq__94216);
var tag = first__94217;
var body = seq__94216__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__94732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__94738__i = 0, G__94738__a = new Array(arguments.length -  0);
while (G__94738__i < G__94738__a.length) {G__94738__a[G__94738__i] = arguments[G__94738__i + 0]; ++G__94738__i;}
  args = new cljs.core.IndexedSeq(G__94738__a,0,null);
} 
return G__94732__delegate.call(this,args);};
G__94732.cljs$lang$maxFixedArity = 0;
G__94732.cljs$lang$applyTo = (function (arglist__94739){
var args = cljs.core.seq(arglist__94739);
return G__94732__delegate(args);
});
G__94732.cljs$core$IFn$_invoke$arity$variadic = G__94732__delegate;
return G__94732;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__94223(s__94224){
return (new cljs.core.LazySeq(null,(function (){
var s__94224__$1 = s__94224;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94224__$1);
if(temp__5735__auto__){
var s__94224__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94224__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94224__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94226 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94225 = (0);
while(true){
if((i__94225 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__94225);
cljs.core.chunk_append(b__94226,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__94743 = (i__94225 + (1));
i__94225 = G__94743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94226),sablono$core$update_arglists_$_iter__94223(cljs.core.chunk_rest(s__94224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94226),null);
}
} else {
var args = cljs.core.first(s__94224__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__94223(cljs.core.rest(s__94224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94747 = arguments.length;
var i__4737__auto___94748 = (0);
while(true){
if((i__4737__auto___94748 < len__4736__auto___94747)){
args__4742__auto__.push((arguments[i__4737__auto___94748]));

var G__94749 = (i__4737__auto___94748 + (1));
i__4737__auto___94748 = G__94749;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__94244(s__94245){
return (new cljs.core.LazySeq(null,(function (){
var s__94245__$1 = s__94245;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94245__$1);
if(temp__5735__auto__){
var s__94245__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94245__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94245__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94247 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94246 = (0);
while(true){
if((i__94246 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__94246);
cljs.core.chunk_append(b__94247,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__94750 = (i__94246 + (1));
i__94246 = G__94750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94247),sablono$core$iter__94244(cljs.core.chunk_rest(s__94245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94247),null);
}
} else {
var style = cljs.core.first(s__94245__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__94244(cljs.core.rest(s__94245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq94238){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94238));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to94269 = (function sablono$core$link_to94269(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94774 = arguments.length;
var i__4737__auto___94775 = (0);
while(true){
if((i__4737__auto___94775 < len__4736__auto___94774)){
args__4742__auto__.push((arguments[i__4737__auto___94775]));

var G__94776 = (i__4737__auto___94775 + (1));
i__4737__auto___94775 = G__94776;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to94269.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to94269.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to94269.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to94269.cljs$lang$applyTo = (function (seq94273){
var G__94274 = cljs.core.first(seq94273);
var seq94273__$1 = cljs.core.next(seq94273);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94274,seq94273__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to94269);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to94282 = (function sablono$core$mail_to94282(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94797 = arguments.length;
var i__4737__auto___94798 = (0);
while(true){
if((i__4737__auto___94798 < len__4736__auto___94797)){
args__4742__auto__.push((arguments[i__4737__auto___94798]));

var G__94802 = (i__4737__auto___94798 + (1));
i__4737__auto___94798 = G__94802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to94282.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to94282.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__94298){
var vec__94299 = p__94298;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94299,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to94282.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to94282.cljs$lang$applyTo = (function (seq94286){
var G__94287 = cljs.core.first(seq94286);
var seq94286__$1 = cljs.core.next(seq94286);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94287,seq94286__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to94282);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list94307 = (function sablono$core$unordered_list94307(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list94307_$_iter__94314(s__94315){
return (new cljs.core.LazySeq(null,(function (){
var s__94315__$1 = s__94315;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94315__$1);
if(temp__5735__auto__){
var s__94315__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94315__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94315__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94317 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94316 = (0);
while(true){
if((i__94316 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__94316);
cljs.core.chunk_append(b__94317,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__94815 = (i__94316 + (1));
i__94316 = G__94815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94317),sablono$core$unordered_list94307_$_iter__94314(cljs.core.chunk_rest(s__94315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94317),null);
}
} else {
var x = cljs.core.first(s__94315__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list94307_$_iter__94314(cljs.core.rest(s__94315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list94307);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list94325 = (function sablono$core$ordered_list94325(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list94325_$_iter__94327(s__94328){
return (new cljs.core.LazySeq(null,(function (){
var s__94328__$1 = s__94328;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94328__$1);
if(temp__5735__auto__){
var s__94328__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94328__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94328__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94330 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94329 = (0);
while(true){
if((i__94329 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__94329);
cljs.core.chunk_append(b__94330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__94820 = (i__94329 + (1));
i__94329 = G__94820;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94330),sablono$core$ordered_list94325_$_iter__94327(cljs.core.chunk_rest(s__94328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94330),null);
}
} else {
var x = cljs.core.first(s__94328__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list94325_$_iter__94327(cljs.core.rest(s__94328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list94325);
/**
 * Create an image element.
 */
sablono.core.image94344 = (function sablono$core$image94344(var_args){
var G__94349 = arguments.length;
switch (G__94349) {
case 1:
return sablono.core.image94344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image94344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image94344.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image94344.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image94344.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image94344);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__94358_SHARP_,p2__94359_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__94358_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__94359_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__94365_SHARP_,p2__94366_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__94365_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__94366_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__94385 = arguments.length;
switch (G__94385) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field94404 = (function sablono$core$color_field94404(var_args){
var G__94408 = arguments.length;
switch (G__94408) {
case 1:
return sablono.core.color_field94404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field94404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field94404.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__83030__auto__);
}));

(sablono.core.color_field94404.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.color_field94404.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field94404);

/**
 * Creates a date input field.
 */
sablono.core.date_field94422 = (function sablono$core$date_field94422(var_args){
var G__94426 = arguments.length;
switch (G__94426) {
case 1:
return sablono.core.date_field94422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field94422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field94422.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__83030__auto__);
}));

(sablono.core.date_field94422.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.date_field94422.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field94422);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field94435 = (function sablono$core$datetime_field94435(var_args){
var G__94440 = arguments.length;
switch (G__94440) {
case 1:
return sablono.core.datetime_field94435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field94435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field94435.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__83030__auto__);
}));

(sablono.core.datetime_field94435.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.datetime_field94435.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field94435);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field94447 = (function sablono$core$datetime_local_field94447(var_args){
var G__94449 = arguments.length;
switch (G__94449) {
case 1:
return sablono.core.datetime_local_field94447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field94447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field94447.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__83030__auto__);
}));

(sablono.core.datetime_local_field94447.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.datetime_local_field94447.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field94447);

/**
 * Creates a email input field.
 */
sablono.core.email_field94461 = (function sablono$core$email_field94461(var_args){
var G__94466 = arguments.length;
switch (G__94466) {
case 1:
return sablono.core.email_field94461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field94461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field94461.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__83030__auto__);
}));

(sablono.core.email_field94461.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.email_field94461.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field94461);

/**
 * Creates a file input field.
 */
sablono.core.file_field94482 = (function sablono$core$file_field94482(var_args){
var G__94488 = arguments.length;
switch (G__94488) {
case 1:
return sablono.core.file_field94482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field94482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field94482.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__83030__auto__);
}));

(sablono.core.file_field94482.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.file_field94482.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field94482);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field94502 = (function sablono$core$hidden_field94502(var_args){
var G__94505 = arguments.length;
switch (G__94505) {
case 1:
return sablono.core.hidden_field94502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field94502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field94502.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__83030__auto__);
}));

(sablono.core.hidden_field94502.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.hidden_field94502.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field94502);

/**
 * Creates a month input field.
 */
sablono.core.month_field94523 = (function sablono$core$month_field94523(var_args){
var G__94526 = arguments.length;
switch (G__94526) {
case 1:
return sablono.core.month_field94523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field94523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field94523.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__83030__auto__);
}));

(sablono.core.month_field94523.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.month_field94523.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field94523);

/**
 * Creates a number input field.
 */
sablono.core.number_field94537 = (function sablono$core$number_field94537(var_args){
var G__94548 = arguments.length;
switch (G__94548) {
case 1:
return sablono.core.number_field94537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field94537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field94537.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__83030__auto__);
}));

(sablono.core.number_field94537.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.number_field94537.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field94537);

/**
 * Creates a password input field.
 */
sablono.core.password_field94557 = (function sablono$core$password_field94557(var_args){
var G__94560 = arguments.length;
switch (G__94560) {
case 1:
return sablono.core.password_field94557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field94557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field94557.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__83030__auto__);
}));

(sablono.core.password_field94557.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.password_field94557.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field94557);

/**
 * Creates a range input field.
 */
sablono.core.range_field94563 = (function sablono$core$range_field94563(var_args){
var G__94565 = arguments.length;
switch (G__94565) {
case 1:
return sablono.core.range_field94563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field94563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field94563.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__83030__auto__);
}));

(sablono.core.range_field94563.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.range_field94563.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field94563);

/**
 * Creates a search input field.
 */
sablono.core.search_field94576 = (function sablono$core$search_field94576(var_args){
var G__94582 = arguments.length;
switch (G__94582) {
case 1:
return sablono.core.search_field94576.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field94576.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field94576.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__83030__auto__);
}));

(sablono.core.search_field94576.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.search_field94576.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field94576);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field94587 = (function sablono$core$tel_field94587(var_args){
var G__94589 = arguments.length;
switch (G__94589) {
case 1:
return sablono.core.tel_field94587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field94587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field94587.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__83030__auto__);
}));

(sablono.core.tel_field94587.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.tel_field94587.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field94587);

/**
 * Creates a text input field.
 */
sablono.core.text_field94598 = (function sablono$core$text_field94598(var_args){
var G__94604 = arguments.length;
switch (G__94604) {
case 1:
return sablono.core.text_field94598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field94598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field94598.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__83030__auto__);
}));

(sablono.core.text_field94598.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.text_field94598.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field94598);

/**
 * Creates a time input field.
 */
sablono.core.time_field94608 = (function sablono$core$time_field94608(var_args){
var G__94614 = arguments.length;
switch (G__94614) {
case 1:
return sablono.core.time_field94608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field94608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field94608.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__83030__auto__);
}));

(sablono.core.time_field94608.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.time_field94608.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field94608);

/**
 * Creates a url input field.
 */
sablono.core.url_field94622 = (function sablono$core$url_field94622(var_args){
var G__94626 = arguments.length;
switch (G__94626) {
case 1:
return sablono.core.url_field94622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field94622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field94622.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__83030__auto__);
}));

(sablono.core.url_field94622.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.url_field94622.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field94622);

/**
 * Creates a week input field.
 */
sablono.core.week_field94630 = (function sablono$core$week_field94630(var_args){
var G__94632 = arguments.length;
switch (G__94632) {
case 1:
return sablono.core.week_field94630.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field94630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field94630.cljs$core$IFn$_invoke$arity$1 = (function (name__83030__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__83030__auto__);
}));

(sablono.core.week_field94630.cljs$core$IFn$_invoke$arity$2 = (function (name__83030__auto__,value__83031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__83030__auto__,value__83031__auto__);
}));

(sablono.core.week_field94630.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field94630);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box94637 = (function sablono$core$check_box94637(var_args){
var G__94641 = arguments.length;
switch (G__94641) {
case 1:
return sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box94637.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box94637.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box94637);
/**
 * Creates a radio button.
 */
sablono.core.radio_button94652 = (function sablono$core$radio_button94652(var_args){
var G__94657 = arguments.length;
switch (G__94657) {
case 1:
return sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button94652.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button94652.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button94652);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options94664 = (function sablono$core$select_options94664(coll){
var iter__4529__auto__ = (function sablono$core$select_options94664_$_iter__94665(s__94666){
return (new cljs.core.LazySeq(null,(function (){
var s__94666__$1 = s__94666;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__94666__$1);
if(temp__5735__auto__){
var s__94666__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94666__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__94666__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__94668 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__94667 = (0);
while(true){
if((i__94667 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__94667);
cljs.core.chunk_append(b__94668,((cljs.core.sequential_QMARK_(x))?(function (){var vec__94669 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94669,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94669,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94669,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options94664.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options94664.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options94664.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__94967 = (i__94667 + (1));
i__94667 = G__94967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94668),sablono$core$select_options94664_$_iter__94665(cljs.core.chunk_rest(s__94666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94668),null);
}
} else {
var x = cljs.core.first(s__94666__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__94675 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94675,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94675,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94675,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options94664.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options94664.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options94664.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options94664_$_iter__94665(cljs.core.rest(s__94666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options94664);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down94680 = (function sablono$core$drop_down94680(var_args){
var G__94682 = arguments.length;
switch (G__94682) {
case 2:
return sablono.core.drop_down94680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down94680.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down94680.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down94680.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down94680.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down94680.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down94680);
/**
 * Creates a text area element.
 */
sablono.core.text_area94685 = (function sablono$core$text_area94685(var_args){
var G__94690 = arguments.length;
switch (G__94690) {
case 1:
return sablono.core.text_area94685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area94685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area94685.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area94685.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area94685.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area94685);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label94693 = (function sablono$core$label94693(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label94693);
/**
 * Creates a submit button.
 */
sablono.core.submit_button94694 = (function sablono$core$submit_button94694(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button94694);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button94695 = (function sablono$core$reset_button94695(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button94695);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to94699 = (function sablono$core$form_to94699(var_args){
var args__4742__auto__ = [];
var len__4736__auto___94992 = arguments.length;
var i__4737__auto___94993 = (0);
while(true){
if((i__4737__auto___94993 < len__4736__auto___94992)){
args__4742__auto__.push((arguments[i__4737__auto___94993]));

var G__94995 = (i__4737__auto___94993 + (1));
i__4737__auto___94993 = G__94995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to94699.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to94699.cljs$core$IFn$_invoke$arity$variadic = (function (p__94702,body){
var vec__94703 = p__94702;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94703,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94703,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to94699.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to94699.cljs$lang$applyTo = (function (seq94700){
var G__94701 = cljs.core.first(seq94700);
var seq94700__$1 = cljs.core.next(seq94700);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94701,seq94700__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to94699);

//# sourceMappingURL=sablono.core.js.map
