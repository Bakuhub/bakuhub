"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput");
let SubscriptionsOnPremisesUpdateWithoutUserInput = class SubscriptionsOnPremisesUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesUpdateWithoutUserInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutUserInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithoutUserInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateWithoutUserInput);
exports.SubscriptionsOnPremisesUpdateWithoutUserInput = SubscriptionsOnPremisesUpdateWithoutUserInput;
