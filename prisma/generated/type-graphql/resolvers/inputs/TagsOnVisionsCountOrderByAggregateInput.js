"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsCountOrderByAggregateInput = class TagsOnVisionsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsCountOrderByAggregateInput.prototype, "tagId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsCountOrderByAggregateInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsCountOrderByAggregateInput.prototype, "assignedAt", void 0);
TagsOnVisionsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsCountOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnVisionsCountOrderByAggregateInput);
exports.TagsOnVisionsCountOrderByAggregateInput = TagsOnVisionsCountOrderByAggregateInput;
