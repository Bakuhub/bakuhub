"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumMergeRequestStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestStatus_1 = require("../../enums/MergeRequestStatus");
let EnumMergeRequestStatusFieldUpdateOperationsInput = class EnumMergeRequestStatusFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestStatus_1.MergeRequestStatus, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumMergeRequestStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumMergeRequestStatusFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumMergeRequestStatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumMergeRequestStatusFieldUpdateOperationsInput);
exports.EnumMergeRequestStatusFieldUpdateOperationsInput = EnumMergeRequestStatusFieldUpdateOperationsInput;
