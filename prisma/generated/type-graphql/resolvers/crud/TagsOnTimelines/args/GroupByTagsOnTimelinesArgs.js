"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesOrderByWithAggregationInput_1 = require("../../../inputs/TagsOnTimelinesOrderByWithAggregationInput");
const TagsOnTimelinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/TagsOnTimelinesScalarWhereWithAggregatesInput");
const TagsOnTimelinesWhereInput_1 = require("../../../inputs/TagsOnTimelinesWhereInput");
const TagsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/TagsOnTimelinesScalarFieldEnum");
let GroupByTagsOnTimelinesArgs = class GroupByTagsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesWhereInput_1.TagsOnTimelinesWhereInput)
], GroupByTagsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesOrderByWithAggregationInput_1.TagsOnTimelinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnTimelinesScalarFieldEnum_1.TagsOnTimelinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnTimelinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesScalarWhereWithAggregatesInput_1.TagsOnTimelinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesScalarWhereWithAggregatesInput_1.TagsOnTimelinesScalarWhereWithAggregatesInput)
], GroupByTagsOnTimelinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnTimelinesArgs.prototype, "skip", void 0);
GroupByTagsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTagsOnTimelinesArgs);
exports.GroupByTagsOnTimelinesArgs = GroupByTagsOnTimelinesArgs;
