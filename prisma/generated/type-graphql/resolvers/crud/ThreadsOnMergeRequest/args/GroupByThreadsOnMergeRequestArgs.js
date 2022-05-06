"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnMergeRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestOrderByWithAggregationInput_1 = require("../../../inputs/ThreadsOnMergeRequestOrderByWithAggregationInput");
const ThreadsOnMergeRequestScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThreadsOnMergeRequestScalarWhereWithAggregatesInput");
const ThreadsOnMergeRequestWhereInput_1 = require("../../../inputs/ThreadsOnMergeRequestWhereInput");
const ThreadsOnMergeRequestScalarFieldEnum_1 = require("../../../../enums/ThreadsOnMergeRequestScalarFieldEnum");
let GroupByThreadsOnMergeRequestArgs = class GroupByThreadsOnMergeRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], GroupByThreadsOnMergeRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestOrderByWithAggregationInput_1.ThreadsOnMergeRequestOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnMergeRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarFieldEnum_1.ThreadsOnMergeRequestScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnMergeRequestArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestScalarWhereWithAggregatesInput_1.ThreadsOnMergeRequestScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestScalarWhereWithAggregatesInput_1.ThreadsOnMergeRequestScalarWhereWithAggregatesInput)
], GroupByThreadsOnMergeRequestArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnMergeRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnMergeRequestArgs.prototype, "skip", void 0);
GroupByThreadsOnMergeRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThreadsOnMergeRequestArgs);
exports.GroupByThreadsOnMergeRequestArgs = GroupByThreadsOnMergeRequestArgs;
