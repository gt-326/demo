// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('life.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('life.util');
life.core.ROWS = (30);
life.core.COLS = (30);
life.core.RE_PRODUCTION_TIME = (200);
life.core.STATES = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dead","born","alive","add"], null);
life.core.STATE_DEAD = (0);
life.core.STATE_BORN = (1);
life.core.STATE_ALIVE = (2);
life.core.STATE_ADD = (3);
life.core.SEP_CHAR = "-";
life.core.getHtmlElementById = (function life$core$getHtmlElementById(id){
return document.getElementById(id);
});
life.core.getHtmlElementsByClassName = (function life$core$getHtmlElementsByClassName(name){
return document.getElementsByClassName(name);
});
life.core.createHtmlElementAsChild = (function life$core$createHtmlElementAsChild(obj,type){
return obj.appendChild(document.createElement(type));
});
life.core.isAttributeClassDead_QMARK_ = (function life$core$isAttributeClassDead_QMARK_(obj){
return cljs.core._EQ_.call(null,obj.getAttribute("class"),cljs.core.get.call(null,life.core.STATES,life.core.STATE_DEAD));
});
life.core.setAttribute = (function life$core$setAttribute(obj,param,val){
return obj.setAttribute(param,val);
});
life.core.setObjectAttributeClass = (function life$core$setObjectAttributeClass(obj,idx){
return life.core.setAttribute.call(null,obj,"class",cljs.core.get.call(null,life.core.STATES,idx));
});
life.core.setCellAttributeClass = (function life$core$setCellAttributeClass(i,j,idx){
return life.core.setObjectAttributeClass.call(null,life.core.getHtmlElementById.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),life.core.SEP_CHAR,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),idx);
});
life.core.cntNeighbors = (function life$core$cntNeighbors(g,row,col){
var neighbors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null);
return cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.zero_QMARK_,(function (){var iter__1947__auto__ = (function life$core$cntNeighbors_$_iter__221(s__222){
return (new cljs.core.LazySeq(null,(function (){
var s__222__$1 = s__222;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__222__$1);
if(temp__5720__auto__){
var s__222__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__222__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__222__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__224 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__223 = (0);
while(true){
if((i__223 < size__1946__auto__)){
var vec__225 = cljs.core._nth.call(null,c__1945__auto__,i__223);
var i = cljs.core.nth.call(null,vec__225,(0),null);
var j = cljs.core.nth.call(null,vec__225,(1),null);
var h = (row + i);
var w = (col + j);
cljs.core.chunk_append.call(null,b__224,((((((((0) < h)) && ((h < life.core.ROWS)))) && (((((0) < w)) && ((w < life.core.COLS))))))?cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null)):life.core.STATE_DEAD));

var G__231 = (i__223 + (1));
i__223 = G__231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__224),life$core$cntNeighbors_$_iter__221.call(null,cljs.core.chunk_rest.call(null,s__222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__224),null);
}
} else {
var vec__228 = cljs.core.first.call(null,s__222__$2);
var i = cljs.core.nth.call(null,vec__228,(0),null);
var j = cljs.core.nth.call(null,vec__228,(1),null);
var h = (row + i);
var w = (col + j);
return cljs.core.cons.call(null,((((((((0) < h)) && ((h < life.core.ROWS)))) && (((((0) < w)) && ((w < life.core.COLS))))))?cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,w], null)):life.core.STATE_DEAD),life$core$cntNeighbors_$_iter__221.call(null,cljs.core.rest.call(null,s__222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,neighbors);
})()));
});
life.core.updateView = (function life$core$updateView(g){
return console.log(["updateView",":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$updateView_$_iter__244(s__245){
return (new cljs.core.LazySeq(null,(function (){
var s__245__$1 = s__245;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__245__$1);
if(temp__5720__auto__){
var s__245__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__245__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__245__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__247 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__246 = (0);
while(true){
if((i__246 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__246);
cljs.core.chunk_append.call(null,b__247,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__246,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__){
return (function life$core$updateView_$_iter__244_$_iter__248(s__249){
return (new cljs.core.LazySeq(null,((function (i__246,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__){
return (function (){
var s__249__$1 = s__249;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__249__$1);
if(temp__5720__auto____$1){
var s__249__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__249__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__249__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__251 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__250 = (0);
while(true){
if((i__250 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__250);
cljs.core.chunk_append.call(null,b__251,((function (i__250,i__246,j,c__1945__auto____$1,size__1946__auto____$1,b__251,s__249__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
life.core.setCellAttributeClass.call(null,i__$1,j__$1,stat);

return stat;
});})(i__250,i__246,j,c__1945__auto____$1,size__1946__auto____$1,b__251,s__249__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__))
.call(null,i,j));

var G__256 = (i__250 + (1));
i__250 = G__256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__251),life$core$updateView_$_iter__244_$_iter__248.call(null,cljs.core.chunk_rest.call(null,s__249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__251),null);
}
} else {
var j = cljs.core.first.call(null,s__249__$2);
return cljs.core.cons.call(null,((function (i__246,j,s__249__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
life.core.setCellAttributeClass.call(null,i__$1,j__$1,stat);

return stat;
});})(i__246,j,s__249__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__))
.call(null,i,j),life$core$updateView_$_iter__244_$_iter__248.call(null,cljs.core.rest.call(null,s__249__$2)));
}
} else {
return null;
}
break;
}
});})(i__246,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__))
,null,null));
});})(i__246,i,c__1945__auto__,size__1946__auto__,b__247,s__245__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__257 = (i__246 + (1));
i__246 = G__257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__247),life$core$updateView_$_iter__244.call(null,cljs.core.chunk_rest.call(null,s__245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__247),null);
}
} else {
var i = cljs.core.first.call(null,s__245__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__245__$2,temp__5720__auto__){
return (function life$core$updateView_$_iter__244_$_iter__252(s__253){
return (new cljs.core.LazySeq(null,(function (){
var s__253__$1 = s__253;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__253__$1);
if(temp__5720__auto____$1){
var s__253__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__253__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__253__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__255 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__254 = (0);
while(true){
if((i__254 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__254);
cljs.core.chunk_append.call(null,b__255,((function (i__254,j,c__1945__auto__,size__1946__auto__,b__255,s__253__$2,temp__5720__auto____$1,i,s__245__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
life.core.setCellAttributeClass.call(null,i__$1,j__$1,stat);

return stat;
});})(i__254,j,c__1945__auto__,size__1946__auto__,b__255,s__253__$2,temp__5720__auto____$1,i,s__245__$2,temp__5720__auto__))
.call(null,i,j));

var G__258 = (i__254 + (1));
i__254 = G__258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__255),life$core$updateView_$_iter__244_$_iter__252.call(null,cljs.core.chunk_rest.call(null,s__253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__255),null);
}
} else {
var j = cljs.core.first.call(null,s__253__$2);
return cljs.core.cons.call(null,((function (j,s__253__$2,temp__5720__auto____$1,i,s__245__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
life.core.setCellAttributeClass.call(null,i__$1,j__$1,stat);

return stat;
});})(j,s__253__$2,temp__5720__auto____$1,i,s__245__$2,temp__5720__auto__))
.call(null,i,j),life$core$updateView_$_iter__244_$_iter__252.call(null,cljs.core.rest.call(null,s__253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__245__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$updateView_$_iter__244.call(null,cljs.core.rest.call(null,s__245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})()))].join(''));
});
life.core.computeNextGen = (function life$core$computeNextGen(g){
cljs.core.reset_BANG_.call(null,g,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$computeNextGen_$_iter__259(s__260){
return (new cljs.core.LazySeq(null,(function (){
var s__260__$1 = s__260;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__260__$1);
if(temp__5720__auto__){
var s__260__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__260__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__260__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__262 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__261 = (0);
while(true){
if((i__261 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__261);
cljs.core.chunk_append.call(null,b__262,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__261,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__){
return (function life$core$computeNextGen_$_iter__259_$_iter__263(s__264){
return (new cljs.core.LazySeq(null,((function (i__261,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__){
return (function (){
var s__264__$1 = s__264;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__264__$1);
if(temp__5720__auto____$1){
var s__264__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__264__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__264__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__266 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__265 = (0);
while(true){
if((i__265 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__265);
cljs.core.chunk_append.call(null,b__266,((function (i__265,i__261,j,c__1945__auto____$1,size__1946__auto____$1,b__266,s__264__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var G__267 = life.core.cntNeighbors.call(null,g,i__$1,j__$1);
switch (G__267) {
case (2):
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null)),life.core.STATE_DEAD)){
return life.core.STATE_DEAD;
} else {
return life.core.STATE_ALIVE;
}

break;
case (3):
return life.core.STATE_BORN;

break;
default:
return life.core.STATE_DEAD;

}
});})(i__265,i__261,j,c__1945__auto____$1,size__1946__auto____$1,b__266,s__264__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__))
.call(null,i,j));

var G__276 = (i__265 + (1));
i__265 = G__276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266),life$core$computeNextGen_$_iter__259_$_iter__263.call(null,cljs.core.chunk_rest.call(null,s__264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__266),null);
}
} else {
var j = cljs.core.first.call(null,s__264__$2);
return cljs.core.cons.call(null,((function (i__261,j,s__264__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var G__268 = life.core.cntNeighbors.call(null,g,i__$1,j__$1);
switch (G__268) {
case (2):
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null)),life.core.STATE_DEAD)){
return life.core.STATE_DEAD;
} else {
return life.core.STATE_ALIVE;
}

break;
case (3):
return life.core.STATE_BORN;

break;
default:
return life.core.STATE_DEAD;

}
});})(i__261,j,s__264__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__))
.call(null,i,j),life$core$computeNextGen_$_iter__259_$_iter__263.call(null,cljs.core.rest.call(null,s__264__$2)));
}
} else {
return null;
}
break;
}
});})(i__261,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__))
,null,null));
});})(i__261,i,c__1945__auto__,size__1946__auto__,b__262,s__260__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__278 = (i__261 + (1));
i__261 = G__278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262),life$core$computeNextGen_$_iter__259.call(null,cljs.core.chunk_rest.call(null,s__260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__262),null);
}
} else {
var i = cljs.core.first.call(null,s__260__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__260__$2,temp__5720__auto__){
return (function life$core$computeNextGen_$_iter__259_$_iter__269(s__270){
return (new cljs.core.LazySeq(null,(function (){
var s__270__$1 = s__270;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__270__$1);
if(temp__5720__auto____$1){
var s__270__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__270__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__270__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__272 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__271 = (0);
while(true){
if((i__271 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__271);
cljs.core.chunk_append.call(null,b__272,((function (i__271,j,c__1945__auto__,size__1946__auto__,b__272,s__270__$2,temp__5720__auto____$1,i,s__260__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var G__273 = life.core.cntNeighbors.call(null,g,i__$1,j__$1);
switch (G__273) {
case (2):
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null)),life.core.STATE_DEAD)){
return life.core.STATE_DEAD;
} else {
return life.core.STATE_ALIVE;
}

break;
case (3):
return life.core.STATE_BORN;

break;
default:
return life.core.STATE_DEAD;

}
});})(i__271,j,c__1945__auto__,size__1946__auto__,b__272,s__270__$2,temp__5720__auto____$1,i,s__260__$2,temp__5720__auto__))
.call(null,i,j));

var G__280 = (i__271 + (1));
i__271 = G__280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__272),life$core$computeNextGen_$_iter__259_$_iter__269.call(null,cljs.core.chunk_rest.call(null,s__270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__272),null);
}
} else {
var j = cljs.core.first.call(null,s__270__$2);
return cljs.core.cons.call(null,((function (j,s__270__$2,temp__5720__auto____$1,i,s__260__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var G__274 = life.core.cntNeighbors.call(null,g,i__$1,j__$1);
switch (G__274) {
case (2):
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null)),life.core.STATE_DEAD)){
return life.core.STATE_DEAD;
} else {
return life.core.STATE_ALIVE;
}

break;
case (3):
return life.core.STATE_BORN;

break;
default:
return life.core.STATE_DEAD;

}
});})(j,s__270__$2,temp__5720__auto____$1,i,s__260__$2,temp__5720__auto__))
.call(null,i,j),life$core$computeNextGen_$_iter__259_$_iter__269.call(null,cljs.core.rest.call(null,s__270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__260__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$computeNextGen_$_iter__259.call(null,cljs.core.rest.call(null,s__260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})()));

