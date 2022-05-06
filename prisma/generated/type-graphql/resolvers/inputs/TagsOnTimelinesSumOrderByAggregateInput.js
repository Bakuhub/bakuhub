"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnTimelinesSumOrderByAggregateInput = class TagsOnTimelinesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesSumOrderByAggregateInput.prototype, "tagId", void 0);
TagsOnTimelinesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesSumOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnTimelinesSumOrderByAggregateInput);
exports.TagsOnTimelinesSumOrderByAggregateInput = TagsOnTimelinesSumOrderByAggregateInput;
