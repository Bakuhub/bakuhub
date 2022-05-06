"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnPremisesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnPremisesCountOrderByAggregateInput = class TagsOnPremisesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesCountOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesCountOrderByAggregateInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnPremisesCountOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnPremisesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnPremisesCountOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnPremisesCountOrderByAggregateInput);
exports.TagsOnPremisesCountOrderByAggregateInput = TagsOnPremisesCountOrderByAggregateInput;
