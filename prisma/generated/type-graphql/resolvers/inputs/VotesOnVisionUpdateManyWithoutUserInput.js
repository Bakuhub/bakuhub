"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnVisionCreateManyUserInputEnvelope");
const VotesOnVisionCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateOrConnectWithoutUserInput");
const VotesOnVisionCreateWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateWithoutUserInput");
const VotesOnVisionScalarWhereInput_1 = require("../inputs/VotesOnVisionScalarWhereInput");
const VotesOnVisionUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateManyWithWhereWithoutUserInput");
const VotesOnVisionUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutUserInput");
const VotesOnVisionUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutUserInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpdateManyWithoutUserInput = class VotesOnVisionUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutUserInput_1.VotesOnVisionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpsertWithWhereUniqueWithoutUserInput_1.VotesOnVisionUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateManyUserInputEnvelope_1.VotesOnVisionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateManyUserInputEnvelope_1.VotesOnVisionCreateManyUserInputEnvelope)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpdateWithWhereUniqueWithoutUserInput_1.VotesOnVisionUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpdateManyWithWhereWithoutUserInput_1.VotesOnVisionUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput_1.VotesOnVisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
VotesOnVisionUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateManyWithoutUserInput);
exports.VotesOnVisionUpdateManyWithoutUserInput = VotesOnVisionUpdateManyWithoutUserInput;
