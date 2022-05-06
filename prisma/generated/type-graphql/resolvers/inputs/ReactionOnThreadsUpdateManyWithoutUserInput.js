"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyUserInputEnvelope_1 = require("../inputs/ReactionOnThreadsCreateManyUserInputEnvelope");
const ReactionOnThreadsCreateOrConnectWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateOrConnectWithoutUserInput");
const ReactionOnThreadsCreateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutUserInput");
const ReactionOnThreadsScalarWhereInput_1 = require("../inputs/ReactionOnThreadsScalarWhereInput");
const ReactionOnThreadsUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutUserInput");
const ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput");
const ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpdateManyWithoutUserInput = class ReactionOnThreadsUpdateManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutUserInput_1.ReactionOnThreadsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput_1.ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyUserInputEnvelope_1.ReactionOnThreadsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateManyUserInputEnvelope_1.ReactionOnThreadsCreateManyUserInputEnvelope)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput_1.ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateManyWithWhereWithoutUserInput_1.ReactionOnThreadsUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
ReactionOnThreadsUpdateManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateManyWithoutUserInput);
exports.ReactionOnThreadsUpdateManyWithoutUserInput = ReactionOnThreadsUpdateManyWithoutUserInput;
