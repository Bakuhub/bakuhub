"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesOrderByWithAggregationInput_1 = require("../../../inputs/TagsOnPremisesOrderByWithAggregationInput");
const TagsOnPremisesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TagsOnPremisesScalarWhereWithAggregatesInput");
const TagsOnPremisesWhereInput_1 = require("../../../inputs/TagsOnPremisesWhereInput");
const TagsOnPremisesScalarFieldEnum_1 = require("../../../../enums/TagsOnPremisesScalarFieldEnum");
let GroupByTagsOnPremisesArgs = class GroupByTagsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesWhereInput_1.TagsOnPremisesWhereInput)
], GroupByTagsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesOrderByWithAggregationInput_1.TagsOnPremisesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnPremisesScalarFieldEnum_1.TagsOnPremisesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnPremisesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesScalarWhereWithAggregatesInput_1.TagsOnPremisesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesScalarWhereWithAggregatesInput_1.TagsOnPremisesScalarWhereWithAggregatesInput)
], GroupByTagsOnPremisesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnPremisesArgs.prototype, "skip", void 0);
GroupByTagsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTagsOnPremisesArgs);
exports.GroupByTagsOnPremisesArgs = GroupByTagsOnPremisesArgs;
