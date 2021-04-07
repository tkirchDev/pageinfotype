!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pageinfotype",[],t):"object"==typeof exports?exports.pageinfotype=t():e.pageinfotype=t()}(global,(function(){return(()=>{"use strict";var e={498:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeDef=void 0;const r=o(232).gql`
  type PageInfo {
    hasNextPage: Boolean
    hasPreviousPage: Boolean
    startCursor: String!
    endCursor: String!
  }
`;t.typeDef=r},232:e=>{e.exports=require("apollo-server")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var p=t[r]={exports:{}};return e[r](p,p.exports,o),p.exports}var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0});const t=o(498);e.default={typeDef:t.typeDef}})(),r})()}));
//# sourceMappingURL=index.js.map