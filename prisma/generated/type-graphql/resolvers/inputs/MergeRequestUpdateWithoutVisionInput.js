"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumMergeRequestStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput");
let MergeRequestUpdateWithoutVisionInput = class MergeRequestUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutVisionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutVisionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput)
], MergeRequestUpdateWithoutVisionInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput)
], MergeRequestUpdateWithoutVisionInput.prototype, "threadsOnMergeRequest", void 0);
MergeRequestUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateWithoutVisionInput", {
        isAbstract: true
    })
], MergeRequestUpdateWithoutVisionInput);
exports.MergeRequestUpdateWithoutVisionInput = MergeRequestUpdateWithoutVisionInput;
