"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VotesOnTimelineScalarFieldEnum;
(function (VotesOnTimelineScalarFieldEnum) {
    VotesOnTimelineScalarFieldEnum["userId"] = "userId";
    VotesOnTimelineScalarFieldEnum["timelineId"] = "timelineId";
    VotesOnTimelineScalarFieldEnum["vote"] = "vote";
    VotesOnTimelineScalarFieldEnum["createdAt"] = "createdAt";
})(VotesOnTimelineScalarFieldEnum = exports.VotesOnTimelineScalarFieldEnum || (exports.VotesOnTimelineScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(VotesOnTimelineScalarFieldEnum, {
    name: "VotesOnTimelineScalarFieldEnum",
    description: undefined,
});
