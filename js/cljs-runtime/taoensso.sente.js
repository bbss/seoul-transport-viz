goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__102391 = cljs.core.count(x);
var fexpr__102390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__102390.cljs$core$IFn$_invoke$arity$1 ? fexpr__102390.cljs$core$IFn$_invoke$arity$1(G__102391) : fexpr__102390.call(null,G__102391));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__102393 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102393,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102393,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5735__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5735__auto__)){
var errs = temp__5735__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5733__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5733__auto__)){
var errs = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__102419 = x;
var map__102419__$1 = (((((!((map__102419 == null))))?(((((map__102419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102419):map__102419);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102419__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102419__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102419__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102419__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__102461 = x;
var map__102461__$1 = (((((!((map__102461 == null))))?(((((map__102461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102461):map__102461);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102461__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__102464){
var map__102465 = p__102464;
var map__102465__$1 = (((((!((map__102465 == null))))?(((((map__102465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102465):map__102465);
var ev_msg = map__102465__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102465__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102465__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__102468 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102468,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102468,(1),null);
var valid_event = vec__102468;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,1193257849);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__102475 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__102475.cljs$core$IFn$_invoke$arity$1 ? fexpr__102475.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__102475.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",203,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e102483){var t = e102483;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,-2031799514);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__102480 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102480,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102480,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",216,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-675269968);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__102495 = arguments.length;
switch (G__102495) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,857426725);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",232,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,670617777);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__102517_SHARP_){
if((!((p1__102517_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__102517_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__102517_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__102517_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__102517_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102519){if((e102519 instanceof Error)){
var e = e102519;
return e;
} else {
throw e102519;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",245,"((fn* [p1__102517#] (satisfies? interfaces/IPacker p1__102517#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ;  (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ;                    CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___103541 = arguments.length;
var i__4737__auto___103542 = (0);
while(true){
if((i__4737__auto___103542 < len__4736__auto___103541)){
args__4742__auto__.push((arguments[i__4737__auto___103542]));

var G__103543 = (i__4737__auto___103542 + (1));
i__4737__auto___103542 = G__103543;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__102527){
var vec__102528 = p__102527;
var map__102531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102528,(0),null);
var map__102531__$1 = (((((!((map__102531 == null))))?(((((map__102531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102531):map__102531);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4126__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__102531__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102535){if((e102535 instanceof Error)){
var e = e102535;
return e;
} else {
throw e102535;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102536){if((e102536 instanceof Error)){
var e = e102536;
return e;
} else {
throw e102536;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_103544 = (function (){try{if((function (p1__102524_SHARP_){
if((!((p1__102524_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__102524_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__102524_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__102524_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__102524_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102538){if((e102538 instanceof Error)){
var e_103544 = e102538;
return e_103544;
} else {
throw e102538;

}
}})();
if((e_103544 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",321,"((fn* [p1__102524#] (satisfies? interfaces/IServerChanAdapter p1__102524#)) web-server-ch-adapter)",web_server_ch_adapter,e_103544,null);
}

var max_ms_103545 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_103545)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_103545)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_103545], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__102544 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__102544) : user_id_fn.call(null,G__102544));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__103546 = null;
var G__103546__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__102548 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102548,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102548,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__103546__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__103546 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__103546__3.call(this,conn_type,uid,client_id);
case 4:
return G__103546__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__103546.cljs$core$IFn$_invoke$arity$3 = G__103546__3;
G__103546.cljs$core$IFn$_invoke$arity$4 = G__103546__4;
return G__103546;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102552){if((e102552 instanceof Error)){
var e = e102552;
return e;
} else {
throw e102552;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",365,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__102557){
var map__102558 = p__102557;
var map__102558__$1 = (((((!((map__102558 == null))))?(((((map__102558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102558):map__102558);
var old_m = map__102558__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102558__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102558__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102558__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__102563 = conn_type;
var G__102563__$1 = (((G__102563 instanceof cljs.core.Keyword))?G__102563.fqn:null);
switch (G__102563__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102563__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e102568){if((e102568 instanceof Error)){
var e = e102568;
return e;
} else {
throw e102568;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",382,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__102571){
var map__102572 = p__102571;
var map__102572__$1 = (((((!((map__102572 == null))))?(((((map__102572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102572):map__102572);
var old_m = map__102572__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102572__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102572__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102572__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__103548__delegate = function (user_id,ev,p__102577){
var vec__102578 = p__102577;
var map__102581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102578,(0),null);
var map__102581__$1 = (((((!((map__102581 == null))))?(((((map__102581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__102581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__102581):map__102581);
var opts = map__102581__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__102581__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_103549 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __103550 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_103549,ev], null);
}),null)),null,-1031989959);
var __103551__$1 = (cljs.core.truth_(uid_103549)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __103552__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_103553 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__103554 = (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__102583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_103549);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102583,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102583,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_103553)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_103549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_103549));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__102586 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102586,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102586,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",435,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",436,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",439,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,1289121903);

var G__102589 = conn_type;
var G__102589__$1 = (((G__102589 instanceof cljs.core.Keyword))?G__102589.fqn:null);
switch (G__102589__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_103549,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_103549,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_103549,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_103549,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__102589__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",448,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_103549], null);
}),null)),null,-803271458);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__102590_103556 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_103549], null))));
var chunk__102591_103557 = null;
var count__102592_103558 = (0);
var i__102593_103559 = (0);
while(true){
if((i__102593_103559 < count__102592_103558)){
var vec__102602_103560 = chunk__102591_103557.cljs$core$IIndexed$_nth$arity$2(null,i__102593_103559);
var _QMARK_sch_103561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102602_103560,(0),null);
var _udt_103562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102602_103560,(1),null);
var temp__5735__auto___103563 = _QMARK_sch_103561;
if(cljs.core.truth_(temp__5735__auto___103563)){
var sch_103564 = temp__5735__auto___103563;
taoensso.sente.interfaces.sch_close_BANG_(sch_103564);
} else {
}


var G__103565 = seq__102590_103556;
var G__103566 = chunk__102591_103557;
var G__103567 = count__102592_103558;
var G__103568 = (i__102593_103559 + (1));
seq__102590_103556 = G__103565;
chunk__102591_103557 = G__103566;
count__102592_103558 = G__103567;
i__102593_103559 = G__103568;
continue;
} else {
var temp__5735__auto___103569 = cljs.core.seq(seq__102590_103556);
if(temp__5735__auto___103569){
var seq__102590_103570__$1 = temp__5735__auto___103569;
if(cljs.core.chunked_seq_QMARK_(seq__102590_103570__$1)){
var c__4556__auto___103571 = cljs.core.chunk_first(seq__102590_103570__$1);
var G__103572 = cljs.core.chunk_rest(seq__102590_103570__$1);
var G__103573 = c__4556__auto___103571;
var G__103574 = cljs.core.count(c__4556__auto___103571);
var G__103575 = (0);
seq__102590_103556 = G__103572;
chunk__102591_103557 = G__103573;
count__102592_103558 = G__103574;
i__102593_103559 = G__103575;
continue;
} else {
var vec__102607_103576 = cljs.core.first(seq__102590_103570__$1);
var _QMARK_sch_103577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102607_103576,(0),null);
var _udt_103578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102607_103576,(1),null);
var temp__5735__auto___103579__$1 = _QMARK_sch_103577;
if(cljs.core.truth_(temp__5735__auto___103579__$1)){
var sch_103580 = temp__5735__auto___103579__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_103580);
} else {
}


var G__103581 = cljs.core.next(seq__102590_103570__$1);
var G__103582 = null;
var G__103583 = (0);
var G__103584 = (0);
seq__102590_103556 = G__103581;
chunk__102591_103557 = G__103582;
count__102592_103558 = G__103583;
i__102593_103559 = G__103584;
continue;
}
} else {
}
}
break;
}

var seq__102610_103585 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_103549], null))));
var chunk__102611_103586 = null;
var count__102612_103587 = (0);
var i__102613_103588 = (0);
while(true){
if((i__102613_103588 < count__102612_103587)){
var vec__102623_103589 = chunk__102611_103586.cljs$core$IIndexed$_nth$arity$2(null,i__102613_103588);
var _QMARK_sch_103590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102623_103589,(0),null);
var _udt_103591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102623_103589,(1),null);
var temp__5735__auto___103592 = _QMARK_sch_103590;
if(cljs.core.truth_(temp__5735__auto___103592)){
var sch_103593 = temp__5735__auto___103592;
taoensso.sente.interfaces.sch_close_BANG_(sch_103593);
} else {
}


var G__103594 = seq__102610_103585;
var G__103595 = chunk__102611_103586;
var G__103596 = count__102612_103587;
var G__103597 = (i__102613_103588 + (1));
seq__102610_103585 = G__103594;
chunk__102611_103586 = G__103595;
count__102612_103587 = G__103596;
i__102613_103588 = G__103597;
continue;
} else {
var temp__5735__auto___103598 = cljs.core.seq(seq__102610_103585);
if(temp__5735__auto___103598){
var seq__102610_103599__$1 = temp__5735__auto___103598;
if(cljs.core.chunked_seq_QMARK_(seq__102610_103599__$1)){
var c__4556__auto___103600 = cljs.core.chunk_first(seq__102610_103599__$1);
var G__103601 = cljs.core.chunk_rest(seq__102610_103599__$1);
var G__103602 = c__4556__auto___103600;
var G__103603 = cljs.core.count(c__4556__auto___103600);
var G__103604 = (0);
seq__102610_103585 = G__103601;
chunk__102611_103586 = G__103602;
count__102612_103587 = G__103603;
i__102613_103588 = G__103604;
continue;
} else {
var vec__102629_103605 = cljs.core.first(seq__102610_103599__$1);
var _QMARK_sch_103606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102629_103605,(0),null);
var _udt_103607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102629_103605,(1),null);
var temp__5735__auto___103608__$1 = _QMARK_sch_103606;
if(cljs.core.truth_(temp__5735__auto___103608__$1)){
var sch_103609 = temp__5735__auto___103608__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_103609);
} else {
}


var G__103610 = cljs.core.next(seq__102610_103599__$1);
var G__103611 = null;
var G__103612 = (0);
var G__103613 = (0);
seq__102610_103585 = G__103610;
chunk__102611_103586 = G__103611;
count__102612_103587 = G__103612;
i__102613_103588 = G__103613;
continue;
}
} else {
}
}
break;
}
} else {
var seq__102632_103614 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__102633_103615 = null;
var count__102634_103616 = (0);
var i__102635_103617 = (0);
while(true){
if((i__102635_103617 < count__102634_103616)){
var conn_type_103618 = chunk__102633_103615.cljs$core$IIndexed$_nth$arity$2(null,i__102635_103617);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_103618,uid_103549], null),((function (seq__102632_103614,chunk__102633_103615,count__102634_103616,i__102635_103617,conn_type_103618,uid_103549,__103550,__103551__$1,__103552__$2,ev_uuid_103553,flush_buffer_BANG__103554,vec__102578,map__102581,map__102581__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__102528,map__102531,map__102531__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_103553])], null);
} else {
var vec__102646 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102646,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102646,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_103553)], null);
}
});})(seq__102632_103614,chunk__102633_103615,count__102634_103616,i__102635_103617,conn_type_103618,uid_103549,__103550,__103551__$1,__103552__$2,ev_uuid_103553,flush_buffer_BANG__103554,vec__102578,map__102581,map__102581__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__102528,map__102531,map__102531__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__103619 = seq__102632_103614;
var G__103620 = chunk__102633_103615;
var G__103621 = count__102634_103616;
var G__103622 = (i__102635_103617 + (1));
seq__102632_103614 = G__103619;
chunk__102633_103615 = G__103620;
count__102634_103616 = G__103621;
i__102635_103617 = G__103622;
continue;
} else {
var temp__5735__auto___103623 = cljs.core.seq(seq__102632_103614);
if(temp__5735__auto___103623){
var seq__102632_103624__$1 = temp__5735__auto___103623;
if(cljs.core.chunked_seq_QMARK_(seq__102632_103624__$1)){
var c__4556__auto___103625 = cljs.core.chunk_first(seq__102632_103624__$1);
var G__103626 = cljs.core.chunk_rest(seq__102632_103624__$1);
var G__103627 = c__4556__auto___103625;
var G__103628 = cljs.core.count(c__4556__auto___103625);
var G__103629 = (0);
seq__102632_103614 = G__103626;
chunk__102633_103615 = G__103627;
count__102634_103616 = G__103628;
i__102635_103617 = G__103629;
continue;
} else {
var conn_type_103630 = cljs.core.first(seq__102632_103624__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_103630,uid_103549], null),((function (seq__102632_103614,chunk__102633_103615,count__102634_103616,i__102635_103617,conn_type_103630,seq__102632_103624__$1,temp__5735__auto___103623,uid_103549,__103550,__103551__$1,__103552__$2,ev_uuid_103553,flush_buffer_BANG__103554,vec__102578,map__102581,map__102581__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__102528,map__102531,map__102531__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_103553])], null);
} else {
var vec__102649 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102649,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102649,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_103553)], null);
}
});})(seq__102632_103614,chunk__102633_103615,count__102634_103616,i__102635_103617,conn_type_103630,seq__102632_103624__$1,temp__5735__auto___103623,uid_103549,__103550,__103551__$1,__103552__$2,ev_uuid_103553,flush_buffer_BANG__103554,vec__102578,map__102581,map__102581__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__102528,map__102531,map__102531__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__103631 = cljs.core.next(seq__102632_103624__$1);
var G__103632 = null;
var G__103633 = (0);
var G__103634 = (0);
seq__102632_103614 = G__103631;
chunk__102633_103615 = G__103632;
count__102634_103616 = G__103633;
i__102635_103617 = G__103634;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_103635 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_103636 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__83165__auto___103637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102656){
var state_val_102657 = (state_102656[(1)]);
if((state_val_102657 === (1))){
var state_102656__$1 = state_102656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102656__$1,(2),ws_timeout_103635);
} else {
if((state_val_102657 === (2))){
var inst_102653 = (state_102656[(2)]);
var inst_102654 = flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_102656__$1 = (function (){var statearr_102659 = state_102656;
(statearr_102659[(7)] = inst_102653);

return statearr_102659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_102656__$1,inst_102654);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102660 = [null,null,null,null,null,null,null,null];
(statearr_102660[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102660[(1)] = (1));

return statearr_102660;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102656){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102656);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102661){var ex__81417__auto__ = e102661;
var statearr_102662_103638 = state_102656;
(statearr_102662_103638[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102656[(4)]))){
var statearr_102663_103639 = state_102656;
(statearr_102663_103639[(1)] = cljs.core.first((state_102656[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103640 = state_102656;
state_102656 = G__103640;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102656){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102666 = f__83166__auto__();
(statearr_102666[(6)] = c__83165__auto___103637);

return statearr_102666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


var c__83165__auto___103641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102672){
var state_val_102673 = (state_102672[(1)]);
if((state_val_102673 === (1))){
var state_102672__$1 = state_102672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102672__$1,(2),ajax_timeout_103636);
} else {
if((state_val_102673 === (2))){
var inst_102669 = (state_102672[(2)]);
var inst_102670 = flush_buffer_BANG__103554(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_102672__$1 = (function (){var statearr_102676 = state_102672;
(statearr_102676[(7)] = inst_102669);

return statearr_102676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_102672__$1,inst_102670);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102677 = [null,null,null,null,null,null,null,null];
(statearr_102677[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102677[(1)] = (1));

return statearr_102677;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102672){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102672);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102678){var ex__81417__auto__ = e102678;
var statearr_102679_103642 = state_102672;
(statearr_102679_103642[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102672[(4)]))){
var statearr_102680_103643 = state_102672;
(statearr_102680_103643[(1)] = cljs.core.first((state_102672[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103644 = state_102672;
state_102672 = G__103644;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102672){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102682 = f__83166__auto__();
(statearr_102682[(6)] = c__83165__auto___103641);

return statearr_102682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

}
}

return null;
};
var G__103548 = function (user_id,ev,var_args){
var p__102577 = null;
if (arguments.length > 2) {
var G__103645__i = 0, G__103645__a = new Array(arguments.length -  2);
while (G__103645__i < G__103645__a.length) {G__103645__a[G__103645__i] = arguments[G__103645__i + 2]; ++G__103645__i;}
  p__102577 = new cljs.core.IndexedSeq(G__103645__a,0,null);
} 
return G__103548__delegate.call(this,user_id,ev,p__102577);};
G__103548.cljs$lang$maxFixedArity = 2;
G__103548.cljs$lang$applyTo = (function (arglist__103646){
var user_id = cljs.core.first(arglist__103646);
arglist__103646 = cljs.core.next(arglist__103646);
var ev = cljs.core.first(arglist__103646);
var p__102577 = cljs.core.rest(arglist__103646);
return G__103548__delegate(user_id,ev,p__102577);
});
G__103548.cljs$core$IFn$_invoke$arity$variadic = G__103548__delegate;
return G__103548;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5733__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5733__auto__)){
var reference_csrf_token = temp__5733__auto__;
var csrf_token_from_client = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__102686 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102686,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102686,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",542,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-1907244823);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102697){
var state_val_102698 = (state_102697[(1)]);
if((state_val_102698 === (1))){
var inst_102692 = cljs.core.async.timeout(ms);
var state_102697__$1 = state_102697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102697__$1,(2),inst_102692);
} else {
if((state_val_102698 === (2))){
var inst_102694 = (state_102697[(2)]);
var inst_102695 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_102697__$1 = (function (){var statearr_102701 = state_102697;
(statearr_102701[(7)] = inst_102694);

return statearr_102701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_102697__$1,inst_102695);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102702 = [null,null,null,null,null,null,null,null];
(statearr_102702[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102702[(1)] = (1));

return statearr_102702;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102697){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102697);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102706){var ex__81417__auto__ = e102706;
var statearr_102707_103650 = state_102697;
(statearr_102707_103650[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102697[(4)]))){
var statearr_102708_103654 = state_102697;
(statearr_102708_103654[(1)] = cljs.core.first((state_102697[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103655 = state_102697;
state_102697 = G__103655;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102697){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102709 = f__83166__auto__();
(statearr_102709[(6)] = c__83165__auto__);

return statearr_102709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));

}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,-344560090);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",599,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,570175681);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",612,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,18726853);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5735__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102749){
var state_val_102750 = (state_102749[(1)]);
if((state_val_102750 === (7))){
var inst_102745 = (state_102749[(2)]);
var state_102749__$1 = state_102749;
var statearr_102752_103670 = state_102749__$1;
(statearr_102752_103670[(2)] = inst_102745);

(statearr_102752_103670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (1))){
var inst_102713 = udt_open;
var inst_102714 = inst_102713;
var state_102749__$1 = (function (){var statearr_102753 = state_102749;
(statearr_102753[(7)] = inst_102714);

return statearr_102753;
})();
var statearr_102754_103672 = state_102749__$1;
(statearr_102754_103672[(2)] = null);

(statearr_102754_103672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (4))){
var inst_102723 = (state_102749[(8)]);
var inst_102718 = (state_102749[(2)]);
var inst_102719 = cljs.core.deref(conns_);
var inst_102720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102721 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_102722 = (new cljs.core.PersistentVector(null,3,(5),inst_102720,inst_102721,null));
var inst_102723__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_102719,inst_102722);
var state_102749__$1 = (function (){var statearr_102755 = state_102749;
(statearr_102755[(9)] = inst_102718);

(statearr_102755[(8)] = inst_102723__$1);

return statearr_102755;
})();
if(cljs.core.truth_(inst_102723__$1)){
var statearr_102756_103673 = state_102749__$1;
(statearr_102756_103673[(1)] = (5));

} else {
var statearr_102757_103674 = state_102749__$1;
(statearr_102757_103674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (13))){
var inst_102729 = (state_102749[(10)]);
var inst_102738 = (state_102749[(2)]);
var inst_102714 = inst_102729;
var state_102749__$1 = (function (){var statearr_102758 = state_102749;
(statearr_102758[(7)] = inst_102714);

(statearr_102758[(11)] = inst_102738);

return statearr_102758;
})();
var statearr_102759_103677 = state_102749__$1;
(statearr_102759_103677[(2)] = null);

(statearr_102759_103677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (6))){
var state_102749__$1 = state_102749;
var statearr_102760_103679 = state_102749__$1;
(statearr_102760_103679[(2)] = null);

(statearr_102760_103679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (3))){
var inst_102747 = (state_102749[(2)]);
var state_102749__$1 = state_102749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_102749__$1,inst_102747);
} else {
if((state_val_102750 === (12))){
var state_102749__$1 = state_102749;
var statearr_102761_103682 = state_102749__$1;
(statearr_102761_103682[(2)] = null);

(statearr_102761_103682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (2))){
var inst_102716 = cljs.core.async.timeout(ms);
var state_102749__$1 = state_102749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102749__$1,(4),inst_102716);
} else {
if((state_val_102750 === (11))){
var inst_102734 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_102735 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_102734);
var state_102749__$1 = state_102749;
var statearr_102762_103684 = state_102749__$1;
(statearr_102762_103684[(2)] = inst_102735);

(statearr_102762_103684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (9))){
var state_102749__$1 = state_102749;
var statearr_102763_103685 = state_102749__$1;
(statearr_102763_103685[(2)] = null);

(statearr_102763_103685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (5))){
var inst_102723 = (state_102749[(8)]);
var inst_102728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102723,(0),null);
var inst_102729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102723,(1),null);
var inst_102730 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_102749__$1 = (function (){var statearr_102764 = state_102749;
(statearr_102764[(10)] = inst_102729);

(statearr_102764[(12)] = inst_102728);

return statearr_102764;
})();
if(cljs.core.truth_(inst_102730)){
var statearr_102765_103689 = state_102749__$1;
(statearr_102765_103689[(1)] = (8));

} else {
var statearr_102766_103690 = state_102749__$1;
(statearr_102766_103690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (10))){
var inst_102742 = (state_102749[(2)]);
var state_102749__$1 = state_102749;
var statearr_102767_103691 = state_102749__$1;
(statearr_102767_103691[(2)] = inst_102742);

(statearr_102767_103691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102750 === (8))){
var inst_102729 = (state_102749[(10)]);
var inst_102714 = (state_102749[(7)]);
var inst_102732 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_102729,inst_102714);
var state_102749__$1 = state_102749;
if(inst_102732){
var statearr_102768_103692 = state_102749__$1;
(statearr_102768_103692[(1)] = (11));

} else {
var statearr_102769_103693 = state_102749__$1;
(statearr_102769_103693[(1)] = (12));

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
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102770 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102770[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102770[(1)] = (1));

return statearr_102770;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102749){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102749);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102771){var ex__81417__auto__ = e102771;
var statearr_102772_103697 = state_102749;
(statearr_102772_103697[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102749[(4)]))){
var statearr_102773_103698 = state_102749;
(statearr_102773_103698[(1)] = cljs.core.first((state_102749[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103699 = state_102749;
state_102749 = G__103699;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102749){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102774 = f__83166__auto__();
(statearr_102774[(6)] = c__83165__auto__);

return statearr_102774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",641,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-575331357);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102804){
var state_val_102805 = (state_102804[(1)]);
if((state_val_102805 === (1))){
var inst_102779 = cljs.core.async.timeout(ms);
var state_102804__$1 = state_102804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102804__$1,(2),inst_102779);
} else {
if((state_val_102805 === (2))){
var inst_102786 = (state_102804[(7)]);
var inst_102781 = (state_102804[(2)]);
var inst_102782 = cljs.core.deref(conns_);
var inst_102783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102784 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_102785 = (new cljs.core.PersistentVector(null,3,(5),inst_102783,inst_102784,null));
var inst_102786__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_102782,inst_102785);
var state_102804__$1 = (function (){var statearr_102807 = state_102804;
(statearr_102807[(8)] = inst_102781);

(statearr_102807[(7)] = inst_102786__$1);

return statearr_102807;
})();
if(cljs.core.truth_(inst_102786__$1)){
var statearr_102808_103707 = state_102804__$1;
(statearr_102808_103707[(1)] = (3));

} else {
var statearr_102809_103708 = state_102804__$1;
(statearr_102809_103708[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102805 === (3))){
var inst_102786 = (state_102804[(7)]);
var inst_102791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102786,(0),null);
var inst_102792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102786,(1),null);
var inst_102793 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_102792,udt_open);
var state_102804__$1 = (function (){var statearr_102811 = state_102804;
(statearr_102811[(9)] = inst_102791);

return statearr_102811;
})();
if(inst_102793){
var statearr_102812_103709 = state_102804__$1;
(statearr_102812_103709[(1)] = (6));

} else {
var statearr_102813_103710 = state_102804__$1;
(statearr_102813_103710[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102805 === (4))){
var state_102804__$1 = state_102804;
var statearr_102814_103711 = state_102804__$1;
(statearr_102814_103711[(2)] = null);

(statearr_102814_103711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102805 === (5))){
var inst_102802 = (state_102804[(2)]);
var state_102804__$1 = state_102804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_102804__$1,inst_102802);
} else {
if((state_val_102805 === (6))){
var inst_102795 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_102796 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_102795);
var state_102804__$1 = state_102804;
var statearr_102815_103712 = state_102804__$1;
(statearr_102815_103712[(2)] = inst_102796);

(statearr_102815_103712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102805 === (7))){
var state_102804__$1 = state_102804;
var statearr_102817_103714 = state_102804__$1;
(statearr_102817_103714[(2)] = null);

(statearr_102817_103714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102805 === (8))){
var inst_102799 = (state_102804[(2)]);
var state_102804__$1 = state_102804;
var statearr_102818_103715 = state_102804__$1;
(statearr_102818_103715[(2)] = inst_102799);

(statearr_102818_103715[(1)] = (5));


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
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102820 = [null,null,null,null,null,null,null,null,null,null];
(statearr_102820[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102820[(1)] = (1));

return statearr_102820;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102804){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102804);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102821){var ex__81417__auto__ = e102821;
var statearr_102822_103719 = state_102804;
(statearr_102822_103719[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102804[(4)]))){
var statearr_102823_103720 = state_102804;
(statearr_102823_103720[(1)] = cljs.core.first((state_102804[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103721 = state_102804;
state_102804 = G__103721;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102804){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102825 = f__83166__auto__();
(statearr_102825[(6)] = c__83165__auto__);

return statearr_102825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__102828 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102828,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102828,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",671,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,-243566346);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",680,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,934366210);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_102888){
var state_val_102889 = (state_102888[(1)]);
if((state_val_102889 === (7))){
var state_102888__$1 = state_102888;
var statearr_102890_103739 = state_102888__$1;
(statearr_102890_103739[(2)] = null);

(statearr_102890_103739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (1))){
var inst_102834 = cljs.core.async.timeout((5000));
var state_102888__$1 = state_102888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_102888__$1,(2),inst_102834);
} else {
if((state_val_102889 === (4))){
var state_102888__$1 = state_102888;
var statearr_102892_103740 = state_102888__$1;
(statearr_102892_103740[(2)] = null);

(statearr_102892_103740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (13))){
var state_102888__$1 = state_102888;
var statearr_102893_103741 = state_102888__$1;
(statearr_102893_103741[(2)] = null);

(statearr_102893_103741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (6))){
var inst_102846 = (state_102888[(7)]);
var inst_102862 = (state_102888[(8)]);
var inst_102844 = (state_102888[(9)]);
var inst_102845 = (state_102888[(10)]);
var inst_102857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102858 = [conn_type,uid,client_id];
var inst_102859 = (new cljs.core.PersistentVector(null,3,(5),inst_102857,inst_102858,null));
var inst_102861 = (function (){var vec__102837 = inst_102844;
var __QMARK_sch = inst_102845;
var udt_t1 = inst_102846;
return (function (p__102860){
var vec__102894 = p__102860;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102894,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102894,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
})();
var inst_102862__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_102859,inst_102861);
var state_102888__$1 = (function (){var statearr_102897 = state_102888;
(statearr_102897[(8)] = inst_102862__$1);

return statearr_102897;
})();
if(cljs.core.truth_(inst_102862__$1)){
var statearr_102900_103746 = state_102888__$1;
(statearr_102900_103746[(1)] = (9));

} else {
var statearr_102901_103747 = state_102888__$1;
(statearr_102901_103747[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (3))){
var inst_102846 = (state_102888[(7)]);
var inst_102844 = (state_102888[(9)]);
var inst_102845 = (state_102888[(10)]);
var inst_102849 = (function (){var vec__102837 = inst_102844;
var __QMARK_sch = inst_102845;
var udt_t1 = inst_102846;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_102850 = (new cljs.core.Delay(inst_102849,null));
var inst_102851 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",694,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_102850,null,-1166504600);
var state_102888__$1 = state_102888;
var statearr_102903_103748 = state_102888__$1;
(statearr_102903_103748[(2)] = inst_102851);

(statearr_102903_103748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (12))){
var inst_102874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102875 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_102876 = (new cljs.core.PersistentVector(null,2,(5),inst_102874,inst_102875,null));
var inst_102877 = receive_event_msg_BANG_(inst_102876);
var state_102888__$1 = state_102888;
var statearr_102904_103749 = state_102888__$1;
(statearr_102904_103749[(2)] = inst_102877);

(statearr_102904_103749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (2))){
var inst_102844 = (state_102888[(9)]);
var inst_102836 = (state_102888[(2)]);
var inst_102840 = cljs.core.deref(conns_);
var inst_102841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102842 = [conn_type,uid,client_id];
var inst_102843 = (new cljs.core.PersistentVector(null,3,(5),inst_102841,inst_102842,null));
var inst_102844__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_102840,inst_102843);
var inst_102845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102844__$1,(0),null);
var inst_102846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_102844__$1,(1),null);
var inst_102847 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_102888__$1 = (function (){var statearr_102908 = state_102888;
(statearr_102908[(11)] = inst_102836);

(statearr_102908[(7)] = inst_102846);

(statearr_102908[(9)] = inst_102844__$1);

(statearr_102908[(10)] = inst_102845);

return statearr_102908;
})();
if(cljs.core.truth_(inst_102847)){
var statearr_102910_103757 = state_102888__$1;
(statearr_102910_103757[(1)] = (3));

} else {
var statearr_102912_103758 = state_102888__$1;
(statearr_102912_103758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (11))){
var inst_102883 = (state_102888[(2)]);
var state_102888__$1 = state_102888;
var statearr_102913_103759 = state_102888__$1;
(statearr_102913_103759[(2)] = inst_102883);

(statearr_102913_103759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (9))){
var inst_102846 = (state_102888[(7)]);
var inst_102862 = (state_102888[(8)]);
var inst_102844 = (state_102888[(9)]);
var inst_102845 = (state_102888[(10)]);
var inst_102864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102865 = [conn_type,uid];
var inst_102866 = (new cljs.core.PersistentVector(null,2,(5),inst_102864,inst_102865,null));
var inst_102869 = (function (){var vec__102837 = inst_102844;
var __QMARK_sch = inst_102845;
var udt_t1 = inst_102846;
var disconnect_QMARK_ = inst_102862;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_102870 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_102866,inst_102869);
var inst_102871 = upd_connected_uid_BANG_(uid);
var state_102888__$1 = (function (){var statearr_102914 = state_102888;
(statearr_102914[(12)] = inst_102870);

return statearr_102914;
})();
if(cljs.core.truth_(inst_102871)){
var statearr_102915_103763 = state_102888__$1;
(statearr_102915_103763[(1)] = (12));

} else {
var statearr_102916_103764 = state_102888__$1;
(statearr_102916_103764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (5))){
var inst_102846 = (state_102888[(7)]);
var inst_102854 = (state_102888[(2)]);
var inst_102855 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_102846,udt_close);
var state_102888__$1 = (function (){var statearr_102918 = state_102888;
(statearr_102918[(13)] = inst_102854);

return statearr_102918;
})();
if(inst_102855){
var statearr_102919_103765 = state_102888__$1;
(statearr_102919_103765[(1)] = (6));

} else {
var statearr_102920_103766 = state_102888__$1;
(statearr_102920_103766[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (14))){
var inst_102880 = (state_102888[(2)]);
var state_102888__$1 = state_102888;
var statearr_102921_103767 = state_102888__$1;
(statearr_102921_103767[(2)] = inst_102880);

(statearr_102921_103767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (10))){
var state_102888__$1 = state_102888;
var statearr_102922_103768 = state_102888__$1;
(statearr_102922_103768[(2)] = null);

(statearr_102922_103768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_102889 === (8))){
var inst_102886 = (state_102888[(2)]);
var state_102888__$1 = state_102888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_102888__$1,inst_102886);
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
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_102923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_102923[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_102923[(1)] = (1));

return statearr_102923;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_102888){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_102888);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e102925){var ex__81417__auto__ = e102925;
var statearr_102926_103774 = state_102888;
(statearr_102926_103774[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_102888[(4)]))){
var statearr_102927_103776 = state_102888;
(statearr_102927_103776[(1)] = cljs.core.first((state_102888[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103778 = state_102888;
state_102888 = G__103778;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_102888){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_102888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_102928 = f__83166__auto__();
(statearr_102928[(6)] = c__83165__auto__);

return statearr_102928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",716,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,1247499923);
})], null));

}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq102525){
var G__102526 = cljs.core.first(seq102525);
var seq102525__$1 = cljs.core.next(seq102525);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__102526,seq102525__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",722,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1528183345);

var seq__102932 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__102933 = null;
var count__102934 = (0);
var i__102935 = (0);
while(true){
if((i__102935 < count__102934)){
var vec__102949 = chunk__102933.cljs$core$IIndexed$_nth$arity$2(null,i__102935);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102949,(0),null);
var vec__102952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102949,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102952,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102952,(1),null);
var temp__5735__auto___103781 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___103781)){
var sch_103782 = temp__5735__auto___103781;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_103782,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__103783 = seq__102932;
var G__103784 = chunk__102933;
var G__103785 = count__102934;
var G__103786 = (i__102935 + (1));
seq__102932 = G__103783;
chunk__102933 = G__103784;
count__102934 = G__103785;
i__102935 = G__103786;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__102932);
if(temp__5735__auto__){
var seq__102932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__102932__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__102932__$1);
var G__103789 = cljs.core.chunk_rest(seq__102932__$1);
var G__103790 = c__4556__auto__;
var G__103791 = cljs.core.count(c__4556__auto__);
var G__103792 = (0);
seq__102932 = G__103789;
chunk__102933 = G__103790;
count__102934 = G__103791;
i__102935 = G__103792;
continue;
} else {
var vec__102963 = cljs.core.first(seq__102932__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102963,(0),null);
var vec__102966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102963,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102966,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102966,(1),null);
var temp__5735__auto___103794__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___103794__$1)){
var sch_103795 = temp__5735__auto___103794__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_103795,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__103798 = cljs.core.next(seq__102932__$1);
var G__103799 = null;
var G__103800 = (0);
var G__103801 = (0);
seq__102932 = G__103798;
chunk__102933 = G__103799;
count__102934 = G__103800;
i__102935 = G__103801;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",732,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,695116919);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__83165__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_103024){
var state_val_103025 = (state_103024[(1)]);
if((state_val_103025 === (7))){
var inst_102985 = (state_103024[(7)]);
var inst_102976 = (state_103024[(8)]);
var inst_102977 = (state_103024[(9)]);
var inst_102996 = (function (){var n = inst_102976;
var client_ids_satisfied = inst_102977;
var _QMARK_pulled = inst_102985;
return (function (s,client_id,p__102995){
var vec__103026 = p__102995;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103026,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103026,(1),null);
var sent_QMARK_ = (function (){var temp__5735__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto__)){
var sch = temp__5735__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_102997 = cljs.core.PersistentHashSet.EMPTY;
var inst_102998 = cljs.core.reduce_kv(inst_102996,inst_102997,inst_102985);
var state_103024__$1 = state_103024;
var statearr_103029_103807 = state_103024__$1;
(statearr_103029_103807[(2)] = inst_102998);

(statearr_103029_103807[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (1))){
var inst_102975 = cljs.core.PersistentHashSet.EMPTY;
var inst_102976 = (0);
var inst_102977 = inst_102975;
var state_103024__$1 = (function (){var statearr_103031 = state_103024;
(statearr_103031[(8)] = inst_102976);

(statearr_103031[(9)] = inst_102977);

return statearr_103031;
})();
var statearr_103032_103811 = state_103024__$1;
(statearr_103032_103811[(2)] = null);

(statearr_103032_103811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (4))){
var state_103024__$1 = state_103024;
var statearr_103033_103812 = state_103024__$1;
(statearr_103033_103812[(2)] = true);

(statearr_103033_103812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (15))){
var inst_103017 = (state_103024[(2)]);
var state_103024__$1 = state_103024;
var statearr_103041_103813 = state_103024__$1;
(statearr_103041_103813[(2)] = inst_103017);

(statearr_103041_103813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (13))){
var inst_103003 = (state_103024[(10)]);
var inst_103008 = cljs.core.rand_int(inst_103003);
var inst_103009 = (inst_103003 + inst_103008);
var inst_103010 = cljs.core.async.timeout(inst_103009);
var state_103024__$1 = state_103024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103024__$1,(16),inst_103010);
} else {
if((state_val_103025 === (6))){
var inst_102985 = (state_103024[(7)]);
var inst_102993 = (state_103024[(2)]);
var state_103024__$1 = (function (){var statearr_103048 = state_103024;
(statearr_103048[(11)] = inst_102993);

return statearr_103048;
})();
if(cljs.core.truth_(inst_102985)){
var statearr_103054_103818 = state_103024__$1;
(statearr_103054_103818[(1)] = (7));

} else {
var statearr_103055_103820 = state_103024__$1;
(statearr_103055_103820[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (3))){
var inst_103022 = (state_103024[(2)]);
var state_103024__$1 = state_103024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103024__$1,inst_103022);
} else {
if((state_val_103025 === (12))){
var inst_103020 = (state_103024[(2)]);
var state_103024__$1 = state_103024;
var statearr_103063_103824 = state_103024__$1;
(statearr_103063_103824[(2)] = inst_103020);

(statearr_103063_103824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (2))){
var inst_102985 = (state_103024[(7)]);
var inst_102976 = (state_103024[(8)]);
var inst_102977 = (state_103024[(9)]);
var inst_102979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_102981 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_102982 = (new cljs.core.PersistentVector(null,2,(5),inst_102979,inst_102981,null));
var inst_102984 = (function (){var n = inst_102976;
var client_ids_satisfied = inst_102977;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__103065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103065,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103065,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_102985__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_102982,inst_102984);
var inst_102987 = (function (){var n = inst_102976;
var client_ids_satisfied = inst_102977;
var _QMARK_pulled = inst_102985__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_102988 = inst_102987(inst_102985__$1);
var state_103024__$1 = (function (){var statearr_103068 = state_103024;
(statearr_103068[(7)] = inst_102985__$1);

return statearr_103068;
})();
if(cljs.core.truth_(inst_102988)){
var statearr_103069_103830 = state_103024__$1;
(statearr_103069_103830[(1)] = (4));

} else {
var statearr_103070_103831 = state_103024__$1;
(statearr_103070_103831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (11))){
var state_103024__$1 = state_103024;
var statearr_103071_103832 = state_103024__$1;
(statearr_103071_103832[(2)] = null);

(statearr_103071_103832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (9))){
var inst_103003 = (state_103024[(10)]);
var inst_102976 = (state_103024[(8)]);
var inst_102977 = (state_103024[(9)]);
var inst_103001 = (state_103024[(2)]);
var inst_103002 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_102977,inst_103001);
var inst_103003__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_102976);
var state_103024__$1 = (function (){var statearr_103073 = state_103024;
(statearr_103073[(10)] = inst_103003__$1);

(statearr_103073[(12)] = inst_103002);

return statearr_103073;
})();
if(cljs.core.truth_(inst_103003__$1)){
var statearr_103074_103838 = state_103024__$1;
(statearr_103074_103838[(1)] = (10));

} else {
var statearr_103075_103839 = state_103024__$1;
(statearr_103075_103839[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (5))){
var inst_102985 = (state_103024[(7)]);
var inst_102991 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",759,"([:or nil? map?] ?pulled)",inst_102985,null,null);
var state_103024__$1 = state_103024;
var statearr_103076_103840 = state_103024__$1;
(statearr_103076_103840[(2)] = inst_102991);

(statearr_103076_103840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (14))){
var state_103024__$1 = state_103024;
var statearr_103077_103841 = state_103024__$1;
(statearr_103077_103841[(2)] = null);

(statearr_103077_103841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (16))){
var inst_102976 = (state_103024[(8)]);
var inst_103002 = (state_103024[(12)]);
var inst_103012 = (state_103024[(2)]);
var inst_103013 = (inst_102976 + (1));
var inst_102976__$1 = inst_103013;
var inst_102977 = inst_103002;
var state_103024__$1 = (function (){var statearr_103078 = state_103024;
(statearr_103078[(8)] = inst_102976__$1);

(statearr_103078[(13)] = inst_103012);

(statearr_103078[(9)] = inst_102977);

return statearr_103078;
})();
var statearr_103079_103842 = state_103024__$1;
(statearr_103079_103842[(2)] = null);

(statearr_103079_103842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (10))){
var inst_103002 = (state_103024[(12)]);
var inst_103005 = cljs.core.complement(inst_103002);
var inst_103006 = taoensso.encore.rsome(inst_103005,client_ids_unsatisfied);
var state_103024__$1 = state_103024;
if(cljs.core.truth_(inst_103006)){
var statearr_103080_103843 = state_103024__$1;
(statearr_103080_103843[(1)] = (13));

} else {
var statearr_103081_103844 = state_103024__$1;
(statearr_103081_103844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103025 === (8))){
var state_103024__$1 = state_103024;
var statearr_103083_103845 = state_103024__$1;
(statearr_103083_103845[(2)] = null);

(statearr_103083_103845[(1)] = (9));


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
});
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____0 = (function (){
var statearr_103084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103084[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__);

(statearr_103084[(1)] = (1));

return statearr_103084;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____1 = (function (state_103024){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_103024);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e103085){var ex__81417__auto__ = e103085;
var statearr_103086_103855 = state_103024;
(statearr_103086_103855[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_103024[(4)]))){
var statearr_103088_103856 = state_103024;
(statearr_103088_103856[(1)] = cljs.core.first((state_103024[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__103857 = state_103024;
state_103024 = G__103857;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__ = function(state_103024){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____1.call(this,state_103024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_103089 = f__83166__auto__();
(statearr_103089[(6)] = c__83165__auto__);

return statearr_103089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

return c__83165__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_103863 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_103863(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_103865 = (function (chsk,reason){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4429__auto__.call(null,chsk,reason));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4426__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_103865(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_103871 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_103871(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_103877 = (function (chsk,ev,opts){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4429__auto__.call(null,chsk,ev,opts));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4426__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_103877(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__103102 = arguments.length;
switch (G__103102) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",809,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,359798565);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1336692910);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5735__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto__)){
var cb_uuid = temp__5735__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__103110 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103110,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103110,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_103903 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103113){if((e103113 instanceof Error)){
var e_103903 = e103113;
return e_103903;
} else {
throw e103113;

}
}})();
if((e_103903 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",861,"(map? state)",state,e_103903,null);
}

var e_103904 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__103116 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__103116) : taoensso.truss.impl.set_STAR_.call(null,G__103116));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103115){if((e103115 instanceof Error)){
var e_103904 = e103115;
return e_103904;
} else {
throw e103115;

}
}})();
if((e_103904 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",862,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_103904,null);
}

if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_103910 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103117){if((e103117 instanceof Error)){
var e_103910 = e103117;
return e_103910;
} else {
throw e103117;

}
}})();
if((e_103910 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",883,"(enc/chan? ?cb)",_QMARK_cb,e_103910,null);
}

taoensso.sente.assert_event(ev);

var vec__103118 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103118,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103118,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",894,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1515079531);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",895,"(vector? clj)",clj,null,null));
var seq__103123 = cljs.core.seq(buffered_evs);
var chunk__103124 = null;
var count__103125 = (0);
var i__103126 = (0);
while(true){
if((i__103126 < count__103125)){
var ev = chunk__103124.cljs$core$IIndexed$_nth$arity$2(null,i__103126);
taoensso.sente.assert_event(ev);

var vec__103136_103914 = ev;
var id_103915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103136_103914,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_103915),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__103920 = seq__103123;
var G__103921 = chunk__103124;
var G__103922 = count__103125;
var G__103923 = (i__103126 + (1));
seq__103123 = G__103920;
chunk__103124 = G__103921;
count__103125 = G__103922;
i__103126 = G__103923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__103123);
if(temp__5735__auto__){
var seq__103123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__103123__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__103123__$1);
var G__103927 = cljs.core.chunk_rest(seq__103123__$1);
var G__103928 = c__4556__auto__;
var G__103929 = cljs.core.count(c__4556__auto__);
var G__103930 = (0);
seq__103123 = G__103927;
chunk__103124 = G__103928;
count__103125 = G__103929;
i__103126 = G__103930;
continue;
} else {
var ev = cljs.core.first(seq__103123__$1);
taoensso.sente.assert_event(ev);

var vec__103140_103931 = ev;
var id_103932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103140_103931,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_103932),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__103933 = cljs.core.next(seq__103123__$1);
var G__103934 = null;
var G__103935 = (0);
var G__103936 = (0);
seq__103123 = G__103933;
chunk__103124 = G__103934;
count__103125 = G__103935;
i__103126 = G__103936;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_(x)){
var vec__103146 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103146,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_103937 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__103152 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__103152) : taoensso.truss.impl.set_STAR_.call(null,G__103152));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103150){if((e103150 instanceof Error)){
var e_103937 = e103150;
return e_103937;
} else {
throw e103150;

}
}})();
if((e_103937 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",909,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_103937,null);
}

var e_103938 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103153){if((e103153 instanceof Error)){
var e_103938 = e103153;
return e_103938;
} else {
throw e103153;

}
}})();
if((e_103938 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",910,"(handshake? clj)",clj,e_103938,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",911,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-287521990);

var vec__103155 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103155,(0),null);
var vec__103158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103155,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103158,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103158,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103158,(2),null);
var map__103161 = chsk;
var map__103161__$1 = (((((!((map__103161 == null))))?(((((map__103161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103161):map__103161);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103161__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103161__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__103149_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__103149_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require("websocket");
}catch (e103163){var e = e103163;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k103174,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__103181 = k103174;
var G__103181__$1 = (((G__103181 instanceof cljs.core.Keyword))?G__103181.fqn:null);
switch (G__103181__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k103174,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__103184){
var vec__103186 = p__103184;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103186,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103186,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__103173){
var self__ = this;
var G__103173__$1 = this;
return (new cljs.core.RecordIter((0),G__103173__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this103175,other103176){
var self__ = this;
var this103175__$1 = this;
return (((!((other103176 == null)))) && ((this103175__$1.constructor === other103176.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.client_id,other103176.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.chs,other103176.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.params,other103176.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.packer,other103176.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.url,other103176.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.ws_kalive_ms,other103176.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.state_,other103176.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.instance_handle_,other103176.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.retry_count_,other103176.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.ever_opened_QMARK__,other103176.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.backoff_ms_fn,other103176.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.cbs_waiting_,other103176.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.socket_,other103176.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.udt_last_comms_,other103176.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103175__$1.__extmap,other103176.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__103173){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__103210 = cljs.core.keyword_identical_QMARK_;
var expr__103211 = k__4388__auto__;
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__103211)))){
return (new taoensso.sente.ChWebSocket(G__103173,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__103173,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__103173,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__103173,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__103173,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__103173,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__103173,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__103173,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__103173,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__103173,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__103173,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__103173,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__103173,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103210.cljs$core$IFn$_invoke$arity$2 ? pred__103210.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__103211) : pred__103210.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__103211)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__103173,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__103173),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__103173){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__103173,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103166_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__103166_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__103222 = opts;
var map__103222__$1 = (((((!((map__103222 == null))))?(((((map__103222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103222):map__103222);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103222__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103222__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103222__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___104203 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___104203)){
var cb_uuid_104206 = temp__5735__auto___104203;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_104206], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103230){if((e103230 instanceof Error)){
var e = e103230;
return e;
} else {
throw e103230;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___104211__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___104211__$1)){
var timeout_ms_104214 = temp__5735__auto___104211__$1;
var c__83165__auto___104215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_103241){
var state_val_103242 = (state_103241[(1)]);
if((state_val_103242 === (1))){
var inst_103231 = cljs.core.async.timeout(timeout_ms_104214);
var state_103241__$1 = state_103241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103241__$1,(2),inst_103231);
} else {
if((state_val_103242 === (2))){
var inst_103234 = (state_103241[(7)]);
var inst_103233 = (state_103241[(2)]);
var inst_103234__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_103241__$1 = (function (){var statearr_103246 = state_103241;
(statearr_103246[(7)] = inst_103234__$1);

(statearr_103246[(8)] = inst_103233);

return statearr_103246;
})();
if(cljs.core.truth_(inst_103234__$1)){
var statearr_103247_104222 = state_103241__$1;
(statearr_103247_104222[(1)] = (3));

} else {
var statearr_103248_104225 = state_103241__$1;
(statearr_103248_104225[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103242 === (3))){
var inst_103234 = (state_103241[(7)]);
var inst_103236 = (inst_103234.cljs$core$IFn$_invoke$arity$1 ? inst_103234.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_103234.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_103241__$1 = state_103241;
var statearr_103249_104230 = state_103241__$1;
(statearr_103249_104230[(2)] = inst_103236);

(statearr_103249_104230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103242 === (4))){
var state_103241__$1 = state_103241;
var statearr_103250_104233 = state_103241__$1;
(statearr_103250_104233[(2)] = null);

(statearr_103250_104233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103242 === (5))){
var inst_103239 = (state_103241[(2)]);
var state_103241__$1 = state_103241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103241__$1,inst_103239);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_103251 = [null,null,null,null,null,null,null,null,null];
(statearr_103251[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_103251[(1)] = (1));

return statearr_103251;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_103241){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_103241);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e103252){var ex__81417__auto__ = e103252;
var statearr_103253_104248 = state_103241;
(statearr_103253_104248[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_103241[(4)]))){
var statearr_103254_104249 = state_103241;
(statearr_103254_104249[(1)] = cljs.core.first((state_103241[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104252 = state_103241;
state_103241 = G__104252;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_103241){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_103241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_103258 = f__83166__auto__();
(statearr_103258[(6)] = c__83165__auto___104215);

return statearr_103258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e103259){var e = e103259;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1008,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
}),null)),null,-1037612321);

var temp__5735__auto___104263 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___104263)){
var cb_uuid_104264 = temp__5735__auto___104263;
var cb_fn_STAR__104267 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_104264);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103260){if((e103260 instanceof Error)){
var e__$1 = e103260;
return e__$1;
} else {
throw e103260;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1011,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
(cb_fn_STAR__104267.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__104267.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__104267.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = (function (){var or__4126__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var WebSocket = temp__5735__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1033,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-1906757375);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103168_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103168_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))));
}catch (e103267){var e = e103267;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1048,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
}),null)),null,-1455848987);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__103268 = _QMARK_socket;
(G__103268["onerror"] = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1058,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e103269){var _ = e103269;
return ws_ev;
}})()], null);
}),null)),null,1652537719);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103169_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103169_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
}));
}));

(G__103268["onmessage"] = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__103270 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103270,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103270,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4126__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5733__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5733__auto__)){
var cb_uuid = temp__5733__auto__;
var temp__5733__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cb_fn = temp__5733__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1094,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,90214555);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
}));

(G__103268["onclose"] = (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1116,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,528512553);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103170_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103170_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103171_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__103171_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
}));

return G__103268;
})());
}
} else {
return null;
}
});
var temp__5735__auto___104358__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___104358__$1)){
var ms_104359 = temp__5735__auto___104358__$1;
var c__83165__auto___104360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_103309){
var state_val_103310 = (state_103309[(1)]);
if((state_val_103310 === (7))){
var inst_103305 = (state_103309[(2)]);
var state_103309__$1 = state_103309;
var statearr_103314_104366 = state_103309__$1;
(statearr_103314_104366[(2)] = inst_103305);

(statearr_103314_104366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (1))){
var state_103309__$1 = state_103309;
var statearr_103315_104371 = state_103309__$1;
(statearr_103315_104371[(2)] = null);

(statearr_103315_104371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (4))){
var inst_103283 = (state_103309[(2)]);
var inst_103284 = have_handle_QMARK_();
var state_103309__$1 = (function (){var statearr_103316 = state_103309;
(statearr_103316[(7)] = inst_103283);

return statearr_103316;
})();
if(inst_103284){
var statearr_103317_104378 = state_103309__$1;
(statearr_103317_104378[(1)] = (5));

} else {
var statearr_103318_104381 = state_103309__$1;
(statearr_103318_104381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (6))){
var state_103309__$1 = state_103309;
var statearr_103319_104387 = state_103309__$1;
(statearr_103319_104387[(2)] = null);

(statearr_103319_104387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (3))){
var inst_103307 = (state_103309[(2)]);
var state_103309__$1 = state_103309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103309__$1,inst_103307);
} else {
if((state_val_103310 === (2))){
var inst_103280 = cljs.core.deref(self__.udt_last_comms_);
var inst_103281 = cljs.core.async.timeout(ms_104359);
var state_103309__$1 = (function (){var statearr_103320 = state_103309;
(statearr_103320[(8)] = inst_103280);

return statearr_103320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103309__$1,(4),inst_103281);
} else {
if((state_val_103310 === (9))){
var state_103309__$1 = state_103309;
var statearr_103321_104401 = state_103309__$1;
(statearr_103321_104401[(2)] = null);

(statearr_103321_104401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (5))){
var inst_103280 = (state_103309[(8)]);
var inst_103289 = cljs.core.deref(self__.udt_last_comms_);
var inst_103290 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_103280,inst_103289);
var state_103309__$1 = state_103309;
if(inst_103290){
var statearr_103322_104404 = state_103309__$1;
(statearr_103322_104404[(1)] = (8));

} else {
var statearr_103323_104405 = state_103309__$1;
(statearr_103323_104405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (10))){
var inst_103301 = (state_103309[(2)]);
var state_103309__$1 = (function (){var statearr_103324 = state_103309;
(statearr_103324[(9)] = inst_103301);

return statearr_103324;
})();
var statearr_103325_104412 = state_103309__$1;
(statearr_103325_104412[(2)] = null);

(statearr_103325_104412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103310 === (8))){
var inst_103292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103293 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_103294 = (new cljs.core.PersistentVector(null,1,(5),inst_103292,inst_103293,null));
var inst_103295 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_103296 = [true];
var inst_103297 = cljs.core.PersistentHashMap.fromArrays(inst_103295,inst_103296);
var inst_103298 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_103294,inst_103297);
var state_103309__$1 = state_103309;
var statearr_103326_104424 = state_103309__$1;
(statearr_103326_104424[(2)] = inst_103298);

(statearr_103326_104424[(1)] = (10));


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
var taoensso$sente$state_machine__81414__auto__ = null;
var taoensso$sente$state_machine__81414__auto____0 = (function (){
var statearr_103327 = [null,null,null,null,null,null,null,null,null,null];
(statearr_103327[(0)] = taoensso$sente$state_machine__81414__auto__);

(statearr_103327[(1)] = (1));

return statearr_103327;
});
var taoensso$sente$state_machine__81414__auto____1 = (function (state_103309){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_103309);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e103328){var ex__81417__auto__ = e103328;
var statearr_103329_104435 = state_103309;
(statearr_103329_104435[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_103309[(4)]))){
var statearr_103330_104438 = state_103309;
(statearr_103330_104438[(1)] = cljs.core.first((state_103309[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104441 = state_103309;
state_103309 = G__104441;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$state_machine__81414__auto__ = function(state_103309){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__81414__auto____1.call(this,state_103309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__81414__auto____0;
taoensso$sente$state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__81414__auto____1;
return taoensso$sente$state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_103331 = f__83166__auto__();
(statearr_103331[(6)] = c__83165__auto___104360);

return statearr_103331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__103177){
var extmap__4419__auto__ = (function (){var G__103332 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__103177,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__103177)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__103332);
} else {
return G__103332;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__103177),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__103177),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k103340,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__103344 = k103340;
var G__103344__$1 = (((G__103344 instanceof cljs.core.Keyword))?G__103344.fqn:null);
switch (G__103344__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k103340,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__103345){
var vec__103346 = p__103345;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103346,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103346,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__103339){
var self__ = this;
var G__103339__$1 = this;
return (new cljs.core.RecordIter((0),G__103339__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this103341,other103342){
var self__ = this;
var this103341__$1 = this;
return (((!((other103342 == null)))) && ((this103341__$1.constructor === other103342.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.client_id,other103342.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.chs,other103342.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.params,other103342.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.packer,other103342.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.url,other103342.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.state_,other103342.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.instance_handle_,other103342.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.ever_opened_QMARK__,other103342.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.backoff_ms_fn,other103342.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.ajax_opts,other103342.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.curr_xhr_,other103342.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103341__$1.__extmap,other103342.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__103339){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__103349 = cljs.core.keyword_identical_QMARK_;
var expr__103350 = k__4388__auto__;
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(G__103339,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__103339,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__103339,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__103339,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__103339,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__103339,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__103339,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__103339,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__103339,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__103339,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103349.cljs$core$IFn$_invoke$arity$2 ? pred__103349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__103350) : pred__103349.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__103350)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__103339,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__103339),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__103339){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__103339,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103333_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__103333_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__103352 = opts;
var map__103352__$1 = (((((!((map__103352 == null))))?(((((map__103352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103352):map__103352);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103352__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103352__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103352__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__103354_104634 = self__.url;
var G__103355_104635 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__103356_104636 = (function taoensso$sente$ajax_cb(p__103357){
var map__103358 = p__103357;
var map__103358__$1 = (((((!((map__103358 == null))))?(((((map__103358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103358):map__103358);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103358__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103358__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103334_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__103334_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__103360 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103360,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103360,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,-610554906);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103335_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103335_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__103354_104634,G__103355_104635,G__103356_104636) : taoensso.sente.ajax_lite.call(null,G__103354_104634,G__103355_104635,G__103356_104636));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1247,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1976003291);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1255,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,-1650409625);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103336_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103336_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__103363 = self__.url;
var G__103364 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__103365 = (function taoensso$sente$poll_fn_$_ajax_cb(p__103366){
var map__103367 = p__103366;
var map__103367__$1 = (((((!((map__103367 == null))))?(((((map__103367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103367):map__103367);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103367__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103367__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103337_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__103337_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__103369 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103369,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__103338_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__103338_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__103363,G__103364,G__103365) : taoensso.sente.ajax_lite.call(null,G__103363,G__103364,G__103365));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__103343){
var extmap__4419__auto__ = (function (){var G__103372 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__103343,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__103343)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__103372);
} else {
return G__103372;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__103343),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__103343),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k103374,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__103378 = k103374;
var G__103378__$1 = (((G__103378 instanceof cljs.core.Keyword))?G__103378.fqn:null);
switch (G__103378__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k103374,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__103379){
var vec__103380 = p__103379;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103380,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103380,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__103373){
var self__ = this;
var G__103373__$1 = this;
return (new cljs.core.RecordIter((0),G__103373__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this103375,other103376){
var self__ = this;
var this103375__$1 = this;
return (((!((other103376 == null)))) && ((this103375__$1.constructor === other103376.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103375__$1.ws_chsk_opts,other103376.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103375__$1.ajax_chsk_opts,other103376.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103375__$1.state_,other103376.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103375__$1.impl_,other103376.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this103375__$1.__extmap,other103376.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__103373){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__103383 = cljs.core.keyword_identical_QMARK_;
var expr__103384 = k__4388__auto__;
if(cljs.core.truth_((pred__103383.cljs$core$IFn$_invoke$arity$2 ? pred__103383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__103384) : pred__103383.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__103384)))){
return (new taoensso.sente.ChAutoSocket(G__103373,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103383.cljs$core$IFn$_invoke$arity$2 ? pred__103383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__103384) : pred__103383.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__103384)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__103373,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103383.cljs$core$IFn$_invoke$arity$2 ? pred__103383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__103384) : pred__103383.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__103384)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__103373,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__103383.cljs$core$IFn$_invoke$arity$2 ? pred__103383.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__103384) : pred__103383.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__103384)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__103373,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__103373),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__103373){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__103373,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5733__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5733__auto__)){
var impl = temp__5733__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__103386 = opts;
var map__103386__$1 = (((((!((map__103386 == null))))?(((((map__103386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103386):map__103386);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103386__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___104681 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ever_opened_QMARK__ = temp__5735__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___104681,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1388,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,-616818795);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4126__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__103377){
var extmap__4419__auto__ = (function (){var G__103388 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__103377,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__103377)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__103388);
} else {
return G__103388;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__103377),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__103377),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__103377),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__103377),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__103389 = protocol;
var G__103389__$1 = (((G__103389 instanceof cljs.core.Keyword))?G__103389.fqn:null);
switch (G__103389__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__103391 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__103391) : taoensso.truss.impl.set_STAR_.call(null,G__103391));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103390){if((e103390 instanceof Error)){
var e = e103390;
return e;
} else {
throw e103390;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1408,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__103392 = type;
var G__103392__$1 = (((G__103392 instanceof cljs.core.Keyword))?G__103392.fqn:null);
switch (G__103392__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__103393 = protocol__$2;
switch (G__103393) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103393)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103392__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104697 = arguments.length;
var i__4737__auto___104698 = (0);
while(true){
if((i__4737__auto___104698 < len__4736__auto___104697)){
args__4742__auto__.push((arguments[i__4737__auto___104698]));

var G__104699 = (i__4737__auto___104698 + (1));
i__4737__auto___104698 = G__104699;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__103397){
var vec__103398 = p__103397;
var map__103401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103398,(0),null);
var map__103401__$1 = (((((!((map__103401 == null))))?(((((map__103401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103401):map__103401);
var opts = map__103401__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103401__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103401__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103401__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103401__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__103401__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103398,(1),null);
var e_104702 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__103404 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__103404) : taoensso.truss.impl.set_STAR_.call(null,G__103404));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103403){if((e103403 instanceof Error)){
var e_104702 = e103403;
return e_104702;
} else {
throw e103403;

}
}})();
if((e_104702 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1450,"([:in #{:ws :ajax :auto}] type)",type,e_104702,null);
}

var e_104704 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103405){if((e103405 instanceof Error)){
var e_104704 = e103405;
return e_104704;
} else {
throw e103405;

}
}})();
if((e_104704 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1451,"(enc/nblank-str? client-id)",client_id,e_104704,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1453,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,-1497045233);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1454,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,-1519915101);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1457,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,1233011435);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__103406 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__4126__auto__ = protocol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__4126__auto__ = host;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103406,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103406,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__103409 = type;
var G__103409__$1 = (((G__103409 instanceof cljs.core.Keyword))?G__103409.fqn:null);
switch (G__103409__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103409__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__103410 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103410,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103410,(1),null);
var ev__$1 = vec__103410;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1545,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,1343123576);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq103394){
var G__103395 = cljs.core.first(seq103394);
var seq103394__$1 = cljs.core.next(seq103394);
var G__103396 = cljs.core.first(seq103394__$1);
var seq103394__$2 = cljs.core.next(seq103394__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103395,G__103396,seq103394__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__103413 = opts;
var map__103413__$1 = (((((!((map__103413 == null))))?(((((map__103413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103413):map__103413);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103413__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103413__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103413__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__83165__auto___104808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__83166__auto__ = (function (){var switch__81413__auto__ = (function (state_103462){
var state_val_103463 = (state_103462[(1)]);
if((state_val_103463 === (7))){
var inst_103458 = (state_103462[(2)]);
var state_103462__$1 = state_103462;
var statearr_103464_104809 = state_103462__$1;
(statearr_103464_104809[(2)] = inst_103458);

(statearr_103464_104809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (1))){
var state_103462__$1 = state_103462;
var statearr_103465_104810 = state_103462__$1;
(statearr_103465_104810[(2)] = null);

(statearr_103465_104810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (4))){
var inst_103425 = (state_103462[(7)]);
var inst_103428 = (state_103462[(8)]);
var inst_103424 = (state_103462[(9)]);
var inst_103423 = (state_103462[(10)]);
var inst_103423__$1 = (state_103462[(2)]);
var inst_103424__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_103423__$1,(0),null);
var inst_103425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_103423__$1,(1),null);
var inst_103426 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_103425__$1,ch_ctrl);
var inst_103427 = (inst_103424__$1 == null);
var inst_103428__$1 = ((inst_103426) || (inst_103427));
var state_103462__$1 = (function (){var statearr_103466 = state_103462;
(statearr_103466[(7)] = inst_103425__$1);

(statearr_103466[(8)] = inst_103428__$1);

(statearr_103466[(9)] = inst_103424__$1);

(statearr_103466[(10)] = inst_103423__$1);

return statearr_103466;
})();
if(cljs.core.truth_(inst_103428__$1)){
var statearr_103467_104818 = state_103462__$1;
(statearr_103467_104818[(1)] = (5));

} else {
var statearr_103468_104819 = state_103462__$1;
(statearr_103468_104819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (15))){
var inst_103424 = (state_103462[(9)]);
var state_103462__$1 = state_103462;
var statearr_103469_104820 = state_103462__$1;
(statearr_103469_104820[(2)] = inst_103424);

(statearr_103469_104820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (13))){
var inst_103444 = (state_103462[(2)]);
var state_103462__$1 = state_103462;
var statearr_103470_104825 = state_103462__$1;
(statearr_103470_104825[(2)] = inst_103444);

(statearr_103470_104825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (6))){
var inst_103424 = (state_103462[(9)]);
var inst_103433 = (inst_103424 == null);
var inst_103434 = cljs.core.not(inst_103433);
var state_103462__$1 = state_103462;
if(inst_103434){
var statearr_103471_104827 = state_103462__$1;
(statearr_103471_104827[(1)] = (8));

} else {
var statearr_103472_104828 = state_103462__$1;
(statearr_103472_104828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (3))){
var inst_103460 = (state_103462[(2)]);
var state_103462__$1 = state_103462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103462__$1,inst_103460);
} else {
if((state_val_103463 === (12))){
var state_103462__$1 = state_103462;
var statearr_103473_104830 = state_103462__$1;
(statearr_103473_104830[(2)] = false);

(statearr_103473_104830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (2))){
var inst_103419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103420 = [ch_recv,ch_ctrl];
var inst_103421 = (new cljs.core.PersistentVector(null,2,(5),inst_103419,inst_103420,null));
var state_103462__$1 = state_103462;
return cljs.core.async.ioc_alts_BANG_(state_103462__$1,(4),inst_103421);
} else {
if((state_val_103463 === (11))){
var state_103462__$1 = state_103462;
var statearr_103474_104831 = state_103462__$1;
(statearr_103474_104831[(2)] = true);

(statearr_103474_104831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (9))){
var state_103462__$1 = state_103462;
var statearr_103475_104834 = state_103462__$1;
(statearr_103475_104834[(2)] = false);

(statearr_103475_104834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (5))){
var state_103462__$1 = state_103462;
var statearr_103476_104835 = state_103462__$1;
(statearr_103476_104835[(2)] = null);

(statearr_103476_104835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (14))){
var inst_103424 = (state_103462[(9)]);
var inst_103449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_103424);
var state_103462__$1 = state_103462;
var statearr_103477_104841 = state_103462__$1;
(statearr_103477_104841[(2)] = inst_103449);

(statearr_103477_104841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (16))){
var inst_103425 = (state_103462[(7)]);
var inst_103428 = (state_103462[(8)]);
var inst_103424 = (state_103462[(9)]);
var inst_103423 = (state_103462[(10)]);
var inst_103452 = (state_103462[(2)]);
var inst_103453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_103452,new cljs.core.Keyword(null,"event","event",301435442));
var inst_103454 = (function (){var vec__103416 = inst_103423;
var v = inst_103424;
var p = inst_103425;
var stop_QMARK_ = inst_103428;
var map__103431 = inst_103452;
var event_msg = inst_103452;
var event = inst_103453;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1572,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,-1332729314);
} else {
}

var G__103481 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103482){if((e103482 instanceof Error)){
var e = e103482;
return e;
} else {
throw e103482;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1575,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e103483){if((e103483 instanceof Error)){
var e = e103483;
return e;
} else {
throw e103483;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1576,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__103481) : event_msg_handler.call(null,G__103481));
}catch (e103478){if((e103478 instanceof Error)){
var e1 = e103478;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1581,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,-1483903302);
}
}catch (e103479){if((e103479 instanceof Error)){
var e2 = e103479;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/baruchberger/embedtest/src/embedtest/core.clj",1582,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,292764107);
} else {
throw e103479;

}
}} else {
throw e103478;

}
}});
})();
var inst_103455 = execute1(inst_103454);
var state_103462__$1 = (function (){var statearr_103484 = state_103462;
(statearr_103484[(11)] = inst_103455);

return statearr_103484;
})();
var statearr_103485_104882 = state_103462__$1;
(statearr_103485_104882[(2)] = null);

(statearr_103485_104882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (10))){
var inst_103447 = (state_103462[(2)]);
var state_103462__$1 = state_103462;
if(cljs.core.truth_(inst_103447)){
var statearr_103486_104883 = state_103462__$1;
(statearr_103486_104883[(1)] = (14));

} else {
var statearr_103487_104884 = state_103462__$1;
(statearr_103487_104884[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103463 === (8))){
var inst_103424 = (state_103462[(9)]);
var inst_103436 = inst_103424.cljs$lang$protocol_mask$partition0$;
var inst_103437 = (inst_103436 & (64));
var inst_103438 = inst_103424.cljs$core$ISeq$;
var inst_103439 = (cljs.core.PROTOCOL_SENTINEL === inst_103438);
var inst_103440 = ((inst_103437) || (inst_103439));
var state_103462__$1 = state_103462;
if(cljs.core.truth_(inst_103440)){
var statearr_103488_104889 = state_103462__$1;
(statearr_103488_104889[(1)] = (11));

} else {
var statearr_103489_104890 = state_103462__$1;
(statearr_103489_104890[(1)] = (12));

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
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____0 = (function (){
var statearr_103492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_103492[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__);

(statearr_103492[(1)] = (1));

return statearr_103492;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____1 = (function (state_103462){
while(true){
var ret_value__81415__auto__ = (function (){try{while(true){
var result__81416__auto__ = switch__81413__auto__(state_103462);
if(cljs.core.keyword_identical_QMARK_(result__81416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__81416__auto__;
}
break;
}
}catch (e103493){var ex__81417__auto__ = e103493;
var statearr_103494_104892 = state_103462;
(statearr_103494_104892[(2)] = ex__81417__auto__);


if(cljs.core.seq((state_103462[(4)]))){
var statearr_103495_104893 = state_103462;
(statearr_103495_104893[(1)] = cljs.core.first((state_103462[(4)])));

} else {
throw ex__81417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__81415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__104898 = state_103462;
state_103462 = G__104898;
continue;
} else {
return ret_value__81415__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__ = function(state_103462){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____1.call(this,state_103462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__81414__auto__;
})()
})();
var state__83167__auto__ = (function (){var statearr_103496 = f__83166__auto__();
(statearr_103496[(6)] = c__83165__auto___104808);

return statearr_103496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__83167__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104901 = arguments.length;
var i__4737__auto___104902 = (0);
while(true){
if((i__4737__auto___104902 < len__4736__auto___104901)){
args__4742__auto__.push((arguments[i__4737__auto___104902]));

var G__104903 = (i__4737__auto___104902 + (1));
i__4737__auto___104902 = G__104903;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__103500){
var vec__103501 = p__103500;
var map__103504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103501,(0),null);
var map__103504__$1 = (((((!((map__103504 == null))))?(((((map__103504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103504):map__103504);
var opts = map__103504__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103504__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103504__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103504__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq103497){
var G__103498 = cljs.core.first(seq103497);
var seq103497__$1 = cljs.core.next(seq103497);
var G__103499 = cljs.core.first(seq103497__$1);
var seq103497__$2 = cljs.core.next(seq103497__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103498,G__103499,seq103497__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___104910 = arguments.length;
var i__4737__auto___104911 = (0);
while(true){
if((i__4737__auto___104911 < len__4736__auto___104910)){
args__4742__auto__.push((arguments[i__4737__auto___104911]));

var G__104912 = (i__4737__auto___104911 + (1));
i__4737__auto___104911 = G__104912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__103517){
var vec__103518 = p__103517;
var map__103521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103518,(0),null);
var map__103521__$1 = (((((!((map__103521 == null))))?(((((map__103521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103521):map__103521);
var opts = map__103521__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103521__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103521__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq103514){
var G__103515 = cljs.core.first(seq103514);
var seq103514__$1 = cljs.core.next(seq103514);
var G__103516 = cljs.core.first(seq103514__$1);
var seq103514__$2 = cljs.core.next(seq103514__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103515,G__103516,seq103514__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__103523 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__103524 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__103523,G__103524) : event_handler.call(null,G__103523,G__103524));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__103528,websocket_QMARK_){
var map__103529 = p__103528;
var map__103529__$1 = (((((!((map__103529 == null))))?(((((map__103529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103529):map__103529);
var location = map__103529__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103529__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103529__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__103529__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
