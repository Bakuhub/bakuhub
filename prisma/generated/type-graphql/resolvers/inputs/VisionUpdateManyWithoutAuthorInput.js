"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyAuthorInputEnvelope_1 = require("../inputs/VisionCreateManyAuthorInputEnvelope");
const VisionCreateOrConnectWithoutAuthorInput_1 = require("../inputs/VisionCreateOrConnectWithoutAuthorInput");
const VisionCreateWithoutAuthorInput_1 = require("../inputs/VisionCreateWithoutAuthorInput");
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/VisionUpdateManyWithWhereWithoutAuthorInput");
const VisionUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/VisionUpdateWithWhereUniqueWithoutAuthorInput");
const VisionUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/VisionUpsertWithWhereUniqueWithoutAuthorInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateManyWithoutAuthorInput = class VisionUpdateManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutAuthorInput_1.VisionCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutAuthorInput_1.VisionCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutAuthorInput_1.VisionUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyAuthorInputEnvelope_1.VisionCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyAuthorInputEnvelope_1.VisionCreateManyAuthorInputEnvelope)
], VisionUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutAuthorInput_1.VisionUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutAuthorInput_1.VisionUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarWhereInput_1.VisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
VisionUpdateManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], VisionUpdateManyWithoutAuthorInput);
exports.VisionUpdateManyWithoutAuthorInput = VisionUpdateManyWithoutAuthorInput;
