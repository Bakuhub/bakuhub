"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesMinAggregate = class SubscriptionsOnPremisesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesMinAggregate.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesMinAggregate.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesMinAggregate.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SubscriptionsOnPremisesMinAggregate", {
        isAbstract: true
    })
], SubscriptionsOnPremisesMinAggregate);
exports.SubscriptionsOnPremisesMinAggregate = SubscriptionsOnPremisesMinAggregate;
