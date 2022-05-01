"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput");
const UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserCreateNestedOneWithoutSubscriptionsOnPremisesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesCreateInput = class SubscriptionsOnPremisesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.UserCreateNestedOneWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesCreateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateInput);
exports.SubscriptionsOnPremisesCreateInput = SubscriptionsOnPremisesCreateInput;
