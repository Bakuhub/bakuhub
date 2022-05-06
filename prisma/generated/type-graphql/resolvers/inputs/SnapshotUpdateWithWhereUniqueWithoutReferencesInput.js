"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateWithWhereUniqueWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotUpdateWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateWithoutReferencesInput");
const SnapshotWhereUniqueInput_1 = require("../inputs/SnapshotWhereUniqueInput");
let SnapshotUpdateWithWhereUniqueWithoutReferencesInput = class SnapshotUpdateWithWhereUniqueWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput)
], SnapshotUpdateWithWhereUniqueWithoutReferencesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SnapshotUpdateWithoutReferencesInput_1.SnapshotUpdateWithoutReferencesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SnapshotUpdateWithoutReferencesInput_1.SnapshotUpdateWithoutReferencesInput)
], SnapshotUpdateWithWhereUniqueWithoutReferencesInput.prototype, "data", void 0);
SnapshotUpdateWithWhereUniqueWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotUpdateWithWhereUniqueWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotUpdateWithWhereUniqueWithoutReferencesInput);
exports.SnapshotUpdateWithWhereUniqueWithoutReferencesInput = SnapshotUpdateWithWhereUniqueWithoutReferencesInput;
