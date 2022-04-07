"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyAuthorInputEnvelope_1 = require("../inputs/ThreadCreateManyAuthorInputEnvelope");
const ThreadCreateOrConnectWithoutAuthorInput_1 = require("../inputs/ThreadCreateOrConnectWithoutAuthorInput");
const ThreadCreateWithoutAuthorInput_1 = require("../inputs/ThreadCreateWithoutAuthorInput");
const ThreadScalarWhereInput_1 = require("../inputs/ThreadScalarWhereInput");
const ThreadUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/ThreadUpdateManyWithWhereWithoutAuthorInput");
const ThreadUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/ThreadUpdateWithWhereUniqueWithoutAuthorInput");
const ThreadUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/ThreadUpsertWithWhereUniqueWithoutAuthorInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateManyWithoutAuthorInput = class ThreadUpdateManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput_1.ThreadCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpsertWithWhereUniqueWithoutAuthorInput_1.ThreadUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope_1.ThreadCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateManyAuthorInputEnvelope_1.ThreadCreateManyAuthorInputEnvelope)
], ThreadUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpdateWithWhereUniqueWithoutAuthorInput_1.ThreadUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadUpdateManyWithWhereWithoutAuthorInput_1.ThreadUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadScalarWhereInput_1.ThreadScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
ThreadUpdateManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateManyWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadUpdateManyWithoutAuthorInput);
exports.ThreadUpdateManyWithoutAuthorInput = ThreadUpdateManyWithoutAuthorInput;
