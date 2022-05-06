"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateManyWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateManyTimelineInputEnvelope_1 = require("../inputs/ThreadsOnTimelineCreateManyTimelineInputEnvelope");
const ThreadsOnTimelineCreateOrConnectWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateOrConnectWithoutTimelineInput");
const ThreadsOnTimelineCreateWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutTimelineInput");
const ThreadsOnTimelineScalarWhereInput_1 = require("../inputs/ThreadsOnTimelineScalarWhereInput");
const ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput");
const ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput");
const ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineUpdateManyWithoutTimelineInput = class ThreadsOnTimelineUpdateManyWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateWithoutTimelineInput_1.ThreadsOnTimelineCreateWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineCreateOrConnectWithoutTimelineInput_1.ThreadsOnTimelineCreateOrConnectWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput_1.ThreadsOnTimelineUpsertWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateManyTimelineInputEnvelope_1.ThreadsOnTimelineCreateManyTimelineInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateManyTimelineInputEnvelope_1.ThreadsOnTimelineCreateManyTimelineInputEnvelope)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput_1.ThreadsOnTimelineUpdateWithWhereUniqueWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithWhereWithoutTimelineInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput_1.ThreadsOnTimelineScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineUpdateManyWithoutTimelineInput.prototype, "deleteMany", void 0);
ThreadsOnTimelineUpdateManyWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateManyWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateManyWithoutTimelineInput);
exports.ThreadsOnTimelineUpdateManyWithoutTimelineInput = ThreadsOnTimelineUpdateManyWithoutTimelineInput;
