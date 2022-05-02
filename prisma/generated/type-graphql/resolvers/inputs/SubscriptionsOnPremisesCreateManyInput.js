"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesCreateManyInput = class SubscriptionsOnPremisesCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateManyInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateManyInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateManyInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateManyInput);
exports.SubscriptionsOnPremisesCreateManyInput = SubscriptionsOnPremisesCreateManyInput;
