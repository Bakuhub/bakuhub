"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVisionViewsHistoryInput");
let VisionViewsHistoryUpdateWithoutVisionInput = class VisionViewsHistoryUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1.UserUpdateOneRequiredWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1.UserUpdateOneRequiredWithoutVisionViewsHistoryInput)
], VisionViewsHistoryUpdateWithoutVisionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateWithoutVisionInput.prototype, "createdAt", void 0);
VisionViewsHistoryUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateWithoutVisionInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateWithoutVisionInput);
exports.VisionViewsHistoryUpdateWithoutVisionInput = VisionViewsHistoryUpdateWithoutVisionInput;
