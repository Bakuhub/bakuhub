"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutSubscriptionsOnPremisesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesCreateWithoutPremiseInput = class SubscriptionsOnPremisesCreateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesCreateWithoutPremiseInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateWithoutPremiseInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateWithoutPremiseInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateWithoutPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateWithoutPremiseInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesCreateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateWithoutPremiseInput);
exports.SubscriptionsOnPremisesCreateWithoutPremiseInput = SubscriptionsOnPremisesCreateWithoutPremiseInput;
