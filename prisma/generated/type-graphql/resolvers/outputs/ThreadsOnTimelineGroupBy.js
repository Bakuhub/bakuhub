"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCountAggregate_1 = require("../outputs/ThreadsOnTimelineCountAggregate");
const ThreadsOnTimelineMaxAggregate_1 = require("../outputs/ThreadsOnTimelineMaxAggregate");
const ThreadsOnTimelineMinAggregate_1 = require("../outputs/ThreadsOnTimelineMinAggregate");
let ThreadsOnTimelineGroupBy = class ThreadsOnTimelineGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCountAggregate_1.ThreadsOnTimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCountAggregate_1.ThreadsOnTimelineCountAggregate)
], ThreadsOnTimelineGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMinAggregate_1.ThreadsOnTimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMinAggregate_1.ThreadsOnTimelineMinAggregate)
], ThreadsOnTimelineGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineMaxAggregate_1.ThreadsOnTimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineMaxAggregate_1.ThreadsOnTimelineMaxAggregate)
], ThreadsOnTimelineGroupBy.prototype, "_max", void 0);
ThreadsOnTimelineGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnTimelineGroupBy", {
        isAbstract: true
    })
], ThreadsOnTimelineGroupBy);
exports.ThreadsOnTimelineGroupBy = ThreadsOnTimelineGroupBy;
