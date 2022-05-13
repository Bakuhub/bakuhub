"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutVisionViewsHistoryInput");
let VisionViewsHistoryUpdateWithoutUserInput = class VisionViewsHistoryUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput)
], VisionViewsHistoryUpdateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateWithoutUserInput.prototype, "createdAt", void 0);
VisionViewsHistoryUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateWithoutUserInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateWithoutUserInput);
exports.VisionViewsHistoryUpdateWithoutUserInput = VisionViewsHistoryUpdateWithoutUserInput;
