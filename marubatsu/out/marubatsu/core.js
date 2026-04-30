// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('marubatsu.core');
goog.require('cljs.core');
goog.require('marubatsu.util');
goog.require('marubatsu.computer');
goog.require('cljs.core.async');
marubatsu.core.STATES = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["empty","alive","dying"], null);
marubatsu.core.STATE_EMPTY = (0);
marubatsu.core.STATE_ALIVE = (1);
marubatsu.core.STATE_DYING = (2);
marubatsu.core.TURN_HUMAN = (1);
marubatsu.core.TURN_COMPUTER = (2);
marubatsu.core.getHtmlElementById = (function marubatsu$core$getHtmlElementById(id){
return document.getElementById(id);
});
marubatsu.core.createHtmlElementAsChild = (function marubatsu$core$createHtmlElementAsChild(obj,type){
return obj.appendChild(document.createElement(type));
});
marubatsu.core.setAttribute = (function marubatsu$core$setAttribute(obj,param,val){
return obj.setAttribute(param,val);
});
marubatsu.core.setObjectAttributeClass = (function marubatsu$core$setObjectAttributeClass(obj,idx){
return marubatsu.core.setAttribute.call(null,obj,"class",cljs.core.get.call(null,marubatsu.core.STATES,idx));
});
marubatsu.core.setCellAttributeClass = (function marubatsu$core$setCellAttributeClass(idx,state){
return marubatsu.core.setObjectAttributeClass.call(null,marubatsu.core.getHtmlElementById.call(null,idx),state);
});
marubatsu.core.initBoard = (function marubatsu$core$initBoard(size){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(size * size),(0)));
});
marubatsu.core.isAttributeClassDead_QMARK_ = (function marubatsu$core$isAttributeClassDead_QMARK_(obj){
return cljs.core._EQ_.call(null,obj.getAttribute("class"),cljs.core.get.call(null,marubatsu.core.STATES,marubatsu.core.STATE_EMPTY));
});
marubatsu.core.gen_board = (function marubatsu$core$gen_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(n * n),(0)));
});
marubatsu.core.gen_win_pattern = (function marubatsu$core$gen_win_pattern(n){
return cljs.core.concat.call(null,cljs.core.partition.call(null,n,cljs.core.range.call(null,(n * n))),(function (){var iter__1947__auto__ = (function marubatsu$core$gen_win_pattern_$_iter__2089(s__2090){
return (new cljs.core.LazySeq(null,(function (){
var s__2090__$1 = s__2090;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2090__$1);
if(temp__5720__auto__){
var s__2090__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2090__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__2090__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__2092 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__2091 = (0);
while(true){
if((i__2091 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__2091);
cljs.core.chunk_append.call(null,b__2092,cljs.core.map.call(null,((function (i__2091,i,c__1945__auto__,size__1946__auto__,b__2092,s__2090__$2,temp__5720__auto__){
return (function (p1__2088_SHARP_){
return (i + p1__2088_SHARP_);
});})(i__2091,i,c__1945__auto__,size__1946__auto__,b__2092,s__2090__$2,temp__5720__auto__))
,cljs.core.range.call(null,(0),(n * n),n)));

var G__2093 = (i__2091 + (1));
i__2091 = G__2093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2092),marubatsu$core$gen_win_pattern_$_iter__2089.call(null,cljs.core.chunk_rest.call(null,s__2090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2092),null);
}
} else {
var i = cljs.core.first.call(null,s__2090__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__2090__$2,temp__5720__auto__){
return (function (p1__2088_SHARP_){
return (i + p1__2088_SHARP_);
});})(i,s__2090__$2,temp__5720__auto__))
,cljs.core.range.call(null,(0),(n * n),n)),marubatsu$core$gen_win_pattern_$_iter__2089.call(null,cljs.core.rest.call(null,s__2090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,n));
})(),(new cljs.core.List(null,cljs.core.range.call(null,(0),(n * n),(n + (1))),(new cljs.core.List(null,cljs.core.range.call(null,(n - (1)),((n * n) - (1)),(n - (1))),null,(1),null)),(2),null)));
});
marubatsu.core.conv_to_OX = (function marubatsu$core$conv_to_OX(turn){
if(cljs.core._EQ_.call(null,marubatsu.core.TURN_HUMAN,turn)){
return "O";
} else {
return "X";
}
});
marubatsu.core.upd_status = (function marubatsu$core$upd_status(board,log,turn,current){
var current_status = cljs.core.first.call(null,current);
cljs.core.reset_BANG_.call(null,board,current);

cljs.core.reset_BANG_.call(null,log,cljs.core.conj.call(null,cljs.core.deref.call(null,log),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(current_status),new cljs.core.Keyword(null,"t","t",-1397832519),marubatsu.computer.get_turn_next.call(null,turn)], null)));

return current_status;
});
marubatsu.core.set_btn_disabled = (function marubatsu$core$set_btn_disabled(flg){
var seq__2094 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["undo","quit"], null));
var chunk__2096 = null;
var count__2097 = (0);
var i__2098 = (0);
while(true){
if((i__2098 < count__2097)){
var id = cljs.core._nth.call(null,chunk__2096,i__2098);
var btn_2100 = marubatsu.core.getHtmlElementById.call(null,id);
btn_2100.setAttribute("style",(cljs.core.truth_(flg)?"background: #587559":"background: linear-gradient(to bottom right, #C5DEC6, #587559"));

(btn_2100.disabled = flg);


var G__2101 = seq__2094;
var G__2102 = chunk__2096;
var G__2103 = count__2097;
var G__2104 = (i__2098 + (1));
seq__2094 = G__2101;
chunk__2096 = G__2102;
count__2097 = G__2103;
i__2098 = G__2104;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__2094);
if(temp__5720__auto__){
var seq__2094__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2094__$1)){
var c__1992__auto__ = cljs.core.chunk_first.call(null,seq__2094__$1);
var G__2105 = cljs.core.chunk_rest.call(null,seq__2094__$1);
var G__2106 = c__1992__auto__;
var G__2107 = cljs.core.count.call(null,c__1992__auto__);
var G__2108 = (0);
seq__2094 = G__2105;
chunk__2096 = G__2106;
count__2097 = G__2107;
i__2098 = G__2108;
continue;
} else {
var id = cljs.core.first.call(null,seq__2094__$1);
var btn_2109 = marubatsu.core.getHtmlElementById.call(null,id);
btn_2109.setAttribute("style",(cljs.core.truth_(flg)?"background: #587559":"background: linear-gradient(to bottom right, #C5DEC6, #587559"));

(btn_2109.disabled = flg);


var G__2110 = cljs.core.next.call(null,seq__2094__$1);
var G__2111 = null;
var G__2112 = (0);
var G__2113 = (0);
seq__2094 = G__2110;
chunk__2096 = G__2111;
count__2097 = G__2112;
i__2098 = G__2113;
continue;
}
} else {
return null;
}
}
break;
}
});
marubatsu.core.show_result = (function marubatsu$core$show_result(info,t_start,turn,cnt){
alert(["\n[ the lead : ",marubatsu.core.conv_to_OX.call(null,(t_start + (1)))," ]"," [ end : ",marubatsu.core.conv_to_OX.call(null,turn)," wins ]"," [ cnt : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnt)," ]"].join(''));

var seq__2114_2120 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(info))));
var chunk__2116_2121 = null;
var count__2117_2122 = (0);
var i__2118_2123 = (0);
while(true){
if((i__2118_2123 < count__2117_2122)){
var idx_2124 = cljs.core._nth.call(null,chunk__2116_2121,i__2118_2123);
var td_2125 = marubatsu.core.getHtmlElementById.call(null,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_2124)].join(''));
(td_2125.onclick = null);


