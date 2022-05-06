"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThreadsOnMergeRequestScalarFieldEnum;
(function (ThreadsOnMergeRequestScalarFieldEnum) {
    ThreadsOnMergeRequestScalarFieldEnum["threadId"] = "threadId";
    ThreadsOnMergeRequestScalarFieldEnum["mergeRequestId"] = "mergeRequestId";
    ThreadsOnMergeRequestScalarFieldEnum["assignedAt"] = "assignedAt";
})(ThreadsOnMergeRequestScalarFieldEnum = exports.ThreadsOnMergeRequestScalarFieldEnum || (exports.ThreadsOnMergeRequestScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThreadsOnMergeRequestScalarFieldEnum, {
    name: "ThreadsOnMergeRequestScalarFieldEnum",
    description: undefined,
});
