"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineAvgAggregate_1 = require("../outputs/VotesOnTimelineAvgAggregate");
const VotesOnTimelineCountAggregate_1 = require("../outputs/VotesOnTimelineCountAggregate");
const VotesOnTimelineMaxAggregate_1 = require("../outputs/VotesOnTimelineMaxAggregate");
const VotesOnTimelineMinAggregate_1 = require("../outputs/VotesOnTimelineMinAggregate");
const VotesOnTimelineSumAggregate_1 = require("../outputs/VotesOnTimelineSumAggregate");
let VotesOnTimelineGroupBy = class VotesOnTimelineGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineGroupBy.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineGroupBy.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCountAggregate_1.VotesOnTimelineCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCountAggregate_1.VotesOnTimelineCountAggregate)
], VotesOnTimelineGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineAvgAggregate_1.VotesOnTimelineAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineAvgAggregate_1.VotesOnTimelineAvgAggregate)
], VotesOnTimelineGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineSumAggregate_1.VotesOnTimelineSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineSumAggregate_1.VotesOnTimelineSumAggregate)
], VotesOnTimelineGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMinAggregate_1.VotesOnTimelineMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMinAggregate_1.VotesOnTimelineMinAggregate)
], VotesOnTimelineGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineMaxAggregate_1.VotesOnTimelineMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineMaxAggregate_1.VotesOnTimelineMaxAggregate)
], VotesOnTimelineGroupBy.prototype, "_max", void 0);
VotesOnTimelineGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineGroupBy", {
        isAbstract: true
    })
], VotesOnTimelineGroupBy);
exports.VotesOnTimelineGroupBy = VotesOnTimelineGroupBy;
