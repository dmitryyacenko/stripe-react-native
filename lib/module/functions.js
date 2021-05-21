var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.confirmPaymentSheetPayment=exports.presentPaymentSheet=exports.initPaymentSheet=exports.handleURLCallback=exports.createTokenForCVCUpdate=exports.confirmSetupIntent=exports.handleCardAction=exports.confirmApplePayPayment=exports.updateApplePaySummaryItems=exports.presentApplePay=exports.isApplePaySupported=exports.confirmPaymentMethod=exports.retrievePaymentIntent=exports.createPaymentMethod=exports.paymentRequestWithApplePay=exports.getPaymentMethodId=exports.showPaymentOptionsModal=exports.initCustomerContext=exports.setSessionId=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _helpers=require("./helpers");var _NativeStripeSdk=_interopRequireDefault(require("./NativeStripeSdk"));var _types=require("./types");var APPLE_PAY_NOT_SUPPORTED_MESSAGE='Apple pay is not supported on this device';var setSessionId=function setSessionId(sessionId){_NativeStripeSdk.default.setSessionId(sessionId);};exports.setSessionId=setSessionId;var initCustomerContext=function initCustomerContext(){return _regenerator.default.async(function initCustomerContext$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",_NativeStripeSdk.default.initCustomerContext());case 1:case"end":return _context.stop();}}},null,null,null,Promise);};exports.initCustomerContext=initCustomerContext;var showPaymentOptionsModal=function showPaymentOptionsModal(cartTotal){if(_helpers.isiOS){_NativeStripeSdk.default.showPaymentOptionsModal();}else{_NativeStripeSdk.default.showPaymentOptionsModal(cartTotal);}};exports.showPaymentOptionsModal=showPaymentOptionsModal;var getPaymentMethodId=function getPaymentMethodId(items){if(_helpers.isiOS){return _NativeStripeSdk.default.getPaymentMethodId(items);}return _NativeStripeSdk.default.getPaymentMethodId();};exports.getPaymentMethodId=getPaymentMethodId;var paymentRequestWithApplePay=function paymentRequestWithApplePay(items,options){return _regenerator.default.async(function paymentRequestWithApplePay$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",_NativeStripeSdk.default.paymentRequestWithApplePay(items,options));case 1:case"end":return _context2.stop();}}},null,null,null,Promise);};exports.paymentRequestWithApplePay=paymentRequestWithApplePay;var createPaymentMethod=function createPaymentMethod(data){var options,paymentMethod,_args3=arguments;return _regenerator.default.async(function createPaymentMethod$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:options=_args3.length>1&&_args3[1]!==undefined?_args3[1]:{};_context3.prev=1;_context3.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.createPaymentMethod(data,options));case 4:paymentMethod=_context3.sent;return _context3.abrupt("return",{paymentMethod:paymentMethod});case 8:_context3.prev=8;_context3.t0=_context3["catch"](1);return _context3.abrupt("return",{error:(0,_helpers.createError)(_context3.t0)});case 11:case"end":return _context3.stop();}}},null,null,[[1,8]],Promise);};exports.createPaymentMethod=createPaymentMethod;var retrievePaymentIntent=function retrievePaymentIntent(clientSecret){var paymentIntent;return _regenerator.default.async(function retrievePaymentIntent$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.retrievePaymentIntent(clientSecret));case 3:paymentIntent=_context4.sent;return _context4.abrupt("return",{paymentIntent:paymentIntent});case 7:_context4.prev=7;_context4.t0=_context4["catch"](0);return _context4.abrupt("return",{error:(0,_helpers.createError)(_context4.t0)});case 10:case"end":return _context4.stop();}}},null,null,[[0,7]],Promise);};exports.retrievePaymentIntent=retrievePaymentIntent;var confirmPaymentMethod=function confirmPaymentMethod(paymentIntentClientSecret,data){var options,paymentIntent,_args5=arguments;return _regenerator.default.async(function confirmPaymentMethod$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:options=_args5.length>2&&_args5[2]!==undefined?_args5[2]:{};_context5.prev=1;_context5.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmPaymentMethod(paymentIntentClientSecret,data,options));case 4:paymentIntent=_context5.sent;return _context5.abrupt("return",{paymentIntent:paymentIntent});case 8:_context5.prev=8;_context5.t0=_context5["catch"](1);return _context5.abrupt("return",{error:(0,_helpers.createError)(_context5.t0)});case 11:case"end":return _context5.stop();}}},null,null,[[1,8]],Promise);};exports.confirmPaymentMethod=confirmPaymentMethod;var isApplePaySupported=function isApplePaySupported(){return _regenerator.default.async(function isApplePaySupported$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.t0=_helpers.isiOS;if(!_context6.t0){_context6.next=5;break;}_context6.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 4:_context6.t0=_context6.sent;case 5:return _context6.abrupt("return",_context6.t0);case 6:case"end":return _context6.stop();}}},null,null,null,Promise);};exports.isApplePaySupported=isApplePaySupported;var presentApplePay=function presentApplePay(params){return _regenerator.default.async(function presentApplePay$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 2:if(_context7.sent){_context7.next=4;break;}return _context7.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 4:_context7.prev=4;_context7.next=7;return _regenerator.default.awrap(_NativeStripeSdk.default.presentApplePay(params));case 7:return _context7.abrupt("return",{});case 10:_context7.prev=10;_context7.t0=_context7["catch"](4);return _context7.abrupt("return",{error:(0,_helpers.createError)(_context7.t0)});case 13:case"end":return _context7.stop();}}},null,null,[[4,10]],Promise);};exports.presentApplePay=presentApplePay;var updateApplePaySummaryItems=function updateApplePaySummaryItems(summaryItems){return _regenerator.default.async(function updateApplePaySummaryItems$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:_context8.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 2:if(_context8.sent){_context8.next=4;break;}return _context8.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 4:_context8.prev=4;_context8.next=7;return _regenerator.default.awrap(_NativeStripeSdk.default.updateApplePaySummaryItems(summaryItems));case 7:return _context8.abrupt("return",{});case 10:_context8.prev=10;_context8.t0=_context8["catch"](4);return _context8.abrupt("return",{error:(0,_helpers.createError)(_context8.t0)});case 13:case"end":return _context8.stop();}}},null,null,[[4,10]],Promise);};exports.updateApplePaySummaryItems=updateApplePaySummaryItems;var confirmApplePayPayment=function confirmApplePayPayment(clientSecret){return _regenerator.default.async(function confirmApplePayPayment$(_context9){while(1){switch(_context9.prev=_context9.next){case 0:_context9.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.isApplePaySupported());case 2:if(_context9.sent){_context9.next=4;break;}return _context9.abrupt("return",{error:{code:_types.ApplePayError.Canceled,message:APPLE_PAY_NOT_SUPPORTED_MESSAGE}});case 4:_context9.prev=4;_context9.next=7;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmApplePayPayment(clientSecret));case 7:return _context9.abrupt("return",{});case 10:_context9.prev=10;_context9.t0=_context9["catch"](4);return _context9.abrupt("return",{error:(0,_helpers.createError)(_context9.t0)});case 13:case"end":return _context9.stop();}}},null,null,[[4,10]],Promise);};exports.confirmApplePayPayment=confirmApplePayPayment;var handleCardAction=function handleCardAction(paymentIntentClientSecret){var paymentIntent;return _regenerator.default.async(function handleCardAction$(_context10){while(1){switch(_context10.prev=_context10.next){case 0:_context10.prev=0;_context10.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.handleCardAction(paymentIntentClientSecret));case 3:paymentIntent=_context10.sent;return _context10.abrupt("return",{paymentIntent:paymentIntent});case 7:_context10.prev=7;_context10.t0=_context10["catch"](0);return _context10.abrupt("return",{error:(0,_helpers.createError)(_context10.t0)});case 10:case"end":return _context10.stop();}}},null,null,[[0,7]],Promise);};exports.handleCardAction=handleCardAction;var confirmSetupIntent=function confirmSetupIntent(paymentIntentClientSecret,data){var options,setupIntent,_args11=arguments;return _regenerator.default.async(function confirmSetupIntent$(_context11){while(1){switch(_context11.prev=_context11.next){case 0:options=_args11.length>2&&_args11[2]!==undefined?_args11[2]:{};_context11.prev=1;_context11.next=4;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmSetupIntent(paymentIntentClientSecret,data,options));case 4:setupIntent=_context11.sent;return _context11.abrupt("return",{setupIntent:setupIntent});case 8:_context11.prev=8;_context11.t0=_context11["catch"](1);return _context11.abrupt("return",{error:(0,_helpers.createError)(_context11.t0)});case 11:case"end":return _context11.stop();}}},null,null,[[1,8]],Promise);};exports.confirmSetupIntent=confirmSetupIntent;var createTokenForCVCUpdate=function createTokenForCVCUpdate(cvc){var tokenId;return _regenerator.default.async(function createTokenForCVCUpdate$(_context12){while(1){switch(_context12.prev=_context12.next){case 0:_context12.prev=0;_context12.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.createTokenForCVCUpdate(cvc));case 3:tokenId=_context12.sent;return _context12.abrupt("return",{tokenId:tokenId});case 7:_context12.prev=7;_context12.t0=_context12["catch"](0);return _context12.abrupt("return",{error:(0,_helpers.createError)(_context12.t0)});case 10:case"end":return _context12.stop();}}},null,null,[[0,7]],Promise);};exports.createTokenForCVCUpdate=createTokenForCVCUpdate;var handleURLCallback=function handleURLCallback(url){var stripeHandled;return _regenerator.default.async(function handleURLCallback$(_context13){while(1){switch(_context13.prev=_context13.next){case 0:_context13.next=2;return _regenerator.default.awrap(_NativeStripeSdk.default.handleURLCallback(url));case 2:stripeHandled=_context13.sent;return _context13.abrupt("return",stripeHandled);case 4:case"end":return _context13.stop();}}},null,null,null,Promise);};exports.handleURLCallback=handleURLCallback;var initPaymentSheet=function initPaymentSheet(params){var paymentOption;return _regenerator.default.async(function initPaymentSheet$(_context14){while(1){switch(_context14.prev=_context14.next){case 0:_context14.prev=0;_context14.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.initPaymentSheet(params));case 3:paymentOption=_context14.sent;return _context14.abrupt("return",{paymentOption:paymentOption});case 7:_context14.prev=7;_context14.t0=_context14["catch"](0);return _context14.abrupt("return",{error:(0,_helpers.createError)(_context14.t0)});case 10:case"end":return _context14.stop();}}},null,null,[[0,7]],Promise);};exports.initPaymentSheet=initPaymentSheet;var presentPaymentSheet=function presentPaymentSheet(params){var response;return _regenerator.default.async(function presentPaymentSheet$(_context15){while(1){switch(_context15.prev=_context15.next){case 0:_context15.prev=0;_context15.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.presentPaymentSheet(params));case 3:response=_context15.sent;return _context15.abrupt("return",{paymentOption:response.paymentOption});case 7:_context15.prev=7;_context15.t0=_context15["catch"](0);return _context15.abrupt("return",{error:(0,_helpers.createError)(_context15.t0)});case 10:case"end":return _context15.stop();}}},null,null,[[0,7]],Promise);};exports.presentPaymentSheet=presentPaymentSheet;var confirmPaymentSheetPayment=function confirmPaymentSheetPayment(){return _regenerator.default.async(function confirmPaymentSheetPayment$(_context16){while(1){switch(_context16.prev=_context16.next){case 0:_context16.prev=0;_context16.next=3;return _regenerator.default.awrap(_NativeStripeSdk.default.confirmPaymentSheetPayment());case 3:return _context16.abrupt("return",{});case 6:_context16.prev=6;_context16.t0=_context16["catch"](0);return _context16.abrupt("return",{error:(0,_helpers.createError)(_context16.t0)});case 9:case"end":return _context16.stop();}}},null,null,[[0,6]],Promise);};exports.confirmPaymentSheetPayment=confirmPaymentSheetPayment;
//# sourceMappingURL=functions.js.map