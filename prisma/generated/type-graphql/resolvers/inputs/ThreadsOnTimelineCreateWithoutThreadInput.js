"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateNestedOneWithoutThreadsOnTimelineInput");
let ThreadsOnTimelineCreateWithoutThreadInput = class ThreadsOnTimelineCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1.TimelineCreateNestedOneWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedOneWithoutThreadsOnTimelineInput_1.TimelineCreateNestedOneWithoutThreadsOnTimelineInput)
], ThreadsOnTimelineCreateWithoutThreadInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineCreateWithoutThreadInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineCreateWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineCreateWithoutThreadInput);
exports.ThreadsOnTimelineCreateWithoutThreadInput = ThreadsOnTimelineCreateWithoutThreadInput;
