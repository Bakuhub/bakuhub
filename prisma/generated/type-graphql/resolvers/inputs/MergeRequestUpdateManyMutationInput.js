"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EnumMergeRequestStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumMergeRequestStatusFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MergeRequestUpdateManyMutationInput = class MergeRequestUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MergeRequestUpdateManyMutationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], MergeRequestUpdateManyMutationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMergeRequestStatusFieldUpdateOperationsInput_1.EnumMergeRequestStatusFieldUpdateOperationsInput)
], MergeRequestUpdateManyMutationInput.prototype, "status", void 0);
MergeRequestUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestUpdateManyMutationInput", {
        isAbstract: true
    })
], MergeRequestUpdateManyMutationInput);
exports.MergeRequestUpdateManyMutationInput = MergeRequestUpdateManyMutationInput;
