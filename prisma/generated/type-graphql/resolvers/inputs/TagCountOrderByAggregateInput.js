"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagCountOrderByAggregateInput = class TagCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCountOrderByAggregateInput.prototype, "label", void 0);
TagCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCountOrderByAggregateInput", {
        isAbstract: true
    })
], TagCountOrderByAggregateInput);
exports.TagCountOrderByAggregateInput = TagCountOrderByAggregateInput;
