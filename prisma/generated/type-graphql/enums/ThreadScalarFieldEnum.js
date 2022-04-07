"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThreadScalarFieldEnum;
(function (ThreadScalarFieldEnum) {
    ThreadScalarFieldEnum["id"] = "id";
    ThreadScalarFieldEnum["title"] = "title";
    ThreadScalarFieldEnum["activityDate"] = "activityDate";
    ThreadScalarFieldEnum["description"] = "description";
    ThreadScalarFieldEnum["createdAt"] = "createdAt";
    ThreadScalarFieldEnum["reference"] = "reference";
    ThreadScalarFieldEnum["authorId"] = "authorId";
    ThreadScalarFieldEnum["parentThreadId"] = "parentThreadId";
})(ThreadScalarFieldEnum = exports.ThreadScalarFieldEnum || (exports.ThreadScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThreadScalarFieldEnum, {
    name: "ThreadScalarFieldEnum",
    description: undefined,
});
