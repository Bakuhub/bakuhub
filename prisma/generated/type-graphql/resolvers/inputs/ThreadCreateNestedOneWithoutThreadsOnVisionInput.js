"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnVisionInput");
const ThreadCreateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnVisionInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutThreadsOnVisionInput = class ThreadCreateNestedOneWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput)
], ThreadCreateNestedOneWithoutThreadsOnVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnVisionInput_1.ThreadCreateOrConnectWithoutThreadsOnVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnVisionInput_1.ThreadCreateOrConnectWithoutThreadsOnVisionInput)
], ThreadCreateNestedOneWithoutThreadsOnVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutThreadsOnVisionInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutThreadsOnVisionInput);
exports.ThreadCreateNestedOneWithoutThreadsOnVisionInput = ThreadCreateNestedOneWithoutThreadsOnVisionInput;
