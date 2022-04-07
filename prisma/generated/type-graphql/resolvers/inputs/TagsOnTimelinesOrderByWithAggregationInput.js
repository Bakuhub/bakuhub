"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnTimelinesAvgOrderByAggregateInput_1 = require("../inputs/TagsOnTimelinesAvgOrderByAggregateInput");
const TagsOnTimelinesCountOrderByAggregateInput_1 = require("../inputs/TagsOnTimelinesCountOrderByAggregateInput");
const TagsOnTimelinesMaxOrderByAggregateInput_1 = require("../inputs/TagsOnTimelinesMaxOrderByAggregateInput");
const TagsOnTimelinesMinOrderByAggregateInput_1 = require("../inputs/TagsOnTimelinesMinOrderByAggregateInput");
const TagsOnTimelinesSumOrderByAggregateInput_1 = require("../inputs/TagsOnTimelinesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnTimelinesOrderByWithAggregationInput = class TagsOnTimelinesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCountOrderByAggregateInput_1.TagsOnTimelinesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCountOrderByAggregateInput_1.TagsOnTimelinesCountOrderByAggregateInput)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesAvgOrderByAggregateInput_1.TagsOnTimelinesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesAvgOrderByAggregateInput_1.TagsOnTimelinesAvgOrderByAggregateInput)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMaxOrderByAggregateInput_1.TagsOnTimelinesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMaxOrderByAggregateInput_1.TagsOnTimelinesMaxOrderByAggregateInput)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesMinOrderByAggregateInput_1.TagsOnTimelinesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesMinOrderByAggregateInput_1.TagsOnTimelinesMinOrderByAggregateInput)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesSumOrderByAggregateInput_1.TagsOnTimelinesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesSumOrderByAggregateInput_1.TagsOnTimelinesSumOrderByAggregateInput)
], TagsOnTimelinesOrderByWithAggregationInput.prototype, "_sum", void 0);
TagsOnTimelinesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TagsOnTimelinesOrderByWithAggregationInput);
exports.TagsOnTimelinesOrderByWithAggregationInput = TagsOnTimelinesOrderByWithAggregationInput;
