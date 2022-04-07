"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnVisionInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutThreadsOnVisionInput = class ThreadCreateOrConnectWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutThreadsOnVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput)
], ThreadCreateOrConnectWithoutThreadsOnVisionInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutThreadsOnVisionInput);
exports.ThreadCreateOrConnectWithoutThreadsOnVisionInput = ThreadCreateOrConnectWithoutThreadsOnVisionInput;
