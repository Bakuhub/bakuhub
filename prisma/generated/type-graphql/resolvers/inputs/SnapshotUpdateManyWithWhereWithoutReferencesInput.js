"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateManyWithWhereWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotScalarWhereInput_1 = require("../inputs/SnapshotScalarWhereInput");
const SnapshotUpdateManyMutationInput_1 = require("../inputs/SnapshotUpdateManyMutationInput");
let SnapshotUpdateManyWithWhereWithoutReferencesInput = class SnapshotUpdateManyWithWhereWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotScalarWhereInput_1.SnapshotScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotScalarWhereInput_1.SnapshotScalarWhereInput)
], SnapshotUpdateManyWithWhereWithoutReferencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateManyMutationInput_1.SnapshotUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateManyMutationInput_1.SnapshotUpdateManyMutationInput)
], SnapshotUpdateManyWithWhereWithoutReferencesInput.prototype, "data", void 0);
SnapshotUpdateManyWithWhereWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotUpdateManyWithWhereWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotUpdateManyWithWhereWithoutReferencesInput);
exports.SnapshotUpdateManyWithWhereWithoutReferencesInput = SnapshotUpdateManyWithWhereWithoutReferencesInput;
