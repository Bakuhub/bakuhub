"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateOrConnectWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateWithoutReferencesInput_1 = require("../inputs/SnapshotCreateWithoutReferencesInput");
const SnapshotWhereUniqueInput_1 = require("../inputs/SnapshotWhereUniqueInput");
let SnapshotCreateOrConnectWithoutReferencesInput = class SnapshotCreateOrConnectWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], SnapshotCreateOrConnectWithoutReferencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput)
], SnapshotCreateOrConnectWithoutReferencesInput.prototype, "create", void 0);
SnapshotCreateOrConnectWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotCreateOrConnectWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotCreateOrConnectWithoutReferencesInput);
exports.SnapshotCreateOrConnectWithoutReferencesInput = SnapshotCreateOrConnectWithoutReferencesInput;
