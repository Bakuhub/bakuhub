"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateNestedManyWithoutReferencesInput_1 = require("../inputs/SnapshotCreateNestedManyWithoutReferencesInput");
const VisionCreateNestedManyWithoutReferenceInput_1 = require("../inputs/VisionCreateNestedManyWithoutReferenceInput");
let ReferenceCreateInput = class ReferenceCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateNestedManyWithoutReferencesInput_1.SnapshotCreateNestedManyWithoutReferencesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SnapshotCreateNestedManyWithoutReferencesInput_1.SnapshotCreateNestedManyWithoutReferencesInput)
], ReferenceCreateInput.prototype, "snapshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutReferenceInput_1.VisionCreateNestedManyWithoutReferenceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutReferenceInput_1.VisionCreateNestedManyWithoutReferenceInput)
], ReferenceCreateInput.prototype, "vision", void 0);
ReferenceCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateInput", {
        isAbstract: true
    })
], ReferenceCreateInput);
exports.ReferenceCreateInput = ReferenceCreateInput;
