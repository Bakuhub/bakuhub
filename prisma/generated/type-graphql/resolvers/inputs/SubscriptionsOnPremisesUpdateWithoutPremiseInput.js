"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput");
let SubscriptionsOnPremisesUpdateWithoutPremiseInput = class SubscriptionsOnPremisesUpdateWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateWithoutPremiseInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesUpdateWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateWithoutPremiseInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateWithoutPremiseInput);
exports.SubscriptionsOnPremisesUpdateWithoutPremiseInput = SubscriptionsOnPremisesUpdateWithoutPremiseInput;
