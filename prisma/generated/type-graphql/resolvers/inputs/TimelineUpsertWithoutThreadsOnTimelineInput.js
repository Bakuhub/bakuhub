"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpsertWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineCreateWithoutThreadsOnTimelineInput");
const TimelineUpdateWithoutThreadsOnTimelineInput_1 = require("../inputs/TimelineUpdateWithoutThreadsOnTimelineInput");
let TimelineUpsertWithoutThreadsOnTimelineInput = class TimelineUpsertWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateWithoutThreadsOnTimelineInput_1.TimelineUpdateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineUpdateWithoutThreadsOnTimelineInput_1.TimelineUpdateWithoutThreadsOnTimelineInput)
], TimelineUpsertWithoutThreadsOnTimelineInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutThreadsOnTimelineInput_1.TimelineCreateWithoutThreadsOnTimelineInput)
], TimelineUpsertWithoutThreadsOnTimelineInput.prototype, "create", void 0);
TimelineUpsertWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpsertWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineUpsertWithoutThreadsOnTimelineInput);
exports.TimelineUpsertWithoutThreadsOnTimelineInput = TimelineUpsertWithoutThreadsOnTimelineInput;
