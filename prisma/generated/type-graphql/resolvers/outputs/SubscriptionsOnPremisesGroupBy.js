"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionsOnPremisesCountAggregate_1 = require("../outputs/SubscriptionsOnPremisesCountAggregate");
const SubscriptionsOnPremisesMaxAggregate_1 = require("../outputs/SubscriptionsOnPremisesMaxAggregate");
const SubscriptionsOnPremisesMinAggregate_1 = require("../outputs/SubscriptionsOnPremisesMinAggregate");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesGroupBy = class SubscriptionsOnPremisesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesGroupBy.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCountAggregate_1.SubscriptionsOnPremisesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCountAggregate_1.SubscriptionsOnPremisesCountAggregate)
], SubscriptionsOnPremisesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMinAggregate_1.SubscriptionsOnPremisesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMinAggregate_1.SubscriptionsOnPremisesMinAggregate)
], SubscriptionsOnPremisesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesMaxAggregate_1.SubscriptionsOnPremisesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesMaxAggregate_1.SubscriptionsOnPremisesMaxAggregate)
], SubscriptionsOnPremisesGroupBy.prototype, "_max", void 0);
SubscriptionsOnPremisesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubscriptionsOnPremisesGroupBy", {
        isAbstract: true
    })
], SubscriptionsOnPremisesGroupBy);
exports.SubscriptionsOnPremisesGroupBy = SubscriptionsOnPremisesGroupBy;
