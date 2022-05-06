"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumMergeRequestStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VisionUpdateOneRequiredWithoutMergeRequestInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutMergeRequestInput");
let MergeRequestUpdateWithoutThreadsOnMergeRequestInput = class MergeRequestUpdateWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutMergeRequestInput_1.VisionUpdateOneRequiredWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutMergeRequestInput_1.VisionUpdateOneRequiredWithoutMergeRequestInput)
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput.prototype, "vision", void 0);
MergeRequestUpdateWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], MergeRequestUpdateWithoutThreadsOnMergeRequestInput);
exports.MergeRequestUpdateWithoutThreadsOnMergeRequestInput = MergeRequestUpdateWithoutThreadsOnMergeRequestInput;
