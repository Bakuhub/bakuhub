"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1 = require("../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope");
const ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput");
const ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput");
const ThreadsOnMergeRequestScalarWhereInput_1 = require("../inputs/ThreadsOnMergeRequestScalarWhereInput");
const ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput");
const ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput");
const ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput = class ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpsertWithWhereUniqueWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateWithWhereUniqueWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput_1.ThreadsOnMergeRequestUpdateManyWithWhereWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput_1.ThreadsOnMergeRequestScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput.prototype, "deleteMany", void 0);
ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput = ThreadsOnMergeRequestUpdateManyWithoutMergeRequestInput;
