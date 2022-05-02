"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
let SubscriptionsOnPremisesUpdateManyMutationInput = class SubscriptionsOnPremisesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateManyMutationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateManyMutationInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateManyMutationInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateManyMutationInput);
exports.SubscriptionsOnPremisesUpdateManyMutationInput = SubscriptionsOnPremisesUpdateManyMutationInput;
