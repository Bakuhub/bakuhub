"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithoutReferenceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyReferenceInputEnvelope_1 = require("../inputs/VisionCreateManyReferenceInputEnvelope");
const VisionCreateOrConnectWithoutReferenceInput_1 = require("../inputs/VisionCreateOrConnectWithoutReferenceInput");
const VisionCreateWithoutReferenceInput_1 = require("../inputs/VisionCreateWithoutReferenceInput");
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyWithWhereWithoutReferenceInput_1 = require("../inputs/VisionUpdateManyWithWhereWithoutReferenceInput");
const VisionUpdateWithWhereUniqueWithoutReferenceInput_1 = require("../inputs/VisionUpdateWithWhereUniqueWithoutReferenceInput");
const VisionUpsertWithWhereUniqueWithoutReferenceInput_1 = require("../inputs/VisionUpsertWithWhereUniqueWithoutReferenceInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateManyWithoutReferenceInput = class VisionUpdateManyWithoutReferenceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutReferenceInput_1.VisionCreateWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutReferenceInput_1.VisionCreateOrConnectWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutReferenceInput_1.VisionUpsertWithWhereUniqueWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyReferenceInputEnvelope_1.VisionCreateManyReferenceInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyReferenceInputEnvelope_1.VisionCreateManyReferenceInputEnvelope)
], VisionUpdateManyWithoutReferenceInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutReferenceInput_1.VisionUpdateWithWhereUniqueWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutReferenceInput_1.VisionUpdateManyWithWhereWithoutReferenceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarWhereInput_1.VisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutReferenceInput.prototype, "deleteMany", void 0);
VisionUpdateManyWithoutReferenceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithoutReferenceInput", {
        isAbstract: true
    })
], VisionUpdateManyWithoutReferenceInput);
exports.VisionUpdateManyWithoutReferenceInput = VisionUpdateManyWithoutReferenceInput;
