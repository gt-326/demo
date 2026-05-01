// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__978){
var map__979 = p__978;
var map__979__$1 = cljs.core.__destructure_map.call(null,map__979);
var m = map__979__$1;
var n = cljs.core.get.call(null,map__979__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__1469__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__980_1008 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__981_1009 = null;
var count__982_1010 = (0);
var i__983_1011 = (0);
while(true){
if((i__983_1011 < count__982_1010)){
var f_1012 = cljs.core._nth.call(null,chunk__981_1009,i__983_1011);
cljs.core.println.call(null,"  ",f_1012);


var G__1013 = seq__980_1008;
var G__1014 = chunk__981_1009;
var G__1015 = count__982_1010;
var G__1016 = (i__983_1011 + (1));
seq__980_1008 = G__1013;
chunk__981_1009 = G__1014;
count__982_1010 = G__1015;
i__983_1011 = G__1016;
continue;
} else {
var temp__5720__auto___1017 = cljs.core.seq.call(null,seq__980_1008);
if(temp__5720__auto___1017){
var seq__980_1018__$1 = temp__5720__auto___1017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__980_1018__$1)){
var c__1992__auto___1019 = cljs.core.chunk_first.call(null,seq__980_1018__$1);
var G__1020 = cljs.core.chunk_rest.call(null,seq__980_1018__$1);
var G__1021 = c__1992__auto___1019;
var G__1022 = cljs.core.count.call(null,c__1992__auto___1019);
var G__1023 = (0);
seq__980_1008 = G__1020;
chunk__981_1009 = G__1021;
count__982_1010 = G__1022;
i__983_1011 = G__1023;
continue;
} else {
var f_1024 = cljs.core.first.call(null,seq__980_1018__$1);
cljs.core.println.call(null,"  ",f_1024);


var G__1025 = cljs.core.next.call(null,seq__980_1018__$1);
var G__1026 = null;
var G__1027 = (0);
var G__1028 = (0);
seq__980_1008 = G__1025;
chunk__981_1009 = G__1026;
count__982_1010 = G__1027;
i__983_1011 = G__1028;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1029 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__1469__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1029);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1029)))?cljs.core.second.call(null,arglists_1029):arglists_1029));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__984_1030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__985_1031 = null;
var count__986_1032 = (0);
var i__987_1033 = (0);
while(true){
if((i__987_1033 < count__986_1032)){
var vec__996_1034 = cljs.core._nth.call(null,chunk__985_1031,i__987_1033);
var name_1035 = cljs.core.nth.call(null,vec__996_1034,(0),null);
var map__999_1036 = cljs.core.nth.call(null,vec__996_1034,(1),null);
var map__999_1037__$1 = cljs.core.__destructure_map.call(null,map__999_1036);
var doc_1038 = cljs.core.get.call(null,map__999_1037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1039 = cljs.core.get.call(null,map__999_1037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1035);

cljs.core.println.call(null," ",arglists_1039);

if(cljs.core.truth_(doc_1038)){
cljs.core.println.call(null," ",doc_1038);
} else {
}


var G__1040 = seq__984_1030;
var G__1041 = chunk__985_1031;
var G__1042 = count__986_1032;
var G__1043 = (i__987_1033 + (1));
seq__984_1030 = G__1040;
chunk__985_1031 = G__1041;
count__986_1032 = G__1042;
i__987_1033 = G__1043;
continue;
} else {
var temp__5720__auto___1044 = cljs.core.seq.call(null,seq__984_1030);
if(temp__5720__auto___1044){
var seq__984_1045__$1 = temp__5720__auto___1044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__984_1045__$1)){
var c__1992__auto___1046 = cljs.core.chunk_first.call(null,seq__984_1045__$1);
var G__1047 = cljs.core.chunk_rest.call(null,seq__984_1045__$1);
var G__1048 = c__1992__auto___1046;
var G__1049 = cljs.core.count.call(null,c__1992__auto___1046);
var G__1050 = (0);
seq__984_1030 = G__1047;
chunk__985_1031 = G__1048;
count__986_1032 = G__1049;
i__987_1033 = G__1050;
continue;
} else {
var vec__1000_1051 = cljs.core.first.call(null,seq__984_1045__$1);
var name_1052 = cljs.core.nth.call(null,vec__1000_1051,(0),null);
var map__1003_1053 = cljs.core.nth.call(null,vec__1000_1051,(1),null);
var map__1003_1054__$1 = cljs.core.__destructure_map.call(null,map__1003_1053);
var doc_1055 = cljs.core.get.call(null,map__1003_1054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1056 = cljs.core.get.call(null,map__1003_1054__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1052);

cljs.core.println.call(null," ",arglists_1056);

if(cljs.core.truth_(doc_1055)){
cljs.core.println.call(null," ",doc_1055);
} else {
}


var G__1057 = cljs.core.next.call(null,seq__984_1045__$1);
var G__1058 = null;
var G__1059 = (0);
var G__1060 = (0);
seq__984_1030 = G__1057;
chunk__985_1031 = G__1058;
count__986_1032 = G__1059;
i__987_1033 = G__1060;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__1004 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1005 = null;
var count__1006 = (0);
var i__1007 = (0);
while(true){
if((i__1007 < count__1006)){
var role = cljs.core._nth.call(null,chunk__1005,i__1007);
var temp__5720__auto___1061__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1061__$1)){
var spec_1062 = temp__5720__auto___1061__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1062));
} else {
}


var G__1063 = seq__1004;
var G__1064 = chunk__1005;
var G__1065 = count__1006;
var G__1066 = (i__1007 + (1));
seq__1004 = G__1063;
chunk__1005 = G__1064;
count__1006 = G__1065;
i__1007 = G__1066;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__1004);
if(temp__5720__auto____$1){
var seq__1004__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1004__$1)){
var c__1992__auto__ = cljs.core.chunk_first.call(null,seq__1004__$1);
var G__1067 = cljs.core.chunk_rest.call(null,seq__1004__$1);
var G__1068 = c__1992__auto__;
var G__1069 = cljs.core.count.call(null,c__1992__auto__);
var G__1070 = (0);
seq__1004 = G__1067;
chunk__1005 = G__1068;
count__1006 = G__1069;
i__1007 = G__1070;
continue;
} else {
var role = cljs.core.first.call(null,seq__1004__$1);
var temp__5720__auto___1071__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___1071__$2)){
var spec_1072 = temp__5720__auto___1071__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1072));
} else {
}


