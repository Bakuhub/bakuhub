"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubscriptionsOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCountAggregate_1 = require("../outputs/SubscriptionsOnTimelinesCountAggregate");
const SubscriptionsOnTimelinesMaxAggregate_1 = require("../outputs/SubscriptionsOnTimelinesMaxAggregate");
const SubscriptionsOnTimelinesMinAggregate_1 = require("../outputs/SubscriptionsOnTimelinesMinAggregate");
let AggregateSubscriptionsOnTimelines = class AggregateSubscriptionsOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCountAggregate_1.SubscriptionsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCountAggregate_1.SubscriptionsOnTimelinesCountAggregate)
], AggregateSubscriptionsOnTimelines.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMinAggregate_1.SubscriptionsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMinAggregate_1.SubscriptionsOnTimelinesMinAggregate)
], AggregateSubscriptionsOnTimelines.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMaxAggregate_1.SubscriptionsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMaxAggregate_1.SubscriptionsOnTimelinesMaxAggregate)
], AggregateSubscriptionsOnTimelines.prototype, "_max", void 0);
AggregateSubscriptionsOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSubscriptionsOnTimelines", {
        isAbstract: true
    })
], AggregateSubscriptionsOnTimelines);
exports.AggregateSubscriptionsOnTimelines = AggregateSubscriptionsOnTimelines;
