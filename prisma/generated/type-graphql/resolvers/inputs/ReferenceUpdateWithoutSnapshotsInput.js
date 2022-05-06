"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VisionUpdateManyWithoutReferenceInput_1 = require("../inputs/VisionUpdateManyWithoutReferenceInput");
let ReferenceUpdateWithoutSnapshotsInput = class ReferenceUpdateWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReferenceUpdateWithoutSnapshotsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutReferenceInput_1.VisionUpdateManyWithoutReferenceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutReferenceInput_1.VisionUpdateManyWithoutReferenceInput)
], ReferenceUpdateWithoutSnapshotsInput.prototype, "vision", void 0);
ReferenceUpdateWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceUpdateWithoutSnapshotsInput);
exports.ReferenceUpdateWithoutSnapshotsInput = ReferenceUpdateWithoutSnapshotsInput;
