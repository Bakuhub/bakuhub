"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpsertWithWhereUniqueWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateWithoutReferencesInput_1 = require("../inputs/SnapshotCreateWithoutReferencesInput");
const SnapshotUpdateWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateWithoutReferencesInput");
const SnapshotWhereUniqueInput_1 = require("../inputs/SnapshotWhereUniqueInput");
let SnapshotUpsertWithWhereUniqueWithoutReferencesInput = class SnapshotUpsertWithWhereUniqueWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], SnapshotUpsertWithWhereUniqueWithoutReferencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateWithoutReferencesInput_1.SnapshotUpdateWithoutReferencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateWithoutReferencesInput_1.SnapshotUpdateWithoutReferencesInput)
], SnapshotUpsertWithWhereUniqueWithoutReferencesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput)
], SnapshotUpsertWithWhereUniqueWithoutReferencesInput.prototype, "create", void 0);
SnapshotUpsertWithWhereUniqueWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotUpsertWithWhereUniqueWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotUpsertWithWhereUniqueWithoutReferencesInput);
exports.SnapshotUpsertWithWhereUniqueWithoutReferencesInput = SnapshotUpsertWithWhereUniqueWithoutReferencesInput;
