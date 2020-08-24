goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__95913 = arguments.length;
switch (G__95913) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async95917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async95917 = (function (f,blockable,meta95918){
this.f = f;
this.blockable = blockable;
this.meta95918 = meta95918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_95919,meta95918__$1){
var self__ = this;
var _95919__$1 = this;
return (new cljs.core.async.t_cljs$core$async95917(self__.f,self__.blockable,meta95918__$1));
}));

(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_95919){
var self__ = this;
var _95919__$1 = this;
return self__.meta95918;
}));

(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async95917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async95917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta95918","meta95918",-1692678285,null)], null);
}));

(cljs.core.async.t_cljs$core$async95917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async95917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async95917");

(cljs.core.async.t_cljs$core$async95917.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async95917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async95917.
 */
cljs.core.async.__GT_t_cljs$core$async95917 = (function cljs$core$async$__GT_t_cljs$core$async95917(f__$1,blockable__$1,meta95918){
return (new cljs.core.async.t_cljs$core$async95917(f__$1,blockable__$1,meta95918));
});

}

return (new cljs.core.async.t_cljs$core$async95917(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__95934 = arguments.length;
switch (G__95934) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__95957 = arguments.length;
switch (G__95957) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__95963 = arguments.length;
switch (G__95963) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_99629 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_99629) : fn1.call(null,val_99629));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_99629) : fn1.call(null,val_99629));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__95990 = arguments.length;
switch (G__95990) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___99660 = n;
var x_99665 = (0);
while(true){
if((x_99665 < n__4613__auto___99660)){
(a[x_99665] = x_99665);

var G__99666 = (x_99665 + (1));
x_99665 = G__99666;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async96022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async96022 = (function (flag,meta96023){
this.flag = flag;
this.meta96023 = meta96023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96024,meta96023__$1){
var self__ = this;
var _96024__$1 = this;
return (new cljs.core.async.t_cljs$core$async96022(self__.flag,meta96023__$1));
}));

(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96024){
var self__ = this;
var _96024__$1 = this;
return self__.meta96023;
}));

(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async96022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async96022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta96023","meta96023",1342311956,null)], null);
}));

(cljs.core.async.t_cljs$core$async96022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async96022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async96022");

(cljs.core.async.t_cljs$core$async96022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async96022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async96022.
 */
cljs.core.async.__GT_t_cljs$core$async96022 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async96022(flag__$1,meta96023){
return (new cljs.core.async.t_cljs$core$async96022(flag__$1,meta96023));
});

}

return (new cljs.core.async.t_cljs$core$async96022(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async96049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async96049 = (function (flag,cb,meta96050){
this.flag = flag;
this.cb = cb;
this.meta96050 = meta96050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96051,meta96050__$1){
var self__ = this;
var _96051__$1 = this;
return (new cljs.core.async.t_cljs$core$async96049(self__.flag,self__.cb,meta96050__$1));
}));

(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96051){
var self__ = this;
var _96051__$1 = this;
return self__.meta96050;
}));

(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async96049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async96049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta96050","meta96050",-2036012381,null)], null);
}));

(cljs.core.async.t_cljs$core$async96049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async96049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async96049");

(cljs.core.async.t_cljs$core$async96049.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async96049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async96049.
 */
cljs.core.async.__GT_t_cljs$core$async96049 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async96049(flag__$1,cb__$1,meta96050){
return (new cljs.core.async.t_cljs$core$async96049(flag__$1,cb__$1,meta96050));
});

}

