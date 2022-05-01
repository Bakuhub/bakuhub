"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SubscriptionsOnPremisesOrderByRelationAggregateInput = class SubscriptionsOnPremisesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesOrderByRelationAggregateInput.prototype, "_count", void 0);
SubscriptionsOnPremisesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesOrderByRelationAggregateInput);
exports.SubscriptionsOnPremisesOrderByRelationAggregateInput = SubscriptionsOnPremisesOrderByRelationAggregateInput;
