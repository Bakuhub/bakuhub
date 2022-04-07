"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput = class ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput)
], ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput);
exports.ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput = ThreadCreateOrConnectWithoutThreadsOnMergeRequestInput;
