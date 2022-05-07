"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOnVisionsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOnVisionsAvgOrderByAggregateInput = class TagsOnVisionsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOnVisionsAvgOrderByAggregateInput.prototype, "tagId", void 0);
TagsOnVisionsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOnVisionsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TagsOnVisionsAvgOrderByAggregateInput);
exports.TagsOnVisionsAvgOrderByAggregateInput = TagsOnVisionsAvgOrderByAggregateInput;
