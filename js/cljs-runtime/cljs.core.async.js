goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__74332 = arguments.length;
switch (G__74332) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74339 = (function (f,blockable,meta74340){
this.f = f;
this.blockable = blockable;
this.meta74340 = meta74340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74341,meta74340__$1){
var self__ = this;
var _74341__$1 = this;
return (new cljs.core.async.t_cljs$core$async74339(self__.f,self__.blockable,meta74340__$1));
}));

(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74341){
var self__ = this;
var _74341__$1 = this;
return self__.meta74340;
}));

(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async74339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async74339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta74340","meta74340",-1006566899,null)], null);
}));

(cljs.core.async.t_cljs$core$async74339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74339");

(cljs.core.async.t_cljs$core$async74339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74339.
 */
cljs.core.async.__GT_t_cljs$core$async74339 = (function cljs$core$async$__GT_t_cljs$core$async74339(f__$1,blockable__$1,meta74340){
return (new cljs.core.async.t_cljs$core$async74339(f__$1,blockable__$1,meta74340));
});

}

return (new cljs.core.async.t_cljs$core$async74339(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__74361 = arguments.length;
switch (G__74361) {
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
var G__74368 = arguments.length;
switch (G__74368) {
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
var G__74378 = arguments.length;
switch (G__74378) {
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
var val_77108 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_77108) : fn1.call(null,val_77108));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_77108) : fn1.call(null,val_77108));
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
var G__74394 = arguments.length;
switch (G__74394) {
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
var n__4613__auto___77122 = n;
var x_77123 = (0);
while(true){
if((x_77123 < n__4613__auto___77122)){
(a[x_77123] = x_77123);

var G__77124 = (x_77123 + (1));
x_77123 = G__77124;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74406 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74406 = (function (flag,meta74407){
this.flag = flag;
this.meta74407 = meta74407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74408,meta74407__$1){
var self__ = this;
var _74408__$1 = this;
return (new cljs.core.async.t_cljs$core$async74406(self__.flag,meta74407__$1));
}));

(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74408){
var self__ = this;
var _74408__$1 = this;
return self__.meta74407;
}));

(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async74406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta74407","meta74407",-92681872,null)], null);
}));

(cljs.core.async.t_cljs$core$async74406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74406");

(cljs.core.async.t_cljs$core$async74406.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74406.
 */
cljs.core.async.__GT_t_cljs$core$async74406 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async74406(flag__$1,meta74407){
return (new cljs.core.async.t_cljs$core$async74406(flag__$1,meta74407));
});

}

return (new cljs.core.async.t_cljs$core$async74406(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async74415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async74415 = (function (flag,cb,meta74416){
this.flag = flag;
this.cb = cb;
this.meta74416 = meta74416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74417,meta74416__$1){
var self__ = this;
var _74417__$1 = this;
return (new cljs.core.async.t_cljs$core$async74415(self__.flag,self__.cb,meta74416__$1));
}));

(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74417){
var self__ = this;
var _74417__$1 = this;
return self__.meta74416;
}));

(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async74415.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async74415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta74416","meta74416",848047557,null)], null);
}));

(cljs.core.async.t_cljs$core$async74415.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async74415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async74415");

(cljs.core.async.t_cljs$core$async74415.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async74415");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async74415.
 */
cljs.core.async.__GT_t_cljs$core$async74415 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async74415(flag__$1,cb__$1,meta74416){
return (new cljs.core.async.t_cljs$core$async74415(flag__$1,cb__$1,meta74416));
});

}

