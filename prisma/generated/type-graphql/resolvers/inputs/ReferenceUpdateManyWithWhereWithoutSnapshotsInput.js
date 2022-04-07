"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateManyWithWhereWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceScalarWhereInput_1 = require("../inputs/ReferenceScalarWhereInput");
const ReferenceUpdateManyMutationInput_1 = require("../inputs/ReferenceUpdateManyMutationInput");
let ReferenceUpdateManyWithWhereWithoutSnapshotsInput = class ReferenceUpdateManyWithWhereWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceScalarWhereInput_1.ReferenceScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceScalarWhereInput_1.ReferenceScalarWhereInput)
], ReferenceUpdateManyWithWhereWithoutSnapshotsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceUpdateManyMutationInput_1.ReferenceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceUpdateManyMutationInput_1.ReferenceUpdateManyMutationInput)
], ReferenceUpdateManyWithWhereWithoutSnapshotsInput.prototype, "data", void 0);
ReferenceUpdateManyWithWhereWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateManyWithWhereWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceUpdateManyWithWhereWithoutSnapshotsInput);
exports.ReferenceUpdateManyWithWhereWithoutSnapshotsInput = ReferenceUpdateManyWithWhereWithoutSnapshotsInput;
