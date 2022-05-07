"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsOnVisionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOnVisionsOrderByWithAggregationInput_1 = require("../../../inputs/TagsOnVisionsOrderByWithAggregationInput");
const TagsOnVisionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TagsOnVisionsScalarWhereWithAggregatesInput");
const TagsOnVisionsWhereInput_1 = require("../../../inputs/TagsOnVisionsWhereInput");
const TagsOnVisionsScalarFieldEnum_1 = require("../../../../enums/TagsOnVisionsScalarFieldEnum");
let GroupByTagsOnVisionsArgs = class GroupByTagsOnVisionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsWhereInput_1.TagsOnVisionsWhereInput)
], GroupByTagsOnVisionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsOrderByWithAggregationInput_1.TagsOnVisionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnVisionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TagsOnVisionsScalarFieldEnum_1.TagsOnVisionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTagsOnVisionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnVisionsScalarWhereWithAggregatesInput_1.TagsOnVisionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnVisionsScalarWhereWithAggregatesInput_1.TagsOnVisionsScalarWhereWithAggregatesInput)
], GroupByTagsOnVisionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnVisionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTagsOnVisionsArgs.prototype, "skip", void 0);
GroupByTagsOnVisionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTagsOnVisionsArgs);
exports.GroupByTagsOnVisionsArgs = GroupByTagsOnVisionsArgs;
