"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnTimelineInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutThreadsOnTimelineInput = class ThreadCreateOrConnectWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutThreadsOnTimelineInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput)
], ThreadCreateOrConnectWithoutThreadsOnTimelineInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutThreadsOnTimelineInput);
exports.ThreadCreateOrConnectWithoutThreadsOnTimelineInput = ThreadCreateOrConnectWithoutThreadsOnTimelineInput;
