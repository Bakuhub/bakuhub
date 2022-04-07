"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateManyVisionInputEnvelope_1 = require("../inputs/ThreadsOnVisionCreateManyVisionInputEnvelope");
const ThreadsOnVisionCreateOrConnectWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateOrConnectWithoutVisionInput");
const ThreadsOnVisionCreateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutVisionInput");
const ThreadsOnVisionScalarWhereInput_1 = require("../inputs/ThreadsOnVisionScalarWhereInput");
const ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput");
const ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput");
const ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionUpdateManyWithoutVisionInput = class ThreadsOnVisionUpdateManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateOrConnectWithoutVisionInput_1.ThreadsOnVisionCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput_1.ThreadsOnVisionUpsertWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateManyVisionInputEnvelope_1.ThreadsOnVisionCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateManyVisionInputEnvelope_1.ThreadsOnVisionCreateManyVisionInputEnvelope)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput_1.ThreadsOnVisionUpdateWithWhereUniqueWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput_1.ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput_1.ThreadsOnVisionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionUpdateManyWithoutVisionInput.prototype, "deleteMany", void 0);
ThreadsOnVisionUpdateManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateManyWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateManyWithoutVisionInput);
exports.ThreadsOnVisionUpdateManyWithoutVisionInput = ThreadsOnVisionUpdateManyWithoutVisionInput;
