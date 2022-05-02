"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput");
let SubscriptionsOnTimelinesUpdateWithoutTimelineInput = class SubscriptionsOnTimelinesUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateWithoutTimelineInput);
exports.SubscriptionsOnTimelinesUpdateWithoutTimelineInput = SubscriptionsOnTimelinesUpdateWithoutTimelineInput;
