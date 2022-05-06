"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnTimelinesCountOrderByAggregateInput = class TagsOnTimelinesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesCountOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesCountOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesCountOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnTimelinesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesCountOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnTimelinesCountOrderByAggregateInput);
exports.TagsOnTimelinesCountOrderByAggregateInput = TagsOnTimelinesCountOrderByAggregateInput;
