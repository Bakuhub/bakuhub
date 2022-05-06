"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VotesOnThreadScalarFieldEnum;
(function (VotesOnThreadScalarFieldEnum) {
    VotesOnThreadScalarFieldEnum["userId"] = "userId";
    VotesOnThreadScalarFieldEnum["threadId"] = "threadId";
    VotesOnThreadScalarFieldEnum["vote"] = "vote";
    VotesOnThreadScalarFieldEnum["createdAt"] = "createdAt";
    VotesOnThreadScalarFieldEnum["updatedAt"] = "updatedAt";
})(VotesOnThreadScalarFieldEnum = exports.VotesOnThreadScalarFieldEnum || (exports.VotesOnThreadScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VotesOnThreadScalarFieldEnum, {
    name: "VotesOnThreadScalarFieldEnum",
    description: undefined,
});
