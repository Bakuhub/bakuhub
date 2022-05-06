"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCountAggregate_1 = require("../outputs/ReactionOnTimelinesCountAggregate");
const ReactionOnTimelinesMaxAggregate_1 = require("../outputs/ReactionOnTimelinesMaxAggregate");
const ReactionOnTimelinesMinAggregate_1 = require("../outputs/ReactionOnTimelinesMinAggregate");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesGroupBy = class ReactionOnTimelinesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesGroupBy.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCountAggregate_1.ReactionOnTimelinesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCountAggregate_1.ReactionOnTimelinesCountAggregate)
], ReactionOnTimelinesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMinAggregate_1.ReactionOnTimelinesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMinAggregate_1.ReactionOnTimelinesMinAggregate)
], ReactionOnTimelinesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesMaxAggregate_1.ReactionOnTimelinesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesMaxAggregate_1.ReactionOnTimelinesMaxAggregate)
], ReactionOnTimelinesGroupBy.prototype, "_max", void 0);
ReactionOnTimelinesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnTimelinesGroupBy", {
        isAbstract: true
    })
], ReactionOnTimelinesGroupBy);
exports.ReactionOnTimelinesGroupBy = ReactionOnTimelinesGroupBy;
