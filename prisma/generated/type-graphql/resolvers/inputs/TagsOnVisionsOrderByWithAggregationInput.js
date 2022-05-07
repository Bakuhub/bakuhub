"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsAvgOrderByAggregateInput_1 = require("../inputs/TagsOnVisionsAvgOrderByAggregateInput");
const TagsOnVisionsCountOrderByAggregateInput_1 = require("../inputs/TagsOnVisionsCountOrderByAggregateInput");
const TagsOnVisionsMaxOrderByAggregateInput_1 = require("../inputs/TagsOnVisionsMaxOrderByAggregateInput");
const TagsOnVisionsMinOrderByAggregateInput_1 = require("../inputs/TagsOnVisionsMinOrderByAggregateInput");
const TagsOnVisionsSumOrderByAggregateInput_1 = require("../inputs/TagsOnVisionsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsOrderByWithAggregationInput = class TagsOnVisionsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsCountOrderByAggregateInput_1.TagsOnVisionsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsCountOrderByAggregateInput_1.TagsOnVisionsCountOrderByAggregateInput)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsAvgOrderByAggregateInput_1.TagsOnVisionsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsAvgOrderByAggregateInput_1.TagsOnVisionsAvgOrderByAggregateInput)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMaxOrderByAggregateInput_1.TagsOnVisionsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMaxOrderByAggregateInput_1.TagsOnVisionsMaxOrderByAggregateInput)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsMinOrderByAggregateInput_1.TagsOnVisionsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsMinOrderByAggregateInput_1.TagsOnVisionsMinOrderByAggregateInput)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsSumOrderByAggregateInput_1.TagsOnVisionsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsSumOrderByAggregateInput_1.TagsOnVisionsSumOrderByAggregateInput)
], TagsOnVisionsOrderByWithAggregationInput.prototype, "_sum", void 0);
TagsOnVisionsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TagsOnVisionsOrderByWithAggregationInput);
exports.TagsOnVisionsOrderByWithAggregationInput = TagsOnVisionsOrderByWithAggregationInput;
