"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedManyWithoutReferenceInput_1 = require("../inputs/VisionCreateNestedManyWithoutReferenceInput");
let ReferenceCreateWithoutSnapshotsInput = class ReferenceCreateWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceCreateWithoutSnapshotsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutReferenceInput_1.VisionCreateNestedManyWithoutReferenceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutReferenceInput_1.VisionCreateNestedManyWithoutReferenceInput)
], ReferenceCreateWithoutSnapshotsInput.prototype, "vision", void 0);
ReferenceCreateWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceCreateWithoutSnapshotsInput);
exports.ReferenceCreateWithoutSnapshotsInput = ReferenceCreateWithoutSnapshotsInput;
