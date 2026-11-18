"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var d=n(function(O,x){
var g=require('@stdlib/blas-ext-base-gwaxpb/dist');function w(a,r,e,s,t,u,i){return g(a,1/e,-r/e,s,t,u,i)}x.exports=w
});var o=n(function(R,c){
var y=require('@stdlib/blas-ext-base-gwaxpb/dist').ndarray;function b(a,r,e,s,t,u,i,q,v){return y(a,1/e,-r/e,s,t,u,i,q,v)}c.exports=b
});var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),l=o();f(p,"ndarray",l);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
