"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateNestedManyWithoutReferencesInput_1 = require("../inputs/SnapshotCreateNestedManyWithoutReferencesInput");
let ReferenceCreateWithoutVisionInput = class ReferenceCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceCreateWithoutVisionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateNestedManyWithoutReferencesInput_1.SnapshotCreateNestedManyWithoutReferencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCreateNestedManyWithoutReferencesInput_1.SnapshotCreateNestedManyWithoutReferencesInput)
], ReferenceCreateWithoutVisionInput.prototype, "snapshots", void 0);
ReferenceCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateWithoutVisionInput", {
        isAbstract: true
    })
], ReferenceCreateWithoutVisionInput);
exports.ReferenceCreateWithoutVisionInput = ReferenceCreateWithoutVisionInput;
