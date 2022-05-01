"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput");
const SubscriptionType_1 = require("../../enums/SubscriptionType");
let SubscriptionsOnPremisesCreateWithoutUserInput = class SubscriptionsOnPremisesCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput_1.PremiseCreateNestedOneWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesCreateWithoutUserInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionType_1.SubscriptionType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubscriptionsOnPremisesCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SubscriptionsOnPremisesCreateWithoutUserInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesCreateWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesCreateWithoutUserInput);
exports.SubscriptionsOnPremisesCreateWithoutUserInput = SubscriptionsOnPremisesCreateWithoutUserInput;
