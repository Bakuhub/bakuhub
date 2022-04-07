"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineMaxAggregate = class ThreadsOnTimelineMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMaxAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMaxAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineMaxAggregate.prototype, "assignedAt", void 0);
ThreadsOnTimelineMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnTimelineMaxAggregate", {
        isAbstract: true
    })
], ThreadsOnTimelineMaxAggregate);
exports.ThreadsOnTimelineMaxAggregate = ThreadsOnTimelineMaxAggregate;
