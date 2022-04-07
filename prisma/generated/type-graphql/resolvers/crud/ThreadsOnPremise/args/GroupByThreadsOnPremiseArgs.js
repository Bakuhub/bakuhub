"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseOrderByWithAggregationInput_1 = require("../../../inputs/ThreadsOnPremiseOrderByWithAggregationInput");
const ThreadsOnPremiseScalarWhereWithAggregatesInput_1 = require("../../../inputs/ThreadsOnPremiseScalarWhereWithAggregatesInput");
const ThreadsOnPremiseWhereInput_1 = require("../../../inputs/ThreadsOnPremiseWhereInput");
const ThreadsOnPremiseScalarFieldEnum_1 = require("../../../../enums/ThreadsOnPremiseScalarFieldEnum");
let GroupByThreadsOnPremiseArgs = class GroupByThreadsOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], GroupByThreadsOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseOrderByWithAggregationInput_1.ThreadsOnPremiseOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarFieldEnum_1.ThreadsOnPremiseScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByThreadsOnPremiseArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseScalarWhereWithAggregatesInput_1.ThreadsOnPremiseScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseScalarWhereWithAggregatesInput_1.ThreadsOnPremiseScalarWhereWithAggregatesInput)
], GroupByThreadsOnPremiseArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByThreadsOnPremiseArgs.prototype, "skip", void 0);
GroupByThreadsOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByThreadsOnPremiseArgs);
exports.GroupByThreadsOnPremiseArgs = GroupByThreadsOnPremiseArgs;
