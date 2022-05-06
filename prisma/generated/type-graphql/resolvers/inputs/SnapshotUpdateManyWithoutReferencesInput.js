"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateManyWithoutReferencesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SnapshotCreateOrConnectWithoutReferencesInput_1 = require("../inputs/SnapshotCreateOrConnectWithoutReferencesInput");
const SnapshotCreateWithoutReferencesInput_1 = require("../inputs/SnapshotCreateWithoutReferencesInput");
const SnapshotScalarWhereInput_1 = require("../inputs/SnapshotScalarWhereInput");
const SnapshotUpdateManyWithWhereWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateManyWithWhereWithoutReferencesInput");
const SnapshotUpdateWithWhereUniqueWithoutReferencesInput_1 = require("../inputs/SnapshotUpdateWithWhereUniqueWithoutReferencesInput");
const SnapshotUpsertWithWhereUniqueWithoutReferencesInput_1 = require("../inputs/SnapshotUpsertWithWhereUniqueWithoutReferencesInput");
const SnapshotWhereUniqueInput_1 = require("../inputs/SnapshotWhereUniqueInput");
let SnapshotUpdateManyWithoutReferencesInput = class SnapshotUpdateManyWithoutReferencesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotCreateWithoutReferencesInput_1.SnapshotCreateWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotCreateOrConnectWithoutReferencesInput_1.SnapshotCreateOrConnectWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotUpsertWithWhereUniqueWithoutReferencesInput_1.SnapshotUpsertWithWhereUniqueWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotWhereUniqueInput_1.SnapshotWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotUpdateWithWhereUniqueWithoutReferencesInput_1.SnapshotUpdateWithWhereUniqueWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotUpdateManyWithWhereWithoutReferencesInput_1.SnapshotUpdateManyWithWhereWithoutReferencesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SnapshotScalarWhereInput_1.SnapshotScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SnapshotUpdateManyWithoutReferencesInput.prototype, "deleteMany", void 0);
SnapshotUpdateManyWithoutReferencesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SnapshotUpdateManyWithoutReferencesInput", {
        isAbstract: true
    })
], SnapshotUpdateManyWithoutReferencesInput);
exports.SnapshotUpdateManyWithoutReferencesInput = SnapshotUpdateManyWithoutReferencesInput;
