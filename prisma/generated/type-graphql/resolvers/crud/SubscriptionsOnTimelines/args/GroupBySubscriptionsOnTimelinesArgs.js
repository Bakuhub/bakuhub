"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySubscriptionsOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesOrderByWithAggregationInput_1 = require("../../../inputs/SubscriptionsOnTimelinesOrderByWithAggregationInput");
const SubscriptionsOnTimelinesScalarWhereWithAggregatesInput_1 = require("../../../inputs/SubscriptionsOnTimelinesScalarWhereWithAggregatesInput");
const SubscriptionsOnTimelinesWhereInput_1 = require("../../../inputs/SubscriptionsOnTimelinesWhereInput");
const SubscriptionsOnTimelinesScalarFieldEnum_1 = require("../../../../enums/SubscriptionsOnTimelinesScalarFieldEnum");
let GroupBySubscriptionsOnTimelinesArgs = class GroupBySubscriptionsOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesWhereInput_1.SubscriptionsOnTimelinesWhereInput)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesOrderByWithAggregationInput_1.SubscriptionsOnTimelinesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnTimelinesScalarFieldEnum_1.SubscriptionsOnTimelinesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesScalarWhereWithAggregatesInput_1.SubscriptionsOnTimelinesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesScalarWhereWithAggregatesInput_1.SubscriptionsOnTimelinesScalarWhereWithAggregatesInput)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubscriptionsOnTimelinesArgs.prototype, "skip", void 0);
GroupBySubscriptionsOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySubscriptionsOnTimelinesArgs);
exports.GroupBySubscriptionsOnTimelinesArgs = GroupBySubscriptionsOnTimelinesArgs;
