"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumMergeRequestStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput");
const VisionUpdateOneRequiredWithoutMergeRequestInput_1 = require("../inputs/VisionUpdateOneRequiredWithoutMergeRequestInput");
let MergeRequestUpdateInput = class MergeRequestUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MergeRequestUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput)
], MergeRequestUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateOneRequiredWithoutMergeRequestInput_1.VisionUpdateOneRequiredWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateOneRequiredWithoutMergeRequestInput_1.VisionUpdateOneRequiredWithoutMergeRequestInput)
], MergeRequestUpdateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput)
], MergeRequestUpdateInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateInput", {
        isAbstract: true
    })
], MergeRequestUpdateInput);
exports.MergeRequestUpdateInput = MergeRequestUpdateInput;
