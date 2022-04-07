"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceUpdateManyWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateOrConnectWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput");
const ReferenceCreateWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateWithoutSnapshotsInput");
const ReferenceScalarWhereInput_1 = require("../inputs/ReferenceScalarWhereInput");
const ReferenceUpdateManyWithWhereWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpdateManyWithWhereWithoutSnapshotsInput");
const ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput");
const ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput_1 = require("../inputs/ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceUpdateManyWithoutSnapshotsInput = class ReferenceUpdateManyWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceCreateOrConnectWithoutSnapshotsInput_1.ReferenceCreateOrConnectWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput_1.ReferenceUpsertWithWhereUniqueWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput_1.ReferenceUpdateWithWhereUniqueWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceUpdateManyWithWhereWithoutSnapshotsInput_1.ReferenceUpdateManyWithWhereWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarWhereInput_1.ReferenceScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceUpdateManyWithoutSnapshotsInput.prototype, "deleteMany", void 0);
ReferenceUpdateManyWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceUpdateManyWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceUpdateManyWithoutSnapshotsInput);
exports.ReferenceUpdateManyWithoutSnapshotsInput = ReferenceUpdateManyWithoutSnapshotsInput;
