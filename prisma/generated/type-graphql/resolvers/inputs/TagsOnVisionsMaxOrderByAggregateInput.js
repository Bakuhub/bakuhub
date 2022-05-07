"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsMaxOrderByAggregateInput = class TagsOnVisionsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMaxOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMaxOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsMaxOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnVisionsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnVisionsMaxOrderByAggregateInput);
exports.TagsOnVisionsMaxOrderByAggregateInput = TagsOnVisionsMaxOrderByAggregateInput;
