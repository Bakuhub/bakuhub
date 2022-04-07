"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThreadsOnTimelineScalarFieldEnum;
(function (ThreadsOnTimelineScalarFieldEnum) {
    ThreadsOnTimelineScalarFieldEnum["threadId"] = "threadId";
    ThreadsOnTimelineScalarFieldEnum["timelineId"] = "timelineId";
    ThreadsOnTimelineScalarFieldEnum["assignedAt"] = "assignedAt";
})(ThreadsOnTimelineScalarFieldEnum = exports.ThreadsOnTimelineScalarFieldEnum || (exports.ThreadsOnTimelineScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThreadsOnTimelineScalarFieldEnum, {
    name: "ThreadsOnTimelineScalarFieldEnum",
    description: undefined,
});
