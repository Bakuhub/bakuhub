"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCountAggregate_1 = require("../outputs/ThreadsOnVisionCountAggregate");
const ThreadsOnVisionMaxAggregate_1 = require("../outputs/ThreadsOnVisionMaxAggregate");
const ThreadsOnVisionMinAggregate_1 = require("../outputs/ThreadsOnVisionMinAggregate");
let ThreadsOnVisionGroupBy = class ThreadsOnVisionGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnVisionGroupBy.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnVisionGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCountAggregate_1.ThreadsOnVisionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCountAggregate_1.ThreadsOnVisionCountAggregate)
], ThreadsOnVisionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMinAggregate_1.ThreadsOnVisionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMinAggregate_1.ThreadsOnVisionMinAggregate)
], ThreadsOnVisionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionMaxAggregate_1.ThreadsOnVisionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionMaxAggregate_1.ThreadsOnVisionMaxAggregate)
], ThreadsOnVisionGroupBy.prototype, "_max", void 0);
ThreadsOnVisionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnVisionGroupBy", {
        isAbstract: true
    })
], ThreadsOnVisionGroupBy);
exports.ThreadsOnVisionGroupBy = ThreadsOnVisionGroupBy;
