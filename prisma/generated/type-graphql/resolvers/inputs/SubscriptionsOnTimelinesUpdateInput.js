"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnTimelinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput");
const UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput");
let SubscriptionsOnTimelinesUpdateInput = class SubscriptionsOnTimelinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSubscriptionsOnTimelinesInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "hasUnreadNotifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "lastReadAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SubscriptionsOnTimelinesUpdateInput.prototype, "updatedAt", void 0);
SubscriptionsOnTimelinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubscriptionsOnTimelinesUpdateInput", {
        isAbstract: true
    })
], SubscriptionsOnTimelinesUpdateInput);
exports.SubscriptionsOnTimelinesUpdateInput = SubscriptionsOnTimelinesUpdateInput;
