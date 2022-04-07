"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TagScalarFieldEnum;
(function (TagScalarFieldEnum) {
    TagScalarFieldEnum["id"] = "id";
    TagScalarFieldEnum["label"] = "label";
})(TagScalarFieldEnum = exports.TagScalarFieldEnum || (exports.TagScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
    name: "TagScalarFieldEnum",
    description: undefined,
});
