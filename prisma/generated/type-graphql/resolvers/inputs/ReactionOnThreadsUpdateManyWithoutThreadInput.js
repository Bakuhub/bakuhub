"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateManyWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateManyThreadInputEnvelope_1 = require("../inputs/ReactionOnThreadsCreateManyThreadInputEnvelope");
const ReactionOnThreadsCreateOrConnectWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateOrConnectWithoutThreadInput");
const ReactionOnThreadsCreateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutThreadInput");
const ReactionOnThreadsScalarWhereInput_1 = require("../inputs/ReactionOnThreadsScalarWhereInput");
const ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput");
const ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput");
const ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpdateManyWithoutThreadInput = class ReactionOnThreadsUpdateManyWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsCreateOrConnectWithoutThreadInput_1.ReactionOnThreadsCreateOrConnectWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput_1.ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateManyThreadInputEnvelope_1.ReactionOnThreadsCreateManyThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateManyThreadInputEnvelope_1.ReactionOnThreadsCreateManyThreadInputEnvelope)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput_1.ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput_1.ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnThreadsUpdateManyWithoutThreadInput.prototype, "deleteMany", void 0);
ReactionOnThreadsUpdateManyWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateManyWithoutThreadInput);
exports.ReactionOnThreadsUpdateManyWithoutThreadInput = ReactionOnThreadsUpdateManyWithoutThreadInput;
