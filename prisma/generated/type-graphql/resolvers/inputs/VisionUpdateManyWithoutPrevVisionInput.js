"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithoutPrevVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPrevVisionInputEnvelope_1 = require("../inputs/VisionCreateManyPrevVisionInputEnvelope");
const VisionCreateOrConnectWithoutPrevVisionInput_1 = require("../inputs/VisionCreateOrConnectWithoutPrevVisionInput");
const VisionCreateWithoutPrevVisionInput_1 = require("../inputs/VisionCreateWithoutPrevVisionInput");
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyWithWhereWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateManyWithWhereWithoutPrevVisionInput");
const VisionUpdateWithWhereUniqueWithoutPrevVisionInput_1 = require("../inputs/VisionUpdateWithWhereUniqueWithoutPrevVisionInput");
const VisionUpsertWithWhereUniqueWithoutPrevVisionInput_1 = require("../inputs/VisionUpsertWithWhereUniqueWithoutPrevVisionInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateManyWithoutPrevVisionInput = class VisionUpdateManyWithoutPrevVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutPrevVisionInput_1.VisionCreateWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPrevVisionInput_1.VisionCreateOrConnectWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPrevVisionInput_1.VisionUpsertWithWhereUniqueWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyPrevVisionInputEnvelope_1.VisionCreateManyPrevVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyPrevVisionInputEnvelope_1.VisionCreateManyPrevVisionInputEnvelope)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPrevVisionInput_1.VisionUpdateWithWhereUniqueWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPrevVisionInput_1.VisionUpdateManyWithWhereWithoutPrevVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarWhereInput_1.VisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPrevVisionInput.prototype, "deleteMany", void 0);
VisionUpdateManyWithoutPrevVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithoutPrevVisionInput", {
        isAbstract: true
    })
], VisionUpdateManyWithoutPrevVisionInput);
exports.VisionUpdateManyWithoutPrevVisionInput = VisionUpdateManyWithoutPrevVisionInput;
