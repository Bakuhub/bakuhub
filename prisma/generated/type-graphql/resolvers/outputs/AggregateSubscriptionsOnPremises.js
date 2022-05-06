"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubscriptionsOnPremises = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCountAggregate_1 = require("../outputs/SubscriptionsOnPremisesCountAggregate");
const SubscriptionsOnPremisesMaxAggregate_1 = require("../outputs/SubscriptionsOnPremisesMaxAggregate");
const SubscriptionsOnPremisesMinAggregate_1 = require("../outputs/SubscriptionsOnPremisesMinAggregate");
let AggregateSubscriptionsOnPremises = class AggregateSubscriptionsOnPremises {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCountAggregate_1.SubscriptionsOnPremisesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCountAggregate_1.SubscriptionsOnPremisesCountAggregate)
], AggregateSubscriptionsOnPremises.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMinAggregate_1.SubscriptionsOnPremisesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMinAggregate_1.SubscriptionsOnPremisesMinAggregate)
], AggregateSubscriptionsOnPremises.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMaxAggregate_1.SubscriptionsOnPremisesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMaxAggregate_1.SubscriptionsOnPremisesMaxAggregate)
], AggregateSubscriptionsOnPremises.prototype, "_max", void 0);
AggregateSubscriptionsOnPremises = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSubscriptionsOnPremises", {
        isAbstract: true
    })
], AggregateSubscriptionsOnPremises);
exports.AggregateSubscriptionsOnPremises = AggregateSubscriptionsOnPremises;
