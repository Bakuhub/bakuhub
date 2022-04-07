"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnVisions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCountAggregate_1 = require("../outputs/ReactionOnVisionsCountAggregate");
const ReactionOnVisionsMaxAggregate_1 = require("../outputs/ReactionOnVisionsMaxAggregate");
const ReactionOnVisionsMinAggregate_1 = require("../outputs/ReactionOnVisionsMinAggregate");
let AggregateReactionOnVisions = class AggregateReactionOnVisions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCountAggregate_1.ReactionOnVisionsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCountAggregate_1.ReactionOnVisionsCountAggregate)
], AggregateReactionOnVisions.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMinAggregate_1.ReactionOnVisionsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMinAggregate_1.ReactionOnVisionsMinAggregate)
], AggregateReactionOnVisions.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsMaxAggregate_1.ReactionOnVisionsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsMaxAggregate_1.ReactionOnVisionsMaxAggregate)
], AggregateReactionOnVisions.prototype, "_max", void 0);
AggregateReactionOnVisions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReactionOnVisions", {
        isAbstract: true
    })
], AggregateReactionOnVisions);
exports.AggregateReactionOnVisions = AggregateReactionOnVisions;
