"use strict";
var ThreadsOnTimelineWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
let ThreadsOnTimelineWhereInput = ThreadsOnTimelineWhereInput_1 = class ThreadsOnTimelineWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], ThreadsOnTimelineWhereInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnTimelineWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], ThreadsOnTimelineWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnTimelineWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnTimelineWhereInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineWhereInput = ThreadsOnTimelineWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineWhereInput", {
        isAbstract: true
    })
], ThreadsOnTimelineWhereInput);
exports.ThreadsOnTimelineWhereInput = ThreadsOnTimelineWhereInput;
