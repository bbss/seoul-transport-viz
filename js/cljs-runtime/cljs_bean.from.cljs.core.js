goog.provide('cljs_bean.from.cljs.core');
cljs_bean.from.cljs.core._indexOf = (function cljs_bean$from$cljs$core$_indexOf(var_args){
var G__75153 = arguments.length;
switch (G__75153) {
case 2:
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3(coll,x,(0));
}));

(cljs_bean.from.cljs.core._indexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count(coll);
if((start >= len)){
return (-1);
} else {
var idx = (((start > (0)))?start:(((start < (0)))?(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (start + len);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():start
));
while(true){
if((idx < len)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,idx),x)){
return idx;
} else {
var G__75430 = (idx + (1));
idx = G__75430;
continue;
}
} else {
return (-1);
}
break;
}
}
}));

(cljs_bean.from.cljs.core._indexOf.cljs$lang$maxFixedArity = 3);

cljs_bean.from.cljs.core._lastIndexOf = (function cljs_bean$from$cljs$core$_lastIndexOf(var_args){
var G__75179 = arguments.length;
switch (G__75179) {
case 2:
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
return cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3(coll,x,cljs.core.count(coll));
}));

(cljs_bean.from.cljs.core._lastIndexOf.cljs$core$IFn$_invoke$arity$3 = (function (coll,x,start){
var len = cljs.core.count(coll);
if((len === (0))){
return (-1);
} else {
var idx = (((start > (0)))?(function (){var x__4217__auto__ = (len - (1));
var y__4218__auto__ = start;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():(((start < (0)))?(len + start):start
));
while(true){
if((idx >= (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,idx),x)){
return idx;
} else {
var G__75442 = (idx - (1));
idx = G__75442;
continue;
}
} else {
return (-1);
}
break;
}
}
}));

(cljs_bean.from.cljs.core._lastIndexOf.cljs$lang$maxFixedArity = 3);

/**
 * Compare indexed collection.
 */
cljs_bean.from.cljs.core.compare_indexed = (function cljs_bean$from$cljs$core$compare_indexed(var_args){
var G__75193 = arguments.length;
switch (G__75193) {
case 2:
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2 = (function (xs,ys){
var xl = cljs.core.count(xs);
var yl = cljs.core.count(ys);
if((xl < yl)){
return (-1);
} else {
if((xl > yl)){
return (1);
} else {
if((xl === (0))){
return (0);
} else {
return cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4(xs,ys,xl,(0));

}
}
}
}));

(cljs_bean.from.cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ys,n));
if((((d === (0))) && (((n + (1)) < len)))){
var G__75449 = xs;
var G__75450 = ys;
var G__75451 = len;
var G__75452 = (n + (1));
xs = G__75449;
ys = G__75450;
len = G__75451;
n = G__75452;
continue;
} else {
return d;
}
break;
}
}));

(cljs_bean.from.cljs.core.compare_indexed.cljs$lang$maxFixedArity = 4);

/**
 * Assumes x is sequential. Returns true if x equals y, otherwise
 *   returns false.
 */
cljs_bean.from.cljs.core.equiv_sequential = (function cljs_bean$from$cljs$core$equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?((((cljs.core.counted_QMARK_(x)) && (cljs.core.counted_QMARK_(y)) && ((!((cljs.core.count(x) === cljs.core.count(y)))))))?false:(function (){var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if((ys == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__75457 = cljs.core.next(xs);
var G__75458 = cljs.core.next(ys);
xs = G__75457;
ys = G__75458;
continue;
} else {
return false;

}
}
}
break;
}
})()):null));
});
/**
 * Accepts any collection which satisfies the ICount and IIndexed protocols and
 * reduces them without incurring seq initialization
 */
