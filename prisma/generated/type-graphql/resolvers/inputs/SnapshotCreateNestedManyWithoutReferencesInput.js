"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateNestedManyWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateOrConnectWithoutReferencesInput_1 = require("../inputs/SnapshotCreateOrConnectWithoutReferencesInput");
const SnapshotCreateWithoutReferencesInput_1 = require("../inputs/SnapshotCreateWithoutReferencesInput");
const SnapshotWhereUniqueInput_1 = require("../inputs/SnapshotWhereUniqueInput");
let SnapshotCreateNestedManyWithoutReferencesInput = class SnapshotCreateNestedManyWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotCreateNestedManyWithoutReferencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotCreateOrConnectWithoutReferencesInput_1.SnapshotCreateOrConnectWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotCreateNestedManyWithoutReferencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotCreateNestedManyWithoutReferencesInput.prototype, "connect", void 0);
SnapshotCreateNestedManyWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotCreateNestedManyWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotCreateNestedManyWithoutReferencesInput);
exports.SnapshotCreateNestedManyWithoutReferencesInput = SnapshotCreateNestedManyWithoutReferencesInput;
