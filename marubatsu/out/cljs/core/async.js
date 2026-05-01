// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2174 = arguments.length;
switch (G__2174) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2175 = (function (f,blockable,meta2176){
this.f = f;
this.blockable = blockable;
this.meta2176 = meta2176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2177,meta2176__$1){
var self__ = this;
var _2177__$1 = this;
return (new cljs.core.async.t_cljs$core$async2175(self__.f,self__.blockable,meta2176__$1));
}));

(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2177){
var self__ = this;
var _2177__$1 = this;
return self__.meta2176;
}));

(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async2175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async2175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2176","meta2176",-1770302985,null)], null);
}));

(cljs.core.async.t_cljs$core$async2175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2175");

(cljs.core.async.t_cljs$core$async2175.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async2175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2175.
 */
cljs.core.async.__GT_t_cljs$core$async2175 = (function cljs$core$async$__GT_t_cljs$core$async2175(f__$1,blockable__$1,meta2176){
return (new cljs.core.async.t_cljs$core$async2175(f__$1,blockable__$1,meta2176));
});

}

return (new cljs.core.async.t_cljs$core$async2175(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__2181 = arguments.length;
switch (G__2181) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__2184 = arguments.length;
switch (G__2184) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__2187 = arguments.length;
switch (G__2187) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2189 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2189);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_2189);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__2191 = arguments.length;
switch (G__2191) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__2060__auto___2193 = n;
var x_2194 = (0);
while(true){
if((x_2194 < n__2060__auto___2193)){
(a[x_2194] = x_2194);

var G__2195 = (x_2194 + (1));
x_2194 = G__2195;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2196 = (function (flag,meta2197){
this.flag = flag;
this.meta2197 = meta2197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2198,meta2197__$1){
var self__ = this;
var _2198__$1 = this;
return (new cljs.core.async.t_cljs$core$async2196(self__.flag,meta2197__$1));
}));

(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2198){
var self__ = this;
var _2198__$1 = this;
return self__.meta2197;
}));

(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async2196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2197","meta2197",1694280357,null)], null);
}));

(cljs.core.async.t_cljs$core$async2196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2196");

(cljs.core.async.t_cljs$core$async2196.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async2196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2196.
 */
cljs.core.async.__GT_t_cljs$core$async2196 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2196(flag__$1,meta2197){
return (new cljs.core.async.t_cljs$core$async2196(flag__$1,meta2197));
});

}

return (new cljs.core.async.t_cljs$core$async2196(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2199 = (function (flag,cb,meta2200){
this.flag = flag;
this.cb = cb;
this.meta2200 = meta2200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2201,meta2200__$1){
var self__ = this;
var _2201__$1 = this;
return (new cljs.core.async.t_cljs$core$async2199(self__.flag,self__.cb,meta2200__$1));
}));

(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2201){
var self__ = this;
var _2201__$1 = this;
return self__.meta2200;
}));

(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async2199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2200","meta2200",932628850,null)], null);
}));

(cljs.core.async.t_cljs$core$async2199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2199");

(cljs.core.async.t_cljs$core$async2199.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async2199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2199.
 */
cljs.core.async.__GT_t_cljs$core$async2199 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2199(flag__$1,cb__$1,meta2200){
return (new cljs.core.async.t_cljs$core$async2199(flag__$1,cb__$1,meta2200));
});

}