var G__2126 = seq__2114_2120;
var G__2127 = chunk__2116_2121;
var G__2128 = count__2117_2122;
var G__2129 = (i__2118_2123 + (1));
seq__2114_2120 = G__2126;
chunk__2116_2121 = G__2127;
count__2117_2122 = G__2128;
i__2118_2123 = G__2129;
continue;
} else {
var temp__5720__auto___2130 = cljs.core.seq.call(null,seq__2114_2120);
if(temp__5720__auto___2130){
var seq__2114_2131__$1 = temp__5720__auto___2130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2114_2131__$1)){
var c__1992__auto___2132 = cljs.core.chunk_first.call(null,seq__2114_2131__$1);
var G__2133 = cljs.core.chunk_rest.call(null,seq__2114_2131__$1);
var G__2134 = c__1992__auto___2132;
var G__2135 = cljs.core.count.call(null,c__1992__auto___2132);
var G__2136 = (0);
seq__2114_2120 = G__2133;
chunk__2116_2121 = G__2134;
count__2117_2122 = G__2135;
i__2118_2123 = G__2136;
continue;
} else {
var idx_2137 = cljs.core.first.call(null,seq__2114_2131__$1);
var td_2138 = marubatsu.core.getHtmlElementById.call(null,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_2137)].join(''));
(td_2138.onclick = null);


var G__2139 = cljs.core.next.call(null,seq__2114_2131__$1);
var G__2140 = null;
var G__2141 = (0);
var G__2142 = (0);
seq__2114_2120 = G__2139;
chunk__2116_2121 = G__2140;
count__2117_2122 = G__2141;
i__2118_2123 = G__2142;
continue;
}
} else {
}
}
break;
}

