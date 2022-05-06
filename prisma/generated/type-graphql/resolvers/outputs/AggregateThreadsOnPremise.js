"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnPremise = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCountAggregate_1 = require("../outputs/ThreadsOnPremiseCountAggregate");
const ThreadsOnPremiseMaxAggregate_1 = require("../outputs/ThreadsOnPremiseMaxAggregate");
const ThreadsOnPremiseMinAggregate_1 = require("../outputs/ThreadsOnPremiseMinAggregate");
let AggregateThreadsOnPremise = class AggregateThreadsOnPremise {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCountAggregate_1.ThreadsOnPremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCountAggregate_1.ThreadsOnPremiseCountAggregate)
], AggregateThreadsOnPremise.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMinAggregate_1.ThreadsOnPremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMinAggregate_1.ThreadsOnPremiseMinAggregate)
], AggregateThreadsOnPremise.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMaxAggregate_1.ThreadsOnPremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMaxAggregate_1.ThreadsOnPremiseMaxAggregate)
], AggregateThreadsOnPremise.prototype, "_max", void 0);
AggregateThreadsOnPremise = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateThreadsOnPremise", {
        isAbstract: true
    })
], AggregateThreadsOnPremise);
exports.AggregateThreadsOnPremise = AggregateThreadsOnPremise;
