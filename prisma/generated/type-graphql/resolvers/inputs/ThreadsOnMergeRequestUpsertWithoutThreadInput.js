"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpsertWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput");
const ThreadsOnMergeRequestUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateWithoutThreadInput");
let ThreadsOnMergeRequestUpsertWithoutThreadInput = class ThreadsOnMergeRequestUpsertWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutThreadInput_1.ThreadsOnMergeRequestUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateWithoutThreadInput_1.ThreadsOnMergeRequestUpdateWithoutThreadInput)
], ThreadsOnMergeRequestUpsertWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput)
], ThreadsOnMergeRequestUpsertWithoutThreadInput.prototype, "create", void 0);
ThreadsOnMergeRequestUpsertWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpsertWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpsertWithoutThreadInput);
exports.ThreadsOnMergeRequestUpsertWithoutThreadInput = ThreadsOnMergeRequestUpsertWithoutThreadInput;