return marubatsu.core.set_btn_disabled.call(null,true);
});
marubatsu.core.win2_QMARK_ = (function marubatsu$core$win2_QMARK_(win_pttrns,board,opr,size){
return cljs.core.some.call(null,(function (p1__2143_SHARP_){
return cljs.core._EQ_.call(null,size,cljs.core.count.call(null,p1__2143_SHARP_));
}),cljs.core.map.call(null,(function (p1__2144_SHARP_){
var iter__1947__auto__ = (function marubatsu$core$win2_QMARK__$_iter__2145(s__2146){
return (new cljs.core.LazySeq(null,(function (){
var s__2146__$1 = s__2146;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2146__$1);
if(temp__5720__auto__){
var s__2146__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2146__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__2146__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__2148 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__2147 = (0);
while(true){
if((i__2147 < size__1946__auto__)){
var idx = cljs.core._nth.call(null,c__1945__auto__,i__2147);
var stone = cljs.core.nth.call(null,board,idx);
if(cljs.core.truth_(opr.call(null,stone))){
cljs.core.chunk_append.call(null,b__2148,idx);

var G__2149 = (i__2147 + (1));
i__2147 = G__2149;
continue;
} else {
var G__2150 = (i__2147 + (1));
i__2147 = G__2150;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2148),marubatsu$core$win2_QMARK__$_iter__2145.call(null,cljs.core.chunk_rest.call(null,s__2146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2148),null);
}
} else {
var idx = cljs.core.first.call(null,s__2146__$2);
var stone = cljs.core.nth.call(null,board,idx);
if(cljs.core.truth_(opr.call(null,stone))){
return cljs.core.cons.call(null,idx,marubatsu$core$win2_QMARK__$_iter__2145.call(null,cljs.core.rest.call(null,s__2146__$2)));
} else {
var G__2151 = cljs.core.rest.call(null,s__2146__$2);
s__2146__$1 = G__2151;
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
return iter__1947__auto__.call(null,p1__2144_SHARP_);
}),win_pttrns));
});
marubatsu.core.random_choosing_from_bests = (function marubatsu$core$random_choosing_from_bests(data){
var best_choice = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p1__2152_SHARP_){
return cljs.core.first.call(null,p1__2152_SHARP_).call(null,new cljs.core.Keyword(null,"s","s",1705939918));
}),cljs.core._GT_,data));
var high_score = new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,best_choice));
var bests = cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__2153_SHARP_){
return cljs.core._EQ_.call(null,high_score,new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__2153_SHARP_)));
}),data));
var idx = cljs.core.rand_int.call(null,cljs.core.count.call(null,bests));
return new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bests.call(null,idx)));
});
marubatsu.core.print_board = (function marubatsu$core$print_board(info){
var seq__2154 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(info))));
var chunk__2156 = null;
var count__2157 = (0);
var i__2158 = (0);
while(true){
if((i__2158 < count__2157)){
var idx = cljs.core._nth.call(null,chunk__2156,i__2158);
var td_2160 = marubatsu.core.getHtmlElementById.call(null,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
if((new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx) === (0))){
(td_2160.innerHTML = "");

marubatsu.core.setObjectAttributeClass.call(null,td_2160,cljs.core.get.call(null,marubatsu.core.STATES,marubatsu.core.STATE_EMPTY));
} else {
(td_2160.innerHTML = marubatsu.core.conv_to_OX.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)));

marubatsu.core.setObjectAttributeClass.call(null,td_2160,((((2) < new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)))?marubatsu.core.STATE_ALIVE:marubatsu.core.STATE_DYING));

td_2160.setAttribute("style",((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)))?"color:white":"color:black"));
}


var G__2161 = seq__2154;
var G__2162 = chunk__2156;
var G__2163 = count__2157;
var G__2164 = (i__2158 + (1));
seq__2154 = G__2161;
chunk__2156 = G__2162;
count__2157 = G__2163;
i__2158 = G__2164;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__2154);
if(temp__5720__auto__){
var seq__2154__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2154__$1)){
var c__1992__auto__ = cljs.core.chunk_first.call(null,seq__2154__$1);
var G__2165 = cljs.core.chunk_rest.call(null,seq__2154__$1);
var G__2166 = c__1992__auto__;
var G__2167 = cljs.core.count.call(null,c__1992__auto__);
var G__2168 = (0);
seq__2154 = G__2165;
chunk__2156 = G__2166;
count__2157 = G__2167;
i__2158 = G__2168;
continue;
} else {
var idx = cljs.core.first.call(null,seq__2154__$1);
var td_2169 = marubatsu.core.getHtmlElementById.call(null,["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
if((new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx) === (0))){
(td_2169.innerHTML = "");

marubatsu.core.setObjectAttributeClass.call(null,td_2169,cljs.core.get.call(null,marubatsu.core.STATES,marubatsu.core.STATE_EMPTY));
} else {
(td_2169.innerHTML = marubatsu.core.conv_to_OX.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)));

marubatsu.core.setObjectAttributeClass.call(null,td_2169,((((2) < new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)))?marubatsu.core.STATE_ALIVE:marubatsu.core.STATE_DYING));

td_2169.setAttribute("style",((cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(info).call(null,idx)))?"color:white":"color:black"));
}


