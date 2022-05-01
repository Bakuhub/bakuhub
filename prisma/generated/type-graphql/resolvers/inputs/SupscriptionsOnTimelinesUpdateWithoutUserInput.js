"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSubscriptionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumSubscriptionTypeFieldUpdateOperationsInput");
const TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1 = require("../inputs/TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput");
let SupscriptionsOnTimelinesUpdateWithoutUserInput = class SupscriptionsOnTimelinesUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput_1.TimelineUpdateOneRequiredWithoutSupscriptionsOnTimelinesInput)
], SupscriptionsOnTimelinesUpdateWithoutUserInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSubscriptionTypeFieldUpdateOperationsInput_1.EnumSubscriptionTypeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SupscriptionsOnTimelinesUpdateWithoutUserInput.prototype, "updatedAt", void 0);
SupscriptionsOnTimelinesUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesUpdateWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesUpdateWithoutUserInput);
exports.SupscriptionsOnTimelinesUpdateWithoutUserInput = SupscriptionsOnTimelinesUpdateWithoutUserInput;