return (new cljs.core.async.t_cljs$core$async74415(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__74423_SHARP_){
var G__74435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74423_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__74435) : fret.call(null,G__74435));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__74424_SHARP_){
var G__74436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__74424_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__74436) : fret.call(null,G__74436));
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
var G__77150 = (i + (1));
i = G__77150;
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
var len__4736__auto___77160 = arguments.length;
var i__4737__auto___77161 = (0);
while(true){
if((i__4737__auto___77161 < len__4736__auto___77160)){
args__4742__auto__.push((arguments[i__4737__auto___77161]));

var G__77162 = (i__4737__auto___77161 + (1));
i__4737__auto___77161 = G__77162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__74454){
var map__74455 = p__74454;
var map__74455__$1 = (((((!((map__74455 == null))))?(((((map__74455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74455):map__74455);
var opts = map__74455__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq74452){
var G__74453 = cljs.core.first(seq74452);
var seq74452__$1 = cljs.core.next(seq74452);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74453,seq74452__$1);
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
var G__74483 = arguments.length;
switch (G__74483) {
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
var c__74246__auto___77164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_74535){
var state_val_74537 = (state_74535[(1)]);
if((state_val_74537 === (7))){
var inst_74525 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74549_77166 = state_74535__$1;
(statearr_74549_77166[(2)] = inst_74525);

(statearr_74549_77166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (1))){
var state_74535__$1 = state_74535;
var statearr_74555_77167 = state_74535__$1;
(statearr_74555_77167[(2)] = null);

(statearr_74555_77167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (4))){
var inst_74506 = (state_74535[(7)]);
var inst_74506__$1 = (state_74535[(2)]);
var inst_74508 = (inst_74506__$1 == null);
var state_74535__$1 = (function (){var statearr_74559 = state_74535;
(statearr_74559[(7)] = inst_74506__$1);

return statearr_74559;
})();
if(cljs.core.truth_(inst_74508)){
var statearr_74562_77168 = state_74535__$1;
(statearr_74562_77168[(1)] = (5));

} else {
var statearr_74564_77169 = state_74535__$1;
(statearr_74564_77169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (13))){
var state_74535__$1 = state_74535;
var statearr_74565_77172 = state_74535__$1;
(statearr_74565_77172[(2)] = null);

(statearr_74565_77172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (6))){
var inst_74506 = (state_74535[(7)]);
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74535__$1,(11),to,inst_74506);
} else {
if((state_val_74537 === (3))){
var inst_74530 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74535__$1,inst_74530);
} else {
if((state_val_74537 === (12))){
var state_74535__$1 = state_74535;
var statearr_74573_77173 = state_74535__$1;
(statearr_74573_77173[(2)] = null);

(statearr_74573_77173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (2))){
var state_74535__$1 = state_74535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74535__$1,(4),from);
} else {
if((state_val_74537 === (11))){
var inst_74518 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
if(cljs.core.truth_(inst_74518)){
var statearr_74581_77174 = state_74535__$1;
(statearr_74581_77174[(1)] = (12));

} else {
var statearr_74582_77175 = state_74535__$1;
(statearr_74582_77175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (9))){
var state_74535__$1 = state_74535;
var statearr_74585_77176 = state_74535__$1;
(statearr_74585_77176[(2)] = null);

(statearr_74585_77176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (5))){
var state_74535__$1 = state_74535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74586_77177 = state_74535__$1;
(statearr_74586_77177[(1)] = (8));

} else {
var statearr_74587_77178 = state_74535__$1;
(statearr_74587_77178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (14))){
var inst_74523 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74588_77179 = state_74535__$1;
(statearr_74588_77179[(2)] = inst_74523);

(statearr_74588_77179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (10))){
var inst_74515 = (state_74535[(2)]);
var state_74535__$1 = state_74535;
var statearr_74589_77180 = state_74535__$1;
(statearr_74589_77180[(2)] = inst_74515);

(statearr_74589_77180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74537 === (8))){
var inst_74512 = cljs.core.async.close_BANG_(to);
var state_74535__$1 = state_74535;
var statearr_74590_77181 = state_74535__$1;
(statearr_74590_77181[(2)] = inst_74512);

(statearr_74590_77181[(1)] = (10));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_74591 = [null,null,null,null,null,null,null,null];
(statearr_74591[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_74591[(1)] = (1));

return statearr_74591;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_74535){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74535);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74592){var ex__73931__auto__ = e74592;
var statearr_74593_77182 = state_74535;
(statearr_74593_77182[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74535[(4)]))){
var statearr_74596_77183 = state_74535;
(statearr_74596_77183[(1)] = cljs.core.first((state_74535[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77184 = state_74535;
state_74535 = G__77184;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_74535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_74535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_74603 = f__74247__auto__();
(statearr_74603[(6)] = c__74246__auto___77164);

return statearr_74603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var process = (function (p__74610){
var vec__74611 = p__74610;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74611,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74611,(1),null);
var job = vec__74611;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__74246__auto___77185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_74618){
var state_val_74619 = (state_74618[(1)]);
if((state_val_74619 === (1))){
var state_74618__$1 = state_74618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74618__$1,(2),res,v);
} else {
if((state_val_74619 === (2))){
var inst_74615 = (state_74618[(2)]);
var inst_74616 = cljs.core.async.close_BANG_(res);
var state_74618__$1 = (function (){var statearr_74620 = state_74618;
(statearr_74620[(7)] = inst_74615);

return statearr_74620;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74618__$1,inst_74616);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_74621 = [null,null,null,null,null,null,null,null];
(statearr_74621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__);

(statearr_74621[(1)] = (1));

return statearr_74621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1 = (function (state_74618){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74618);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74625){var ex__73931__auto__ = e74625;
var statearr_74626_77186 = state_74618;
(statearr_74626_77186[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74618[(4)]))){
var statearr_74628_77188 = state_74618;
(statearr_74628_77188[(1)] = cljs.core.first((state_74618[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77189 = state_74618;
state_74618 = G__77189;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = function(state_74618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1.call(this,state_74618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_74629 = f__74247__auto__();
(statearr_74629[(6)] = c__74246__auto___77185);

return statearr_74629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__74632){
var vec__74633 = p__74632;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74633,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74633,(1),null);
var job = vec__74633;
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
var n__4613__auto___77191 = n;
var __77192 = (0);
while(true){
if((__77192 < n__4613__auto___77191)){
var G__74638_77193 = type;
var G__74638_77194__$1 = (((G__74638_77193 instanceof cljs.core.Keyword))?G__74638_77193.fqn:null);
switch (G__74638_77194__$1) {
case "compute":
var c__74246__auto___77196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__77192,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = ((function (__77192,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function (state_74652){
var state_val_74653 = (state_74652[(1)]);
if((state_val_74653 === (1))){
var state_74652__$1 = state_74652;
var statearr_74654_77198 = state_74652__$1;
(statearr_74654_77198[(2)] = null);

(statearr_74654_77198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74653 === (2))){
var state_74652__$1 = state_74652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74652__$1,(4),jobs);
} else {
if((state_val_74653 === (3))){
var inst_74650 = (state_74652[(2)]);
var state_74652__$1 = state_74652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74652__$1,inst_74650);
} else {
if((state_val_74653 === (4))){
var inst_74642 = (state_74652[(2)]);
var inst_74643 = process(inst_74642);
var state_74652__$1 = state_74652;
if(cljs.core.truth_(inst_74643)){
var statearr_74658_77199 = state_74652__$1;
(statearr_74658_77199[(1)] = (5));

} else {
var statearr_74662_77200 = state_74652__$1;
(statearr_74662_77200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74653 === (5))){
var state_74652__$1 = state_74652;
var statearr_74663_77201 = state_74652__$1;
(statearr_74663_77201[(2)] = null);

(statearr_74663_77201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74653 === (6))){
var state_74652__$1 = state_74652;
var statearr_74666_77202 = state_74652__$1;
(statearr_74666_77202[(2)] = null);

(statearr_74666_77202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74653 === (7))){
var inst_74648 = (state_74652[(2)]);
var state_74652__$1 = state_74652;
var statearr_74667_77203 = state_74652__$1;
(statearr_74667_77203[(2)] = inst_74648);

(statearr_74667_77203[(1)] = (3));


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
});})(__77192,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
;
return ((function (__77192,switch__73927__auto__,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_74669 = [null,null,null,null,null,null,null];
(statearr_74669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__);

(statearr_74669[(1)] = (1));

return statearr_74669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1 = (function (state_74652){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74652);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74670){var ex__73931__auto__ = e74670;
var statearr_74671_77206 = state_74652;
(statearr_74671_77206[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74652[(4)]))){
var statearr_74672_77207 = state_74652;
(statearr_74672_77207[(1)] = cljs.core.first((state_74652[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77208 = state_74652;
state_74652 = G__77208;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = function(state_74652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1.call(this,state_74652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__;
})()
;})(__77192,switch__73927__auto__,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
})();
var state__74248__auto__ = (function (){var statearr_74673 = f__74247__auto__();
(statearr_74673[(6)] = c__74246__auto___77196);

return statearr_74673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
});})(__77192,c__74246__auto___77196,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
);


break;
case "async":
var c__74246__auto___77211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__77192,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = ((function (__77192,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function (state_74687){
var state_val_74688 = (state_74687[(1)]);
if((state_val_74688 === (1))){
var state_74687__$1 = state_74687;
var statearr_74689_77212 = state_74687__$1;
(statearr_74689_77212[(2)] = null);

(statearr_74689_77212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (2))){
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74687__$1,(4),jobs);
} else {
if((state_val_74688 === (3))){
var inst_74685 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74687__$1,inst_74685);
} else {
if((state_val_74688 === (4))){
var inst_74677 = (state_74687[(2)]);
var inst_74678 = async(inst_74677);
var state_74687__$1 = state_74687;
if(cljs.core.truth_(inst_74678)){
var statearr_74690_77213 = state_74687__$1;
(statearr_74690_77213[(1)] = (5));

} else {
var statearr_74691_77214 = state_74687__$1;
(statearr_74691_77214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (5))){
var state_74687__$1 = state_74687;
var statearr_74692_77215 = state_74687__$1;
(statearr_74692_77215[(2)] = null);

(statearr_74692_77215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (6))){
var state_74687__$1 = state_74687;
var statearr_74693_77218 = state_74687__$1;
(statearr_74693_77218[(2)] = null);

(statearr_74693_77218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74688 === (7))){
var inst_74683 = (state_74687[(2)]);
var state_74687__$1 = state_74687;
var statearr_74694_77219 = state_74687__$1;
(statearr_74694_77219[(2)] = inst_74683);

(statearr_74694_77219[(1)] = (3));


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
});})(__77192,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
;
return ((function (__77192,switch__73927__auto__,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_74695 = [null,null,null,null,null,null,null];
(statearr_74695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__);

(statearr_74695[(1)] = (1));

return statearr_74695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1 = (function (state_74687){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74687);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74696){var ex__73931__auto__ = e74696;
var statearr_74697_77222 = state_74687;
(statearr_74697_77222[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74687[(4)]))){
var statearr_74698_77223 = state_74687;
(statearr_74698_77223[(1)] = cljs.core.first((state_74687[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77224 = state_74687;
state_74687 = G__77224;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = function(state_74687){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1.call(this,state_74687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__;
})()
;})(__77192,switch__73927__auto__,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
})();
var state__74248__auto__ = (function (){var statearr_74699 = f__74247__auto__();
(statearr_74699[(6)] = c__74246__auto___77211);

return statearr_74699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
});})(__77192,c__74246__auto___77211,G__74638_77193,G__74638_77194__$1,n__4613__auto___77191,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74638_77194__$1)].join('')));

}

var G__77225 = (__77192 + (1));
__77192 = G__77225;
continue;
} else {
}
break;
}

var c__74246__auto___77226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_74721){
var state_val_74722 = (state_74721[(1)]);
if((state_val_74722 === (7))){
var inst_74717 = (state_74721[(2)]);
var state_74721__$1 = state_74721;
var statearr_74723_77227 = state_74721__$1;
(statearr_74723_77227[(2)] = inst_74717);

(statearr_74723_77227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74722 === (1))){
var state_74721__$1 = state_74721;
var statearr_74724_77228 = state_74721__$1;
(statearr_74724_77228[(2)] = null);

(statearr_74724_77228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74722 === (4))){
var inst_74702 = (state_74721[(7)]);
var inst_74702__$1 = (state_74721[(2)]);
var inst_74703 = (inst_74702__$1 == null);
var state_74721__$1 = (function (){var statearr_74725 = state_74721;
(statearr_74725[(7)] = inst_74702__$1);

return statearr_74725;
})();
if(cljs.core.truth_(inst_74703)){
var statearr_74726_77233 = state_74721__$1;
(statearr_74726_77233[(1)] = (5));

} else {
var statearr_74727_77234 = state_74721__$1;
(statearr_74727_77234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74722 === (6))){
var inst_74702 = (state_74721[(7)]);
var inst_74707 = (state_74721[(8)]);
var inst_74707__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_74708 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74709 = [inst_74702,inst_74707__$1];
var inst_74710 = (new cljs.core.PersistentVector(null,2,(5),inst_74708,inst_74709,null));
var state_74721__$1 = (function (){var statearr_74728 = state_74721;
(statearr_74728[(8)] = inst_74707__$1);

return statearr_74728;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74721__$1,(8),jobs,inst_74710);
} else {
if((state_val_74722 === (3))){
var inst_74719 = (state_74721[(2)]);
var state_74721__$1 = state_74721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74721__$1,inst_74719);
} else {
if((state_val_74722 === (2))){
var state_74721__$1 = state_74721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74721__$1,(4),from);
} else {
if((state_val_74722 === (9))){
var inst_74714 = (state_74721[(2)]);
var state_74721__$1 = (function (){var statearr_74735 = state_74721;
(statearr_74735[(9)] = inst_74714);

return statearr_74735;
})();
var statearr_74737_77235 = state_74721__$1;
(statearr_74737_77235[(2)] = null);

(statearr_74737_77235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74722 === (5))){
var inst_74705 = cljs.core.async.close_BANG_(jobs);
var state_74721__$1 = state_74721;
var statearr_74738_77236 = state_74721__$1;
(statearr_74738_77236[(2)] = inst_74705);

(statearr_74738_77236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74722 === (8))){
var inst_74707 = (state_74721[(8)]);
var inst_74712 = (state_74721[(2)]);
var state_74721__$1 = (function (){var statearr_74742 = state_74721;
(statearr_74742[(10)] = inst_74712);

return statearr_74742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74721__$1,(9),results,inst_74707);
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
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_74746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__);

(statearr_74746[(1)] = (1));

return statearr_74746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1 = (function (state_74721){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74721);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74747){var ex__73931__auto__ = e74747;
var statearr_74748_77243 = state_74721;
(statearr_74748_77243[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74721[(4)]))){
var statearr_74750_77244 = state_74721;
(statearr_74750_77244[(1)] = cljs.core.first((state_74721[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77245 = state_74721;
state_74721 = G__77245;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = function(state_74721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1.call(this,state_74721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_74757 = f__74247__auto__();
(statearr_74757[(6)] = c__74246__auto___77226);

return statearr_74757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


var c__74246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_74802){
var state_val_74803 = (state_74802[(1)]);
if((state_val_74803 === (7))){
var inst_74798 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
var statearr_74804_77246 = state_74802__$1;
(statearr_74804_77246[(2)] = inst_74798);

(statearr_74804_77246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (20))){
var state_74802__$1 = state_74802;
var statearr_74805_77248 = state_74802__$1;
(statearr_74805_77248[(2)] = null);

(statearr_74805_77248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (1))){
var state_74802__$1 = state_74802;
var statearr_74806_77252 = state_74802__$1;
(statearr_74806_77252[(2)] = null);

(statearr_74806_77252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (4))){
var inst_74763 = (state_74802[(7)]);
var inst_74763__$1 = (state_74802[(2)]);
var inst_74764 = (inst_74763__$1 == null);
var state_74802__$1 = (function (){var statearr_74807 = state_74802;
(statearr_74807[(7)] = inst_74763__$1);

return statearr_74807;
})();
if(cljs.core.truth_(inst_74764)){
var statearr_74808_77261 = state_74802__$1;
(statearr_74808_77261[(1)] = (5));

} else {
var statearr_74809_77265 = state_74802__$1;
(statearr_74809_77265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (15))){
var inst_74776 = (state_74802[(8)]);
var state_74802__$1 = state_74802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74802__$1,(18),to,inst_74776);
} else {
if((state_val_74803 === (21))){
var inst_74793 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
var statearr_74810_77267 = state_74802__$1;
(statearr_74810_77267[(2)] = inst_74793);

(statearr_74810_77267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (13))){
var inst_74795 = (state_74802[(2)]);
var state_74802__$1 = (function (){var statearr_74812 = state_74802;
(statearr_74812[(9)] = inst_74795);

return statearr_74812;
})();
var statearr_74814_77269 = state_74802__$1;
(statearr_74814_77269[(2)] = null);

(statearr_74814_77269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (6))){
var inst_74763 = (state_74802[(7)]);
var state_74802__$1 = state_74802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74802__$1,(11),inst_74763);
} else {
if((state_val_74803 === (17))){
var inst_74788 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
if(cljs.core.truth_(inst_74788)){
var statearr_74818_77271 = state_74802__$1;
(statearr_74818_77271[(1)] = (19));

} else {
var statearr_74821_77273 = state_74802__$1;
(statearr_74821_77273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (3))){
var inst_74800 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74802__$1,inst_74800);
} else {
if((state_val_74803 === (12))){
var inst_74773 = (state_74802[(10)]);
var state_74802__$1 = state_74802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74802__$1,(14),inst_74773);
} else {
if((state_val_74803 === (2))){
var state_74802__$1 = state_74802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74802__$1,(4),results);
} else {
if((state_val_74803 === (19))){
var state_74802__$1 = state_74802;
var statearr_74822_77274 = state_74802__$1;
(statearr_74822_77274[(2)] = null);

(statearr_74822_77274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (11))){
var inst_74773 = (state_74802[(2)]);
var state_74802__$1 = (function (){var statearr_74824 = state_74802;
(statearr_74824[(10)] = inst_74773);

return statearr_74824;
})();
var statearr_74825_77276 = state_74802__$1;
(statearr_74825_77276[(2)] = null);

(statearr_74825_77276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (9))){
var state_74802__$1 = state_74802;
var statearr_74827_77277 = state_74802__$1;
(statearr_74827_77277[(2)] = null);

(statearr_74827_77277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (5))){
var state_74802__$1 = state_74802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_74830_77278 = state_74802__$1;
(statearr_74830_77278[(1)] = (8));

} else {
var statearr_74831_77279 = state_74802__$1;
(statearr_74831_77279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (14))){
var inst_74776 = (state_74802[(8)]);
var inst_74776__$1 = (state_74802[(2)]);
var inst_74781 = (inst_74776__$1 == null);
var inst_74782 = cljs.core.not(inst_74781);
var state_74802__$1 = (function (){var statearr_74833 = state_74802;
(statearr_74833[(8)] = inst_74776__$1);

return statearr_74833;
})();
if(inst_74782){
var statearr_74834_77280 = state_74802__$1;
(statearr_74834_77280[(1)] = (15));

} else {
var statearr_74835_77281 = state_74802__$1;
(statearr_74835_77281[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (16))){
var state_74802__$1 = state_74802;
var statearr_74837_77282 = state_74802__$1;
(statearr_74837_77282[(2)] = false);

(statearr_74837_77282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (10))){
var inst_74770 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
var statearr_74841_77283 = state_74802__$1;
(statearr_74841_77283[(2)] = inst_74770);

(statearr_74841_77283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (18))){
var inst_74785 = (state_74802[(2)]);
var state_74802__$1 = state_74802;
var statearr_74843_77284 = state_74802__$1;
(statearr_74843_77284[(2)] = inst_74785);

(statearr_74843_77284[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74803 === (8))){
var inst_74767 = cljs.core.async.close_BANG_(to);
var state_74802__$1 = state_74802;
var statearr_74844_77285 = state_74802__$1;
(statearr_74844_77285[(2)] = inst_74767);

(statearr_74844_77285[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_74848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__);

(statearr_74848[(1)] = (1));

return statearr_74848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1 = (function (state_74802){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74802);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74850){var ex__73931__auto__ = e74850;
var statearr_74851_77286 = state_74802;
(statearr_74851_77286[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74802[(4)]))){
var statearr_74852_77288 = state_74802;
(statearr_74852_77288[(1)] = cljs.core.first((state_74802[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77290 = state_74802;
state_74802 = G__77290;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__ = function(state_74802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1.call(this,state_74802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_74854 = f__74247__auto__();
(statearr_74854[(6)] = c__74246__auto__);

return statearr_74854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));

return c__74246__auto__;
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
var G__74858 = arguments.length;
switch (G__74858) {
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
var G__74866 = arguments.length;
switch (G__74866) {
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
var G__74876 = arguments.length;
switch (G__74876) {
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
var c__74246__auto___77303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_74903){
var state_val_74904 = (state_74903[(1)]);
if((state_val_74904 === (7))){
var inst_74899 = (state_74903[(2)]);
var state_74903__$1 = state_74903;
var statearr_74909_77304 = state_74903__$1;
(statearr_74909_77304[(2)] = inst_74899);

(statearr_74909_77304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (1))){
var state_74903__$1 = state_74903;
var statearr_74910_77305 = state_74903__$1;
(statearr_74910_77305[(2)] = null);

(statearr_74910_77305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (4))){
var inst_74880 = (state_74903[(7)]);
var inst_74880__$1 = (state_74903[(2)]);
var inst_74881 = (inst_74880__$1 == null);
var state_74903__$1 = (function (){var statearr_74911 = state_74903;
(statearr_74911[(7)] = inst_74880__$1);

return statearr_74911;
})();
if(cljs.core.truth_(inst_74881)){
var statearr_74912_77306 = state_74903__$1;
(statearr_74912_77306[(1)] = (5));

} else {
var statearr_74913_77307 = state_74903__$1;
(statearr_74913_77307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (13))){
var state_74903__$1 = state_74903;
var statearr_74914_77308 = state_74903__$1;
(statearr_74914_77308[(2)] = null);

(statearr_74914_77308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (6))){
var inst_74880 = (state_74903[(7)]);
var inst_74886 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_74880) : p.call(null,inst_74880));
var state_74903__$1 = state_74903;
if(cljs.core.truth_(inst_74886)){
var statearr_74919_77309 = state_74903__$1;
(statearr_74919_77309[(1)] = (9));

} else {
var statearr_74923_77310 = state_74903__$1;
(statearr_74923_77310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (3))){
var inst_74901 = (state_74903[(2)]);
var state_74903__$1 = state_74903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74903__$1,inst_74901);
} else {
if((state_val_74904 === (12))){
var state_74903__$1 = state_74903;
var statearr_74926_77311 = state_74903__$1;
(statearr_74926_77311[(2)] = null);

(statearr_74926_77311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (2))){
var state_74903__$1 = state_74903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74903__$1,(4),ch);
} else {
if((state_val_74904 === (11))){
var inst_74880 = (state_74903[(7)]);
var inst_74890 = (state_74903[(2)]);
var state_74903__$1 = state_74903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_74903__$1,(8),inst_74890,inst_74880);
} else {
if((state_val_74904 === (9))){
var state_74903__$1 = state_74903;
var statearr_74938_77314 = state_74903__$1;
(statearr_74938_77314[(2)] = tc);

(statearr_74938_77314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (5))){
var inst_74883 = cljs.core.async.close_BANG_(tc);
var inst_74884 = cljs.core.async.close_BANG_(fc);
var state_74903__$1 = (function (){var statearr_74943 = state_74903;
(statearr_74943[(8)] = inst_74883);

return statearr_74943;
})();
var statearr_74944_77315 = state_74903__$1;
(statearr_74944_77315[(2)] = inst_74884);

(statearr_74944_77315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (14))){
var inst_74897 = (state_74903[(2)]);
var state_74903__$1 = state_74903;
var statearr_74951_77319 = state_74903__$1;
(statearr_74951_77319[(2)] = inst_74897);

(statearr_74951_77319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (10))){
var state_74903__$1 = state_74903;
var statearr_74956_77320 = state_74903__$1;
(statearr_74956_77320[(2)] = fc);

(statearr_74956_77320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74904 === (8))){
var inst_74892 = (state_74903[(2)]);
var state_74903__$1 = state_74903;
if(cljs.core.truth_(inst_74892)){
var statearr_74959_77321 = state_74903__$1;
(statearr_74959_77321[(1)] = (12));

} else {
var statearr_74965_77323 = state_74903__$1;
(statearr_74965_77323[(1)] = (13));

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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_74980 = [null,null,null,null,null,null,null,null,null];
(statearr_74980[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_74980[(1)] = (1));

return statearr_74980;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_74903){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_74903);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e74981){var ex__73931__auto__ = e74981;
var statearr_74982_77324 = state_74903;
(statearr_74982_77324[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_74903[(4)]))){
var statearr_74983_77325 = state_74903;
(statearr_74983_77325[(1)] = cljs.core.first((state_74903[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77326 = state_74903;
state_74903 = G__77326;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_74903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_74903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_74992 = f__74247__auto__();
(statearr_74992[(6)] = c__74246__auto___77303);

return statearr_74992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var c__74246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_75024){
var state_val_75025 = (state_75024[(1)]);
if((state_val_75025 === (7))){
var inst_75019 = (state_75024[(2)]);
var state_75024__$1 = state_75024;
var statearr_75028_77327 = state_75024__$1;
(statearr_75028_77327[(2)] = inst_75019);

(statearr_75028_77327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (1))){
var inst_74996 = init;
var inst_74998 = inst_74996;
var state_75024__$1 = (function (){var statearr_75029 = state_75024;
(statearr_75029[(7)] = inst_74998);

return statearr_75029;
})();
var statearr_75030_77329 = state_75024__$1;
(statearr_75030_77329[(2)] = null);

(statearr_75030_77329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (4))){
var inst_75003 = (state_75024[(8)]);
var inst_75003__$1 = (state_75024[(2)]);
var inst_75006 = (inst_75003__$1 == null);
var state_75024__$1 = (function (){var statearr_75031 = state_75024;
(statearr_75031[(8)] = inst_75003__$1);

return statearr_75031;
})();
if(cljs.core.truth_(inst_75006)){
var statearr_75032_77331 = state_75024__$1;
(statearr_75032_77331[(1)] = (5));

} else {
var statearr_75033_77332 = state_75024__$1;
(statearr_75033_77332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (6))){
var inst_75003 = (state_75024[(8)]);
var inst_75009 = (state_75024[(9)]);
var inst_74998 = (state_75024[(7)]);
var inst_75009__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_74998,inst_75003) : f.call(null,inst_74998,inst_75003));
var inst_75010 = cljs.core.reduced_QMARK_(inst_75009__$1);
var state_75024__$1 = (function (){var statearr_75038 = state_75024;
(statearr_75038[(9)] = inst_75009__$1);

return statearr_75038;
})();
if(inst_75010){
var statearr_75039_77336 = state_75024__$1;
(statearr_75039_77336[(1)] = (8));

} else {
var statearr_75040_77337 = state_75024__$1;
(statearr_75040_77337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (3))){
var inst_75022 = (state_75024[(2)]);
var state_75024__$1 = state_75024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75024__$1,inst_75022);
} else {
if((state_val_75025 === (2))){
var state_75024__$1 = state_75024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75024__$1,(4),ch);
} else {
if((state_val_75025 === (9))){
var inst_75009 = (state_75024[(9)]);
var inst_74998 = inst_75009;
var state_75024__$1 = (function (){var statearr_75043 = state_75024;
(statearr_75043[(7)] = inst_74998);

return statearr_75043;
})();
var statearr_75045_77339 = state_75024__$1;
(statearr_75045_77339[(2)] = null);

(statearr_75045_77339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (5))){
var inst_74998 = (state_75024[(7)]);
var state_75024__$1 = state_75024;
var statearr_75047_77340 = state_75024__$1;
(statearr_75047_77340[(2)] = inst_74998);

(statearr_75047_77340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (10))){
var inst_75017 = (state_75024[(2)]);
var state_75024__$1 = state_75024;
var statearr_75049_77341 = state_75024__$1;
(statearr_75049_77341[(2)] = inst_75017);

(statearr_75049_77341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75025 === (8))){
var inst_75009 = (state_75024[(9)]);
var inst_75012 = cljs.core.deref(inst_75009);
var state_75024__$1 = state_75024;
var statearr_75053_77342 = state_75024__$1;
(statearr_75053_77342[(2)] = inst_75012);

(statearr_75053_77342[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__73928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__73928__auto____0 = (function (){
var statearr_75055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_75055[(0)] = cljs$core$async$reduce_$_state_machine__73928__auto__);

(statearr_75055[(1)] = (1));

return statearr_75055;
});
var cljs$core$async$reduce_$_state_machine__73928__auto____1 = (function (state_75024){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_75024);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e75056){var ex__73931__auto__ = e75056;
var statearr_75057_77345 = state_75024;
(statearr_75057_77345[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_75024[(4)]))){
var statearr_75059_77347 = state_75024;
(statearr_75059_77347[(1)] = cljs.core.first((state_75024[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77349 = state_75024;
state_75024 = G__77349;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__73928__auto__ = function(state_75024){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__73928__auto____1.call(this,state_75024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__73928__auto____0;
cljs$core$async$reduce_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__73928__auto____1;
return cljs$core$async$reduce_$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_75065 = f__74247__auto__();
(statearr_75065[(6)] = c__74246__auto__);

return statearr_75065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));

return c__74246__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__74246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_75071){
var state_val_75072 = (state_75071[(1)]);
if((state_val_75072 === (1))){
var inst_75066 = cljs.core.async.reduce(f__$1,init,ch);
var state_75071__$1 = state_75071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75071__$1,(2),inst_75066);
} else {
if((state_val_75072 === (2))){
var inst_75068 = (state_75071[(2)]);
var inst_75069 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_75068) : f__$1.call(null,inst_75068));
var state_75071__$1 = state_75071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75071__$1,inst_75069);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__73928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__73928__auto____0 = (function (){
var statearr_75077 = [null,null,null,null,null,null,null];
(statearr_75077[(0)] = cljs$core$async$transduce_$_state_machine__73928__auto__);

(statearr_75077[(1)] = (1));

return statearr_75077;
});
var cljs$core$async$transduce_$_state_machine__73928__auto____1 = (function (state_75071){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_75071);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e75079){var ex__73931__auto__ = e75079;
var statearr_75080_77361 = state_75071;
(statearr_75080_77361[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_75071[(4)]))){
var statearr_75082_77362 = state_75071;
(statearr_75082_77362[(1)] = cljs.core.first((state_75071[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77365 = state_75071;
state_75071 = G__77365;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__73928__auto__ = function(state_75071){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__73928__auto____1.call(this,state_75071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__73928__auto____0;
cljs$core$async$transduce_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__73928__auto____1;
return cljs$core$async$transduce_$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_75084 = f__74247__auto__();
(statearr_75084[(6)] = c__74246__auto__);

return statearr_75084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));

return c__74246__auto__;
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
var G__75087 = arguments.length;
switch (G__75087) {
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
var c__74246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_75115){
var state_val_75116 = (state_75115[(1)]);
if((state_val_75116 === (7))){
var inst_75097 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
var statearr_75118_77384 = state_75115__$1;
(statearr_75118_77384[(2)] = inst_75097);

(statearr_75118_77384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (1))){
var inst_75090 = cljs.core.seq(coll);
var inst_75091 = inst_75090;
var state_75115__$1 = (function (){var statearr_75119 = state_75115;
(statearr_75119[(7)] = inst_75091);

return statearr_75119;
})();
var statearr_75120_77387 = state_75115__$1;
(statearr_75120_77387[(2)] = null);

(statearr_75120_77387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (4))){
var inst_75091 = (state_75115[(7)]);
var inst_75095 = cljs.core.first(inst_75091);
var state_75115__$1 = state_75115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75115__$1,(7),ch,inst_75095);
} else {
if((state_val_75116 === (13))){
var inst_75109 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
var statearr_75122_77390 = state_75115__$1;
(statearr_75122_77390[(2)] = inst_75109);

(statearr_75122_77390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (6))){
var inst_75100 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
if(cljs.core.truth_(inst_75100)){
var statearr_75123_77391 = state_75115__$1;
(statearr_75123_77391[(1)] = (8));

} else {
var statearr_75124_77392 = state_75115__$1;
(statearr_75124_77392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (3))){
var inst_75113 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75115__$1,inst_75113);
} else {
if((state_val_75116 === (12))){
var state_75115__$1 = state_75115;
var statearr_75126_77397 = state_75115__$1;
(statearr_75126_77397[(2)] = null);

(statearr_75126_77397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (2))){
var inst_75091 = (state_75115[(7)]);
var state_75115__$1 = state_75115;
if(cljs.core.truth_(inst_75091)){
var statearr_75127_77398 = state_75115__$1;
(statearr_75127_77398[(1)] = (4));

} else {
var statearr_75128_77400 = state_75115__$1;
(statearr_75128_77400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (11))){
var inst_75106 = cljs.core.async.close_BANG_(ch);
var state_75115__$1 = state_75115;
var statearr_75129_77405 = state_75115__$1;
(statearr_75129_77405[(2)] = inst_75106);

(statearr_75129_77405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (9))){
var state_75115__$1 = state_75115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_75130_77407 = state_75115__$1;
(statearr_75130_77407[(1)] = (11));

} else {
var statearr_75131_77408 = state_75115__$1;
(statearr_75131_77408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (5))){
var inst_75091 = (state_75115[(7)]);
var state_75115__$1 = state_75115;
var statearr_75132_77410 = state_75115__$1;
(statearr_75132_77410[(2)] = inst_75091);

(statearr_75132_77410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (10))){
var inst_75111 = (state_75115[(2)]);
var state_75115__$1 = state_75115;
var statearr_75133_77412 = state_75115__$1;
(statearr_75133_77412[(2)] = inst_75111);

(statearr_75133_77412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75116 === (8))){
var inst_75091 = (state_75115[(7)]);
var inst_75102 = cljs.core.next(inst_75091);
var inst_75091__$1 = inst_75102;
var state_75115__$1 = (function (){var statearr_75134 = state_75115;
(statearr_75134[(7)] = inst_75091__$1);

return statearr_75134;
})();
var statearr_75135_77416 = state_75115__$1;
(statearr_75135_77416[(2)] = null);

(statearr_75135_77416[(1)] = (2));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_75136 = [null,null,null,null,null,null,null,null];
(statearr_75136[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_75136[(1)] = (1));

return statearr_75136;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_75115){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_75115);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e75141){var ex__73931__auto__ = e75141;
var statearr_75142_77431 = state_75115;
(statearr_75142_77431[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_75115[(4)]))){
var statearr_75143_77432 = state_75115;
(statearr_75143_77432[(1)] = cljs.core.first((state_75115[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77433 = state_75115;
state_75115 = G__77433;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_75115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_75115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_75145 = f__74247__auto__();
(statearr_75145[(6)] = c__74246__auto__);

return statearr_75145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));

return c__74246__auto__;
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
var G__75154 = arguments.length;
switch (G__75154) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_77438 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_77438(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_77442 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_77442(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_77445 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_77445(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_77454 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_77454(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75194 = (function (ch,cs,meta75195){
this.ch = ch;
this.cs = cs;
this.meta75195 = meta75195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75196,meta75195__$1){
var self__ = this;
var _75196__$1 = this;
return (new cljs.core.async.t_cljs$core$async75194(self__.ch,self__.cs,meta75195__$1));
}));

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75196){
var self__ = this;
var _75196__$1 = this;
return self__.meta75195;
}));

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async75194.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async75194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta75195","meta75195",-1346484180,null)], null);
}));

(cljs.core.async.t_cljs$core$async75194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75194");

(cljs.core.async.t_cljs$core$async75194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75194.
 */
cljs.core.async.__GT_t_cljs$core$async75194 = (function cljs$core$async$mult_$___GT_t_cljs$core$async75194(ch__$1,cs__$1,meta75195){
return (new cljs.core.async.t_cljs$core$async75194(ch__$1,cs__$1,meta75195));
});

}

return (new cljs.core.async.t_cljs$core$async75194(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__74246__auto___77459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_75366){
var state_val_75367 = (state_75366[(1)]);
if((state_val_75367 === (7))){
var inst_75362 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75369_77460 = state_75366__$1;
(statearr_75369_77460[(2)] = inst_75362);

(statearr_75369_77460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (20))){
var inst_75251 = (state_75366[(7)]);
var inst_75269 = cljs.core.first(inst_75251);
var inst_75270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75269,(0),null);
var inst_75271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75269,(1),null);
var state_75366__$1 = (function (){var statearr_75371 = state_75366;
(statearr_75371[(8)] = inst_75270);

return statearr_75371;
})();
if(cljs.core.truth_(inst_75271)){
var statearr_75373_77461 = state_75366__$1;
(statearr_75373_77461[(1)] = (22));

} else {
var statearr_75374_77464 = state_75366__$1;
(statearr_75374_77464[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (27))){
var inst_75315 = (state_75366[(9)]);
var inst_75209 = (state_75366[(10)]);
var inst_75304 = (state_75366[(11)]);
var inst_75306 = (state_75366[(12)]);
var inst_75315__$1 = cljs.core._nth(inst_75304,inst_75306);
var inst_75316 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_75315__$1,inst_75209,done);
var state_75366__$1 = (function (){var statearr_75382 = state_75366;
(statearr_75382[(9)] = inst_75315__$1);

return statearr_75382;
})();
if(cljs.core.truth_(inst_75316)){
var statearr_75383_77468 = state_75366__$1;
(statearr_75383_77468[(1)] = (30));

} else {
var statearr_75384_77472 = state_75366__$1;
(statearr_75384_77472[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (1))){
var state_75366__$1 = state_75366;
var statearr_75385_77473 = state_75366__$1;
(statearr_75385_77473[(2)] = null);

(statearr_75385_77473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (24))){
var inst_75251 = (state_75366[(7)]);
var inst_75278 = (state_75366[(2)]);
var inst_75279 = cljs.core.next(inst_75251);
var inst_75219 = inst_75279;
var inst_75220 = null;
var inst_75221 = (0);
var inst_75222 = (0);
var state_75366__$1 = (function (){var statearr_75389 = state_75366;
(statearr_75389[(13)] = inst_75222);

(statearr_75389[(14)] = inst_75220);

(statearr_75389[(15)] = inst_75219);

(statearr_75389[(16)] = inst_75221);

(statearr_75389[(17)] = inst_75278);

return statearr_75389;
})();
var statearr_75393_77478 = state_75366__$1;
(statearr_75393_77478[(2)] = null);

(statearr_75393_77478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (39))){
var state_75366__$1 = state_75366;
var statearr_75403_77479 = state_75366__$1;
(statearr_75403_77479[(2)] = null);

(statearr_75403_77479[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (4))){
var inst_75209 = (state_75366[(10)]);
var inst_75209__$1 = (state_75366[(2)]);
var inst_75210 = (inst_75209__$1 == null);
var state_75366__$1 = (function (){var statearr_75405 = state_75366;
(statearr_75405[(10)] = inst_75209__$1);

return statearr_75405;
})();
if(cljs.core.truth_(inst_75210)){
var statearr_75406_77485 = state_75366__$1;
(statearr_75406_77485[(1)] = (5));

} else {
var statearr_75407_77486 = state_75366__$1;
(statearr_75407_77486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (15))){
var inst_75222 = (state_75366[(13)]);
var inst_75220 = (state_75366[(14)]);
var inst_75219 = (state_75366[(15)]);
var inst_75221 = (state_75366[(16)]);
var inst_75245 = (state_75366[(2)]);
var inst_75246 = (inst_75222 + (1));
var tmp75394 = inst_75220;
var tmp75395 = inst_75219;
var tmp75396 = inst_75221;
var inst_75219__$1 = tmp75395;
var inst_75220__$1 = tmp75394;
var inst_75221__$1 = tmp75396;
var inst_75222__$1 = inst_75246;
var state_75366__$1 = (function (){var statearr_75409 = state_75366;
(statearr_75409[(13)] = inst_75222__$1);

(statearr_75409[(14)] = inst_75220__$1);

(statearr_75409[(15)] = inst_75219__$1);

(statearr_75409[(16)] = inst_75221__$1);

(statearr_75409[(18)] = inst_75245);

return statearr_75409;
})();
var statearr_75410_77495 = state_75366__$1;
(statearr_75410_77495[(2)] = null);

(statearr_75410_77495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (21))){
var inst_75282 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75417_77497 = state_75366__$1;
(statearr_75417_77497[(2)] = inst_75282);

(statearr_75417_77497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (31))){
var inst_75315 = (state_75366[(9)]);
var inst_75319 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_75315);
var state_75366__$1 = state_75366;
var statearr_75421_77500 = state_75366__$1;
(statearr_75421_77500[(2)] = inst_75319);

(statearr_75421_77500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (32))){
var inst_75304 = (state_75366[(11)]);
var inst_75303 = (state_75366[(19)]);
var inst_75305 = (state_75366[(20)]);
var inst_75306 = (state_75366[(12)]);
var inst_75321 = (state_75366[(2)]);
var inst_75322 = (inst_75306 + (1));
var tmp75414 = inst_75304;
var tmp75415 = inst_75303;
var tmp75416 = inst_75305;
var inst_75303__$1 = tmp75415;
var inst_75304__$1 = tmp75414;
var inst_75305__$1 = tmp75416;
var inst_75306__$1 = inst_75322;
var state_75366__$1 = (function (){var statearr_75424 = state_75366;
(statearr_75424[(21)] = inst_75321);

(statearr_75424[(11)] = inst_75304__$1);

(statearr_75424[(19)] = inst_75303__$1);

(statearr_75424[(20)] = inst_75305__$1);

(statearr_75424[(12)] = inst_75306__$1);

return statearr_75424;
})();
var statearr_75425_77515 = state_75366__$1;
(statearr_75425_77515[(2)] = null);

(statearr_75425_77515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (40))){
var inst_75335 = (state_75366[(22)]);
var inst_75339 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_75335);
var state_75366__$1 = state_75366;
var statearr_75426_77527 = state_75366__$1;
(statearr_75426_77527[(2)] = inst_75339);

(statearr_75426_77527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (33))){
var inst_75325 = (state_75366[(23)]);
var inst_75327 = cljs.core.chunked_seq_QMARK_(inst_75325);
var state_75366__$1 = state_75366;
if(inst_75327){
var statearr_75432_77529 = state_75366__$1;
(statearr_75432_77529[(1)] = (36));

} else {
var statearr_75433_77530 = state_75366__$1;
(statearr_75433_77530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (13))){
var inst_75236 = (state_75366[(24)]);
var inst_75242 = cljs.core.async.close_BANG_(inst_75236);
var state_75366__$1 = state_75366;
var statearr_75440_77531 = state_75366__$1;
(statearr_75440_77531[(2)] = inst_75242);

(statearr_75440_77531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (22))){
var inst_75270 = (state_75366[(8)]);
var inst_75275 = cljs.core.async.close_BANG_(inst_75270);
var state_75366__$1 = state_75366;
var statearr_75441_77532 = state_75366__$1;
(statearr_75441_77532[(2)] = inst_75275);

(statearr_75441_77532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (36))){
var inst_75325 = (state_75366[(23)]);
var inst_75329 = cljs.core.chunk_first(inst_75325);
var inst_75330 = cljs.core.chunk_rest(inst_75325);
var inst_75331 = cljs.core.count(inst_75329);
var inst_75303 = inst_75330;
var inst_75304 = inst_75329;
var inst_75305 = inst_75331;
var inst_75306 = (0);
var state_75366__$1 = (function (){var statearr_75444 = state_75366;
(statearr_75444[(11)] = inst_75304);

(statearr_75444[(19)] = inst_75303);

(statearr_75444[(20)] = inst_75305);

(statearr_75444[(12)] = inst_75306);

return statearr_75444;
})();
var statearr_75445_77547 = state_75366__$1;
(statearr_75445_77547[(2)] = null);

(statearr_75445_77547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (41))){
var inst_75325 = (state_75366[(23)]);
var inst_75341 = (state_75366[(2)]);
var inst_75342 = cljs.core.next(inst_75325);
var inst_75303 = inst_75342;
var inst_75304 = null;
var inst_75305 = (0);
var inst_75306 = (0);
var state_75366__$1 = (function (){var statearr_75447 = state_75366;
(statearr_75447[(11)] = inst_75304);

(statearr_75447[(25)] = inst_75341);

(statearr_75447[(19)] = inst_75303);

(statearr_75447[(20)] = inst_75305);

(statearr_75447[(12)] = inst_75306);

return statearr_75447;
})();
var statearr_75448_77555 = state_75366__$1;
(statearr_75448_77555[(2)] = null);

(statearr_75448_77555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (43))){
var state_75366__$1 = state_75366;
var statearr_75454_77562 = state_75366__$1;
(statearr_75454_77562[(2)] = null);

(statearr_75454_77562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (29))){
var inst_75350 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75456_77564 = state_75366__$1;
(statearr_75456_77564[(2)] = inst_75350);

(statearr_75456_77564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (44))){
var inst_75359 = (state_75366[(2)]);
var state_75366__$1 = (function (){var statearr_75459 = state_75366;
(statearr_75459[(26)] = inst_75359);

return statearr_75459;
})();
var statearr_75460_77565 = state_75366__$1;
(statearr_75460_77565[(2)] = null);

(statearr_75460_77565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (6))){
var inst_75292 = (state_75366[(27)]);
var inst_75291 = cljs.core.deref(cs);
var inst_75292__$1 = cljs.core.keys(inst_75291);
var inst_75296 = cljs.core.count(inst_75292__$1);
var inst_75297 = cljs.core.reset_BANG_(dctr,inst_75296);
var inst_75302 = cljs.core.seq(inst_75292__$1);
var inst_75303 = inst_75302;
var inst_75304 = null;
var inst_75305 = (0);
var inst_75306 = (0);
var state_75366__$1 = (function (){var statearr_75462 = state_75366;
(statearr_75462[(11)] = inst_75304);

(statearr_75462[(19)] = inst_75303);

(statearr_75462[(27)] = inst_75292__$1);

(statearr_75462[(20)] = inst_75305);

(statearr_75462[(12)] = inst_75306);

(statearr_75462[(28)] = inst_75297);

return statearr_75462;
})();
var statearr_75463_77566 = state_75366__$1;
(statearr_75463_77566[(2)] = null);

(statearr_75463_77566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (28))){
var inst_75325 = (state_75366[(23)]);
var inst_75303 = (state_75366[(19)]);
var inst_75325__$1 = cljs.core.seq(inst_75303);
var state_75366__$1 = (function (){var statearr_75467 = state_75366;
(statearr_75467[(23)] = inst_75325__$1);

return statearr_75467;
})();
if(inst_75325__$1){
var statearr_75468_77569 = state_75366__$1;
(statearr_75468_77569[(1)] = (33));

} else {
var statearr_75469_77570 = state_75366__$1;
(statearr_75469_77570[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (25))){
var inst_75305 = (state_75366[(20)]);
var inst_75306 = (state_75366[(12)]);
var inst_75311 = (inst_75306 < inst_75305);
var inst_75312 = inst_75311;
var state_75366__$1 = state_75366;
if(cljs.core.truth_(inst_75312)){
var statearr_75472_77572 = state_75366__$1;
(statearr_75472_77572[(1)] = (27));

} else {
var statearr_75473_77573 = state_75366__$1;
(statearr_75473_77573[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (34))){
var state_75366__$1 = state_75366;
var statearr_75476_77574 = state_75366__$1;
(statearr_75476_77574[(2)] = null);

(statearr_75476_77574[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (17))){
var state_75366__$1 = state_75366;
var statearr_75482_77575 = state_75366__$1;
(statearr_75482_77575[(2)] = null);

(statearr_75482_77575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (3))){
var inst_75364 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75366__$1,inst_75364);
} else {
if((state_val_75367 === (12))){
var inst_75287 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75483_77582 = state_75366__$1;
(statearr_75483_77582[(2)] = inst_75287);

(statearr_75483_77582[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (2))){
var state_75366__$1 = state_75366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75366__$1,(4),ch);
} else {
if((state_val_75367 === (23))){
var state_75366__$1 = state_75366;
var statearr_75486_77586 = state_75366__$1;
(statearr_75486_77586[(2)] = null);

(statearr_75486_77586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (35))){
var inst_75348 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75491_77587 = state_75366__$1;
(statearr_75491_77587[(2)] = inst_75348);

(statearr_75491_77587[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (19))){
var inst_75251 = (state_75366[(7)]);
var inst_75260 = cljs.core.chunk_first(inst_75251);
var inst_75261 = cljs.core.chunk_rest(inst_75251);
var inst_75262 = cljs.core.count(inst_75260);
var inst_75219 = inst_75261;
var inst_75220 = inst_75260;
var inst_75221 = inst_75262;
var inst_75222 = (0);
var state_75366__$1 = (function (){var statearr_75498 = state_75366;
(statearr_75498[(13)] = inst_75222);

(statearr_75498[(14)] = inst_75220);

(statearr_75498[(15)] = inst_75219);

(statearr_75498[(16)] = inst_75221);

return statearr_75498;
})();
var statearr_75499_77588 = state_75366__$1;
(statearr_75499_77588[(2)] = null);

(statearr_75499_77588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (11))){
var inst_75251 = (state_75366[(7)]);
var inst_75219 = (state_75366[(15)]);
var inst_75251__$1 = cljs.core.seq(inst_75219);
var state_75366__$1 = (function (){var statearr_75500 = state_75366;
(statearr_75500[(7)] = inst_75251__$1);

return statearr_75500;
})();
if(inst_75251__$1){
var statearr_75501_77589 = state_75366__$1;
(statearr_75501_77589[(1)] = (16));

} else {
var statearr_75502_77590 = state_75366__$1;
(statearr_75502_77590[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (9))){
var inst_75289 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75503_77591 = state_75366__$1;
(statearr_75503_77591[(2)] = inst_75289);

(statearr_75503_77591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (5))){
var inst_75217 = cljs.core.deref(cs);
var inst_75218 = cljs.core.seq(inst_75217);
var inst_75219 = inst_75218;
var inst_75220 = null;
var inst_75221 = (0);
var inst_75222 = (0);
var state_75366__$1 = (function (){var statearr_75510 = state_75366;
(statearr_75510[(13)] = inst_75222);

(statearr_75510[(14)] = inst_75220);

(statearr_75510[(15)] = inst_75219);

(statearr_75510[(16)] = inst_75221);

return statearr_75510;
})();
var statearr_75512_77595 = state_75366__$1;
(statearr_75512_77595[(2)] = null);

(statearr_75512_77595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (14))){
var state_75366__$1 = state_75366;
var statearr_75519_77608 = state_75366__$1;
(statearr_75519_77608[(2)] = null);

(statearr_75519_77608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (45))){
var inst_75356 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75520_77610 = state_75366__$1;
(statearr_75520_77610[(2)] = inst_75356);

(statearr_75520_77610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (26))){
var inst_75292 = (state_75366[(27)]);
var inst_75352 = (state_75366[(2)]);
var inst_75353 = cljs.core.seq(inst_75292);
var state_75366__$1 = (function (){var statearr_75521 = state_75366;
(statearr_75521[(29)] = inst_75352);

return statearr_75521;
})();
if(inst_75353){
var statearr_75522_77611 = state_75366__$1;
(statearr_75522_77611[(1)] = (42));

} else {
var statearr_75523_77612 = state_75366__$1;
(statearr_75523_77612[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (16))){
var inst_75251 = (state_75366[(7)]);
var inst_75258 = cljs.core.chunked_seq_QMARK_(inst_75251);
var state_75366__$1 = state_75366;
if(inst_75258){
var statearr_75524_77613 = state_75366__$1;
(statearr_75524_77613[(1)] = (19));

} else {
var statearr_75526_77614 = state_75366__$1;
(statearr_75526_77614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (38))){
var inst_75345 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75527_77616 = state_75366__$1;
(statearr_75527_77616[(2)] = inst_75345);

(statearr_75527_77616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (30))){
var state_75366__$1 = state_75366;
var statearr_75528_77617 = state_75366__$1;
(statearr_75528_77617[(2)] = null);

(statearr_75528_77617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (10))){
var inst_75222 = (state_75366[(13)]);
var inst_75220 = (state_75366[(14)]);
var inst_75231 = cljs.core._nth(inst_75220,inst_75222);
var inst_75236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75231,(0),null);
var inst_75239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75231,(1),null);
var state_75366__$1 = (function (){var statearr_75530 = state_75366;
(statearr_75530[(24)] = inst_75236);

return statearr_75530;
})();
if(cljs.core.truth_(inst_75239)){
var statearr_75531_77618 = state_75366__$1;
(statearr_75531_77618[(1)] = (13));

} else {
var statearr_75532_77619 = state_75366__$1;
(statearr_75532_77619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (18))){
var inst_75285 = (state_75366[(2)]);
var state_75366__$1 = state_75366;
var statearr_75533_77620 = state_75366__$1;
(statearr_75533_77620[(2)] = inst_75285);

(statearr_75533_77620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (42))){
var state_75366__$1 = state_75366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75366__$1,(45),dchan);
} else {
if((state_val_75367 === (37))){
var inst_75325 = (state_75366[(23)]);
var inst_75209 = (state_75366[(10)]);
var inst_75335 = (state_75366[(22)]);
var inst_75335__$1 = cljs.core.first(inst_75325);
var inst_75336 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_75335__$1,inst_75209,done);
var state_75366__$1 = (function (){var statearr_75534 = state_75366;
(statearr_75534[(22)] = inst_75335__$1);

return statearr_75534;
})();
if(cljs.core.truth_(inst_75336)){
var statearr_75537_77623 = state_75366__$1;
(statearr_75537_77623[(1)] = (39));

} else {
var statearr_75538_77624 = state_75366__$1;
(statearr_75538_77624[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75367 === (8))){
var inst_75222 = (state_75366[(13)]);
var inst_75221 = (state_75366[(16)]);
var inst_75224 = (inst_75222 < inst_75221);
var inst_75225 = inst_75224;
var state_75366__$1 = state_75366;
if(cljs.core.truth_(inst_75225)){
var statearr_75539_77627 = state_75366__$1;
(statearr_75539_77627[(1)] = (10));

} else {
var statearr_75540_77628 = state_75366__$1;
(statearr_75540_77628[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__73928__auto__ = null;
var cljs$core$async$mult_$_state_machine__73928__auto____0 = (function (){
var statearr_75543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75543[(0)] = cljs$core$async$mult_$_state_machine__73928__auto__);

(statearr_75543[(1)] = (1));

return statearr_75543;
});
var cljs$core$async$mult_$_state_machine__73928__auto____1 = (function (state_75366){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_75366);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e75544){var ex__73931__auto__ = e75544;
var statearr_75546_77637 = state_75366;
(statearr_75546_77637[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_75366[(4)]))){
var statearr_75547_77642 = state_75366;
(statearr_75547_77642[(1)] = cljs.core.first((state_75366[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77643 = state_75366;
state_75366 = G__77643;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__73928__auto__ = function(state_75366){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__73928__auto____1.call(this,state_75366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__73928__auto____0;
cljs$core$async$mult_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__73928__auto____1;
return cljs$core$async$mult_$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_75549 = f__74247__auto__();
(statearr_75549[(6)] = c__74246__auto___77459);

return statearr_75549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var G__75569 = arguments.length;
switch (G__75569) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_77647 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_77647(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_77650 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_77650(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_77651 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_77651(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_77657 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_77657(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_77662 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_77662(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77670 = arguments.length;
var i__4737__auto___77671 = (0);
while(true){
if((i__4737__auto___77671 < len__4736__auto___77670)){
args__4742__auto__.push((arguments[i__4737__auto___77671]));

var G__77672 = (i__4737__auto___77671 + (1));
i__4737__auto___77671 = G__77672;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__75638){
var map__75639 = p__75638;
var map__75639__$1 = (((((!((map__75639 == null))))?(((((map__75639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75639):map__75639);
var opts = map__75639__$1;
var statearr_75647_77677 = state;
(statearr_75647_77677[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_75654_77678 = state;
(statearr_75654_77678[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_75662_77681 = state;
(statearr_75662_77681[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq75624){
var G__75625 = cljs.core.first(seq75624);
var seq75624__$1 = cljs.core.next(seq75624);
var G__75626 = cljs.core.first(seq75624__$1);
var seq75624__$2 = cljs.core.next(seq75624__$1);
var G__75627 = cljs.core.first(seq75624__$2);
var seq75624__$3 = cljs.core.next(seq75624__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75625,G__75626,G__75627,seq75624__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75670 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta75671){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta75671 = meta75671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75672,meta75671__$1){
var self__ = this;
var _75672__$1 = this;
return (new cljs.core.async.t_cljs$core$async75670(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta75671__$1));
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75672){
var self__ = this;
var _75672__$1 = this;
return self__.meta75671;
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async75670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta75671","meta75671",-1041954386,null)], null);
}));

(cljs.core.async.t_cljs$core$async75670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75670");

(cljs.core.async.t_cljs$core$async75670.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75670.
 */
cljs.core.async.__GT_t_cljs$core$async75670 = (function cljs$core$async$mix_$___GT_t_cljs$core$async75670(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75671){
return (new cljs.core.async.t_cljs$core$async75670(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta75671));
});

}

return (new cljs.core.async.t_cljs$core$async75670(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__74246__auto___77728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_75796){
var state_val_75797 = (state_75796[(1)]);
if((state_val_75797 === (7))){
var inst_75707 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
var statearr_75807_77730 = state_75796__$1;
(statearr_75807_77730[(2)] = inst_75707);

(statearr_75807_77730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (20))){
var inst_75721 = (state_75796[(7)]);
var state_75796__$1 = state_75796;
var statearr_75812_77733 = state_75796__$1;
(statearr_75812_77733[(2)] = inst_75721);

(statearr_75812_77733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (27))){
var state_75796__$1 = state_75796;
var statearr_75817_77736 = state_75796__$1;
(statearr_75817_77736[(2)] = null);

(statearr_75817_77736[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (1))){
var inst_75694 = (state_75796[(8)]);
var inst_75694__$1 = calc_state();
var inst_75696 = (inst_75694__$1 == null);
var inst_75697 = cljs.core.not(inst_75696);
var state_75796__$1 = (function (){var statearr_75822 = state_75796;
(statearr_75822[(8)] = inst_75694__$1);

return statearr_75822;
})();
if(inst_75697){
var statearr_75823_77740 = state_75796__$1;
(statearr_75823_77740[(1)] = (2));

} else {
var statearr_75824_77741 = state_75796__$1;
(statearr_75824_77741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (24))){
var inst_75755 = (state_75796[(9)]);
var inst_75746 = (state_75796[(10)]);
var inst_75769 = (state_75796[(11)]);
var inst_75769__$1 = (inst_75746.cljs$core$IFn$_invoke$arity$1 ? inst_75746.cljs$core$IFn$_invoke$arity$1(inst_75755) : inst_75746.call(null,inst_75755));
var state_75796__$1 = (function (){var statearr_75825 = state_75796;
(statearr_75825[(11)] = inst_75769__$1);

return statearr_75825;
})();
if(cljs.core.truth_(inst_75769__$1)){
var statearr_75829_77748 = state_75796__$1;
(statearr_75829_77748[(1)] = (29));

} else {
var statearr_75830_77754 = state_75796__$1;
(statearr_75830_77754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (4))){
var inst_75711 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75711)){
var statearr_75833_77757 = state_75796__$1;
(statearr_75833_77757[(1)] = (8));

} else {
var statearr_75834_77759 = state_75796__$1;
(statearr_75834_77759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (15))){
var inst_75740 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75740)){
var statearr_75836_77761 = state_75796__$1;
(statearr_75836_77761[(1)] = (19));

} else {
var statearr_75837_77762 = state_75796__$1;
(statearr_75837_77762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (21))){
var inst_75745 = (state_75796[(12)]);
var inst_75745__$1 = (state_75796[(2)]);
var inst_75746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75745__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75745__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75745__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_75796__$1 = (function (){var statearr_75841 = state_75796;
(statearr_75841[(13)] = inst_75747);

(statearr_75841[(10)] = inst_75746);

(statearr_75841[(12)] = inst_75745__$1);

return statearr_75841;
})();
return cljs.core.async.ioc_alts_BANG_(state_75796__$1,(22),inst_75748);
} else {
if((state_val_75797 === (31))){
var inst_75778 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75778)){
var statearr_75843_77766 = state_75796__$1;
(statearr_75843_77766[(1)] = (32));

} else {
var statearr_75844_77767 = state_75796__$1;
(statearr_75844_77767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (32))){
var inst_75754 = (state_75796[(14)]);
var state_75796__$1 = state_75796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_75796__$1,(35),out,inst_75754);
} else {
if((state_val_75797 === (33))){
var inst_75745 = (state_75796[(12)]);
var inst_75721 = inst_75745;
var state_75796__$1 = (function (){var statearr_75846 = state_75796;
(statearr_75846[(7)] = inst_75721);

return statearr_75846;
})();
var statearr_75848_77769 = state_75796__$1;
(statearr_75848_77769[(2)] = null);

(statearr_75848_77769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (13))){
var inst_75721 = (state_75796[(7)]);
var inst_75729 = inst_75721.cljs$lang$protocol_mask$partition0$;
var inst_75730 = (inst_75729 & (64));
var inst_75731 = inst_75721.cljs$core$ISeq$;
var inst_75732 = (cljs.core.PROTOCOL_SENTINEL === inst_75731);
var inst_75733 = ((inst_75730) || (inst_75732));
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75733)){
var statearr_75861_77773 = state_75796__$1;
(statearr_75861_77773[(1)] = (16));

} else {
var statearr_75862_77774 = state_75796__$1;
(statearr_75862_77774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (22))){
var inst_75755 = (state_75796[(9)]);
var inst_75754 = (state_75796[(14)]);
var inst_75753 = (state_75796[(2)]);
var inst_75754__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75753,(0),null);
var inst_75755__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_75753,(1),null);
var inst_75756 = (inst_75754__$1 == null);
var inst_75757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75755__$1,change);
var inst_75758 = ((inst_75756) || (inst_75757));
var state_75796__$1 = (function (){var statearr_75868 = state_75796;
(statearr_75868[(9)] = inst_75755__$1);

(statearr_75868[(14)] = inst_75754__$1);

return statearr_75868;
})();
if(cljs.core.truth_(inst_75758)){
var statearr_75869_77778 = state_75796__$1;
(statearr_75869_77778[(1)] = (23));

} else {
var statearr_75870_77779 = state_75796__$1;
(statearr_75870_77779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (36))){
var inst_75745 = (state_75796[(12)]);
var inst_75721 = inst_75745;
var state_75796__$1 = (function (){var statearr_75871 = state_75796;
(statearr_75871[(7)] = inst_75721);

return statearr_75871;
})();
var statearr_75872_77783 = state_75796__$1;
(statearr_75872_77783[(2)] = null);

(statearr_75872_77783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (29))){
var inst_75769 = (state_75796[(11)]);
var state_75796__$1 = state_75796;
var statearr_75873_77787 = state_75796__$1;
(statearr_75873_77787[(2)] = inst_75769);

(statearr_75873_77787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (6))){
var state_75796__$1 = state_75796;
var statearr_75874_77788 = state_75796__$1;
(statearr_75874_77788[(2)] = false);

(statearr_75874_77788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (28))){
var inst_75765 = (state_75796[(2)]);
var inst_75766 = calc_state();
var inst_75721 = inst_75766;
var state_75796__$1 = (function (){var statearr_75875 = state_75796;
(statearr_75875[(15)] = inst_75765);

(statearr_75875[(7)] = inst_75721);

return statearr_75875;
})();
var statearr_75876_77793 = state_75796__$1;
(statearr_75876_77793[(2)] = null);

(statearr_75876_77793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (25))){
var inst_75792 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
var statearr_75877_77794 = state_75796__$1;
(statearr_75877_77794[(2)] = inst_75792);

(statearr_75877_77794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (34))){
var inst_75790 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
var statearr_75878_77798 = state_75796__$1;
(statearr_75878_77798[(2)] = inst_75790);

(statearr_75878_77798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (17))){
var state_75796__$1 = state_75796;
var statearr_75879_77799 = state_75796__$1;
(statearr_75879_77799[(2)] = false);

(statearr_75879_77799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (3))){
var state_75796__$1 = state_75796;
var statearr_75881_77800 = state_75796__$1;
(statearr_75881_77800[(2)] = false);

(statearr_75881_77800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (12))){
var inst_75794 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75796__$1,inst_75794);
} else {
if((state_val_75797 === (2))){
var inst_75694 = (state_75796[(8)]);
var inst_75699 = inst_75694.cljs$lang$protocol_mask$partition0$;
var inst_75700 = (inst_75699 & (64));
var inst_75701 = inst_75694.cljs$core$ISeq$;
var inst_75702 = (cljs.core.PROTOCOL_SENTINEL === inst_75701);
var inst_75703 = ((inst_75700) || (inst_75702));
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75703)){
var statearr_75885_77806 = state_75796__$1;
(statearr_75885_77806[(1)] = (5));

} else {
var statearr_75887_77812 = state_75796__$1;
(statearr_75887_77812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (23))){
var inst_75754 = (state_75796[(14)]);
var inst_75760 = (inst_75754 == null);
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75760)){
var statearr_75888_77815 = state_75796__$1;
(statearr_75888_77815[(1)] = (26));

} else {
var statearr_75889_77816 = state_75796__$1;
(statearr_75889_77816[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (35))){
var inst_75781 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
if(cljs.core.truth_(inst_75781)){
var statearr_75893_77818 = state_75796__$1;
(statearr_75893_77818[(1)] = (36));

} else {
var statearr_75894_77819 = state_75796__$1;
(statearr_75894_77819[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (19))){
var inst_75721 = (state_75796[(7)]);
var inst_75742 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_75721);
var state_75796__$1 = state_75796;
var statearr_75896_77825 = state_75796__$1;
(statearr_75896_77825[(2)] = inst_75742);

(statearr_75896_77825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (11))){
var inst_75721 = (state_75796[(7)]);
var inst_75725 = (inst_75721 == null);
var inst_75726 = cljs.core.not(inst_75725);
var state_75796__$1 = state_75796;
if(inst_75726){
var statearr_75897_77828 = state_75796__$1;
(statearr_75897_77828[(1)] = (13));

} else {
var statearr_75898_77830 = state_75796__$1;
(statearr_75898_77830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (9))){
var inst_75694 = (state_75796[(8)]);
var state_75796__$1 = state_75796;
var statearr_75899_77831 = state_75796__$1;
(statearr_75899_77831[(2)] = inst_75694);

(statearr_75899_77831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (5))){
var state_75796__$1 = state_75796;
var statearr_75902_77833 = state_75796__$1;
(statearr_75902_77833[(2)] = true);

(statearr_75902_77833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (14))){
var state_75796__$1 = state_75796;
var statearr_75904_77837 = state_75796__$1;
(statearr_75904_77837[(2)] = false);

(statearr_75904_77837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (26))){
var inst_75755 = (state_75796[(9)]);
var inst_75762 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_75755);
var state_75796__$1 = state_75796;
var statearr_75906_77841 = state_75796__$1;
(statearr_75906_77841[(2)] = inst_75762);

(statearr_75906_77841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (16))){
var state_75796__$1 = state_75796;
var statearr_75908_77844 = state_75796__$1;
(statearr_75908_77844[(2)] = true);

(statearr_75908_77844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (38))){
var inst_75786 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
var statearr_75909_77848 = state_75796__$1;
(statearr_75909_77848[(2)] = inst_75786);

(statearr_75909_77848[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (30))){
var inst_75755 = (state_75796[(9)]);
var inst_75747 = (state_75796[(13)]);
var inst_75746 = (state_75796[(10)]);
var inst_75772 = cljs.core.empty_QMARK_(inst_75746);
var inst_75773 = (inst_75747.cljs$core$IFn$_invoke$arity$1 ? inst_75747.cljs$core$IFn$_invoke$arity$1(inst_75755) : inst_75747.call(null,inst_75755));
var inst_75774 = cljs.core.not(inst_75773);
var inst_75775 = ((inst_75772) && (inst_75774));
var state_75796__$1 = state_75796;
var statearr_75912_77851 = state_75796__$1;
(statearr_75912_77851[(2)] = inst_75775);

(statearr_75912_77851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (10))){
var inst_75694 = (state_75796[(8)]);
var inst_75717 = (state_75796[(2)]);
var inst_75718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75717,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_75719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75717,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_75720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_75717,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_75721 = inst_75694;
var state_75796__$1 = (function (){var statearr_75915 = state_75796;
(statearr_75915[(16)] = inst_75718);

(statearr_75915[(17)] = inst_75719);

(statearr_75915[(7)] = inst_75721);

(statearr_75915[(18)] = inst_75720);

return statearr_75915;
})();
var statearr_75916_77859 = state_75796__$1;
(statearr_75916_77859[(2)] = null);

(statearr_75916_77859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (18))){
var inst_75737 = (state_75796[(2)]);
var state_75796__$1 = state_75796;
var statearr_75917_77860 = state_75796__$1;
(statearr_75917_77860[(2)] = inst_75737);

(statearr_75917_77860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (37))){
var state_75796__$1 = state_75796;
var statearr_75918_77861 = state_75796__$1;
(statearr_75918_77861[(2)] = null);

(statearr_75918_77861[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75797 === (8))){
var inst_75694 = (state_75796[(8)]);
var inst_75713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_75694);
var state_75796__$1 = state_75796;
var statearr_75922_77864 = state_75796__$1;
(statearr_75922_77864[(2)] = inst_75713);

(statearr_75922_77864[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__73928__auto__ = null;
var cljs$core$async$mix_$_state_machine__73928__auto____0 = (function (){
var statearr_75924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75924[(0)] = cljs$core$async$mix_$_state_machine__73928__auto__);

(statearr_75924[(1)] = (1));

return statearr_75924;
});
var cljs$core$async$mix_$_state_machine__73928__auto____1 = (function (state_75796){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_75796);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e75925){var ex__73931__auto__ = e75925;
var statearr_75926_77874 = state_75796;
(statearr_75926_77874[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_75796[(4)]))){
var statearr_75927_77875 = state_75796;
(statearr_75927_77875[(1)] = cljs.core.first((state_75796[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77882 = state_75796;
state_75796 = G__77882;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__73928__auto__ = function(state_75796){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__73928__auto____1.call(this,state_75796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__73928__auto____0;
cljs$core$async$mix_$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__73928__auto____1;
return cljs$core$async$mix_$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_75929 = f__74247__auto__();
(statearr_75929[(6)] = c__74246__auto___77728);

return statearr_75929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_77886 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_77886(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_77894 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_77894(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_77897 = (function() {
var G__77898 = null;
var G__77898__1 = (function (p){
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
var G__77898__2 = (function (p,v){
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
G__77898 = function(p,v){
switch(arguments.length){
case 1:
return G__77898__1.call(this,p);
case 2:
return G__77898__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__77898.cljs$core$IFn$_invoke$arity$1 = G__77898__1;
G__77898.cljs$core$IFn$_invoke$arity$2 = G__77898__2;
return G__77898;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__75935 = arguments.length;
switch (G__75935) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77897(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_77897(p,v);
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
var G__75943 = arguments.length;
switch (G__75943) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__75939_SHARP_){
if(cljs.core.truth_((p1__75939_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__75939_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__75939_SHARP_.call(null,topic)))){
return p1__75939_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__75939_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async75949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async75949 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta75950){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta75950 = meta75950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_75951,meta75950__$1){
var self__ = this;
var _75951__$1 = this;
return (new cljs.core.async.t_cljs$core$async75949(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta75950__$1));
}));

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_75951){
var self__ = this;
var _75951__$1 = this;
return self__.meta75950;
}));

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async75949.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async75949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta75950","meta75950",-645661673,null)], null);
}));

(cljs.core.async.t_cljs$core$async75949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async75949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async75949");

(cljs.core.async.t_cljs$core$async75949.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async75949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async75949.
 */
cljs.core.async.__GT_t_cljs$core$async75949 = (function cljs$core$async$__GT_t_cljs$core$async75949(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75950){
return (new cljs.core.async.t_cljs$core$async75949(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta75950));
});

}

return (new cljs.core.async.t_cljs$core$async75949(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__74246__auto___77930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76031){
var state_val_76032 = (state_76031[(1)]);
if((state_val_76032 === (7))){
var inst_76027 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76033_77933 = state_76031__$1;
(statearr_76033_77933[(2)] = inst_76027);

(statearr_76033_77933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (20))){
var state_76031__$1 = state_76031;
var statearr_76034_77935 = state_76031__$1;
(statearr_76034_77935[(2)] = null);

(statearr_76034_77935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (1))){
var state_76031__$1 = state_76031;
var statearr_76035_77941 = state_76031__$1;
(statearr_76035_77941[(2)] = null);

(statearr_76035_77941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (24))){
var inst_76010 = (state_76031[(7)]);
var inst_76019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_76010);
var state_76031__$1 = state_76031;
var statearr_76036_77942 = state_76031__$1;
(statearr_76036_77942[(2)] = inst_76019);

(statearr_76036_77942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (4))){
var inst_75962 = (state_76031[(8)]);
var inst_75962__$1 = (state_76031[(2)]);
var inst_75963 = (inst_75962__$1 == null);
var state_76031__$1 = (function (){var statearr_76037 = state_76031;
(statearr_76037[(8)] = inst_75962__$1);

return statearr_76037;
})();
if(cljs.core.truth_(inst_75963)){
var statearr_76038_77943 = state_76031__$1;
(statearr_76038_77943[(1)] = (5));

} else {
var statearr_76039_77944 = state_76031__$1;
(statearr_76039_77944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (15))){
var inst_76004 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76040_77945 = state_76031__$1;
(statearr_76040_77945[(2)] = inst_76004);

(statearr_76040_77945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (21))){
var inst_76024 = (state_76031[(2)]);
var state_76031__$1 = (function (){var statearr_76043 = state_76031;
(statearr_76043[(9)] = inst_76024);

return statearr_76043;
})();
var statearr_76044_77951 = state_76031__$1;
(statearr_76044_77951[(2)] = null);

(statearr_76044_77951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (13))){
var inst_75986 = (state_76031[(10)]);
var inst_75988 = cljs.core.chunked_seq_QMARK_(inst_75986);
var state_76031__$1 = state_76031;
if(inst_75988){
var statearr_76046_77956 = state_76031__$1;
(statearr_76046_77956[(1)] = (16));

} else {
var statearr_76047_77958 = state_76031__$1;
(statearr_76047_77958[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (22))){
var inst_76016 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
if(cljs.core.truth_(inst_76016)){
var statearr_76048_77959 = state_76031__$1;
(statearr_76048_77959[(1)] = (23));

} else {
var statearr_76049_77960 = state_76031__$1;
(statearr_76049_77960[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (6))){
var inst_76012 = (state_76031[(11)]);
var inst_76010 = (state_76031[(7)]);
var inst_75962 = (state_76031[(8)]);
var inst_76010__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_75962) : topic_fn.call(null,inst_75962));
var inst_76011 = cljs.core.deref(mults);
var inst_76012__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_76011,inst_76010__$1);
var state_76031__$1 = (function (){var statearr_76053 = state_76031;
(statearr_76053[(11)] = inst_76012__$1);

(statearr_76053[(7)] = inst_76010__$1);

return statearr_76053;
})();
if(cljs.core.truth_(inst_76012__$1)){
var statearr_76054_77963 = state_76031__$1;
(statearr_76054_77963[(1)] = (19));

} else {
var statearr_76057_77964 = state_76031__$1;
(statearr_76057_77964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (25))){
var inst_76021 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76058_77965 = state_76031__$1;
(statearr_76058_77965[(2)] = inst_76021);

(statearr_76058_77965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (17))){
var inst_75986 = (state_76031[(10)]);
var inst_75995 = cljs.core.first(inst_75986);
var inst_75996 = cljs.core.async.muxch_STAR_(inst_75995);
var inst_75997 = cljs.core.async.close_BANG_(inst_75996);
var inst_75998 = cljs.core.next(inst_75986);
var inst_75972 = inst_75998;
var inst_75973 = null;
var inst_75974 = (0);
var inst_75975 = (0);
var state_76031__$1 = (function (){var statearr_76059 = state_76031;
(statearr_76059[(12)] = inst_75997);

(statearr_76059[(13)] = inst_75975);

(statearr_76059[(14)] = inst_75973);

(statearr_76059[(15)] = inst_75972);

(statearr_76059[(16)] = inst_75974);

return statearr_76059;
})();
var statearr_76060_77971 = state_76031__$1;
(statearr_76060_77971[(2)] = null);

(statearr_76060_77971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (3))){
var inst_76029 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76031__$1,inst_76029);
} else {
if((state_val_76032 === (12))){
var inst_76006 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76065_77978 = state_76031__$1;
(statearr_76065_77978[(2)] = inst_76006);

(statearr_76065_77978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (2))){
var state_76031__$1 = state_76031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76031__$1,(4),ch);
} else {
if((state_val_76032 === (23))){
var state_76031__$1 = state_76031;
var statearr_76067_77979 = state_76031__$1;
(statearr_76067_77979[(2)] = null);

(statearr_76067_77979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (19))){
var inst_76012 = (state_76031[(11)]);
var inst_75962 = (state_76031[(8)]);
var inst_76014 = cljs.core.async.muxch_STAR_(inst_76012);
var state_76031__$1 = state_76031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76031__$1,(22),inst_76014,inst_75962);
} else {
if((state_val_76032 === (11))){
var inst_75972 = (state_76031[(15)]);
var inst_75986 = (state_76031[(10)]);
var inst_75986__$1 = cljs.core.seq(inst_75972);
var state_76031__$1 = (function (){var statearr_76073 = state_76031;
(statearr_76073[(10)] = inst_75986__$1);

return statearr_76073;
})();
if(inst_75986__$1){
var statearr_76074_77982 = state_76031__$1;
(statearr_76074_77982[(1)] = (13));

} else {
var statearr_76075_77983 = state_76031__$1;
(statearr_76075_77983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (9))){
var inst_76008 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76076_77985 = state_76031__$1;
(statearr_76076_77985[(2)] = inst_76008);

(statearr_76076_77985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (5))){
var inst_75969 = cljs.core.deref(mults);
var inst_75970 = cljs.core.vals(inst_75969);
var inst_75971 = cljs.core.seq(inst_75970);
var inst_75972 = inst_75971;
var inst_75973 = null;
var inst_75974 = (0);
var inst_75975 = (0);
var state_76031__$1 = (function (){var statearr_76077 = state_76031;
(statearr_76077[(13)] = inst_75975);

(statearr_76077[(14)] = inst_75973);

(statearr_76077[(15)] = inst_75972);

(statearr_76077[(16)] = inst_75974);

return statearr_76077;
})();
var statearr_76078_77992 = state_76031__$1;
(statearr_76078_77992[(2)] = null);

(statearr_76078_77992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (14))){
var state_76031__$1 = state_76031;
var statearr_76082_77996 = state_76031__$1;
(statearr_76082_77996[(2)] = null);

(statearr_76082_77996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (16))){
var inst_75986 = (state_76031[(10)]);
var inst_75990 = cljs.core.chunk_first(inst_75986);
var inst_75991 = cljs.core.chunk_rest(inst_75986);
var inst_75992 = cljs.core.count(inst_75990);
var inst_75972 = inst_75991;
var inst_75973 = inst_75990;
var inst_75974 = inst_75992;
var inst_75975 = (0);
var state_76031__$1 = (function (){var statearr_76083 = state_76031;
(statearr_76083[(13)] = inst_75975);

(statearr_76083[(14)] = inst_75973);

(statearr_76083[(15)] = inst_75972);

(statearr_76083[(16)] = inst_75974);

return statearr_76083;
})();
var statearr_76084_78001 = state_76031__$1;
(statearr_76084_78001[(2)] = null);

(statearr_76084_78001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (10))){
var inst_75975 = (state_76031[(13)]);
var inst_75973 = (state_76031[(14)]);
var inst_75972 = (state_76031[(15)]);
var inst_75974 = (state_76031[(16)]);
var inst_75980 = cljs.core._nth(inst_75973,inst_75975);
var inst_75981 = cljs.core.async.muxch_STAR_(inst_75980);
var inst_75982 = cljs.core.async.close_BANG_(inst_75981);
var inst_75983 = (inst_75975 + (1));
var tmp76079 = inst_75973;
var tmp76080 = inst_75972;
var tmp76081 = inst_75974;
var inst_75972__$1 = tmp76080;
var inst_75973__$1 = tmp76079;
var inst_75974__$1 = tmp76081;
var inst_75975__$1 = inst_75983;
var state_76031__$1 = (function (){var statearr_76091 = state_76031;
(statearr_76091[(13)] = inst_75975__$1);

(statearr_76091[(17)] = inst_75982);

(statearr_76091[(14)] = inst_75973__$1);

(statearr_76091[(15)] = inst_75972__$1);

(statearr_76091[(16)] = inst_75974__$1);

return statearr_76091;
})();
var statearr_76092_78005 = state_76031__$1;
(statearr_76092_78005[(2)] = null);

(statearr_76092_78005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (18))){
var inst_76001 = (state_76031[(2)]);
var state_76031__$1 = state_76031;
var statearr_76093_78007 = state_76031__$1;
(statearr_76093_78007[(2)] = inst_76001);

(statearr_76093_78007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76032 === (8))){
var inst_75975 = (state_76031[(13)]);
var inst_75974 = (state_76031[(16)]);
var inst_75977 = (inst_75975 < inst_75974);
var inst_75978 = inst_75977;
var state_76031__$1 = state_76031;
if(cljs.core.truth_(inst_75978)){
var statearr_76094_78010 = state_76031__$1;
(statearr_76094_78010[(1)] = (10));

} else {
var statearr_76095_78011 = state_76031__$1;
(statearr_76095_78011[(1)] = (11));

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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76097[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76097[(1)] = (1));

return statearr_76097;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76031){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76031);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76098){var ex__73931__auto__ = e76098;
var statearr_76099_78012 = state_76031;
(statearr_76099_78012[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76031[(4)]))){
var statearr_76100_78013 = state_76031;
(statearr_76100_78013[(1)] = cljs.core.first((state_76031[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78014 = state_76031;
state_76031 = G__78014;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76102 = f__74247__auto__();
(statearr_76102[(6)] = c__74246__auto___77930);

return statearr_76102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var G__76105 = arguments.length;
switch (G__76105) {
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
var G__76109 = arguments.length;
switch (G__76109) {
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
var G__76113 = arguments.length;
switch (G__76113) {
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
var c__74246__auto___78041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76163){
var state_val_76166 = (state_76163[(1)]);
if((state_val_76166 === (7))){
var state_76163__$1 = state_76163;
var statearr_76168_78042 = state_76163__$1;
(statearr_76168_78042[(2)] = null);

(statearr_76168_78042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (1))){
var state_76163__$1 = state_76163;
var statearr_76169_78047 = state_76163__$1;
(statearr_76169_78047[(2)] = null);

(statearr_76169_78047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (4))){
var inst_76120 = (state_76163[(7)]);
var inst_76121 = (state_76163[(8)]);
var inst_76123 = (inst_76121 < inst_76120);
var state_76163__$1 = state_76163;
if(cljs.core.truth_(inst_76123)){
var statearr_76171_78050 = state_76163__$1;
(statearr_76171_78050[(1)] = (6));

} else {
var statearr_76172_78051 = state_76163__$1;
(statearr_76172_78051[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (15))){
var inst_76148 = (state_76163[(9)]);
var inst_76153 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_76148);
var state_76163__$1 = state_76163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76163__$1,(17),out,inst_76153);
} else {
if((state_val_76166 === (13))){
var inst_76148 = (state_76163[(9)]);
var inst_76148__$1 = (state_76163[(2)]);
var inst_76149 = cljs.core.some(cljs.core.nil_QMARK_,inst_76148__$1);
var state_76163__$1 = (function (){var statearr_76178 = state_76163;
(statearr_76178[(9)] = inst_76148__$1);

return statearr_76178;
})();
if(cljs.core.truth_(inst_76149)){
var statearr_76179_78059 = state_76163__$1;
(statearr_76179_78059[(1)] = (14));

} else {
var statearr_76180_78060 = state_76163__$1;
(statearr_76180_78060[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (6))){
var state_76163__$1 = state_76163;
var statearr_76181_78064 = state_76163__$1;
(statearr_76181_78064[(2)] = null);

(statearr_76181_78064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (17))){
var inst_76155 = (state_76163[(2)]);
var state_76163__$1 = (function (){var statearr_76189 = state_76163;
(statearr_76189[(10)] = inst_76155);

return statearr_76189;
})();
var statearr_76190_78068 = state_76163__$1;
(statearr_76190_78068[(2)] = null);

(statearr_76190_78068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (3))){
var inst_76160 = (state_76163[(2)]);
var state_76163__$1 = state_76163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76163__$1,inst_76160);
} else {
if((state_val_76166 === (12))){
var _ = (function (){var statearr_76191 = state_76163;
(statearr_76191[(4)] = cljs.core.rest((state_76163[(4)])));

return statearr_76191;
})();
var state_76163__$1 = state_76163;
var ex76186 = (state_76163__$1[(2)]);
var statearr_76193_78069 = state_76163__$1;
(statearr_76193_78069[(5)] = ex76186);


if((ex76186 instanceof Object)){
var statearr_76194_78073 = state_76163__$1;
(statearr_76194_78073[(1)] = (11));

(statearr_76194_78073[(5)] = null);

} else {
throw ex76186;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (2))){
var inst_76119 = cljs.core.reset_BANG_(dctr,cnt);
var inst_76120 = cnt;
var inst_76121 = (0);
var state_76163__$1 = (function (){var statearr_76195 = state_76163;
(statearr_76195[(7)] = inst_76120);

(statearr_76195[(8)] = inst_76121);

(statearr_76195[(11)] = inst_76119);

return statearr_76195;
})();
var statearr_76197_78074 = state_76163__$1;
(statearr_76197_78074[(2)] = null);

(statearr_76197_78074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (11))){
var inst_76126 = (state_76163[(2)]);
var inst_76127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_76163__$1 = (function (){var statearr_76198 = state_76163;
(statearr_76198[(12)] = inst_76126);

return statearr_76198;
})();
var statearr_76199_78077 = state_76163__$1;
(statearr_76199_78077[(2)] = inst_76127);

(statearr_76199_78077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (9))){
var inst_76121 = (state_76163[(8)]);
var _ = (function (){var statearr_76201 = state_76163;
(statearr_76201[(4)] = cljs.core.cons((12),(state_76163[(4)])));

return statearr_76201;
})();
var inst_76134 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_76121) : chs__$1.call(null,inst_76121));
var inst_76135 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_76121) : done.call(null,inst_76121));
var inst_76136 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_76134,inst_76135);
var ___$1 = (function (){var statearr_76202 = state_76163;
(statearr_76202[(4)] = cljs.core.rest((state_76163[(4)])));

return statearr_76202;
})();
var state_76163__$1 = state_76163;
var statearr_76203_78084 = state_76163__$1;
(statearr_76203_78084[(2)] = inst_76136);

(statearr_76203_78084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (5))){
var inst_76146 = (state_76163[(2)]);
var state_76163__$1 = (function (){var statearr_76204 = state_76163;
(statearr_76204[(13)] = inst_76146);

return statearr_76204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76163__$1,(13),dchan);
} else {
if((state_val_76166 === (14))){
var inst_76151 = cljs.core.async.close_BANG_(out);
var state_76163__$1 = state_76163;
var statearr_76205_78088 = state_76163__$1;
(statearr_76205_78088[(2)] = inst_76151);

(statearr_76205_78088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (16))){
var inst_76158 = (state_76163[(2)]);
var state_76163__$1 = state_76163;
var statearr_76206_78089 = state_76163__$1;
(statearr_76206_78089[(2)] = inst_76158);

(statearr_76206_78089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (10))){
var inst_76121 = (state_76163[(8)]);
var inst_76139 = (state_76163[(2)]);
var inst_76140 = (inst_76121 + (1));
var inst_76121__$1 = inst_76140;
var state_76163__$1 = (function (){var statearr_76207 = state_76163;
(statearr_76207[(14)] = inst_76139);

(statearr_76207[(8)] = inst_76121__$1);

return statearr_76207;
})();
var statearr_76208_78092 = state_76163__$1;
(statearr_76208_78092[(2)] = null);

(statearr_76208_78092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76166 === (8))){
var inst_76144 = (state_76163[(2)]);
var state_76163__$1 = state_76163;
var statearr_76209_78093 = state_76163__$1;
(statearr_76209_78093[(2)] = inst_76144);

(statearr_76209_78093[(1)] = (5));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76210[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76210[(1)] = (1));

return statearr_76210;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76163){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76163);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76211){var ex__73931__auto__ = e76211;
var statearr_76212_78098 = state_76163;
(statearr_76212_78098[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76163[(4)]))){
var statearr_76213_78100 = state_76163;
(statearr_76213_78100[(1)] = cljs.core.first((state_76163[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78101 = state_76163;
state_76163 = G__78101;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76216 = f__74247__auto__();
(statearr_76216[(6)] = c__74246__auto___78041);

return statearr_76216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var G__76223 = arguments.length;
switch (G__76223) {
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
var c__74246__auto___78110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76257){
var state_val_76258 = (state_76257[(1)]);
if((state_val_76258 === (7))){
var inst_76236 = (state_76257[(7)]);
var inst_76237 = (state_76257[(8)]);
var inst_76236__$1 = (state_76257[(2)]);
var inst_76237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76236__$1,(0),null);
var inst_76238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_76236__$1,(1),null);
var inst_76239 = (inst_76237__$1 == null);
var state_76257__$1 = (function (){var statearr_76264 = state_76257;
(statearr_76264[(7)] = inst_76236__$1);

(statearr_76264[(8)] = inst_76237__$1);

(statearr_76264[(9)] = inst_76238);

return statearr_76264;
})();
if(cljs.core.truth_(inst_76239)){
var statearr_76266_78115 = state_76257__$1;
(statearr_76266_78115[(1)] = (8));

} else {
var statearr_76268_78116 = state_76257__$1;
(statearr_76268_78116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (1))){
var inst_76225 = cljs.core.vec(chs);
var inst_76226 = inst_76225;
var state_76257__$1 = (function (){var statearr_76270 = state_76257;
(statearr_76270[(10)] = inst_76226);

return statearr_76270;
})();
var statearr_76271_78119 = state_76257__$1;
(statearr_76271_78119[(2)] = null);

(statearr_76271_78119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (4))){
var inst_76226 = (state_76257[(10)]);
var state_76257__$1 = state_76257;
return cljs.core.async.ioc_alts_BANG_(state_76257__$1,(7),inst_76226);
} else {
if((state_val_76258 === (6))){
var inst_76253 = (state_76257[(2)]);
var state_76257__$1 = state_76257;
var statearr_76272_78121 = state_76257__$1;
(statearr_76272_78121[(2)] = inst_76253);

(statearr_76272_78121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (3))){
var inst_76255 = (state_76257[(2)]);
var state_76257__$1 = state_76257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76257__$1,inst_76255);
} else {
if((state_val_76258 === (2))){
var inst_76226 = (state_76257[(10)]);
var inst_76228 = cljs.core.count(inst_76226);
var inst_76229 = (inst_76228 > (0));
var state_76257__$1 = state_76257;
if(cljs.core.truth_(inst_76229)){
var statearr_76278_78128 = state_76257__$1;
(statearr_76278_78128[(1)] = (4));

} else {
var statearr_76279_78129 = state_76257__$1;
(statearr_76279_78129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (11))){
var inst_76226 = (state_76257[(10)]);
var inst_76246 = (state_76257[(2)]);
var tmp76274 = inst_76226;
var inst_76226__$1 = tmp76274;
var state_76257__$1 = (function (){var statearr_76281 = state_76257;
(statearr_76281[(11)] = inst_76246);

(statearr_76281[(10)] = inst_76226__$1);

return statearr_76281;
})();
var statearr_76285_78134 = state_76257__$1;
(statearr_76285_78134[(2)] = null);

(statearr_76285_78134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (9))){
var inst_76237 = (state_76257[(8)]);
var state_76257__$1 = state_76257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76257__$1,(11),out,inst_76237);
} else {
if((state_val_76258 === (5))){
var inst_76251 = cljs.core.async.close_BANG_(out);
var state_76257__$1 = state_76257;
var statearr_76291_78136 = state_76257__$1;
(statearr_76291_78136[(2)] = inst_76251);

(statearr_76291_78136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (10))){
var inst_76249 = (state_76257[(2)]);
var state_76257__$1 = state_76257;
var statearr_76293_78139 = state_76257__$1;
(statearr_76293_78139[(2)] = inst_76249);

(statearr_76293_78139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76258 === (8))){
var inst_76236 = (state_76257[(7)]);
var inst_76237 = (state_76257[(8)]);
var inst_76226 = (state_76257[(10)]);
var inst_76238 = (state_76257[(9)]);
var inst_76241 = (function (){var cs = inst_76226;
var vec__76232 = inst_76236;
var v = inst_76237;
var c = inst_76238;
return (function (p1__76217_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__76217_SHARP_);
});
})();
var inst_76242 = cljs.core.filterv(inst_76241,inst_76226);
var inst_76226__$1 = inst_76242;
var state_76257__$1 = (function (){var statearr_76297 = state_76257;
(statearr_76297[(10)] = inst_76226__$1);

return statearr_76297;
})();
var statearr_76298_78142 = state_76257__$1;
(statearr_76298_78142[(2)] = null);

(statearr_76298_78142[(1)] = (2));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76299[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76299[(1)] = (1));

return statearr_76299;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76257){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76257);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76304){var ex__73931__auto__ = e76304;
var statearr_76305_78152 = state_76257;
(statearr_76305_78152[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76257[(4)]))){
var statearr_76306_78153 = state_76257;
(statearr_76306_78153[(1)] = cljs.core.first((state_76257[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78154 = state_76257;
state_76257 = G__78154;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76308 = f__74247__auto__();
(statearr_76308[(6)] = c__74246__auto___78110);

return statearr_76308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
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
var G__76315 = arguments.length;
switch (G__76315) {
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
var c__74246__auto___78161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76343){
var state_val_76344 = (state_76343[(1)]);
if((state_val_76344 === (7))){
var inst_76325 = (state_76343[(7)]);
var inst_76325__$1 = (state_76343[(2)]);
var inst_76326 = (inst_76325__$1 == null);
var inst_76327 = cljs.core.not(inst_76326);
var state_76343__$1 = (function (){var statearr_76352 = state_76343;
(statearr_76352[(7)] = inst_76325__$1);

return statearr_76352;
})();
if(inst_76327){
var statearr_76353_78164 = state_76343__$1;
(statearr_76353_78164[(1)] = (8));

} else {
var statearr_76354_78165 = state_76343__$1;
(statearr_76354_78165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (1))){
var inst_76320 = (0);
var state_76343__$1 = (function (){var statearr_76355 = state_76343;
(statearr_76355[(8)] = inst_76320);

return statearr_76355;
})();
var statearr_76356_78166 = state_76343__$1;
(statearr_76356_78166[(2)] = null);

(statearr_76356_78166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (4))){
var state_76343__$1 = state_76343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76343__$1,(7),ch);
} else {
if((state_val_76344 === (6))){
var inst_76338 = (state_76343[(2)]);
var state_76343__$1 = state_76343;
var statearr_76358_78167 = state_76343__$1;
(statearr_76358_78167[(2)] = inst_76338);

(statearr_76358_78167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (3))){
var inst_76340 = (state_76343[(2)]);
var inst_76341 = cljs.core.async.close_BANG_(out);
var state_76343__$1 = (function (){var statearr_76363 = state_76343;
(statearr_76363[(9)] = inst_76340);

return statearr_76363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76343__$1,inst_76341);
} else {
if((state_val_76344 === (2))){
var inst_76320 = (state_76343[(8)]);
var inst_76322 = (inst_76320 < n);
var state_76343__$1 = state_76343;
if(cljs.core.truth_(inst_76322)){
var statearr_76364_78168 = state_76343__$1;
(statearr_76364_78168[(1)] = (4));

} else {
var statearr_76365_78169 = state_76343__$1;
(statearr_76365_78169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (11))){
var inst_76320 = (state_76343[(8)]);
var inst_76330 = (state_76343[(2)]);
var inst_76331 = (inst_76320 + (1));
var inst_76320__$1 = inst_76331;
var state_76343__$1 = (function (){var statearr_76366 = state_76343;
(statearr_76366[(10)] = inst_76330);

(statearr_76366[(8)] = inst_76320__$1);

return statearr_76366;
})();
var statearr_76367_78172 = state_76343__$1;
(statearr_76367_78172[(2)] = null);

(statearr_76367_78172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (9))){
var state_76343__$1 = state_76343;
var statearr_76370_78173 = state_76343__$1;
(statearr_76370_78173[(2)] = null);

(statearr_76370_78173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (5))){
var state_76343__$1 = state_76343;
var statearr_76371_78174 = state_76343__$1;
(statearr_76371_78174[(2)] = null);

(statearr_76371_78174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (10))){
var inst_76335 = (state_76343[(2)]);
var state_76343__$1 = state_76343;
var statearr_76372_78175 = state_76343__$1;
(statearr_76372_78175[(2)] = inst_76335);

(statearr_76372_78175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76344 === (8))){
var inst_76325 = (state_76343[(7)]);
var state_76343__$1 = state_76343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76343__$1,(11),out,inst_76325);
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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76377[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76377[(1)] = (1));

return statearr_76377;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76343){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76343);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76380){var ex__73931__auto__ = e76380;
var statearr_76382_78176 = state_76343;
(statearr_76382_78176[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76343[(4)]))){
var statearr_76383_78177 = state_76343;
(statearr_76383_78177[(1)] = cljs.core.first((state_76343[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78178 = state_76343;
state_76343 = G__78178;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76384 = f__74247__auto__();
(statearr_76384[(6)] = c__74246__auto___78161);

return statearr_76384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76391 = (function (f,ch,meta76392){
this.f = f;
this.ch = ch;
this.meta76392 = meta76392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76393,meta76392__$1){
var self__ = this;
var _76393__$1 = this;
return (new cljs.core.async.t_cljs$core$async76391(self__.f,self__.ch,meta76392__$1));
}));

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76393){
var self__ = this;
var _76393__$1 = this;
return self__.meta76392;
}));

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76414 = (function (f,ch,meta76392,_,fn1,meta76415){
this.f = f;
this.ch = ch;
this.meta76392 = meta76392;
this._ = _;
this.fn1 = fn1;
this.meta76415 = meta76415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76416,meta76415__$1){
var self__ = this;
var _76416__$1 = this;
return (new cljs.core.async.t_cljs$core$async76414(self__.f,self__.ch,self__.meta76392,self__._,self__.fn1,meta76415__$1));
}));

(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76416){
var self__ = this;
var _76416__$1 = this;
return self__.meta76415;
}));

(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async76414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__76385_SHARP_){
var G__76438 = (((p1__76385_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__76385_SHARP_) : self__.f.call(null,p1__76385_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__76438) : f1.call(null,G__76438));
});
}));

(cljs.core.async.t_cljs$core$async76414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76392","meta76392",-1981695998,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async76391","cljs.core.async/t_cljs$core$async76391",1904443543,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta76415","meta76415",432221303,null)], null);
}));

(cljs.core.async.t_cljs$core$async76414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76414");

(cljs.core.async.t_cljs$core$async76414.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async76414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76414.
 */
cljs.core.async.__GT_t_cljs$core$async76414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76414(f__$1,ch__$1,meta76392__$1,___$2,fn1__$1,meta76415){
return (new cljs.core.async.t_cljs$core$async76414(f__$1,ch__$1,meta76392__$1,___$2,fn1__$1,meta76415));
});

}

return (new cljs.core.async.t_cljs$core$async76414(self__.f,self__.ch,self__.meta76392,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__76441 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__76441) : self__.f.call(null,G__76441));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async76391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76392","meta76392",-1981695998,null)], null);
}));

(cljs.core.async.t_cljs$core$async76391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76391");

(cljs.core.async.t_cljs$core$async76391.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async76391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76391.
 */
cljs.core.async.__GT_t_cljs$core$async76391 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async76391(f__$1,ch__$1,meta76392){
return (new cljs.core.async.t_cljs$core$async76391(f__$1,ch__$1,meta76392));
});

}

return (new cljs.core.async.t_cljs$core$async76391(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76443 = (function (f,ch,meta76444){
this.f = f;
this.ch = ch;
this.meta76444 = meta76444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76445,meta76444__$1){
var self__ = this;
var _76445__$1 = this;
return (new cljs.core.async.t_cljs$core$async76443(self__.f,self__.ch,meta76444__$1));
}));

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76445){
var self__ = this;
var _76445__$1 = this;
return self__.meta76444;
}));

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async76443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76444","meta76444",1306854215,null)], null);
}));

(cljs.core.async.t_cljs$core$async76443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76443");

(cljs.core.async.t_cljs$core$async76443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async76443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76443.
 */
cljs.core.async.__GT_t_cljs$core$async76443 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async76443(f__$1,ch__$1,meta76444){
return (new cljs.core.async.t_cljs$core$async76443(f__$1,ch__$1,meta76444));
});

}

return (new cljs.core.async.t_cljs$core$async76443(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async76455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async76455 = (function (p,ch,meta76456){
this.p = p;
this.ch = ch;
this.meta76456 = meta76456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76457,meta76456__$1){
var self__ = this;
var _76457__$1 = this;
return (new cljs.core.async.t_cljs$core$async76455(self__.p,self__.ch,meta76456__$1));
}));

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76457){
var self__ = this;
var _76457__$1 = this;
return self__.meta76456;
}));

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async76455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async76455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta76456","meta76456",521084592,null)], null);
}));

(cljs.core.async.t_cljs$core$async76455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async76455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async76455");

(cljs.core.async.t_cljs$core$async76455.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async76455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async76455.
 */
cljs.core.async.__GT_t_cljs$core$async76455 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async76455(p__$1,ch__$1,meta76456){
return (new cljs.core.async.t_cljs$core$async76455(p__$1,ch__$1,meta76456));
});

}

return (new cljs.core.async.t_cljs$core$async76455(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__76474 = arguments.length;
switch (G__76474) {
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
var c__74246__auto___78217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76513){
var state_val_76514 = (state_76513[(1)]);
if((state_val_76514 === (7))){
var inst_76506 = (state_76513[(2)]);
var state_76513__$1 = state_76513;
var statearr_76521_78226 = state_76513__$1;
(statearr_76521_78226[(2)] = inst_76506);

(statearr_76521_78226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (1))){
var state_76513__$1 = state_76513;
var statearr_76522_78229 = state_76513__$1;
(statearr_76522_78229[(2)] = null);

(statearr_76522_78229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (4))){
var inst_76491 = (state_76513[(7)]);
var inst_76491__$1 = (state_76513[(2)]);
var inst_76492 = (inst_76491__$1 == null);
var state_76513__$1 = (function (){var statearr_76523 = state_76513;
(statearr_76523[(7)] = inst_76491__$1);

return statearr_76523;
})();
if(cljs.core.truth_(inst_76492)){
var statearr_76524_78230 = state_76513__$1;
(statearr_76524_78230[(1)] = (5));

} else {
var statearr_76525_78231 = state_76513__$1;
(statearr_76525_78231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (6))){
var inst_76491 = (state_76513[(7)]);
var inst_76497 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_76491) : p.call(null,inst_76491));
var state_76513__$1 = state_76513;
if(cljs.core.truth_(inst_76497)){
var statearr_76527_78236 = state_76513__$1;
(statearr_76527_78236[(1)] = (8));

} else {
var statearr_76528_78237 = state_76513__$1;
(statearr_76528_78237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (3))){
var inst_76508 = (state_76513[(2)]);
var state_76513__$1 = state_76513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76513__$1,inst_76508);
} else {
if((state_val_76514 === (2))){
var state_76513__$1 = state_76513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76513__$1,(4),ch);
} else {
if((state_val_76514 === (11))){
var inst_76500 = (state_76513[(2)]);
var state_76513__$1 = state_76513;
var statearr_76531_78240 = state_76513__$1;
(statearr_76531_78240[(2)] = inst_76500);

(statearr_76531_78240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (9))){
var state_76513__$1 = state_76513;
var statearr_76532_78241 = state_76513__$1;
(statearr_76532_78241[(2)] = null);

(statearr_76532_78241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (5))){
var inst_76495 = cljs.core.async.close_BANG_(out);
var state_76513__$1 = state_76513;
var statearr_76533_78245 = state_76513__$1;
(statearr_76533_78245[(2)] = inst_76495);

(statearr_76533_78245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (10))){
var inst_76503 = (state_76513[(2)]);
var state_76513__$1 = (function (){var statearr_76534 = state_76513;
(statearr_76534[(8)] = inst_76503);

return statearr_76534;
})();
var statearr_76535_78250 = state_76513__$1;
(statearr_76535_78250[(2)] = null);

(statearr_76535_78250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76514 === (8))){
var inst_76491 = (state_76513[(7)]);
var state_76513__$1 = state_76513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76513__$1,(11),out,inst_76491);
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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76538 = [null,null,null,null,null,null,null,null,null];
(statearr_76538[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76538[(1)] = (1));

return statearr_76538;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76513){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76513);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76539){var ex__73931__auto__ = e76539;
var statearr_76540_78253 = state_76513;
(statearr_76540_78253[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76513[(4)]))){
var statearr_76541_78254 = state_76513;
(statearr_76541_78254[(1)] = cljs.core.first((state_76513[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78256 = state_76513;
state_76513 = G__78256;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76543 = f__74247__auto__();
(statearr_76543[(6)] = c__74246__auto___78217);

return statearr_76543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__76548 = arguments.length;
switch (G__76548) {
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
var c__74246__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76617){
var state_val_76618 = (state_76617[(1)]);
if((state_val_76618 === (7))){
var inst_76613 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
var statearr_76619_78267 = state_76617__$1;
(statearr_76619_78267[(2)] = inst_76613);

(statearr_76619_78267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (20))){
var inst_76583 = (state_76617[(7)]);
var inst_76594 = (state_76617[(2)]);
var inst_76595 = cljs.core.next(inst_76583);
var inst_76569 = inst_76595;
var inst_76570 = null;
var inst_76571 = (0);
var inst_76572 = (0);
var state_76617__$1 = (function (){var statearr_76620 = state_76617;
(statearr_76620[(8)] = inst_76571);

(statearr_76620[(9)] = inst_76594);

(statearr_76620[(10)] = inst_76570);

(statearr_76620[(11)] = inst_76572);

(statearr_76620[(12)] = inst_76569);

return statearr_76620;
})();
var statearr_76621_78270 = state_76617__$1;
(statearr_76621_78270[(2)] = null);

(statearr_76621_78270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (1))){
var state_76617__$1 = state_76617;
var statearr_76622_78271 = state_76617__$1;
(statearr_76622_78271[(2)] = null);

(statearr_76622_78271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (4))){
var inst_76556 = (state_76617[(13)]);
var inst_76556__$1 = (state_76617[(2)]);
var inst_76557 = (inst_76556__$1 == null);
var state_76617__$1 = (function (){var statearr_76623 = state_76617;
(statearr_76623[(13)] = inst_76556__$1);

return statearr_76623;
})();
if(cljs.core.truth_(inst_76557)){
var statearr_76624_78274 = state_76617__$1;
(statearr_76624_78274[(1)] = (5));

} else {
var statearr_76625_78275 = state_76617__$1;
(statearr_76625_78275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (15))){
var state_76617__$1 = state_76617;
var statearr_76630_78276 = state_76617__$1;
(statearr_76630_78276[(2)] = null);

(statearr_76630_78276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (21))){
var state_76617__$1 = state_76617;
var statearr_76631_78277 = state_76617__$1;
(statearr_76631_78277[(2)] = null);

(statearr_76631_78277[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (13))){
var inst_76571 = (state_76617[(8)]);
var inst_76570 = (state_76617[(10)]);
var inst_76572 = (state_76617[(11)]);
var inst_76569 = (state_76617[(12)]);
var inst_76579 = (state_76617[(2)]);
var inst_76580 = (inst_76572 + (1));
var tmp76627 = inst_76571;
var tmp76628 = inst_76570;
var tmp76629 = inst_76569;
var inst_76569__$1 = tmp76629;
var inst_76570__$1 = tmp76628;
var inst_76571__$1 = tmp76627;
var inst_76572__$1 = inst_76580;
var state_76617__$1 = (function (){var statearr_76632 = state_76617;
(statearr_76632[(8)] = inst_76571__$1);

(statearr_76632[(10)] = inst_76570__$1);

(statearr_76632[(14)] = inst_76579);

(statearr_76632[(11)] = inst_76572__$1);

(statearr_76632[(12)] = inst_76569__$1);

return statearr_76632;
})();
var statearr_76633_78280 = state_76617__$1;
(statearr_76633_78280[(2)] = null);

(statearr_76633_78280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (22))){
var state_76617__$1 = state_76617;
var statearr_76634_78283 = state_76617__$1;
(statearr_76634_78283[(2)] = null);

(statearr_76634_78283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (6))){
var inst_76556 = (state_76617[(13)]);
var inst_76567 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76556) : f.call(null,inst_76556));
var inst_76568 = cljs.core.seq(inst_76567);
var inst_76569 = inst_76568;
var inst_76570 = null;
var inst_76571 = (0);
var inst_76572 = (0);
var state_76617__$1 = (function (){var statearr_76636 = state_76617;
(statearr_76636[(8)] = inst_76571);

(statearr_76636[(10)] = inst_76570);

(statearr_76636[(11)] = inst_76572);

(statearr_76636[(12)] = inst_76569);

return statearr_76636;
})();
var statearr_76637_78285 = state_76617__$1;
(statearr_76637_78285[(2)] = null);

(statearr_76637_78285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (17))){
var inst_76583 = (state_76617[(7)]);
var inst_76587 = cljs.core.chunk_first(inst_76583);
var inst_76588 = cljs.core.chunk_rest(inst_76583);
var inst_76589 = cljs.core.count(inst_76587);
var inst_76569 = inst_76588;
var inst_76570 = inst_76587;
var inst_76571 = inst_76589;
var inst_76572 = (0);
var state_76617__$1 = (function (){var statearr_76638 = state_76617;
(statearr_76638[(8)] = inst_76571);

(statearr_76638[(10)] = inst_76570);

(statearr_76638[(11)] = inst_76572);

(statearr_76638[(12)] = inst_76569);

return statearr_76638;
})();
var statearr_76639_78287 = state_76617__$1;
(statearr_76639_78287[(2)] = null);

(statearr_76639_78287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (3))){
var inst_76615 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76617__$1,inst_76615);
} else {
if((state_val_76618 === (12))){
var inst_76603 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
var statearr_76640_78288 = state_76617__$1;
(statearr_76640_78288[(2)] = inst_76603);

(statearr_76640_78288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (2))){
var state_76617__$1 = state_76617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76617__$1,(4),in$);
} else {
if((state_val_76618 === (23))){
var inst_76611 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
var statearr_76642_78291 = state_76617__$1;
(statearr_76642_78291[(2)] = inst_76611);

(statearr_76642_78291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (19))){
var inst_76598 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
var statearr_76646_78292 = state_76617__$1;
(statearr_76646_78292[(2)] = inst_76598);

(statearr_76646_78292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (11))){
var inst_76583 = (state_76617[(7)]);
var inst_76569 = (state_76617[(12)]);
var inst_76583__$1 = cljs.core.seq(inst_76569);
var state_76617__$1 = (function (){var statearr_76647 = state_76617;
(statearr_76647[(7)] = inst_76583__$1);

return statearr_76647;
})();
if(inst_76583__$1){
var statearr_76648_78293 = state_76617__$1;
(statearr_76648_78293[(1)] = (14));

} else {
var statearr_76649_78294 = state_76617__$1;
(statearr_76649_78294[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (9))){
var inst_76605 = (state_76617[(2)]);
var inst_76606 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_76617__$1 = (function (){var statearr_76650 = state_76617;
(statearr_76650[(15)] = inst_76605);

return statearr_76650;
})();
if(cljs.core.truth_(inst_76606)){
var statearr_76651_78295 = state_76617__$1;
(statearr_76651_78295[(1)] = (21));

} else {
var statearr_76652_78296 = state_76617__$1;
(statearr_76652_78296[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (5))){
var inst_76559 = cljs.core.async.close_BANG_(out);
var state_76617__$1 = state_76617;
var statearr_76653_78298 = state_76617__$1;
(statearr_76653_78298[(2)] = inst_76559);

(statearr_76653_78298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (14))){
var inst_76583 = (state_76617[(7)]);
var inst_76585 = cljs.core.chunked_seq_QMARK_(inst_76583);
var state_76617__$1 = state_76617;
if(inst_76585){
var statearr_76654_78302 = state_76617__$1;
(statearr_76654_78302[(1)] = (17));

} else {
var statearr_76655_78303 = state_76617__$1;
(statearr_76655_78303[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (16))){
var inst_76601 = (state_76617[(2)]);
var state_76617__$1 = state_76617;
var statearr_76656_78304 = state_76617__$1;
(statearr_76656_78304[(2)] = inst_76601);

(statearr_76656_78304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76618 === (10))){
var inst_76570 = (state_76617[(10)]);
var inst_76572 = (state_76617[(11)]);
var inst_76577 = cljs.core._nth(inst_76570,inst_76572);
var state_76617__$1 = state_76617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76617__$1,(13),out,inst_76577);
} else {
if((state_val_76618 === (18))){
var inst_76583 = (state_76617[(7)]);
var inst_76592 = cljs.core.first(inst_76583);
var state_76617__$1 = state_76617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76617__$1,(20),out,inst_76592);
} else {
if((state_val_76618 === (8))){
var inst_76571 = (state_76617[(8)]);
var inst_76572 = (state_76617[(11)]);
var inst_76574 = (inst_76572 < inst_76571);
var inst_76575 = inst_76574;
var state_76617__$1 = state_76617;
if(cljs.core.truth_(inst_76575)){
var statearr_76669_78309 = state_76617__$1;
(statearr_76669_78309[(1)] = (10));

} else {
var statearr_76674_78310 = state_76617__$1;
(statearr_76674_78310[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____0 = (function (){
var statearr_76684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76684[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__);

(statearr_76684[(1)] = (1));

return statearr_76684;
});
var cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____1 = (function (state_76617){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76617);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76688){var ex__73931__auto__ = e76688;
var statearr_76689_78311 = state_76617;
(statearr_76689_78311[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76617[(4)]))){
var statearr_76694_78316 = state_76617;
(statearr_76694_78316[(1)] = cljs.core.first((state_76617[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78317 = state_76617;
state_76617 = G__78317;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__ = function(state_76617){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____1.call(this,state_76617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__73928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76705 = f__74247__auto__();
(statearr_76705[(6)] = c__74246__auto__);

return statearr_76705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));

return c__74246__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__76711 = arguments.length;
switch (G__76711) {
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
var G__76714 = arguments.length;
switch (G__76714) {
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
var G__76717 = arguments.length;
switch (G__76717) {
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
var c__74246__auto___78328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76741){
var state_val_76742 = (state_76741[(1)]);
if((state_val_76742 === (7))){
var inst_76736 = (state_76741[(2)]);
var state_76741__$1 = state_76741;
var statearr_76743_78330 = state_76741__$1;
(statearr_76743_78330[(2)] = inst_76736);

(statearr_76743_78330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (1))){
var inst_76718 = null;
var state_76741__$1 = (function (){var statearr_76744 = state_76741;
(statearr_76744[(7)] = inst_76718);

return statearr_76744;
})();
var statearr_76745_78331 = state_76741__$1;
(statearr_76745_78331[(2)] = null);

(statearr_76745_78331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (4))){
var inst_76721 = (state_76741[(8)]);
var inst_76721__$1 = (state_76741[(2)]);
var inst_76722 = (inst_76721__$1 == null);
var inst_76723 = cljs.core.not(inst_76722);
var state_76741__$1 = (function (){var statearr_76746 = state_76741;
(statearr_76746[(8)] = inst_76721__$1);

return statearr_76746;
})();
if(inst_76723){
var statearr_76747_78336 = state_76741__$1;
(statearr_76747_78336[(1)] = (5));

} else {
var statearr_76748_78337 = state_76741__$1;
(statearr_76748_78337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (6))){
var state_76741__$1 = state_76741;
var statearr_76749_78338 = state_76741__$1;
(statearr_76749_78338[(2)] = null);

(statearr_76749_78338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (3))){
var inst_76738 = (state_76741[(2)]);
var inst_76739 = cljs.core.async.close_BANG_(out);
var state_76741__$1 = (function (){var statearr_76752 = state_76741;
(statearr_76752[(9)] = inst_76738);

return statearr_76752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_76741__$1,inst_76739);
} else {
if((state_val_76742 === (2))){
var state_76741__$1 = state_76741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76741__$1,(4),ch);
} else {
if((state_val_76742 === (11))){
var inst_76721 = (state_76741[(8)]);
var inst_76730 = (state_76741[(2)]);
var inst_76718 = inst_76721;
var state_76741__$1 = (function (){var statearr_76756 = state_76741;
(statearr_76756[(10)] = inst_76730);

(statearr_76756[(7)] = inst_76718);

return statearr_76756;
})();
var statearr_76759_78343 = state_76741__$1;
(statearr_76759_78343[(2)] = null);

(statearr_76759_78343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (9))){
var inst_76721 = (state_76741[(8)]);
var state_76741__$1 = state_76741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76741__$1,(11),out,inst_76721);
} else {
if((state_val_76742 === (5))){
var inst_76721 = (state_76741[(8)]);
var inst_76718 = (state_76741[(7)]);
var inst_76725 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76721,inst_76718);
var state_76741__$1 = state_76741;
if(inst_76725){
var statearr_76765_78344 = state_76741__$1;
(statearr_76765_78344[(1)] = (8));

} else {
var statearr_76766_78345 = state_76741__$1;
(statearr_76766_78345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (10))){
var inst_76733 = (state_76741[(2)]);
var state_76741__$1 = state_76741;
var statearr_76773_78346 = state_76741__$1;
(statearr_76773_78346[(2)] = inst_76733);

(statearr_76773_78346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76742 === (8))){
var inst_76718 = (state_76741[(7)]);
var tmp76764 = inst_76718;
var inst_76718__$1 = tmp76764;
var state_76741__$1 = (function (){var statearr_76774 = state_76741;
(statearr_76774[(7)] = inst_76718__$1);

return statearr_76774;
})();
var statearr_76775_78347 = state_76741__$1;
(statearr_76775_78347[(2)] = null);

(statearr_76775_78347[(1)] = (2));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_76778[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76778[(1)] = (1));

return statearr_76778;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76741){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76741);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76779){var ex__73931__auto__ = e76779;
var statearr_76780_78348 = state_76741;
(statearr_76780_78348[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76741[(4)]))){
var statearr_76782_78349 = state_76741;
(statearr_76782_78349[(1)] = cljs.core.first((state_76741[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78350 = state_76741;
state_76741 = G__78350;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76786 = f__74247__auto__();
(statearr_76786[(6)] = c__74246__auto___78328);

return statearr_76786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__76793 = arguments.length;
switch (G__76793) {
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
var c__74246__auto___78352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_76848){
var state_val_76849 = (state_76848[(1)]);
if((state_val_76849 === (7))){
var inst_76843 = (state_76848[(2)]);
var state_76848__$1 = state_76848;
var statearr_76859_78353 = state_76848__$1;
(statearr_76859_78353[(2)] = inst_76843);

(statearr_76859_78353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (1))){
var inst_76802 = (new Array(n));
var inst_76803 = inst_76802;
var inst_76804 = (0);
var state_76848__$1 = (function (){var statearr_76862 = state_76848;
(statearr_76862[(7)] = inst_76803);

(statearr_76862[(8)] = inst_76804);

return statearr_76862;
})();
var statearr_76863_78354 = state_76848__$1;
(statearr_76863_78354[(2)] = null);

(statearr_76863_78354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (4))){
var inst_76808 = (state_76848[(9)]);
var inst_76808__$1 = (state_76848[(2)]);
var inst_76809 = (inst_76808__$1 == null);
var inst_76810 = cljs.core.not(inst_76809);
var state_76848__$1 = (function (){var statearr_76869 = state_76848;
(statearr_76869[(9)] = inst_76808__$1);

return statearr_76869;
})();
if(inst_76810){
var statearr_76871_78358 = state_76848__$1;
(statearr_76871_78358[(1)] = (5));

} else {
var statearr_76872_78359 = state_76848__$1;
(statearr_76872_78359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (15))){
var inst_76835 = (state_76848[(2)]);
var state_76848__$1 = state_76848;
var statearr_76873_78360 = state_76848__$1;
(statearr_76873_78360[(2)] = inst_76835);

(statearr_76873_78360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (13))){
var state_76848__$1 = state_76848;
var statearr_76876_78361 = state_76848__$1;
(statearr_76876_78361[(2)] = null);

(statearr_76876_78361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (6))){
var inst_76804 = (state_76848[(8)]);
var inst_76830 = (inst_76804 > (0));
var state_76848__$1 = state_76848;
if(cljs.core.truth_(inst_76830)){
var statearr_76878_78362 = state_76848__$1;
(statearr_76878_78362[(1)] = (12));

} else {
var statearr_76879_78363 = state_76848__$1;
(statearr_76879_78363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (3))){
var inst_76845 = (state_76848[(2)]);
var state_76848__$1 = state_76848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76848__$1,inst_76845);
} else {
if((state_val_76849 === (12))){
var inst_76803 = (state_76848[(7)]);
var inst_76832 = cljs.core.vec(inst_76803);
var state_76848__$1 = state_76848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76848__$1,(15),out,inst_76832);
} else {
if((state_val_76849 === (2))){
var state_76848__$1 = state_76848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76848__$1,(4),ch);
} else {
if((state_val_76849 === (11))){
var inst_76823 = (state_76848[(2)]);
var inst_76824 = (new Array(n));
var inst_76803 = inst_76824;
var inst_76804 = (0);
var state_76848__$1 = (function (){var statearr_76886 = state_76848;
(statearr_76886[(10)] = inst_76823);

(statearr_76886[(7)] = inst_76803);

(statearr_76886[(8)] = inst_76804);

return statearr_76886;
})();
var statearr_76888_78365 = state_76848__$1;
(statearr_76888_78365[(2)] = null);

(statearr_76888_78365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (9))){
var inst_76803 = (state_76848[(7)]);
var inst_76821 = cljs.core.vec(inst_76803);
var state_76848__$1 = state_76848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_76848__$1,(11),out,inst_76821);
} else {
if((state_val_76849 === (5))){
var inst_76815 = (state_76848[(11)]);
var inst_76803 = (state_76848[(7)]);
var inst_76804 = (state_76848[(8)]);
var inst_76808 = (state_76848[(9)]);
var inst_76813 = (inst_76803[inst_76804] = inst_76808);
var inst_76815__$1 = (inst_76804 + (1));
var inst_76816 = (inst_76815__$1 < n);
var state_76848__$1 = (function (){var statearr_76893 = state_76848;
(statearr_76893[(12)] = inst_76813);

(statearr_76893[(11)] = inst_76815__$1);

return statearr_76893;
})();
if(cljs.core.truth_(inst_76816)){
var statearr_76896_78369 = state_76848__$1;
(statearr_76896_78369[(1)] = (8));

} else {
var statearr_76898_78370 = state_76848__$1;
(statearr_76898_78370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (14))){
var inst_76839 = (state_76848[(2)]);
var inst_76841 = cljs.core.async.close_BANG_(out);
var state_76848__$1 = (function (){var statearr_76903 = state_76848;
(statearr_76903[(13)] = inst_76839);

return statearr_76903;
})();
var statearr_76905_78371 = state_76848__$1;
(statearr_76905_78371[(2)] = inst_76841);

(statearr_76905_78371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (10))){
var inst_76827 = (state_76848[(2)]);
var state_76848__$1 = state_76848;
var statearr_76910_78372 = state_76848__$1;
(statearr_76910_78372[(2)] = inst_76827);

(statearr_76910_78372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76849 === (8))){
var inst_76815 = (state_76848[(11)]);
var inst_76803 = (state_76848[(7)]);
var tmp76902 = inst_76803;
var inst_76803__$1 = tmp76902;
var inst_76804 = inst_76815;
var state_76848__$1 = (function (){var statearr_76912 = state_76848;
(statearr_76912[(7)] = inst_76803__$1);

(statearr_76912[(8)] = inst_76804);

return statearr_76912;
})();
var statearr_76913_78373 = state_76848__$1;
(statearr_76913_78373[(2)] = null);

(statearr_76913_78373[(1)] = (2));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_76917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76917[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_76917[(1)] = (1));

return statearr_76917;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_76848){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_76848);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e76919){var ex__73931__auto__ = e76919;
var statearr_76920_78386 = state_76848;
(statearr_76920_78386[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_76848[(4)]))){
var statearr_76921_78387 = state_76848;
(statearr_76921_78387[(1)] = cljs.core.first((state_76848[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78388 = state_76848;
state_76848 = G__78388;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_76848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_76848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_76923 = f__74247__auto__();
(statearr_76923[(6)] = c__74246__auto___78352);

return statearr_76923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__76937 = arguments.length;
switch (G__76937) {
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
var c__74246__auto___78390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__74247__auto__ = (function (){var switch__73927__auto__ = (function (state_77014){
var state_val_77015 = (state_77014[(1)]);
if((state_val_77015 === (7))){
var inst_77010 = (state_77014[(2)]);
var state_77014__$1 = state_77014;
var statearr_77024_78391 = state_77014__$1;
(statearr_77024_78391[(2)] = inst_77010);

(statearr_77024_78391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (1))){
var inst_76954 = [];
var inst_76955 = inst_76954;
var inst_76956 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_77014__$1 = (function (){var statearr_77028 = state_77014;
(statearr_77028[(7)] = inst_76955);

(statearr_77028[(8)] = inst_76956);

return statearr_77028;
})();
var statearr_77029_78392 = state_77014__$1;
(statearr_77029_78392[(2)] = null);

(statearr_77029_78392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (4))){
var inst_76964 = (state_77014[(9)]);
var inst_76964__$1 = (state_77014[(2)]);
var inst_76965 = (inst_76964__$1 == null);
var inst_76966 = cljs.core.not(inst_76965);
var state_77014__$1 = (function (){var statearr_77030 = state_77014;
(statearr_77030[(9)] = inst_76964__$1);

return statearr_77030;
})();
if(inst_76966){
var statearr_77031_78393 = state_77014__$1;
(statearr_77031_78393[(1)] = (5));

} else {
var statearr_77032_78395 = state_77014__$1;
(statearr_77032_78395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (15))){
var inst_77002 = (state_77014[(2)]);
var state_77014__$1 = state_77014;
var statearr_77033_78397 = state_77014__$1;
(statearr_77033_78397[(2)] = inst_77002);

(statearr_77033_78397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (13))){
var state_77014__$1 = state_77014;
var statearr_77034_78398 = state_77014__$1;
(statearr_77034_78398[(2)] = null);

(statearr_77034_78398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (6))){
var inst_76955 = (state_77014[(7)]);
var inst_76997 = inst_76955.length;
var inst_76998 = (inst_76997 > (0));
var state_77014__$1 = state_77014;
if(cljs.core.truth_(inst_76998)){
var statearr_77035_78399 = state_77014__$1;
(statearr_77035_78399[(1)] = (12));

} else {
var statearr_77036_78400 = state_77014__$1;
(statearr_77036_78400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (3))){
var inst_77012 = (state_77014[(2)]);
var state_77014__$1 = state_77014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77014__$1,inst_77012);
} else {
if((state_val_77015 === (12))){
var inst_76955 = (state_77014[(7)]);
var inst_77000 = cljs.core.vec(inst_76955);
var state_77014__$1 = state_77014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77014__$1,(15),out,inst_77000);
} else {
if((state_val_77015 === (2))){
var state_77014__$1 = state_77014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77014__$1,(4),ch);
} else {
if((state_val_77015 === (11))){
var inst_76970 = (state_77014[(10)]);
var inst_76964 = (state_77014[(9)]);
var inst_76987 = (state_77014[(2)]);
var inst_76988 = [];
var inst_76989 = inst_76988.push(inst_76964);
var inst_76955 = inst_76988;
var inst_76956 = inst_76970;
var state_77014__$1 = (function (){var statearr_77042 = state_77014;
(statearr_77042[(11)] = inst_76987);

(statearr_77042[(7)] = inst_76955);

(statearr_77042[(12)] = inst_76989);

(statearr_77042[(8)] = inst_76956);

return statearr_77042;
})();
var statearr_77043_78402 = state_77014__$1;
(statearr_77043_78402[(2)] = null);

(statearr_77043_78402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (9))){
var inst_76955 = (state_77014[(7)]);
var inst_76985 = cljs.core.vec(inst_76955);
var state_77014__$1 = state_77014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_77014__$1,(11),out,inst_76985);
} else {
if((state_val_77015 === (5))){
var inst_76970 = (state_77014[(10)]);
var inst_76964 = (state_77014[(9)]);
var inst_76956 = (state_77014[(8)]);
var inst_76970__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_76964) : f.call(null,inst_76964));
var inst_76976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76970__$1,inst_76956);
var inst_76977 = cljs.core.keyword_identical_QMARK_(inst_76956,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_76978 = ((inst_76976) || (inst_76977));
var state_77014__$1 = (function (){var statearr_77044 = state_77014;
(statearr_77044[(10)] = inst_76970__$1);

return statearr_77044;
})();
if(cljs.core.truth_(inst_76978)){
var statearr_77051_78403 = state_77014__$1;
(statearr_77051_78403[(1)] = (8));

} else {
var statearr_77052_78404 = state_77014__$1;
(statearr_77052_78404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (14))){
var inst_77006 = (state_77014[(2)]);
var inst_77008 = cljs.core.async.close_BANG_(out);
var state_77014__$1 = (function (){var statearr_77054 = state_77014;
(statearr_77054[(13)] = inst_77006);

return statearr_77054;
})();
var statearr_77055_78405 = state_77014__$1;
(statearr_77055_78405[(2)] = inst_77008);

(statearr_77055_78405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (10))){
var inst_76995 = (state_77014[(2)]);
var state_77014__$1 = state_77014;
var statearr_77056_78408 = state_77014__$1;
(statearr_77056_78408[(2)] = inst_76995);

(statearr_77056_78408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77015 === (8))){
var inst_76970 = (state_77014[(10)]);
var inst_76964 = (state_77014[(9)]);
var inst_76955 = (state_77014[(7)]);
var inst_76982 = inst_76955.push(inst_76964);
var tmp77053 = inst_76955;
var inst_76955__$1 = tmp77053;
var inst_76956 = inst_76970;
var state_77014__$1 = (function (){var statearr_77061 = state_77014;
(statearr_77061[(14)] = inst_76982);

(statearr_77061[(7)] = inst_76955__$1);

(statearr_77061[(8)] = inst_76956);

return statearr_77061;
})();
var statearr_77062_78409 = state_77014__$1;
(statearr_77062_78409[(2)] = null);

(statearr_77062_78409[(1)] = (2));


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
var cljs$core$async$state_machine__73928__auto__ = null;
var cljs$core$async$state_machine__73928__auto____0 = (function (){
var statearr_77064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77064[(0)] = cljs$core$async$state_machine__73928__auto__);

(statearr_77064[(1)] = (1));

return statearr_77064;
});
var cljs$core$async$state_machine__73928__auto____1 = (function (state_77014){
while(true){
var ret_value__73929__auto__ = (function (){try{while(true){
var result__73930__auto__ = switch__73927__auto__(state_77014);
if(cljs.core.keyword_identical_QMARK_(result__73930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__73930__auto__;
}
break;
}
}catch (e77067){var ex__73931__auto__ = e77067;
var statearr_77068_78412 = state_77014;
(statearr_77068_78412[(2)] = ex__73931__auto__);


if(cljs.core.seq((state_77014[(4)]))){
var statearr_77071_78413 = state_77014;
(statearr_77071_78413[(1)] = cljs.core.first((state_77014[(4)])));

} else {
throw ex__73931__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__73929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__78414 = state_77014;
state_77014 = G__78414;
continue;
} else {
return ret_value__73929__auto__;
}
break;
}
});
cljs$core$async$state_machine__73928__auto__ = function(state_77014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__73928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__73928__auto____1.call(this,state_77014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__73928__auto____0;
cljs$core$async$state_machine__73928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__73928__auto____1;
return cljs$core$async$state_machine__73928__auto__;
})()
})();
var state__74248__auto__ = (function (){var statearr_77073 = f__74247__auto__();
(statearr_77073[(6)] = c__74246__auto___78390);

return statearr_77073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__74248__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
