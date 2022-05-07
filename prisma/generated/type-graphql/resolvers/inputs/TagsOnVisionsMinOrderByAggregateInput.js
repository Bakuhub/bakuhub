"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsMinOrderByAggregateInput = class TagsOnVisionsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMinOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMinOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMinOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnVisionsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsMinOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnVisionsMinOrderByAggregateInput);
exports.TagsOnVisionsMinOrderByAggregateInput = TagsOnVisionsMinOrderByAggregateInput;
