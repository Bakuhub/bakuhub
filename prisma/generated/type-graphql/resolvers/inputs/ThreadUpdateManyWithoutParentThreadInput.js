"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateManyWithoutParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyParentThreadInputEnvelope_1 = require("../inputs/ThreadCreateManyParentThreadInputEnvelope");
const ThreadCreateOrConnectWithoutParentThreadInput_1 = require("../inputs/ThreadCreateOrConnectWithoutParentThreadInput");
const ThreadCreateWithoutParentThreadInput_1 = require("../inputs/ThreadCreateWithoutParentThreadInput");
const ThreadScalarWhereInput_1 = require("../inputs/ThreadScalarWhereInput");
const ThreadUpdateManyWithWhereWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateManyWithWhereWithoutParentThreadInput");
const ThreadUpdateWithWhereUniqueWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateWithWhereUniqueWithoutParentThreadInput");
const ThreadUpsertWithWhereUniqueWithoutParentThreadInput_1 = require("../inputs/ThreadUpsertWithWhereUniqueWithoutParentThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateManyWithoutParentThreadInput = class ThreadUpdateManyWithoutParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutParentThreadInput_1.ThreadCreateOrConnectWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutParentThreadInput_1.ThreadUpsertWithWhereUniqueWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateManyParentThreadInputEnvelope_1.ThreadCreateManyParentThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateManyParentThreadInputEnvelope_1.ThreadCreateManyParentThreadInputEnvelope)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutParentThreadInput_1.ThreadUpdateWithWhereUniqueWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutParentThreadInput_1.ThreadUpdateManyWithWhereWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadScalarWhereInput_1.ThreadScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutParentThreadInput.prototype, "deleteMany", void 0);
ThreadUpdateManyWithoutParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateManyWithoutParentThreadInput", {
        isAbstract: true
    })
], ThreadUpdateManyWithoutParentThreadInput);
exports.ThreadUpdateManyWithoutParentThreadInput = ThreadUpdateManyWithoutParentThreadInput;
