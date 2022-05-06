"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagsOnPremisesScalarFieldEnum;
(function (TagsOnPremisesScalarFieldEnum) {
    TagsOnPremisesScalarFieldEnum["tagId"] = "tagId";
    TagsOnPremisesScalarFieldEnum["premiseId"] = "premiseId";
    TagsOnPremisesScalarFieldEnum["assignedAt"] = "assignedAt";
})(TagsOnPremisesScalarFieldEnum = exports.TagsOnPremisesScalarFieldEnum || (exports.TagsOnPremisesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagsOnPremisesScalarFieldEnum, {
    name: "TagsOnPremisesScalarFieldEnum",
    description: undefined,
});
