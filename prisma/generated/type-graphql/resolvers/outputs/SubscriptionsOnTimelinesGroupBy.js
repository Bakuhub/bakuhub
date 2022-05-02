"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnTimelinesCountAggregate_1 = require("../outputs/SubscriptionsOnTimelinesCountAggregate");
const SubscriptionsOnTimelinesMaxAggregate_1 = require("../outputs/SubscriptionsOnTimelinesMaxAggregate");
const SubscriptionsOnTimelinesMinAggregate_1 = require("../outputs/SubscriptionsOnTimelinesMinAggregate");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnTimelinesGroupBy = class SubscriptionsOnTimelinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesGroupBy.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnTimelinesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnTimelinesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCountAggregate_1.SubscriptionsOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCountAggregate_1.SubscriptionsOnTimelinesCountAggregate)
], SubscriptionsOnTimelinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMinAggregate_1.SubscriptionsOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMinAggregate_1.SubscriptionsOnTimelinesMinAggregate)
], SubscriptionsOnTimelinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesMaxAggregate_1.SubscriptionsOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesMaxAggregate_1.SubscriptionsOnTimelinesMaxAggregate)
], SubscriptionsOnTimelinesGroupBy.prototype, "_max", void 0);
SubscriptionsOnTimelinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubscriptionsOnTimelinesGroupBy", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesGroupBy);
exports.SubscriptionsOnTimelinesGroupBy = SubscriptionsOnTimelinesGroupBy;
