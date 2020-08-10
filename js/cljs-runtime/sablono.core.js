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
var G__71088__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__70620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__70621 = cljs.core.seq(vec__70620);
var first__70622 = cljs.core.first(seq__70621);
var seq__70621__$1 = cljs.core.next(seq__70621);
var tag = first__70622;
var body = seq__70621__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__71088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71096__i = 0, G__71096__a = new Array(arguments.length -  0);
while (G__71096__i < G__71096__a.length) {G__71096__a[G__71096__i] = arguments[G__71096__i + 0]; ++G__71096__i;}
  args = new cljs.core.IndexedSeq(G__71096__a,0,null);
} 
return G__71088__delegate.call(this,args);};
G__71088.cljs$lang$maxFixedArity = 0;
G__71088.cljs$lang$applyTo = (function (arglist__71097){
var args = cljs.core.seq(arglist__71097);
return G__71088__delegate(args);
});
G__71088.cljs$core$IFn$_invoke$arity$variadic = G__71088__delegate;
return G__71088;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__70634(s__70635){
return (new cljs.core.LazySeq(null,(function (){
var s__70635__$1 = s__70635;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70635__$1);
if(temp__5735__auto__){
var s__70635__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70635__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70635__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70637 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70636 = (0);
while(true){
if((i__70636 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__70636);
cljs.core.chunk_append(b__70637,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__71098 = (i__70636 + (1));
i__70636 = G__71098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70637),sablono$core$update_arglists_$_iter__70634(cljs.core.chunk_rest(s__70635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70637),null);
}
} else {
var args = cljs.core.first(s__70635__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__70634(cljs.core.rest(s__70635__$2)));
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
var len__4736__auto___71106 = arguments.length;
var i__4737__auto___71107 = (0);
while(true){
if((i__4737__auto___71107 < len__4736__auto___71106)){
args__4742__auto__.push((arguments[i__4737__auto___71107]));

var G__71108 = (i__4737__auto___71107 + (1));
i__4737__auto___71107 = G__71108;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__70644(s__70645){
return (new cljs.core.LazySeq(null,(function (){
var s__70645__$1 = s__70645;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70645__$1);
if(temp__5735__auto__){
var s__70645__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70645__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70645__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70647 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70646 = (0);
while(true){
if((i__70646 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__70646);
cljs.core.chunk_append(b__70647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__71117 = (i__70646 + (1));
i__70646 = G__71117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70647),sablono$core$iter__70644(cljs.core.chunk_rest(s__70645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70647),null);
}
} else {
var style = cljs.core.first(s__70645__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__70644(cljs.core.rest(s__70645__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq70641){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70641));
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
sablono.core.link_to70662 = (function sablono$core$link_to70662(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71127 = arguments.length;
var i__4737__auto___71128 = (0);
while(true){
if((i__4737__auto___71128 < len__4736__auto___71127)){
args__4742__auto__.push((arguments[i__4737__auto___71128]));

var G__71129 = (i__4737__auto___71128 + (1));
i__4737__auto___71128 = G__71129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to70662.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to70662.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to70662.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to70662.cljs$lang$applyTo = (function (seq70666){
var G__70667 = cljs.core.first(seq70666);
var seq70666__$1 = cljs.core.next(seq70666);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70667,seq70666__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to70662);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to70669 = (function sablono$core$mail_to70669(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71134 = arguments.length;
var i__4737__auto___71135 = (0);
while(true){
if((i__4737__auto___71135 < len__4736__auto___71134)){
args__4742__auto__.push((arguments[i__4737__auto___71135]));

var G__71136 = (i__4737__auto___71135 + (1));
i__4737__auto___71135 = G__71136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to70669.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to70669.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__70672){
var vec__70673 = p__70672;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70673,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to70669.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to70669.cljs$lang$applyTo = (function (seq70670){
var G__70671 = cljs.core.first(seq70670);
var seq70670__$1 = cljs.core.next(seq70670);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70671,seq70670__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to70669);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list70676 = (function sablono$core$unordered_list70676(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list70676_$_iter__70678(s__70679){
return (new cljs.core.LazySeq(null,(function (){
var s__70679__$1 = s__70679;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70679__$1);
if(temp__5735__auto__){
var s__70679__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70679__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70679__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70681 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70680 = (0);
while(true){
if((i__70680 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__70680);
cljs.core.chunk_append(b__70681,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71147 = (i__70680 + (1));
i__70680 = G__71147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70681),sablono$core$unordered_list70676_$_iter__70678(cljs.core.chunk_rest(s__70679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70681),null);
}
} else {
var x = cljs.core.first(s__70679__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list70676_$_iter__70678(cljs.core.rest(s__70679__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list70676);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list70686 = (function sablono$core$ordered_list70686(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list70686_$_iter__70687(s__70688){
return (new cljs.core.LazySeq(null,(function (){
var s__70688__$1 = s__70688;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70688__$1);
if(temp__5735__auto__){
var s__70688__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70688__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70688__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70690 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70689 = (0);
while(true){
if((i__70689 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__70689);
cljs.core.chunk_append(b__70690,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71164 = (i__70689 + (1));
i__70689 = G__71164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70690),sablono$core$ordered_list70686_$_iter__70687(cljs.core.chunk_rest(s__70688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70690),null);
}
} else {
var x = cljs.core.first(s__70688__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list70686_$_iter__70687(cljs.core.rest(s__70688__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list70686);
/**
 * Create an image element.
 */
sablono.core.image70692 = (function sablono$core$image70692(var_args){
var G__70696 = arguments.length;
switch (G__70696) {
case 1:
return sablono.core.image70692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image70692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image70692.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image70692.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image70692.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image70692);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__70702_SHARP_,p2__70705_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70702_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__70705_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__70706_SHARP_,p2__70707_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70706_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__70707_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__70717 = arguments.length;
switch (G__70717) {
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
sablono.core.color_field70725 = (function sablono$core$color_field70725(var_args){
var G__70727 = arguments.length;
switch (G__70727) {
case 1:
return sablono.core.color_field70725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field70725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field70725.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__70606__auto__);
}));

(sablono.core.color_field70725.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.color_field70725.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field70725);

/**
 * Creates a date input field.
 */
sablono.core.date_field70728 = (function sablono$core$date_field70728(var_args){
var G__70733 = arguments.length;
switch (G__70733) {
case 1:
return sablono.core.date_field70728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field70728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field70728.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__70606__auto__);
}));

(sablono.core.date_field70728.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.date_field70728.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field70728);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field70739 = (function sablono$core$datetime_field70739(var_args){
var G__70744 = arguments.length;
switch (G__70744) {
case 1:
return sablono.core.datetime_field70739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field70739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field70739.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__70606__auto__);
}));

(sablono.core.datetime_field70739.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.datetime_field70739.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field70739);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field70746 = (function sablono$core$datetime_local_field70746(var_args){
var G__70748 = arguments.length;
switch (G__70748) {
case 1:
return sablono.core.datetime_local_field70746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field70746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field70746.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__70606__auto__);
}));

(sablono.core.datetime_local_field70746.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.datetime_local_field70746.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field70746);

/**
 * Creates a email input field.
 */
sablono.core.email_field70751 = (function sablono$core$email_field70751(var_args){
var G__70753 = arguments.length;
switch (G__70753) {
case 1:
return sablono.core.email_field70751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field70751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field70751.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__70606__auto__);
}));

(sablono.core.email_field70751.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.email_field70751.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field70751);

/**
 * Creates a file input field.
 */
sablono.core.file_field70758 = (function sablono$core$file_field70758(var_args){
var G__70760 = arguments.length;
switch (G__70760) {
case 1:
return sablono.core.file_field70758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field70758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field70758.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__70606__auto__);
}));

(sablono.core.file_field70758.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.file_field70758.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field70758);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field70764 = (function sablono$core$hidden_field70764(var_args){
var G__70766 = arguments.length;
switch (G__70766) {
case 1:
return sablono.core.hidden_field70764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field70764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field70764.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__70606__auto__);
}));

(sablono.core.hidden_field70764.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.hidden_field70764.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field70764);

/**
 * Creates a month input field.
 */
sablono.core.month_field70767 = (function sablono$core$month_field70767(var_args){
var G__70769 = arguments.length;
switch (G__70769) {
case 1:
return sablono.core.month_field70767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field70767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field70767.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__70606__auto__);
}));

(sablono.core.month_field70767.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.month_field70767.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field70767);

/**
 * Creates a number input field.
 */
sablono.core.number_field70773 = (function sablono$core$number_field70773(var_args){
var G__70786 = arguments.length;
switch (G__70786) {
case 1:
return sablono.core.number_field70773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field70773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field70773.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__70606__auto__);
}));

(sablono.core.number_field70773.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.number_field70773.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field70773);

/**
 * Creates a password input field.
 */
sablono.core.password_field70800 = (function sablono$core$password_field70800(var_args){
var G__70806 = arguments.length;
switch (G__70806) {
case 1:
return sablono.core.password_field70800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field70800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field70800.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__70606__auto__);
}));

(sablono.core.password_field70800.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.password_field70800.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field70800);

/**
 * Creates a range input field.
 */
sablono.core.range_field70814 = (function sablono$core$range_field70814(var_args){
var G__70818 = arguments.length;
switch (G__70818) {
case 1:
return sablono.core.range_field70814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field70814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field70814.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__70606__auto__);
}));

(sablono.core.range_field70814.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.range_field70814.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field70814);

/**
 * Creates a search input field.
 */
sablono.core.search_field70839 = (function sablono$core$search_field70839(var_args){
var G__70845 = arguments.length;
switch (G__70845) {
case 1:
return sablono.core.search_field70839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field70839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field70839.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__70606__auto__);
}));

(sablono.core.search_field70839.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.search_field70839.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field70839);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field70855 = (function sablono$core$tel_field70855(var_args){
var G__70874 = arguments.length;
switch (G__70874) {
case 1:
return sablono.core.tel_field70855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field70855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field70855.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__70606__auto__);
}));

(sablono.core.tel_field70855.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.tel_field70855.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field70855);

/**
 * Creates a text input field.
 */
sablono.core.text_field70883 = (function sablono$core$text_field70883(var_args){
var G__70891 = arguments.length;
switch (G__70891) {
case 1:
return sablono.core.text_field70883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field70883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field70883.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__70606__auto__);
}));

(sablono.core.text_field70883.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.text_field70883.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field70883);

/**
 * Creates a time input field.
 */
sablono.core.time_field70900 = (function sablono$core$time_field70900(var_args){
var G__70908 = arguments.length;
switch (G__70908) {
case 1:
return sablono.core.time_field70900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field70900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field70900.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__70606__auto__);
}));

(sablono.core.time_field70900.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.time_field70900.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field70900);

/**
 * Creates a url input field.
 */
sablono.core.url_field70910 = (function sablono$core$url_field70910(var_args){
var G__70920 = arguments.length;
switch (G__70920) {
case 1:
return sablono.core.url_field70910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field70910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field70910.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__70606__auto__);
}));

(sablono.core.url_field70910.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.url_field70910.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field70910);

/**
 * Creates a week input field.
 */
sablono.core.week_field70936 = (function sablono$core$week_field70936(var_args){
var G__70941 = arguments.length;
switch (G__70941) {
case 1:
return sablono.core.week_field70936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field70936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field70936.cljs$core$IFn$_invoke$arity$1 = (function (name__70606__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__70606__auto__);
}));

(sablono.core.week_field70936.cljs$core$IFn$_invoke$arity$2 = (function (name__70606__auto__,value__70607__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__70606__auto__,value__70607__auto__);
}));

(sablono.core.week_field70936.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field70936);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box70947 = (function sablono$core$check_box70947(var_args){
var G__70952 = arguments.length;
switch (G__70952) {
case 1:
return sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box70947.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box70947.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box70947);
/**
 * Creates a radio button.
 */
sablono.core.radio_button70959 = (function sablono$core$radio_button70959(var_args){
var G__70964 = arguments.length;
switch (G__70964) {
case 1:
return sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button70959.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button70959.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button70959);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options70971 = (function sablono$core$select_options70971(coll){
var iter__4529__auto__ = (function sablono$core$select_options70971_$_iter__70976(s__70977){
return (new cljs.core.LazySeq(null,(function (){
var s__70977__$1 = s__70977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__70977__$1);
if(temp__5735__auto__){
var s__70977__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70977__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__70977__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__70979 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__70978 = (0);
while(true){
if((i__70978 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__70978);
cljs.core.chunk_append(b__70979,((cljs.core.sequential_QMARK_(x))?(function (){var vec__70991 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70991,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70991,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70991,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options70971.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options70971.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options70971.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__71402 = (i__70978 + (1));
i__70978 = G__71402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70979),sablono$core$select_options70971_$_iter__70976(cljs.core.chunk_rest(s__70977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70979),null);
}
} else {
var x = cljs.core.first(s__70977__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__71015 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71015,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options70971.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options70971.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options70971.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options70971_$_iter__70976(cljs.core.rest(s__70977__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options70971);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down71028 = (function sablono$core$drop_down71028(var_args){
var G__71034 = arguments.length;
switch (G__71034) {
case 2:
return sablono.core.drop_down71028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down71028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down71028.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down71028.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down71028.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down71028.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down71028);
/**
 * Creates a text area element.
 */
sablono.core.text_area71037 = (function sablono$core$text_area71037(var_args){
var G__71039 = arguments.length;
switch (G__71039) {
case 1:
return sablono.core.text_area71037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area71037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area71037.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area71037.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area71037.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area71037);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label71046 = (function sablono$core$label71046(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label71046);
/**
 * Creates a submit button.
 */
sablono.core.submit_button71055 = (function sablono$core$submit_button71055(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button71055);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button71057 = (function sablono$core$reset_button71057(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button71057);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to71062 = (function sablono$core$form_to71062(var_args){
var args__4742__auto__ = [];
var len__4736__auto___71420 = arguments.length;
var i__4737__auto___71421 = (0);
while(true){
if((i__4737__auto___71421 < len__4736__auto___71420)){
args__4742__auto__.push((arguments[i__4737__auto___71421]));

var G__71422 = (i__4737__auto___71421 + (1));
i__4737__auto___71421 = G__71422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to71062.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to71062.cljs$core$IFn$_invoke$arity$variadic = (function (p__71074,body){
var vec__71075 = p__71074;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71075,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71075,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to71062.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to71062.cljs$lang$applyTo = (function (seq71066){
var G__71067 = cljs.core.first(seq71066);
var seq71066__$1 = cljs.core.next(seq71066);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71067,seq71066__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to71062);

//# sourceMappingURL=sablono.core.js.map
