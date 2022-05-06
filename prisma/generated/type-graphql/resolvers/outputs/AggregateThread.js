"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThread = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCountAggregate_1 = require("../outputs/ThreadCountAggregate");
const ThreadMaxAggregate_1 = require("../outputs/ThreadMaxAggregate");
const ThreadMinAggregate_1 = require("../outputs/ThreadMinAggregate");
let AggregateThread = class AggregateThread {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCountAggregate_1.ThreadCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCountAggregate_1.ThreadCountAggregate)
], AggregateThread.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMinAggregate_1.ThreadMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMinAggregate_1.ThreadMinAggregate)
], AggregateThread.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadMaxAggregate_1.ThreadMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadMaxAggregate_1.ThreadMaxAggregate)
], AggregateThread.prototype, "_max", void 0);
AggregateThread = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThread", {
        isAbstract: true
    })
], AggregateThread);
exports.AggregateThread = AggregateThread;
