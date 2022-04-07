"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnTimeline = class ThreadsOnTimeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimeline.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnTimeline.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnTimeline.prototype, "assignedAt", void 0);
ThreadsOnTimeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnTimeline", {
        isAbstract: true
    })
], ThreadsOnTimeline);
exports.ThreadsOnTimeline = ThreadsOnTimeline;
