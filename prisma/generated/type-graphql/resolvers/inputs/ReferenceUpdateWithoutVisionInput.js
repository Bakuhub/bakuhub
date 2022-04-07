"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotUpdateManyWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateManyWithoutReferencesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReferenceUpdateWithoutVisionInput = class ReferenceUpdateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReferenceUpdateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateManyWithoutReferencesInput_1.SnapshotUpdateManyWithoutReferencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateManyWithoutReferencesInput_1.SnapshotUpdateManyWithoutReferencesInput)
], ReferenceUpdateWithoutVisionInput.prototype, "snapshots", void 0);
ReferenceUpdateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceUpdateWithoutVisionInput);
exports.ReferenceUpdateWithoutVisionInput = ReferenceUpdateWithoutVisionInput;
