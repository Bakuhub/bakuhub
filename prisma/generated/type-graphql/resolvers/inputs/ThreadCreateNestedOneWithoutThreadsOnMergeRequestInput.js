"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput");
const ThreadCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput = class ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput)
], ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput_1.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput)
], ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput.prototype, "connect", void 0);
ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput);
exports.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput = ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput;
