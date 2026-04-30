// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('marubatsu.computer');
goog.require('cljs.core');
marubatsu.computer.TURN_HUMAN = (1);
marubatsu.computer.TURN_COMPUTER = (2);
marubatsu.computer.canPutIdxes = (function marubatsu$computer$canPutIdxes(board){
var iter__1947__auto__ = (function marubatsu$computer$canPutIdxes_$_iter__24(s__25){
return (new cljs.core.LazySeq(null,(function (){
var s__25__$1 = s__25;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25__$1);
if(temp__5720__auto__){
var s__25__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__25__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__27 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__26 = (0);
while(true){
if((i__26 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__26);
if(cljs.core._EQ_.call(null,(0),board.call(null,i))){
cljs.core.chunk_append.call(null,b__27,i);

var G__28 = (i__26 + (1));
i__26 = G__28;
continue;
} else {
var G__29 = (i__26 + (1));
i__26 = G__29;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27),marubatsu$computer$canPutIdxes_$_iter__24.call(null,cljs.core.chunk_rest.call(null,s__25__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27),null);
}
} else {
var i = cljs.core.first.call(null,s__25__$2);
if(cljs.core._EQ_.call(null,(0),board.call(null,i))){
return cljs.core.cons.call(null,i,marubatsu$computer$canPutIdxes_$_iter__24.call(null,cljs.core.rest.call(null,s__25__$2)));
} else {
var G__30 = cljs.core.rest.call(null,s__25__$2);
s__25__$1 = G__30;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
});
marubatsu.computer.get_turn_next = (function marubatsu$computer$get_turn_next(turn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marubatsu.computer.TURN_HUMAN,marubatsu.computer.TURN_COMPUTER], null).call(null,(marubatsu.computer.TURN_COMPUTER - turn));
});
marubatsu.computer.get_lines_to_win2 = (function marubatsu$computer$get_lines_to_win2(lines,board){
var iter__1947__auto__ = (function marubatsu$computer$get_lines_to_win2_$_iter__32(s__33){
return (new cljs.core.LazySeq(null,(function (){
var s__33__$1 = s__33;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33__$1);
if(temp__5720__auto__){
var s__33__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__33__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__35 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__34 = (0);
while(true){
if((i__34 < size__1946__auto__)){
var idx = cljs.core._nth.call(null,c__1945__auto__,i__34);
var vec_positions = (function (){var iter__1947__auto__ = ((function (i__34,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__){
return (function marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__36(s__37){
return (new cljs.core.LazySeq(null,((function (i__34,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__){
return (function (){
var s__37__$1 = s__37;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__37__$1);
if(temp__5720__auto____$1){
var s__37__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__37__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__39 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__38 = (0);
while(true){
if((i__38 < size__1946__auto____$1)){
var l = cljs.core._nth.call(null,c__1945__auto____$1,i__38);
if(cljs.core.truth_(cljs.core.some.call(null,((function (i__38,s__37__$1,i__34,l,c__1945__auto____$1,size__1946__auto____$1,b__39,s__37__$2,temp__5720__auto____$1,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__){
return (function (p1__31_SHARP_){
return cljs.core._EQ_.call(null,p1__31_SHARP_,idx);
});})(i__38,s__37__$1,i__34,l,c__1945__auto____$1,size__1946__auto____$1,b__39,s__37__$2,temp__5720__auto____$1,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__))
,l))){
cljs.core.chunk_append.call(null,b__39,l);

var G__44 = (i__38 + (1));
i__38 = G__44;
continue;
} else {
var G__45 = (i__38 + (1));
i__38 = G__45;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39),marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__36.call(null,cljs.core.chunk_rest.call(null,s__37__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39),null);
}
} else {
var l = cljs.core.first.call(null,s__37__$2);
if(cljs.core.truth_(cljs.core.some.call(null,((function (s__37__$1,i__34,l,s__37__$2,temp__5720__auto____$1,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__){
return (function (p1__31_SHARP_){
return cljs.core._EQ_.call(null,p1__31_SHARP_,idx);
});})(s__37__$1,i__34,l,s__37__$2,temp__5720__auto____$1,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__))
,l))){
return cljs.core.cons.call(null,l,marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__36.call(null,cljs.core.rest.call(null,s__37__$2)));
} else {
var G__46 = cljs.core.rest.call(null,s__37__$2);
s__37__$1 = G__46;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__34,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__))
,null,null));
});})(i__34,idx,c__1945__auto__,size__1946__auto__,b__35,s__33__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,lines);
})();
cljs.core.chunk_append.call(null,b__35,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"lines","lines",-700165781),vec_positions], null));

var G__47 = (i__34 + (1));
i__34 = G__47;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35),marubatsu$computer$get_lines_to_win2_$_iter__32.call(null,cljs.core.chunk_rest.call(null,s__33__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35),null);
}
} else {
var idx = cljs.core.first.call(null,s__33__$2);
var vec_positions = (function (){var iter__1947__auto__ = ((function (idx,s__33__$2,temp__5720__auto__){
return (function marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__40(s__41){
return (new cljs.core.LazySeq(null,(function (){
var s__41__$1 = s__41;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__41__$1);
if(temp__5720__auto____$1){
var s__41__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__41__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__43 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__42 = (0);
while(true){
if((i__42 < size__1946__auto__)){
var l = cljs.core._nth.call(null,c__1945__auto__,i__42);
if(cljs.core.truth_(cljs.core.some.call(null,((function (i__42,s__41__$1,l,c__1945__auto__,size__1946__auto__,b__43,s__41__$2,temp__5720__auto____$1,idx,s__33__$2,temp__5720__auto__){
return (function (p1__31_SHARP_){
return cljs.core._EQ_.call(null,p1__31_SHARP_,idx);
});})(i__42,s__41__$1,l,c__1945__auto__,size__1946__auto__,b__43,s__41__$2,temp__5720__auto____$1,idx,s__33__$2,temp__5720__auto__))
,l))){
cljs.core.chunk_append.call(null,b__43,l);

var G__48 = (i__42 + (1));
i__42 = G__48;
continue;
} else {
var G__49 = (i__42 + (1));
i__42 = G__49;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43),marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__40.call(null,cljs.core.chunk_rest.call(null,s__41__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43),null);
}
} else {
var l = cljs.core.first.call(null,s__41__$2);
if(cljs.core.truth_(cljs.core.some.call(null,((function (s__41__$1,l,s__41__$2,temp__5720__auto____$1,idx,s__33__$2,temp__5720__auto__){
return (function (p1__31_SHARP_){
return cljs.core._EQ_.call(null,p1__31_SHARP_,idx);
});})(s__41__$1,l,s__41__$2,temp__5720__auto____$1,idx,s__33__$2,temp__5720__auto__))
,l))){
return cljs.core.cons.call(null,l,marubatsu$computer$get_lines_to_win2_$_iter__32_$_iter__40.call(null,cljs.core.rest.call(null,s__41__$2)));
} else {
var G__50 = cljs.core.rest.call(null,s__41__$2);
s__41__$1 = G__50;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__33__$2,temp__5720__auto__))
;
return iter__1947__auto__.call(null,lines);
})();
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"lines","lines",-700165781),vec_positions], null),marubatsu$computer$get_lines_to_win2_$_iter__32.call(null,cljs.core.rest.call(null,s__33__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,marubatsu.computer.canPutIdxes.call(null,board));
});
marubatsu.computer.get_guard_points2 = (function marubatsu$computer$get_guard_points2(board,idxes,opponent_stone){
return cljs.core.map.call(null,(function (p1__51_SHARP_){
if(cljs.core._EQ_.call(null,opponent_stone,board.call(null,p1__51_SHARP_))){
return (1);
} else {
return (0);
}
}),idxes);
});
marubatsu.computer.get_current_scores3 = (function marubatsu$computer$get_current_scores3(board,idxes,my_stone){
return cljs.core.map.call(null,(function (p1__52_SHARP_){
var pred__53 = cljs.core._EQ_;
var expr__54 = board.call(null,p1__52_SHARP_);
if(cljs.core.truth_(pred__53.call(null,my_stone,expr__54))){
return (2);
} else {
if(cljs.core.truth_(pred__53.call(null,(0),expr__54))){
return (1);
} else {
return (0);
}
}
}),idxes);
});
marubatsu.computer.gen_base_score2 = (function marubatsu$computer$gen_base_score2(n){
var idxes = cljs.core.concat.call(null,cljs.core.range.call(null,(0),(n * n),(n + (1))),cljs.core.range.call(null,(n - (1)),((n * n) - (1)),(n - (1))));
var score = cljs.core.vec.call(null,cljs.core.repeat.call(null,(n * n),(0)));
while(true){
if(cljs.core.empty_QMARK_.call(null,idxes)){
return score;
} else {
var G__56 = cljs.core.rest.call(null,idxes);
var G__57 = cljs.core.update.call(null,score,cljs.core.first.call(null,idxes),cljs.core.inc);
idxes = G__56;
score = G__57;
continue;
}
break;
}
});
marubatsu.computer.update_lives = (function marubatsu$computer$update_lives(lives){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__58_SHARP_){
if((p1__58_SHARP_ === (0))){
return (0);
} else {
return (p1__58_SHARP_ - (1));
}
}),lives));
});
marubatsu.computer.update_board = (function marubatsu$computer$update_board(board,lives,num){
var idx = (0);
var l = lives;
var b = board;
while(true){
if(cljs.core.empty_QMARK_.call(null,l)){
return b;
} else {
var G__59 = (idx + (1));
var G__60 = cljs.core.rest.call(null,l);
var G__61 = cljs.core.assoc.call(null,b,idx,((cljs.core._EQ_.call(null,num,cljs.core.first.call(null,l)))?(0):b.call(null,idx)));
idx = G__59;
l = G__60;
b = G__61;
continue;
}
break;
}
});
marubatsu.computer.update_board2 = (function marubatsu$computer$update_board2(board,lives,fnc){
var idx = (0);
var l = lives;
var b = board;
while(true){
if(cljs.core.empty_QMARK_.call(null,l)){
return b;
} else {
var G__62 = (idx + (1));
var G__63 = cljs.core.rest.call(null,l);
var G__64 = cljs.core.assoc.call(null,b,idx,(cljs.core.truth_(fnc.call(null,cljs.core.first.call(null,l),b.call(null,idx)))?(0):b.call(null,idx)));
idx = G__62;
l = G__63;
b = G__64;
continue;
}
break;
}
});
marubatsu.computer.get_board_child2 = (function marubatsu$computer$get_board_child2(board,lives,life_max,turn){
var idxes = marubatsu.computer.canPutIdxes.call(null,board);
var result = cljs.core.List.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,idxes)){
return result;
} else {
var G__65 = cljs.core.rest.call(null,idxes);
var G__66 = cljs.core.conj.call(null,result,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.first.call(null,idxes),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.assoc.call(null,board,cljs.core.first.call(null,idxes),turn),new cljs.core.Keyword(null,"lives","lives",845902073),cljs.core.assoc.call(null,lives,cljs.core.first.call(null,idxes),life_max)], null));
idxes = G__65;
result = G__66;
continue;
}
break;
}
});
marubatsu.computer.search_vanishing_idx = (function marubatsu$computer$search_vanishing_idx(board,lives,turn){
var idx = (0);
var l = lives;
while(true){
if(((cljs.core._EQ_.call(null,(2),cljs.core.first.call(null,l))) && (cljs.core._EQ_.call(null,board.call(null,idx),turn)))){
return idx;
} else {
if(cljs.core.empty_QMARK_.call(null,l)){
return null;
} else {
var G__67 = (idx + (1));
var G__68 = cljs.core.rest.call(null,l);
idx = G__67;
l = G__68;
continue;
}
}
break;
}
});
marubatsu.computer.update_l = (function marubatsu$computer$update_l(list_idx,pattern){
var idxes = list_idx;
var rslt = pattern;
while(true){
if(cljs.core.empty_QMARK_.call(null,idxes)){
return rslt;
} else {
if((cljs.core.first.call(null,idxes) == null)){
return cljs.core.List.EMPTY;
} else {
var G__70 = cljs.core.rest.call(null,idxes);
var G__71 = cljs.core.filter.call(null,((function (idxes,rslt){
return (function (l){
return cljs.core.some.call(null,((function (idxes,rslt){
return (function (p1__69_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,idxes),p1__69_SHARP_);
});})(idxes,rslt))
,l);
});})(idxes,rslt))
,rslt);
idxes = G__70;
rslt = G__71;
continue;
}
}
break;
}
});
marubatsu.computer.has_reach_QMARK_ = (function marubatsu$computer$has_reach_QMARK_(size,board,turn,lines){
var scores = cljs.core.map.call(null,(function (p1__72_SHARP_){
return cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_current_scores3.call(null,board,p1__72_SHARP_,turn));
}),lines);
return cljs.core.some.call(null,(function (p1__73_SHARP_){
return cljs.core._EQ_.call(null,((2) * (size - (2))),p1__73_SHARP_);
}),scores);
});
marubatsu.computer.get_position_scores5 = (function marubatsu$computer$get_position_scores5(lines,base_score,size,board,lives,turn,i){
var board_next = marubatsu.computer.update_board2.call(null,board,lives,(function (p1__74_SHARP_,p2__75_SHARP_){
return ((cljs.core._EQ_.call(null,p1__74_SHARP_,(1))) && (cljs.core._EQ_.call(null,p2__75_SHARP_,turn)));
}));
var turn_next = marubatsu.computer.get_turn_next.call(null,turn);
var vanishing_idx = marubatsu.computer.search_vanishing_idx.call(null,board,lives,turn_next);
var iter__1947__auto__ = (function marubatsu$computer$get_position_scores5_$_iter__76(s__77){
return (new cljs.core.LazySeq(null,(function (){
var s__77__$1 = s__77;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__77__$1);
if(temp__5720__auto__){
var s__77__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__77__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__77__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__79 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__78 = (0);
while(true){
if((i__78 < size__1946__auto__)){
var position_info = cljs.core._nth.call(null,c__1945__auto__,i__78);
var idx = position_info.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473));
var guard_score = cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core._GT_,(function (){var iter__1947__auto__ = ((function (i__78,s__77__$1,idx,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function marubatsu$computer$get_position_scores5_$_iter__76_$_iter__80(s__81){
return (new cljs.core.LazySeq(null,((function (i__78,s__77__$1,idx,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function (){
var s__81__$1 = s__81;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__81__$1);
if(temp__5720__auto____$1){
var s__81__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__81__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__83 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__82 = (0);
while(true){
if((i__82 < size__1946__auto____$1)){
var idxes = cljs.core._nth.call(null,c__1945__auto____$1,i__82);
cljs.core.chunk_append.call(null,b__83,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_guard_points2.call(null,board,idxes,turn_next)));

var G__96 = (i__82 + (1));
i__82 = G__96;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__80.call(null,cljs.core.chunk_rest.call(null,s__81__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__83),null);
}
} else {
var idxes = cljs.core.first.call(null,s__81__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_guard_points2.call(null,board,idxes,turn_next)),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__80.call(null,cljs.core.rest.call(null,s__81__$2)));
}
} else {
return null;
}
break;
}
});})(i__78,s__77__$1,idx,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
,null,null));
});})(i__78,s__77__$1,idx,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
;
return iter__1947__auto__.call(null,position_info.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781)));
})()));
var situation_score = cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core._GT_,(function (){var iter__1947__auto__ = ((function (i__78,s__77__$1,idx,guard_score,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function marubatsu$computer$get_position_scores5_$_iter__76_$_iter__84(s__85){
return (new cljs.core.LazySeq(null,((function (i__78,s__77__$1,idx,guard_score,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function (){
var s__85__$1 = s__85;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__85__$1);
if(temp__5720__auto____$1){
var s__85__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__85__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__85__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__87 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__86 = (0);
while(true){
if((i__86 < size__1946__auto____$1)){
var idxes = cljs.core._nth.call(null,c__1945__auto____$1,i__86);
cljs.core.chunk_append.call(null,b__87,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_current_scores3.call(null,board_next,idxes,turn)));

var G__97 = (i__86 + (1));
i__86 = G__97;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__84.call(null,cljs.core.chunk_rest.call(null,s__85__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87),null);
}
} else {
var idxes = cljs.core.first.call(null,s__85__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_current_scores3.call(null,board_next,idxes,turn)),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__84.call(null,cljs.core.rest.call(null,s__85__$2)));
}
} else {
return null;
}
break;
}
});})(i__78,s__77__$1,idx,guard_score,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
,null,null));
});})(i__78,s__77__$1,idx,guard_score,position_info,c__1945__auto__,size__1946__auto__,b__79,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
;
return iter__1947__auto__.call(null,position_info.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781)));
})()));
var lines_update = marubatsu.computer.update_l.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanishing_idx,idx], null),lines);
var reach_flg = marubatsu.computer.has_reach_QMARK_.call(null,size,board_next,turn_next,lines_update);
if(cljs.core._EQ_.call(null,idx,i)){
cljs.core.chunk_append.call(null,b__79,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"score","score",-1963588780),((((base_score.call(null,idx) + (cljs.core.truth_(reach_flg)?(size - (1)):(0))) + ((((size - (1)) <= guard_score))?size:(0))) + situation_score) + (((((2) * (size - (1))) < situation_score))?(size + (1)):(0)))], null));

var G__98 = (i__78 + (1));
i__78 = G__98;
continue;
} else {
var G__99 = (i__78 + (1));
i__78 = G__99;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79),marubatsu$computer$get_position_scores5_$_iter__76.call(null,cljs.core.chunk_rest.call(null,s__77__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79),null);
}
} else {
var position_info = cljs.core.first.call(null,s__77__$2);
var idx = position_info.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473));
var guard_score = cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core._GT_,(function (){var iter__1947__auto__ = ((function (s__77__$1,idx,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function marubatsu$computer$get_position_scores5_$_iter__76_$_iter__88(s__89){
return (new cljs.core.LazySeq(null,((function (s__77__$1,idx,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function (){
var s__89__$1 = s__89;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__89__$1);
if(temp__5720__auto____$1){
var s__89__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__89__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__89__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__91 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__90 = (0);
while(true){
if((i__90 < size__1946__auto__)){
var idxes = cljs.core._nth.call(null,c__1945__auto__,i__90);
cljs.core.chunk_append.call(null,b__91,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_guard_points2.call(null,board,idxes,turn_next)));

var G__100 = (i__90 + (1));
i__90 = G__100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__88.call(null,cljs.core.chunk_rest.call(null,s__89__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91),null);
}
} else {
var idxes = cljs.core.first.call(null,s__89__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_guard_points2.call(null,board,idxes,turn_next)),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__88.call(null,cljs.core.rest.call(null,s__89__$2)));
}
} else {
return null;
}
break;
}
});})(s__77__$1,idx,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
,null,null));
});})(s__77__$1,idx,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
;
return iter__1947__auto__.call(null,position_info.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781)));
})()));
var situation_score = cljs.core.first.call(null,cljs.core.sort.call(null,cljs.core._GT_,(function (){var iter__1947__auto__ = ((function (s__77__$1,idx,guard_score,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function marubatsu$computer$get_position_scores5_$_iter__76_$_iter__92(s__93){
return (new cljs.core.LazySeq(null,((function (s__77__$1,idx,guard_score,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx){
return (function (){
var s__93__$1 = s__93;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__93__$1);
if(temp__5720__auto____$1){
var s__93__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__93__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__93__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__95 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__94 = (0);
while(true){
if((i__94 < size__1946__auto__)){
var idxes = cljs.core._nth.call(null,c__1945__auto__,i__94);
cljs.core.chunk_append.call(null,b__95,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_current_scores3.call(null,board_next,idxes,turn)));

var G__101 = (i__94 + (1));
i__94 = G__101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__92.call(null,cljs.core.chunk_rest.call(null,s__93__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__95),null);
}
} else {
var idxes = cljs.core.first.call(null,s__93__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,marubatsu.computer.get_current_scores3.call(null,board_next,idxes,turn)),marubatsu$computer$get_position_scores5_$_iter__76_$_iter__92.call(null,cljs.core.rest.call(null,s__93__$2)));
}
} else {
return null;
}
break;
}
});})(s__77__$1,idx,guard_score,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
,null,null));
});})(s__77__$1,idx,guard_score,position_info,s__77__$2,temp__5720__auto__,board_next,turn_next,vanishing_idx))
;
return iter__1947__auto__.call(null,position_info.call(null,new cljs.core.Keyword(null,"lines","lines",-700165781)));
})()));
var lines_update = marubatsu.computer.update_l.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vanishing_idx,idx], null),lines);
var reach_flg = marubatsu.computer.has_reach_QMARK_.call(null,size,board_next,turn_next,lines_update);
if(cljs.core._EQ_.call(null,idx,i)){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"score","score",-1963588780),((((base_score.call(null,idx) + (cljs.core.truth_(reach_flg)?(size - (1)):(0))) + ((((size - (1)) <= guard_score))?size:(0))) + situation_score) + (((((2) * (size - (1))) < situation_score))?(size + (1)):(0)))], null),marubatsu$computer$get_position_scores5_$_iter__76.call(null,cljs.core.rest.call(null,s__77__$2)));
} else {
var G__102 = cljs.core.rest.call(null,s__77__$2);
s__77__$1 = G__102;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,marubatsu.computer.get_lines_to_win2.call(null,lines,board_next));
});
marubatsu.computer.think6 = (function marubatsu$computer$think6(var_args){
var G__105 = arguments.length;
switch (G__105) {
case 5:
return marubatsu.computer.think6.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return marubatsu.computer.think6.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(marubatsu.computer.think6.cljs$core$IFn$_invoke$arity$5 = (function (win_patterns,board,lives,size,turn){
return marubatsu.computer.think6.call(null,win_patterns,board,lives,size,turn,(-1),(-1));
}));

(marubatsu.computer.think6.cljs$core$IFn$_invoke$arity$7 = (function (win_patterns,board,lives,size,turn,idx,score){
var life_max = ((size * size) - (size - (1)));
var lives_new = marubatsu.computer.update_lives.call(null,lives);
var board_new = marubatsu.computer.update_board2.call(null,board,lives_new,(function (p1__103_SHARP_){
return cljs.core._EQ_.call(null,p1__103_SHARP_,(0));
}));
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"b","b",1482224470),board_new,new cljs.core.Keyword(null,"t","t",-1397832519),turn,new cljs.core.Keyword(null,"i","i",-1386841315),idx,new cljs.core.Keyword(null,"s","s",1705939918),score,new cljs.core.Keyword(null,"l","l",1395893423),lives_new], null),null,(1),null));
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljs.core.map.call(null,(function (p__106){
var map__107 = p__106;
var map__107__$1 = cljs.core.__destructure_map.call(null,map__107);
var board__$1 = cljs.core.get.call(null,map__107__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var lives__$1 = cljs.core.get.call(null,map__107__$1,new cljs.core.Keyword(null,"lives","lives",845902073));
var idx__$1 = cljs.core.get.call(null,map__107__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return marubatsu.computer.think6.call(null,win_patterns,board__$1,lives__$1,size,marubatsu.computer.get_turn_next.call(null,turn),idx__$1,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,marubatsu.computer.get_position_scores5.call(null,win_patterns,marubatsu.computer.gen_base_score2.call(null,size),size,board_new,lives_new,turn,idx__$1))));
}),marubatsu.computer.get_board_child2.call(null,board_new,lives_new,life_max,turn));
}),null,null)));
}));

(marubatsu.computer.think6.cljs$lang$maxFixedArity = 7);


//# sourceMappingURL=computer.js.map
