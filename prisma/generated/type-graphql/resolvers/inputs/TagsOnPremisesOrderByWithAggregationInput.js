"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnPremisesAvgOrderByAggregateInput_1 = require("../inputs/TagsOnPremisesAvgOrderByAggregateInput");
const TagsOnPremisesCountOrderByAggregateInput_1 = require("../inputs/TagsOnPremisesCountOrderByAggregateInput");
const TagsOnPremisesMaxOrderByAggregateInput_1 = require("../inputs/TagsOnPremisesMaxOrderByAggregateInput");
const TagsOnPremisesMinOrderByAggregateInput_1 = require("../inputs/TagsOnPremisesMinOrderByAggregateInput");
const TagsOnPremisesSumOrderByAggregateInput_1 = require("../inputs/TagsOnPremisesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnPremisesOrderByWithAggregationInput = class TagsOnPremisesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesCountOrderByAggregateInput_1.TagsOnPremisesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesCountOrderByAggregateInput_1.TagsOnPremisesCountOrderByAggregateInput)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesAvgOrderByAggregateInput_1.TagsOnPremisesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesAvgOrderByAggregateInput_1.TagsOnPremisesAvgOrderByAggregateInput)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMaxOrderByAggregateInput_1.TagsOnPremisesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMaxOrderByAggregateInput_1.TagsOnPremisesMaxOrderByAggregateInput)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesMinOrderByAggregateInput_1.TagsOnPremisesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesMinOrderByAggregateInput_1.TagsOnPremisesMinOrderByAggregateInput)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesSumOrderByAggregateInput_1.TagsOnPremisesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesSumOrderByAggregateInput_1.TagsOnPremisesSumOrderByAggregateInput)
], TagsOnPremisesOrderByWithAggregationInput.prototype, "_sum", void 0);
TagsOnPremisesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TagsOnPremisesOrderByWithAggregationInput);
exports.TagsOnPremisesOrderByWithAggregationInput = TagsOnPremisesOrderByWithAggregationInput;
