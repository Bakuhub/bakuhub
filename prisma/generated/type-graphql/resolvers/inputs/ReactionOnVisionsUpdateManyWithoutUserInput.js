"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnVisionsCreateManyUserInputEnvelope");
const ReactionOnVisionsCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateOrConnectWithoutUserInput");
const ReactionOnVisionsCreateWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutUserInput");
const ReactionOnVisionsScalarWhereInput_1 = require("../inputs/ReactionOnVisionsScalarWhereInput");
const ReactionOnVisionsUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithWhereWithoutUserInput");
const ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput");
const ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsUpdateManyWithoutUserInput = class ReactionOnVisionsUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutUserInput_1.ReactionOnVisionsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutUserInput_1.ReactionOnVisionsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput_1.ReactionOnVisionsUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyUserInputEnvelope_1.ReactionOnVisionsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateManyUserInputEnvelope_1.ReactionOnVisionsCreateManyUserInputEnvelope)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput_1.ReactionOnVisionsUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsUpdateManyWithWhereWithoutUserInput_1.ReactionOnVisionsUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsScalarWhereInput_1.ReactionOnVisionsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
ReactionOnVisionsUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsUpdateManyWithoutUserInput);
exports.ReactionOnVisionsUpdateManyWithoutUserInput = ReactionOnVisionsUpdateManyWithoutUserInput;
