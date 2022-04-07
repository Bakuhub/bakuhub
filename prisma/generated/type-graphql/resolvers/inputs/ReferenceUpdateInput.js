"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotUpdateManyWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateManyWithoutReferencesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const VisionUpdateManyWithoutReferenceInput_1 = require("../inputs/VisionUpdateManyWithoutReferenceInput");
let ReferenceUpdateInput = class ReferenceUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReferenceUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateManyWithoutReferencesInput_1.SnapshotUpdateManyWithoutReferencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateManyWithoutReferencesInput_1.SnapshotUpdateManyWithoutReferencesInput)
], ReferenceUpdateInput.prototype, "snapshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutReferenceInput_1.VisionUpdateManyWithoutReferenceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutReferenceInput_1.VisionUpdateManyWithoutReferenceInput)
], ReferenceUpdateInput.prototype, "Vision", void 0);
ReferenceUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateInput", {
        isAbstract: true
    })
], ReferenceUpdateInput);
exports.ReferenceUpdateInput = ReferenceUpdateInput;
