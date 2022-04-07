"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesWhereInput_1 = require("../inputs/TagsOnPremisesWhereInput");
let TagsOnPremisesListRelationFilter = class TagsOnPremisesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], TagsOnPremisesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], TagsOnPremisesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], TagsOnPremisesListRelationFilter.prototype, "none", void 0);
TagsOnPremisesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesListRelationFilter", {
        isAbstract: true
    })
], TagsOnPremisesListRelationFilter);
exports.TagsOnPremisesListRelationFilter = TagsOnPremisesListRelationFilter;
