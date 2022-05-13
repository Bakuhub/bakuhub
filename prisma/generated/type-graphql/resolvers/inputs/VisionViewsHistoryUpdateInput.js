"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionViewsHistoryUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1 = require("../inputs/UserUpdateOneRequiredWithoutVisionViewsHistoryInput");
const VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutVisionViewsHistoryInput");
let VisionViewsHistoryUpdateInput = class VisionViewsHistoryUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutVisionViewsHistoryInput_1.VisionUpdateOneRequiredWithoutVisionViewsHistoryInput)
], VisionViewsHistoryUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1.UserUpdateOneRequiredWithoutVisionViewsHistoryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutVisionViewsHistoryInput_1.UserUpdateOneRequiredWithoutVisionViewsHistoryInput)
], VisionViewsHistoryUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], VisionViewsHistoryUpdateInput.prototype, "createdAt", void 0);
VisionViewsHistoryUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionViewsHistoryUpdateInput", {
        isAbstract: true
    })
], VisionViewsHistoryUpdateInput);
exports.VisionViewsHistoryUpdateInput = VisionViewsHistoryUpdateInput;