return (new cljs.core.async.t_cljs$core$async2199(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2202_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2202_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2203_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2203_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__1469__auto__ = wport;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2204 = (i + (1));
i = G__2204;
continue;
}
} else {
return null;
}
break;
}
})();
var or__1469__auto__ = ret;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__1467__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__1467__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__1467__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__2199__auto__ = [];
var len__2193__auto___2209 = arguments.length;
var i__2194__auto___2210 = (0);
while(true){
if((i__2194__auto___2210 < len__2193__auto___2209)){
args__2199__auto__.push((arguments[i__2194__auto___2210]));

var G__2211 = (i__2194__auto___2210 + (1));
i__2194__auto___2210 = G__2211;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((1) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__2200__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2207){
var map__2208 = p__2207;
var map__2208__$1 = cljs.core.__destructure_map.call(null,map__2208);
var opts = map__2208__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2205){
var G__2206 = cljs.core.first.call(null,seq2205);
var seq2205__$1 = cljs.core.next.call(null,seq2205);
var self__2178__auto__ = this;
return self__2178__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2206,seq2205__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__2213 = arguments.length;
switch (G__2213) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2114__auto___2260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2237){
var state_val_2238 = (state_2237[(1)]);
if((state_val_2238 === (7))){
var inst_2233 = (state_2237[(2)]);
var state_2237__$1 = state_2237;
var statearr_2239_2261 = state_2237__$1;
(statearr_2239_2261[(2)] = inst_2233);

(statearr_2239_2261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (1))){
var state_2237__$1 = state_2237;
var statearr_2240_2262 = state_2237__$1;
(statearr_2240_2262[(2)] = null);

(statearr_2240_2262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (4))){
var inst_2216 = (state_2237[(7)]);
var inst_2216__$1 = (state_2237[(2)]);
var inst_2217 = (inst_2216__$1 == null);
var state_2237__$1 = (function (){var statearr_2241 = state_2237;
(statearr_2241[(7)] = inst_2216__$1);

return statearr_2241;
})();
if(cljs.core.truth_(inst_2217)){
var statearr_2242_2263 = state_2237__$1;
(statearr_2242_2263[(1)] = (5));

} else {
var statearr_2243_2264 = state_2237__$1;
(statearr_2243_2264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (13))){
var state_2237__$1 = state_2237;
var statearr_2244_2265 = state_2237__$1;
(statearr_2244_2265[(2)] = null);

(statearr_2244_2265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (6))){
var inst_2216 = (state_2237[(7)]);
var state_2237__$1 = state_2237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2237__$1,(11),to,inst_2216);
} else {
if((state_val_2238 === (3))){
var inst_2235 = (state_2237[(2)]);
var state_2237__$1 = state_2237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2237__$1,inst_2235);
} else {
if((state_val_2238 === (12))){
var state_2237__$1 = state_2237;
var statearr_2245_2266 = state_2237__$1;
(statearr_2245_2266[(2)] = null);

(statearr_2245_2266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (2))){
var state_2237__$1 = state_2237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2237__$1,(4),from);
} else {
if((state_val_2238 === (11))){
var inst_2226 = (state_2237[(2)]);
var state_2237__$1 = state_2237;
if(cljs.core.truth_(inst_2226)){
var statearr_2246_2267 = state_2237__$1;
(statearr_2246_2267[(1)] = (12));

} else {
var statearr_2247_2268 = state_2237__$1;
(statearr_2247_2268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (9))){
var state_2237__$1 = state_2237;
var statearr_2248_2269 = state_2237__$1;
(statearr_2248_2269[(2)] = null);

(statearr_2248_2269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (5))){
var state_2237__$1 = state_2237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2249_2270 = state_2237__$1;
(statearr_2249_2270[(1)] = (8));

} else {
var statearr_2250_2271 = state_2237__$1;
(statearr_2250_2271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (14))){
var inst_2231 = (state_2237[(2)]);
var state_2237__$1 = state_2237;
var statearr_2251_2272 = state_2237__$1;
(statearr_2251_2272[(2)] = inst_2231);

(statearr_2251_2272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (10))){
var inst_2223 = (state_2237[(2)]);
var state_2237__$1 = state_2237;
var statearr_2252_2273 = state_2237__$1;
(statearr_2252_2273[(2)] = inst_2223);

(statearr_2252_2273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2238 === (8))){
var inst_2220 = cljs.core.async.close_BANG_.call(null,to);
var state_2237__$1 = state_2237;
var statearr_2253_2274 = state_2237__$1;
(statearr_2253_2274[(2)] = inst_2220);

(statearr_2253_2274[(1)] = (10));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_2254 = [null,null,null,null,null,null,null,null];
(statearr_2254[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_2254[(1)] = (1));

return statearr_2254;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_2237){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2255){var ex__2044__auto__ = e2255;
var statearr_2256_2275 = state_2237;
(statearr_2256_2275[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2237[(4)]))){
var statearr_2257_2276 = state_2237;
(statearr_2257_2276[(1)] = cljs.core.first.call(null,(state_2237[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2277 = state_2237;
state_2237 = G__2277;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_2237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_2237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2258 = f__2115__auto__.call(null);
(statearr_2258[(6)] = c__2114__auto___2260);

return statearr_2258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__2278){
var vec__2279 = p__2278;
var v = cljs.core.nth.call(null,vec__2279,(0),null);
var p = cljs.core.nth.call(null,vec__2279,(1),null);
var job = vec__2279;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2114__auto___2455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2286){
var state_val_2287 = (state_2286[(1)]);
if((state_val_2287 === (1))){
var state_2286__$1 = state_2286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2286__$1,(2),res,v);
} else {
if((state_val_2287 === (2))){
var inst_2283 = (state_2286[(2)]);
var inst_2284 = cljs.core.async.close_BANG_.call(null,res);
var state_2286__$1 = (function (){var statearr_2288 = state_2286;
(statearr_2288[(7)] = inst_2283);

return statearr_2288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2286__$1,inst_2284);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_2289 = [null,null,null,null,null,null,null,null];
(statearr_2289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__);

(statearr_2289[(1)] = (1));

return statearr_2289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1 = (function (state_2286){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2290){var ex__2044__auto__ = e2290;
var statearr_2291_2456 = state_2286;
(statearr_2291_2456[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2286[(4)]))){
var statearr_2292_2457 = state_2286;
(statearr_2292_2457[(1)] = cljs.core.first.call(null,(state_2286[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2458 = state_2286;
state_2286 = G__2458;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = function(state_2286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1.call(this,state_2286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2293 = f__2115__auto__.call(null);
(statearr_2293[(6)] = c__2114__auto___2455);

return statearr_2293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__2294){
var vec__2295 = p__2294;
var v = cljs.core.nth.call(null,vec__2295,(0),null);
var p = cljs.core.nth.call(null,vec__2295,(1),null);
var job = vec__2295;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__2060__auto___2459 = n;
var __2460 = (0);
while(true){
if((__2460 < n__2060__auto___2459)){
var G__2298_2461 = type;
var G__2298_2462__$1 = (((G__2298_2461 instanceof cljs.core.Keyword))?G__2298_2461.fqn:null);
switch (G__2298_2462__$1) {
case "compute":
var c__2114__auto___2464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2460,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = ((function (__2460,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function (state_2311){
var state_val_2312 = (state_2311[(1)]);
if((state_val_2312 === (1))){
var state_2311__$1 = state_2311;
var statearr_2313_2465 = state_2311__$1;
(statearr_2313_2465[(2)] = null);

(statearr_2313_2465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2312 === (2))){
var state_2311__$1 = state_2311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2311__$1,(4),jobs);
} else {
if((state_val_2312 === (3))){
var inst_2309 = (state_2311[(2)]);
var state_2311__$1 = state_2311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2311__$1,inst_2309);
} else {
if((state_val_2312 === (4))){
var inst_2301 = (state_2311[(2)]);
var inst_2302 = process__$1.call(null,inst_2301);
var state_2311__$1 = state_2311;
if(cljs.core.truth_(inst_2302)){
var statearr_2314_2466 = state_2311__$1;
(statearr_2314_2466[(1)] = (5));

} else {
var statearr_2315_2467 = state_2311__$1;
(statearr_2315_2467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2312 === (5))){
var state_2311__$1 = state_2311;
var statearr_2316_2468 = state_2311__$1;
(statearr_2316_2468[(2)] = null);

(statearr_2316_2468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2312 === (6))){
var state_2311__$1 = state_2311;
var statearr_2317_2469 = state_2311__$1;
(statearr_2317_2469[(2)] = null);

(statearr_2317_2469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2312 === (7))){
var inst_2307 = (state_2311[(2)]);
var state_2311__$1 = state_2311;
var statearr_2318_2470 = state_2311__$1;
(statearr_2318_2470[(2)] = inst_2307);

(statearr_2318_2470[(1)] = (3));


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
});})(__2460,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
;
return ((function (__2460,switch__2040__auto__,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_2319 = [null,null,null,null,null,null,null];
(statearr_2319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__);

(statearr_2319[(1)] = (1));

return statearr_2319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1 = (function (state_2311){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2320){var ex__2044__auto__ = e2320;
var statearr_2321_2471 = state_2311;
(statearr_2321_2471[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2311[(4)]))){
var statearr_2322_2472 = state_2311;
(statearr_2322_2472[(1)] = cljs.core.first.call(null,(state_2311[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2473 = state_2311;
state_2311 = G__2473;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = function(state_2311){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1.call(this,state_2311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__;
})()
;})(__2460,switch__2040__auto__,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
})();
var state__2116__auto__ = (function (){var statearr_2323 = f__2115__auto__.call(null);
(statearr_2323[(6)] = c__2114__auto___2464);

return statearr_2323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
});})(__2460,c__2114__auto___2464,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
);


break;
case "async":
var c__2114__auto___2474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2460,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = ((function (__2460,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function (state_2336){
var state_val_2337 = (state_2336[(1)]);
if((state_val_2337 === (1))){
var state_2336__$1 = state_2336;
var statearr_2338_2475 = state_2336__$1;
(statearr_2338_2475[(2)] = null);

(statearr_2338_2475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2337 === (2))){
var state_2336__$1 = state_2336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2336__$1,(4),jobs);
} else {
if((state_val_2337 === (3))){
var inst_2334 = (state_2336[(2)]);
var state_2336__$1 = state_2336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2336__$1,inst_2334);
} else {
if((state_val_2337 === (4))){
var inst_2326 = (state_2336[(2)]);
var inst_2327 = async.call(null,inst_2326);
var state_2336__$1 = state_2336;
if(cljs.core.truth_(inst_2327)){
var statearr_2339_2476 = state_2336__$1;
(statearr_2339_2476[(1)] = (5));

} else {
var statearr_2340_2477 = state_2336__$1;
(statearr_2340_2477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2337 === (5))){
var state_2336__$1 = state_2336;
var statearr_2341_2478 = state_2336__$1;
(statearr_2341_2478[(2)] = null);

(statearr_2341_2478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2337 === (6))){
var state_2336__$1 = state_2336;
var statearr_2342_2479 = state_2336__$1;
(statearr_2342_2479[(2)] = null);

(statearr_2342_2479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2337 === (7))){
var inst_2332 = (state_2336[(2)]);
var state_2336__$1 = state_2336;
var statearr_2343_2480 = state_2336__$1;
(statearr_2343_2480[(2)] = inst_2332);

(statearr_2343_2480[(1)] = (3));


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
});})(__2460,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
;
return ((function (__2460,switch__2040__auto__,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_2344 = [null,null,null,null,null,null,null];
(statearr_2344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__);

(statearr_2344[(1)] = (1));

return statearr_2344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1 = (function (state_2336){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2345){var ex__2044__auto__ = e2345;
var statearr_2346_2481 = state_2336;
(statearr_2346_2481[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2336[(4)]))){
var statearr_2347_2482 = state_2336;
(statearr_2347_2482[(1)] = cljs.core.first.call(null,(state_2336[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2483 = state_2336;
state_2336 = G__2483;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = function(state_2336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1.call(this,state_2336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__;
})()
;})(__2460,switch__2040__auto__,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
})();
var state__2116__auto__ = (function (){var statearr_2348 = f__2115__auto__.call(null);
(statearr_2348[(6)] = c__2114__auto___2474);

return statearr_2348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
});})(__2460,c__2114__auto___2474,G__2298_2461,G__2298_2462__$1,n__2060__auto___2459,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2298_2462__$1)].join('')));

}

var G__2484 = (__2460 + (1));
__2460 = G__2484;
continue;
} else {
}
break;
}

var c__2114__auto___2485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2370){
var state_val_2371 = (state_2370[(1)]);
if((state_val_2371 === (7))){
var inst_2366 = (state_2370[(2)]);
var state_2370__$1 = state_2370;
var statearr_2372_2486 = state_2370__$1;
(statearr_2372_2486[(2)] = inst_2366);

(statearr_2372_2486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2371 === (1))){
var state_2370__$1 = state_2370;
var statearr_2373_2487 = state_2370__$1;
(statearr_2373_2487[(2)] = null);

(statearr_2373_2487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2371 === (4))){
var inst_2351 = (state_2370[(7)]);
var inst_2351__$1 = (state_2370[(2)]);
var inst_2352 = (inst_2351__$1 == null);
var state_2370__$1 = (function (){var statearr_2374 = state_2370;
(statearr_2374[(7)] = inst_2351__$1);

return statearr_2374;
})();
if(cljs.core.truth_(inst_2352)){
var statearr_2375_2488 = state_2370__$1;
(statearr_2375_2488[(1)] = (5));

} else {
var statearr_2376_2489 = state_2370__$1;
(statearr_2376_2489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2371 === (6))){
var inst_2356 = (state_2370[(8)]);
var inst_2351 = (state_2370[(7)]);
var inst_2356__$1 = cljs.core.async.chan.call(null,(1));
var inst_2357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2358 = [inst_2351,inst_2356__$1];
var inst_2359 = (new cljs.core.PersistentVector(null,2,(5),inst_2357,inst_2358,null));
var state_2370__$1 = (function (){var statearr_2377 = state_2370;
(statearr_2377[(8)] = inst_2356__$1);

return statearr_2377;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2370__$1,(8),jobs,inst_2359);
} else {
if((state_val_2371 === (3))){
var inst_2368 = (state_2370[(2)]);
var state_2370__$1 = state_2370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2370__$1,inst_2368);
} else {
if((state_val_2371 === (2))){
var state_2370__$1 = state_2370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2370__$1,(4),from);
} else {
if((state_val_2371 === (9))){
var inst_2363 = (state_2370[(2)]);
var state_2370__$1 = (function (){var statearr_2378 = state_2370;
(statearr_2378[(9)] = inst_2363);

return statearr_2378;
})();
var statearr_2379_2490 = state_2370__$1;
(statearr_2379_2490[(2)] = null);

(statearr_2379_2490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2371 === (5))){
var inst_2354 = cljs.core.async.close_BANG_.call(null,jobs);
var state_2370__$1 = state_2370;
var statearr_2380_2491 = state_2370__$1;
(statearr_2380_2491[(2)] = inst_2354);

(statearr_2380_2491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2371 === (8))){
var inst_2356 = (state_2370[(8)]);
var inst_2361 = (state_2370[(2)]);
var state_2370__$1 = (function (){var statearr_2381 = state_2370;
(statearr_2381[(10)] = inst_2361);

return statearr_2381;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2370__$1,(9),results,inst_2356);
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
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_2382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__);

(statearr_2382[(1)] = (1));

return statearr_2382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1 = (function (state_2370){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2383){var ex__2044__auto__ = e2383;
var statearr_2384_2492 = state_2370;
(statearr_2384_2492[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2370[(4)]))){
var statearr_2385_2493 = state_2370;
(statearr_2385_2493[(1)] = cljs.core.first.call(null,(state_2370[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2494 = state_2370;
state_2370 = G__2494;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = function(state_2370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1.call(this,state_2370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2386 = f__2115__auto__.call(null);
(statearr_2386[(6)] = c__2114__auto___2485);

return statearr_2386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


var c__2114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2424){
var state_val_2425 = (state_2424[(1)]);
if((state_val_2425 === (7))){
var inst_2420 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
var statearr_2426_2495 = state_2424__$1;
(statearr_2426_2495[(2)] = inst_2420);

(statearr_2426_2495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (20))){
var state_2424__$1 = state_2424;
var statearr_2427_2496 = state_2424__$1;
(statearr_2427_2496[(2)] = null);

(statearr_2427_2496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (1))){
var state_2424__$1 = state_2424;
var statearr_2428_2497 = state_2424__$1;
(statearr_2428_2497[(2)] = null);

(statearr_2428_2497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (4))){
var inst_2389 = (state_2424[(7)]);
var inst_2389__$1 = (state_2424[(2)]);
var inst_2390 = (inst_2389__$1 == null);
var state_2424__$1 = (function (){var statearr_2429 = state_2424;
(statearr_2429[(7)] = inst_2389__$1);

return statearr_2429;
})();
if(cljs.core.truth_(inst_2390)){
var statearr_2430_2498 = state_2424__$1;
(statearr_2430_2498[(1)] = (5));

} else {
var statearr_2431_2499 = state_2424__$1;
(statearr_2431_2499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (15))){
var inst_2402 = (state_2424[(8)]);
var state_2424__$1 = state_2424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2424__$1,(18),to,inst_2402);
} else {
if((state_val_2425 === (21))){
var inst_2415 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
var statearr_2432_2500 = state_2424__$1;
(statearr_2432_2500[(2)] = inst_2415);

(statearr_2432_2500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (13))){
var inst_2417 = (state_2424[(2)]);
var state_2424__$1 = (function (){var statearr_2433 = state_2424;
(statearr_2433[(9)] = inst_2417);

return statearr_2433;
})();
var statearr_2434_2501 = state_2424__$1;
(statearr_2434_2501[(2)] = null);

(statearr_2434_2501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (6))){
var inst_2389 = (state_2424[(7)]);
var state_2424__$1 = state_2424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2424__$1,(11),inst_2389);
} else {
if((state_val_2425 === (17))){
var inst_2410 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
if(cljs.core.truth_(inst_2410)){
var statearr_2435_2502 = state_2424__$1;
(statearr_2435_2502[(1)] = (19));

} else {
var statearr_2436_2503 = state_2424__$1;
(statearr_2436_2503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (3))){
var inst_2422 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2424__$1,inst_2422);
} else {
if((state_val_2425 === (12))){
var inst_2399 = (state_2424[(10)]);
var state_2424__$1 = state_2424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2424__$1,(14),inst_2399);
} else {
if((state_val_2425 === (2))){
var state_2424__$1 = state_2424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2424__$1,(4),results);
} else {
if((state_val_2425 === (19))){
var state_2424__$1 = state_2424;
var statearr_2437_2504 = state_2424__$1;
(statearr_2437_2504[(2)] = null);

(statearr_2437_2504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (11))){
var inst_2399 = (state_2424[(2)]);
var state_2424__$1 = (function (){var statearr_2438 = state_2424;
(statearr_2438[(10)] = inst_2399);

return statearr_2438;
})();
var statearr_2439_2505 = state_2424__$1;
(statearr_2439_2505[(2)] = null);

(statearr_2439_2505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (9))){
var state_2424__$1 = state_2424;
var statearr_2440_2506 = state_2424__$1;
(statearr_2440_2506[(2)] = null);

(statearr_2440_2506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (5))){
var state_2424__$1 = state_2424;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2441_2507 = state_2424__$1;
(statearr_2441_2507[(1)] = (8));

} else {
var statearr_2442_2508 = state_2424__$1;
(statearr_2442_2508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (14))){
var inst_2404 = (state_2424[(11)]);
var inst_2402 = (state_2424[(8)]);
var inst_2402__$1 = (state_2424[(2)]);
var inst_2403 = (inst_2402__$1 == null);
var inst_2404__$1 = cljs.core.not.call(null,inst_2403);
var state_2424__$1 = (function (){var statearr_2443 = state_2424;
(statearr_2443[(11)] = inst_2404__$1);

(statearr_2443[(8)] = inst_2402__$1);

return statearr_2443;
})();
if(inst_2404__$1){
var statearr_2444_2509 = state_2424__$1;
(statearr_2444_2509[(1)] = (15));

} else {
var statearr_2445_2510 = state_2424__$1;
(statearr_2445_2510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (16))){
var inst_2404 = (state_2424[(11)]);
var state_2424__$1 = state_2424;
var statearr_2446_2511 = state_2424__$1;
(statearr_2446_2511[(2)] = inst_2404);

(statearr_2446_2511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (10))){
var inst_2396 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
var statearr_2447_2512 = state_2424__$1;
(statearr_2447_2512[(2)] = inst_2396);

(statearr_2447_2512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (18))){
var inst_2407 = (state_2424[(2)]);
var state_2424__$1 = state_2424;
var statearr_2448_2513 = state_2424__$1;
(statearr_2448_2513[(2)] = inst_2407);

(statearr_2448_2513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2425 === (8))){
var inst_2393 = cljs.core.async.close_BANG_.call(null,to);
var state_2424__$1 = state_2424;
var statearr_2449_2514 = state_2424__$1;
(statearr_2449_2514[(2)] = inst_2393);

(statearr_2449_2514[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_2450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__);

(statearr_2450[(1)] = (1));

return statearr_2450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1 = (function (state_2424){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2451){var ex__2044__auto__ = e2451;
var statearr_2452_2515 = state_2424;
(statearr_2452_2515[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2424[(4)]))){
var statearr_2453_2516 = state_2424;
(statearr_2453_2516[(1)] = cljs.core.first.call(null,(state_2424[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2517 = state_2424;
state_2424 = G__2517;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__ = function(state_2424){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1.call(this,state_2424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2454 = f__2115__auto__.call(null);
(statearr_2454[(6)] = c__2114__auto__);

return statearr_2454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

return c__2114__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__2519 = arguments.length;
switch (G__2519) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__2522 = arguments.length;
switch (G__2522) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__2525 = arguments.length;
switch (G__2525) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2114__auto___2575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2551){
var state_val_2552 = (state_2551[(1)]);
if((state_val_2552 === (7))){
var inst_2547 = (state_2551[(2)]);
var state_2551__$1 = state_2551;
var statearr_2553_2576 = state_2551__$1;
(statearr_2553_2576[(2)] = inst_2547);

(statearr_2553_2576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (1))){
var state_2551__$1 = state_2551;
var statearr_2554_2577 = state_2551__$1;
(statearr_2554_2577[(2)] = null);

(statearr_2554_2577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (4))){
var inst_2528 = (state_2551[(7)]);
var inst_2528__$1 = (state_2551[(2)]);
var inst_2529 = (inst_2528__$1 == null);
var state_2551__$1 = (function (){var statearr_2555 = state_2551;
(statearr_2555[(7)] = inst_2528__$1);

return statearr_2555;
})();
if(cljs.core.truth_(inst_2529)){
var statearr_2556_2578 = state_2551__$1;
(statearr_2556_2578[(1)] = (5));

} else {
var statearr_2557_2579 = state_2551__$1;
(statearr_2557_2579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (13))){
var state_2551__$1 = state_2551;
var statearr_2558_2580 = state_2551__$1;
(statearr_2558_2580[(2)] = null);

(statearr_2558_2580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (6))){
var inst_2528 = (state_2551[(7)]);
var inst_2534 = p.call(null,inst_2528);
var state_2551__$1 = state_2551;
if(cljs.core.truth_(inst_2534)){
var statearr_2559_2581 = state_2551__$1;
(statearr_2559_2581[(1)] = (9));

} else {
var statearr_2560_2582 = state_2551__$1;
(statearr_2560_2582[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (3))){
var inst_2549 = (state_2551[(2)]);
var state_2551__$1 = state_2551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2551__$1,inst_2549);
} else {
if((state_val_2552 === (12))){
var state_2551__$1 = state_2551;
var statearr_2561_2583 = state_2551__$1;
(statearr_2561_2583[(2)] = null);

(statearr_2561_2583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (2))){
var state_2551__$1 = state_2551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2551__$1,(4),ch);
} else {
if((state_val_2552 === (11))){
var inst_2528 = (state_2551[(7)]);
var inst_2538 = (state_2551[(2)]);
var state_2551__$1 = state_2551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2551__$1,(8),inst_2538,inst_2528);
} else {
if((state_val_2552 === (9))){
var state_2551__$1 = state_2551;
var statearr_2562_2584 = state_2551__$1;
(statearr_2562_2584[(2)] = tc);

(statearr_2562_2584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (5))){
var inst_2531 = cljs.core.async.close_BANG_.call(null,tc);
var inst_2532 = cljs.core.async.close_BANG_.call(null,fc);
var state_2551__$1 = (function (){var statearr_2563 = state_2551;
(statearr_2563[(8)] = inst_2531);

return statearr_2563;
})();
var statearr_2564_2585 = state_2551__$1;
(statearr_2564_2585[(2)] = inst_2532);

(statearr_2564_2585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (14))){
var inst_2545 = (state_2551[(2)]);
var state_2551__$1 = state_2551;
var statearr_2565_2586 = state_2551__$1;
(statearr_2565_2586[(2)] = inst_2545);

(statearr_2565_2586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (10))){
var state_2551__$1 = state_2551;
var statearr_2566_2587 = state_2551__$1;
(statearr_2566_2587[(2)] = fc);

(statearr_2566_2587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2552 === (8))){
var inst_2540 = (state_2551[(2)]);
var state_2551__$1 = state_2551;
if(cljs.core.truth_(inst_2540)){
var statearr_2567_2588 = state_2551__$1;
(statearr_2567_2588[(1)] = (12));

} else {
var statearr_2568_2589 = state_2551__$1;
(statearr_2568_2589[(1)] = (13));

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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_2569 = [null,null,null,null,null,null,null,null,null];
(statearr_2569[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_2569[(1)] = (1));

return statearr_2569;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_2551){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2570){var ex__2044__auto__ = e2570;
var statearr_2571_2590 = state_2551;
(statearr_2571_2590[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2551[(4)]))){
var statearr_2572_2591 = state_2551;
(statearr_2572_2591[(1)] = cljs.core.first.call(null,(state_2551[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2592 = state_2551;
state_2551 = G__2592;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_2551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_2551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2573 = f__2115__auto__.call(null);
(statearr_2573[(6)] = c__2114__auto___2575);

return statearr_2573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
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
var c__2114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2614){
var state_val_2615 = (state_2614[(1)]);
if((state_val_2615 === (7))){
var inst_2610 = (state_2614[(2)]);
var state_2614__$1 = state_2614;
var statearr_2616_2635 = state_2614__$1;
(statearr_2616_2635[(2)] = inst_2610);

(statearr_2616_2635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (1))){
var inst_2593 = init;
var inst_2594 = inst_2593;
var state_2614__$1 = (function (){var statearr_2617 = state_2614;
(statearr_2617[(7)] = inst_2594);

return statearr_2617;
})();
var statearr_2618_2636 = state_2614__$1;
(statearr_2618_2636[(2)] = null);

(statearr_2618_2636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (4))){
var inst_2597 = (state_2614[(8)]);
var inst_2597__$1 = (state_2614[(2)]);
var inst_2598 = (inst_2597__$1 == null);
var state_2614__$1 = (function (){var statearr_2619 = state_2614;
(statearr_2619[(8)] = inst_2597__$1);

return statearr_2619;
})();
if(cljs.core.truth_(inst_2598)){
var statearr_2620_2637 = state_2614__$1;
(statearr_2620_2637[(1)] = (5));

} else {
var statearr_2621_2638 = state_2614__$1;
(statearr_2621_2638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (6))){
var inst_2594 = (state_2614[(7)]);
var inst_2597 = (state_2614[(8)]);
var inst_2601 = (state_2614[(9)]);
var inst_2601__$1 = f.call(null,inst_2594,inst_2597);
var inst_2602 = cljs.core.reduced_QMARK_.call(null,inst_2601__$1);
var state_2614__$1 = (function (){var statearr_2622 = state_2614;
(statearr_2622[(9)] = inst_2601__$1);

return statearr_2622;
})();
if(inst_2602){
var statearr_2623_2639 = state_2614__$1;
(statearr_2623_2639[(1)] = (8));

} else {
var statearr_2624_2640 = state_2614__$1;
(statearr_2624_2640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (3))){
var inst_2612 = (state_2614[(2)]);
var state_2614__$1 = state_2614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2614__$1,inst_2612);
} else {
if((state_val_2615 === (2))){
var state_2614__$1 = state_2614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2614__$1,(4),ch);
} else {
if((state_val_2615 === (9))){
var inst_2601 = (state_2614[(9)]);
var inst_2594 = inst_2601;
var state_2614__$1 = (function (){var statearr_2625 = state_2614;
(statearr_2625[(7)] = inst_2594);

return statearr_2625;
})();
var statearr_2626_2641 = state_2614__$1;
(statearr_2626_2641[(2)] = null);

(statearr_2626_2641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (5))){
var inst_2594 = (state_2614[(7)]);
var state_2614__$1 = state_2614;
var statearr_2627_2642 = state_2614__$1;
(statearr_2627_2642[(2)] = inst_2594);

(statearr_2627_2642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (10))){
var inst_2608 = (state_2614[(2)]);
var state_2614__$1 = state_2614;
var statearr_2628_2643 = state_2614__$1;
(statearr_2628_2643[(2)] = inst_2608);

(statearr_2628_2643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2615 === (8))){
var inst_2601 = (state_2614[(9)]);
var inst_2604 = cljs.core.deref.call(null,inst_2601);
var state_2614__$1 = state_2614;
var statearr_2629_2644 = state_2614__$1;
(statearr_2629_2644[(2)] = inst_2604);

(statearr_2629_2644[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__2041__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2041__auto____0 = (function (){
var statearr_2630 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2630[(0)] = cljs$core$async$reduce_$_state_machine__2041__auto__);

(statearr_2630[(1)] = (1));

return statearr_2630;
});
var cljs$core$async$reduce_$_state_machine__2041__auto____1 = (function (state_2614){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2631){var ex__2044__auto__ = e2631;
var statearr_2632_2645 = state_2614;
(statearr_2632_2645[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2614[(4)]))){
var statearr_2633_2646 = state_2614;
(statearr_2633_2646[(1)] = cljs.core.first.call(null,(state_2614[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2647 = state_2614;
state_2614 = G__2647;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2041__auto__ = function(state_2614){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2041__auto____1.call(this,state_2614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2041__auto____0;
cljs$core$async$reduce_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2041__auto____1;
return cljs$core$async$reduce_$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2634 = f__2115__auto__.call(null);
(statearr_2634[(6)] = c__2114__auto__);

return statearr_2634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

return c__2114__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2653){
var state_val_2654 = (state_2653[(1)]);
if((state_val_2654 === (1))){
var inst_2648 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_2653__$1 = state_2653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2653__$1,(2),inst_2648);
} else {
if((state_val_2654 === (2))){
var inst_2650 = (state_2653[(2)]);
var inst_2651 = f__$1.call(null,inst_2650);
var state_2653__$1 = state_2653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2653__$1,inst_2651);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2041__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2041__auto____0 = (function (){
var statearr_2655 = [null,null,null,null,null,null,null];
(statearr_2655[(0)] = cljs$core$async$transduce_$_state_machine__2041__auto__);

(statearr_2655[(1)] = (1));

return statearr_2655;
});
var cljs$core$async$transduce_$_state_machine__2041__auto____1 = (function (state_2653){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2656){var ex__2044__auto__ = e2656;
var statearr_2657_2660 = state_2653;
(statearr_2657_2660[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2653[(4)]))){
var statearr_2658_2661 = state_2653;
(statearr_2658_2661[(1)] = cljs.core.first.call(null,(state_2653[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2662 = state_2653;
state_2653 = G__2662;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2041__auto__ = function(state_2653){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2041__auto____1.call(this,state_2653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2041__auto____0;
cljs$core$async$transduce_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2041__auto____1;
return cljs$core$async$transduce_$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2659 = f__2115__auto__.call(null);
(statearr_2659[(6)] = c__2114__auto__);

return statearr_2659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

return c__2114__auto__;
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
var G__2664 = arguments.length;
switch (G__2664) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2689){
var state_val_2690 = (state_2689[(1)]);
if((state_val_2690 === (7))){
var inst_2671 = (state_2689[(2)]);
var state_2689__$1 = state_2689;
var statearr_2691_2713 = state_2689__$1;
(statearr_2691_2713[(2)] = inst_2671);

(statearr_2691_2713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (1))){
var inst_2665 = cljs.core.seq.call(null,coll);
var inst_2666 = inst_2665;
var state_2689__$1 = (function (){var statearr_2692 = state_2689;
(statearr_2692[(7)] = inst_2666);

return statearr_2692;
})();
var statearr_2693_2714 = state_2689__$1;
(statearr_2693_2714[(2)] = null);

(statearr_2693_2714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (4))){
var inst_2666 = (state_2689[(7)]);
var inst_2669 = cljs.core.first.call(null,inst_2666);
var state_2689__$1 = state_2689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2689__$1,(7),ch,inst_2669);
} else {
if((state_val_2690 === (13))){
var inst_2683 = (state_2689[(2)]);
var state_2689__$1 = state_2689;
var statearr_2694_2715 = state_2689__$1;
(statearr_2694_2715[(2)] = inst_2683);

(statearr_2694_2715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (6))){
var inst_2674 = (state_2689[(2)]);
var state_2689__$1 = state_2689;
if(cljs.core.truth_(inst_2674)){
var statearr_2695_2716 = state_2689__$1;
(statearr_2695_2716[(1)] = (8));

} else {
var statearr_2696_2717 = state_2689__$1;
(statearr_2696_2717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (3))){
var inst_2687 = (state_2689[(2)]);
var state_2689__$1 = state_2689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2689__$1,inst_2687);
} else {
if((state_val_2690 === (12))){
var state_2689__$1 = state_2689;
var statearr_2697_2718 = state_2689__$1;
(statearr_2697_2718[(2)] = null);

(statearr_2697_2718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (2))){
var inst_2666 = (state_2689[(7)]);
var state_2689__$1 = state_2689;
if(cljs.core.truth_(inst_2666)){
var statearr_2698_2719 = state_2689__$1;
(statearr_2698_2719[(1)] = (4));

} else {
var statearr_2699_2720 = state_2689__$1;
(statearr_2699_2720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (11))){
var inst_2680 = cljs.core.async.close_BANG_.call(null,ch);
var state_2689__$1 = state_2689;
var statearr_2700_2721 = state_2689__$1;
(statearr_2700_2721[(2)] = inst_2680);

(statearr_2700_2721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (9))){
var state_2689__$1 = state_2689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2701_2722 = state_2689__$1;
(statearr_2701_2722[(1)] = (11));

} else {
var statearr_2702_2723 = state_2689__$1;
(statearr_2702_2723[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (5))){
var inst_2666 = (state_2689[(7)]);
var state_2689__$1 = state_2689;
var statearr_2703_2724 = state_2689__$1;
(statearr_2703_2724[(2)] = inst_2666);

(statearr_2703_2724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (10))){
var inst_2685 = (state_2689[(2)]);
var state_2689__$1 = state_2689;
var statearr_2704_2725 = state_2689__$1;
(statearr_2704_2725[(2)] = inst_2685);

(statearr_2704_2725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2690 === (8))){
var inst_2666 = (state_2689[(7)]);
var inst_2676 = cljs.core.next.call(null,inst_2666);
var inst_2666__$1 = inst_2676;
var state_2689__$1 = (function (){var statearr_2705 = state_2689;
(statearr_2705[(7)] = inst_2666__$1);

return statearr_2705;
})();
var statearr_2706_2726 = state_2689__$1;
(statearr_2706_2726[(2)] = null);

(statearr_2706_2726[(1)] = (2));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_2707 = [null,null,null,null,null,null,null,null];
(statearr_2707[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_2707[(1)] = (1));

return statearr_2707;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_2689){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2708){var ex__2044__auto__ = e2708;
var statearr_2709_2727 = state_2689;
(statearr_2709_2727[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2689[(4)]))){
var statearr_2710_2728 = state_2689;
(statearr_2710_2728[(1)] = cljs.core.first.call(null,(state_2689[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2729 = state_2689;
state_2689 = G__2729;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_2689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_2689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2711 = f__2115__auto__.call(null);
(statearr_2711[(6)] = c__2114__auto__);

return statearr_2711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

return c__2114__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__2731 = arguments.length;
switch (G__2731) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_2733 = (function (_){
var x__1817__auto__ = (((_ == null))?null:_);
var m__1818__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,_);
} else {
var m__1816__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_2733.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_2734 = (function (m,ch,close_QMARK_){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__1816__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_2734.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_2735 = (function (m,ch){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,ch);
} else {
var m__1816__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_2735.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_2736 = (function (m){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m);
} else {
var m__1816__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_2736.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2737 = (function (ch,cs,meta2738){
this.ch = ch;
this.cs = cs;
this.meta2738 = meta2738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2739,meta2738__$1){
var self__ = this;
var _2739__$1 = this;
return (new cljs.core.async.t_cljs$core$async2737(self__.ch,self__.cs,meta2738__$1));
}));

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2739){
var self__ = this;
var _2739__$1 = this;
return self__.meta2738;
}));

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async2737.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async2737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta2738","meta2738",-1669447073,null)], null);
}));

(cljs.core.async.t_cljs$core$async2737.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2737");

(cljs.core.async.t_cljs$core$async2737.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async2737");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2737.
 */
cljs.core.async.__GT_t_cljs$core$async2737 = (function cljs$core$async$mult_$___GT_t_cljs$core$async2737(ch__$1,cs__$1,meta2738){
return (new cljs.core.async.t_cljs$core$async2737(ch__$1,cs__$1,meta2738));
});

}

return (new cljs.core.async.t_cljs$core$async2737(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__2114__auto___2956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_2872){
var state_val_2873 = (state_2872[(1)]);
if((state_val_2873 === (7))){
var inst_2868 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2874_2957 = state_2872__$1;
(statearr_2874_2957[(2)] = inst_2868);

(statearr_2874_2957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (20))){
var inst_2773 = (state_2872[(7)]);
var inst_2785 = cljs.core.first.call(null,inst_2773);
var inst_2786 = cljs.core.nth.call(null,inst_2785,(0),null);
var inst_2787 = cljs.core.nth.call(null,inst_2785,(1),null);
var state_2872__$1 = (function (){var statearr_2875 = state_2872;
(statearr_2875[(8)] = inst_2786);

return statearr_2875;
})();
if(cljs.core.truth_(inst_2787)){
var statearr_2876_2958 = state_2872__$1;
(statearr_2876_2958[(1)] = (22));

} else {
var statearr_2877_2959 = state_2872__$1;
(statearr_2877_2959[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (27))){
var inst_2815 = (state_2872[(9)]);
var inst_2742 = (state_2872[(10)]);
var inst_2817 = (state_2872[(11)]);
var inst_2822 = (state_2872[(12)]);
var inst_2822__$1 = cljs.core._nth.call(null,inst_2815,inst_2817);
var inst_2823 = cljs.core.async.put_BANG_.call(null,inst_2822__$1,inst_2742,done);
var state_2872__$1 = (function (){var statearr_2878 = state_2872;
(statearr_2878[(12)] = inst_2822__$1);

return statearr_2878;
})();
if(cljs.core.truth_(inst_2823)){
var statearr_2879_2960 = state_2872__$1;
(statearr_2879_2960[(1)] = (30));

} else {
var statearr_2880_2961 = state_2872__$1;
(statearr_2880_2961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (1))){
var state_2872__$1 = state_2872;
var statearr_2881_2962 = state_2872__$1;
(statearr_2881_2962[(2)] = null);

(statearr_2881_2962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (24))){
var inst_2773 = (state_2872[(7)]);
var inst_2792 = (state_2872[(2)]);
var inst_2793 = cljs.core.next.call(null,inst_2773);
var inst_2751 = inst_2793;
var inst_2752 = null;
var inst_2753 = (0);
var inst_2754 = (0);
var state_2872__$1 = (function (){var statearr_2882 = state_2872;
(statearr_2882[(13)] = inst_2751);

(statearr_2882[(14)] = inst_2754);

(statearr_2882[(15)] = inst_2792);

(statearr_2882[(16)] = inst_2752);

(statearr_2882[(17)] = inst_2753);

return statearr_2882;
})();
var statearr_2883_2963 = state_2872__$1;
(statearr_2883_2963[(2)] = null);

(statearr_2883_2963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (39))){
var state_2872__$1 = state_2872;
var statearr_2887_2964 = state_2872__$1;
(statearr_2887_2964[(2)] = null);

(statearr_2887_2964[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (4))){
var inst_2742 = (state_2872[(10)]);
var inst_2742__$1 = (state_2872[(2)]);
var inst_2743 = (inst_2742__$1 == null);
var state_2872__$1 = (function (){var statearr_2888 = state_2872;
(statearr_2888[(10)] = inst_2742__$1);

return statearr_2888;
})();
if(cljs.core.truth_(inst_2743)){
var statearr_2889_2965 = state_2872__$1;
(statearr_2889_2965[(1)] = (5));

} else {
var statearr_2890_2966 = state_2872__$1;
(statearr_2890_2966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (15))){
var inst_2751 = (state_2872[(13)]);
var inst_2754 = (state_2872[(14)]);
var inst_2752 = (state_2872[(16)]);
var inst_2753 = (state_2872[(17)]);
var inst_2769 = (state_2872[(2)]);
var inst_2770 = (inst_2754 + (1));
var tmp2884 = inst_2751;
var tmp2885 = inst_2752;
var tmp2886 = inst_2753;
var inst_2751__$1 = tmp2884;
var inst_2752__$1 = tmp2885;
var inst_2753__$1 = tmp2886;
var inst_2754__$1 = inst_2770;
var state_2872__$1 = (function (){var statearr_2891 = state_2872;
(statearr_2891[(18)] = inst_2769);

(statearr_2891[(13)] = inst_2751__$1);

(statearr_2891[(14)] = inst_2754__$1);

(statearr_2891[(16)] = inst_2752__$1);

(statearr_2891[(17)] = inst_2753__$1);

return statearr_2891;
})();
var statearr_2892_2967 = state_2872__$1;
(statearr_2892_2967[(2)] = null);

(statearr_2892_2967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (21))){
var inst_2796 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2896_2968 = state_2872__$1;
(statearr_2896_2968[(2)] = inst_2796);

(statearr_2896_2968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (31))){
var inst_2822 = (state_2872[(12)]);
var inst_2826 = cljs.core.async.untap_STAR_.call(null,m,inst_2822);
var state_2872__$1 = state_2872;
var statearr_2897_2969 = state_2872__$1;
(statearr_2897_2969[(2)] = inst_2826);

(statearr_2897_2969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (32))){
var inst_2815 = (state_2872[(9)]);
var inst_2816 = (state_2872[(19)]);
var inst_2817 = (state_2872[(11)]);
var inst_2814 = (state_2872[(20)]);
var inst_2828 = (state_2872[(2)]);
var inst_2829 = (inst_2817 + (1));
var tmp2893 = inst_2815;
var tmp2894 = inst_2816;
var tmp2895 = inst_2814;
var inst_2814__$1 = tmp2895;
var inst_2815__$1 = tmp2893;
var inst_2816__$1 = tmp2894;
var inst_2817__$1 = inst_2829;
var state_2872__$1 = (function (){var statearr_2898 = state_2872;
(statearr_2898[(9)] = inst_2815__$1);

(statearr_2898[(19)] = inst_2816__$1);

(statearr_2898[(21)] = inst_2828);

(statearr_2898[(11)] = inst_2817__$1);

(statearr_2898[(20)] = inst_2814__$1);

return statearr_2898;
})();
var statearr_2899_2970 = state_2872__$1;
(statearr_2899_2970[(2)] = null);

(statearr_2899_2970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (40))){
var inst_2841 = (state_2872[(22)]);
var inst_2845 = cljs.core.async.untap_STAR_.call(null,m,inst_2841);
var state_2872__$1 = state_2872;
var statearr_2900_2971 = state_2872__$1;
(statearr_2900_2971[(2)] = inst_2845);

(statearr_2900_2971[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (33))){
var inst_2832 = (state_2872[(23)]);
var inst_2834 = cljs.core.chunked_seq_QMARK_.call(null,inst_2832);
var state_2872__$1 = state_2872;
if(inst_2834){
var statearr_2901_2972 = state_2872__$1;
(statearr_2901_2972[(1)] = (36));

} else {
var statearr_2902_2973 = state_2872__$1;
(statearr_2902_2973[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (13))){
var inst_2763 = (state_2872[(24)]);
var inst_2766 = cljs.core.async.close_BANG_.call(null,inst_2763);
var state_2872__$1 = state_2872;
var statearr_2903_2974 = state_2872__$1;
(statearr_2903_2974[(2)] = inst_2766);

(statearr_2903_2974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (22))){
var inst_2786 = (state_2872[(8)]);
var inst_2789 = cljs.core.async.close_BANG_.call(null,inst_2786);
var state_2872__$1 = state_2872;
var statearr_2904_2975 = state_2872__$1;
(statearr_2904_2975[(2)] = inst_2789);

(statearr_2904_2975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (36))){
var inst_2832 = (state_2872[(23)]);
var inst_2836 = cljs.core.chunk_first.call(null,inst_2832);
var inst_2837 = cljs.core.chunk_rest.call(null,inst_2832);
var inst_2838 = cljs.core.count.call(null,inst_2836);
var inst_2814 = inst_2837;
var inst_2815 = inst_2836;
var inst_2816 = inst_2838;
var inst_2817 = (0);
var state_2872__$1 = (function (){var statearr_2905 = state_2872;
(statearr_2905[(9)] = inst_2815);

(statearr_2905[(19)] = inst_2816);

(statearr_2905[(11)] = inst_2817);

(statearr_2905[(20)] = inst_2814);

return statearr_2905;
})();
var statearr_2906_2976 = state_2872__$1;
(statearr_2906_2976[(2)] = null);

(statearr_2906_2976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (41))){
var inst_2832 = (state_2872[(23)]);
var inst_2847 = (state_2872[(2)]);
var inst_2848 = cljs.core.next.call(null,inst_2832);
var inst_2814 = inst_2848;
var inst_2815 = null;
var inst_2816 = (0);
var inst_2817 = (0);
var state_2872__$1 = (function (){var statearr_2907 = state_2872;
(statearr_2907[(9)] = inst_2815);

(statearr_2907[(19)] = inst_2816);

(statearr_2907[(11)] = inst_2817);

(statearr_2907[(20)] = inst_2814);

(statearr_2907[(25)] = inst_2847);

return statearr_2907;
})();
var statearr_2908_2977 = state_2872__$1;
(statearr_2908_2977[(2)] = null);

(statearr_2908_2977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (43))){
var state_2872__$1 = state_2872;
var statearr_2909_2978 = state_2872__$1;
(statearr_2909_2978[(2)] = null);

(statearr_2909_2978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (29))){
var inst_2856 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2910_2979 = state_2872__$1;
(statearr_2910_2979[(2)] = inst_2856);

(statearr_2910_2979[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (44))){
var inst_2865 = (state_2872[(2)]);
var state_2872__$1 = (function (){var statearr_2911 = state_2872;
(statearr_2911[(26)] = inst_2865);

return statearr_2911;
})();
var statearr_2912_2980 = state_2872__$1;
(statearr_2912_2980[(2)] = null);

(statearr_2912_2980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (6))){
var inst_2806 = (state_2872[(27)]);
var inst_2805 = cljs.core.deref.call(null,cs);
var inst_2806__$1 = cljs.core.keys.call(null,inst_2805);
var inst_2807 = cljs.core.count.call(null,inst_2806__$1);
var inst_2808 = cljs.core.reset_BANG_.call(null,dctr,inst_2807);
var inst_2813 = cljs.core.seq.call(null,inst_2806__$1);
var inst_2814 = inst_2813;
var inst_2815 = null;
var inst_2816 = (0);
var inst_2817 = (0);
var state_2872__$1 = (function (){var statearr_2913 = state_2872;
(statearr_2913[(9)] = inst_2815);

(statearr_2913[(27)] = inst_2806__$1);

(statearr_2913[(28)] = inst_2808);

(statearr_2913[(19)] = inst_2816);

(statearr_2913[(11)] = inst_2817);

(statearr_2913[(20)] = inst_2814);

return statearr_2913;
})();
var statearr_2914_2981 = state_2872__$1;
(statearr_2914_2981[(2)] = null);

(statearr_2914_2981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (28))){
var inst_2832 = (state_2872[(23)]);
var inst_2814 = (state_2872[(20)]);
var inst_2832__$1 = cljs.core.seq.call(null,inst_2814);
var state_2872__$1 = (function (){var statearr_2915 = state_2872;
(statearr_2915[(23)] = inst_2832__$1);

return statearr_2915;
})();
if(inst_2832__$1){
var statearr_2916_2982 = state_2872__$1;
(statearr_2916_2982[(1)] = (33));

} else {
var statearr_2917_2983 = state_2872__$1;
(statearr_2917_2983[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (25))){
var inst_2816 = (state_2872[(19)]);
var inst_2817 = (state_2872[(11)]);
var inst_2819 = (inst_2817 < inst_2816);
var inst_2820 = inst_2819;
var state_2872__$1 = state_2872;
if(cljs.core.truth_(inst_2820)){
var statearr_2918_2984 = state_2872__$1;
(statearr_2918_2984[(1)] = (27));

} else {
var statearr_2919_2985 = state_2872__$1;
(statearr_2919_2985[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (34))){
var state_2872__$1 = state_2872;
var statearr_2920_2986 = state_2872__$1;
(statearr_2920_2986[(2)] = null);

(statearr_2920_2986[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (17))){
var state_2872__$1 = state_2872;
var statearr_2921_2987 = state_2872__$1;
(statearr_2921_2987[(2)] = null);

(statearr_2921_2987[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (3))){
var inst_2870 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2872__$1,inst_2870);
} else {
if((state_val_2873 === (12))){
var inst_2801 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2922_2988 = state_2872__$1;
(statearr_2922_2988[(2)] = inst_2801);

(statearr_2922_2988[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (2))){
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2872__$1,(4),ch);
} else {
if((state_val_2873 === (23))){
var state_2872__$1 = state_2872;
var statearr_2923_2989 = state_2872__$1;
(statearr_2923_2989[(2)] = null);

(statearr_2923_2989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (35))){
var inst_2854 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2924_2990 = state_2872__$1;
(statearr_2924_2990[(2)] = inst_2854);

(statearr_2924_2990[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (19))){
var inst_2773 = (state_2872[(7)]);
var inst_2777 = cljs.core.chunk_first.call(null,inst_2773);
var inst_2778 = cljs.core.chunk_rest.call(null,inst_2773);
var inst_2779 = cljs.core.count.call(null,inst_2777);
var inst_2751 = inst_2778;
var inst_2752 = inst_2777;
var inst_2753 = inst_2779;
var inst_2754 = (0);
var state_2872__$1 = (function (){var statearr_2925 = state_2872;
(statearr_2925[(13)] = inst_2751);

(statearr_2925[(14)] = inst_2754);

(statearr_2925[(16)] = inst_2752);

(statearr_2925[(17)] = inst_2753);

return statearr_2925;
})();
var statearr_2926_2991 = state_2872__$1;
(statearr_2926_2991[(2)] = null);

(statearr_2926_2991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (11))){
var inst_2773 = (state_2872[(7)]);
var inst_2751 = (state_2872[(13)]);
var inst_2773__$1 = cljs.core.seq.call(null,inst_2751);
var state_2872__$1 = (function (){var statearr_2927 = state_2872;
(statearr_2927[(7)] = inst_2773__$1);

return statearr_2927;
})();
if(inst_2773__$1){
var statearr_2928_2992 = state_2872__$1;
(statearr_2928_2992[(1)] = (16));

} else {
var statearr_2929_2993 = state_2872__$1;
(statearr_2929_2993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (9))){
var inst_2803 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2930_2994 = state_2872__$1;
(statearr_2930_2994[(2)] = inst_2803);

(statearr_2930_2994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (5))){
var inst_2749 = cljs.core.deref.call(null,cs);
var inst_2750 = cljs.core.seq.call(null,inst_2749);
var inst_2751 = inst_2750;
var inst_2752 = null;
var inst_2753 = (0);
var inst_2754 = (0);
var state_2872__$1 = (function (){var statearr_2931 = state_2872;
(statearr_2931[(13)] = inst_2751);

(statearr_2931[(14)] = inst_2754);

(statearr_2931[(16)] = inst_2752);

(statearr_2931[(17)] = inst_2753);

return statearr_2931;
})();
var statearr_2932_2995 = state_2872__$1;
(statearr_2932_2995[(2)] = null);

(statearr_2932_2995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (14))){
var state_2872__$1 = state_2872;
var statearr_2933_2996 = state_2872__$1;
(statearr_2933_2996[(2)] = null);

(statearr_2933_2996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (45))){
var inst_2862 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2934_2997 = state_2872__$1;
(statearr_2934_2997[(2)] = inst_2862);

(statearr_2934_2997[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (26))){
var inst_2806 = (state_2872[(27)]);
var inst_2858 = (state_2872[(2)]);
var inst_2859 = cljs.core.seq.call(null,inst_2806);
var state_2872__$1 = (function (){var statearr_2935 = state_2872;
(statearr_2935[(29)] = inst_2858);

return statearr_2935;
})();
if(inst_2859){
var statearr_2936_2998 = state_2872__$1;
(statearr_2936_2998[(1)] = (42));

} else {
var statearr_2937_2999 = state_2872__$1;
(statearr_2937_2999[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (16))){
var inst_2773 = (state_2872[(7)]);
var inst_2775 = cljs.core.chunked_seq_QMARK_.call(null,inst_2773);
var state_2872__$1 = state_2872;
if(inst_2775){
var statearr_2938_3000 = state_2872__$1;
(statearr_2938_3000[(1)] = (19));

} else {
var statearr_2939_3001 = state_2872__$1;
(statearr_2939_3001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (38))){
var inst_2851 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2940_3002 = state_2872__$1;
(statearr_2940_3002[(2)] = inst_2851);

(statearr_2940_3002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (30))){
var state_2872__$1 = state_2872;
var statearr_2941_3003 = state_2872__$1;
(statearr_2941_3003[(2)] = null);

(statearr_2941_3003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (10))){
var inst_2754 = (state_2872[(14)]);
var inst_2752 = (state_2872[(16)]);
var inst_2762 = cljs.core._nth.call(null,inst_2752,inst_2754);
var inst_2763 = cljs.core.nth.call(null,inst_2762,(0),null);
var inst_2764 = cljs.core.nth.call(null,inst_2762,(1),null);
var state_2872__$1 = (function (){var statearr_2942 = state_2872;
(statearr_2942[(24)] = inst_2763);

return statearr_2942;
})();
if(cljs.core.truth_(inst_2764)){
var statearr_2943_3004 = state_2872__$1;
(statearr_2943_3004[(1)] = (13));

} else {
var statearr_2944_3005 = state_2872__$1;
(statearr_2944_3005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (18))){
var inst_2799 = (state_2872[(2)]);
var state_2872__$1 = state_2872;
var statearr_2945_3006 = state_2872__$1;
(statearr_2945_3006[(2)] = inst_2799);

(statearr_2945_3006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (42))){
var state_2872__$1 = state_2872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2872__$1,(45),dchan);
} else {
if((state_val_2873 === (37))){
var inst_2841 = (state_2872[(22)]);
var inst_2742 = (state_2872[(10)]);
var inst_2832 = (state_2872[(23)]);
var inst_2841__$1 = cljs.core.first.call(null,inst_2832);
var inst_2842 = cljs.core.async.put_BANG_.call(null,inst_2841__$1,inst_2742,done);
var state_2872__$1 = (function (){var statearr_2946 = state_2872;
(statearr_2946[(22)] = inst_2841__$1);

return statearr_2946;
})();
if(cljs.core.truth_(inst_2842)){
var statearr_2947_3007 = state_2872__$1;
(statearr_2947_3007[(1)] = (39));

} else {
var statearr_2948_3008 = state_2872__$1;
(statearr_2948_3008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2873 === (8))){
var inst_2754 = (state_2872[(14)]);
var inst_2753 = (state_2872[(17)]);
var inst_2756 = (inst_2754 < inst_2753);
var inst_2757 = inst_2756;
var state_2872__$1 = state_2872;
if(cljs.core.truth_(inst_2757)){
var statearr_2949_3009 = state_2872__$1;
(statearr_2949_3009[(1)] = (10));

} else {
var statearr_2950_3010 = state_2872__$1;
(statearr_2950_3010[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__2041__auto__ = null;
var cljs$core$async$mult_$_state_machine__2041__auto____0 = (function (){
var statearr_2951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2951[(0)] = cljs$core$async$mult_$_state_machine__2041__auto__);

(statearr_2951[(1)] = (1));

return statearr_2951;
});
var cljs$core$async$mult_$_state_machine__2041__auto____1 = (function (state_2872){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_2872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e2952){var ex__2044__auto__ = e2952;
var statearr_2953_3011 = state_2872;
(statearr_2953_3011[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_2872[(4)]))){
var statearr_2954_3012 = state_2872;
(statearr_2954_3012[(1)] = cljs.core.first.call(null,(state_2872[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3013 = state_2872;
state_2872 = G__3013;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2041__auto__ = function(state_2872){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2041__auto____1.call(this,state_2872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2041__auto____0;
cljs$core$async$mult_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2041__auto____1;
return cljs$core$async$mult_$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_2955 = f__2115__auto__.call(null);
(statearr_2955[(6)] = c__2114__auto___2956);

return statearr_2955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
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
var G__3015 = arguments.length;
switch (G__3015) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_3017 = (function (m,ch){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,ch);
} else {
var m__1816__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_3017.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_3018 = (function (m,ch){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,ch);
} else {
var m__1816__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_3018.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_3019 = (function (m){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m);
} else {
var m__1816__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_3019.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_3020 = (function (m,state_map){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,state_map);
} else {
var m__1816__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_3020.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_3021 = (function (m,mode){
var x__1817__auto__ = (((m == null))?null:m);
var m__1818__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,m,mode);
} else {
var m__1816__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_3021.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__2199__auto__ = [];
var len__2193__auto___3031 = arguments.length;
var i__2194__auto___3032 = (0);
while(true){
if((i__2194__auto___3032 < len__2193__auto___3031)){
args__2199__auto__.push((arguments[i__2194__auto___3032]));

var G__3033 = (i__2194__auto___3032 + (1));
i__2194__auto___3032 = G__3033;
continue;
} else {
}
break;
}

var argseq__2200__auto__ = ((((3) < args__2199__auto__.length))?(new cljs.core.IndexedSeq(args__2199__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__2200__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3026){
var map__3027 = p__3026;
var map__3027__$1 = cljs.core.__destructure_map.call(null,map__3027);
var opts = map__3027__$1;
var statearr_3028_3034 = state;
(statearr_3028_3034[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_3029_3035 = state;
(statearr_3029_3035[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_3030_3036 = state;
(statearr_3030_3036[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3022){
var G__3023 = cljs.core.first.call(null,seq3022);
var seq3022__$1 = cljs.core.next.call(null,seq3022);
var G__3024 = cljs.core.first.call(null,seq3022__$1);
var seq3022__$2 = cljs.core.next.call(null,seq3022__$1);
var G__3025 = cljs.core.first.call(null,seq3022__$2);
var seq3022__$3 = cljs.core.next.call(null,seq3022__$2);
var self__2178__auto__ = this;
return self__2178__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3023,G__3024,G__3025,seq3022__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3037 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3037 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3038){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3038 = meta3038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3039,meta3038__$1){
var self__ = this;
var _3039__$1 = this;
return (new cljs.core.async.t_cljs$core$async3037(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3038__$1));
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3039){
var self__ = this;
var _3039__$1 = this;
return self__.meta3038;
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3037.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta3038","meta3038",-589615560,null)], null);
}));

(cljs.core.async.t_cljs$core$async3037.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3037.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3037");

(cljs.core.async.t_cljs$core$async3037.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3037");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3037.
 */
cljs.core.async.__GT_t_cljs$core$async3037 = (function cljs$core$async$mix_$___GT_t_cljs$core$async3037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3038){
return (new cljs.core.async.t_cljs$core$async3037(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3038));
});

}

return (new cljs.core.async.t_cljs$core$async3037(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2114__auto___3152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3107){
var state_val_3108 = (state_3107[(1)]);
if((state_val_3108 === (7))){
var inst_3067 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
if(cljs.core.truth_(inst_3067)){
var statearr_3109_3153 = state_3107__$1;
(statearr_3109_3153[(1)] = (8));

} else {
var statearr_3110_3154 = state_3107__$1;
(statearr_3110_3154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (20))){
var inst_3060 = (state_3107[(7)]);
var state_3107__$1 = state_3107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3107__$1,(23),out,inst_3060);
} else {
if((state_val_3108 === (1))){
var inst_3043 = calc_state.call(null);
var inst_3044 = cljs.core.__destructure_map.call(null,inst_3043);
var inst_3045 = cljs.core.get.call(null,inst_3044,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3046 = cljs.core.get.call(null,inst_3044,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3047 = cljs.core.get.call(null,inst_3044,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3048 = inst_3043;
var state_3107__$1 = (function (){var statearr_3111 = state_3107;
(statearr_3111[(8)] = inst_3047);

(statearr_3111[(9)] = inst_3045);

(statearr_3111[(10)] = inst_3046);

(statearr_3111[(11)] = inst_3048);

return statearr_3111;
})();
var statearr_3112_3155 = state_3107__$1;
(statearr_3112_3155[(2)] = null);

(statearr_3112_3155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (24))){
var inst_3051 = (state_3107[(12)]);
var inst_3048 = inst_3051;
var state_3107__$1 = (function (){var statearr_3113 = state_3107;
(statearr_3113[(11)] = inst_3048);

return statearr_3113;
})();
var statearr_3114_3156 = state_3107__$1;
(statearr_3114_3156[(2)] = null);

(statearr_3114_3156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (4))){
var inst_3060 = (state_3107[(7)]);
var inst_3062 = (state_3107[(13)]);
var inst_3059 = (state_3107[(2)]);
var inst_3060__$1 = cljs.core.nth.call(null,inst_3059,(0),null);
var inst_3061 = cljs.core.nth.call(null,inst_3059,(1),null);
var inst_3062__$1 = (inst_3060__$1 == null);
var state_3107__$1 = (function (){var statearr_3115 = state_3107;
(statearr_3115[(7)] = inst_3060__$1);

(statearr_3115[(14)] = inst_3061);

(statearr_3115[(13)] = inst_3062__$1);

return statearr_3115;
})();
if(cljs.core.truth_(inst_3062__$1)){
var statearr_3116_3157 = state_3107__$1;
(statearr_3116_3157[(1)] = (5));

} else {
var statearr_3117_3158 = state_3107__$1;
(statearr_3117_3158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (15))){
var inst_3081 = (state_3107[(15)]);
var inst_3052 = (state_3107[(16)]);
var inst_3081__$1 = cljs.core.empty_QMARK_.call(null,inst_3052);
var state_3107__$1 = (function (){var statearr_3118 = state_3107;
(statearr_3118[(15)] = inst_3081__$1);

return statearr_3118;
})();
if(inst_3081__$1){
var statearr_3119_3159 = state_3107__$1;
(statearr_3119_3159[(1)] = (17));

} else {
var statearr_3120_3160 = state_3107__$1;
(statearr_3120_3160[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (21))){
var inst_3051 = (state_3107[(12)]);
var inst_3048 = inst_3051;
var state_3107__$1 = (function (){var statearr_3121 = state_3107;
(statearr_3121[(11)] = inst_3048);

return statearr_3121;
})();
var statearr_3122_3161 = state_3107__$1;
(statearr_3122_3161[(2)] = null);

(statearr_3122_3161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (13))){
var inst_3074 = (state_3107[(2)]);
var inst_3075 = calc_state.call(null);
var inst_3048 = inst_3075;
var state_3107__$1 = (function (){var statearr_3123 = state_3107;
(statearr_3123[(17)] = inst_3074);

(statearr_3123[(11)] = inst_3048);

return statearr_3123;
})();
var statearr_3124_3162 = state_3107__$1;
(statearr_3124_3162[(2)] = null);

(statearr_3124_3162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (22))){
var inst_3101 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
var statearr_3125_3163 = state_3107__$1;
(statearr_3125_3163[(2)] = inst_3101);

(statearr_3125_3163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (6))){
var inst_3061 = (state_3107[(14)]);
var inst_3065 = cljs.core._EQ_.call(null,inst_3061,change);
var state_3107__$1 = state_3107;
var statearr_3126_3164 = state_3107__$1;
(statearr_3126_3164[(2)] = inst_3065);

(statearr_3126_3164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (25))){
var state_3107__$1 = state_3107;
var statearr_3127_3165 = state_3107__$1;
(statearr_3127_3165[(2)] = null);

(statearr_3127_3165[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (17))){
var inst_3061 = (state_3107[(14)]);
var inst_3053 = (state_3107[(18)]);
var inst_3083 = inst_3053.call(null,inst_3061);
var inst_3084 = cljs.core.not.call(null,inst_3083);
var state_3107__$1 = state_3107;
var statearr_3128_3166 = state_3107__$1;
(statearr_3128_3166[(2)] = inst_3084);

(statearr_3128_3166[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (3))){
var inst_3105 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3107__$1,inst_3105);
} else {
if((state_val_3108 === (12))){
var state_3107__$1 = state_3107;
var statearr_3129_3167 = state_3107__$1;
(statearr_3129_3167[(2)] = null);

(statearr_3129_3167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (2))){
var inst_3051 = (state_3107[(12)]);
var inst_3048 = (state_3107[(11)]);
var inst_3051__$1 = cljs.core.__destructure_map.call(null,inst_3048);
var inst_3052 = cljs.core.get.call(null,inst_3051__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3053 = cljs.core.get.call(null,inst_3051__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3054 = cljs.core.get.call(null,inst_3051__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3107__$1 = (function (){var statearr_3130 = state_3107;
(statearr_3130[(12)] = inst_3051__$1);

(statearr_3130[(16)] = inst_3052);

(statearr_3130[(18)] = inst_3053);

return statearr_3130;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3107__$1,(4),inst_3054);
} else {
if((state_val_3108 === (23))){
var inst_3092 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
if(cljs.core.truth_(inst_3092)){
var statearr_3131_3168 = state_3107__$1;
(statearr_3131_3168[(1)] = (24));

} else {
var statearr_3132_3169 = state_3107__$1;
(statearr_3132_3169[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (19))){
var inst_3087 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
var statearr_3133_3170 = state_3107__$1;
(statearr_3133_3170[(2)] = inst_3087);

(statearr_3133_3170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (11))){
var inst_3061 = (state_3107[(14)]);
var inst_3071 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3061);
var state_3107__$1 = state_3107;
var statearr_3134_3171 = state_3107__$1;
(statearr_3134_3171[(2)] = inst_3071);

(statearr_3134_3171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (9))){
var inst_3061 = (state_3107[(14)]);
var inst_3052 = (state_3107[(16)]);
var inst_3078 = (state_3107[(19)]);
var inst_3078__$1 = inst_3052.call(null,inst_3061);
var state_3107__$1 = (function (){var statearr_3135 = state_3107;
(statearr_3135[(19)] = inst_3078__$1);

return statearr_3135;
})();
if(cljs.core.truth_(inst_3078__$1)){
var statearr_3136_3172 = state_3107__$1;
(statearr_3136_3172[(1)] = (14));

} else {
var statearr_3137_3173 = state_3107__$1;
(statearr_3137_3173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (5))){
var inst_3062 = (state_3107[(13)]);
var state_3107__$1 = state_3107;
var statearr_3138_3174 = state_3107__$1;
(statearr_3138_3174[(2)] = inst_3062);

(statearr_3138_3174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (14))){
var inst_3078 = (state_3107[(19)]);
var state_3107__$1 = state_3107;
var statearr_3139_3175 = state_3107__$1;
(statearr_3139_3175[(2)] = inst_3078);

(statearr_3139_3175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (26))){
var inst_3097 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
var statearr_3140_3176 = state_3107__$1;
(statearr_3140_3176[(2)] = inst_3097);

(statearr_3140_3176[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (16))){
var inst_3089 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
if(cljs.core.truth_(inst_3089)){
var statearr_3141_3177 = state_3107__$1;
(statearr_3141_3177[(1)] = (20));

} else {
var statearr_3142_3178 = state_3107__$1;
(statearr_3142_3178[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (10))){
var inst_3103 = (state_3107[(2)]);
var state_3107__$1 = state_3107;
var statearr_3143_3179 = state_3107__$1;
(statearr_3143_3179[(2)] = inst_3103);

(statearr_3143_3179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (18))){
var inst_3081 = (state_3107[(15)]);
var state_3107__$1 = state_3107;
var statearr_3144_3180 = state_3107__$1;
(statearr_3144_3180[(2)] = inst_3081);

(statearr_3144_3180[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3108 === (8))){
var inst_3060 = (state_3107[(7)]);
var inst_3069 = (inst_3060 == null);
var state_3107__$1 = state_3107;
if(cljs.core.truth_(inst_3069)){
var statearr_3145_3181 = state_3107__$1;
(statearr_3145_3181[(1)] = (11));

} else {
var statearr_3146_3182 = state_3107__$1;
(statearr_3146_3182[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__2041__auto__ = null;
var cljs$core$async$mix_$_state_machine__2041__auto____0 = (function (){
var statearr_3147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3147[(0)] = cljs$core$async$mix_$_state_machine__2041__auto__);

(statearr_3147[(1)] = (1));

return statearr_3147;
});
var cljs$core$async$mix_$_state_machine__2041__auto____1 = (function (state_3107){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3148){var ex__2044__auto__ = e3148;
var statearr_3149_3183 = state_3107;
(statearr_3149_3183[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3107[(4)]))){
var statearr_3150_3184 = state_3107;
(statearr_3150_3184[(1)] = cljs.core.first.call(null,(state_3107[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3185 = state_3107;
state_3107 = G__3185;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2041__auto__ = function(state_3107){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2041__auto____1.call(this,state_3107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2041__auto____0;
cljs$core$async$mix_$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2041__auto____1;
return cljs$core$async$mix_$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3151 = f__2115__auto__.call(null);
(statearr_3151[(6)] = c__2114__auto___3152);

return statearr_3151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_3188 = (function (p,v,ch,close_QMARK_){
var x__1817__auto__ = (((p == null))?null:p);
var m__1818__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__1816__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_3188.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_3189 = (function (p,v,ch){
var x__1817__auto__ = (((p == null))?null:p);
var m__1818__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,p,v,ch);
} else {
var m__1816__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_3189.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_3190 = (function() {
var G__3191 = null;
var G__3191__1 = (function (p){
var x__1817__auto__ = (((p == null))?null:p);
var m__1818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,p);
} else {
var m__1816__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__3191__2 = (function (p,v){
var x__1817__auto__ = (((p == null))?null:p);
var m__1818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,p,v);
} else {
var m__1816__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__3191 = function(p,v){
switch(arguments.length){
case 1:
return G__3191__1.call(this,p);
case 2:
return G__3191__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3191.cljs$core$IFn$_invoke$arity$1 = G__3191__1;
G__3191.cljs$core$IFn$_invoke$arity$2 = G__3191__2;
return G__3191;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3187 = arguments.length;
switch (G__3187) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3190.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3190.call(null,p,v);
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
var G__3195 = arguments.length;
switch (G__3195) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__1469__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__3193_SHARP_){
if(cljs.core.truth_(p1__3193_SHARP_.call(null,topic))){
return p1__3193_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3193_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3196 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3197){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3197 = meta3197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3198,meta3197__$1){
var self__ = this;
var _3198__$1 = this;
return (new cljs.core.async.t_cljs$core$async3196(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3197__$1));
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3198){
var self__ = this;
var _3198__$1 = this;
return self__.meta3197;
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async3196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async3196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3197","meta3197",-1973839594,null)], null);
}));

(cljs.core.async.t_cljs$core$async3196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3196");

(cljs.core.async.t_cljs$core$async3196.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3196.
 */
cljs.core.async.__GT_t_cljs$core$async3196 = (function cljs$core$async$__GT_t_cljs$core$async3196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3197){
return (new cljs.core.async.t_cljs$core$async3196(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3197));
});

}

return (new cljs.core.async.t_cljs$core$async3196(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2114__auto___3317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3270){
var state_val_3271 = (state_3270[(1)]);
if((state_val_3271 === (7))){
var inst_3266 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3272_3318 = state_3270__$1;
(statearr_3272_3318[(2)] = inst_3266);

(statearr_3272_3318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (20))){
var state_3270__$1 = state_3270;
var statearr_3273_3319 = state_3270__$1;
(statearr_3273_3319[(2)] = null);

(statearr_3273_3319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (1))){
var state_3270__$1 = state_3270;
var statearr_3274_3320 = state_3270__$1;
(statearr_3274_3320[(2)] = null);

(statearr_3274_3320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (24))){
var inst_3249 = (state_3270[(7)]);
var inst_3258 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_3249);
var state_3270__$1 = state_3270;
var statearr_3275_3321 = state_3270__$1;
(statearr_3275_3321[(2)] = inst_3258);

(statearr_3275_3321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (4))){
var inst_3201 = (state_3270[(8)]);
var inst_3201__$1 = (state_3270[(2)]);
var inst_3202 = (inst_3201__$1 == null);
var state_3270__$1 = (function (){var statearr_3276 = state_3270;
(statearr_3276[(8)] = inst_3201__$1);

return statearr_3276;
})();
if(cljs.core.truth_(inst_3202)){
var statearr_3277_3322 = state_3270__$1;
(statearr_3277_3322[(1)] = (5));

} else {
var statearr_3278_3323 = state_3270__$1;
(statearr_3278_3323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (15))){
var inst_3243 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3279_3324 = state_3270__$1;
(statearr_3279_3324[(2)] = inst_3243);

(statearr_3279_3324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (21))){
var inst_3263 = (state_3270[(2)]);
var state_3270__$1 = (function (){var statearr_3280 = state_3270;
(statearr_3280[(9)] = inst_3263);

return statearr_3280;
})();
var statearr_3281_3325 = state_3270__$1;
(statearr_3281_3325[(2)] = null);

(statearr_3281_3325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (13))){
var inst_3225 = (state_3270[(10)]);
var inst_3227 = cljs.core.chunked_seq_QMARK_.call(null,inst_3225);
var state_3270__$1 = state_3270;
if(inst_3227){
var statearr_3282_3326 = state_3270__$1;
(statearr_3282_3326[(1)] = (16));

} else {
var statearr_3283_3327 = state_3270__$1;
(statearr_3283_3327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (22))){
var inst_3255 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
if(cljs.core.truth_(inst_3255)){
var statearr_3284_3328 = state_3270__$1;
(statearr_3284_3328[(1)] = (23));

} else {
var statearr_3285_3329 = state_3270__$1;
(statearr_3285_3329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (6))){
var inst_3201 = (state_3270[(8)]);
var inst_3249 = (state_3270[(7)]);
var inst_3251 = (state_3270[(11)]);
var inst_3249__$1 = topic_fn.call(null,inst_3201);
var inst_3250 = cljs.core.deref.call(null,mults);
var inst_3251__$1 = cljs.core.get.call(null,inst_3250,inst_3249__$1);
var state_3270__$1 = (function (){var statearr_3286 = state_3270;
(statearr_3286[(7)] = inst_3249__$1);

(statearr_3286[(11)] = inst_3251__$1);

return statearr_3286;
})();
if(cljs.core.truth_(inst_3251__$1)){
var statearr_3287_3330 = state_3270__$1;
(statearr_3287_3330[(1)] = (19));

} else {
var statearr_3288_3331 = state_3270__$1;
(statearr_3288_3331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (25))){
var inst_3260 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3289_3332 = state_3270__$1;
(statearr_3289_3332[(2)] = inst_3260);

(statearr_3289_3332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (17))){
var inst_3225 = (state_3270[(10)]);
var inst_3234 = cljs.core.first.call(null,inst_3225);
var inst_3235 = cljs.core.async.muxch_STAR_.call(null,inst_3234);
var inst_3236 = cljs.core.async.close_BANG_.call(null,inst_3235);
var inst_3237 = cljs.core.next.call(null,inst_3225);
var inst_3211 = inst_3237;
var inst_3212 = null;
var inst_3213 = (0);
var inst_3214 = (0);
var state_3270__$1 = (function (){var statearr_3290 = state_3270;
(statearr_3290[(12)] = inst_3214);

(statearr_3290[(13)] = inst_3212);

(statearr_3290[(14)] = inst_3236);

(statearr_3290[(15)] = inst_3213);

(statearr_3290[(16)] = inst_3211);

return statearr_3290;
})();
var statearr_3291_3333 = state_3270__$1;
(statearr_3291_3333[(2)] = null);

(statearr_3291_3333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (3))){
var inst_3268 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3270__$1,inst_3268);
} else {
if((state_val_3271 === (12))){
var inst_3245 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3292_3334 = state_3270__$1;
(statearr_3292_3334[(2)] = inst_3245);

(statearr_3292_3334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (2))){
var state_3270__$1 = state_3270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3270__$1,(4),ch);
} else {
if((state_val_3271 === (23))){
var state_3270__$1 = state_3270;
var statearr_3293_3335 = state_3270__$1;
(statearr_3293_3335[(2)] = null);

(statearr_3293_3335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (19))){
var inst_3201 = (state_3270[(8)]);
var inst_3251 = (state_3270[(11)]);
var inst_3253 = cljs.core.async.muxch_STAR_.call(null,inst_3251);
var state_3270__$1 = state_3270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3270__$1,(22),inst_3253,inst_3201);
} else {
if((state_val_3271 === (11))){
var inst_3225 = (state_3270[(10)]);
var inst_3211 = (state_3270[(16)]);
var inst_3225__$1 = cljs.core.seq.call(null,inst_3211);
var state_3270__$1 = (function (){var statearr_3294 = state_3270;
(statearr_3294[(10)] = inst_3225__$1);

return statearr_3294;
})();
if(inst_3225__$1){
var statearr_3295_3336 = state_3270__$1;
(statearr_3295_3336[(1)] = (13));

} else {
var statearr_3296_3337 = state_3270__$1;
(statearr_3296_3337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (9))){
var inst_3247 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3297_3338 = state_3270__$1;
(statearr_3297_3338[(2)] = inst_3247);

(statearr_3297_3338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (5))){
var inst_3208 = cljs.core.deref.call(null,mults);
var inst_3209 = cljs.core.vals.call(null,inst_3208);
var inst_3210 = cljs.core.seq.call(null,inst_3209);
var inst_3211 = inst_3210;
var inst_3212 = null;
var inst_3213 = (0);
var inst_3214 = (0);
var state_3270__$1 = (function (){var statearr_3298 = state_3270;
(statearr_3298[(12)] = inst_3214);

(statearr_3298[(13)] = inst_3212);

(statearr_3298[(15)] = inst_3213);

(statearr_3298[(16)] = inst_3211);

return statearr_3298;
})();
var statearr_3299_3339 = state_3270__$1;
(statearr_3299_3339[(2)] = null);

(statearr_3299_3339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (14))){
var state_3270__$1 = state_3270;
var statearr_3303_3340 = state_3270__$1;
(statearr_3303_3340[(2)] = null);

(statearr_3303_3340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (16))){
var inst_3225 = (state_3270[(10)]);
var inst_3229 = cljs.core.chunk_first.call(null,inst_3225);
var inst_3230 = cljs.core.chunk_rest.call(null,inst_3225);
var inst_3231 = cljs.core.count.call(null,inst_3229);
var inst_3211 = inst_3230;
var inst_3212 = inst_3229;
var inst_3213 = inst_3231;
var inst_3214 = (0);
var state_3270__$1 = (function (){var statearr_3304 = state_3270;
(statearr_3304[(12)] = inst_3214);

(statearr_3304[(13)] = inst_3212);

(statearr_3304[(15)] = inst_3213);

(statearr_3304[(16)] = inst_3211);

return statearr_3304;
})();
var statearr_3305_3341 = state_3270__$1;
(statearr_3305_3341[(2)] = null);

(statearr_3305_3341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (10))){
var inst_3214 = (state_3270[(12)]);
var inst_3212 = (state_3270[(13)]);
var inst_3213 = (state_3270[(15)]);
var inst_3211 = (state_3270[(16)]);
var inst_3219 = cljs.core._nth.call(null,inst_3212,inst_3214);
var inst_3220 = cljs.core.async.muxch_STAR_.call(null,inst_3219);
var inst_3221 = cljs.core.async.close_BANG_.call(null,inst_3220);
var inst_3222 = (inst_3214 + (1));
var tmp3300 = inst_3212;
var tmp3301 = inst_3213;
var tmp3302 = inst_3211;
var inst_3211__$1 = tmp3302;
var inst_3212__$1 = tmp3300;
var inst_3213__$1 = tmp3301;
var inst_3214__$1 = inst_3222;
var state_3270__$1 = (function (){var statearr_3306 = state_3270;
(statearr_3306[(12)] = inst_3214__$1);

(statearr_3306[(13)] = inst_3212__$1);

(statearr_3306[(15)] = inst_3213__$1);

(statearr_3306[(17)] = inst_3221);

(statearr_3306[(16)] = inst_3211__$1);

return statearr_3306;
})();
var statearr_3307_3342 = state_3270__$1;
(statearr_3307_3342[(2)] = null);

(statearr_3307_3342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (18))){
var inst_3240 = (state_3270[(2)]);
var state_3270__$1 = state_3270;
var statearr_3308_3343 = state_3270__$1;
(statearr_3308_3343[(2)] = inst_3240);

(statearr_3308_3343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3271 === (8))){
var inst_3214 = (state_3270[(12)]);
var inst_3213 = (state_3270[(15)]);
var inst_3216 = (inst_3214 < inst_3213);
var inst_3217 = inst_3216;
var state_3270__$1 = state_3270;
if(cljs.core.truth_(inst_3217)){
var statearr_3309_3344 = state_3270__$1;
(statearr_3309_3344[(1)] = (10));

} else {
var statearr_3310_3345 = state_3270__$1;
(statearr_3310_3345[(1)] = (11));

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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3311[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3311[(1)] = (1));

return statearr_3311;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3270){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3312){var ex__2044__auto__ = e3312;
var statearr_3313_3346 = state_3270;
(statearr_3313_3346[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3270[(4)]))){
var statearr_3314_3347 = state_3270;
(statearr_3314_3347[(1)] = cljs.core.first.call(null,(state_3270[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3348 = state_3270;
state_3270 = G__3348;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3315 = f__2115__auto__.call(null);
(statearr_3315[(6)] = c__2114__auto___3317);

return statearr_3315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
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
var G__3350 = arguments.length;
switch (G__3350) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__3353 = arguments.length;
switch (G__3353) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__3356 = arguments.length;
switch (G__3356) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__2114__auto___3434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3399){
var state_val_3400 = (state_3399[(1)]);
if((state_val_3400 === (7))){
var state_3399__$1 = state_3399;
var statearr_3401_3435 = state_3399__$1;
(statearr_3401_3435[(2)] = null);

(statearr_3401_3435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (1))){
var state_3399__$1 = state_3399;
var statearr_3402_3436 = state_3399__$1;
(statearr_3402_3436[(2)] = null);

(statearr_3402_3436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (4))){
var inst_3359 = (state_3399[(7)]);
var inst_3360 = (state_3399[(8)]);
var inst_3362 = (inst_3360 < inst_3359);
var state_3399__$1 = state_3399;
if(cljs.core.truth_(inst_3362)){
var statearr_3403_3437 = state_3399__$1;
(statearr_3403_3437[(1)] = (6));

} else {
var statearr_3404_3438 = state_3399__$1;
(statearr_3404_3438[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (15))){
var inst_3385 = (state_3399[(9)]);
var inst_3390 = cljs.core.apply.call(null,f,inst_3385);
var state_3399__$1 = state_3399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3399__$1,(17),out,inst_3390);
} else {
if((state_val_3400 === (13))){
var inst_3385 = (state_3399[(9)]);
var inst_3385__$1 = (state_3399[(2)]);
var inst_3386 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_3385__$1);
var state_3399__$1 = (function (){var statearr_3405 = state_3399;
(statearr_3405[(9)] = inst_3385__$1);

return statearr_3405;
})();
if(cljs.core.truth_(inst_3386)){
var statearr_3406_3439 = state_3399__$1;
(statearr_3406_3439[(1)] = (14));

} else {
var statearr_3407_3440 = state_3399__$1;
(statearr_3407_3440[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (6))){
var state_3399__$1 = state_3399;
var statearr_3408_3441 = state_3399__$1;
(statearr_3408_3441[(2)] = null);

(statearr_3408_3441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (17))){
var inst_3392 = (state_3399[(2)]);
var state_3399__$1 = (function (){var statearr_3410 = state_3399;
(statearr_3410[(10)] = inst_3392);

return statearr_3410;
})();
var statearr_3411_3442 = state_3399__$1;
(statearr_3411_3442[(2)] = null);

(statearr_3411_3442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (3))){
var inst_3397 = (state_3399[(2)]);
var state_3399__$1 = state_3399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3399__$1,inst_3397);
} else {
if((state_val_3400 === (12))){
var _ = (function (){var statearr_3412 = state_3399;
(statearr_3412[(4)] = cljs.core.rest.call(null,(state_3399[(4)])));

return statearr_3412;
})();
var state_3399__$1 = state_3399;
var ex3409 = (state_3399__$1[(2)]);
var statearr_3413_3443 = state_3399__$1;
(statearr_3413_3443[(5)] = ex3409);


if((ex3409 instanceof Object)){
var statearr_3414_3444 = state_3399__$1;
(statearr_3414_3444[(1)] = (11));

(statearr_3414_3444[(5)] = null);

} else {
throw ex3409;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (2))){
var inst_3358 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_3359 = cnt;
var inst_3360 = (0);
var state_3399__$1 = (function (){var statearr_3415 = state_3399;
(statearr_3415[(11)] = inst_3358);

(statearr_3415[(7)] = inst_3359);

(statearr_3415[(8)] = inst_3360);

return statearr_3415;
})();
var statearr_3416_3445 = state_3399__$1;
(statearr_3416_3445[(2)] = null);

(statearr_3416_3445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (11))){
var inst_3364 = (state_3399[(2)]);
var inst_3365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_3399__$1 = (function (){var statearr_3417 = state_3399;
(statearr_3417[(12)] = inst_3364);

return statearr_3417;
})();
var statearr_3418_3446 = state_3399__$1;
(statearr_3418_3446[(2)] = inst_3365);

(statearr_3418_3446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (9))){
var inst_3360 = (state_3399[(8)]);
var _ = (function (){var statearr_3419 = state_3399;
(statearr_3419[(4)] = cljs.core.cons.call(null,(12),(state_3399[(4)])));

return statearr_3419;
})();
var inst_3371 = chs__$1.call(null,inst_3360);
var inst_3372 = done.call(null,inst_3360);
var inst_3373 = cljs.core.async.take_BANG_.call(null,inst_3371,inst_3372);
var ___$1 = (function (){var statearr_3420 = state_3399;
(statearr_3420[(4)] = cljs.core.rest.call(null,(state_3399[(4)])));

return statearr_3420;
})();
var state_3399__$1 = state_3399;
var statearr_3421_3447 = state_3399__$1;
(statearr_3421_3447[(2)] = inst_3373);

(statearr_3421_3447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (5))){
var inst_3383 = (state_3399[(2)]);
var state_3399__$1 = (function (){var statearr_3422 = state_3399;
(statearr_3422[(13)] = inst_3383);

return statearr_3422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3399__$1,(13),dchan);
} else {
if((state_val_3400 === (14))){
var inst_3388 = cljs.core.async.close_BANG_.call(null,out);
var state_3399__$1 = state_3399;
var statearr_3423_3448 = state_3399__$1;
(statearr_3423_3448[(2)] = inst_3388);

(statearr_3423_3448[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (16))){
var inst_3395 = (state_3399[(2)]);
var state_3399__$1 = state_3399;
var statearr_3424_3449 = state_3399__$1;
(statearr_3424_3449[(2)] = inst_3395);

(statearr_3424_3449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (10))){
var inst_3360 = (state_3399[(8)]);
var inst_3376 = (state_3399[(2)]);
var inst_3377 = (inst_3360 + (1));
var inst_3360__$1 = inst_3377;
var state_3399__$1 = (function (){var statearr_3425 = state_3399;
(statearr_3425[(8)] = inst_3360__$1);

(statearr_3425[(14)] = inst_3376);

return statearr_3425;
})();
var statearr_3426_3450 = state_3399__$1;
(statearr_3426_3450[(2)] = null);

(statearr_3426_3450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3400 === (8))){
var inst_3381 = (state_3399[(2)]);
var state_3399__$1 = state_3399;
var statearr_3427_3451 = state_3399__$1;
(statearr_3427_3451[(2)] = inst_3381);

(statearr_3427_3451[(1)] = (5));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3428[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3428[(1)] = (1));

return statearr_3428;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3399){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3429){var ex__2044__auto__ = e3429;
var statearr_3430_3452 = state_3399;
(statearr_3430_3452[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3399[(4)]))){
var statearr_3431_3453 = state_3399;
(statearr_3431_3453[(1)] = cljs.core.first.call(null,(state_3399[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3454 = state_3399;
state_3399 = G__3454;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3432 = f__2115__auto__.call(null);
(statearr_3432[(6)] = c__2114__auto___3434);

return statearr_3432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

}

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
var G__3457 = arguments.length;
switch (G__3457) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___3512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3489){
var state_val_3490 = (state_3489[(1)]);
if((state_val_3490 === (7))){
var inst_3468 = (state_3489[(7)]);
var inst_3469 = (state_3489[(8)]);
var inst_3468__$1 = (state_3489[(2)]);
var inst_3469__$1 = cljs.core.nth.call(null,inst_3468__$1,(0),null);
var inst_3470 = cljs.core.nth.call(null,inst_3468__$1,(1),null);
var inst_3471 = (inst_3469__$1 == null);
var state_3489__$1 = (function (){var statearr_3491 = state_3489;
(statearr_3491[(7)] = inst_3468__$1);

(statearr_3491[(8)] = inst_3469__$1);

(statearr_3491[(9)] = inst_3470);

return statearr_3491;
})();
if(cljs.core.truth_(inst_3471)){
var statearr_3492_3513 = state_3489__$1;
(statearr_3492_3513[(1)] = (8));

} else {
var statearr_3493_3514 = state_3489__$1;
(statearr_3493_3514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (1))){
var inst_3458 = cljs.core.vec.call(null,chs);
var inst_3459 = inst_3458;
var state_3489__$1 = (function (){var statearr_3494 = state_3489;
(statearr_3494[(10)] = inst_3459);

return statearr_3494;
})();
var statearr_3495_3515 = state_3489__$1;
(statearr_3495_3515[(2)] = null);

(statearr_3495_3515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (4))){
var inst_3459 = (state_3489[(10)]);
var state_3489__$1 = state_3489;
return cljs.core.async.ioc_alts_BANG_.call(null,state_3489__$1,(7),inst_3459);
} else {
if((state_val_3490 === (6))){
var inst_3485 = (state_3489[(2)]);
var state_3489__$1 = state_3489;
var statearr_3496_3516 = state_3489__$1;
(statearr_3496_3516[(2)] = inst_3485);

(statearr_3496_3516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (3))){
var inst_3487 = (state_3489[(2)]);
var state_3489__$1 = state_3489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3489__$1,inst_3487);
} else {
if((state_val_3490 === (2))){
var inst_3459 = (state_3489[(10)]);
var inst_3461 = cljs.core.count.call(null,inst_3459);
var inst_3462 = (inst_3461 > (0));
var state_3489__$1 = state_3489;
if(cljs.core.truth_(inst_3462)){
var statearr_3498_3517 = state_3489__$1;
(statearr_3498_3517[(1)] = (4));

} else {
var statearr_3499_3518 = state_3489__$1;
(statearr_3499_3518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (11))){
var inst_3459 = (state_3489[(10)]);
var inst_3478 = (state_3489[(2)]);
var tmp3497 = inst_3459;
var inst_3459__$1 = tmp3497;
var state_3489__$1 = (function (){var statearr_3500 = state_3489;
(statearr_3500[(10)] = inst_3459__$1);

(statearr_3500[(11)] = inst_3478);

return statearr_3500;
})();
var statearr_3501_3519 = state_3489__$1;
(statearr_3501_3519[(2)] = null);

(statearr_3501_3519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (9))){
var inst_3469 = (state_3489[(8)]);
var state_3489__$1 = state_3489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3489__$1,(11),out,inst_3469);
} else {
if((state_val_3490 === (5))){
var inst_3483 = cljs.core.async.close_BANG_.call(null,out);
var state_3489__$1 = state_3489;
var statearr_3502_3520 = state_3489__$1;
(statearr_3502_3520[(2)] = inst_3483);

(statearr_3502_3520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (10))){
var inst_3481 = (state_3489[(2)]);
var state_3489__$1 = state_3489;
var statearr_3503_3521 = state_3489__$1;
(statearr_3503_3521[(2)] = inst_3481);

(statearr_3503_3521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3490 === (8))){
var inst_3468 = (state_3489[(7)]);
var inst_3459 = (state_3489[(10)]);
var inst_3469 = (state_3489[(8)]);
var inst_3470 = (state_3489[(9)]);
var inst_3473 = (function (){var cs = inst_3459;
var vec__3464 = inst_3468;
var v = inst_3469;
var c = inst_3470;
return (function (p1__3455_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__3455_SHARP_);
});
})();
var inst_3474 = cljs.core.filterv.call(null,inst_3473,inst_3459);
var inst_3459__$1 = inst_3474;
var state_3489__$1 = (function (){var statearr_3504 = state_3489;
(statearr_3504[(10)] = inst_3459__$1);

return statearr_3504;
})();
var statearr_3505_3522 = state_3489__$1;
(statearr_3505_3522[(2)] = null);

(statearr_3505_3522[(1)] = (2));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3506[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3506[(1)] = (1));

return statearr_3506;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3489){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3507){var ex__2044__auto__ = e3507;
var statearr_3508_3523 = state_3489;
(statearr_3508_3523[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3489[(4)]))){
var statearr_3509_3524 = state_3489;
(statearr_3509_3524[(1)] = cljs.core.first.call(null,(state_3489[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3525 = state_3489;
state_3489 = G__3525;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3510 = f__2115__auto__.call(null);
(statearr_3510[(6)] = c__2114__auto___3512);

return statearr_3510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__3527 = arguments.length;
switch (G__3527) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___3573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3551){
var state_val_3552 = (state_3551[(1)]);
if((state_val_3552 === (7))){
var inst_3533 = (state_3551[(7)]);
var inst_3533__$1 = (state_3551[(2)]);
var inst_3534 = (inst_3533__$1 == null);
var inst_3535 = cljs.core.not.call(null,inst_3534);
var state_3551__$1 = (function (){var statearr_3553 = state_3551;
(statearr_3553[(7)] = inst_3533__$1);

return statearr_3553;
})();
if(inst_3535){
var statearr_3554_3574 = state_3551__$1;
(statearr_3554_3574[(1)] = (8));

} else {
var statearr_3555_3575 = state_3551__$1;
(statearr_3555_3575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (1))){
var inst_3528 = (0);
var state_3551__$1 = (function (){var statearr_3556 = state_3551;
(statearr_3556[(8)] = inst_3528);

return statearr_3556;
})();
var statearr_3557_3576 = state_3551__$1;
(statearr_3557_3576[(2)] = null);

(statearr_3557_3576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (4))){
var state_3551__$1 = state_3551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3551__$1,(7),ch);
} else {
if((state_val_3552 === (6))){
var inst_3546 = (state_3551[(2)]);
var state_3551__$1 = state_3551;
var statearr_3558_3577 = state_3551__$1;
(statearr_3558_3577[(2)] = inst_3546);

(statearr_3558_3577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (3))){
var inst_3548 = (state_3551[(2)]);
var inst_3549 = cljs.core.async.close_BANG_.call(null,out);
var state_3551__$1 = (function (){var statearr_3559 = state_3551;
(statearr_3559[(9)] = inst_3548);

return statearr_3559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3551__$1,inst_3549);
} else {
if((state_val_3552 === (2))){
var inst_3528 = (state_3551[(8)]);
var inst_3530 = (inst_3528 < n);
var state_3551__$1 = state_3551;
if(cljs.core.truth_(inst_3530)){
var statearr_3560_3578 = state_3551__$1;
(statearr_3560_3578[(1)] = (4));

} else {
var statearr_3561_3579 = state_3551__$1;
(statearr_3561_3579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (11))){
var inst_3528 = (state_3551[(8)]);
var inst_3538 = (state_3551[(2)]);
var inst_3539 = (inst_3528 + (1));
var inst_3528__$1 = inst_3539;
var state_3551__$1 = (function (){var statearr_3562 = state_3551;
(statearr_3562[(10)] = inst_3538);

(statearr_3562[(8)] = inst_3528__$1);

return statearr_3562;
})();
var statearr_3563_3580 = state_3551__$1;
(statearr_3563_3580[(2)] = null);

(statearr_3563_3580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (9))){
var state_3551__$1 = state_3551;
var statearr_3564_3581 = state_3551__$1;
(statearr_3564_3581[(2)] = null);

(statearr_3564_3581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (5))){
var state_3551__$1 = state_3551;
var statearr_3565_3582 = state_3551__$1;
(statearr_3565_3582[(2)] = null);

(statearr_3565_3582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (10))){
var inst_3543 = (state_3551[(2)]);
var state_3551__$1 = state_3551;
var statearr_3566_3583 = state_3551__$1;
(statearr_3566_3583[(2)] = inst_3543);

(statearr_3566_3583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3552 === (8))){
var inst_3533 = (state_3551[(7)]);
var state_3551__$1 = state_3551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3551__$1,(11),out,inst_3533);
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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3567[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3567[(1)] = (1));

return statearr_3567;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3551){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3568){var ex__2044__auto__ = e3568;
var statearr_3569_3584 = state_3551;
(statearr_3569_3584[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3551[(4)]))){
var statearr_3570_3585 = state_3551;
(statearr_3570_3585[(1)] = cljs.core.first.call(null,(state_3551[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3586 = state_3551;
state_3551 = G__3586;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3571 = f__2115__auto__.call(null);
(statearr_3571[(6)] = c__2114__auto___3573);

return statearr_3571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3588 = (function (f,ch,meta3589){
this.f = f;
this.ch = ch;
this.meta3589 = meta3589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3590,meta3589__$1){
var self__ = this;
var _3590__$1 = this;
return (new cljs.core.async.t_cljs$core$async3588(self__.f,self__.ch,meta3589__$1));
}));

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3590){
var self__ = this;
var _3590__$1 = this;
return self__.meta3589;
}));

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3591 = (function (f,ch,meta3589,_,fn1,meta3592){
this.f = f;
this.ch = ch;
this.meta3589 = meta3589;
this._ = _;
this.fn1 = fn1;
this.meta3592 = meta3592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3593,meta3592__$1){
var self__ = this;
var _3593__$1 = this;
return (new cljs.core.async.t_cljs$core$async3591(self__.f,self__.ch,self__.meta3589,self__._,self__.fn1,meta3592__$1));
}));

(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3593){
var self__ = this;
var _3593__$1 = this;
return self__.meta3592;
}));

(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__3587_SHARP_){
return f1.call(null,(((p1__3587_SHARP_ == null))?null:self__.f.call(null,p1__3587_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async3591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3589","meta3589",1989979304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async3588","cljs.core.async/t_cljs$core$async3588",-316367241,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta3592","meta3592",-1903160516,null)], null);
}));

(cljs.core.async.t_cljs$core$async3591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3591");

(cljs.core.async.t_cljs$core$async3591.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3591.
 */
cljs.core.async.__GT_t_cljs$core$async3591 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3591(f__$1,ch__$1,meta3589__$1,___$2,fn1__$1,meta3592){
return (new cljs.core.async.t_cljs$core$async3591(f__$1,ch__$1,meta3589__$1,___$2,fn1__$1,meta3592));
});

}

return (new cljs.core.async.t_cljs$core$async3591(self__.f,self__.ch,self__.meta3589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__1467__auto__ = ret;
if(cljs.core.truth_(and__1467__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__1467__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async3588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3589","meta3589",1989979304,null)], null);
}));

(cljs.core.async.t_cljs$core$async3588.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3588");

(cljs.core.async.t_cljs$core$async3588.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3588");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3588.
 */
cljs.core.async.__GT_t_cljs$core$async3588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3588(f__$1,ch__$1,meta3589){
return (new cljs.core.async.t_cljs$core$async3588(f__$1,ch__$1,meta3589));
});

}

return (new cljs.core.async.t_cljs$core$async3588(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3594 = (function (f,ch,meta3595){
this.f = f;
this.ch = ch;
this.meta3595 = meta3595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3596,meta3595__$1){
var self__ = this;
var _3596__$1 = this;
return (new cljs.core.async.t_cljs$core$async3594(self__.f,self__.ch,meta3595__$1));
}));

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3596){
var self__ = this;
var _3596__$1 = this;
return self__.meta3595;
}));

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async3594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3595","meta3595",1257608020,null)], null);
}));

(cljs.core.async.t_cljs$core$async3594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3594");

(cljs.core.async.t_cljs$core$async3594.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3594.
 */
cljs.core.async.__GT_t_cljs$core$async3594 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async3594(f__$1,ch__$1,meta3595){
return (new cljs.core.async.t_cljs$core$async3594(f__$1,ch__$1,meta3595));
});

}

return (new cljs.core.async.t_cljs$core$async3594(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3597 = (function (p,ch,meta3598){
this.p = p;
this.ch = ch;
this.meta3598 = meta3598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3599,meta3598__$1){
var self__ = this;
var _3599__$1 = this;
return (new cljs.core.async.t_cljs$core$async3597(self__.p,self__.ch,meta3598__$1));
}));

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3599){
var self__ = this;
var _3599__$1 = this;
return self__.meta3598;
}));

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async3597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3598","meta3598",-132997806,null)], null);
}));

(cljs.core.async.t_cljs$core$async3597.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3597");

(cljs.core.async.t_cljs$core$async3597.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async/t_cljs$core$async3597");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3597.
 */
cljs.core.async.__GT_t_cljs$core$async3597 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async3597(p__$1,ch__$1,meta3598){
return (new cljs.core.async.t_cljs$core$async3597(p__$1,ch__$1,meta3598));
});

}

return (new cljs.core.async.t_cljs$core$async3597(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__3601 = arguments.length;
switch (G__3601) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___3642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3622){
var state_val_3623 = (state_3622[(1)]);
if((state_val_3623 === (7))){
var inst_3618 = (state_3622[(2)]);
var state_3622__$1 = state_3622;
var statearr_3624_3643 = state_3622__$1;
(statearr_3624_3643[(2)] = inst_3618);

(statearr_3624_3643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (1))){
var state_3622__$1 = state_3622;
var statearr_3625_3644 = state_3622__$1;
(statearr_3625_3644[(2)] = null);

(statearr_3625_3644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (4))){
var inst_3604 = (state_3622[(7)]);
var inst_3604__$1 = (state_3622[(2)]);
var inst_3605 = (inst_3604__$1 == null);
var state_3622__$1 = (function (){var statearr_3626 = state_3622;
(statearr_3626[(7)] = inst_3604__$1);

return statearr_3626;
})();
if(cljs.core.truth_(inst_3605)){
var statearr_3627_3645 = state_3622__$1;
(statearr_3627_3645[(1)] = (5));

} else {
var statearr_3628_3646 = state_3622__$1;
(statearr_3628_3646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (6))){
var inst_3604 = (state_3622[(7)]);
var inst_3609 = p.call(null,inst_3604);
var state_3622__$1 = state_3622;
if(cljs.core.truth_(inst_3609)){
var statearr_3629_3647 = state_3622__$1;
(statearr_3629_3647[(1)] = (8));

} else {
var statearr_3630_3648 = state_3622__$1;
(statearr_3630_3648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (3))){
var inst_3620 = (state_3622[(2)]);
var state_3622__$1 = state_3622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3622__$1,inst_3620);
} else {
if((state_val_3623 === (2))){
var state_3622__$1 = state_3622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3622__$1,(4),ch);
} else {
if((state_val_3623 === (11))){
var inst_3612 = (state_3622[(2)]);
var state_3622__$1 = state_3622;
var statearr_3631_3649 = state_3622__$1;
(statearr_3631_3649[(2)] = inst_3612);

(statearr_3631_3649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (9))){
var state_3622__$1 = state_3622;
var statearr_3632_3650 = state_3622__$1;
(statearr_3632_3650[(2)] = null);

(statearr_3632_3650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (5))){
var inst_3607 = cljs.core.async.close_BANG_.call(null,out);
var state_3622__$1 = state_3622;
var statearr_3633_3651 = state_3622__$1;
(statearr_3633_3651[(2)] = inst_3607);

(statearr_3633_3651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (10))){
var inst_3615 = (state_3622[(2)]);
var state_3622__$1 = (function (){var statearr_3634 = state_3622;
(statearr_3634[(8)] = inst_3615);

return statearr_3634;
})();
var statearr_3635_3652 = state_3622__$1;
(statearr_3635_3652[(2)] = null);

(statearr_3635_3652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3623 === (8))){
var inst_3604 = (state_3622[(7)]);
var state_3622__$1 = state_3622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3622__$1,(11),out,inst_3604);
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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3636 = [null,null,null,null,null,null,null,null,null];
(statearr_3636[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3636[(1)] = (1));

return statearr_3636;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3622){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3637){var ex__2044__auto__ = e3637;
var statearr_3638_3653 = state_3622;
(statearr_3638_3653[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3622[(4)]))){
var statearr_3639_3654 = state_3622;
(statearr_3639_3654[(1)] = cljs.core.first.call(null,(state_3622[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3655 = state_3622;
state_3622 = G__3655;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3640 = f__2115__auto__.call(null);
(statearr_3640[(6)] = c__2114__auto___3642);

return statearr_3640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__3657 = arguments.length;
switch (G__3657) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2114__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3720){
var state_val_3721 = (state_3720[(1)]);
if((state_val_3721 === (7))){
var inst_3716 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
var statearr_3722_3761 = state_3720__$1;
(statearr_3722_3761[(2)] = inst_3716);

(statearr_3722_3761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (20))){
var inst_3686 = (state_3720[(7)]);
var inst_3697 = (state_3720[(2)]);
var inst_3698 = cljs.core.next.call(null,inst_3686);
var inst_3672 = inst_3698;
var inst_3673 = null;
var inst_3674 = (0);
var inst_3675 = (0);
var state_3720__$1 = (function (){var statearr_3723 = state_3720;
(statearr_3723[(8)] = inst_3674);

(statearr_3723[(9)] = inst_3675);

(statearr_3723[(10)] = inst_3673);

(statearr_3723[(11)] = inst_3672);

(statearr_3723[(12)] = inst_3697);

return statearr_3723;
})();
var statearr_3724_3762 = state_3720__$1;
(statearr_3724_3762[(2)] = null);

(statearr_3724_3762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (1))){
var state_3720__$1 = state_3720;
var statearr_3725_3763 = state_3720__$1;
(statearr_3725_3763[(2)] = null);

(statearr_3725_3763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (4))){
var inst_3661 = (state_3720[(13)]);
var inst_3661__$1 = (state_3720[(2)]);
var inst_3662 = (inst_3661__$1 == null);
var state_3720__$1 = (function (){var statearr_3726 = state_3720;
(statearr_3726[(13)] = inst_3661__$1);

return statearr_3726;
})();
if(cljs.core.truth_(inst_3662)){
var statearr_3727_3764 = state_3720__$1;
(statearr_3727_3764[(1)] = (5));

} else {
var statearr_3728_3765 = state_3720__$1;
(statearr_3728_3765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (15))){
var state_3720__$1 = state_3720;
var statearr_3732_3766 = state_3720__$1;
(statearr_3732_3766[(2)] = null);

(statearr_3732_3766[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (21))){
var state_3720__$1 = state_3720;
var statearr_3733_3767 = state_3720__$1;
(statearr_3733_3767[(2)] = null);

(statearr_3733_3767[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (13))){
var inst_3674 = (state_3720[(8)]);
var inst_3675 = (state_3720[(9)]);
var inst_3673 = (state_3720[(10)]);
var inst_3672 = (state_3720[(11)]);
var inst_3682 = (state_3720[(2)]);
var inst_3683 = (inst_3675 + (1));
var tmp3729 = inst_3674;
var tmp3730 = inst_3673;
var tmp3731 = inst_3672;
var inst_3672__$1 = tmp3731;
var inst_3673__$1 = tmp3730;
var inst_3674__$1 = tmp3729;
var inst_3675__$1 = inst_3683;
var state_3720__$1 = (function (){var statearr_3734 = state_3720;
(statearr_3734[(8)] = inst_3674__$1);

(statearr_3734[(9)] = inst_3675__$1);

(statearr_3734[(10)] = inst_3673__$1);

(statearr_3734[(11)] = inst_3672__$1);

(statearr_3734[(14)] = inst_3682);

return statearr_3734;
})();
var statearr_3735_3768 = state_3720__$1;
(statearr_3735_3768[(2)] = null);

(statearr_3735_3768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (22))){
var state_3720__$1 = state_3720;
var statearr_3736_3769 = state_3720__$1;
(statearr_3736_3769[(2)] = null);

(statearr_3736_3769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (6))){
var inst_3661 = (state_3720[(13)]);
var inst_3670 = f.call(null,inst_3661);
var inst_3671 = cljs.core.seq.call(null,inst_3670);
var inst_3672 = inst_3671;
var inst_3673 = null;
var inst_3674 = (0);
var inst_3675 = (0);
var state_3720__$1 = (function (){var statearr_3737 = state_3720;
(statearr_3737[(8)] = inst_3674);

(statearr_3737[(9)] = inst_3675);

(statearr_3737[(10)] = inst_3673);

(statearr_3737[(11)] = inst_3672);

return statearr_3737;
})();
var statearr_3738_3770 = state_3720__$1;
(statearr_3738_3770[(2)] = null);

(statearr_3738_3770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (17))){
var inst_3686 = (state_3720[(7)]);
var inst_3690 = cljs.core.chunk_first.call(null,inst_3686);
var inst_3691 = cljs.core.chunk_rest.call(null,inst_3686);
var inst_3692 = cljs.core.count.call(null,inst_3690);
var inst_3672 = inst_3691;
var inst_3673 = inst_3690;
var inst_3674 = inst_3692;
var inst_3675 = (0);
var state_3720__$1 = (function (){var statearr_3739 = state_3720;
(statearr_3739[(8)] = inst_3674);

(statearr_3739[(9)] = inst_3675);

(statearr_3739[(10)] = inst_3673);

(statearr_3739[(11)] = inst_3672);

return statearr_3739;
})();
var statearr_3740_3771 = state_3720__$1;
(statearr_3740_3771[(2)] = null);

(statearr_3740_3771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (3))){
var inst_3718 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3720__$1,inst_3718);
} else {
if((state_val_3721 === (12))){
var inst_3706 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
var statearr_3741_3772 = state_3720__$1;
(statearr_3741_3772[(2)] = inst_3706);

(statearr_3741_3772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (2))){
var state_3720__$1 = state_3720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3720__$1,(4),in$);
} else {
if((state_val_3721 === (23))){
var inst_3714 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
var statearr_3742_3773 = state_3720__$1;
(statearr_3742_3773[(2)] = inst_3714);

(statearr_3742_3773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (19))){
var inst_3701 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
var statearr_3743_3774 = state_3720__$1;
(statearr_3743_3774[(2)] = inst_3701);

(statearr_3743_3774[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (11))){
var inst_3686 = (state_3720[(7)]);
var inst_3672 = (state_3720[(11)]);
var inst_3686__$1 = cljs.core.seq.call(null,inst_3672);
var state_3720__$1 = (function (){var statearr_3744 = state_3720;
(statearr_3744[(7)] = inst_3686__$1);

return statearr_3744;
})();
if(inst_3686__$1){
var statearr_3745_3775 = state_3720__$1;
(statearr_3745_3775[(1)] = (14));

} else {
var statearr_3746_3776 = state_3720__$1;
(statearr_3746_3776[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (9))){
var inst_3708 = (state_3720[(2)]);
var inst_3709 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_3720__$1 = (function (){var statearr_3747 = state_3720;
(statearr_3747[(15)] = inst_3708);

return statearr_3747;
})();
if(cljs.core.truth_(inst_3709)){
var statearr_3748_3777 = state_3720__$1;
(statearr_3748_3777[(1)] = (21));

} else {
var statearr_3749_3778 = state_3720__$1;
(statearr_3749_3778[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (5))){
var inst_3664 = cljs.core.async.close_BANG_.call(null,out);
var state_3720__$1 = state_3720;
var statearr_3750_3779 = state_3720__$1;
(statearr_3750_3779[(2)] = inst_3664);

(statearr_3750_3779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (14))){
var inst_3686 = (state_3720[(7)]);
var inst_3688 = cljs.core.chunked_seq_QMARK_.call(null,inst_3686);
var state_3720__$1 = state_3720;
if(inst_3688){
var statearr_3751_3780 = state_3720__$1;
(statearr_3751_3780[(1)] = (17));

} else {
var statearr_3752_3781 = state_3720__$1;
(statearr_3752_3781[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (16))){
var inst_3704 = (state_3720[(2)]);
var state_3720__$1 = state_3720;
var statearr_3753_3782 = state_3720__$1;
(statearr_3753_3782[(2)] = inst_3704);

(statearr_3753_3782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3721 === (10))){
var inst_3675 = (state_3720[(9)]);
var inst_3673 = (state_3720[(10)]);
var inst_3680 = cljs.core._nth.call(null,inst_3673,inst_3675);
var state_3720__$1 = state_3720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3720__$1,(13),out,inst_3680);
} else {
if((state_val_3721 === (18))){
var inst_3686 = (state_3720[(7)]);
var inst_3695 = cljs.core.first.call(null,inst_3686);
var state_3720__$1 = state_3720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3720__$1,(20),out,inst_3695);
} else {
if((state_val_3721 === (8))){
var inst_3674 = (state_3720[(8)]);
var inst_3675 = (state_3720[(9)]);
var inst_3677 = (inst_3675 < inst_3674);
var inst_3678 = inst_3677;
var state_3720__$1 = state_3720;
if(cljs.core.truth_(inst_3678)){
var statearr_3754_3783 = state_3720__$1;
(statearr_3754_3783[(1)] = (10));

} else {
var statearr_3755_3784 = state_3720__$1;
(statearr_3755_3784[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____0 = (function (){
var statearr_3756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3756[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__);

(statearr_3756[(1)] = (1));

return statearr_3756;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____1 = (function (state_3720){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3757){var ex__2044__auto__ = e3757;
var statearr_3758_3785 = state_3720;
(statearr_3758_3785[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3720[(4)]))){
var statearr_3759_3786 = state_3720;
(statearr_3759_3786[(1)] = cljs.core.first.call(null,(state_3720[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3787 = state_3720;
state_3720 = G__3787;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__ = function(state_3720){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____1.call(this,state_3720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2041__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3760 = f__2115__auto__.call(null);
(statearr_3760[(6)] = c__2114__auto__);

return statearr_3760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));

return c__2114__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__3789 = arguments.length;
switch (G__3789) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__3792 = arguments.length;
switch (G__3792) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__3795 = arguments.length;
switch (G__3795) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___3843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3819){
var state_val_3820 = (state_3819[(1)]);
if((state_val_3820 === (7))){
var inst_3814 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
var statearr_3821_3844 = state_3819__$1;
(statearr_3821_3844[(2)] = inst_3814);

(statearr_3821_3844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (1))){
var inst_3796 = null;
var state_3819__$1 = (function (){var statearr_3822 = state_3819;
(statearr_3822[(7)] = inst_3796);

return statearr_3822;
})();
var statearr_3823_3845 = state_3819__$1;
(statearr_3823_3845[(2)] = null);

(statearr_3823_3845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (4))){
var inst_3799 = (state_3819[(8)]);
var inst_3799__$1 = (state_3819[(2)]);
var inst_3800 = (inst_3799__$1 == null);
var inst_3801 = cljs.core.not.call(null,inst_3800);
var state_3819__$1 = (function (){var statearr_3824 = state_3819;
(statearr_3824[(8)] = inst_3799__$1);

return statearr_3824;
})();
if(inst_3801){
var statearr_3825_3846 = state_3819__$1;
(statearr_3825_3846[(1)] = (5));

} else {
var statearr_3826_3847 = state_3819__$1;
(statearr_3826_3847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (6))){
var state_3819__$1 = state_3819;
var statearr_3827_3848 = state_3819__$1;
(statearr_3827_3848[(2)] = null);

(statearr_3827_3848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (3))){
var inst_3816 = (state_3819[(2)]);
var inst_3817 = cljs.core.async.close_BANG_.call(null,out);
var state_3819__$1 = (function (){var statearr_3828 = state_3819;
(statearr_3828[(9)] = inst_3816);

return statearr_3828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3819__$1,inst_3817);
} else {
if((state_val_3820 === (2))){
var state_3819__$1 = state_3819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3819__$1,(4),ch);
} else {
if((state_val_3820 === (11))){
var inst_3799 = (state_3819[(8)]);
var inst_3808 = (state_3819[(2)]);
var inst_3796 = inst_3799;
var state_3819__$1 = (function (){var statearr_3829 = state_3819;
(statearr_3829[(10)] = inst_3808);

(statearr_3829[(7)] = inst_3796);

return statearr_3829;
})();
var statearr_3830_3849 = state_3819__$1;
(statearr_3830_3849[(2)] = null);

(statearr_3830_3849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (9))){
var inst_3799 = (state_3819[(8)]);
var state_3819__$1 = state_3819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3819__$1,(11),out,inst_3799);
} else {
if((state_val_3820 === (5))){
var inst_3796 = (state_3819[(7)]);
var inst_3799 = (state_3819[(8)]);
var inst_3803 = cljs.core._EQ_.call(null,inst_3799,inst_3796);
var state_3819__$1 = state_3819;
if(inst_3803){
var statearr_3832_3850 = state_3819__$1;
(statearr_3832_3850[(1)] = (8));

} else {
var statearr_3833_3851 = state_3819__$1;
(statearr_3833_3851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (10))){
var inst_3811 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
var statearr_3834_3852 = state_3819__$1;
(statearr_3834_3852[(2)] = inst_3811);

(statearr_3834_3852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (8))){
var inst_3796 = (state_3819[(7)]);
var tmp3831 = inst_3796;
var inst_3796__$1 = tmp3831;
var state_3819__$1 = (function (){var statearr_3835 = state_3819;
(statearr_3835[(7)] = inst_3796__$1);

return statearr_3835;
})();
var statearr_3836_3853 = state_3819__$1;
(statearr_3836_3853[(2)] = null);

(statearr_3836_3853[(1)] = (2));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3837[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3837[(1)] = (1));

return statearr_3837;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3819){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3838){var ex__2044__auto__ = e3838;
var statearr_3839_3854 = state_3819;
(statearr_3839_3854[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3819[(4)]))){
var statearr_3840_3855 = state_3819;
(statearr_3840_3855[(1)] = cljs.core.first.call(null,(state_3819[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3856 = state_3819;
state_3819 = G__3856;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3841 = f__2115__auto__.call(null);
(statearr_3841[(6)] = c__2114__auto___3843);

return statearr_3841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__3858 = arguments.length;
switch (G__3858) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___3925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3896){
var state_val_3897 = (state_3896[(1)]);
if((state_val_3897 === (7))){
var inst_3892 = (state_3896[(2)]);
var state_3896__$1 = state_3896;
var statearr_3898_3926 = state_3896__$1;
(statearr_3898_3926[(2)] = inst_3892);

(statearr_3898_3926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (1))){
var inst_3859 = (new Array(n));
var inst_3860 = inst_3859;
var inst_3861 = (0);
var state_3896__$1 = (function (){var statearr_3899 = state_3896;
(statearr_3899[(7)] = inst_3860);

(statearr_3899[(8)] = inst_3861);

return statearr_3899;
})();
var statearr_3900_3927 = state_3896__$1;
(statearr_3900_3927[(2)] = null);

(statearr_3900_3927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (4))){
var inst_3864 = (state_3896[(9)]);
var inst_3864__$1 = (state_3896[(2)]);
var inst_3865 = (inst_3864__$1 == null);
var inst_3866 = cljs.core.not.call(null,inst_3865);
var state_3896__$1 = (function (){var statearr_3901 = state_3896;
(statearr_3901[(9)] = inst_3864__$1);

return statearr_3901;
})();
if(inst_3866){
var statearr_3902_3928 = state_3896__$1;
(statearr_3902_3928[(1)] = (5));

} else {
var statearr_3903_3929 = state_3896__$1;
(statearr_3903_3929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (15))){
var inst_3886 = (state_3896[(2)]);
var state_3896__$1 = state_3896;
var statearr_3904_3930 = state_3896__$1;
(statearr_3904_3930[(2)] = inst_3886);

(statearr_3904_3930[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (13))){
var state_3896__$1 = state_3896;
var statearr_3905_3931 = state_3896__$1;
(statearr_3905_3931[(2)] = null);

(statearr_3905_3931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (6))){
var inst_3861 = (state_3896[(8)]);
var inst_3882 = (inst_3861 > (0));
var state_3896__$1 = state_3896;
if(cljs.core.truth_(inst_3882)){
var statearr_3906_3932 = state_3896__$1;
(statearr_3906_3932[(1)] = (12));

} else {
var statearr_3907_3933 = state_3896__$1;
(statearr_3907_3933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (3))){
var inst_3894 = (state_3896[(2)]);
var state_3896__$1 = state_3896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3896__$1,inst_3894);
} else {
if((state_val_3897 === (12))){
var inst_3860 = (state_3896[(7)]);
var inst_3884 = cljs.core.vec.call(null,inst_3860);
var state_3896__$1 = state_3896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3896__$1,(15),out,inst_3884);
} else {
if((state_val_3897 === (2))){
var state_3896__$1 = state_3896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3896__$1,(4),ch);
} else {
if((state_val_3897 === (11))){
var inst_3876 = (state_3896[(2)]);
var inst_3877 = (new Array(n));
var inst_3860 = inst_3877;
var inst_3861 = (0);
var state_3896__$1 = (function (){var statearr_3908 = state_3896;
(statearr_3908[(10)] = inst_3876);

(statearr_3908[(7)] = inst_3860);

(statearr_3908[(8)] = inst_3861);

return statearr_3908;
})();
var statearr_3909_3934 = state_3896__$1;
(statearr_3909_3934[(2)] = null);

(statearr_3909_3934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (9))){
var inst_3860 = (state_3896[(7)]);
var inst_3874 = cljs.core.vec.call(null,inst_3860);
var state_3896__$1 = state_3896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3896__$1,(11),out,inst_3874);
} else {
if((state_val_3897 === (5))){
var inst_3869 = (state_3896[(11)]);
var inst_3860 = (state_3896[(7)]);
var inst_3861 = (state_3896[(8)]);
var inst_3864 = (state_3896[(9)]);
var inst_3868 = (inst_3860[inst_3861] = inst_3864);
var inst_3869__$1 = (inst_3861 + (1));
var inst_3870 = (inst_3869__$1 < n);
var state_3896__$1 = (function (){var statearr_3910 = state_3896;
(statearr_3910[(11)] = inst_3869__$1);

(statearr_3910[(12)] = inst_3868);

return statearr_3910;
})();
if(cljs.core.truth_(inst_3870)){
var statearr_3911_3935 = state_3896__$1;
(statearr_3911_3935[(1)] = (8));

} else {
var statearr_3912_3936 = state_3896__$1;
(statearr_3912_3936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (14))){
var inst_3889 = (state_3896[(2)]);
var inst_3890 = cljs.core.async.close_BANG_.call(null,out);
var state_3896__$1 = (function (){var statearr_3914 = state_3896;
(statearr_3914[(13)] = inst_3889);

return statearr_3914;
})();
var statearr_3915_3937 = state_3896__$1;
(statearr_3915_3937[(2)] = inst_3890);

(statearr_3915_3937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (10))){
var inst_3880 = (state_3896[(2)]);
var state_3896__$1 = state_3896;
var statearr_3916_3938 = state_3896__$1;
(statearr_3916_3938[(2)] = inst_3880);

(statearr_3916_3938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3897 === (8))){
var inst_3869 = (state_3896[(11)]);
var inst_3860 = (state_3896[(7)]);
var tmp3913 = inst_3860;
var inst_3860__$1 = tmp3913;
var inst_3861 = inst_3869;
var state_3896__$1 = (function (){var statearr_3917 = state_3896;
(statearr_3917[(7)] = inst_3860__$1);

(statearr_3917[(8)] = inst_3861);

return statearr_3917;
})();
var statearr_3918_3939 = state_3896__$1;
(statearr_3918_3939[(2)] = null);

(statearr_3918_3939[(1)] = (2));


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
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_3919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3919[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_3919[(1)] = (1));

return statearr_3919;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3896){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e3920){var ex__2044__auto__ = e3920;
var statearr_3921_3940 = state_3896;
(statearr_3921_3940[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3896[(4)]))){
var statearr_3922_3941 = state_3896;
(statearr_3922_3941[(1)] = cljs.core.first.call(null,(state_3896[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3942 = state_3896;
state_3896 = G__3942;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_3923 = f__2115__auto__.call(null);
(statearr_3923[(6)] = c__2114__auto___3925);

return statearr_3923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__3944 = arguments.length;
switch (G__3944) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2114__auto___4022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2115__auto__ = (function (){var switch__2040__auto__ = (function (state_3989){
var state_val_3990 = (state_3989[(1)]);
if((state_val_3990 === (7))){
var inst_3985 = (state_3989[(2)]);
var state_3989__$1 = state_3989;
var statearr_3991_4023 = state_3989__$1;
(statearr_3991_4023[(2)] = inst_3985);

(statearr_3991_4023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (1))){
var inst_3945 = [];
var inst_3946 = inst_3945;
var inst_3947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_3989__$1 = (function (){var statearr_3992 = state_3989;
(statearr_3992[(7)] = inst_3947);

(statearr_3992[(8)] = inst_3946);

return statearr_3992;
})();
var statearr_3993_4024 = state_3989__$1;
(statearr_3993_4024[(2)] = null);

(statearr_3993_4024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (4))){
var inst_3950 = (state_3989[(9)]);
var inst_3950__$1 = (state_3989[(2)]);
var inst_3951 = (inst_3950__$1 == null);
var inst_3952 = cljs.core.not.call(null,inst_3951);
var state_3989__$1 = (function (){var statearr_3994 = state_3989;
(statearr_3994[(9)] = inst_3950__$1);

return statearr_3994;
})();
if(inst_3952){
var statearr_3995_4025 = state_3989__$1;
(statearr_3995_4025[(1)] = (5));

} else {
var statearr_3996_4026 = state_3989__$1;
(statearr_3996_4026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (15))){
var inst_3946 = (state_3989[(8)]);
var inst_3977 = cljs.core.vec.call(null,inst_3946);
var state_3989__$1 = state_3989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3989__$1,(18),out,inst_3977);
} else {
if((state_val_3990 === (13))){
var inst_3972 = (state_3989[(2)]);
var state_3989__$1 = state_3989;
var statearr_3997_4027 = state_3989__$1;
(statearr_3997_4027[(2)] = inst_3972);

(statearr_3997_4027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (6))){
var inst_3946 = (state_3989[(8)]);
var inst_3974 = inst_3946.length;
var inst_3975 = (inst_3974 > (0));
var state_3989__$1 = state_3989;
if(cljs.core.truth_(inst_3975)){
var statearr_3998_4028 = state_3989__$1;
(statearr_3998_4028[(1)] = (15));

} else {
var statearr_3999_4029 = state_3989__$1;
(statearr_3999_4029[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (17))){
var inst_3982 = (state_3989[(2)]);
var inst_3983 = cljs.core.async.close_BANG_.call(null,out);
var state_3989__$1 = (function (){var statearr_4000 = state_3989;
(statearr_4000[(10)] = inst_3982);

return statearr_4000;
})();
var statearr_4001_4030 = state_3989__$1;
(statearr_4001_4030[(2)] = inst_3983);

(statearr_4001_4030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (3))){
var inst_3987 = (state_3989[(2)]);
var state_3989__$1 = state_3989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3989__$1,inst_3987);
} else {
if((state_val_3990 === (12))){
var inst_3946 = (state_3989[(8)]);
var inst_3965 = cljs.core.vec.call(null,inst_3946);
var state_3989__$1 = state_3989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3989__$1,(14),out,inst_3965);
} else {
if((state_val_3990 === (2))){
var state_3989__$1 = state_3989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3989__$1,(4),ch);
} else {
if((state_val_3990 === (11))){
var inst_3950 = (state_3989[(9)]);
var inst_3954 = (state_3989[(11)]);
var inst_3946 = (state_3989[(8)]);
var inst_3962 = inst_3946.push(inst_3950);
var tmp4002 = inst_3946;
var inst_3946__$1 = tmp4002;
var inst_3947 = inst_3954;
var state_3989__$1 = (function (){var statearr_4003 = state_3989;
(statearr_4003[(12)] = inst_3962);

(statearr_4003[(7)] = inst_3947);

(statearr_4003[(8)] = inst_3946__$1);

return statearr_4003;
})();
var statearr_4004_4031 = state_3989__$1;
(statearr_4004_4031[(2)] = null);

(statearr_4004_4031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (9))){
var inst_3947 = (state_3989[(7)]);
var inst_3958 = cljs.core.keyword_identical_QMARK_.call(null,inst_3947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_3989__$1 = state_3989;
var statearr_4005_4032 = state_3989__$1;
(statearr_4005_4032[(2)] = inst_3958);

(statearr_4005_4032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (5))){
var inst_3950 = (state_3989[(9)]);
var inst_3947 = (state_3989[(7)]);
var inst_3954 = (state_3989[(11)]);
var inst_3955 = (state_3989[(13)]);
var inst_3954__$1 = f.call(null,inst_3950);
var inst_3955__$1 = cljs.core._EQ_.call(null,inst_3954__$1,inst_3947);
var state_3989__$1 = (function (){var statearr_4006 = state_3989;
(statearr_4006[(11)] = inst_3954__$1);

(statearr_4006[(13)] = inst_3955__$1);

return statearr_4006;
})();
if(inst_3955__$1){
var statearr_4007_4033 = state_3989__$1;
(statearr_4007_4033[(1)] = (8));

} else {
var statearr_4008_4034 = state_3989__$1;
(statearr_4008_4034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (14))){
var inst_3950 = (state_3989[(9)]);
var inst_3954 = (state_3989[(11)]);
var inst_3967 = (state_3989[(2)]);
var inst_3968 = [];
var inst_3969 = inst_3968.push(inst_3950);
var inst_3946 = inst_3968;
var inst_3947 = inst_3954;
var state_3989__$1 = (function (){var statearr_4009 = state_3989;
(statearr_4009[(14)] = inst_3969);

(statearr_4009[(7)] = inst_3947);

(statearr_4009[(15)] = inst_3967);

(statearr_4009[(8)] = inst_3946);

return statearr_4009;
})();
var statearr_4010_4035 = state_3989__$1;
(statearr_4010_4035[(2)] = null);

(statearr_4010_4035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (16))){
var state_3989__$1 = state_3989;
var statearr_4011_4036 = state_3989__$1;
(statearr_4011_4036[(2)] = null);

(statearr_4011_4036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (10))){
var inst_3960 = (state_3989[(2)]);
var state_3989__$1 = state_3989;
if(cljs.core.truth_(inst_3960)){
var statearr_4012_4037 = state_3989__$1;
(statearr_4012_4037[(1)] = (11));

} else {
var statearr_4013_4038 = state_3989__$1;
(statearr_4013_4038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (18))){
var inst_3979 = (state_3989[(2)]);
var state_3989__$1 = state_3989;
var statearr_4014_4039 = state_3989__$1;
(statearr_4014_4039[(2)] = inst_3979);

(statearr_4014_4039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3990 === (8))){
var inst_3955 = (state_3989[(13)]);
var state_3989__$1 = state_3989;
var statearr_4015_4040 = state_3989__$1;
(statearr_4015_4040[(2)] = inst_3955);

(statearr_4015_4040[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__2041__auto__ = null;
var cljs$core$async$state_machine__2041__auto____0 = (function (){
var statearr_4016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4016[(0)] = cljs$core$async$state_machine__2041__auto__);

(statearr_4016[(1)] = (1));

return statearr_4016;
});
var cljs$core$async$state_machine__2041__auto____1 = (function (state_3989){
while(true){
var ret_value__2042__auto__ = (function (){try{while(true){
var result__2043__auto__ = switch__2040__auto__.call(null,state_3989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2043__auto__;
}
break;
}
}catch (e4017){var ex__2044__auto__ = e4017;
var statearr_4018_4041 = state_3989;
(statearr_4018_4041[(2)] = ex__2044__auto__);


if(cljs.core.seq.call(null,(state_3989[(4)]))){
var statearr_4019_4042 = state_3989;
(statearr_4019_4042[(1)] = cljs.core.first.call(null,(state_3989[(4)])));

} else {
throw ex__2044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4043 = state_3989;
state_3989 = G__4043;
continue;
} else {
return ret_value__2042__auto__;
}
break;
}
});
cljs$core$async$state_machine__2041__auto__ = function(state_3989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2041__auto____1.call(this,state_3989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2041__auto____0;
cljs$core$async$state_machine__2041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2041__auto____1;
return cljs$core$async$state_machine__2041__auto__;
})()
})();
var state__2116__auto__ = (function (){var statearr_4020 = f__2115__auto__.call(null);
(statearr_4020[(6)] = c__2114__auto___4022);

return statearr_4020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2116__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
