"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnTimelinesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnTimelinesMinOrderByAggregateInput = class TagsOnTimelinesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesMinOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesMinOrderByAggregateInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnTimelinesMinOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnTimelinesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnTimelinesMinOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnTimelinesMinOrderByAggregateInput);
exports.TagsOnTimelinesMinOrderByAggregateInput = TagsOnTimelinesMinOrderByAggregateInput;
