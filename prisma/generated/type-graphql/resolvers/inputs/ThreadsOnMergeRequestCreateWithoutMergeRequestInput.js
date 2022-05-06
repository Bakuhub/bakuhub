"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestCreateWithoutMergeRequestInput = class ThreadsOnMergeRequestCreateWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestCreateWithoutMergeRequestInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestCreateWithoutMergeRequestInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestCreateWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestCreateWithoutMergeRequestInput = ThreadsOnMergeRequestCreateWithoutMergeRequestInput;
