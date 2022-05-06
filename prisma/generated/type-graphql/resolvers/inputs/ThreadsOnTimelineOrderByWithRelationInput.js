"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadOrderByWithRelationInput_1 = require("../inputs/ThreadOrderByWithRelationInput");
const TimelineOrderByWithRelationInput_1 = require("../inputs/TimelineOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThreadsOnTimelineOrderByWithRelationInput = class ThreadsOnTimelineOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByWithRelationInput_1.ThreadOrderByWithRelationInput)
], ThreadsOnTimelineOrderByWithRelationInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithRelationInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByWithRelationInput_1.TimelineOrderByWithRelationInput)
], ThreadsOnTimelineOrderByWithRelationInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithRelationInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineOrderByWithRelationInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineOrderByWithRelationInput", {
        isAbstract: true
    })
], ThreadsOnTimelineOrderByWithRelationInput);
exports.ThreadsOnTimelineOrderByWithRelationInput = ThreadsOnTimelineOrderByWithRelationInput;
