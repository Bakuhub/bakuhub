"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineCreateManyTimelineInputEnvelope_1 = require("../inputs/VotesOnTimelineCreateManyTimelineInputEnvelope");
const VotesOnTimelineCreateOrConnectWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateOrConnectWithoutTimelineInput");
const VotesOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateWithoutTimelineInput");
const VotesOnTimelineScalarWhereInput_1 = require("../inputs/VotesOnTimelineScalarWhereInput");
const VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput");
const VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput");
const VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../inputs/VotesOnTimelineWhereUniqueInput");
let VotesOnTimelineUpdateManyWithoutTimelineInput = class VotesOnTimelineUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateWithoutTimelineInput_1.VotesOnTimelineCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineCreateOrConnectWithoutTimelineInput_1.VotesOnTimelineCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput_1.VotesOnTimelineUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateManyTimelineInputEnvelope_1.VotesOnTimelineCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateManyTimelineInputEnvelope_1.VotesOnTimelineCreateManyTimelineInputEnvelope)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput_1.VotesOnTimelineUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarWhereInput_1.VotesOnTimelineScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnTimelineUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
VotesOnTimelineUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineUpdateManyWithoutTimelineInput);
exports.VotesOnTimelineUpdateManyWithoutTimelineInput = VotesOnTimelineUpdateManyWithoutTimelineInput;
