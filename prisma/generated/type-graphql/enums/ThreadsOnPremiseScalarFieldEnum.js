"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThreadsOnPremiseScalarFieldEnum;
(function (ThreadsOnPremiseScalarFieldEnum) {
    ThreadsOnPremiseScalarFieldEnum["threadId"] = "threadId";
    ThreadsOnPremiseScalarFieldEnum["premiseId"] = "premiseId";
    ThreadsOnPremiseScalarFieldEnum["assignedAt"] = "assignedAt";
})(ThreadsOnPremiseScalarFieldEnum = exports.ThreadsOnPremiseScalarFieldEnum || (exports.ThreadsOnPremiseScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThreadsOnPremiseScalarFieldEnum, {
    name: "ThreadsOnPremiseScalarFieldEnum",
    description: undefined,
});
