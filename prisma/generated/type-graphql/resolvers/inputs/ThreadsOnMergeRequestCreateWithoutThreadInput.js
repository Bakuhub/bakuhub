"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1 = require("../inputs/MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput");
let ThreadsOnMergeRequestCreateWithoutThreadInput = class ThreadsOnMergeRequestCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput_1.MergeRequestCreateNestedOneWithoutThreadsOnMergeRequestInput)
], ThreadsOnMergeRequestCreateWithoutThreadInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestCreateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateWithoutThreadInput);
exports.ThreadsOnMergeRequestCreateWithoutThreadInput = ThreadsOnMergeRequestCreateWithoutThreadInput;
