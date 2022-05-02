"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const PremiseOrderByRelationAggregateInput_1 = require("../inputs/PremiseOrderByRelationAggregateInput");
const ReactionOnThreadsOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnThreadsOrderByRelationAggregateInput");
const ReactionOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnTimelinesOrderByRelationAggregateInput");
const ReactionOnVisionsOrderByRelationAggregateInput_1 = require("../inputs/ReactionOnVisionsOrderByRelationAggregateInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const SubscriptionsOnPremisesOrderByRelationAggregateInput_1 = require("../inputs/SubscriptionsOnPremisesOrderByRelationAggregateInput");
const SubscriptionsOnTimelinesOrderByRelationAggregateInput_1 = require("../inputs/SubscriptionsOnTimelinesOrderByRelationAggregateInput");
const ThreadOrderByRelationAggregateInput_1 = require("../inputs/ThreadOrderByRelationAggregateInput");
const TimelineOrderByRelationAggregateInput_1 = require("../inputs/TimelineOrderByRelationAggregateInput");
const VisionOrderByRelationAggregateInput_1 = require("../inputs/VisionOrderByRelationAggregateInput");
const VotesOnPremiseOrderByRelationAggregateInput_1 = require("../inputs/VotesOnPremiseOrderByRelationAggregateInput");
const VotesOnThreadOrderByRelationAggregateInput_1 = require("../inputs/VotesOnThreadOrderByRelationAggregateInput");
const VotesOnTimelineOrderByRelationAggregateInput_1 = require("../inputs/VotesOnTimelineOrderByRelationAggregateInput");
const VotesOnVisionOrderByRelationAggregateInput_1 = require("../inputs/VotesOnVisionOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseOrderByRelationAggregateInput_1.PremiseOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseOrderByRelationAggregateInput_1.PremiseOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadOrderByRelationAggregateInput_1.ThreadOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadOrderByRelationAggregateInput_1.ThreadOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionOrderByRelationAggregateInput_1.VisionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineOrderByRelationAggregateInput_1.TimelineOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineOrderByRelationAggregateInput_1.TimelineOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsOrderByRelationAggregateInput_1.ReactionOnThreadsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsOrderByRelationAggregateInput_1.ReactionOnThreadsOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesOrderByRelationAggregateInput_1.ReactionOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesOrderByRelationAggregateInput_1.ReactionOnTimelinesOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsOrderByRelationAggregateInput_1.ReactionOnVisionsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsOrderByRelationAggregateInput_1.ReactionOnVisionsOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionOrderByRelationAggregateInput_1.VotesOnVisionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionOrderByRelationAggregateInput_1.VotesOnVisionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineOrderByRelationAggregateInput_1.VotesOnTimelineOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineOrderByRelationAggregateInput_1.VotesOnTimelineOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseOrderByRelationAggregateInput_1.VotesOnPremiseOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseOrderByRelationAggregateInput_1.VotesOnPremiseOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadOrderByRelationAggregateInput_1.VotesOnThreadOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadOrderByRelationAggregateInput_1.VotesOnThreadOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesOrderByRelationAggregateInput_1.SubscriptionsOnPremisesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesOrderByRelationAggregateInput_1.SubscriptionsOnPremisesOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "subscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesOrderByRelationAggregateInput_1.SubscriptionsOnTimelinesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesOrderByRelationAggregateInput_1.SubscriptionsOnTimelinesOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "subscriptionsOnTimelines", void 0);
UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
