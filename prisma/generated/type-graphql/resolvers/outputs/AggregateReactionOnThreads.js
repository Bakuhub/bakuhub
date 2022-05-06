"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnThreads = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCountAggregate_1 = require("../outputs/ReactionOnThreadsCountAggregate");
const ReactionOnThreadsMaxAggregate_1 = require("../outputs/ReactionOnThreadsMaxAggregate");
const ReactionOnThreadsMinAggregate_1 = require("../outputs/ReactionOnThreadsMinAggregate");
let AggregateReactionOnThreads = class AggregateReactionOnThreads {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCountAggregate_1.ReactionOnThreadsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCountAggregate_1.ReactionOnThreadsCountAggregate)
], AggregateReactionOnThreads.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMinAggregate_1.ReactionOnThreadsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMinAggregate_1.ReactionOnThreadsMinAggregate)
], AggregateReactionOnThreads.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMaxAggregate_1.ReactionOnThreadsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMaxAggregate_1.ReactionOnThreadsMaxAggregate)
], AggregateReactionOnThreads.prototype, "_max", void 0);
AggregateReactionOnThreads = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReactionOnThreads", {
        isAbstract: true
    })
], AggregateReactionOnThreads);
exports.AggregateReactionOnThreads = AggregateReactionOnThreads;
