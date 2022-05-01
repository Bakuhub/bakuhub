"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineMaxAggregate = class VotesOnTimelineMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMaxAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineMaxAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineMaxAggregate.prototype, "updatedAt", void 0);
VotesOnTimelineMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineMaxAggregate", {
        isAbstract: true
    })
], VotesOnTimelineMaxAggregate);
exports.VotesOnTimelineMaxAggregate = VotesOnTimelineMaxAggregate;
