// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232 = (function (val,meta233){
this.val = val;
this.meta233 = meta233;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_234,meta233__$1){
var self__ = this;
var _234__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232(self__.val,meta233__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_234){
var self__ = this;
var _234__$1 = this;
return self__.meta233;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta233","meta233",1674504489,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels232");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels232");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels232.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels232 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels232(val__$1,meta233){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232(val__$1,meta233));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels232(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_235 = (function (this$){
var x__1817__auto__ = (((this$ == null))?null:this$);
var m__1818__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__1817__auto__)]);
if((!((m__1818__auto__ == null)))){
return m__1818__auto__.call(null,this$);
} else {
var m__1816__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__1816__auto__ == null)))){
return m__1816__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_235.call(null,this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_247 = self__.puts.pop();
if((putter_247 == null)){
} else {
var put_handler_248 = putter_247.handler;
var val_249 = putter_247.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_248)){
var put_cb_250 = cljs.core.async.impl.protocols.commit.call(null,put_handler_248);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_250,put_handler_248,val_249,putter_247,this$__$1){
return (function (){
return put_cb_250.call(null,true);
});})(put_cb_250,put_handler_248,val_249,putter_247,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,(!(closed__$1)));
} else {
if(closed__$1){
cljs.core.async.impl.protocols.commit.call(null,handler);

return cljs.core.async.impl.channels.box.call(null,false);
} else {
if(cljs.core.truth_((function (){var and__1467__auto__ = self__.buf;
if(cljs.core.truth_(and__1467__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__1467__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__251 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__251;
continue;
} else {
var G__252 = takers;
takers = G__252;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__236_253 = cljs.core.seq.call(null,take_cbs);
var chunk__237_254 = null;
var count__238_255 = (0);
var i__239_256 = (0);
while(true){
if((i__239_256 < count__238_255)){
var f_257 = cljs.core._nth.call(null,chunk__237_254,i__239_256);
cljs.core.async.impl.dispatch.run.call(null,f_257);


var G__258 = seq__236_253;
var G__259 = chunk__237_254;
var G__260 = count__238_255;
var G__261 = (i__239_256 + (1));
seq__236_253 = G__258;
chunk__237_254 = G__259;
count__238_255 = G__260;
i__239_256 = G__261;
continue;
} else {
var temp__5720__auto___262 = cljs.core.seq.call(null,seq__236_253);
if(temp__5720__auto___262){
var seq__236_263__$1 = temp__5720__auto___262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__236_263__$1)){
var c__1992__auto___264 = cljs.core.chunk_first.call(null,seq__236_263__$1);
var G__265 = cljs.core.chunk_rest.call(null,seq__236_263__$1);
var G__266 = c__1992__auto___264;
var G__267 = cljs.core.count.call(null,c__1992__auto___264);
var G__268 = (0);
seq__236_253 = G__265;
chunk__237_254 = G__266;
count__238_255 = G__267;
i__239_256 = G__268;
continue;
} else {
var f_269 = cljs.core.first.call(null,seq__236_263__$1);
cljs.core.async.impl.dispatch.run.call(null,f_269);


var G__270 = cljs.core.next.call(null,seq__236_263__$1);
var G__271 = null;
var G__272 = (0);
var G__273 = (0);
seq__236_253 = G__270;
chunk__237_254 = G__271;
count__238_255 = G__272;
i__239_256 = G__273;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return take_cb.call(null,val);
}));

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count.call(null,self__.buf) > (0))))){
var temp__5718__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5718__auto__)){
var take_cb = temp__5718__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__240 = ((((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__1467__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__1467__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__1467__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if(((cljs.core.not.call(null,done_QMARK_)) && (((cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0))))))){
var G__274 = cbs__$1;
cbs = G__274;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__240,(0),null);
var cbs = cljs.core.nth.call(null,vec__240,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__243_275 = cljs.core.seq.call(null,cbs);
var chunk__244_276 = null;
var count__245_277 = (0);
var i__246_278 = (0);
while(true){
if((i__246_278 < count__245_277)){
var cb_279 = cljs.core._nth.call(null,chunk__244_276,i__246_278);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__243_275,chunk__244_276,count__245_277,i__246_278,cb_279,val,vec__240,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_279.call(null,true);
});})(seq__243_275,chunk__244_276,count__245_277,i__246_278,cb_279,val,vec__240,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__280 = seq__243_275;
var G__281 = chunk__244_276;
var G__282 = count__245_277;
var G__283 = (i__246_278 + (1));
seq__243_275 = G__280;
chunk__244_276 = G__281;
count__245_277 = G__282;
i__246_278 = G__283;
continue;
} else {
var temp__5720__auto___284 = cljs.core.seq.call(null,seq__243_275);
if(temp__5720__auto___284){
var seq__243_285__$1 = temp__5720__auto___284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__243_285__$1)){
var c__1992__auto___286 = cljs.core.chunk_first.call(null,seq__243_285__$1);
var G__287 = cljs.core.chunk_rest.call(null,seq__243_285__$1);
var G__288 = c__1992__auto___286;
var G__289 = cljs.core.count.call(null,c__1992__auto___286);
var G__290 = (0);
seq__243_275 = G__287;
chunk__244_276 = G__288;
count__245_277 = G__289;
i__246_278 = G__290;
continue;
} else {
var cb_291 = cljs.core.first.call(null,seq__243_285__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__243_275,chunk__244_276,count__245_277,i__246_278,cb_291,seq__243_285__$1,temp__5720__auto___284,val,vec__240,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return cb_291.call(null,true);
});})(seq__243_275,chunk__244_276,count__245_277,i__246_278,cb_291,seq__243_285__$1,temp__5720__auto___284,val,vec__240,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__292 = cljs.core.next.call(null,seq__243_285__$1);
var G__293 = null;
var G__294 = (0);
var G__295 = (0);
seq__243_275 = G__292;
chunk__244_276 = G__293;
count__245_277 = G__294;
i__246_278 = G__295;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,(function (){
return put_cb.call(null,true);
}));

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__1467__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__1467__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__1467__auto__;
}
})())){
var has_val = (function (){var and__1467__auto__ = self__.buf;
if(cljs.core.truth_(and__1467__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__1467__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__1467__auto__ = self__.buf;
if(cljs.core.truth_(and__1467__auto__)){
return (self__.puts.length === (0));
} else {
return and__1467__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_296 = self__.takes.pop();
if((taker_296 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_296)){
var take_cb_297 = cljs.core.async.impl.protocols.commit.call(null,taker_296);
var val_298 = (cljs.core.truth_((function (){var and__1467__auto__ = self__.buf;
if(cljs.core.truth_(and__1467__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__1467__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_297,val_298,taker_296,this$__$1){
return (function (){
return take_cb_297.call(null,val_298);
});})(take_cb_297,val_298,taker_296,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__1754__auto__,writer__1755__auto__,opt__1756__auto__){
return cljs.core._write.call(null,writer__1755__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__1469__auto__ = exh;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__300 = arguments.length;
switch (G__300) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__304 = null;
var G__304__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e301){var t = e301;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__304__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e302){var t = e302;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__304 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__304__1.call(this,buf__$1);
case 2:
return G__304__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__304.cljs$core$IFn$_invoke$arity$1 = G__304__1;
G__304.cljs$core$IFn$_invoke$arity$2 = G__304__2;
return G__304;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=channels.js.map
