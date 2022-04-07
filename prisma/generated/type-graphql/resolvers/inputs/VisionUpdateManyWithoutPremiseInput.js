"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionUpdateManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateManyPremiseInputEnvelope_1 = require("../inputs/VisionCreateManyPremiseInputEnvelope");
const VisionCreateOrConnectWithoutPremiseInput_1 = require("../inputs/VisionCreateOrConnectWithoutPremiseInput");
const VisionCreateWithoutPremiseInput_1 = require("../inputs/VisionCreateWithoutPremiseInput");
const VisionScalarWhereInput_1 = require("../inputs/VisionScalarWhereInput");
const VisionUpdateManyWithWhereWithoutPremiseInput_1 = require("../inputs/VisionUpdateManyWithWhereWithoutPremiseInput");
const VisionUpdateWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/VisionUpdateWithWhereUniqueWithoutPremiseInput");
const VisionUpsertWithWhereUniqueWithoutPremiseInput_1 = require("../inputs/VisionUpsertWithWhereUniqueWithoutPremiseInput");
const VisionWhereUniqueInput_1 = require("../inputs/VisionWhereUniqueInput");
let VisionUpdateManyWithoutPremiseInput = class VisionUpdateManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateWithoutPremiseInput_1.VisionCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionCreateOrConnectWithoutPremiseInput_1.VisionCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpsertWithWhereUniqueWithoutPremiseInput_1.VisionUpsertWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateManyPremiseInputEnvelope_1.VisionCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateManyPremiseInputEnvelope_1.VisionCreateManyPremiseInputEnvelope)
], VisionUpdateManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereUniqueInput_1.VisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateWithWhereUniqueWithoutPremiseInput_1.VisionUpdateWithWhereUniqueWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionUpdateManyWithWhereWithoutPremiseInput_1.VisionUpdateManyWithWhereWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarWhereInput_1.VisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionUpdateManyWithoutPremiseInput.prototype, "deleteMany", void 0);
VisionUpdateManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionUpdateManyWithoutPremiseInput", {
        isAbstract: true
    })
], VisionUpdateManyWithoutPremiseInput);
exports.VisionUpdateManyWithoutPremiseInput = VisionUpdateManyWithoutPremiseInput;
