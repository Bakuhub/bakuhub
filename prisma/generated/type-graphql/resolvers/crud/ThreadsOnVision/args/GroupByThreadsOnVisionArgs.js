"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionOrderByWithAggregationInput_1 = require("../../../inputs/ThreadsOnVisionOrderByWithAggregationInput");
const ThreadsOnVisionScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThreadsOnVisionScalarWhereWithAggregatesInput");
const ThreadsOnVisionWhereInput_1 = require("../../../inputs/ThreadsOnVisionWhereInput");
const ThreadsOnVisionScalarFieldEnum_1 = require("../../../../enums/ThreadsOnVisionScalarFieldEnum");
let GroupByThreadsOnVisionArgs = class GroupByThreadsOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], GroupByThreadsOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionOrderByWithAggregationInput_1.ThreadsOnVisionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarFieldEnum_1.ThreadsOnVisionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnVisionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionScalarWhereWithAggregatesInput_1.ThreadsOnVisionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionScalarWhereWithAggregatesInput_1.ThreadsOnVisionScalarWhereWithAggregatesInput)
], GroupByThreadsOnVisionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnVisionArgs.prototype, "skip", void 0);
GroupByThreadsOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThreadsOnVisionArgs);
exports.GroupByThreadsOnVisionArgs = GroupByThreadsOnVisionArgs;