return life.core.updateView.call(null,g);
});
life.core.play = (function life$core$play(playing,timer,g){
if(cljs.core.truth_(cljs.core.deref.call(null,playing))){
life.core.computeNextGen.call(null,g);

return cljs.core.reset_BANG_.call(null,timer,setTimeout((function (){
return life.core.play.call(null,playing,timer,g);
}),life.core.RE_PRODUCTION_TIME));
} else {
return null;
}
});
life.core.startButtonHandler = (function life$core$startButtonHandler(playing,timer,g,obj){
var flg = cljs.core.deref.call(null,playing);
console.log((cljs.core.truth_(flg)?"Pause the game":"Continue the game"));

cljs.core.reset_BANG_.call(null,playing,cljs.core.not.call(null,flg));

(obj.innerHTML = (cljs.core.truth_(flg)?"Restart":"Stop"));

if(cljs.core.truth_(flg)){
return window.clearTimeout(cljs.core.deref.call(null,timer));
} else {
return life.core.play.call(null,playing,timer,g);
}
});
life.core.clearButtonHandler = (function life$core$clearButtonHandler(playing,timer,g,init){
console.log("Clear the game: stop playing, clear the grid");

cljs.core.reset_BANG_.call(null,playing,false);

(life.core.getHtmlElementById.call(null,"start").innerHTML = "Start");

window.clearTimeout(cljs.core.deref.call(null,timer));

cljs.core.reset_BANG_.call(null,g,init);

return console.log(["grid_dead",":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$clearButtonHandler_$_iter__294(s__295){
return (new cljs.core.LazySeq(null,(function (){
var s__295__$1 = s__295;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__295__$1);
if(temp__5720__auto__){
var s__295__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__295__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__295__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__297 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__296 = (0);
while(true){
if((i__296 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__296);
cljs.core.chunk_append.call(null,b__297,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__296,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__){
return (function life$core$clearButtonHandler_$_iter__294_$_iter__298(s__299){
return (new cljs.core.LazySeq(null,((function (i__296,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__){
return (function (){
var s__299__$1 = s__299;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__299__$1);
if(temp__5720__auto____$1){
var s__299__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__299__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__299__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__301 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__300 = (0);
while(true){
if((i__300 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__300);
cljs.core.chunk_append.call(null,b__301,((function (i__300,i__296,j,c__1945__auto____$1,size__1946__auto____$1,b__301,s__299__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_DEAD);

return life.core.STATE_DEAD;
});})(i__300,i__296,j,c__1945__auto____$1,size__1946__auto____$1,b__301,s__299__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__))
.call(null,i,j));

var G__306 = (i__300 + (1));
i__300 = G__306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__301),life$core$clearButtonHandler_$_iter__294_$_iter__298.call(null,cljs.core.chunk_rest.call(null,s__299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__301),null);
}
} else {
var j = cljs.core.first.call(null,s__299__$2);
return cljs.core.cons.call(null,((function (i__296,j,s__299__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_DEAD);

return life.core.STATE_DEAD;
});})(i__296,j,s__299__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__))
.call(null,i,j),life$core$clearButtonHandler_$_iter__294_$_iter__298.call(null,cljs.core.rest.call(null,s__299__$2)));
}
} else {
return null;
}
break;
}
});})(i__296,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__))
,null,null));
});})(i__296,i,c__1945__auto__,size__1946__auto__,b__297,s__295__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__307 = (i__296 + (1));
i__296 = G__307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__297),life$core$clearButtonHandler_$_iter__294.call(null,cljs.core.chunk_rest.call(null,s__295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__297),null);
}
} else {
var i = cljs.core.first.call(null,s__295__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__295__$2,temp__5720__auto__){
return (function life$core$clearButtonHandler_$_iter__294_$_iter__302(s__303){
return (new cljs.core.LazySeq(null,(function (){
var s__303__$1 = s__303;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__303__$1);
if(temp__5720__auto____$1){
var s__303__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__303__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__303__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__305 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__304 = (0);
while(true){
if((i__304 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__304);
cljs.core.chunk_append.call(null,b__305,((function (i__304,j,c__1945__auto__,size__1946__auto__,b__305,s__303__$2,temp__5720__auto____$1,i,s__295__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_DEAD);

return life.core.STATE_DEAD;
});})(i__304,j,c__1945__auto__,size__1946__auto__,b__305,s__303__$2,temp__5720__auto____$1,i,s__295__$2,temp__5720__auto__))
.call(null,i,j));

var G__308 = (i__304 + (1));
i__304 = G__308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__305),life$core$clearButtonHandler_$_iter__294_$_iter__302.call(null,cljs.core.chunk_rest.call(null,s__303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__305),null);
}
} else {
var j = cljs.core.first.call(null,s__303__$2);
return cljs.core.cons.call(null,((function (j,s__303__$2,temp__5720__auto____$1,i,s__295__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_DEAD);

return life.core.STATE_DEAD;
});})(j,s__303__$2,temp__5720__auto____$1,i,s__295__$2,temp__5720__auto__))
.call(null,i,j),life$core$clearButtonHandler_$_iter__294_$_iter__302.call(null,cljs.core.rest.call(null,s__303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__295__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$clearButtonHandler_$_iter__294.call(null,cljs.core.rest.call(null,s__295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})()))].join(''));
});
life.core.randomButtonHandler = (function life$core$randomButtonHandler(playing,timer,g,init){
if(cljs.core.not.call(null,cljs.core.deref.call(null,playing))){
life.core.clearButtonHandler.call(null,playing,timer,g,init);

cljs.core.reset_BANG_.call(null,g,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$randomButtonHandler_$_iter__309(s__310){
return (new cljs.core.LazySeq(null,(function (){
var s__310__$1 = s__310;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__310__$1);
if(temp__5720__auto__){
var s__310__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__310__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__310__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__312 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__311 = (0);
while(true){
if((i__311 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__311);
cljs.core.chunk_append.call(null,b__312,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__311,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__){
return (function life$core$randomButtonHandler_$_iter__309_$_iter__313(s__314){
return (new cljs.core.LazySeq(null,((function (i__311,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__){
return (function (){
var s__314__$1 = s__314;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__314__$1);
if(temp__5720__auto____$1){
var s__314__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__314__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__314__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__316 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__315 = (0);
while(true){
if((i__315 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__315);
cljs.core.chunk_append.call(null,b__316,((function (i__315,i__311,j,c__1945__auto____$1,size__1946__auto____$1,b__316,s__314__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__){
return (function (){
return Math.round(Math.random());
});})(i__315,i__311,j,c__1945__auto____$1,size__1946__auto____$1,b__316,s__314__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__))
.call(null,i,j));

var G__345 = (i__315 + (1));
i__315 = G__345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__316),life$core$randomButtonHandler_$_iter__309_$_iter__313.call(null,cljs.core.chunk_rest.call(null,s__314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__316),null);
}
} else {
var j = cljs.core.first.call(null,s__314__$2);
return cljs.core.cons.call(null,((function (i__311,j,s__314__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__){
return (function (){
return Math.round(Math.random());
});})(i__311,j,s__314__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__))
.call(null,i,j),life$core$randomButtonHandler_$_iter__309_$_iter__313.call(null,cljs.core.rest.call(null,s__314__$2)));
}
} else {
return null;
}
break;
}
});})(i__311,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__))
,null,null));
});})(i__311,i,c__1945__auto__,size__1946__auto__,b__312,s__310__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__346 = (i__311 + (1));
i__311 = G__346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__312),life$core$randomButtonHandler_$_iter__309.call(null,cljs.core.chunk_rest.call(null,s__310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__312),null);
}
} else {
var i = cljs.core.first.call(null,s__310__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__310__$2,temp__5720__auto__){
return (function life$core$randomButtonHandler_$_iter__309_$_iter__317(s__318){
return (new cljs.core.LazySeq(null,(function (){
var s__318__$1 = s__318;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__318__$1);
if(temp__5720__auto____$1){
var s__318__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__318__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__318__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__320 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__319 = (0);
while(true){
if((i__319 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__319);
cljs.core.chunk_append.call(null,b__320,((function (i__319,j,c__1945__auto__,size__1946__auto__,b__320,s__318__$2,temp__5720__auto____$1,i,s__310__$2,temp__5720__auto__){
return (function (){
return Math.round(Math.random());
});})(i__319,j,c__1945__auto__,size__1946__auto__,b__320,s__318__$2,temp__5720__auto____$1,i,s__310__$2,temp__5720__auto__))
.call(null,i,j));

var G__347 = (i__319 + (1));
i__319 = G__347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320),life$core$randomButtonHandler_$_iter__309_$_iter__317.call(null,cljs.core.chunk_rest.call(null,s__318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__320),null);
}
} else {
var j = cljs.core.first.call(null,s__318__$2);
return cljs.core.cons.call(null,((function (j,s__318__$2,temp__5720__auto____$1,i,s__310__$2,temp__5720__auto__){
return (function (){
return Math.round(Math.random());
});})(j,s__318__$2,temp__5720__auto____$1,i,s__310__$2,temp__5720__auto__))
.call(null,i,j),life$core$randomButtonHandler_$_iter__309_$_iter__317.call(null,cljs.core.rest.call(null,s__318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__310__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$randomButtonHandler_$_iter__309.call(null,cljs.core.rest.call(null,s__310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})()));

return console.log(["state",":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$randomButtonHandler_$_iter__333(s__334){
return (new cljs.core.LazySeq(null,(function (){
var s__334__$1 = s__334;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__334__$1);
if(temp__5720__auto__){
var s__334__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__334__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__334__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__336 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__335 = (0);
while(true){
if((i__335 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__335);
cljs.core.chunk_append.call(null,b__336,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__335,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__){
return (function life$core$randomButtonHandler_$_iter__333_$_iter__337(s__338){
return (new cljs.core.LazySeq(null,((function (i__335,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__){
return (function (){
var s__338__$1 = s__338;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__338__$1);
if(temp__5720__auto____$1){
var s__338__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__338__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__338__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__340 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__339 = (0);
while(true){
if((i__339 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__339);
cljs.core.chunk_append.call(null,b__340,((function (i__339,i__335,j,c__1945__auto____$1,size__1946__auto____$1,b__340,s__338__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
if(cljs.core._EQ_.call(null,stat,life.core.STATE_BORN)){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_ALIVE);
} else {
}

return stat;
});})(i__339,i__335,j,c__1945__auto____$1,size__1946__auto____$1,b__340,s__338__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__))
.call(null,i,j));

var G__348 = (i__339 + (1));
i__339 = G__348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__340),life$core$randomButtonHandler_$_iter__333_$_iter__337.call(null,cljs.core.chunk_rest.call(null,s__338__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__340),null);
}
} else {
var j = cljs.core.first.call(null,s__338__$2);
return cljs.core.cons.call(null,((function (i__335,j,s__338__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
if(cljs.core._EQ_.call(null,stat,life.core.STATE_BORN)){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_ALIVE);
} else {
}

return stat;
});})(i__335,j,s__338__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__))
.call(null,i,j),life$core$randomButtonHandler_$_iter__333_$_iter__337.call(null,cljs.core.rest.call(null,s__338__$2)));
}
} else {
return null;
}
break;
}
});})(i__335,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__))
,null,null));
});})(i__335,i,c__1945__auto__,size__1946__auto__,b__336,s__334__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__349 = (i__335 + (1));
i__335 = G__349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336),life$core$randomButtonHandler_$_iter__333.call(null,cljs.core.chunk_rest.call(null,s__334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__336),null);
}
} else {
var i = cljs.core.first.call(null,s__334__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__334__$2,temp__5720__auto__){
return (function life$core$randomButtonHandler_$_iter__333_$_iter__341(s__342){
return (new cljs.core.LazySeq(null,(function (){
var s__342__$1 = s__342;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__342__$1);
if(temp__5720__auto____$1){
var s__342__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__342__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__342__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__344 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__343 = (0);
while(true){
if((i__343 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__343);
cljs.core.chunk_append.call(null,b__344,((function (i__343,j,c__1945__auto__,size__1946__auto__,b__344,s__342__$2,temp__5720__auto____$1,i,s__334__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
if(cljs.core._EQ_.call(null,stat,life.core.STATE_BORN)){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_ALIVE);
} else {
}

return stat;
});})(i__343,j,c__1945__auto__,size__1946__auto__,b__344,s__342__$2,temp__5720__auto____$1,i,s__334__$2,temp__5720__auto__))
.call(null,i,j));

var G__350 = (i__343 + (1));
i__343 = G__350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344),life$core$randomButtonHandler_$_iter__333_$_iter__341.call(null,cljs.core.chunk_rest.call(null,s__342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__344),null);
}
} else {
var j = cljs.core.first.call(null,s__342__$2);
return cljs.core.cons.call(null,((function (j,s__342__$2,temp__5720__auto____$1,i,s__334__$2,temp__5720__auto__){
return (function (i__$1,j__$1){
var stat = cljs.core.get_in.call(null,cljs.core.deref.call(null,g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null));
if(cljs.core._EQ_.call(null,stat,life.core.STATE_BORN)){
life.core.setCellAttributeClass.call(null,i__$1,j__$1,life.core.STATE_ALIVE);
} else {
}

return stat;
});})(j,s__342__$2,temp__5720__auto____$1,i,s__334__$2,temp__5720__auto__))
.call(null,i,j),life$core$randomButtonHandler_$_iter__333_$_iter__341.call(null,cljs.core.rest.call(null,s__342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__334__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$randomButtonHandler_$_iter__333.call(null,cljs.core.rest.call(null,s__334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})()))].join(''));
} else {
return null;
}
});
life.core.cellClickHandler = (function life$core$cellClickHandler(idx,g,obj){
var flg = life.core.isAttributeClassDead_QMARK_.call(null,obj);
cljs.core.reset_BANG_.call(null,g,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,g),idx,((flg)?life.core.STATE_ALIVE:life.core.STATE_DEAD)));

return life.core.setObjectAttributeClass.call(null,obj,((flg)?life.core.STATE_ADD:life.core.STATE_DEAD));
});
life.core.createGc = (function life$core$createGc(g){
var gc = life.core.getHtmlElementById.call(null,"gridContainer");
if(cljs.core.truth_(gc)){
return console.log(["html_tbl",":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var tbl__175__auto__ = life.core.createHtmlElementAsChild.call(null,gc,"table");
return cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$createGc_$_iter__363(s__364){
return (new cljs.core.LazySeq(null,(function (){
var s__364__$1 = s__364;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__364__$1);
if(temp__5720__auto__){
var s__364__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__364__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__364__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__366 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__365 = (0);
while(true){
if((i__365 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__365);
var tr = life.core.createHtmlElementAsChild.call(null,tbl__175__auto__,"tr");
cljs.core.chunk_append.call(null,b__366,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__365,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function life$core$createGc_$_iter__363_$_iter__367(s__368){
return (new cljs.core.LazySeq(null,((function (i__365,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (){
var s__368__$1 = s__368;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__368__$1);
if(temp__5720__auto____$1){
var s__368__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__368__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__368__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__370 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__369 = (0);
while(true){
if((i__369 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__369);
var td = life.core.createHtmlElementAsChild.call(null,tr,"td");
cljs.core.chunk_append.call(null,b__370,((function (i__369,i__365,td,j,c__1945__auto____$1,size__1946__auto____$1,b__370,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (i__$1,j__$1,obj){
life.core.setAttribute.call(null,obj,"id",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1),life.core.SEP_CHAR,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j__$1)].join(''));

return (obj.onclick = ((function (i__369,i__365,td,j,c__1945__auto____$1,size__1946__auto____$1,b__370,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (){
return life.core.cellClickHandler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),g,obj);
});})(i__369,i__365,td,j,c__1945__auto____$1,size__1946__auto____$1,b__370,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
);
});})(i__369,i__365,td,j,c__1945__auto____$1,size__1946__auto____$1,b__370,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
.call(null,i,j,td));

var G__375 = (i__369 + (1));
i__369 = G__375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370),life$core$createGc_$_iter__363_$_iter__367.call(null,cljs.core.chunk_rest.call(null,s__368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__370),null);
}
} else {
var j = cljs.core.first.call(null,s__368__$2);
var td = life.core.createHtmlElementAsChild.call(null,tr,"td");
return cljs.core.cons.call(null,((function (i__365,td,j,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (i__$1,j__$1,obj){
life.core.setAttribute.call(null,obj,"id",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1),life.core.SEP_CHAR,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j__$1)].join(''));

return (obj.onclick = ((function (i__365,td,j,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (){
return life.core.cellClickHandler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),g,obj);
});})(i__365,td,j,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
);
});})(i__365,td,j,s__368__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
.call(null,i,j,td),life$core$createGc_$_iter__363_$_iter__367.call(null,cljs.core.rest.call(null,s__368__$2)));
}
} else {
return null;
}
break;
}
});})(i__365,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
,null,null));
});})(i__365,tr,i,c__1945__auto__,size__1946__auto__,b__366,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__376 = (i__365 + (1));
i__365 = G__376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__366),life$core$createGc_$_iter__363.call(null,cljs.core.chunk_rest.call(null,s__364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__366),null);
}
} else {
var i = cljs.core.first.call(null,s__364__$2);
var tr = life.core.createHtmlElementAsChild.call(null,tbl__175__auto__,"tr");
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function life$core$createGc_$_iter__363_$_iter__371(s__372){
return (new cljs.core.LazySeq(null,(function (){
var s__372__$1 = s__372;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__372__$1);
if(temp__5720__auto____$1){
var s__372__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__372__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__372__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__374 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__373 = (0);
while(true){
if((i__373 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__373);
var td = life.core.createHtmlElementAsChild.call(null,tr,"td");
cljs.core.chunk_append.call(null,b__374,((function (i__373,td,j,c__1945__auto__,size__1946__auto__,b__374,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (i__$1,j__$1,obj){
life.core.setAttribute.call(null,obj,"id",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1),life.core.SEP_CHAR,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j__$1)].join(''));

return (obj.onclick = ((function (i__373,td,j,c__1945__auto__,size__1946__auto__,b__374,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (){
return life.core.cellClickHandler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),g,obj);
});})(i__373,td,j,c__1945__auto__,size__1946__auto__,b__374,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
);
});})(i__373,td,j,c__1945__auto__,size__1946__auto__,b__374,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
.call(null,i,j,td));

var G__377 = (i__373 + (1));
i__373 = G__377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__374),life$core$createGc_$_iter__363_$_iter__371.call(null,cljs.core.chunk_rest.call(null,s__372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__374),null);
}
} else {
var j = cljs.core.first.call(null,s__372__$2);
var td = life.core.createHtmlElementAsChild.call(null,tr,"td");
return cljs.core.cons.call(null,((function (td,j,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc){
return (function (i__$1,j__$1,obj){
life.core.setAttribute.call(null,obj,"id",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1),life.core.SEP_CHAR,cljs.core.str.cljs$core$IFn$_invoke$arity$1(j__$1)].join(''));

return (obj.onclick = (function (){
return life.core.cellClickHandler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i__$1,j__$1], null),g,obj);
}));
});})(td,j,s__372__$2,temp__5720__auto____$1,tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
.call(null,i,j,td),life$core$createGc_$_iter__363_$_iter__371.call(null,cljs.core.rest.call(null,s__372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(tr,i,s__364__$2,temp__5720__auto__,tbl__175__auto__,gc))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$createGc_$_iter__363.call(null,cljs.core.rest.call(null,s__364__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})());
})())].join(''));
} else {
return null;
}
});
life.core.setupControlButtons = (function life$core$setupControlButtons(g,init){
var flg = cljs.core.atom.call(null,false);
var timer = cljs.core.atom.call(null,null);
var btn1 = life.core.getHtmlElementById.call(null,"start");
var btn2 = life.core.getHtmlElementById.call(null,"clear");
var btn3 = life.core.getHtmlElementById.call(null,"random");
(btn1.onclick = (function (){
return life.core.startButtonHandler.call(null,flg,timer,g,btn1);
}));

(btn2.onclick = (function (){
return life.core.clearButtonHandler.call(null,flg,timer,g,init);
}));

return (btn3.onclick = (function (){
return life.core.randomButtonHandler.call(null,flg,timer,g,init);
}));
});
life.core.initialize = (function life$core$initialize(){
var init = cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function life$core$initialize_$_iter__378(s__379){
return (new cljs.core.LazySeq(null,(function (){
var s__379__$1 = s__379;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__379__$1);
if(temp__5720__auto__){
var s__379__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__379__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__379__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__381 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__380 = (0);
while(true){
if((i__380 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__380);
cljs.core.chunk_append.call(null,b__381,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__380,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__){
return (function life$core$initialize_$_iter__378_$_iter__382(s__383){
return (new cljs.core.LazySeq(null,((function (i__380,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__){
return (function (){
var s__383__$1 = s__383;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__383__$1);
if(temp__5720__auto____$1){
var s__383__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__383__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__383__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__385 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__384 = (0);
while(true){
if((i__384 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__384);
cljs.core.chunk_append.call(null,b__385,((function (i__384,i__380,j,c__1945__auto____$1,size__1946__auto____$1,b__385,s__383__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__){
return (function (){
return life.core.STATE_DEAD;
});})(i__384,i__380,j,c__1945__auto____$1,size__1946__auto____$1,b__385,s__383__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__))
.call(null,i,j));

var G__390 = (i__384 + (1));
i__384 = G__390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__385),life$core$initialize_$_iter__378_$_iter__382.call(null,cljs.core.chunk_rest.call(null,s__383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__385),null);
}
} else {
var j = cljs.core.first.call(null,s__383__$2);
return cljs.core.cons.call(null,((function (i__380,j,s__383__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__){
return (function (){
return life.core.STATE_DEAD;
});})(i__380,j,s__383__$2,temp__5720__auto____$1,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__))
.call(null,i,j),life$core$initialize_$_iter__378_$_iter__382.call(null,cljs.core.rest.call(null,s__383__$2)));
}
} else {
return null;
}
break;
}
});})(i__380,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__))
,null,null));
});})(i__380,i,c__1945__auto__,size__1946__auto__,b__381,s__379__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()));

var G__391 = (i__380 + (1));
i__380 = G__391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__381),life$core$initialize_$_iter__378.call(null,cljs.core.chunk_rest.call(null,s__379__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__381),null);
}
} else {
var i = cljs.core.first.call(null,s__379__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i,s__379__$2,temp__5720__auto__){
return (function life$core$initialize_$_iter__378_$_iter__386(s__387){
return (new cljs.core.LazySeq(null,(function (){
var s__387__$1 = s__387;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__387__$1);
if(temp__5720__auto____$1){
var s__387__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__387__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__387__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__389 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__388 = (0);
while(true){
if((i__388 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__388);
cljs.core.chunk_append.call(null,b__389,((function (i__388,j,c__1945__auto__,size__1946__auto__,b__389,s__387__$2,temp__5720__auto____$1,i,s__379__$2,temp__5720__auto__){
return (function (){
return life.core.STATE_DEAD;
});})(i__388,j,c__1945__auto__,size__1946__auto__,b__389,s__387__$2,temp__5720__auto____$1,i,s__379__$2,temp__5720__auto__))
.call(null,i,j));

var G__392 = (i__388 + (1));
i__388 = G__392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__389),life$core$initialize_$_iter__378_$_iter__386.call(null,cljs.core.chunk_rest.call(null,s__387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__389),null);
}
} else {
var j = cljs.core.first.call(null,s__387__$2);
return cljs.core.cons.call(null,((function (j,s__387__$2,temp__5720__auto____$1,i,s__379__$2,temp__5720__auto__){
return (function (){
return life.core.STATE_DEAD;
});})(j,s__387__$2,temp__5720__auto____$1,i,s__379__$2,temp__5720__auto__))
.call(null,i,j),life$core$initialize_$_iter__378_$_iter__386.call(null,cljs.core.rest.call(null,s__387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__379__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.COLS));
})()),life$core$initialize_$_iter__378.call(null,cljs.core.rest.call(null,s__379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),life.core.ROWS));
})());
var g = cljs.core.atom.call(null,init);
life.core.createGc.call(null,g);

return life.core.setupControlButtons.call(null,g,init);
});
(window.onload = (function (){
return life.core.initialize.call(null);
}));

//# sourceMappingURL=core.js.map
