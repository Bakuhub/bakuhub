"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput");
const UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput");
let SubscriptionsOnPremisesUpdateInput = class SubscriptionsOnPremisesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnPremisesUpdateInput.prototype, "updatedAt", void 0);
SubscriptionsOnPremisesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnPremisesUpdateInput", {
        isAbstract: true
    })
], SubscriptionsOnPremisesUpdateInput);
exports.SubscriptionsOnPremisesUpdateInput = SubscriptionsOnPremisesUpdateInput;
