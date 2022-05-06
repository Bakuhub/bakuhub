"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnMergeRequest = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCountAggregate_1 = require("../outputs/ThreadsOnMergeRequestCountAggregate");
const ThreadsOnMergeRequestMaxAggregate_1 = require("../outputs/ThreadsOnMergeRequestMaxAggregate");
const ThreadsOnMergeRequestMinAggregate_1 = require("../outputs/ThreadsOnMergeRequestMinAggregate");
let AggregateThreadsOnMergeRequest = class AggregateThreadsOnMergeRequest {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCountAggregate_1.ThreadsOnMergeRequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCountAggregate_1.ThreadsOnMergeRequestCountAggregate)
], AggregateThreadsOnMergeRequest.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMinAggregate_1.ThreadsOnMergeRequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMinAggregate_1.ThreadsOnMergeRequestMinAggregate)
], AggregateThreadsOnMergeRequest.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestMaxAggregate_1.ThreadsOnMergeRequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestMaxAggregate_1.ThreadsOnMergeRequestMaxAggregate)
], AggregateThreadsOnMergeRequest.prototype, "_max", void 0);
AggregateThreadsOnMergeRequest = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThreadsOnMergeRequest", {
        isAbstract: true
    })
], AggregateThreadsOnMergeRequest);
exports.AggregateThreadsOnMergeRequest = AggregateThreadsOnMergeRequest;
