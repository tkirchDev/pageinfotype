"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDef = void 0;

var _apolloServer = require("apollo-server");

const typeDef = (0, _apolloServer.gql)`
  type PageInfo {
    nodesPerPage: Int!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    currentPage: Int!
    lastPage: Int!
  }
`;
exports.typeDef = typeDef;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlRGVmLnRzIl0sIm5hbWVzIjpbInR5cGVEZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsc0JBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcblxuY29uc3QgdHlwZURlZiA9IGdxbGBcbiAgdHlwZSBQYWdlSW5mbyB7XG4gICAgbm9kZXNQZXJQYWdlOiBJbnQhXG4gICAgaGFzTmV4dFBhZ2U6IEJvb2xlYW4hXG4gICAgaGFzUHJldmlvdXNQYWdlOiBCb29sZWFuIVxuICAgIGN1cnJlbnRQYWdlOiBJbnQhXG4gICAgbGFzdFBhZ2U6IEludCFcbiAgfVxuYDtcblxuZXhwb3J0IHsgdHlwZURlZiB9O1xuIl19