var G__2170 = cljs.core.next.call(null,seq__2154__$1);
var G__2171 = null;
var G__2172 = (0);
var G__2173 = (0);
seq__2154 = G__2170;
chunk__2156 = G__2171;
count__2157 = G__2172;
i__2158 = G__2173;
continue;
}
} else {
return null;
}
}
break;
}
});
marubatsu.core.cellClickHandler = (function marubatsu$core$cellClickHandler(idx,board,obj,log,win_pttrns,turn,size){
if(cljs.core.empty_QMARK_.call(null,obj.innerHTML)){
var c__2029__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2030__auto__ = (function (){var switch__2006__auto__ = (function (state_2235){
var state_val_2236 = (state_2235[(1)]);
if((state_val_2236 === (7))){
var inst_2194 = (state_2235[(7)]);
var state_2235__$1 = state_2235;
var statearr_2237_2265 = state_2235__$1;
(statearr_2237_2265[(2)] = inst_2194);

(statearr_2237_2265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (1))){
var inst_2176 = marubatsu.core.TURN_HUMAN;
var inst_2177 = idx;
var inst_2178 = (0);
var inst_2179 = inst_2176;
var inst_2180 = inst_2177;
var state_2235__$1 = (function (){var statearr_2238 = state_2235;
(statearr_2238[(8)] = inst_2179);

(statearr_2238[(9)] = inst_2178);

(statearr_2238[(10)] = inst_2180);

return statearr_2238;
})();
var statearr_2239_2266 = state_2235__$1;
(statearr_2239_2266[(2)] = null);

(statearr_2239_2266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (4))){
var inst_2189 = (state_2235[(11)]);
var inst_2179 = (state_2235[(8)]);
var inst_2194 = (state_2235[(7)]);
var inst_2188 = (state_2235[(12)]);
var inst_2178 = (state_2235[(9)]);
var inst_2180 = (state_2235[(10)]);
var inst_2184 = (function (){var cnt = inst_2178;
var t = inst_2179;
var i = inst_2180;
return (function (p1__2174_SHARP_){
return cljs.core._EQ_.call(null,i,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__2174_SHARP_)));
});
})();
var inst_2185 = cljs.core.deref.call(null,board);
var inst_2186 = cljs.core.rest.call(null,inst_2185);
var inst_2187 = cljs.core.filter.call(null,inst_2184,inst_2186);
var inst_2188__$1 = cljs.core.first.call(null,inst_2187);
var inst_2189__$1 = marubatsu.core.upd_status.call(null,board,log,inst_2179,inst_2188__$1);
var inst_2190 = marubatsu.core.print_board.call(null,inst_2189__$1);
var inst_2191 = (turn + (1));
var inst_2192 = cljs.core.deref.call(null,log);
var inst_2193 = cljs.core.count.call(null,inst_2192);
var inst_2194__$1 = cljs.core._EQ_.call(null,(1),inst_2191,inst_2193);
var state_2235__$1 = (function (){var statearr_2240 = state_2235;
(statearr_2240[(11)] = inst_2189__$1);

(statearr_2240[(13)] = inst_2190);

(statearr_2240[(7)] = inst_2194__$1);

(statearr_2240[(12)] = inst_2188__$1);

return statearr_2240;
})();
if(inst_2194__$1){
var statearr_2241_2267 = state_2235__$1;
(statearr_2241_2267[(1)] = (7));

} else {
var statearr_2242_2268 = state_2235__$1;
(statearr_2242_2268[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (15))){
var inst_2228 = (state_2235[(2)]);
var state_2235__$1 = state_2235;
var statearr_2243_2269 = state_2235__$1;
(statearr_2243_2269[(2)] = inst_2228);

(statearr_2243_2269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (13))){
var inst_2212 = cljs.core.async.timeout.call(null,(1000));
var state_2235__$1 = state_2235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2235__$1,(16),inst_2212);
} else {
if((state_val_2236 === (6))){
var inst_2231 = (state_2235[(2)]);
var state_2235__$1 = state_2235;
var statearr_2244_2270 = state_2235__$1;
(statearr_2244_2270[(2)] = inst_2231);

(statearr_2244_2270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (17))){
var inst_2179 = (state_2235[(8)]);
var inst_2188 = (state_2235[(12)]);
var inst_2178 = (state_2235[(9)]);
var inst_2221 = (state_2235[(2)]);
var inst_2222 = (inst_2178 + (1));
var inst_2223 = marubatsu.computer.get_turn_next.call(null,inst_2179);
var inst_2224 = cljs.core.rest.call(null,inst_2188);
var inst_2225 = marubatsu.core.random_choosing_from_bests.call(null,inst_2224);
var inst_2178__$1 = inst_2222;
var inst_2179__$1 = inst_2223;
var inst_2180 = inst_2225;
var state_2235__$1 = (function (){var statearr_2245 = state_2235;
(statearr_2245[(8)] = inst_2179__$1);

(statearr_2245[(9)] = inst_2178__$1);

(statearr_2245[(14)] = inst_2221);

(statearr_2245[(10)] = inst_2180);

return statearr_2245;
})();
var statearr_2246_2271 = state_2235__$1;
(statearr_2246_2271[(2)] = null);

(statearr_2246_2271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (3))){
var inst_2233 = (state_2235[(2)]);
var state_2235__$1 = state_2235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2235__$1,inst_2233);
} else {
if((state_val_2236 === (12))){
var inst_2189 = (state_2235[(11)]);
var inst_2179 = (state_2235[(8)]);
var inst_2188 = (state_2235[(12)]);
var inst_2178 = (state_2235[(9)]);
var inst_2180 = (state_2235[(10)]);
var inst_2207 = (state_2235[(2)]);
var inst_2208 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(inst_2189);
var inst_2209 = (function (){var cnt = inst_2178;
var t = inst_2179;
var i = inst_2180;
var current = inst_2188;
var b_print = inst_2189;
return (function (p1__2175_SHARP_){
return cljs.core._EQ_.call(null,t,p1__2175_SHARP_);
});
})();
var inst_2210 = marubatsu.core.win2_QMARK_.call(null,win_pttrns,inst_2208,inst_2209,size);
var state_2235__$1 = (function (){var statearr_2247 = state_2235;
(statearr_2247[(15)] = inst_2207);

return statearr_2247;
})();
if(cljs.core.truth_(inst_2210)){
var statearr_2248_2272 = state_2235__$1;
(statearr_2248_2272[(1)] = (13));

} else {
var statearr_2249_2273 = state_2235__$1;
(statearr_2249_2273[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (2))){
var inst_2178 = (state_2235[(9)]);
var inst_2182 = (inst_2178 < (2));
var state_2235__$1 = state_2235;
if(cljs.core.truth_(inst_2182)){
var statearr_2250_2274 = state_2235__$1;
(statearr_2250_2274[(1)] = (4));

} else {
var statearr_2251_2275 = state_2235__$1;
(statearr_2251_2275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (11))){
var state_2235__$1 = state_2235;
var statearr_2252_2276 = state_2235__$1;
(statearr_2252_2276[(2)] = null);

(statearr_2252_2276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (9))){
var inst_2202 = (state_2235[(2)]);
var state_2235__$1 = state_2235;
if(cljs.core.truth_(inst_2202)){
var statearr_2253_2277 = state_2235__$1;
(statearr_2253_2277[(1)] = (10));

} else {
var statearr_2254_2278 = state_2235__$1;
(statearr_2254_2278[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (5))){
var state_2235__$1 = state_2235;
var statearr_2255_2279 = state_2235__$1;
(statearr_2255_2279[(2)] = null);

(statearr_2255_2279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (14))){
var inst_2219 = cljs.core.async.timeout.call(null,(1000));
var state_2235__$1 = state_2235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2235__$1,(17),inst_2219);
} else {
if((state_val_2236 === (16))){
var inst_2189 = (state_2235[(11)]);
var inst_2179 = (state_2235[(8)]);
var inst_2214 = (state_2235[(2)]);
var inst_2215 = cljs.core.deref.call(null,log);
var inst_2216 = cljs.core.count.call(null,inst_2215);
var inst_2217 = marubatsu.core.show_result.call(null,inst_2189,turn,inst_2179,inst_2216);
var state_2235__$1 = (function (){var statearr_2256 = state_2235;
(statearr_2256[(16)] = inst_2214);

return statearr_2256;
})();
var statearr_2257_2280 = state_2235__$1;
(statearr_2257_2280[(2)] = inst_2217);

(statearr_2257_2280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (10))){
var inst_2204 = marubatsu.core.set_btn_disabled.call(null,false);
var state_2235__$1 = state_2235;
var statearr_2258_2281 = state_2235__$1;
(statearr_2258_2281[(2)] = inst_2204);

(statearr_2258_2281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2236 === (8))){
var inst_2197 = (turn + (1));
var inst_2198 = cljs.core.deref.call(null,log);
var inst_2199 = cljs.core.count.call(null,inst_2198);
var inst_2200 = cljs.core._EQ_.call(null,(2),inst_2197,inst_2199);
var state_2235__$1 = state_2235;
var statearr_2259_2282 = state_2235__$1;
(statearr_2259_2282[(2)] = inst_2200);

(statearr_2259_2282[(1)] = (9));


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
var marubatsu$core$cellClickHandler_$_state_machine__2007__auto__ = null;
var marubatsu$core$cellClickHandler_$_state_machine__2007__auto____0 = (function (){
var statearr_2260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_2260[(0)] = marubatsu$core$cellClickHandler_$_state_machine__2007__auto__);

(statearr_2260[(1)] = (1));

return statearr_2260;
});
var marubatsu$core$cellClickHandler_$_state_machine__2007__auto____1 = (function (state_2235){
while(true){
var ret_value__2008__auto__ = (function (){try{while(true){
var result__2009__auto__ = switch__2006__auto__.call(null,state_2235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2009__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2009__auto__;
}
break;
}
}catch (e2261){var ex__2010__auto__ = e2261;
var statearr_2262_2283 = state_2235;
(statearr_2262_2283[(2)] = ex__2010__auto__);


if(cljs.core.seq.call(null,(state_2235[(4)]))){
var statearr_2263_2284 = state_2235;
(statearr_2263_2284[(1)] = cljs.core.first.call(null,(state_2235[(4)])));

} else {
throw ex__2010__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2285 = state_2235;
state_2235 = G__2285;
continue;
} else {
return ret_value__2008__auto__;
}
break;
}
});
marubatsu$core$cellClickHandler_$_state_machine__2007__auto__ = function(state_2235){
switch(arguments.length){
case 0:
return marubatsu$core$cellClickHandler_$_state_machine__2007__auto____0.call(this);
case 1:
return marubatsu$core$cellClickHandler_$_state_machine__2007__auto____1.call(this,state_2235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
marubatsu$core$cellClickHandler_$_state_machine__2007__auto__.cljs$core$IFn$_invoke$arity$0 = marubatsu$core$cellClickHandler_$_state_machine__2007__auto____0;
marubatsu$core$cellClickHandler_$_state_machine__2007__auto__.cljs$core$IFn$_invoke$arity$1 = marubatsu$core$cellClickHandler_$_state_machine__2007__auto____1;
return marubatsu$core$cellClickHandler_$_state_machine__2007__auto__;
})()
})();
var state__2031__auto__ = (function (){var statearr_2264 = f__2030__auto__.call(null);
(statearr_2264[(6)] = c__2029__auto__);

return statearr_2264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2031__auto__);
}));

return c__2029__auto__;
} else {
return null;
}
});
marubatsu.core.createTableOnGridContainer = (function marubatsu$core$createTableOnGridContainer(board,size,log,win_pttrns,t_start){
var gc = marubatsu.core.getHtmlElementById.call(null,"gridContainer");
if(cljs.core.truth_(gc)){
(gc.innerHTML = "");

return console.log(["html_tbl",":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var tbl__258__auto__ = marubatsu.core.createHtmlElementAsChild.call(null,gc,"table");
return cljs.core.vec.call(null,(function (){var iter__1947__auto__ = (function marubatsu$core$createTableOnGridContainer_$_iter__2298(s__2299){
return (new cljs.core.LazySeq(null,(function (){
var s__2299__$1 = s__2299;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__2299__$1);
if(temp__5720__auto__){
var s__2299__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2299__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__2299__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__2301 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__2300 = (0);
while(true){
if((i__2300 < size__1946__auto__)){
var i = cljs.core._nth.call(null,c__1945__auto__,i__2300);
var tr = marubatsu.core.createHtmlElementAsChild.call(null,tbl__258__auto__,"tr");
cljs.core.chunk_append.call(null,b__2301,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (i__2300,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2302(s__2303){
return (new cljs.core.LazySeq(null,((function (i__2300,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (){
var s__2303__$1 = s__2303;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__2303__$1);
if(temp__5720__auto____$1){
var s__2303__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2303__$2)){
var c__1945__auto____$1 = cljs.core.chunk_first.call(null,s__2303__$2);
var size__1946__auto____$1 = cljs.core.count.call(null,c__1945__auto____$1);
var b__2305 = cljs.core.chunk_buffer.call(null,size__1946__auto____$1);
if((function (){var i__2304 = (0);
while(true){
if((i__2304 < size__1946__auto____$1)){
var j = cljs.core._nth.call(null,c__1945__auto____$1,i__2304);
var td = marubatsu.core.createHtmlElementAsChild.call(null,tr,"td");
cljs.core.chunk_append.call(null,b__2305,((function (i__2304,i__2300,td,j,c__1945__auto____$1,size__1946__auto____$1,b__2305,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (i__$1,j__$1,obj){
var idx = ((i__$1 * size) + j__$1);
var idx_state = cljs.core.get.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,board))),idx);
var str_state = cljs.core.get.call(null,marubatsu.core.STATES,parseInt(idx_state));
marubatsu.core.setAttribute.call(null,obj,"class",str_state);

marubatsu.core.setAttribute.call(null,obj,"id",["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));

return (obj.onclick = ((function (i__2304,i__2300,idx,idx_state,str_state,td,j,c__1945__auto____$1,size__1946__auto____$1,b__2305,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (){
return marubatsu.core.cellClickHandler.call(null,idx,board,obj,log,win_pttrns,t_start,size);
});})(i__2304,i__2300,idx,idx_state,str_state,td,j,c__1945__auto____$1,size__1946__auto____$1,b__2305,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
);
});})(i__2304,i__2300,td,j,c__1945__auto____$1,size__1946__auto____$1,b__2305,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
.call(null,i,j,td));

var G__2310 = (i__2304 + (1));
i__2304 = G__2310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2305),marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2302.call(null,cljs.core.chunk_rest.call(null,s__2303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2305),null);
}
} else {
var j = cljs.core.first.call(null,s__2303__$2);
var td = marubatsu.core.createHtmlElementAsChild.call(null,tr,"td");
return cljs.core.cons.call(null,((function (i__2300,td,j,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (i__$1,j__$1,obj){
var idx = ((i__$1 * size) + j__$1);
var idx_state = cljs.core.get.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,board))),idx);
var str_state = cljs.core.get.call(null,marubatsu.core.STATES,parseInt(idx_state));
marubatsu.core.setAttribute.call(null,obj,"class",str_state);

marubatsu.core.setAttribute.call(null,obj,"id",["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));

return (obj.onclick = ((function (i__2300,idx,idx_state,str_state,td,j,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (){
return marubatsu.core.cellClickHandler.call(null,idx,board,obj,log,win_pttrns,t_start,size);
});})(i__2300,idx,idx_state,str_state,td,j,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
);
});})(i__2300,td,j,s__2303__$2,temp__5720__auto____$1,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
.call(null,i,j,td),marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2302.call(null,cljs.core.rest.call(null,s__2303__$2)));
}
} else {
return null;
}
break;
}
});})(i__2300,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
,null,null));
});})(i__2300,tr,i,c__1945__auto__,size__1946__auto__,b__2301,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),size));
})()));

var G__2311 = (i__2300 + (1));
i__2300 = G__2311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2301),marubatsu$core$createTableOnGridContainer_$_iter__2298.call(null,cljs.core.chunk_rest.call(null,s__2299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2301),null);
}
} else {
var i = cljs.core.first.call(null,s__2299__$2);
var tr = marubatsu.core.createHtmlElementAsChild.call(null,tbl__258__auto__,"tr");
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__1947__auto__ = ((function (tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2306(s__2307){
return (new cljs.core.LazySeq(null,(function (){
var s__2307__$1 = s__2307;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__2307__$1);
if(temp__5720__auto____$1){
var s__2307__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2307__$2)){
var c__1945__auto__ = cljs.core.chunk_first.call(null,s__2307__$2);
var size__1946__auto__ = cljs.core.count.call(null,c__1945__auto__);
var b__2309 = cljs.core.chunk_buffer.call(null,size__1946__auto__);
if((function (){var i__2308 = (0);
while(true){
if((i__2308 < size__1946__auto__)){
var j = cljs.core._nth.call(null,c__1945__auto__,i__2308);
var td = marubatsu.core.createHtmlElementAsChild.call(null,tr,"td");
cljs.core.chunk_append.call(null,b__2309,((function (i__2308,td,j,c__1945__auto__,size__1946__auto__,b__2309,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (i__$1,j__$1,obj){
var idx = ((i__$1 * size) + j__$1);
var idx_state = cljs.core.get.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,board))),idx);
var str_state = cljs.core.get.call(null,marubatsu.core.STATES,parseInt(idx_state));
marubatsu.core.setAttribute.call(null,obj,"class",str_state);

marubatsu.core.setAttribute.call(null,obj,"id",["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));

return (obj.onclick = ((function (i__2308,idx,idx_state,str_state,td,j,c__1945__auto__,size__1946__auto__,b__2309,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (){
return marubatsu.core.cellClickHandler.call(null,idx,board,obj,log,win_pttrns,t_start,size);
});})(i__2308,idx,idx_state,str_state,td,j,c__1945__auto__,size__1946__auto__,b__2309,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
);
});})(i__2308,td,j,c__1945__auto__,size__1946__auto__,b__2309,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
.call(null,i,j,td));

var G__2312 = (i__2308 + (1));
i__2308 = G__2312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2309),marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2306.call(null,cljs.core.chunk_rest.call(null,s__2307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2309),null);
}
} else {
var j = cljs.core.first.call(null,s__2307__$2);
var td = marubatsu.core.createHtmlElementAsChild.call(null,tr,"td");
return cljs.core.cons.call(null,((function (td,j,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc){
return (function (i__$1,j__$1,obj){
var idx = ((i__$1 * size) + j__$1);
var idx_state = cljs.core.get.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,board))),idx);
var str_state = cljs.core.get.call(null,marubatsu.core.STATES,parseInt(idx_state));
marubatsu.core.setAttribute.call(null,obj,"class",str_state);

marubatsu.core.setAttribute.call(null,obj,"id",["td",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));

return (obj.onclick = (function (){
return marubatsu.core.cellClickHandler.call(null,idx,board,obj,log,win_pttrns,t_start,size);
}));
});})(td,j,s__2307__$2,temp__5720__auto____$1,tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
.call(null,i,j,td),marubatsu$core$createTableOnGridContainer_$_iter__2298_$_iter__2306.call(null,cljs.core.rest.call(null,s__2307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(tr,i,s__2299__$2,temp__5720__auto__,tbl__258__auto__,gc))
;
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),size));
})()),marubatsu$core$createTableOnGridContainer_$_iter__2298.call(null,cljs.core.rest.call(null,s__2299__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__1947__auto__.call(null,cljs.core.range.call(null,(0),size));
})());
})())].join(''));
} else {
return null;
}
});
marubatsu.core.rewind = (function marubatsu$core$rewind(board,log){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (b,p__2314){
var map__2315 = p__2314;
var map__2315__$1 = cljs.core.__destructure_map.call(null,map__2315);
var idx = cljs.core.get.call(null,map__2315__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var turn = cljs.core.get.call(null,map__2315__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
return cljs.core.cons.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__2313_SHARP_){
return ((cljs.core._EQ_.call(null,idx,new cljs.core.Keyword(null,"i","i",-1386841315).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__2313_SHARP_)))) && (cljs.core._EQ_.call(null,turn,new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__2313_SHARP_)))));
}),cljs.core.rest.call(null,cljs.core.first.call(null,b)))),b);
}),(new cljs.core.List(null,board,null,(1),null)),log));
});
marubatsu.core.fnc_undo = (function marubatsu$core$fnc_undo(board,log,all_board){
var n = (cljs.core.count.call(null,cljs.core.deref.call(null,log)) - (2));
if(((0) <= n)){
var log_undo_2316 = cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.deref.call(null,log)));
cljs.core.reset_BANG_.call(null,log,log_undo_2316);

cljs.core.reset_BANG_.call(null,board,marubatsu.core.rewind.call(null,all_board,log_undo_2316));

alert("[ undo ]");

if((cljs.core.count.call(null,cljs.core.deref.call(null,log)) <= (1))){
marubatsu.core.set_btn_disabled.call(null,true);
} else {
}
} else {
}

return cljs.core.first.call(null,cljs.core.deref.call(null,board));
});
marubatsu.core.undoButtonHandler = (function marubatsu$core$undoButtonHandler(board,log,all_board){
var board_redo = marubatsu.core.fnc_undo.call(null,board,log,all_board);
return marubatsu.core.print_board.call(null,board_redo);
});
marubatsu.core.first_hand_computer = (function marubatsu$core$first_hand_computer(board,log,turn_int,all_board){
var current = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p1__2317_SHARP_){
return cljs.core.first.call(null,p1__2317_SHARP_).call(null,new cljs.core.Keyword(null,"s","s",1705939918));
}),cljs.core._GT_,cljs.core.rest.call(null,all_board)));
return marubatsu.core.upd_status.call(null,board,log,turn_int,current);
});
marubatsu.core.common = (function marubatsu$core$common(size,board,log,turn,selected_board,msg){
var win_pttrns = marubatsu.core.gen_win_pattern.call(null,size);
marubatsu.core.set_btn_disabled.call(null,true);

marubatsu.core.createTableOnGridContainer.call(null,board,size,log,win_pttrns,turn);

if(cljs.core._EQ_.call(null,marubatsu.core.TURN_HUMAN,turn)){
var b_2318 = marubatsu.core.first_hand_computer.call(null,board,log,(turn + (1)),selected_board);
marubatsu.core.print_board.call(null,b_2318);
} else {
}

return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),marubatsu.core.conv_to_OX.call(null,(turn + (1)))].join(''));
});
marubatsu.core.reload = (function marubatsu$core$reload(board_perfect,board,log){
var turn = cljs.core.rand_int.call(null,(2));
var selected_board = cljs.core.get.call(null,board_perfect,turn);
cljs.core.reset_BANG_.call(null,board,selected_board);

cljs.core.reset_BANG_.call(null,log,cljs.core.PersistentVector.EMPTY);

(marubatsu.core.getHtmlElementById.call(null,"undo").onclick = (function (){
return marubatsu.core.undoButtonHandler.call(null,board,log,selected_board);
}));

return marubatsu.core.common.call(null,parseInt(marubatsu.core.getHtmlElementById.call(null,"size").value),board,log,turn,selected_board,"restart: ");
});
marubatsu.core.quitButtonHandler = (function marubatsu$core$quitButtonHandler(board,log,board_perfect){
return marubatsu.core.reload.call(null,board_perfect,board,log);
});
marubatsu.core.restartButtonHandler = (function marubatsu$core$restartButtonHandler(board,log,board_perfect){
return marubatsu.core.reload.call(null,board_perfect,board,log);
});
marubatsu.core.setupControlButtons = (function marubatsu$core$setupControlButtons(board,log,turn,board_perfect){
var btn1 = marubatsu.core.getHtmlElementById.call(null,"undo");
var btn2 = marubatsu.core.getHtmlElementById.call(null,"quit");
var btn3 = marubatsu.core.getHtmlElementById.call(null,"restart");
(btn1.onclick = (function (){
return marubatsu.core.undoButtonHandler.call(null,board,log,cljs.core.get.call(null,board_perfect,turn));
}));

(btn2.onclick = (function (){
return marubatsu.core.quitButtonHandler.call(null,board,log,board_perfect);
}));

return (btn3.onclick = (function (){
return marubatsu.core.restartButtonHandler.call(null,board,log,board_perfect);
}));
});
marubatsu.core.gen_board_perfect = (function marubatsu$core$gen_board_perfect(size){
var win_pttrns = marubatsu.core.gen_win_pattern.call(null,size);
var init_board = marubatsu.core.gen_board.call(null,size);
var board_lives = marubatsu.core.gen_board.call(null,size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [marubatsu.computer.think6.call(null,win_pttrns,init_board,board_lives,size,marubatsu.core.TURN_HUMAN),marubatsu.computer.think6.call(null,win_pttrns,init_board,board_lives,size,marubatsu.core.TURN_COMPUTER)], null);
});
marubatsu.core.initSizeMenuPulldown = (function marubatsu$core$initSizeMenuPulldown(board,log,fnc){
var pulldown = marubatsu.core.getHtmlElementById.call(null,"size");
var seq__2319_2323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5),(7)], null));
var chunk__2320_2324 = null;
var count__2321_2325 = (0);
var i__2322_2326 = (0);
while(true){
if((i__2322_2326 < count__2321_2325)){
var num_2327 = cljs.core._nth.call(null,chunk__2320_2324,i__2322_2326);
var opt_2328 = document.createElement("option");
(opt_2328.text = num_2327);

(opt_2328.value = num_2327);

pulldown.appendChild(opt_2328);


var G__2329 = seq__2319_2323;
var G__2330 = chunk__2320_2324;
var G__2331 = count__2321_2325;
var G__2332 = (i__2322_2326 + (1));
seq__2319_2323 = G__2329;
chunk__2320_2324 = G__2330;
count__2321_2325 = G__2331;
i__2322_2326 = G__2332;
continue;
} else {
var temp__5720__auto___2333 = cljs.core.seq.call(null,seq__2319_2323);
if(temp__5720__auto___2333){
var seq__2319_2334__$1 = temp__5720__auto___2333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2319_2334__$1)){
var c__1992__auto___2335 = cljs.core.chunk_first.call(null,seq__2319_2334__$1);
var G__2336 = cljs.core.chunk_rest.call(null,seq__2319_2334__$1);
var G__2337 = c__1992__auto___2335;
var G__2338 = cljs.core.count.call(null,c__1992__auto___2335);
var G__2339 = (0);
seq__2319_2323 = G__2336;
chunk__2320_2324 = G__2337;
count__2321_2325 = G__2338;
i__2322_2326 = G__2339;
continue;
} else {
var num_2340 = cljs.core.first.call(null,seq__2319_2334__$1);
var opt_2341 = document.createElement("option");
(opt_2341.text = num_2340);

(opt_2341.value = num_2340);

pulldown.appendChild(opt_2341);


var G__2342 = cljs.core.next.call(null,seq__2319_2334__$1);
var G__2343 = null;
var G__2344 = (0);
var G__2345 = (0);
seq__2319_2323 = G__2342;
chunk__2320_2324 = G__2343;
count__2321_2325 = G__2344;
i__2322_2326 = G__2345;
continue;
}
} else {
}
}
break;
}

