"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnTimelinesCreateManyUserInputEnvelope");
const ReactionOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateOrConnectWithoutUserInput");
const ReactionOnTimelinesCreateWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateWithoutUserInput");
const ReactionOnTimelinesScalarWhereInput_1 = require("../inputs/ReactionOnTimelinesScalarWhereInput");
const ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput");
const ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput");
const ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput");
const ReactionOnTimelinesWhereUniqueInput_1 = require("../inputs/ReactionOnTimelinesWhereUniqueInput");
let ReactionOnTimelinesUpdateManyWithoutUserInput = class ReactionOnTimelinesUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateWithoutUserInput_1.ReactionOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesCreateOrConnectWithoutUserInput_1.ReactionOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput_1.ReactionOnTimelinesUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateManyUserInputEnvelope_1.ReactionOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateManyUserInputEnvelope_1.ReactionOnTimelinesCreateManyUserInputEnvelope)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereUniqueInput_1.ReactionOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput_1.ReactionOnTimelinesUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesScalarWhereInput_1.ReactionOnTimelinesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
ReactionOnTimelinesUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnTimelinesUpdateManyWithoutUserInput);
exports.ReactionOnTimelinesUpdateManyWithoutUserInput = ReactionOnTimelinesUpdateManyWithoutUserInput;
