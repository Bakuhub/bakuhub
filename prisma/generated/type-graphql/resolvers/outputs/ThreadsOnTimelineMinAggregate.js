"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineMinAggregate = class ThreadsOnTimelineMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimelineMinAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimelineMinAggregate.prototype, "assignedAt", void 0);
ThreadsOnTimelineMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnTimelineMinAggregate", {
        isAbstract: true
    })
], ThreadsOnTimelineMinAggregate);
exports.ThreadsOnTimelineMinAggregate = ThreadsOnTimelineMinAggregate;
