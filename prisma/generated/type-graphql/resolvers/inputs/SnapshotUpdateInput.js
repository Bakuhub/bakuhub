"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ReferenceUpdateManyWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpdateManyWithoutSnapshotsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SnapshotUpdateInput = class SnapshotUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "versionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "s3Url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "sourceUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SnapshotUpdateInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateManyWithoutSnapshotsInput_1.ReferenceUpdateManyWithoutSnapshotsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateManyWithoutSnapshotsInput_1.ReferenceUpdateManyWithoutSnapshotsInput)
], SnapshotUpdateInput.prototype, "references", void 0);
SnapshotUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotUpdateInput", {
        isAbstract: true
    })
], SnapshotUpdateInput);
exports.SnapshotUpdateInput = SnapshotUpdateInput;
