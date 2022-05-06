"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnVision = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCountAggregate_1 = require("../outputs/ThreadsOnVisionCountAggregate");
const ThreadsOnVisionMaxAggregate_1 = require("../outputs/ThreadsOnVisionMaxAggregate");
const ThreadsOnVisionMinAggregate_1 = require("../outputs/ThreadsOnVisionMinAggregate");
let AggregateThreadsOnVision = class AggregateThreadsOnVision {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCountAggregate_1.ThreadsOnVisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCountAggregate_1.ThreadsOnVisionCountAggregate)
], AggregateThreadsOnVision.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMinAggregate_1.ThreadsOnVisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMinAggregate_1.ThreadsOnVisionMinAggregate)
], AggregateThreadsOnVision.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMaxAggregate_1.ThreadsOnVisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMaxAggregate_1.ThreadsOnVisionMaxAggregate)
], AggregateThreadsOnVision.prototype, "_max", void 0);
AggregateThreadsOnVision = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThreadsOnVision", {
        isAbstract: true
    })
], AggregateThreadsOnVision);
exports.AggregateThreadsOnVision = AggregateThreadsOnVision;