return (new cljs.core.async.t_cljs$core$async96049(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__96066_SHARP_){
var G__96078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__96066_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__96078) : fret.call(null,G__96078));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__96067_SHARP_){
var G__96086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__96067_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__96086) : fret.call(null,G__96086));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__99694 = (i + (1));
i = G__99694;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___99697 = arguments.length;
var i__4737__auto___99698 = (0);
while(true){
if((i__4737__auto___99698 < len__4736__auto___99697)){
args__4742__auto__.push((arguments[i__4737__auto___99698]));

var G__99700 = (i__4737__auto___99698 + (1));
i__4737__auto___99698 = G__99700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__96108){
var map__96109 = p__96108;
var map__96109__$1 = (((((!((map__96109 == null))))?(((((map__96109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__96109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__96109):map__96109);
var opts = map__96109__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq96093){
var G__96094 = cljs.core.first(seq96093);
var seq96093__$1 = cljs.core.next(seq96093);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96094,seq96093__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__96132 = arguments.length;
switch (G__96132) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__83165__auto___99716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96212){
var state_val_96213 = (state_96212[(1)]);
if((state_val_96213 === (7))){
var inst_96199 = (state_96212[(2)]);
var state_96212__$1 = state_96212;
var statearr_96227_99717 = state_96212__$1;
(statearr_96227_99717[(2)] = inst_96199);

(statearr_96227_99717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (1))){
var state_96212__$1 = state_96212;
var statearr_96231_99719 = state_96212__$1;
(statearr_96231_99719[(2)] = null);

(statearr_96231_99719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (4))){
var inst_96169 = (state_96212[(7)]);
var inst_96169__$1 = (state_96212[(2)]);
var inst_96178 = (inst_96169__$1 == null);
var state_96212__$1 = (function (){var statearr_96233 = state_96212;
(statearr_96233[(7)] = inst_96169__$1);

return statearr_96233;
})();
if(cljs.core.truth_(inst_96178)){
var statearr_96238_99720 = state_96212__$1;
(statearr_96238_99720[(1)] = (5));

} else {
var statearr_96239_99721 = state_96212__$1;
(statearr_96239_99721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (13))){
var state_96212__$1 = state_96212;
var statearr_96240_99722 = state_96212__$1;
(statearr_96240_99722[(2)] = null);

(statearr_96240_99722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (6))){
var inst_96169 = (state_96212[(7)]);
var state_96212__$1 = state_96212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96212__$1,(11),to,inst_96169);
} else {
if((state_val_96213 === (3))){
var inst_96204 = (state_96212[(2)]);
var state_96212__$1 = state_96212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96212__$1,inst_96204);
} else {
if((state_val_96213 === (12))){
var state_96212__$1 = state_96212;
var statearr_96245_99726 = state_96212__$1;
(statearr_96245_99726[(2)] = null);

(statearr_96245_99726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (2))){
var state_96212__$1 = state_96212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96212__$1,(4),from);
} else {
if((state_val_96213 === (11))){
var inst_96192 = (state_96212[(2)]);
var state_96212__$1 = state_96212;
if(cljs.core.truth_(inst_96192)){
var statearr_96254_99727 = state_96212__$1;
(statearr_96254_99727[(1)] = (12));

} else {
var statearr_96259_99728 = state_96212__$1;
(statearr_96259_99728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (9))){
var state_96212__$1 = state_96212;
var statearr_96260_99730 = state_96212__$1;
(statearr_96260_99730[(2)] = null);

(statearr_96260_99730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (5))){
var state_96212__$1 = state_96212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_96265_99731 = state_96212__$1;
(statearr_96265_99731[(1)] = (8));

} else {
var statearr_96266_99732 = state_96212__$1;
(statearr_96266_99732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (14))){
var inst_96197 = (state_96212[(2)]);
var state_96212__$1 = state_96212;
var statearr_96267_99733 = state_96212__$1;
(statearr_96267_99733[(2)] = inst_96197);

(statearr_96267_99733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (10))){
var inst_96189 = (state_96212[(2)]);
var state_96212__$1 = state_96212;
var statearr_96268_99734 = state_96212__$1;
(statearr_96268_99734[(2)] = inst_96189);

(statearr_96268_99734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96213 === (8))){
var inst_96181 = cljs.core.async.close_BANG_(to);
var state_96212__$1 = state_96212;
var statearr_96269_99738 = state_96212__$1;
(statearr_96269_99738[(2)] = inst_96181);

(statearr_96269_99738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_96270 = [null,null,null,null,null,null,null,null];
(statearr_96270[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_96270[(1)] = (1));

return statearr_96270;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_96212){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96212);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96274){var ex__81417__auto__ = e96274;
var statearr_96276_99742 = state_96212;
(statearr_96276_99742[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96212[(4)]))){
var statearr_96277_99743 = state_96212;
(statearr_96277_99743[(1)] = cljs.core.first((state_96212[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99745 = state_96212;
state_96212 = G__99745;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_96212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_96212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96278 = f__83166__auto__();
(statearr_96278[(6)] = c__83165__auto___99716);

return statearr_96278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__96281){
var vec__96282 = p__96281;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96282,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96282,(1),null);
var job = vec__96282;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__83165__auto___99748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96292){
var state_val_96293 = (state_96292[(1)]);
if((state_val_96293 === (1))){
var state_96292__$1 = state_96292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96292__$1,(2),res,v);
} else {
if((state_val_96293 === (2))){
var inst_96289 = (state_96292[(2)]);
var inst_96290 = cljs.core.async.close_BANG_(res);
var state_96292__$1 = (function (){var statearr_96300 = state_96292;
(statearr_96300[(7)] = inst_96289);

return statearr_96300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_96292__$1,inst_96290);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_96301 = [null,null,null,null,null,null,null,null];
(statearr_96301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__);

(statearr_96301[(1)] = (1));

return statearr_96301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1 = (function (state_96292){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96292);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96302){var ex__81417__auto__ = e96302;
var statearr_96303_99754 = state_96292;
(statearr_96303_99754[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96292[(4)]))){
var statearr_96304_99755 = state_96292;
(statearr_96304_99755[(1)] = cljs.core.first((state_96292[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99761 = state_96292;
state_96292 = G__99761;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = function(state_96292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1.call(this,state_96292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96305 = f__83166__auto__();
(statearr_96305[(6)] = c__83165__auto___99748);

return statearr_96305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__96307){
var vec__96308 = p__96307;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96308,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96308,(1),null);
var job = vec__96308;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___99767 = n;
var __99768 = (0);
while(true){
if((__99768 < n__4613__auto___99767)){
var G__96315_99769 = type;
var G__96315_99770__$1 = (((G__96315_99769 instanceof cljs.core.Keyword))?G__96315_99769.fqn:null);
switch (G__96315_99770__$1) {
case "compute":
var c__83165__auto___99772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__99768,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = ((function (__99768,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function (state_96330){
var state_val_96331 = (state_96330[(1)]);
if((state_val_96331 === (1))){
var state_96330__$1 = state_96330;
var statearr_96333_99773 = state_96330__$1;
(statearr_96333_99773[(2)] = null);

(statearr_96333_99773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96331 === (2))){
var state_96330__$1 = state_96330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96330__$1,(4),jobs);
} else {
if((state_val_96331 === (3))){
var inst_96328 = (state_96330[(2)]);
var state_96330__$1 = state_96330;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96330__$1,inst_96328);
} else {
if((state_val_96331 === (4))){
var inst_96319 = (state_96330[(2)]);
var inst_96321 = process(inst_96319);
var state_96330__$1 = state_96330;
if(cljs.core.truth_(inst_96321)){
var statearr_96334_99775 = state_96330__$1;
(statearr_96334_99775[(1)] = (5));

} else {
var statearr_96335_99776 = state_96330__$1;
(statearr_96335_99776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96331 === (5))){
var state_96330__$1 = state_96330;
var statearr_96337_99777 = state_96330__$1;
(statearr_96337_99777[(2)] = null);

(statearr_96337_99777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96331 === (6))){
var state_96330__$1 = state_96330;
var statearr_96338_99779 = state_96330__$1;
(statearr_96338_99779[(2)] = null);

(statearr_96338_99779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96331 === (7))){
var inst_96326 = (state_96330[(2)]);
var state_96330__$1 = state_96330;
var statearr_96339_99780 = state_96330__$1;
(statearr_96339_99780[(2)] = inst_96326);

(statearr_96339_99780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__99768,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
;
return ((function (__99768,switch__81413__auto__,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_96341 = [null,null,null,null,null,null,null];
(statearr_96341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__);

(statearr_96341[(1)] = (1));

return statearr_96341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1 = (function (state_96330){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96330);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96342){var ex__81417__auto__ = e96342;
var statearr_96343_99782 = state_96330;
(statearr_96343_99782[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96330[(4)]))){
var statearr_96344_99783 = state_96330;
(statearr_96344_99783[(1)] = cljs.core.first((state_96330[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99787 = state_96330;
state_96330 = G__99787;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = function(state_96330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1.call(this,state_96330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__;
})()
;})(__99768,switch__81413__auto__,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
})();
var state__83167__auto__ = (function (){var statearr_96346 = f__83166__auto__();
(statearr_96346[(6)] = c__83165__auto___99772);

return statearr_96346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
});})(__99768,c__83165__auto___99772,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
);


break;
case "async":
var c__83165__auto___99788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__99768,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = ((function (__99768,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function (state_96364){
var state_val_96365 = (state_96364[(1)]);
if((state_val_96365 === (1))){
var state_96364__$1 = state_96364;
var statearr_96370_99789 = state_96364__$1;
(statearr_96370_99789[(2)] = null);

(statearr_96370_99789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96365 === (2))){
var state_96364__$1 = state_96364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96364__$1,(4),jobs);
} else {
if((state_val_96365 === (3))){
var inst_96362 = (state_96364[(2)]);
var state_96364__$1 = state_96364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96364__$1,inst_96362);
} else {
if((state_val_96365 === (4))){
var inst_96353 = (state_96364[(2)]);
var inst_96354 = async(inst_96353);
var state_96364__$1 = state_96364;
if(cljs.core.truth_(inst_96354)){
var statearr_96375_99790 = state_96364__$1;
(statearr_96375_99790[(1)] = (5));

} else {
var statearr_96376_99791 = state_96364__$1;
(statearr_96376_99791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96365 === (5))){
var state_96364__$1 = state_96364;
var statearr_96378_99793 = state_96364__$1;
(statearr_96378_99793[(2)] = null);

(statearr_96378_99793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96365 === (6))){
var state_96364__$1 = state_96364;
var statearr_96380_99795 = state_96364__$1;
(statearr_96380_99795[(2)] = null);

(statearr_96380_99795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96365 === (7))){
var inst_96360 = (state_96364[(2)]);
var state_96364__$1 = state_96364;
var statearr_96383_99796 = state_96364__$1;
(statearr_96383_99796[(2)] = inst_96360);

(statearr_96383_99796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__99768,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
;
return ((function (__99768,switch__81413__auto__,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_96386 = [null,null,null,null,null,null,null];
(statearr_96386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__);

(statearr_96386[(1)] = (1));

return statearr_96386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1 = (function (state_96364){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96364);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96391){var ex__81417__auto__ = e96391;
var statearr_96392_99797 = state_96364;
(statearr_96392_99797[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96364[(4)]))){
var statearr_96397_99798 = state_96364;
(statearr_96397_99798[(1)] = cljs.core.first((state_96364[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99799 = state_96364;
state_96364 = G__99799;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = function(state_96364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1.call(this,state_96364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__;
})()
;})(__99768,switch__81413__auto__,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
})();
var state__83167__auto__ = (function (){var statearr_96402 = f__83166__auto__();
(statearr_96402[(6)] = c__83165__auto___99788);

return statearr_96402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
});})(__99768,c__83165__auto___99788,G__96315_99769,G__96315_99770__$1,n__4613__auto___99767,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__96315_99770__$1)].join('')));

}

var G__99802 = (__99768 + (1));
__99768 = G__99802;
continue;
} else {
}
break;
}

var c__83165__auto___99803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96440){
var state_val_96441 = (state_96440[(1)]);
if((state_val_96441 === (7))){
var inst_96433 = (state_96440[(2)]);
var state_96440__$1 = state_96440;
var statearr_96449_99804 = state_96440__$1;
(statearr_96449_99804[(2)] = inst_96433);

(statearr_96449_99804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96441 === (1))){
var state_96440__$1 = state_96440;
var statearr_96450_99805 = state_96440__$1;
(statearr_96450_99805[(2)] = null);

(statearr_96450_99805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96441 === (4))){
var inst_96407 = (state_96440[(7)]);
var inst_96407__$1 = (state_96440[(2)]);
var inst_96408 = (inst_96407__$1 == null);
var state_96440__$1 = (function (){var statearr_96452 = state_96440;
(statearr_96452[(7)] = inst_96407__$1);

return statearr_96452;
})();
if(cljs.core.truth_(inst_96408)){
var statearr_96454_99806 = state_96440__$1;
(statearr_96454_99806[(1)] = (5));

} else {
var statearr_96456_99807 = state_96440__$1;
(statearr_96456_99807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96441 === (6))){
var inst_96407 = (state_96440[(7)]);
var inst_96413 = (state_96440[(8)]);
var inst_96413__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_96421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_96425 = [inst_96407,inst_96413__$1];
var inst_96426 = (new cljs.core.PersistentVector(null,2,(5),inst_96421,inst_96425,null));
var state_96440__$1 = (function (){var statearr_96460 = state_96440;
(statearr_96460[(8)] = inst_96413__$1);

return statearr_96460;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96440__$1,(8),jobs,inst_96426);
} else {
if((state_val_96441 === (3))){
var inst_96435 = (state_96440[(2)]);
var state_96440__$1 = state_96440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96440__$1,inst_96435);
} else {
if((state_val_96441 === (2))){
var state_96440__$1 = state_96440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96440__$1,(4),from);
} else {
if((state_val_96441 === (9))){
var inst_96430 = (state_96440[(2)]);
var state_96440__$1 = (function (){var statearr_96465 = state_96440;
(statearr_96465[(9)] = inst_96430);

return statearr_96465;
})();
var statearr_96467_99816 = state_96440__$1;
(statearr_96467_99816[(2)] = null);

(statearr_96467_99816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96441 === (5))){
var inst_96410 = cljs.core.async.close_BANG_(jobs);
var state_96440__$1 = state_96440;
var statearr_96470_99817 = state_96440__$1;
(statearr_96470_99817[(2)] = inst_96410);

(statearr_96470_99817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96441 === (8))){
var inst_96413 = (state_96440[(8)]);
var inst_96428 = (state_96440[(2)]);
var state_96440__$1 = (function (){var statearr_96471 = state_96440;
(statearr_96471[(10)] = inst_96428);

return statearr_96471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96440__$1,(9),results,inst_96413);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_96472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_96472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__);

(statearr_96472[(1)] = (1));

return statearr_96472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1 = (function (state_96440){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96440);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96477){var ex__81417__auto__ = e96477;
var statearr_96478_99821 = state_96440;
(statearr_96478_99821[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96440[(4)]))){
var statearr_96479_99822 = state_96440;
(statearr_96479_99822[(1)] = cljs.core.first((state_96440[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99823 = state_96440;
state_96440 = G__99823;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = function(state_96440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1.call(this,state_96440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96490 = f__83166__auto__();
(statearr_96490[(6)] = c__83165__auto___99803);

return statearr_96490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96545){
var state_val_96546 = (state_96545[(1)]);
if((state_val_96546 === (7))){
var inst_96541 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
var statearr_96562_99835 = state_96545__$1;
(statearr_96562_99835[(2)] = inst_96541);

(statearr_96562_99835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (20))){
var state_96545__$1 = state_96545;
var statearr_96570_99842 = state_96545__$1;
(statearr_96570_99842[(2)] = null);

(statearr_96570_99842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (1))){
var state_96545__$1 = state_96545;
var statearr_96581_99847 = state_96545__$1;
(statearr_96581_99847[(2)] = null);

(statearr_96581_99847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (4))){
var inst_96504 = (state_96545[(7)]);
var inst_96504__$1 = (state_96545[(2)]);
var inst_96505 = (inst_96504__$1 == null);
var state_96545__$1 = (function (){var statearr_96585 = state_96545;
(statearr_96585[(7)] = inst_96504__$1);

return statearr_96585;
})();
if(cljs.core.truth_(inst_96505)){
var statearr_96587_99852 = state_96545__$1;
(statearr_96587_99852[(1)] = (5));

} else {
var statearr_96593_99853 = state_96545__$1;
(statearr_96593_99853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (15))){
var inst_96520 = (state_96545[(8)]);
var state_96545__$1 = state_96545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96545__$1,(18),to,inst_96520);
} else {
if((state_val_96546 === (21))){
var inst_96535 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
var statearr_96607_99858 = state_96545__$1;
(statearr_96607_99858[(2)] = inst_96535);

(statearr_96607_99858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (13))){
var inst_96538 = (state_96545[(2)]);
var state_96545__$1 = (function (){var statearr_96618 = state_96545;
(statearr_96618[(9)] = inst_96538);

return statearr_96618;
})();
var statearr_96621_99859 = state_96545__$1;
(statearr_96621_99859[(2)] = null);

(statearr_96621_99859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (6))){
var inst_96504 = (state_96545[(7)]);
var state_96545__$1 = state_96545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96545__$1,(11),inst_96504);
} else {
if((state_val_96546 === (17))){
var inst_96530 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
if(cljs.core.truth_(inst_96530)){
var statearr_96626_99860 = state_96545__$1;
(statearr_96626_99860[(1)] = (19));

} else {
var statearr_96627_99861 = state_96545__$1;
(statearr_96627_99861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (3))){
var inst_96543 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96545__$1,inst_96543);
} else {
if((state_val_96546 === (12))){
var inst_96517 = (state_96545[(10)]);
var state_96545__$1 = state_96545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96545__$1,(14),inst_96517);
} else {
if((state_val_96546 === (2))){
var state_96545__$1 = state_96545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96545__$1,(4),results);
} else {
if((state_val_96546 === (19))){
var state_96545__$1 = state_96545;
var statearr_96636_99863 = state_96545__$1;
(statearr_96636_99863[(2)] = null);

(statearr_96636_99863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (11))){
var inst_96517 = (state_96545[(2)]);
var state_96545__$1 = (function (){var statearr_96638 = state_96545;
(statearr_96638[(10)] = inst_96517);

return statearr_96638;
})();
var statearr_96639_99865 = state_96545__$1;
(statearr_96639_99865[(2)] = null);

(statearr_96639_99865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (9))){
var state_96545__$1 = state_96545;
var statearr_96646_99866 = state_96545__$1;
(statearr_96646_99866[(2)] = null);

(statearr_96646_99866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (5))){
var state_96545__$1 = state_96545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_96651_99867 = state_96545__$1;
(statearr_96651_99867[(1)] = (8));

} else {
var statearr_96657_99868 = state_96545__$1;
(statearr_96657_99868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (14))){
var inst_96520 = (state_96545[(8)]);
var inst_96520__$1 = (state_96545[(2)]);
var inst_96522 = (inst_96520__$1 == null);
var inst_96523 = cljs.core.not(inst_96522);
var state_96545__$1 = (function (){var statearr_96661 = state_96545;
(statearr_96661[(8)] = inst_96520__$1);

return statearr_96661;
})();
if(inst_96523){
var statearr_96662_99869 = state_96545__$1;
(statearr_96662_99869[(1)] = (15));

} else {
var statearr_96663_99870 = state_96545__$1;
(statearr_96663_99870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (16))){
var state_96545__$1 = state_96545;
var statearr_96668_99871 = state_96545__$1;
(statearr_96668_99871[(2)] = false);

(statearr_96668_99871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (10))){
var inst_96514 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
var statearr_96674_99876 = state_96545__$1;
(statearr_96674_99876[(2)] = inst_96514);

(statearr_96674_99876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (18))){
var inst_96526 = (state_96545[(2)]);
var state_96545__$1 = state_96545;
var statearr_96676_99877 = state_96545__$1;
(statearr_96676_99877[(2)] = inst_96526);

(statearr_96676_99877[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96546 === (8))){
var inst_96509 = cljs.core.async.close_BANG_(to);
var state_96545__$1 = state_96545;
var statearr_96681_99878 = state_96545__$1;
(statearr_96681_99878[(2)] = inst_96509);

(statearr_96681_99878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_96683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_96683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__);

(statearr_96683[(1)] = (1));

return statearr_96683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1 = (function (state_96545){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96545);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96686){var ex__81417__auto__ = e96686;
var statearr_96687_99880 = state_96545;
(statearr_96687_99880[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96545[(4)]))){
var statearr_96690_99881 = state_96545;
(statearr_96690_99881[(1)] = cljs.core.first((state_96545[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99885 = state_96545;
state_96545 = G__99885;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__ = function(state_96545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1.call(this,state_96545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96692 = f__83166__auto__();
(statearr_96692[(6)] = c__83165__auto__);

return statearr_96692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__96697 = arguments.length;
switch (G__96697) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__96716 = arguments.length;
switch (G__96716) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__96739 = arguments.length;
switch (G__96739) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__83165__auto___99906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96773){
var state_val_96774 = (state_96773[(1)]);
if((state_val_96774 === (7))){
var inst_96767 = (state_96773[(2)]);
var state_96773__$1 = state_96773;
var statearr_96786_99909 = state_96773__$1;
(statearr_96786_99909[(2)] = inst_96767);

(statearr_96786_99909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (1))){
var state_96773__$1 = state_96773;
var statearr_96789_99910 = state_96773__$1;
(statearr_96789_99910[(2)] = null);

(statearr_96789_99910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (4))){
var inst_96747 = (state_96773[(7)]);
var inst_96747__$1 = (state_96773[(2)]);
var inst_96748 = (inst_96747__$1 == null);
var state_96773__$1 = (function (){var statearr_96791 = state_96773;
(statearr_96791[(7)] = inst_96747__$1);

return statearr_96791;
})();
if(cljs.core.truth_(inst_96748)){
var statearr_96793_99911 = state_96773__$1;
(statearr_96793_99911[(1)] = (5));

} else {
var statearr_96795_99912 = state_96773__$1;
(statearr_96795_99912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (13))){
var state_96773__$1 = state_96773;
var statearr_96800_99916 = state_96773__$1;
(statearr_96800_99916[(2)] = null);

(statearr_96800_99916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (6))){
var inst_96747 = (state_96773[(7)]);
var inst_96754 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_96747) : p.call(null,inst_96747));
var state_96773__$1 = state_96773;
if(cljs.core.truth_(inst_96754)){
var statearr_96805_99918 = state_96773__$1;
(statearr_96805_99918[(1)] = (9));

} else {
var statearr_96806_99920 = state_96773__$1;
(statearr_96806_99920[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (3))){
var inst_96769 = (state_96773[(2)]);
var state_96773__$1 = state_96773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96773__$1,inst_96769);
} else {
if((state_val_96774 === (12))){
var state_96773__$1 = state_96773;
var statearr_96809_99925 = state_96773__$1;
(statearr_96809_99925[(2)] = null);

(statearr_96809_99925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (2))){
var state_96773__$1 = state_96773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96773__$1,(4),ch);
} else {
if((state_val_96774 === (11))){
var inst_96747 = (state_96773[(7)]);
var inst_96758 = (state_96773[(2)]);
var state_96773__$1 = state_96773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96773__$1,(8),inst_96758,inst_96747);
} else {
if((state_val_96774 === (9))){
var state_96773__$1 = state_96773;
var statearr_96813_99930 = state_96773__$1;
(statearr_96813_99930[(2)] = tc);

(statearr_96813_99930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (5))){
var inst_96750 = cljs.core.async.close_BANG_(tc);
var inst_96752 = cljs.core.async.close_BANG_(fc);
var state_96773__$1 = (function (){var statearr_96814 = state_96773;
(statearr_96814[(8)] = inst_96750);

return statearr_96814;
})();
var statearr_96817_99933 = state_96773__$1;
(statearr_96817_99933[(2)] = inst_96752);

(statearr_96817_99933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (14))){
var inst_96765 = (state_96773[(2)]);
var state_96773__$1 = state_96773;
var statearr_96818_99938 = state_96773__$1;
(statearr_96818_99938[(2)] = inst_96765);

(statearr_96818_99938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (10))){
var state_96773__$1 = state_96773;
var statearr_96826_99940 = state_96773__$1;
(statearr_96826_99940[(2)] = fc);

(statearr_96826_99940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96774 === (8))){
var inst_96760 = (state_96773[(2)]);
var state_96773__$1 = state_96773;
if(cljs.core.truth_(inst_96760)){
var statearr_96827_99944 = state_96773__$1;
(statearr_96827_99944[(1)] = (12));

} else {
var statearr_96832_99945 = state_96773__$1;
(statearr_96832_99945[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_96839 = [null,null,null,null,null,null,null,null,null];
(statearr_96839[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_96839[(1)] = (1));

return statearr_96839;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_96773){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96773);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96841){var ex__81417__auto__ = e96841;
var statearr_96842_99950 = state_96773;
(statearr_96842_99950[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96773[(4)]))){
var statearr_96844_99951 = state_96773;
(statearr_96844_99951[(1)] = cljs.core.first((state_96773[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99954 = state_96773;
state_96773 = G__99954;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_96773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_96773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96852 = f__83166__auto__();
(statearr_96852[(6)] = c__83165__auto___99906);

return statearr_96852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96891){
var state_val_96892 = (state_96891[(1)]);
if((state_val_96892 === (7))){
var inst_96887 = (state_96891[(2)]);
var state_96891__$1 = state_96891;
var statearr_96893_99958 = state_96891__$1;
(statearr_96893_99958[(2)] = inst_96887);

(statearr_96893_99958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (1))){
var inst_96858 = init;
var inst_96859 = inst_96858;
var state_96891__$1 = (function (){var statearr_96896 = state_96891;
(statearr_96896[(7)] = inst_96859);

return statearr_96896;
})();
var statearr_96897_99961 = state_96891__$1;
(statearr_96897_99961[(2)] = null);

(statearr_96897_99961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (4))){
var inst_96868 = (state_96891[(8)]);
var inst_96868__$1 = (state_96891[(2)]);
var inst_96871 = (inst_96868__$1 == null);
var state_96891__$1 = (function (){var statearr_96902 = state_96891;
(statearr_96902[(8)] = inst_96868__$1);

return statearr_96902;
})();
if(cljs.core.truth_(inst_96871)){
var statearr_96903_99964 = state_96891__$1;
(statearr_96903_99964[(1)] = (5));

} else {
var statearr_96904_99965 = state_96891__$1;
(statearr_96904_99965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (6))){
var inst_96877 = (state_96891[(9)]);
var inst_96868 = (state_96891[(8)]);
var inst_96859 = (state_96891[(7)]);
var inst_96877__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_96859,inst_96868) : f.call(null,inst_96859,inst_96868));
var inst_96879 = cljs.core.reduced_QMARK_(inst_96877__$1);
var state_96891__$1 = (function (){var statearr_96906 = state_96891;
(statearr_96906[(9)] = inst_96877__$1);

return statearr_96906;
})();
if(inst_96879){
var statearr_96907_99968 = state_96891__$1;
(statearr_96907_99968[(1)] = (8));

} else {
var statearr_96908_99973 = state_96891__$1;
(statearr_96908_99973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (3))){
var inst_96889 = (state_96891[(2)]);
var state_96891__$1 = state_96891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96891__$1,inst_96889);
} else {
if((state_val_96892 === (2))){
var state_96891__$1 = state_96891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96891__$1,(4),ch);
} else {
if((state_val_96892 === (9))){
var inst_96877 = (state_96891[(9)]);
var inst_96859 = inst_96877;
var state_96891__$1 = (function (){var statearr_96909 = state_96891;
(statearr_96909[(7)] = inst_96859);

return statearr_96909;
})();
var statearr_96910_99976 = state_96891__$1;
(statearr_96910_99976[(2)] = null);

(statearr_96910_99976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (5))){
var inst_96859 = (state_96891[(7)]);
var state_96891__$1 = state_96891;
var statearr_96911_99977 = state_96891__$1;
(statearr_96911_99977[(2)] = inst_96859);

(statearr_96911_99977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (10))){
var inst_96885 = (state_96891[(2)]);
var state_96891__$1 = state_96891;
var statearr_96912_99978 = state_96891__$1;
(statearr_96912_99978[(2)] = inst_96885);

(statearr_96912_99978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96892 === (8))){
var inst_96877 = (state_96891[(9)]);
var inst_96881 = cljs.core.deref(inst_96877);
var state_96891__$1 = state_96891;
var statearr_96913_99979 = state_96891__$1;
(statearr_96913_99979[(2)] = inst_96881);

(statearr_96913_99979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__81414__auto__ = null;
var cljs$core$async$reduce_$_state_machine__81414__auto____0 = (function (){
var statearr_96915 = [null,null,null,null,null,null,null,null,null,null];
(statearr_96915[(0)] = cljs$core$async$reduce_$_state_machine__81414__auto__);

(statearr_96915[(1)] = (1));

return statearr_96915;
});
var cljs$core$async$reduce_$_state_machine__81414__auto____1 = (function (state_96891){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96891);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96918){var ex__81417__auto__ = e96918;
var statearr_96919_99980 = state_96891;
(statearr_96919_99980[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96891[(4)]))){
var statearr_96921_99981 = state_96891;
(statearr_96921_99981[(1)] = cljs.core.first((state_96891[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99983 = state_96891;
state_96891 = G__99983;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__81414__auto__ = function(state_96891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__81414__auto____1.call(this,state_96891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__81414__auto____0;
cljs$core$async$reduce_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__81414__auto____1;
return cljs$core$async$reduce_$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96922 = f__83166__auto__();
(statearr_96922[(6)] = c__83165__auto__);

return statearr_96922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96928){
var state_val_96929 = (state_96928[(1)]);
if((state_val_96929 === (1))){
var inst_96923 = cljs.core.async.reduce(f__$1,init,ch);
var state_96928__$1 = state_96928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96928__$1,(2),inst_96923);
} else {
if((state_val_96929 === (2))){
var inst_96925 = (state_96928[(2)]);
var inst_96926 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_96925) : f__$1.call(null,inst_96925));
var state_96928__$1 = state_96928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96928__$1,inst_96926);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__81414__auto__ = null;
var cljs$core$async$transduce_$_state_machine__81414__auto____0 = (function (){
var statearr_96939 = [null,null,null,null,null,null,null];
(statearr_96939[(0)] = cljs$core$async$transduce_$_state_machine__81414__auto__);

(statearr_96939[(1)] = (1));

return statearr_96939;
});
var cljs$core$async$transduce_$_state_machine__81414__auto____1 = (function (state_96928){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96928);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e96941){var ex__81417__auto__ = e96941;
var statearr_96942_99995 = state_96928;
(statearr_96942_99995[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96928[(4)]))){
var statearr_96944_99996 = state_96928;
(statearr_96944_99996[(1)] = cljs.core.first((state_96928[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__99999 = state_96928;
state_96928 = G__99999;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__81414__auto__ = function(state_96928){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__81414__auto____1.call(this,state_96928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__81414__auto____0;
cljs$core$async$transduce_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__81414__auto____1;
return cljs$core$async$transduce_$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_96947 = f__83166__auto__();
(statearr_96947[(6)] = c__83165__auto__);

return statearr_96947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__96951 = arguments.length;
switch (G__96951) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_96980){
var state_val_96981 = (state_96980[(1)]);
if((state_val_96981 === (7))){
var inst_96959 = (state_96980[(2)]);
var state_96980__$1 = state_96980;
var statearr_96984_100016 = state_96980__$1;
(statearr_96984_100016[(2)] = inst_96959);

(statearr_96984_100016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (1))){
var inst_96953 = cljs.core.seq(coll);
var inst_96954 = inst_96953;
var state_96980__$1 = (function (){var statearr_96985 = state_96980;
(statearr_96985[(7)] = inst_96954);

return statearr_96985;
})();
var statearr_96986_100018 = state_96980__$1;
(statearr_96986_100018[(2)] = null);

(statearr_96986_100018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (4))){
var inst_96954 = (state_96980[(7)]);
var inst_96957 = cljs.core.first(inst_96954);
var state_96980__$1 = state_96980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_96980__$1,(7),ch,inst_96957);
} else {
if((state_val_96981 === (13))){
var inst_96973 = (state_96980[(2)]);
var state_96980__$1 = state_96980;
var statearr_96987_100019 = state_96980__$1;
(statearr_96987_100019[(2)] = inst_96973);

(statearr_96987_100019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (6))){
var inst_96962 = (state_96980[(2)]);
var state_96980__$1 = state_96980;
if(cljs.core.truth_(inst_96962)){
var statearr_96988_100020 = state_96980__$1;
(statearr_96988_100020[(1)] = (8));

} else {
var statearr_96991_100021 = state_96980__$1;
(statearr_96991_100021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (3))){
var inst_96977 = (state_96980[(2)]);
var state_96980__$1 = state_96980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96980__$1,inst_96977);
} else {
if((state_val_96981 === (12))){
var state_96980__$1 = state_96980;
var statearr_96992_100022 = state_96980__$1;
(statearr_96992_100022[(2)] = null);

(statearr_96992_100022[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (2))){
var inst_96954 = (state_96980[(7)]);
var state_96980__$1 = state_96980;
if(cljs.core.truth_(inst_96954)){
var statearr_96995_100024 = state_96980__$1;
(statearr_96995_100024[(1)] = (4));

} else {
var statearr_96997_100025 = state_96980__$1;
(statearr_96997_100025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (11))){
var inst_96970 = cljs.core.async.close_BANG_(ch);
var state_96980__$1 = state_96980;
var statearr_96999_100026 = state_96980__$1;
(statearr_96999_100026[(2)] = inst_96970);

(statearr_96999_100026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (9))){
var state_96980__$1 = state_96980;
if(cljs.core.truth_(close_QMARK_)){
var statearr_97000_100029 = state_96980__$1;
(statearr_97000_100029[(1)] = (11));

} else {
var statearr_97001_100030 = state_96980__$1;
(statearr_97001_100030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (5))){
var inst_96954 = (state_96980[(7)]);
var state_96980__$1 = state_96980;
var statearr_97002_100032 = state_96980__$1;
(statearr_97002_100032[(2)] = inst_96954);

(statearr_97002_100032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (10))){
var inst_96975 = (state_96980[(2)]);
var state_96980__$1 = state_96980;
var statearr_97004_100033 = state_96980__$1;
(statearr_97004_100033[(2)] = inst_96975);

(statearr_97004_100033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96981 === (8))){
var inst_96954 = (state_96980[(7)]);
var inst_96964 = cljs.core.next(inst_96954);
var inst_96954__$1 = inst_96964;
var state_96980__$1 = (function (){var statearr_97008 = state_96980;
(statearr_97008[(7)] = inst_96954__$1);

return statearr_97008;
})();
var statearr_97009_100034 = state_96980__$1;
(statearr_97009_100034[(2)] = null);

(statearr_97009_100034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_97015 = [null,null,null,null,null,null,null,null];
(statearr_97015[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_97015[(1)] = (1));

return statearr_97015;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_96980){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_96980);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e97016){var ex__81417__auto__ = e97016;
var statearr_97017_100040 = state_96980;
(statearr_97017_100040[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_96980[(4)]))){
var statearr_97018_100042 = state_96980;
(statearr_97018_100042[(1)] = cljs.core.first((state_96980[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100045 = state_96980;
state_96980 = G__100045;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_96980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_96980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_97025 = f__83166__auto__();
(statearr_97025[(6)] = c__83165__auto__);

return statearr_97025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__97032 = arguments.length;
switch (G__97032) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_100052 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_100052(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_100058 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_100058(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_100062 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_100062(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_100077 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_100077(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async97083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97083 = (function (ch,cs,meta97084){
this.ch = ch;
this.cs = cs;
this.meta97084 = meta97084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97085,meta97084__$1){
var self__ = this;
var _97085__$1 = this;
return (new cljs.core.async.t_cljs$core$async97083(self__.ch,self__.cs,meta97084__$1));
}));

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97085){
var self__ = this;
var _97085__$1 = this;
return self__.meta97084;
}));

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async97083.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async97083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta97084","meta97084",-1246701802,null)], null);
}));

(cljs.core.async.t_cljs$core$async97083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async97083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97083");

(cljs.core.async.t_cljs$core$async97083.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async97083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async97083.
 */
cljs.core.async.__GT_t_cljs$core$async97083 = (function cljs$core$async$mult_$___GT_t_cljs$core$async97083(ch__$1,cs__$1,meta97084){
return (new cljs.core.async.t_cljs$core$async97083(ch__$1,cs__$1,meta97084));
});

}

return (new cljs.core.async.t_cljs$core$async97083(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__83165__auto___100094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_97300){
var state_val_97302 = (state_97300[(1)]);
if((state_val_97302 === (7))){
var inst_97286 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97325_100095 = state_97300__$1;
(statearr_97325_100095[(2)] = inst_97286);

(statearr_97325_100095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (20))){
var inst_97142 = (state_97300[(7)]);
var inst_97159 = cljs.core.first(inst_97142);
var inst_97160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97159,(0),null);
var inst_97165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97159,(1),null);
var state_97300__$1 = (function (){var statearr_97335 = state_97300;
(statearr_97335[(8)] = inst_97160);

return statearr_97335;
})();
if(cljs.core.truth_(inst_97165)){
var statearr_97338_100111 = state_97300__$1;
(statearr_97338_100111[(1)] = (22));

} else {
var statearr_97341_100113 = state_97300__$1;
(statearr_97341_100113[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (27))){
var inst_97215 = (state_97300[(9)]);
var inst_97104 = (state_97300[(10)]);
var inst_97224 = (state_97300[(11)]);
var inst_97213 = (state_97300[(12)]);
var inst_97224__$1 = cljs.core._nth(inst_97213,inst_97215);
var inst_97229 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_97224__$1,inst_97104,done);
var state_97300__$1 = (function (){var statearr_97353 = state_97300;
(statearr_97353[(11)] = inst_97224__$1);

return statearr_97353;
})();
if(cljs.core.truth_(inst_97229)){
var statearr_97354_100119 = state_97300__$1;
(statearr_97354_100119[(1)] = (30));

} else {
var statearr_97356_100120 = state_97300__$1;
(statearr_97356_100120[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (1))){
var state_97300__$1 = state_97300;
var statearr_97361_100123 = state_97300__$1;
(statearr_97361_100123[(2)] = null);

(statearr_97361_100123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (24))){
var inst_97142 = (state_97300[(7)]);
var inst_97178 = (state_97300[(2)]);
var inst_97179 = cljs.core.next(inst_97142);
var inst_97114 = inst_97179;
var inst_97115 = null;
var inst_97116 = (0);
var inst_97117 = (0);
var state_97300__$1 = (function (){var statearr_97364 = state_97300;
(statearr_97364[(13)] = inst_97178);

(statearr_97364[(14)] = inst_97115);

(statearr_97364[(15)] = inst_97114);

(statearr_97364[(16)] = inst_97117);

(statearr_97364[(17)] = inst_97116);

return statearr_97364;
})();
var statearr_97367_100128 = state_97300__$1;
(statearr_97367_100128[(2)] = null);

(statearr_97367_100128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (39))){
var state_97300__$1 = state_97300;
var statearr_97375_100132 = state_97300__$1;
(statearr_97375_100132[(2)] = null);

(statearr_97375_100132[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (4))){
var inst_97104 = (state_97300[(10)]);
var inst_97104__$1 = (state_97300[(2)]);
var inst_97105 = (inst_97104__$1 == null);
var state_97300__$1 = (function (){var statearr_97376 = state_97300;
(statearr_97376[(10)] = inst_97104__$1);

return statearr_97376;
})();
if(cljs.core.truth_(inst_97105)){
var statearr_97377_100136 = state_97300__$1;
(statearr_97377_100136[(1)] = (5));

} else {
var statearr_97378_100138 = state_97300__$1;
(statearr_97378_100138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (15))){
var inst_97115 = (state_97300[(14)]);
var inst_97114 = (state_97300[(15)]);
var inst_97117 = (state_97300[(16)]);
var inst_97116 = (state_97300[(17)]);
var inst_97137 = (state_97300[(2)]);
var inst_97138 = (inst_97117 + (1));
var tmp97370 = inst_97115;
var tmp97371 = inst_97114;
var tmp97372 = inst_97116;
var inst_97114__$1 = tmp97371;
var inst_97115__$1 = tmp97370;
var inst_97116__$1 = tmp97372;
var inst_97117__$1 = inst_97138;
var state_97300__$1 = (function (){var statearr_97382 = state_97300;
(statearr_97382[(18)] = inst_97137);

(statearr_97382[(14)] = inst_97115__$1);

(statearr_97382[(15)] = inst_97114__$1);

(statearr_97382[(16)] = inst_97117__$1);

(statearr_97382[(17)] = inst_97116__$1);

return statearr_97382;
})();
var statearr_97383_100140 = state_97300__$1;
(statearr_97383_100140[(2)] = null);

(statearr_97383_100140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (21))){
var inst_97182 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97393_100146 = state_97300__$1;
(statearr_97393_100146[(2)] = inst_97182);

(statearr_97393_100146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (31))){
var inst_97224 = (state_97300[(11)]);
var inst_97233 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_97224);
var state_97300__$1 = state_97300;
var statearr_97398_100148 = state_97300__$1;
(statearr_97398_100148[(2)] = inst_97233);

(statearr_97398_100148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (32))){
var inst_97215 = (state_97300[(9)]);
var inst_97212 = (state_97300[(19)]);
var inst_97214 = (state_97300[(20)]);
var inst_97213 = (state_97300[(12)]);
var inst_97235 = (state_97300[(2)]);
var inst_97237 = (inst_97215 + (1));
var tmp97386 = inst_97212;
var tmp97387 = inst_97214;
var tmp97388 = inst_97213;
var inst_97212__$1 = tmp97386;
var inst_97213__$1 = tmp97388;
var inst_97214__$1 = tmp97387;
var inst_97215__$1 = inst_97237;
var state_97300__$1 = (function (){var statearr_97404 = state_97300;
(statearr_97404[(9)] = inst_97215__$1);

(statearr_97404[(19)] = inst_97212__$1);

(statearr_97404[(21)] = inst_97235);

(statearr_97404[(20)] = inst_97214__$1);

(statearr_97404[(12)] = inst_97213__$1);

return statearr_97404;
})();
var statearr_97409_100151 = state_97300__$1;
(statearr_97409_100151[(2)] = null);

(statearr_97409_100151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (40))){
var inst_97258 = (state_97300[(22)]);
var inst_97263 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_97258);
var state_97300__$1 = state_97300;
var statearr_97414_100152 = state_97300__$1;
(statearr_97414_100152[(2)] = inst_97263);

(statearr_97414_100152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (33))){
var inst_97240 = (state_97300[(23)]);
var inst_97246 = cljs.core.chunked_seq_QMARK_(inst_97240);
var state_97300__$1 = state_97300;
if(inst_97246){
var statearr_97421_100154 = state_97300__$1;
(statearr_97421_100154[(1)] = (36));

} else {
var statearr_97422_100155 = state_97300__$1;
(statearr_97422_100155[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (13))){
var inst_97131 = (state_97300[(24)]);
var inst_97134 = cljs.core.async.close_BANG_(inst_97131);
var state_97300__$1 = state_97300;
var statearr_97424_100156 = state_97300__$1;
(statearr_97424_100156[(2)] = inst_97134);

(statearr_97424_100156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (22))){
var inst_97160 = (state_97300[(8)]);
var inst_97171 = cljs.core.async.close_BANG_(inst_97160);
var state_97300__$1 = state_97300;
var statearr_97428_100157 = state_97300__$1;
(statearr_97428_100157[(2)] = inst_97171);

(statearr_97428_100157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (36))){
var inst_97240 = (state_97300[(23)]);
var inst_97251 = cljs.core.chunk_first(inst_97240);
var inst_97252 = cljs.core.chunk_rest(inst_97240);
var inst_97253 = cljs.core.count(inst_97251);
var inst_97212 = inst_97252;
var inst_97213 = inst_97251;
var inst_97214 = inst_97253;
var inst_97215 = (0);
var state_97300__$1 = (function (){var statearr_97434 = state_97300;
(statearr_97434[(9)] = inst_97215);

(statearr_97434[(19)] = inst_97212);

(statearr_97434[(20)] = inst_97214);

(statearr_97434[(12)] = inst_97213);

return statearr_97434;
})();
var statearr_97435_100158 = state_97300__$1;
(statearr_97435_100158[(2)] = null);

(statearr_97435_100158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (41))){
var inst_97240 = (state_97300[(23)]);
var inst_97265 = (state_97300[(2)]);
var inst_97266 = cljs.core.next(inst_97240);
var inst_97212 = inst_97266;
var inst_97213 = null;
var inst_97214 = (0);
var inst_97215 = (0);
var state_97300__$1 = (function (){var statearr_97445 = state_97300;
(statearr_97445[(9)] = inst_97215);

(statearr_97445[(19)] = inst_97212);

(statearr_97445[(25)] = inst_97265);

(statearr_97445[(20)] = inst_97214);

(statearr_97445[(12)] = inst_97213);

return statearr_97445;
})();
var statearr_97446_100169 = state_97300__$1;
(statearr_97446_100169[(2)] = null);

(statearr_97446_100169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (43))){
var state_97300__$1 = state_97300;
var statearr_97447_100170 = state_97300__$1;
(statearr_97447_100170[(2)] = null);

(statearr_97447_100170[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (29))){
var inst_97274 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97448_100176 = state_97300__$1;
(statearr_97448_100176[(2)] = inst_97274);

(statearr_97448_100176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (44))){
var inst_97283 = (state_97300[(2)]);
var state_97300__$1 = (function (){var statearr_97449 = state_97300;
(statearr_97449[(26)] = inst_97283);

return statearr_97449;
})();
var statearr_97450_100181 = state_97300__$1;
(statearr_97450_100181[(2)] = null);

(statearr_97450_100181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (6))){
var inst_97196 = (state_97300[(27)]);
var inst_97195 = cljs.core.deref(cs);
var inst_97196__$1 = cljs.core.keys(inst_97195);
var inst_97200 = cljs.core.count(inst_97196__$1);
var inst_97201 = cljs.core.reset_BANG_(dctr,inst_97200);
var inst_97210 = cljs.core.seq(inst_97196__$1);
var inst_97212 = inst_97210;
var inst_97213 = null;
var inst_97214 = (0);
var inst_97215 = (0);
var state_97300__$1 = (function (){var statearr_97452 = state_97300;
(statearr_97452[(27)] = inst_97196__$1);

(statearr_97452[(9)] = inst_97215);

(statearr_97452[(19)] = inst_97212);

(statearr_97452[(20)] = inst_97214);

(statearr_97452[(28)] = inst_97201);

(statearr_97452[(12)] = inst_97213);

return statearr_97452;
})();
var statearr_97453_100185 = state_97300__$1;
(statearr_97453_100185[(2)] = null);

(statearr_97453_100185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (28))){
var inst_97212 = (state_97300[(19)]);
var inst_97240 = (state_97300[(23)]);
var inst_97240__$1 = cljs.core.seq(inst_97212);
var state_97300__$1 = (function (){var statearr_97457 = state_97300;
(statearr_97457[(23)] = inst_97240__$1);

return statearr_97457;
})();
if(inst_97240__$1){
var statearr_97460_100186 = state_97300__$1;
(statearr_97460_100186[(1)] = (33));

} else {
var statearr_97462_100187 = state_97300__$1;
(statearr_97462_100187[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (25))){
var inst_97215 = (state_97300[(9)]);
var inst_97214 = (state_97300[(20)]);
var inst_97219 = (inst_97215 < inst_97214);
var inst_97220 = inst_97219;
var state_97300__$1 = state_97300;
if(cljs.core.truth_(inst_97220)){
var statearr_97469_100188 = state_97300__$1;
(statearr_97469_100188[(1)] = (27));

} else {
var statearr_97470_100191 = state_97300__$1;
(statearr_97470_100191[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (34))){
var state_97300__$1 = state_97300;
var statearr_97471_100192 = state_97300__$1;
(statearr_97471_100192[(2)] = null);

(statearr_97471_100192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (17))){
var state_97300__$1 = state_97300;
var statearr_97472_100198 = state_97300__$1;
(statearr_97472_100198[(2)] = null);

(statearr_97472_100198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (3))){
var inst_97288 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97300__$1,inst_97288);
} else {
if((state_val_97302 === (12))){
var inst_97190 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97473_100200 = state_97300__$1;
(statearr_97473_100200[(2)] = inst_97190);

(statearr_97473_100200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (2))){
var state_97300__$1 = state_97300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97300__$1,(4),ch);
} else {
if((state_val_97302 === (23))){
var state_97300__$1 = state_97300;
var statearr_97477_100201 = state_97300__$1;
(statearr_97477_100201[(2)] = null);

(statearr_97477_100201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (35))){
var inst_97272 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97478_100202 = state_97300__$1;
(statearr_97478_100202[(2)] = inst_97272);

(statearr_97478_100202[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (19))){
var inst_97142 = (state_97300[(7)]);
var inst_97148 = cljs.core.chunk_first(inst_97142);
var inst_97149 = cljs.core.chunk_rest(inst_97142);
var inst_97151 = cljs.core.count(inst_97148);
var inst_97114 = inst_97149;
var inst_97115 = inst_97148;
var inst_97116 = inst_97151;
var inst_97117 = (0);
var state_97300__$1 = (function (){var statearr_97480 = state_97300;
(statearr_97480[(14)] = inst_97115);

(statearr_97480[(15)] = inst_97114);

(statearr_97480[(16)] = inst_97117);

(statearr_97480[(17)] = inst_97116);

return statearr_97480;
})();
var statearr_97481_100203 = state_97300__$1;
(statearr_97481_100203[(2)] = null);

(statearr_97481_100203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (11))){
var inst_97142 = (state_97300[(7)]);
var inst_97114 = (state_97300[(15)]);
var inst_97142__$1 = cljs.core.seq(inst_97114);
var state_97300__$1 = (function (){var statearr_97484 = state_97300;
(statearr_97484[(7)] = inst_97142__$1);

return statearr_97484;
})();
if(inst_97142__$1){
var statearr_97485_100205 = state_97300__$1;
(statearr_97485_100205[(1)] = (16));

} else {
var statearr_97487_100206 = state_97300__$1;
(statearr_97487_100206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (9))){
var inst_97192 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97488_100207 = state_97300__$1;
(statearr_97488_100207[(2)] = inst_97192);

(statearr_97488_100207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (5))){
var inst_97112 = cljs.core.deref(cs);
var inst_97113 = cljs.core.seq(inst_97112);
var inst_97114 = inst_97113;
var inst_97115 = null;
var inst_97116 = (0);
var inst_97117 = (0);
var state_97300__$1 = (function (){var statearr_97489 = state_97300;
(statearr_97489[(14)] = inst_97115);

(statearr_97489[(15)] = inst_97114);

(statearr_97489[(16)] = inst_97117);

(statearr_97489[(17)] = inst_97116);

return statearr_97489;
})();
var statearr_97490_100208 = state_97300__$1;
(statearr_97490_100208[(2)] = null);

(statearr_97490_100208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (14))){
var state_97300__$1 = state_97300;
var statearr_97493_100209 = state_97300__$1;
(statearr_97493_100209[(2)] = null);

(statearr_97493_100209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (45))){
var inst_97280 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97494_100210 = state_97300__$1;
(statearr_97494_100210[(2)] = inst_97280);

(statearr_97494_100210[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (26))){
var inst_97196 = (state_97300[(27)]);
var inst_97276 = (state_97300[(2)]);
var inst_97277 = cljs.core.seq(inst_97196);
var state_97300__$1 = (function (){var statearr_97499 = state_97300;
(statearr_97499[(29)] = inst_97276);

return statearr_97499;
})();
if(inst_97277){
var statearr_97502_100216 = state_97300__$1;
(statearr_97502_100216[(1)] = (42));

} else {
var statearr_97506_100218 = state_97300__$1;
(statearr_97506_100218[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (16))){
var inst_97142 = (state_97300[(7)]);
var inst_97144 = cljs.core.chunked_seq_QMARK_(inst_97142);
var state_97300__$1 = state_97300;
if(inst_97144){
var statearr_97507_100219 = state_97300__$1;
(statearr_97507_100219[(1)] = (19));

} else {
var statearr_97512_100220 = state_97300__$1;
(statearr_97512_100220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (38))){
var inst_97269 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97516_100223 = state_97300__$1;
(statearr_97516_100223[(2)] = inst_97269);

(statearr_97516_100223[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (30))){
var state_97300__$1 = state_97300;
var statearr_97522_100224 = state_97300__$1;
(statearr_97522_100224[(2)] = null);

(statearr_97522_100224[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (10))){
var inst_97115 = (state_97300[(14)]);
var inst_97117 = (state_97300[(16)]);
var inst_97126 = cljs.core._nth(inst_97115,inst_97117);
var inst_97131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97126,(0),null);
var inst_97132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97126,(1),null);
var state_97300__$1 = (function (){var statearr_97529 = state_97300;
(statearr_97529[(24)] = inst_97131);

return statearr_97529;
})();
if(cljs.core.truth_(inst_97132)){
var statearr_97530_100228 = state_97300__$1;
(statearr_97530_100228[(1)] = (13));

} else {
var statearr_97531_100230 = state_97300__$1;
(statearr_97531_100230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (18))){
var inst_97188 = (state_97300[(2)]);
var state_97300__$1 = state_97300;
var statearr_97532_100233 = state_97300__$1;
(statearr_97532_100233[(2)] = inst_97188);

(statearr_97532_100233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (42))){
var state_97300__$1 = state_97300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97300__$1,(45),dchan);
} else {
if((state_val_97302 === (37))){
var inst_97258 = (state_97300[(22)]);
var inst_97240 = (state_97300[(23)]);
var inst_97104 = (state_97300[(10)]);
var inst_97258__$1 = cljs.core.first(inst_97240);
var inst_97259 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_97258__$1,inst_97104,done);
var state_97300__$1 = (function (){var statearr_97537 = state_97300;
(statearr_97537[(22)] = inst_97258__$1);

return statearr_97537;
})();
if(cljs.core.truth_(inst_97259)){
var statearr_97538_100240 = state_97300__$1;
(statearr_97538_100240[(1)] = (39));

} else {
var statearr_97539_100242 = state_97300__$1;
(statearr_97539_100242[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97302 === (8))){
var inst_97117 = (state_97300[(16)]);
var inst_97116 = (state_97300[(17)]);
var inst_97119 = (inst_97117 < inst_97116);
var inst_97120 = inst_97119;
var state_97300__$1 = state_97300;
if(cljs.core.truth_(inst_97120)){
var statearr_97541_100248 = state_97300__$1;
(statearr_97541_100248[(1)] = (10));

} else {
var statearr_97544_100249 = state_97300__$1;
(statearr_97544_100249[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__81414__auto__ = null;
var cljs$core$async$mult_$_state_machine__81414__auto____0 = (function (){
var statearr_97545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97545[(0)] = cljs$core$async$mult_$_state_machine__81414__auto__);

(statearr_97545[(1)] = (1));

return statearr_97545;
});
var cljs$core$async$mult_$_state_machine__81414__auto____1 = (function (state_97300){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_97300);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e97546){var ex__81417__auto__ = e97546;
var statearr_97547_100258 = state_97300;
(statearr_97547_100258[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_97300[(4)]))){
var statearr_97548_100259 = state_97300;
(statearr_97548_100259[(1)] = cljs.core.first((state_97300[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100261 = state_97300;
state_97300 = G__100261;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__81414__auto__ = function(state_97300){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__81414__auto____1.call(this,state_97300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__81414__auto____0;
cljs$core$async$mult_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__81414__auto____1;
return cljs$core$async$mult_$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_97554 = f__83166__auto__();
(statearr_97554[(6)] = c__83165__auto___100094);

return statearr_97554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__97563 = arguments.length;
switch (G__97563) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_100268 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_100268(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_100275 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_100275(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_100284 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_100284(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_100289 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_100289(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_100294 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_100294(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___100306 = arguments.length;
var i__4737__auto___100307 = (0);
while(true){
if((i__4737__auto___100307 < len__4736__auto___100306)){
args__4742__auto__.push((arguments[i__4737__auto___100307]));

var G__100309 = (i__4737__auto___100307 + (1));
i__4737__auto___100307 = G__100309;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__97627){
var map__97629 = p__97627;
var map__97629__$1 = (((((!((map__97629 == null))))?(((((map__97629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__97629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__97629):map__97629);
var opts = map__97629__$1;
var statearr_97633_100313 = state;
(statearr_97633_100313[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_97639_100314 = state;
(statearr_97639_100314[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_97640_100322 = state;
(statearr_97640_100322[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq97617){
var G__97618 = cljs.core.first(seq97617);
var seq97617__$1 = cljs.core.next(seq97617);
var G__97619 = cljs.core.first(seq97617__$1);
var seq97617__$2 = cljs.core.next(seq97617__$1);
var G__97620 = cljs.core.first(seq97617__$2);
var seq97617__$3 = cljs.core.next(seq97617__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97618,G__97619,G__97620,seq97617__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async97655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async97655 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta97656){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta97656 = meta97656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97657,meta97656__$1){
var self__ = this;
var _97657__$1 = this;
return (new cljs.core.async.t_cljs$core$async97655(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta97656__$1));
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97657){
var self__ = this;
var _97657__$1 = this;
return self__.meta97656;
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async97655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async97655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta97656","meta97656",914084685,null)], null);
}));

(cljs.core.async.t_cljs$core$async97655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async97655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async97655");

(cljs.core.async.t_cljs$core$async97655.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async97655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async97655.
 */
cljs.core.async.__GT_t_cljs$core$async97655 = (function cljs$core$async$mix_$___GT_t_cljs$core$async97655(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta97656){
return (new cljs.core.async.t_cljs$core$async97655(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta97656));
});

}

return (new cljs.core.async.t_cljs$core$async97655(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__83165__auto___100342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_97819){
var state_val_97820 = (state_97819[(1)]);
if((state_val_97820 === (7))){
var inst_97719 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
var statearr_97821_100344 = state_97819__$1;
(statearr_97821_100344[(2)] = inst_97719);

(statearr_97821_100344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (20))){
var inst_97737 = (state_97819[(7)]);
var state_97819__$1 = state_97819;
var statearr_97827_100345 = state_97819__$1;
(statearr_97827_100345[(2)] = inst_97737);

(statearr_97827_100345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (27))){
var state_97819__$1 = state_97819;
var statearr_97828_100347 = state_97819__$1;
(statearr_97828_100347[(2)] = null);

(statearr_97828_100347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (1))){
var inst_97706 = (state_97819[(8)]);
var inst_97706__$1 = calc_state();
var inst_97708 = (inst_97706__$1 == null);
var inst_97709 = cljs.core.not(inst_97708);
var state_97819__$1 = (function (){var statearr_97830 = state_97819;
(statearr_97830[(8)] = inst_97706__$1);

return statearr_97830;
})();
if(inst_97709){
var statearr_97831_100349 = state_97819__$1;
(statearr_97831_100349[(1)] = (2));

} else {
var statearr_97833_100350 = state_97819__$1;
(statearr_97833_100350[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (24))){
var inst_97772 = (state_97819[(9)]);
var inst_97788 = (state_97819[(10)]);
var inst_97763 = (state_97819[(11)]);
var inst_97788__$1 = (inst_97763.cljs$core$IFn$_invoke$arity$1 ? inst_97763.cljs$core$IFn$_invoke$arity$1(inst_97772) : inst_97763.call(null,inst_97772));
var state_97819__$1 = (function (){var statearr_97837 = state_97819;
(statearr_97837[(10)] = inst_97788__$1);

return statearr_97837;
})();
if(cljs.core.truth_(inst_97788__$1)){
var statearr_97838_100351 = state_97819__$1;
(statearr_97838_100351[(1)] = (29));

} else {
var statearr_97839_100352 = state_97819__$1;
(statearr_97839_100352[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (4))){
var inst_97722 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97722)){
var statearr_97863_100353 = state_97819__$1;
(statearr_97863_100353[(1)] = (8));

} else {
var statearr_97864_100354 = state_97819__$1;
(statearr_97864_100354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (15))){
var inst_97757 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97757)){
var statearr_97866_100356 = state_97819__$1;
(statearr_97866_100356[(1)] = (19));

} else {
var statearr_97867_100357 = state_97819__$1;
(statearr_97867_100357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (21))){
var inst_97762 = (state_97819[(12)]);
var inst_97762__$1 = (state_97819[(2)]);
var inst_97763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97762__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_97764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97762__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_97765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97762__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_97819__$1 = (function (){var statearr_97872 = state_97819;
(statearr_97872[(12)] = inst_97762__$1);

(statearr_97872[(13)] = inst_97764);

(statearr_97872[(11)] = inst_97763);

return statearr_97872;
})();
return cljs.core.async.ioc_alts_BANG_(state_97819__$1,(22),inst_97765);
} else {
if((state_val_97820 === (31))){
var inst_97799 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97799)){
var statearr_97882_100358 = state_97819__$1;
(statearr_97882_100358[(1)] = (32));

} else {
var statearr_97891_100359 = state_97819__$1;
(statearr_97891_100359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (32))){
var inst_97771 = (state_97819[(14)]);
var state_97819__$1 = state_97819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_97819__$1,(35),out,inst_97771);
} else {
if((state_val_97820 === (33))){
var inst_97762 = (state_97819[(12)]);
var inst_97737 = inst_97762;
var state_97819__$1 = (function (){var statearr_97893 = state_97819;
(statearr_97893[(7)] = inst_97737);

return statearr_97893;
})();
var statearr_97894_100363 = state_97819__$1;
(statearr_97894_100363[(2)] = null);

(statearr_97894_100363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (13))){
var inst_97737 = (state_97819[(7)]);
var inst_97744 = inst_97737.cljs$lang$protocol_mask$partition0$;
var inst_97745 = (inst_97744 & (64));
var inst_97747 = inst_97737.cljs$core$ISeq$;
var inst_97748 = (cljs.core.PROTOCOL_SENTINEL === inst_97747);
var inst_97749 = ((inst_97745) || (inst_97748));
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97749)){
var statearr_97895_100368 = state_97819__$1;
(statearr_97895_100368[(1)] = (16));

} else {
var statearr_97896_100369 = state_97819__$1;
(statearr_97896_100369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (22))){
var inst_97772 = (state_97819[(9)]);
var inst_97771 = (state_97819[(14)]);
var inst_97770 = (state_97819[(2)]);
var inst_97771__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97770,(0),null);
var inst_97772__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_97770,(1),null);
var inst_97773 = (inst_97771__$1 == null);
var inst_97774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97772__$1,change);
var inst_97775 = ((inst_97773) || (inst_97774));
var state_97819__$1 = (function (){var statearr_97898 = state_97819;
(statearr_97898[(9)] = inst_97772__$1);

(statearr_97898[(14)] = inst_97771__$1);

return statearr_97898;
})();
if(cljs.core.truth_(inst_97775)){
var statearr_97902_100371 = state_97819__$1;
(statearr_97902_100371[(1)] = (23));

} else {
var statearr_97903_100372 = state_97819__$1;
(statearr_97903_100372[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (36))){
var inst_97762 = (state_97819[(12)]);
var inst_97737 = inst_97762;
var state_97819__$1 = (function (){var statearr_97904 = state_97819;
(statearr_97904[(7)] = inst_97737);

return statearr_97904;
})();
var statearr_97905_100373 = state_97819__$1;
(statearr_97905_100373[(2)] = null);

(statearr_97905_100373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (29))){
var inst_97788 = (state_97819[(10)]);
var state_97819__$1 = state_97819;
var statearr_97906_100374 = state_97819__$1;
(statearr_97906_100374[(2)] = inst_97788);

(statearr_97906_100374[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (6))){
var state_97819__$1 = state_97819;
var statearr_97910_100375 = state_97819__$1;
(statearr_97910_100375[(2)] = false);

(statearr_97910_100375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (28))){
var inst_97783 = (state_97819[(2)]);
var inst_97784 = calc_state();
var inst_97737 = inst_97784;
var state_97819__$1 = (function (){var statearr_97914 = state_97819;
(statearr_97914[(15)] = inst_97783);

(statearr_97914[(7)] = inst_97737);

return statearr_97914;
})();
var statearr_97915_100376 = state_97819__$1;
(statearr_97915_100376[(2)] = null);

(statearr_97915_100376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (25))){
var inst_97814 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
var statearr_97916_100377 = state_97819__$1;
(statearr_97916_100377[(2)] = inst_97814);

(statearr_97916_100377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (34))){
var inst_97812 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
var statearr_97919_100378 = state_97819__$1;
(statearr_97919_100378[(2)] = inst_97812);

(statearr_97919_100378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (17))){
var state_97819__$1 = state_97819;
var statearr_97920_100379 = state_97819__$1;
(statearr_97920_100379[(2)] = false);

(statearr_97920_100379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (3))){
var state_97819__$1 = state_97819;
var statearr_97922_100380 = state_97819__$1;
(statearr_97922_100380[(2)] = false);

(statearr_97922_100380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (12))){
var inst_97816 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97819__$1,inst_97816);
} else {
if((state_val_97820 === (2))){
var inst_97706 = (state_97819[(8)]);
var inst_97711 = inst_97706.cljs$lang$protocol_mask$partition0$;
var inst_97712 = (inst_97711 & (64));
var inst_97713 = inst_97706.cljs$core$ISeq$;
var inst_97714 = (cljs.core.PROTOCOL_SENTINEL === inst_97713);
var inst_97715 = ((inst_97712) || (inst_97714));
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97715)){
var statearr_97923_100382 = state_97819__$1;
(statearr_97923_100382[(1)] = (5));

} else {
var statearr_97924_100383 = state_97819__$1;
(statearr_97924_100383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (23))){
var inst_97771 = (state_97819[(14)]);
var inst_97778 = (inst_97771 == null);
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97778)){
var statearr_97928_100384 = state_97819__$1;
(statearr_97928_100384[(1)] = (26));

} else {
var statearr_97931_100385 = state_97819__$1;
(statearr_97931_100385[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (35))){
var inst_97803 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
if(cljs.core.truth_(inst_97803)){
var statearr_97939_100386 = state_97819__$1;
(statearr_97939_100386[(1)] = (36));

} else {
var statearr_97942_100388 = state_97819__$1;
(statearr_97942_100388[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (19))){
var inst_97737 = (state_97819[(7)]);
var inst_97759 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_97737);
var state_97819__$1 = state_97819;
var statearr_97943_100390 = state_97819__$1;
(statearr_97943_100390[(2)] = inst_97759);

(statearr_97943_100390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (11))){
var inst_97737 = (state_97819[(7)]);
var inst_97741 = (inst_97737 == null);
var inst_97742 = cljs.core.not(inst_97741);
var state_97819__$1 = state_97819;
if(inst_97742){
var statearr_97944_100391 = state_97819__$1;
(statearr_97944_100391[(1)] = (13));

} else {
var statearr_97945_100393 = state_97819__$1;
(statearr_97945_100393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (9))){
var inst_97706 = (state_97819[(8)]);
var state_97819__$1 = state_97819;
var statearr_97950_100395 = state_97819__$1;
(statearr_97950_100395[(2)] = inst_97706);

(statearr_97950_100395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (5))){
var state_97819__$1 = state_97819;
var statearr_97951_100398 = state_97819__$1;
(statearr_97951_100398[(2)] = true);

(statearr_97951_100398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (14))){
var state_97819__$1 = state_97819;
var statearr_97952_100400 = state_97819__$1;
(statearr_97952_100400[(2)] = false);

(statearr_97952_100400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (26))){
var inst_97772 = (state_97819[(9)]);
var inst_97780 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_97772);
var state_97819__$1 = state_97819;
var statearr_97957_100402 = state_97819__$1;
(statearr_97957_100402[(2)] = inst_97780);

(statearr_97957_100402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (16))){
var state_97819__$1 = state_97819;
var statearr_97958_100407 = state_97819__$1;
(statearr_97958_100407[(2)] = true);

(statearr_97958_100407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (38))){
var inst_97808 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
var statearr_97959_100408 = state_97819__$1;
(statearr_97959_100408[(2)] = inst_97808);

(statearr_97959_100408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (30))){
var inst_97772 = (state_97819[(9)]);
var inst_97764 = (state_97819[(13)]);
var inst_97763 = (state_97819[(11)]);
var inst_97794 = cljs.core.empty_QMARK_(inst_97763);
var inst_97795 = (inst_97764.cljs$core$IFn$_invoke$arity$1 ? inst_97764.cljs$core$IFn$_invoke$arity$1(inst_97772) : inst_97764.call(null,inst_97772));
var inst_97796 = cljs.core.not(inst_97795);
var inst_97797 = ((inst_97794) && (inst_97796));
var state_97819__$1 = state_97819;
var statearr_97966_100410 = state_97819__$1;
(statearr_97966_100410[(2)] = inst_97797);

(statearr_97966_100410[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (10))){
var inst_97706 = (state_97819[(8)]);
var inst_97727 = (state_97819[(2)]);
var inst_97728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97727,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_97729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97727,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_97736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_97727,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_97737 = inst_97706;
var state_97819__$1 = (function (){var statearr_97970 = state_97819;
(statearr_97970[(16)] = inst_97736);

(statearr_97970[(17)] = inst_97729);

(statearr_97970[(7)] = inst_97737);

(statearr_97970[(18)] = inst_97728);

return statearr_97970;
})();
var statearr_97971_100416 = state_97819__$1;
(statearr_97971_100416[(2)] = null);

(statearr_97971_100416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (18))){
var inst_97754 = (state_97819[(2)]);
var state_97819__$1 = state_97819;
var statearr_97974_100417 = state_97819__$1;
(statearr_97974_100417[(2)] = inst_97754);

(statearr_97974_100417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (37))){
var state_97819__$1 = state_97819;
var statearr_97975_100419 = state_97819__$1;
(statearr_97975_100419[(2)] = null);

(statearr_97975_100419[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97820 === (8))){
var inst_97706 = (state_97819[(8)]);
var inst_97724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_97706);
var state_97819__$1 = state_97819;
var statearr_97976_100421 = state_97819__$1;
(statearr_97976_100421[(2)] = inst_97724);

(statearr_97976_100421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__81414__auto__ = null;
var cljs$core$async$mix_$_state_machine__81414__auto____0 = (function (){
var statearr_97982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97982[(0)] = cljs$core$async$mix_$_state_machine__81414__auto__);

(statearr_97982[(1)] = (1));

return statearr_97982;
});
var cljs$core$async$mix_$_state_machine__81414__auto____1 = (function (state_97819){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_97819);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e97983){var ex__81417__auto__ = e97983;
var statearr_97984_100428 = state_97819;
(statearr_97984_100428[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_97819[(4)]))){
var statearr_97986_100431 = state_97819;
(statearr_97986_100431[(1)] = cljs.core.first((state_97819[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100432 = state_97819;
state_97819 = G__100432;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__81414__auto__ = function(state_97819){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__81414__auto____1.call(this,state_97819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__81414__auto____0;
cljs$core$async$mix_$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__81414__auto____1;
return cljs$core$async$mix_$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_97987 = f__83166__auto__();
(statearr_97987[(6)] = c__83165__auto___100342);

return statearr_97987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_100440 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_100440(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_100453 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_100453(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_100465 = (function() {
var G__100466 = null;
var G__100466__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__100466__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__100466 = function(p,v){
switch(arguments.length){
case 1:
return G__100466__1.call(this,p);
case 2:
return G__100466__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__100466.cljs$core$IFn$_invoke$arity$1 = G__100466__1;
G__100466.cljs$core$IFn$_invoke$arity$2 = G__100466__2;
return G__100466;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__98019 = arguments.length;
switch (G__98019) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_100465(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_100465(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__98037 = arguments.length;
switch (G__98037) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__98030_SHARP_){
if(cljs.core.truth_((p1__98030_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__98030_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__98030_SHARP_.call(null,topic)))){
return p1__98030_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__98030_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async98049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async98049 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta98050){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta98050 = meta98050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_98051,meta98050__$1){
var self__ = this;
var _98051__$1 = this;
return (new cljs.core.async.t_cljs$core$async98049(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta98050__$1));
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_98051){
var self__ = this;
var _98051__$1 = this;
return self__.meta98050;
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async98049.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async98049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta98050","meta98050",-588715605,null)], null);
}));

(cljs.core.async.t_cljs$core$async98049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async98049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async98049");

(cljs.core.async.t_cljs$core$async98049.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async98049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async98049.
 */
cljs.core.async.__GT_t_cljs$core$async98049 = (function cljs$core$async$__GT_t_cljs$core$async98049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta98050){
return (new cljs.core.async.t_cljs$core$async98049(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta98050));
});

}

return (new cljs.core.async.t_cljs$core$async98049(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__83165__auto___100490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98163){
var state_val_98165 = (state_98163[(1)]);
if((state_val_98165 === (7))){
var inst_98158 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98169_100491 = state_98163__$1;
(statearr_98169_100491[(2)] = inst_98158);

(statearr_98169_100491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (20))){
var state_98163__$1 = state_98163;
var statearr_98171_100493 = state_98163__$1;
(statearr_98171_100493[(2)] = null);

(statearr_98171_100493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (1))){
var state_98163__$1 = state_98163;
var statearr_98172_100496 = state_98163__$1;
(statearr_98172_100496[(2)] = null);

(statearr_98172_100496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (24))){
var inst_98139 = (state_98163[(7)]);
var inst_98150 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_98139);
var state_98163__$1 = state_98163;
var statearr_98178_100497 = state_98163__$1;
(statearr_98178_100497[(2)] = inst_98150);

(statearr_98178_100497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (4))){
var inst_98083 = (state_98163[(8)]);
var inst_98083__$1 = (state_98163[(2)]);
var inst_98086 = (inst_98083__$1 == null);
var state_98163__$1 = (function (){var statearr_98187 = state_98163;
(statearr_98187[(8)] = inst_98083__$1);

return statearr_98187;
})();
if(cljs.core.truth_(inst_98086)){
var statearr_98194_100500 = state_98163__$1;
(statearr_98194_100500[(1)] = (5));

} else {
var statearr_98197_100501 = state_98163__$1;
(statearr_98197_100501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (15))){
var inst_98133 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98206_100504 = state_98163__$1;
(statearr_98206_100504[(2)] = inst_98133);

(statearr_98206_100504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (21))){
var inst_98155 = (state_98163[(2)]);
var state_98163__$1 = (function (){var statearr_98207 = state_98163;
(statearr_98207[(9)] = inst_98155);

return statearr_98207;
})();
var statearr_98208_100507 = state_98163__$1;
(statearr_98208_100507[(2)] = null);

(statearr_98208_100507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (13))){
var inst_98112 = (state_98163[(10)]);
var inst_98116 = cljs.core.chunked_seq_QMARK_(inst_98112);
var state_98163__$1 = state_98163;
if(inst_98116){
var statearr_98215_100508 = state_98163__$1;
(statearr_98215_100508[(1)] = (16));

} else {
var statearr_98216_100509 = state_98163__$1;
(statearr_98216_100509[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (22))){
var inst_98145 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
if(cljs.core.truth_(inst_98145)){
var statearr_98219_100510 = state_98163__$1;
(statearr_98219_100510[(1)] = (23));

} else {
var statearr_98221_100511 = state_98163__$1;
(statearr_98221_100511[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (6))){
var inst_98141 = (state_98163[(11)]);
var inst_98083 = (state_98163[(8)]);
var inst_98139 = (state_98163[(7)]);
var inst_98139__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_98083) : topic_fn.call(null,inst_98083));
var inst_98140 = cljs.core.deref(mults);
var inst_98141__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_98140,inst_98139__$1);
var state_98163__$1 = (function (){var statearr_98228 = state_98163;
(statearr_98228[(11)] = inst_98141__$1);

(statearr_98228[(7)] = inst_98139__$1);

return statearr_98228;
})();
if(cljs.core.truth_(inst_98141__$1)){
var statearr_98234_100513 = state_98163__$1;
(statearr_98234_100513[(1)] = (19));

} else {
var statearr_98236_100514 = state_98163__$1;
(statearr_98236_100514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (25))){
var inst_98152 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98268_100516 = state_98163__$1;
(statearr_98268_100516[(2)] = inst_98152);

(statearr_98268_100516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (17))){
var inst_98112 = (state_98163[(10)]);
var inst_98124 = cljs.core.first(inst_98112);
var inst_98125 = cljs.core.async.muxch_STAR_(inst_98124);
var inst_98126 = cljs.core.async.close_BANG_(inst_98125);
var inst_98127 = cljs.core.next(inst_98112);
var inst_98097 = inst_98127;
var inst_98098 = null;
var inst_98099 = (0);
var inst_98100 = (0);
var state_98163__$1 = (function (){var statearr_98273 = state_98163;
(statearr_98273[(12)] = inst_98097);

(statearr_98273[(13)] = inst_98100);

(statearr_98273[(14)] = inst_98099);

(statearr_98273[(15)] = inst_98098);

(statearr_98273[(16)] = inst_98126);

return statearr_98273;
})();
var statearr_98275_100523 = state_98163__$1;
(statearr_98275_100523[(2)] = null);

(statearr_98275_100523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (3))){
var inst_98160 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98163__$1,inst_98160);
} else {
if((state_val_98165 === (12))){
var inst_98135 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98282_100527 = state_98163__$1;
(statearr_98282_100527[(2)] = inst_98135);

(statearr_98282_100527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (2))){
var state_98163__$1 = state_98163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98163__$1,(4),ch);
} else {
if((state_val_98165 === (23))){
var state_98163__$1 = state_98163;
var statearr_98283_100533 = state_98163__$1;
(statearr_98283_100533[(2)] = null);

(statearr_98283_100533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (19))){
var inst_98141 = (state_98163[(11)]);
var inst_98083 = (state_98163[(8)]);
var inst_98143 = cljs.core.async.muxch_STAR_(inst_98141);
var state_98163__$1 = state_98163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98163__$1,(22),inst_98143,inst_98083);
} else {
if((state_val_98165 === (11))){
var inst_98097 = (state_98163[(12)]);
var inst_98112 = (state_98163[(10)]);
var inst_98112__$1 = cljs.core.seq(inst_98097);
var state_98163__$1 = (function (){var statearr_98295 = state_98163;
(statearr_98295[(10)] = inst_98112__$1);

return statearr_98295;
})();
if(inst_98112__$1){
var statearr_98298_100547 = state_98163__$1;
(statearr_98298_100547[(1)] = (13));

} else {
var statearr_98300_100549 = state_98163__$1;
(statearr_98300_100549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (9))){
var inst_98137 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98301_100550 = state_98163__$1;
(statearr_98301_100550[(2)] = inst_98137);

(statearr_98301_100550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (5))){
var inst_98094 = cljs.core.deref(mults);
var inst_98095 = cljs.core.vals(inst_98094);
var inst_98096 = cljs.core.seq(inst_98095);
var inst_98097 = inst_98096;
var inst_98098 = null;
var inst_98099 = (0);
var inst_98100 = (0);
var state_98163__$1 = (function (){var statearr_98303 = state_98163;
(statearr_98303[(12)] = inst_98097);

(statearr_98303[(13)] = inst_98100);

(statearr_98303[(14)] = inst_98099);

(statearr_98303[(15)] = inst_98098);

return statearr_98303;
})();
var statearr_98305_100558 = state_98163__$1;
(statearr_98305_100558[(2)] = null);

(statearr_98305_100558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (14))){
var state_98163__$1 = state_98163;
var statearr_98309_100562 = state_98163__$1;
(statearr_98309_100562[(2)] = null);

(statearr_98309_100562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (16))){
var inst_98112 = (state_98163[(10)]);
var inst_98119 = cljs.core.chunk_first(inst_98112);
var inst_98120 = cljs.core.chunk_rest(inst_98112);
var inst_98121 = cljs.core.count(inst_98119);
var inst_98097 = inst_98120;
var inst_98098 = inst_98119;
var inst_98099 = inst_98121;
var inst_98100 = (0);
var state_98163__$1 = (function (){var statearr_98310 = state_98163;
(statearr_98310[(12)] = inst_98097);

(statearr_98310[(13)] = inst_98100);

(statearr_98310[(14)] = inst_98099);

(statearr_98310[(15)] = inst_98098);

return statearr_98310;
})();
var statearr_98311_100572 = state_98163__$1;
(statearr_98311_100572[(2)] = null);

(statearr_98311_100572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (10))){
var inst_98097 = (state_98163[(12)]);
var inst_98100 = (state_98163[(13)]);
var inst_98099 = (state_98163[(14)]);
var inst_98098 = (state_98163[(15)]);
var inst_98105 = cljs.core._nth(inst_98098,inst_98100);
var inst_98106 = cljs.core.async.muxch_STAR_(inst_98105);
var inst_98107 = cljs.core.async.close_BANG_(inst_98106);
var inst_98108 = (inst_98100 + (1));
var tmp98306 = inst_98097;
var tmp98307 = inst_98099;
var tmp98308 = inst_98098;
var inst_98097__$1 = tmp98306;
var inst_98098__$1 = tmp98308;
var inst_98099__$1 = tmp98307;
var inst_98100__$1 = inst_98108;
var state_98163__$1 = (function (){var statearr_98316 = state_98163;
(statearr_98316[(12)] = inst_98097__$1);

(statearr_98316[(13)] = inst_98100__$1);

(statearr_98316[(14)] = inst_98099__$1);

(statearr_98316[(15)] = inst_98098__$1);

(statearr_98316[(17)] = inst_98107);

return statearr_98316;
})();
var statearr_98318_100588 = state_98163__$1;
(statearr_98318_100588[(2)] = null);

(statearr_98318_100588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (18))){
var inst_98130 = (state_98163[(2)]);
var state_98163__$1 = state_98163;
var statearr_98319_100589 = state_98163__$1;
(statearr_98319_100589[(2)] = inst_98130);

(statearr_98319_100589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98165 === (8))){
var inst_98100 = (state_98163[(13)]);
var inst_98099 = (state_98163[(14)]);
var inst_98102 = (inst_98100 < inst_98099);
var inst_98103 = inst_98102;
var state_98163__$1 = state_98163;
if(cljs.core.truth_(inst_98103)){
var statearr_98323_100600 = state_98163__$1;
(statearr_98323_100600[(1)] = (10));

} else {
var statearr_98324_100603 = state_98163__$1;
(statearr_98324_100603[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_98325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98325[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_98325[(1)] = (1));

return statearr_98325;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_98163){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98163);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e98326){var ex__81417__auto__ = e98326;
var statearr_98327_100605 = state_98163;
(statearr_98327_100605[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98163[(4)]))){
var statearr_98329_100606 = state_98163;
(statearr_98329_100606[(1)] = cljs.core.first((state_98163[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100607 = state_98163;
state_98163 = G__100607;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_98163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_98163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_98332 = f__83166__auto__();
(statearr_98332[(6)] = c__83165__auto___100490);

return statearr_98332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__98334 = arguments.length;
switch (G__98334) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__98347 = arguments.length;
switch (G__98347) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__98357 = arguments.length;
switch (G__98357) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__83165__auto___100630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98428){
var state_val_98429 = (state_98428[(1)]);
if((state_val_98429 === (7))){
var state_98428__$1 = state_98428;
var statearr_98440_100633 = state_98428__$1;
(statearr_98440_100633[(2)] = null);

(statearr_98440_100633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (1))){
var state_98428__$1 = state_98428;
var statearr_98441_100634 = state_98428__$1;
(statearr_98441_100634[(2)] = null);

(statearr_98441_100634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (4))){
var inst_98370 = (state_98428[(7)]);
var inst_98371 = (state_98428[(8)]);
var inst_98373 = (inst_98371 < inst_98370);
var state_98428__$1 = state_98428;
if(cljs.core.truth_(inst_98373)){
var statearr_98442_100637 = state_98428__$1;
(statearr_98442_100637[(1)] = (6));

} else {
var statearr_98444_100638 = state_98428__$1;
(statearr_98444_100638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (15))){
var inst_98406 = (state_98428[(9)]);
var inst_98415 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_98406);
var state_98428__$1 = state_98428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98428__$1,(17),out,inst_98415);
} else {
if((state_val_98429 === (13))){
var inst_98406 = (state_98428[(9)]);
var inst_98406__$1 = (state_98428[(2)]);
var inst_98411 = cljs.core.some(cljs.core.nil_QMARK_,inst_98406__$1);
var state_98428__$1 = (function (){var statearr_98453 = state_98428;
(statearr_98453[(9)] = inst_98406__$1);

return statearr_98453;
})();
if(cljs.core.truth_(inst_98411)){
var statearr_98456_100650 = state_98428__$1;
(statearr_98456_100650[(1)] = (14));

} else {
var statearr_98458_100651 = state_98428__$1;
(statearr_98458_100651[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (6))){
var state_98428__$1 = state_98428;
var statearr_98460_100654 = state_98428__$1;
(statearr_98460_100654[(2)] = null);

(statearr_98460_100654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (17))){
var inst_98417 = (state_98428[(2)]);
var state_98428__$1 = (function (){var statearr_98474 = state_98428;
(statearr_98474[(10)] = inst_98417);

return statearr_98474;
})();
var statearr_98475_100657 = state_98428__$1;
(statearr_98475_100657[(2)] = null);

(statearr_98475_100657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (3))){
var inst_98422 = (state_98428[(2)]);
var state_98428__$1 = state_98428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98428__$1,inst_98422);
} else {
if((state_val_98429 === (12))){
var _ = (function (){var statearr_98481 = state_98428;
(statearr_98481[(4)] = cljs.core.rest((state_98428[(4)])));

return statearr_98481;
})();
var state_98428__$1 = state_98428;
var ex98470 = (state_98428__$1[(2)]);
var statearr_98482_100659 = state_98428__$1;
(statearr_98482_100659[(5)] = ex98470);


if((ex98470 instanceof Object)){
var statearr_98490_100661 = state_98428__$1;
(statearr_98490_100661[(1)] = (11));

(statearr_98490_100661[(5)] = null);

} else {
throw ex98470;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (2))){
var inst_98365 = cljs.core.reset_BANG_(dctr,cnt);
var inst_98370 = cnt;
var inst_98371 = (0);
var state_98428__$1 = (function (){var statearr_98501 = state_98428;
(statearr_98501[(7)] = inst_98370);

(statearr_98501[(8)] = inst_98371);

(statearr_98501[(11)] = inst_98365);

return statearr_98501;
})();
var statearr_98502_100664 = state_98428__$1;
(statearr_98502_100664[(2)] = null);

(statearr_98502_100664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (11))){
var inst_98382 = (state_98428[(2)]);
var inst_98384 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_98428__$1 = (function (){var statearr_98503 = state_98428;
(statearr_98503[(12)] = inst_98382);

return statearr_98503;
})();
var statearr_98504_100665 = state_98428__$1;
(statearr_98504_100665[(2)] = inst_98384);

(statearr_98504_100665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (9))){
var inst_98371 = (state_98428[(8)]);
var _ = (function (){var statearr_98507 = state_98428;
(statearr_98507[(4)] = cljs.core.cons((12),(state_98428[(4)])));

return statearr_98507;
})();
var inst_98390 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_98371) : chs__$1.call(null,inst_98371));
var inst_98391 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_98371) : done.call(null,inst_98371));
var inst_98392 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_98390,inst_98391);
var ___$1 = (function (){var statearr_98509 = state_98428;
(statearr_98509[(4)] = cljs.core.rest((state_98428[(4)])));

return statearr_98509;
})();
var state_98428__$1 = state_98428;
var statearr_98510_100667 = state_98428__$1;
(statearr_98510_100667[(2)] = inst_98392);

(statearr_98510_100667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (5))){
var inst_98404 = (state_98428[(2)]);
var state_98428__$1 = (function (){var statearr_98512 = state_98428;
(statearr_98512[(13)] = inst_98404);

return statearr_98512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98428__$1,(13),dchan);
} else {
if((state_val_98429 === (14))){
var inst_98413 = cljs.core.async.close_BANG_(out);
var state_98428__$1 = state_98428;
var statearr_98514_100669 = state_98428__$1;
(statearr_98514_100669[(2)] = inst_98413);

(statearr_98514_100669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (16))){
var inst_98420 = (state_98428[(2)]);
var state_98428__$1 = state_98428;
var statearr_98517_100670 = state_98428__$1;
(statearr_98517_100670[(2)] = inst_98420);

(statearr_98517_100670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (10))){
var inst_98371 = (state_98428[(8)]);
var inst_98395 = (state_98428[(2)]);
var inst_98396 = (inst_98371 + (1));
var inst_98371__$1 = inst_98396;
var state_98428__$1 = (function (){var statearr_98519 = state_98428;
(statearr_98519[(8)] = inst_98371__$1);

(statearr_98519[(14)] = inst_98395);

return statearr_98519;
})();
var statearr_98520_100672 = state_98428__$1;
(statearr_98520_100672[(2)] = null);

(statearr_98520_100672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98429 === (8))){
var inst_98400 = (state_98428[(2)]);
var state_98428__$1 = state_98428;
var statearr_98521_100674 = state_98428__$1;
(statearr_98521_100674[(2)] = inst_98400);

(statearr_98521_100674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_98522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98522[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_98522[(1)] = (1));

return statearr_98522;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_98428){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98428);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e98523){var ex__81417__auto__ = e98523;
var statearr_98524_100691 = state_98428;
(statearr_98524_100691[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98428[(4)]))){
var statearr_98525_100692 = state_98428;
(statearr_98525_100692[(1)] = cljs.core.first((state_98428[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100698 = state_98428;
state_98428 = G__100698;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_98428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_98428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_98527 = f__83166__auto__();
(statearr_98527[(6)] = c__83165__auto___100630);

return statearr_98527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__98540 = arguments.length;
switch (G__98540) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___100717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98586){
var state_val_98587 = (state_98586[(1)]);
if((state_val_98587 === (7))){
var inst_98564 = (state_98586[(7)]);
var inst_98565 = (state_98586[(8)]);
var inst_98564__$1 = (state_98586[(2)]);
var inst_98565__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_98564__$1,(0),null);
var inst_98566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_98564__$1,(1),null);
var inst_98567 = (inst_98565__$1 == null);
var state_98586__$1 = (function (){var statearr_98595 = state_98586;
(statearr_98595[(7)] = inst_98564__$1);

(statearr_98595[(8)] = inst_98565__$1);

(statearr_98595[(9)] = inst_98566);

return statearr_98595;
})();
if(cljs.core.truth_(inst_98567)){
var statearr_98596_100721 = state_98586__$1;
(statearr_98596_100721[(1)] = (8));

} else {
var statearr_98597_100726 = state_98586__$1;
(statearr_98597_100726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (1))){
var inst_98551 = cljs.core.vec(chs);
var inst_98552 = inst_98551;
var state_98586__$1 = (function (){var statearr_98598 = state_98586;
(statearr_98598[(10)] = inst_98552);

return statearr_98598;
})();
var statearr_98599_100727 = state_98586__$1;
(statearr_98599_100727[(2)] = null);

(statearr_98599_100727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (4))){
var inst_98552 = (state_98586[(10)]);
var state_98586__$1 = state_98586;
return cljs.core.async.ioc_alts_BANG_(state_98586__$1,(7),inst_98552);
} else {
if((state_val_98587 === (6))){
var inst_98582 = (state_98586[(2)]);
var state_98586__$1 = state_98586;
var statearr_98603_100736 = state_98586__$1;
(statearr_98603_100736[(2)] = inst_98582);

(statearr_98603_100736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (3))){
var inst_98584 = (state_98586[(2)]);
var state_98586__$1 = state_98586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98586__$1,inst_98584);
} else {
if((state_val_98587 === (2))){
var inst_98552 = (state_98586[(10)]);
var inst_98554 = cljs.core.count(inst_98552);
var inst_98555 = (inst_98554 > (0));
var state_98586__$1 = state_98586;
if(cljs.core.truth_(inst_98555)){
var statearr_98611_100739 = state_98586__$1;
(statearr_98611_100739[(1)] = (4));

} else {
var statearr_98613_100740 = state_98586__$1;
(statearr_98613_100740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (11))){
var inst_98552 = (state_98586[(10)]);
var inst_98575 = (state_98586[(2)]);
var tmp98605 = inst_98552;
var inst_98552__$1 = tmp98605;
var state_98586__$1 = (function (){var statearr_98619 = state_98586;
(statearr_98619[(10)] = inst_98552__$1);

(statearr_98619[(11)] = inst_98575);

return statearr_98619;
})();
var statearr_98620_100741 = state_98586__$1;
(statearr_98620_100741[(2)] = null);

(statearr_98620_100741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (9))){
var inst_98565 = (state_98586[(8)]);
var state_98586__$1 = state_98586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98586__$1,(11),out,inst_98565);
} else {
if((state_val_98587 === (5))){
var inst_98580 = cljs.core.async.close_BANG_(out);
var state_98586__$1 = state_98586;
var statearr_98628_100742 = state_98586__$1;
(statearr_98628_100742[(2)] = inst_98580);

(statearr_98628_100742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (10))){
var inst_98578 = (state_98586[(2)]);
var state_98586__$1 = state_98586;
var statearr_98629_100746 = state_98586__$1;
(statearr_98629_100746[(2)] = inst_98578);

(statearr_98629_100746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98587 === (8))){
var inst_98552 = (state_98586[(10)]);
var inst_98564 = (state_98586[(7)]);
var inst_98565 = (state_98586[(8)]);
var inst_98566 = (state_98586[(9)]);
var inst_98570 = (function (){var cs = inst_98552;
var vec__98560 = inst_98564;
var v = inst_98565;
var c = inst_98566;
return (function (p1__98533_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__98533_SHARP_);
});
})();
var inst_98571 = cljs.core.filterv(inst_98570,inst_98552);
var inst_98552__$1 = inst_98571;
var state_98586__$1 = (function (){var statearr_98633 = state_98586;
(statearr_98633[(10)] = inst_98552__$1);

return statearr_98633;
})();
var statearr_98634_100753 = state_98586__$1;
(statearr_98634_100753[(2)] = null);

(statearr_98634_100753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_98640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_98640[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_98640[(1)] = (1));

return statearr_98640;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_98586){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98586);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e98641){var ex__81417__auto__ = e98641;
var statearr_98642_100756 = state_98586;
(statearr_98642_100756[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98586[(4)]))){
var statearr_98643_100760 = state_98586;
(statearr_98643_100760[(1)] = cljs.core.first((state_98586[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100761 = state_98586;
state_98586 = G__100761;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_98586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_98586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_98645 = f__83166__auto__();
(statearr_98645[(6)] = c__83165__auto___100717);

return statearr_98645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__98648 = arguments.length;
switch (G__98648) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___100764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98676){
var state_val_98677 = (state_98676[(1)]);
if((state_val_98677 === (7))){
var inst_98656 = (state_98676[(7)]);
var inst_98656__$1 = (state_98676[(2)]);
var inst_98657 = (inst_98656__$1 == null);
var inst_98658 = cljs.core.not(inst_98657);
var state_98676__$1 = (function (){var statearr_98680 = state_98676;
(statearr_98680[(7)] = inst_98656__$1);

return statearr_98680;
})();
if(inst_98658){
var statearr_98682_100770 = state_98676__$1;
(statearr_98682_100770[(1)] = (8));

} else {
var statearr_98683_100771 = state_98676__$1;
(statearr_98683_100771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (1))){
var inst_98651 = (0);
var state_98676__$1 = (function (){var statearr_98684 = state_98676;
(statearr_98684[(8)] = inst_98651);

return statearr_98684;
})();
var statearr_98685_100773 = state_98676__$1;
(statearr_98685_100773[(2)] = null);

(statearr_98685_100773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (4))){
var state_98676__$1 = state_98676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98676__$1,(7),ch);
} else {
if((state_val_98677 === (6))){
var inst_98669 = (state_98676[(2)]);
var state_98676__$1 = state_98676;
var statearr_98687_100782 = state_98676__$1;
(statearr_98687_100782[(2)] = inst_98669);

(statearr_98687_100782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (3))){
var inst_98671 = (state_98676[(2)]);
var inst_98672 = cljs.core.async.close_BANG_(out);
var state_98676__$1 = (function (){var statearr_98688 = state_98676;
(statearr_98688[(9)] = inst_98671);

return statearr_98688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_98676__$1,inst_98672);
} else {
if((state_val_98677 === (2))){
var inst_98651 = (state_98676[(8)]);
var inst_98653 = (inst_98651 < n);
var state_98676__$1 = state_98676;
if(cljs.core.truth_(inst_98653)){
var statearr_98689_100790 = state_98676__$1;
(statearr_98689_100790[(1)] = (4));

} else {
var statearr_98690_100791 = state_98676__$1;
(statearr_98690_100791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (11))){
var inst_98651 = (state_98676[(8)]);
var inst_98661 = (state_98676[(2)]);
var inst_98662 = (inst_98651 + (1));
var inst_98651__$1 = inst_98662;
var state_98676__$1 = (function (){var statearr_98691 = state_98676;
(statearr_98691[(10)] = inst_98661);

(statearr_98691[(8)] = inst_98651__$1);

return statearr_98691;
})();
var statearr_98692_100795 = state_98676__$1;
(statearr_98692_100795[(2)] = null);

(statearr_98692_100795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (9))){
var state_98676__$1 = state_98676;
var statearr_98693_100796 = state_98676__$1;
(statearr_98693_100796[(2)] = null);

(statearr_98693_100796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (5))){
var state_98676__$1 = state_98676;
var statearr_98694_100797 = state_98676__$1;
(statearr_98694_100797[(2)] = null);

(statearr_98694_100797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (10))){
var inst_98666 = (state_98676[(2)]);
var state_98676__$1 = state_98676;
var statearr_98695_100801 = state_98676__$1;
(statearr_98695_100801[(2)] = inst_98666);

(statearr_98695_100801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98677 === (8))){
var inst_98656 = (state_98676[(7)]);
var state_98676__$1 = state_98676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98676__$1,(11),out,inst_98656);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_98696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_98696[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_98696[(1)] = (1));

return statearr_98696;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_98676){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98676);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e98697){var ex__81417__auto__ = e98697;
var statearr_98698_100805 = state_98676;
(statearr_98698_100805[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98676[(4)]))){
var statearr_98699_100807 = state_98676;
(statearr_98699_100807[(1)] = cljs.core.first((state_98676[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100810 = state_98676;
state_98676 = G__100810;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_98676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_98676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_98704 = f__83166__auto__();
(statearr_98704[(6)] = c__83165__auto___100764);

return statearr_98704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async98707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async98707 = (function (f,ch,meta98708){
this.f = f;
this.ch = ch;
this.meta98708 = meta98708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_98709,meta98708__$1){
var self__ = this;
var _98709__$1 = this;
return (new cljs.core.async.t_cljs$core$async98707(self__.f,self__.ch,meta98708__$1));
}));

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_98709){
var self__ = this;
var _98709__$1 = this;
return self__.meta98708;
}));

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async98715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async98715 = (function (f,ch,meta98708,_,fn1,meta98716){
this.f = f;
this.ch = ch;
this.meta98708 = meta98708;
this._ = _;
this.fn1 = fn1;
this.meta98716 = meta98716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_98717,meta98716__$1){
var self__ = this;
var _98717__$1 = this;
return (new cljs.core.async.t_cljs$core$async98715(self__.f,self__.ch,self__.meta98708,self__._,self__.fn1,meta98716__$1));
}));

(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_98717){
var self__ = this;
var _98717__$1 = this;
return self__.meta98716;
}));

(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async98715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__98706_SHARP_){
var G__98726 = (((p1__98706_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__98706_SHARP_) : self__.f.call(null,p1__98706_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__98726) : f1.call(null,G__98726));
});
}));

(cljs.core.async.t_cljs$core$async98715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta98708","meta98708",1797095097,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async98707","cljs.core.async/t_cljs$core$async98707",929482079,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta98716","meta98716",-1343175703,null)], null);
}));

(cljs.core.async.t_cljs$core$async98715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async98715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async98715");

(cljs.core.async.t_cljs$core$async98715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async98715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async98715.
 */
cljs.core.async.__GT_t_cljs$core$async98715 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async98715(f__$1,ch__$1,meta98708__$1,___$2,fn1__$1,meta98716){
return (new cljs.core.async.t_cljs$core$async98715(f__$1,ch__$1,meta98708__$1,___$2,fn1__$1,meta98716));
});

}

return (new cljs.core.async.t_cljs$core$async98715(self__.f,self__.ch,self__.meta98708,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__98738 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__98738) : self__.f.call(null,G__98738));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async98707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta98708","meta98708",1797095097,null)], null);
}));

(cljs.core.async.t_cljs$core$async98707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async98707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async98707");

(cljs.core.async.t_cljs$core$async98707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async98707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async98707.
 */
cljs.core.async.__GT_t_cljs$core$async98707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async98707(f__$1,ch__$1,meta98708){
return (new cljs.core.async.t_cljs$core$async98707(f__$1,ch__$1,meta98708));
});

}

return (new cljs.core.async.t_cljs$core$async98707(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async98752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async98752 = (function (f,ch,meta98753){
this.f = f;
this.ch = ch;
this.meta98753 = meta98753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_98754,meta98753__$1){
var self__ = this;
var _98754__$1 = this;
return (new cljs.core.async.t_cljs$core$async98752(self__.f,self__.ch,meta98753__$1));
}));

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_98754){
var self__ = this;
var _98754__$1 = this;
return self__.meta98753;
}));

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async98752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta98753","meta98753",-736311384,null)], null);
}));

(cljs.core.async.t_cljs$core$async98752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async98752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async98752");

(cljs.core.async.t_cljs$core$async98752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async98752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async98752.
 */
cljs.core.async.__GT_t_cljs$core$async98752 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async98752(f__$1,ch__$1,meta98753){
return (new cljs.core.async.t_cljs$core$async98752(f__$1,ch__$1,meta98753));
});

}

return (new cljs.core.async.t_cljs$core$async98752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async98767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async98767 = (function (p,ch,meta98768){
this.p = p;
this.ch = ch;
this.meta98768 = meta98768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_98769,meta98768__$1){
var self__ = this;
var _98769__$1 = this;
return (new cljs.core.async.t_cljs$core$async98767(self__.p,self__.ch,meta98768__$1));
}));

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_98769){
var self__ = this;
var _98769__$1 = this;
return self__.meta98768;
}));

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async98767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async98767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta98768","meta98768",-8473265,null)], null);
}));

(cljs.core.async.t_cljs$core$async98767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async98767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async98767");

(cljs.core.async.t_cljs$core$async98767.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async98767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async98767.
 */
cljs.core.async.__GT_t_cljs$core$async98767 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async98767(p__$1,ch__$1,meta98768){
return (new cljs.core.async.t_cljs$core$async98767(p__$1,ch__$1,meta98768));
});

}

return (new cljs.core.async.t_cljs$core$async98767(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__98784 = arguments.length;
switch (G__98784) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___100880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98813){
var state_val_98814 = (state_98813[(1)]);
if((state_val_98814 === (7))){
var inst_98807 = (state_98813[(2)]);
var state_98813__$1 = state_98813;
var statearr_98816_100886 = state_98813__$1;
(statearr_98816_100886[(2)] = inst_98807);

(statearr_98816_100886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (1))){
var state_98813__$1 = state_98813;
var statearr_98817_100888 = state_98813__$1;
(statearr_98817_100888[(2)] = null);

(statearr_98817_100888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (4))){
var inst_98791 = (state_98813[(7)]);
var inst_98791__$1 = (state_98813[(2)]);
var inst_98792 = (inst_98791__$1 == null);
var state_98813__$1 = (function (){var statearr_98824 = state_98813;
(statearr_98824[(7)] = inst_98791__$1);

return statearr_98824;
})();
if(cljs.core.truth_(inst_98792)){
var statearr_98825_100895 = state_98813__$1;
(statearr_98825_100895[(1)] = (5));

} else {
var statearr_98826_100896 = state_98813__$1;
(statearr_98826_100896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (6))){
var inst_98791 = (state_98813[(7)]);
var inst_98798 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_98791) : p.call(null,inst_98791));
var state_98813__$1 = state_98813;
if(cljs.core.truth_(inst_98798)){
var statearr_98827_100898 = state_98813__$1;
(statearr_98827_100898[(1)] = (8));

} else {
var statearr_98828_100899 = state_98813__$1;
(statearr_98828_100899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (3))){
var inst_98809 = (state_98813[(2)]);
var state_98813__$1 = state_98813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98813__$1,inst_98809);
} else {
if((state_val_98814 === (2))){
var state_98813__$1 = state_98813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98813__$1,(4),ch);
} else {
if((state_val_98814 === (11))){
var inst_98801 = (state_98813[(2)]);
var state_98813__$1 = state_98813;
var statearr_98831_100904 = state_98813__$1;
(statearr_98831_100904[(2)] = inst_98801);

(statearr_98831_100904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (9))){
var state_98813__$1 = state_98813;
var statearr_98832_100905 = state_98813__$1;
(statearr_98832_100905[(2)] = null);

(statearr_98832_100905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (5))){
var inst_98796 = cljs.core.async.close_BANG_(out);
var state_98813__$1 = state_98813;
var statearr_98833_100907 = state_98813__$1;
(statearr_98833_100907[(2)] = inst_98796);

(statearr_98833_100907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (10))){
var inst_98804 = (state_98813[(2)]);
var state_98813__$1 = (function (){var statearr_98834 = state_98813;
(statearr_98834[(8)] = inst_98804);

return statearr_98834;
})();
var statearr_98835_100911 = state_98813__$1;
(statearr_98835_100911[(2)] = null);

(statearr_98835_100911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98814 === (8))){
var inst_98791 = (state_98813[(7)]);
var state_98813__$1 = state_98813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98813__$1,(11),out,inst_98791);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_98838 = [null,null,null,null,null,null,null,null,null];
(statearr_98838[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_98838[(1)] = (1));

return statearr_98838;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_98813){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98813);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e98839){var ex__81417__auto__ = e98839;
var statearr_98840_100914 = state_98813;
(statearr_98840_100914[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98813[(4)]))){
var statearr_98841_100915 = state_98813;
(statearr_98841_100915[(1)] = cljs.core.first((state_98813[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__100916 = state_98813;
state_98813 = G__100916;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_98813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_98813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_98842 = f__83166__auto__();
(statearr_98842[(6)] = c__83165__auto___100880);

return statearr_98842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__98848 = arguments.length;
switch (G__98848) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_98920){
var state_val_98921 = (state_98920[(1)]);
if((state_val_98921 === (7))){
var inst_98916 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
var statearr_98928_100927 = state_98920__$1;
(statearr_98928_100927[(2)] = inst_98916);

(statearr_98928_100927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (20))){
var inst_98884 = (state_98920[(7)]);
var inst_98896 = (state_98920[(2)]);
var inst_98897 = cljs.core.next(inst_98884);
var inst_98869 = inst_98897;
var inst_98870 = null;
var inst_98871 = (0);
var inst_98872 = (0);
var state_98920__$1 = (function (){var statearr_98935 = state_98920;
(statearr_98935[(8)] = inst_98869);

(statearr_98935[(9)] = inst_98896);

(statearr_98935[(10)] = inst_98871);

(statearr_98935[(11)] = inst_98872);

(statearr_98935[(12)] = inst_98870);

return statearr_98935;
})();
var statearr_98938_100928 = state_98920__$1;
(statearr_98938_100928[(2)] = null);

(statearr_98938_100928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (1))){
var state_98920__$1 = state_98920;
var statearr_98941_100937 = state_98920__$1;
(statearr_98941_100937[(2)] = null);

(statearr_98941_100937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (4))){
var inst_98858 = (state_98920[(13)]);
var inst_98858__$1 = (state_98920[(2)]);
var inst_98859 = (inst_98858__$1 == null);
var state_98920__$1 = (function (){var statearr_98942 = state_98920;
(statearr_98942[(13)] = inst_98858__$1);

return statearr_98942;
})();
if(cljs.core.truth_(inst_98859)){
var statearr_98943_100945 = state_98920__$1;
(statearr_98943_100945[(1)] = (5));

} else {
var statearr_98944_100946 = state_98920__$1;
(statearr_98944_100946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (15))){
var state_98920__$1 = state_98920;
var statearr_98958_100947 = state_98920__$1;
(statearr_98958_100947[(2)] = null);

(statearr_98958_100947[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (21))){
var state_98920__$1 = state_98920;
var statearr_98959_100948 = state_98920__$1;
(statearr_98959_100948[(2)] = null);

(statearr_98959_100948[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (13))){
var inst_98869 = (state_98920[(8)]);
var inst_98871 = (state_98920[(10)]);
var inst_98872 = (state_98920[(11)]);
var inst_98870 = (state_98920[(12)]);
var inst_98880 = (state_98920[(2)]);
var inst_98881 = (inst_98872 + (1));
var tmp98945 = inst_98869;
var tmp98946 = inst_98871;
var tmp98947 = inst_98870;
var inst_98869__$1 = tmp98945;
var inst_98870__$1 = tmp98947;
var inst_98871__$1 = tmp98946;
var inst_98872__$1 = inst_98881;
var state_98920__$1 = (function (){var statearr_98963 = state_98920;
(statearr_98963[(8)] = inst_98869__$1);

(statearr_98963[(14)] = inst_98880);

(statearr_98963[(10)] = inst_98871__$1);

(statearr_98963[(11)] = inst_98872__$1);

(statearr_98963[(12)] = inst_98870__$1);

return statearr_98963;
})();
var statearr_98966_100951 = state_98920__$1;
(statearr_98966_100951[(2)] = null);

(statearr_98966_100951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (22))){
var state_98920__$1 = state_98920;
var statearr_98968_100952 = state_98920__$1;
(statearr_98968_100952[(2)] = null);

(statearr_98968_100952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (6))){
var inst_98858 = (state_98920[(13)]);
var inst_98867 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_98858) : f.call(null,inst_98858));
var inst_98868 = cljs.core.seq(inst_98867);
var inst_98869 = inst_98868;
var inst_98870 = null;
var inst_98871 = (0);
var inst_98872 = (0);
var state_98920__$1 = (function (){var statearr_98969 = state_98920;
(statearr_98969[(8)] = inst_98869);

(statearr_98969[(10)] = inst_98871);

(statearr_98969[(11)] = inst_98872);

(statearr_98969[(12)] = inst_98870);

return statearr_98969;
})();
var statearr_98970_100963 = state_98920__$1;
(statearr_98970_100963[(2)] = null);

(statearr_98970_100963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (17))){
var inst_98884 = (state_98920[(7)]);
var inst_98888 = cljs.core.chunk_first(inst_98884);
var inst_98889 = cljs.core.chunk_rest(inst_98884);
var inst_98890 = cljs.core.count(inst_98888);
var inst_98869 = inst_98889;
var inst_98870 = inst_98888;
var inst_98871 = inst_98890;
var inst_98872 = (0);
var state_98920__$1 = (function (){var statearr_98982 = state_98920;
(statearr_98982[(8)] = inst_98869);

(statearr_98982[(10)] = inst_98871);

(statearr_98982[(11)] = inst_98872);

(statearr_98982[(12)] = inst_98870);

return statearr_98982;
})();
var statearr_98988_100969 = state_98920__$1;
(statearr_98988_100969[(2)] = null);

(statearr_98988_100969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (3))){
var inst_98918 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_98920__$1,inst_98918);
} else {
if((state_val_98921 === (12))){
var inst_98906 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
var statearr_98989_100972 = state_98920__$1;
(statearr_98989_100972[(2)] = inst_98906);

(statearr_98989_100972[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (2))){
var state_98920__$1 = state_98920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_98920__$1,(4),in$);
} else {
if((state_val_98921 === (23))){
var inst_98914 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
var statearr_98995_100975 = state_98920__$1;
(statearr_98995_100975[(2)] = inst_98914);

(statearr_98995_100975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (19))){
var inst_98900 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
var statearr_98999_100978 = state_98920__$1;
(statearr_98999_100978[(2)] = inst_98900);

(statearr_98999_100978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (11))){
var inst_98869 = (state_98920[(8)]);
var inst_98884 = (state_98920[(7)]);
var inst_98884__$1 = cljs.core.seq(inst_98869);
var state_98920__$1 = (function (){var statearr_99002 = state_98920;
(statearr_99002[(7)] = inst_98884__$1);

return statearr_99002;
})();
if(inst_98884__$1){
var statearr_99003_100981 = state_98920__$1;
(statearr_99003_100981[(1)] = (14));

} else {
var statearr_99004_100983 = state_98920__$1;
(statearr_99004_100983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (9))){
var inst_98908 = (state_98920[(2)]);
var inst_98909 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_98920__$1 = (function (){var statearr_99009 = state_98920;
(statearr_99009[(15)] = inst_98908);

return statearr_99009;
})();
if(cljs.core.truth_(inst_98909)){
var statearr_99010_100996 = state_98920__$1;
(statearr_99010_100996[(1)] = (21));

} else {
var statearr_99013_100997 = state_98920__$1;
(statearr_99013_100997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (5))){
var inst_98861 = cljs.core.async.close_BANG_(out);
var state_98920__$1 = state_98920;
var statearr_99015_100998 = state_98920__$1;
(statearr_99015_100998[(2)] = inst_98861);

(statearr_99015_100998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (14))){
var inst_98884 = (state_98920[(7)]);
var inst_98886 = cljs.core.chunked_seq_QMARK_(inst_98884);
var state_98920__$1 = state_98920;
if(inst_98886){
var statearr_99016_101001 = state_98920__$1;
(statearr_99016_101001[(1)] = (17));

} else {
var statearr_99019_101002 = state_98920__$1;
(statearr_99019_101002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (16))){
var inst_98904 = (state_98920[(2)]);
var state_98920__$1 = state_98920;
var statearr_99020_101005 = state_98920__$1;
(statearr_99020_101005[(2)] = inst_98904);

(statearr_99020_101005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_98921 === (10))){
var inst_98872 = (state_98920[(11)]);
var inst_98870 = (state_98920[(12)]);
var inst_98878 = cljs.core._nth(inst_98870,inst_98872);
var state_98920__$1 = state_98920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98920__$1,(13),out,inst_98878);
} else {
if((state_val_98921 === (18))){
var inst_98884 = (state_98920[(7)]);
var inst_98894 = cljs.core.first(inst_98884);
var state_98920__$1 = state_98920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_98920__$1,(20),out,inst_98894);
} else {
if((state_val_98921 === (8))){
var inst_98871 = (state_98920[(10)]);
var inst_98872 = (state_98920[(11)]);
var inst_98875 = (inst_98872 < inst_98871);
var inst_98876 = inst_98875;
var state_98920__$1 = state_98920;
if(cljs.core.truth_(inst_98876)){
var statearr_99023_101013 = state_98920__$1;
(statearr_99023_101013[(1)] = (10));

} else {
var statearr_99024_101014 = state_98920__$1;
(statearr_99024_101014[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____0 = (function (){
var statearr_99027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__);

(statearr_99027[(1)] = (1));

return statearr_99027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____1 = (function (state_98920){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_98920);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e99029){var ex__81417__auto__ = e99029;
var statearr_99030_101015 = state_98920;
(statearr_99030_101015[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_98920[(4)]))){
var statearr_99031_101016 = state_98920;
(statearr_99031_101016[(1)] = cljs.core.first((state_98920[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101022 = state_98920;
state_98920 = G__101022;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__ = function(state_98920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____1.call(this,state_98920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__81414__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_99036 = f__83166__auto__();
(statearr_99036[(6)] = c__83165__auto__);

return statearr_99036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__99039 = arguments.length;
switch (G__99039) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__99054 = arguments.length;
switch (G__99054) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__99064 = arguments.length;
switch (G__99064) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___101047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_99106){
var state_val_99107 = (state_99106[(1)]);
if((state_val_99107 === (7))){
var inst_99101 = (state_99106[(2)]);
var state_99106__$1 = state_99106;
var statearr_99112_101055 = state_99106__$1;
(statearr_99112_101055[(2)] = inst_99101);

(statearr_99112_101055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (1))){
var inst_99078 = null;
var state_99106__$1 = (function (){var statearr_99113 = state_99106;
(statearr_99113[(7)] = inst_99078);

return statearr_99113;
})();
var statearr_99114_101057 = state_99106__$1;
(statearr_99114_101057[(2)] = null);

(statearr_99114_101057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (4))){
var inst_99082 = (state_99106[(8)]);
var inst_99082__$1 = (state_99106[(2)]);
var inst_99087 = (inst_99082__$1 == null);
var inst_99088 = cljs.core.not(inst_99087);
var state_99106__$1 = (function (){var statearr_99123 = state_99106;
(statearr_99123[(8)] = inst_99082__$1);

return statearr_99123;
})();
if(inst_99088){
var statearr_99126_101061 = state_99106__$1;
(statearr_99126_101061[(1)] = (5));

} else {
var statearr_99127_101062 = state_99106__$1;
(statearr_99127_101062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (6))){
var state_99106__$1 = state_99106;
var statearr_99132_101063 = state_99106__$1;
(statearr_99132_101063[(2)] = null);

(statearr_99132_101063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (3))){
var inst_99103 = (state_99106[(2)]);
var inst_99104 = cljs.core.async.close_BANG_(out);
var state_99106__$1 = (function (){var statearr_99136 = state_99106;
(statearr_99136[(9)] = inst_99103);

return statearr_99136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_99106__$1,inst_99104);
} else {
if((state_val_99107 === (2))){
var state_99106__$1 = state_99106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_99106__$1,(4),ch);
} else {
if((state_val_99107 === (11))){
var inst_99082 = (state_99106[(8)]);
var inst_99095 = (state_99106[(2)]);
var inst_99078 = inst_99082;
var state_99106__$1 = (function (){var statearr_99137 = state_99106;
(statearr_99137[(10)] = inst_99095);

(statearr_99137[(7)] = inst_99078);

return statearr_99137;
})();
var statearr_99140_101082 = state_99106__$1;
(statearr_99140_101082[(2)] = null);

(statearr_99140_101082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (9))){
var inst_99082 = (state_99106[(8)]);
var state_99106__$1 = state_99106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_99106__$1,(11),out,inst_99082);
} else {
if((state_val_99107 === (5))){
var inst_99078 = (state_99106[(7)]);
var inst_99082 = (state_99106[(8)]);
var inst_99090 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_99082,inst_99078);
var state_99106__$1 = state_99106;
if(inst_99090){
var statearr_99143_101090 = state_99106__$1;
(statearr_99143_101090[(1)] = (8));

} else {
var statearr_99145_101091 = state_99106__$1;
(statearr_99145_101091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (10))){
var inst_99098 = (state_99106[(2)]);
var state_99106__$1 = state_99106;
var statearr_99149_101102 = state_99106__$1;
(statearr_99149_101102[(2)] = inst_99098);

(statearr_99149_101102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99107 === (8))){
var inst_99078 = (state_99106[(7)]);
var tmp99141 = inst_99078;
var inst_99078__$1 = tmp99141;
var state_99106__$1 = (function (){var statearr_99151 = state_99106;
(statearr_99151[(7)] = inst_99078__$1);

return statearr_99151;
})();
var statearr_99152_101110 = state_99106__$1;
(statearr_99152_101110[(2)] = null);

(statearr_99152_101110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_99156 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_99156[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_99156[(1)] = (1));

return statearr_99156;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_99106){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_99106);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e99162){var ex__81417__auto__ = e99162;
var statearr_99163_101115 = state_99106;
(statearr_99163_101115[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_99106[(4)]))){
var statearr_99167_101116 = state_99106;
(statearr_99167_101116[(1)] = cljs.core.first((state_99106[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101118 = state_99106;
state_99106 = G__101118;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_99106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_99106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_99169 = f__83166__auto__();
(statearr_99169[(6)] = c__83165__auto___101047);

return statearr_99169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__99173 = arguments.length;
switch (G__99173) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___101129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_99254){
var state_val_99256 = (state_99254[(1)]);
if((state_val_99256 === (7))){
var inst_99240 = (state_99254[(2)]);
var state_99254__$1 = state_99254;
var statearr_99279_101136 = state_99254__$1;
(statearr_99279_101136[(2)] = inst_99240);

(statearr_99279_101136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (1))){
var inst_99194 = (new Array(n));
var inst_99196 = inst_99194;
var inst_99197 = (0);
var state_99254__$1 = (function (){var statearr_99284 = state_99254;
(statearr_99284[(7)] = inst_99197);

(statearr_99284[(8)] = inst_99196);

return statearr_99284;
})();
var statearr_99285_101144 = state_99254__$1;
(statearr_99285_101144[(2)] = null);

(statearr_99285_101144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (4))){
var inst_99204 = (state_99254[(9)]);
var inst_99204__$1 = (state_99254[(2)]);
var inst_99205 = (inst_99204__$1 == null);
var inst_99206 = cljs.core.not(inst_99205);
var state_99254__$1 = (function (){var statearr_99291 = state_99254;
(statearr_99291[(9)] = inst_99204__$1);

return statearr_99291;
})();
if(inst_99206){
var statearr_99293_101147 = state_99254__$1;
(statearr_99293_101147[(1)] = (5));

} else {
var statearr_99295_101149 = state_99254__$1;
(statearr_99295_101149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (15))){
var inst_99234 = (state_99254[(2)]);
var state_99254__$1 = state_99254;
var statearr_99299_101151 = state_99254__$1;
(statearr_99299_101151[(2)] = inst_99234);

(statearr_99299_101151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (13))){
var state_99254__$1 = state_99254;
var statearr_99301_101154 = state_99254__$1;
(statearr_99301_101154[(2)] = null);

(statearr_99301_101154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (6))){
var inst_99197 = (state_99254[(7)]);
var inst_99230 = (inst_99197 > (0));
var state_99254__$1 = state_99254;
if(cljs.core.truth_(inst_99230)){
var statearr_99305_101162 = state_99254__$1;
(statearr_99305_101162[(1)] = (12));

} else {
var statearr_99307_101165 = state_99254__$1;
(statearr_99307_101165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (3))){
var inst_99242 = (state_99254[(2)]);
var state_99254__$1 = state_99254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_99254__$1,inst_99242);
} else {
if((state_val_99256 === (12))){
var inst_99196 = (state_99254[(8)]);
var inst_99232 = cljs.core.vec(inst_99196);
var state_99254__$1 = state_99254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_99254__$1,(15),out,inst_99232);
} else {
if((state_val_99256 === (2))){
var state_99254__$1 = state_99254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_99254__$1,(4),ch);
} else {
if((state_val_99256 === (11))){
var inst_99224 = (state_99254[(2)]);
var inst_99225 = (new Array(n));
var inst_99196 = inst_99225;
var inst_99197 = (0);
var state_99254__$1 = (function (){var statearr_99316 = state_99254;
(statearr_99316[(7)] = inst_99197);

(statearr_99316[(10)] = inst_99224);

(statearr_99316[(8)] = inst_99196);

return statearr_99316;
})();
var statearr_99317_101170 = state_99254__$1;
(statearr_99317_101170[(2)] = null);

(statearr_99317_101170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (9))){
var inst_99196 = (state_99254[(8)]);
var inst_99219 = cljs.core.vec(inst_99196);
var state_99254__$1 = state_99254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_99254__$1,(11),out,inst_99219);
} else {
if((state_val_99256 === (5))){
var inst_99197 = (state_99254[(7)]);
var inst_99204 = (state_99254[(9)]);
var inst_99196 = (state_99254[(8)]);
var inst_99213 = (state_99254[(11)]);
var inst_99208 = (inst_99196[inst_99197] = inst_99204);
var inst_99213__$1 = (inst_99197 + (1));
var inst_99214 = (inst_99213__$1 < n);
var state_99254__$1 = (function (){var statearr_99325 = state_99254;
(statearr_99325[(11)] = inst_99213__$1);

(statearr_99325[(12)] = inst_99208);

return statearr_99325;
})();
if(cljs.core.truth_(inst_99214)){
var statearr_99326_101185 = state_99254__$1;
(statearr_99326_101185[(1)] = (8));

} else {
var statearr_99327_101186 = state_99254__$1;
(statearr_99327_101186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (14))){
var inst_99237 = (state_99254[(2)]);
var inst_99238 = cljs.core.async.close_BANG_(out);
var state_99254__$1 = (function (){var statearr_99332 = state_99254;
(statearr_99332[(13)] = inst_99237);

return statearr_99332;
})();
var statearr_99334_101190 = state_99254__$1;
(statearr_99334_101190[(2)] = inst_99238);

(statearr_99334_101190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (10))){
var inst_99228 = (state_99254[(2)]);
var state_99254__$1 = state_99254;
var statearr_99336_101193 = state_99254__$1;
(statearr_99336_101193[(2)] = inst_99228);

(statearr_99336_101193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99256 === (8))){
var inst_99196 = (state_99254[(8)]);
var inst_99213 = (state_99254[(11)]);
var tmp99329 = inst_99196;
var inst_99196__$1 = tmp99329;
var inst_99197 = inst_99213;
var state_99254__$1 = (function (){var statearr_99337 = state_99254;
(statearr_99337[(7)] = inst_99197);

(statearr_99337[(8)] = inst_99196__$1);

return statearr_99337;
})();
var statearr_99338_101201 = state_99254__$1;
(statearr_99338_101201[(2)] = null);

(statearr_99338_101201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_99344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99344[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_99344[(1)] = (1));

return statearr_99344;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_99254){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_99254);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e99347){var ex__81417__auto__ = e99347;
var statearr_99348_101204 = state_99254;
(statearr_99348_101204[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_99254[(4)]))){
var statearr_99349_101207 = state_99254;
(statearr_99349_101207[(1)] = cljs.core.first((state_99254[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101211 = state_99254;
state_99254 = G__101211;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_99254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_99254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_99351 = f__83166__auto__();
(statearr_99351[(6)] = c__83165__auto___101129);

return statearr_99351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__99359 = arguments.length;
switch (G__99359) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__83165__auto___101219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_99412){
var state_val_99413 = (state_99412[(1)]);
if((state_val_99413 === (7))){
var inst_99407 = (state_99412[(2)]);
var state_99412__$1 = state_99412;
var statearr_99418_101224 = state_99412__$1;
(statearr_99418_101224[(2)] = inst_99407);

(statearr_99418_101224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (1))){
var inst_99364 = [];
var inst_99365 = inst_99364;
var inst_99366 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_99412__$1 = (function (){var statearr_99419 = state_99412;
(statearr_99419[(7)] = inst_99365);

(statearr_99419[(8)] = inst_99366);

return statearr_99419;
})();
var statearr_99424_101227 = state_99412__$1;
(statearr_99424_101227[(2)] = null);

(statearr_99424_101227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (4))){
var inst_99370 = (state_99412[(9)]);
var inst_99370__$1 = (state_99412[(2)]);
var inst_99371 = (inst_99370__$1 == null);
var inst_99372 = cljs.core.not(inst_99371);
var state_99412__$1 = (function (){var statearr_99427 = state_99412;
(statearr_99427[(9)] = inst_99370__$1);

return statearr_99427;
})();
if(inst_99372){
var statearr_99428_101232 = state_99412__$1;
(statearr_99428_101232[(1)] = (5));

} else {
var statearr_99430_101233 = state_99412__$1;
(statearr_99430_101233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (15))){
var inst_99401 = (state_99412[(2)]);
var state_99412__$1 = state_99412;
var statearr_99433_101236 = state_99412__$1;
(statearr_99433_101236[(2)] = inst_99401);

(statearr_99433_101236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (13))){
var state_99412__$1 = state_99412;
var statearr_99434_101238 = state_99412__$1;
(statearr_99434_101238[(2)] = null);

(statearr_99434_101238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (6))){
var inst_99365 = (state_99412[(7)]);
var inst_99396 = inst_99365.length;
var inst_99397 = (inst_99396 > (0));
var state_99412__$1 = state_99412;
if(cljs.core.truth_(inst_99397)){
var statearr_99436_101239 = state_99412__$1;
(statearr_99436_101239[(1)] = (12));

} else {
var statearr_99437_101240 = state_99412__$1;
(statearr_99437_101240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (3))){
var inst_99409 = (state_99412[(2)]);
var state_99412__$1 = state_99412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_99412__$1,inst_99409);
} else {
if((state_val_99413 === (12))){
var inst_99365 = (state_99412[(7)]);
var inst_99399 = cljs.core.vec(inst_99365);
var state_99412__$1 = state_99412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_99412__$1,(15),out,inst_99399);
} else {
if((state_val_99413 === (2))){
var state_99412__$1 = state_99412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_99412__$1,(4),ch);
} else {
if((state_val_99413 === (11))){
var inst_99370 = (state_99412[(9)]);
var inst_99375 = (state_99412[(10)]);
var inst_99387 = (state_99412[(2)]);
var inst_99390 = [];
var inst_99391 = inst_99390.push(inst_99370);
var inst_99365 = inst_99390;
var inst_99366 = inst_99375;
var state_99412__$1 = (function (){var statearr_99462 = state_99412;
(statearr_99462[(11)] = inst_99391);

(statearr_99462[(7)] = inst_99365);

(statearr_99462[(8)] = inst_99366);

(statearr_99462[(12)] = inst_99387);

return statearr_99462;
})();
var statearr_99465_101248 = state_99412__$1;
(statearr_99465_101248[(2)] = null);

(statearr_99465_101248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (9))){
var inst_99365 = (state_99412[(7)]);
var inst_99385 = cljs.core.vec(inst_99365);
var state_99412__$1 = state_99412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_99412__$1,(11),out,inst_99385);
} else {
if((state_val_99413 === (5))){
var inst_99370 = (state_99412[(9)]);
var inst_99375 = (state_99412[(10)]);
var inst_99366 = (state_99412[(8)]);
var inst_99375__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_99370) : f.call(null,inst_99370));
var inst_99377 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_99375__$1,inst_99366);
var inst_99378 = cljs.core.keyword_identical_QMARK_(inst_99366,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_99379 = ((inst_99377) || (inst_99378));
var state_99412__$1 = (function (){var statearr_99474 = state_99412;
(statearr_99474[(10)] = inst_99375__$1);

return statearr_99474;
})();
if(cljs.core.truth_(inst_99379)){
var statearr_99476_101260 = state_99412__$1;
(statearr_99476_101260[(1)] = (8));

} else {
var statearr_99477_101261 = state_99412__$1;
(statearr_99477_101261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (14))){
var inst_99404 = (state_99412[(2)]);
var inst_99405 = cljs.core.async.close_BANG_(out);
var state_99412__$1 = (function (){var statearr_99481 = state_99412;
(statearr_99481[(13)] = inst_99404);

return statearr_99481;
})();
var statearr_99482_101262 = state_99412__$1;
(statearr_99482_101262[(2)] = inst_99405);

(statearr_99482_101262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (10))){
var inst_99394 = (state_99412[(2)]);
var state_99412__$1 = state_99412;
var statearr_99484_101264 = state_99412__$1;
(statearr_99484_101264[(2)] = inst_99394);

(statearr_99484_101264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_99413 === (8))){
var inst_99370 = (state_99412[(9)]);
var inst_99375 = (state_99412[(10)]);
var inst_99365 = (state_99412[(7)]);
var inst_99382 = inst_99365.push(inst_99370);
var tmp99479 = inst_99365;
var inst_99365__$1 = tmp99479;
var inst_99366 = inst_99375;
var state_99412__$1 = (function (){var statearr_99487 = state_99412;
(statearr_99487[(7)] = inst_99365__$1);

(statearr_99487[(8)] = inst_99366);

(statearr_99487[(14)] = inst_99382);

return statearr_99487;
})();
var statearr_99488_101278 = state_99412__$1;
(statearr_99488_101278[(2)] = null);

(statearr_99488_101278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__81414__auto__ = null;
var cljs$core$async$state_machine__81414__auto____0 = (function (){
var statearr_99492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_99492[(0)] = cljs$core$async$state_machine__81414__auto__);

(statearr_99492[(1)] = (1));

return statearr_99492;
});
var cljs$core$async$state_machine__81414__auto____1 = (function (state_99412){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_99412);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e99494){var ex__81417__auto__ = e99494;
var statearr_99496_101297 = state_99412;
(statearr_99496_101297[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_99412[(4)]))){
var statearr_99499_101298 = state_99412;
(statearr_99499_101298[(1)] = cljs.core.first((state_99412[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101306 = state_99412;
state_99412 = G__101306;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
cljs$core$async$state_machine__81414__auto__ = function(state_99412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__81414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__81414__auto____1.call(this,state_99412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__81414__auto____0;
cljs$core$async$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__81414__auto____1;
return cljs$core$async$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_99502 = f__83166__auto__();
(statearr_99502[(6)] = c__83165__auto___101219);

return statearr_99502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
