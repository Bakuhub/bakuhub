"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineOrderByWithAggregationInput_1 = require("../../../inputs/ThreadsOnTimelineOrderByWithAggregationInput");
const ThreadsOnTimelineScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThreadsOnTimelineScalarWhereWithAggregatesInput");
const ThreadsOnTimelineWhereInput_1 = require("../../../inputs/ThreadsOnTimelineWhereInput");
const ThreadsOnTimelineScalarFieldEnum_1 = require("../../../../enums/ThreadsOnTimelineScalarFieldEnum");
let GroupByThreadsOnTimelineArgs = class GroupByThreadsOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], GroupByThreadsOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineOrderByWithAggregationInput_1.ThreadsOnTimelineOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarFieldEnum_1.ThreadsOnTimelineScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnTimelineArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineScalarWhereWithAggregatesInput_1.ThreadsOnTimelineScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineScalarWhereWithAggregatesInput_1.ThreadsOnTimelineScalarWhereWithAggregatesInput)
], GroupByThreadsOnTimelineArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnTimelineArgs.prototype, "skip", void 0);
GroupByThreadsOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThreadsOnTimelineArgs);
exports.GroupByThreadsOnTimelineArgs = GroupByThreadsOnTimelineArgs;