var G__1073 = cljs.core.next.call(null,seq__1004__$1);
var G__1074 = null;
var G__1075 = (0);
var G__1076 = (0);
seq__1004 = G__1073;
chunk__1005 = G__1074;
count__1006 = G__1075;
i__1007 = G__1076;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map.call(null,o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1079 = datafied_throwable;
var map__1079__$1 = cljs.core.__destructure_map.call(null,map__1079);
var via = cljs.core.get.call(null,map__1079__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1079__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1079__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1080 = cljs.core.last.call(null,via);
var map__1080__$1 = cljs.core.__destructure_map.call(null,map__1080);
var type = cljs.core.get.call(null,map__1080__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1080__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1080__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1081 = data;
var map__1081__$1 = cljs.core.__destructure_map.call(null,map__1081);
var problems = cljs.core.get.call(null,map__1081__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1081__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1081__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1082 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1082__$1 = cljs.core.__destructure_map.call(null,map__1082);
var top_data = map__1082__$1;
var source = cljs.core.get.call(null,map__1082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1083 = phase;
var G__1083__$1 = (((G__1083 instanceof cljs.core.Keyword))?G__1083.fqn:null);
switch (G__1083__$1) {
case "read-source":
var map__1084 = data;
var map__1084__$1 = cljs.core.__destructure_map.call(null,map__1084);
var line = cljs.core.get.call(null,map__1084__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1084__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1085 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1085__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1085,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1085);
var G__1085__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1085__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1085__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1085__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1085__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1086 = top_data;
var G__1086__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1086,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1086);
var G__1086__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1086__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1086__$1);
var G__1086__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1086__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1086__$2);
var G__1086__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1086__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1086__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1086__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1086__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1087 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1087,(0),null);
var method = cljs.core.nth.call(null,vec__1087,(1),null);
var file = cljs.core.nth.call(null,vec__1087,(2),null);
var line = cljs.core.nth.call(null,vec__1087,(3),null);
var G__1090 = top_data;
var G__1090__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1090,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1090);
var G__1090__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1090__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1090__$1);
var G__1090__$3 = (cljs.core.truth_((function (){var and__1467__auto__ = source__$1;
if(cljs.core.truth_(and__1467__auto__)){
return method;
} else {
return and__1467__auto__;
}
})())?cljs.core.assoc.call(null,G__1090__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1090__$2);
var G__1090__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1090__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1090__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1090__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1090__$4;
}

break;
case "execution":
var vec__1091 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1091,(0),null);
var method = cljs.core.nth.call(null,vec__1091,(1),null);
var file = cljs.core.nth.call(null,vec__1091,(2),null);
var line = cljs.core.nth.call(null,vec__1091,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1078_SHARP_){
var or__1469__auto__ = (p1__1078_SHARP_ == null);
if(or__1469__auto__){
return or__1469__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1078_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__1469__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return line;
}
})();
var G__1094 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1094__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1094,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1094);
var G__1094__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1094__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1094__$1);
var G__1094__$3 = (cljs.core.truth_((function (){var or__1469__auto__ = fn;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
var and__1467__auto__ = source__$1;
if(cljs.core.truth_(and__1467__auto__)){
return method;
} else {
return and__1467__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1094__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__1469__auto__ = fn;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1094__$2);
var G__1094__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1094__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1094__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1094__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1094__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1083__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1098){
var map__1099 = p__1098;
var map__1099__$1 = cljs.core.__destructure_map.call(null,map__1099);
var triage_data = map__1099__$1;
var phase = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1099__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__1469__auto__ = source;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__1469__auto__ = line;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__1469__auto__ = class$;
if(cljs.core.truth_(or__1469__auto__)){
return or__1469__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1100 = phase;
var G__1100__$1 = (((G__1100 instanceof cljs.core.Keyword))?G__1100.fqn:null);
switch (G__1100__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__2114__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1101_1110 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1102_1111 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1103_1112 = true;
var _STAR_print_fn_STAR__temp_val__1104_1113 = (function (x__2115__auto__){
return sb__2114__auto__.append(x__2115__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1103_1112);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1104_1113);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1096_SHARP_){
return cljs.core.dissoc.call(null,p1__1096_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1102_1111);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1101_1110);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__2114__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__2114__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1105_1114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1106_1115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1107_1116 = true;
var _STAR_print_fn_STAR__temp_val__1108_1117 = (function (x__2115__auto__){
return sb__2114__auto__.append(x__2115__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1107_1116);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1108_1117);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1097_SHARP_){
return cljs.core.dissoc.call(null,p1__1097_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1106_1115);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1105_1114);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__2114__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1100__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
