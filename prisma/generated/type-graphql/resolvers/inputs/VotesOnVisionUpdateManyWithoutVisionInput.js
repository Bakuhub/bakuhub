"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionUpdateManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyVisionInputEnvelope_1 = require("../inputs/VotesOnVisionCreateManyVisionInputEnvelope");
const VotesOnVisionCreateOrConnectWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateOrConnectWithoutVisionInput");
const VotesOnVisionCreateWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateWithoutVisionInput");
const VotesOnVisionScalarWhereInput_1 = require("../inputs/VotesOnVisionScalarWhereInput");
const VotesOnVisionUpdateManyWithWhereWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateManyWithWhereWithoutVisionInput");
const VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput");
const VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput_1 = require("../inputs/VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionUpdateManyWithoutVisionInput = class VotesOnVisionUpdateManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutVisionInput_1.VotesOnVisionCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput_1.VotesOnVisionUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateManyVisionInputEnvelope_1.VotesOnVisionCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateManyVisionInputEnvelope_1.VotesOnVisionCreateManyVisionInputEnvelope)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput_1.VotesOnVisionUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionUpdateManyWithWhereWithoutVisionInput_1.VotesOnVisionUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput_1.VotesOnVisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionUpdateManyWithoutVisionInput.prototype, "deleteMany", void 0);
VotesOnVisionUpdateManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionUpdateManyWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionUpdateManyWithoutVisionInput);
exports.VotesOnVisionUpdateManyWithoutVisionInput = VotesOnVisionUpdateManyWithoutVisionInput;
