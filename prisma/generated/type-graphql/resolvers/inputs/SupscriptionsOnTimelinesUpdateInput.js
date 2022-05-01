"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput");
const UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput");
let SupscriptionsOnTimelinesUpdateInput = class SupscriptionsOnTimelinesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.UserUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesUpdateInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateInput);
exports.SupscriptionsOnTimelinesUpdateInput = SupscriptionsOnTimelinesUpdateInput;
