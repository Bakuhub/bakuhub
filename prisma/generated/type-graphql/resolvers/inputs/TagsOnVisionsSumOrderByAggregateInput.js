"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsSumOrderByAggregateInput = class TagsOnVisionsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsSumOrderByAggregateInput.prototype, "tagId", void 0);
TagsOnVisionsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsSumOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnVisionsSumOrderByAggregateInput);
exports.TagsOnVisionsSumOrderByAggregateInput = TagsOnVisionsSumOrderByAggregateInput;
