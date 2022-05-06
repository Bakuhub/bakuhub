"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimelineCountAggregate = class ThreadsOnTimelineCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnTimelineCountAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnTimelineCountAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnTimelineCountAggregate.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ThreadsOnTimelineCountAggregate.prototype, "_all", void 0);
ThreadsOnTimelineCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnTimelineCountAggregate", {
        isAbstract: true
    })
], ThreadsOnTimelineCountAggregate);
exports.ThreadsOnTimelineCountAggregate = ThreadsOnTimelineCountAggregate;
