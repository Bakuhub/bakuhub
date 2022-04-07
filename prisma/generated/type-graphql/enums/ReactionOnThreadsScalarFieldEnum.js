"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReactionOnThreadsScalarFieldEnum;
(function (ReactionOnThreadsScalarFieldEnum) {
    ReactionOnThreadsScalarFieldEnum["userId"] = "userId";
    ReactionOnThreadsScalarFieldEnum["threadId"] = "threadId";
    ReactionOnThreadsScalarFieldEnum["reaction"] = "reaction";
    ReactionOnThreadsScalarFieldEnum["createdAt"] = "createdAt";
})(ReactionOnThreadsScalarFieldEnum = exports.ReactionOnThreadsScalarFieldEnum || (exports.ReactionOnThreadsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReactionOnThreadsScalarFieldEnum, {
    name: "ReactionOnThreadsScalarFieldEnum",
    description: undefined,
});
