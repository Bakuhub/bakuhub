"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput");
let SupscriptionsOnTimelinesUpdateWithoutTimelineInput = class SupscriptionsOnTimelinesUpdateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutTimelineInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesUpdateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateWithoutTimelineInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateWithoutTimelineInput);
exports.SupscriptionsOnTimelinesUpdateWithoutTimelineInput = SupscriptionsOnTimelinesUpdateWithoutTimelineInput;
