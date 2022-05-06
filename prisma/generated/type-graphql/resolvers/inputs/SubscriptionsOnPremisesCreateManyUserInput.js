"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesCreateManyUserInput = class SubscriptionsOnPremisesCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyUserInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateManyUserInput);
exports.SubscriptionsOnPremisesCreateManyUserInput = SubscriptionsOnPremisesCreateManyUserInput;