cljs_bean.from.cljs.core.ci_reduce = (function cljs_bean$from$cljs$core$ci_reduce(var_args){
var G__75203 = arguments.length;
switch (G__75203) {
case 2:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2 = (function (cicoll,f){
var cnt = cicoll.cljs$core$ICounted$_count$arity$1(null);
if((cnt === (0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var val = cicoll.cljs$core$IIndexed$_nth$arity$2(null,(0));
var n = (1);
while(true){
if((n < cnt)){
var nval = (function (){var G__75237 = val;
var G__75238 = cicoll.cljs$core$IIndexed$_nth$arity$2(null,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75237,G__75238) : f.call(null,G__75237,G__75238));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__75464 = nval;
var G__75465 = (n + (1));
val = G__75464;
n = G__75465;
continue;
}
} else {
return val;
}
break;
}
}
}));

(cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3 = (function (cicoll,f,val){
var cnt = cicoll.cljs$core$ICounted$_count$arity$1(null);
var val__$1 = val;
var n = (0);
while(true){
if((n < cnt)){
var nval = (function (){var G__75256 = val__$1;
var G__75257 = cicoll.cljs$core$IIndexed$_nth$arity$2(null,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75256,G__75257) : f.call(null,G__75256,G__75257));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__75470 = nval;
var G__75471 = (n + (1));
val__$1 = G__75470;
n = G__75471;
continue;
}
} else {
return val__$1;
}
break;
}
}));

(cljs_bean.from.cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$4 = (function (cicoll,f,val,idx){
var cnt = cicoll.cljs$core$ICounted$_count$arity$1(null);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt)){
var nval = (function (){var G__75272 = val__$1;
var G__75273 = cicoll.cljs$core$IIndexed$_nth$arity$2(null,n);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__75272,G__75273) : f.call(null,G__75272,G__75273));
})();
if(cljs.core.reduced_QMARK_(nval)){
return cljs.core.deref(nval);
} else {
var G__75474 = nval;
var G__75475 = (n + (1));
val__$1 = G__75474;
n = G__75475;
continue;
}
} else {
return val__$1;
}
break;
}
}));

(cljs_bean.from.cljs.core.ci_reduce.cljs$lang$maxFixedArity = 4);

cljs_bean.from.cljs.core.TransientArrayMap_conj_BANG_ = (function cljs_bean$from$cljs$core$TransientArrayMap_conj_BANG_(tcoll,o,editable_QMARK_){
if(cljs.core.truth_(editable_QMARK_)){
if(cljs.core.map_entry_QMARK_(o)){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,cljs.core.key(o),cljs.core.val(o));
} else {
if(cljs.core.vector_QMARK_(o)){
return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1((0)) : o.call(null,(0))),(o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1((1)) : o.call(null,(1))));
} else {
var es = cljs.core.seq(o);
var tcoll__$1 = tcoll;
while(true){
var temp__5733__auto__ = cljs.core.first(es);
if(cljs.core.truth_(temp__5733__auto__)){
var e = temp__5733__auto__;
var G__75484 = cljs.core.next(es);
var G__75485 = cljs.core._assoc_BANG_(tcoll__$1,cljs.core.key(e),cljs.core.val(e));
es = G__75484;
tcoll__$1 = G__75485;
continue;
} else {
return tcoll__$1;
}
break;
}

}
}
} else {
throw (new Error("conj! after persistent!"));
}
});
cljs_bean.from.cljs.core.PersistentArrayMap_conj = (function cljs_bean$from$cljs$core$PersistentArrayMap_conj(coll,entry){
if(cljs.core.vector_QMARK_(entry)){
return coll.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
var ret = coll;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__75487 = cljs.core._assoc(ret,cljs.core._nth(e,(0)),cljs.core._nth(e,(1)));
var G__75488 = cljs.core.next(es);
ret = G__75487;
es = G__75488;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});
cljs_bean.from.cljs.core.TransientVector_assoc_BANG_ = (function cljs_bean$from$cljs$core$TransientVector_assoc_BANG_(tcoll,key,val,type_name){
if(typeof key === 'number'){
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null,key,val);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_name),"'s key for assoc! must be a number."].join('')));
}
});
cljs_bean.from.cljs.core.PersistentVector_equiv = (function cljs_bean$from$cljs$core$PersistentVector_equiv(coll,other,type,cnt){
if((other instanceof type)){
if((cnt === cljs.core.count(other))){
var me_iter = coll.cljs$core$IIterable$_iterator$arity$1(null);
var you_iter = cljs.core._iterator(other);
while(true){
if(me_iter.hasNext()){
var x = me_iter.next();
var y = you_iter.next();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return cljs_bean.from.cljs.core.equiv_sequential(coll,other);
}
});
cljs_bean.from.cljs.core.PersistentVector_lookup = (function cljs_bean$from$cljs$core$PersistentVector_lookup(coll,k,not_found){
if(typeof k === 'number'){
return coll.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
} else {
return not_found;
}
});
cljs_bean.from.cljs.core.PersistentVector_assoc = (function cljs_bean$from$cljs$core$PersistentVector_assoc(coll,k,v){
if(typeof k === 'number'){
return coll.cljs$core$IVector$_assoc_n$arity$3(null,k,v);
} else {
throw (new Error("Vector's key for assoc must be a number."));
}
});
cljs_bean.from.cljs.core.PersistentVector_contains_key_QMARK_ = (function cljs_bean$from$cljs$core$PersistentVector_contains_key_QMARK_(coll,k,cnt){
if(cljs.core.integer_QMARK_(k)){
return ((((0) <= k)) && ((k < cnt)));
} else {
return false;
}
});

//# sourceMappingURL=cljs_bean.from.cljs.core.js.map
