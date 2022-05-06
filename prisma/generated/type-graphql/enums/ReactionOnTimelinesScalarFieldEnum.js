"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReactionOnTimelinesScalarFieldEnum;
(function (ReactionOnTimelinesScalarFieldEnum) {
    ReactionOnTimelinesScalarFieldEnum["userId"] = "userId";
    ReactionOnTimelinesScalarFieldEnum["timelineId"] = "timelineId";
    ReactionOnTimelinesScalarFieldEnum["reaction"] = "reaction";
    ReactionOnTimelinesScalarFieldEnum["createdAt"] = "createdAt";
})(ReactionOnTimelinesScalarFieldEnum = exports.ReactionOnTimelinesScalarFieldEnum || (exports.ReactionOnTimelinesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReactionOnTimelinesScalarFieldEnum, {
    name: "ReactionOnTimelinesScalarFieldEnum",
    description: undefined,
});
