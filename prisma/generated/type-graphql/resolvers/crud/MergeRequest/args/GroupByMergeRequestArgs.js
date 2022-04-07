"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestOrderByWithAggregationInput_1 = require("../../../inputs/MergeRequestOrderByWithAggregationInput");
const MergeRequestScalarWhereWithAggregatesInput_1 = require("../../../inputs/MergeRequestScalarWhereWithAggregatesInput");
const MergeRequestWhereInput_1 = require("../../../inputs/MergeRequestWhereInput");
const MergeRequestScalarFieldEnum_1 = require("../../../../enums/MergeRequestScalarFieldEnum");
let GroupByMergeRequestArgs = class GroupByMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], GroupByMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestOrderByWithAggregationInput_1.MergeRequestOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MergeRequestScalarFieldEnum_1.MergeRequestScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMergeRequestArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestScalarWhereWithAggregatesInput_1.MergeRequestScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestScalarWhereWithAggregatesInput_1.MergeRequestScalarWhereWithAggregatesInput)
], GroupByMergeRequestArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMergeRequestArgs.prototype, "skip", void 0);
GroupByMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMergeRequestArgs);
exports.GroupByMergeRequestArgs = GroupByMergeRequestArgs;
