"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCountAggregate_1 = require("../outputs/ThreadsOnPremiseCountAggregate");
const ThreadsOnPremiseMaxAggregate_1 = require("../outputs/ThreadsOnPremiseMaxAggregate");
const ThreadsOnPremiseMinAggregate_1 = require("../outputs/ThreadsOnPremiseMinAggregate");
let ThreadsOnPremiseGroupBy = class ThreadsOnPremiseGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseGroupBy.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ThreadsOnPremiseGroupBy.prototype, "assignedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCountAggregate_1.ThreadsOnPremiseCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCountAggregate_1.ThreadsOnPremiseCountAggregate)
], ThreadsOnPremiseGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMinAggregate_1.ThreadsOnPremiseMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMinAggregate_1.ThreadsOnPremiseMinAggregate)
], ThreadsOnPremiseGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseMaxAggregate_1.ThreadsOnPremiseMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseMaxAggregate_1.ThreadsOnPremiseMaxAggregate)
], ThreadsOnPremiseGroupBy.prototype, "_max", void 0);
ThreadsOnPremiseGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ThreadsOnPremiseGroupBy", {
        isAbstract: true
    })
], ThreadsOnPremiseGroupBy);
exports.ThreadsOnPremiseGroupBy = ThreadsOnPremiseGroupBy;
