"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineCountAggregate = class VotesOnTimelineCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCountAggregate.prototype, "_all", void 0);
VotesOnTimelineCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineCountAggregate", {
        isAbstract: true
    })
], VotesOnTimelineCountAggregate);
exports.VotesOnTimelineCountAggregate = VotesOnTimelineCountAggregate;
