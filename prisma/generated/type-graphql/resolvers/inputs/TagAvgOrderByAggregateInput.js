"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagAvgOrderByAggregateInput = class TagAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagAvgOrderByAggregateInput.prototype, "id", void 0);
TagAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TagAvgOrderByAggregateInput);
exports.TagAvgOrderByAggregateInput = TagAvgOrderByAggregateInput;
