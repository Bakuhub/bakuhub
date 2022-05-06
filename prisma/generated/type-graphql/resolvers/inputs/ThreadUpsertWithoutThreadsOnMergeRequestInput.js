"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutThreadsOnMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnMergeRequestInput");
const ThreadUpdateWithoutThreadsOnMergeRequestInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnMergeRequestInput");
let ThreadUpsertWithoutThreadsOnMergeRequestInput = class ThreadUpsertWithoutThreadsOnMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnMergeRequestInput_1.ThreadUpdateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnMergeRequestInput_1.ThreadUpdateWithoutThreadsOnMergeRequestInput)
], ThreadUpsertWithoutThreadsOnMergeRequestInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnMergeRequestInput_1.ThreadCreateWithoutThreadsOnMergeRequestInput)
], ThreadUpsertWithoutThreadsOnMergeRequestInput.prototype, "create", void 0);
ThreadUpsertWithoutThreadsOnMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnMergeRequestInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutThreadsOnMergeRequestInput);
exports.ThreadUpsertWithoutThreadsOnMergeRequestInput = ThreadUpsertWithoutThreadsOnMergeRequestInput;