return (pulldown.onchange = (function (){
return fnc.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(pulldown.value),"resize: ",false], null),marubatsu.core.gen_board_perfect.call(null,parseInt(pulldown.value)),board,log);
}));
});
marubatsu.core.set_controllers = (function marubatsu$core$set_controllers(p__2346,board_perfect,board,log){
var vec__2347 = p__2346;
var size = cljs.core.nth.call(null,vec__2347,(0),null);
var msg = cljs.core.nth.call(null,vec__2347,(1),null);
var flg = cljs.core.nth.call(null,vec__2347,(2),null);
var turn = cljs.core.rand_int.call(null,(2));
var selected_board = cljs.core.get.call(null,board_perfect,turn);
cljs.core.reset_BANG_.call(null,board,selected_board);

cljs.core.reset_BANG_.call(null,log,cljs.core.PersistentVector.EMPTY);

marubatsu.core.setupControlButtons.call(null,board,log,turn,board_perfect);

if(cljs.core.truth_(flg)){
marubatsu.core.initSizeMenuPulldown.call(null,board,log,marubatsu.core.set_controllers);
} else {
}

return marubatsu.core.common.call(null,size,board,log,turn,selected_board,msg);
});
var board_2350 = cljs.core.atom.call(null,null);
var log_2351 = cljs.core.atom.call(null,null);
var size_2352 = (3);
var board_perfect_2353 = marubatsu.core.gen_board_perfect.call(null,size_2352);
marubatsu.core.initialize = (function marubatsu$core$initialize(){
return marubatsu.core.set_controllers.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [size_2352,"start: ",true], null),board_perfect_2353,board_2350,log_2351);
});
(window.onload = (function (){
return marubatsu.core.initialize.call(null);
}));

//# sourceMappingURL=core.js.map
