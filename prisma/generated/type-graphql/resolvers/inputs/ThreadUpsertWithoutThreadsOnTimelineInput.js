"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpsertWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateWithoutThreadsOnTimelineInput");
const ThreadUpdateWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadUpdateWithoutThreadsOnTimelineInput");
let ThreadUpsertWithoutThreadsOnTimelineInput = class ThreadUpsertWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutThreadsOnTimelineInput_1.ThreadUpdateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutThreadsOnTimelineInput_1.ThreadUpdateWithoutThreadsOnTimelineInput)
], ThreadUpsertWithoutThreadsOnTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateWithoutThreadsOnTimelineInput_1.ThreadCreateWithoutThreadsOnTimelineInput)
], ThreadUpsertWithoutThreadsOnTimelineInput.prototype, "create", void 0);
ThreadUpsertWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpsertWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], ThreadUpsertWithoutThreadsOnTimelineInput);
exports.ThreadUpsertWithoutThreadsOnTimelineInput = ThreadUpsertWithoutThreadsOnTimelineInput;
