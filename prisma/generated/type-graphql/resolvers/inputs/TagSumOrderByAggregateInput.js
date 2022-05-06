"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagSumOrderByAggregateInput = class TagSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagSumOrderByAggregateInput.prototype, "id", void 0);
TagSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagSumOrderByAggregateInput", {
        isAbstract: true
    })
], TagSumOrderByAggregateInput);
exports.TagSumOrderByAggregateInput = TagSumOrderByAggregateInput;
