"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThreadsOnVisionScalarFieldEnum;
(function (ThreadsOnVisionScalarFieldEnum) {
    ThreadsOnVisionScalarFieldEnum["threadId"] = "threadId";
    ThreadsOnVisionScalarFieldEnum["visionId"] = "visionId";
    ThreadsOnVisionScalarFieldEnum["assignedAt"] = "assignedAt";
})(ThreadsOnVisionScalarFieldEnum = exports.ThreadsOnVisionScalarFieldEnum || (exports.ThreadsOnVisionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThreadsOnVisionScalarFieldEnum, {
    name: "ThreadsOnVisionScalarFieldEnum",
    description: undefined,
});
