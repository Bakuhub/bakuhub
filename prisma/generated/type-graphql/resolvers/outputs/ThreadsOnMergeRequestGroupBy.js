"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCountAggregate_1 = require("../outputs/ThreadsOnMergeRequestCountAggregate");
const ThreadsOnMergeRequestMaxAggregate_1 = require("../outputs/ThreadsOnMergeRequestMaxAggregate");
const ThreadsOnMergeRequestMinAggregate_1 = require("../outputs/ThreadsOnMergeRequestMinAggregate");
let ThreadsOnMergeRequestGroupBy = class ThreadsOnMergeRequestGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnMergeRequestGroupBy.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnMergeRequestGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCountAggregate_1.ThreadsOnMergeRequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCountAggregate_1.ThreadsOnMergeRequestCountAggregate)
], ThreadsOnMergeRequestGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMinAggregate_1.ThreadsOnMergeRequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMinAggregate_1.ThreadsOnMergeRequestMinAggregate)
], ThreadsOnMergeRequestGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMaxAggregate_1.ThreadsOnMergeRequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMaxAggregate_1.ThreadsOnMergeRequestMaxAggregate)
], ThreadsOnMergeRequestGroupBy.prototype, "_max", void 0);
ThreadsOnMergeRequestGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnMergeRequestGroupBy", {
        isAbstract: true
    })
], ThreadsOnMergeRequestGroupBy);
exports.ThreadsOnMergeRequestGroupBy = ThreadsOnMergeRequestGroupBy;
