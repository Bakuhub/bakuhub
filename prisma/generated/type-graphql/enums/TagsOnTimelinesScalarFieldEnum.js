"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagsOnTimelinesScalarFieldEnum;
(function (TagsOnTimelinesScalarFieldEnum) {
    TagsOnTimelinesScalarFieldEnum["tagId"] = "tagId";
    TagsOnTimelinesScalarFieldEnum["timelineId"] = "timelineId";
    TagsOnTimelinesScalarFieldEnum["assignedAt"] = "assignedAt";
})(TagsOnTimelinesScalarFieldEnum = exports.TagsOnTimelinesScalarFieldEnum || (exports.TagsOnTimelinesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagsOnTimelinesScalarFieldEnum, {
    name: "TagsOnTimelinesScalarFieldEnum",
    description: undefined,
});
