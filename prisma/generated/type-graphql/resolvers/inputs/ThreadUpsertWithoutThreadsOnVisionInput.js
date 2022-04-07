"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutThreadsOnVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnVisionInput");
const ThreadUpdateWithoutThreadsOnVisionInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnVisionInput");
let ThreadUpsertWithoutThreadsOnVisionInput = class ThreadUpsertWithoutThreadsOnVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnVisionInput_1.ThreadUpdateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnVisionInput_1.ThreadUpdateWithoutThreadsOnVisionInput)
], ThreadUpsertWithoutThreadsOnVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnVisionInput_1.ThreadCreateWithoutThreadsOnVisionInput)
], ThreadUpsertWithoutThreadsOnVisionInput.prototype, "create", void 0);
ThreadUpsertWithoutThreadsOnVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnVisionInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutThreadsOnVisionInput);
exports.ThreadUpsertWithoutThreadsOnVisionInput = ThreadUpsertWithoutThreadsOnVisionInput;
