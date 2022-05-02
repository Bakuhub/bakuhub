"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
let SubscriptionsOnTimelinesUpdateManyMutationInput = class SubscriptionsOnTimelinesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateManyMutationInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateManyMutationInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateManyMutationInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateManyMutationInput);
exports.SubscriptionsOnTimelinesUpdateManyMutationInput = SubscriptionsOnTimelinesUpdateManyMutationInput;
