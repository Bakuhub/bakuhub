"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateWithoutTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1 = require("../inputs/ThreadCreateNestedOneWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineCreateWithoutTimelineInput = class ThreadsOnTimelineCreateWithoutTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1.ThreadCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutThreadsOnTimelineInput_1.ThreadCreateNestedOneWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineCreateWithoutTimelineInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineCreateWithoutTimelineInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineCreateWithoutTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateWithoutTimelineInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateWithoutTimelineInput);
exports.ThreadsOnTimelineCreateWithoutTimelineInput = ThreadsOnTimelineCreateWithoutTimelineInput;
