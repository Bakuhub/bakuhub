"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySubscriptionsOnPremisesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesOrderByWithAggregationInput_1 = require("../../../inputs/SubscriptionsOnPremisesOrderByWithAggregationInput");
const SubscriptionsOnPremisesScalarWhereWithAggregatesInput_1 = require("../../../inputs/SubscriptionsOnPremisesScalarWhereWithAggregatesInput");
const SubscriptionsOnPremisesWhereInput_1 = require("../../../inputs/SubscriptionsOnPremisesWhereInput");
const SubscriptionsOnPremisesScalarFieldEnum_1 = require("../../../../enums/SubscriptionsOnPremisesScalarFieldEnum");
let GroupBySubscriptionsOnPremisesArgs = class GroupBySubscriptionsOnPremisesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesWhereInput_1.SubscriptionsOnPremisesWhereInput)
], GroupBySubscriptionsOnPremisesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesOrderByWithAggregationInput_1.SubscriptionsOnPremisesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubscriptionsOnPremisesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SubscriptionsOnPremisesScalarFieldEnum_1.SubscriptionsOnPremisesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupBySubscriptionsOnPremisesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesScalarWhereWithAggregatesInput_1.SubscriptionsOnPremisesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesScalarWhereWithAggregatesInput_1.SubscriptionsOnPremisesScalarWhereWithAggregatesInput)
], GroupBySubscriptionsOnPremisesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubscriptionsOnPremisesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupBySubscriptionsOnPremisesArgs.prototype, "skip", void 0);
GroupBySubscriptionsOnPremisesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupBySubscriptionsOnPremisesArgs);
exports.GroupBySubscriptionsOnPremisesArgs = GroupBySubscriptionsOnPremisesArgs;
