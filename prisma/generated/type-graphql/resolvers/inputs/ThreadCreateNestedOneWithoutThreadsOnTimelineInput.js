"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnTimelineInput");
const ThreadCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnTimelineInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutThreadsOnTimelineInput = class ThreadCreateNestedOneWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput)
], ThreadCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1.ThreadCreateOrConnectWithoutThreadsOnTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnTimelineInput_1.ThreadCreateOrConnectWithoutThreadsOnTimelineInput)
], ThreadCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutThreadsOnTimelineInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutThreadsOnTimelineInput);
exports.ThreadCreateNestedOneWithoutThreadsOnTimelineInput = ThreadCreateNestedOneWithoutThreadsOnTimelineInput;
