"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCountAggregate_1 = require("../outputs/ReactionOnThreadsCountAggregate");
const ReactionOnThreadsMaxAggregate_1 = require("../outputs/ReactionOnThreadsMaxAggregate");
const ReactionOnThreadsMinAggregate_1 = require("../outputs/ReactionOnThreadsMinAggregate");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsGroupBy = class ReactionOnThreadsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsGroupBy.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsGroupBy.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCountAggregate_1.ReactionOnThreadsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCountAggregate_1.ReactionOnThreadsCountAggregate)
], ReactionOnThreadsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMinAggregate_1.ReactionOnThreadsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMinAggregate_1.ReactionOnThreadsMinAggregate)
], ReactionOnThreadsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsMaxAggregate_1.ReactionOnThreadsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsMaxAggregate_1.ReactionOnThreadsMaxAggregate)
], ReactionOnThreadsGroupBy.prototype, "_max", void 0);
ReactionOnThreadsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnThreadsGroupBy", {
        isAbstract: true
    })
], ReactionOnThreadsGroupBy);
exports.ReactionOnThreadsGroupBy = ReactionOnThreadsGroupBy;
