"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput");
const ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestCreateInput = class ThreadsOnMergeRequestCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput_1.ThreadCreateNestedOneWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestCreateInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestCreateInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateInput);
exports.ThreadsOnMergeRequestCreateInput = ThreadsOnMergeRequestCreateInput;
