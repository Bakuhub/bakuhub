"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnTimelineCreateManyUserInputEnvelope");
const VotesOnTimelineCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateOrConnectWithoutUserInput");
const VotesOnTimelineCreateWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateWithoutUserInput");
const VotesOnTimelineScalarWhereInput_1 = require("../inputs/VotesOnTimelineScalarWhereInput");
const VotesOnTimelineUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithWhereWithoutUserInput");
const VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput");
const VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpdateManyWithoutUserInput = class VotesOnTimelineUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutUserInput_1.VotesOnTimelineCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutUserInput_1.VotesOnTimelineCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput_1.VotesOnTimelineUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateManyUserInputEnvelope_1.VotesOnTimelineCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateManyUserInputEnvelope_1.VotesOnTimelineCreateManyUserInputEnvelope)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput_1.VotesOnTimelineUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpdateManyWithWhereWithoutUserInput_1.VotesOnTimelineUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput_1.VotesOnTimelineScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
VotesOnTimelineUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateManyWithoutUserInput);
exports.VotesOnTimelineUpdateManyWithoutUserInput = VotesOnTimelineUpdateManyWithoutUserInput;
