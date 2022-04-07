"use strict";
var TagsOnPremisesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagRelationFilter_1 = require("../inputs/TagRelationFilter");
let TagsOnPremisesWhereInput = TagsOnPremisesWhereInput_1 = class TagsOnPremisesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagsOnPremisesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagRelationFilter_1.TagRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagRelationFilter_1.TagRelationFilter)
], TagsOnPremisesWhereInput.prototype, "tag", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TagsOnPremisesWhereInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], TagsOnPremisesWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TagsOnPremisesWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TagsOnPremisesWhereInput.prototype, "assignedAt", void 0);
TagsOnPremisesWhereInput = TagsOnPremisesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesWhereInput", {
        isAbstract: true
    })
], TagsOnPremisesWhereInput);
exports.TagsOnPremisesWhereInput = TagsOnPremisesWhereInput;
