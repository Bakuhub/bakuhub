"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagWhereInput_1 = require("../inputs/TagWhereInput");
let TagRelationFilter = class TagRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TagRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagWhereInput_1.TagWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagWhereInput_1.TagWhereInput)
], TagRelationFilter.prototype, "isNot", void 0);
TagRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TagRelationFilter", {
        isAbstract: true
    })
], TagRelationFilter);
exports.TagRelationFilter = TagRelationFilter;
