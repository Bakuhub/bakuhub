"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnPremisesMinOrderByAggregateInput = class TagsOnPremisesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesMinOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesMinOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesMinOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnPremisesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesMinOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnPremisesMinOrderByAggregateInput);
exports.TagsOnPremisesMinOrderByAggregateInput = TagsOnPremisesMinOrderByAggregateInput;
