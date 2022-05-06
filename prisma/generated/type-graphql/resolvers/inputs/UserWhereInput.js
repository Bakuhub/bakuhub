"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const PremiseListRelationFilter_1 = require("../inputs/PremiseListRelationFilter");
const ReactionOnThreadsListRelationFilter_1 = require("../inputs/ReactionOnThreadsListRelationFilter");
const ReactionOnTimelinesListRelationFilter_1 = require("../inputs/ReactionOnTimelinesListRelationFilter");
const ReactionOnVisionsListRelationFilter_1 = require("../inputs/ReactionOnVisionsListRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubscriptionsOnPremisesListRelationFilter_1 = require("../inputs/SubscriptionsOnPremisesListRelationFilter");
const SubscriptionsOnTimelinesListRelationFilter_1 = require("../inputs/SubscriptionsOnTimelinesListRelationFilter");
const ThreadListRelationFilter_1 = require("../inputs/ThreadListRelationFilter");
const TimelineListRelationFilter_1 = require("../inputs/TimelineListRelationFilter");
const VisionListRelationFilter_1 = require("../inputs/VisionListRelationFilter");
const VotesOnPremiseListRelationFilter_1 = require("../inputs/VotesOnPremiseListRelationFilter");
const VotesOnThreadListRelationFilter_1 = require("../inputs/VotesOnThreadListRelationFilter");
const VotesOnTimelineListRelationFilter_1 = require("../inputs/VotesOnTimelineListRelationFilter");
const VotesOnVisionListRelationFilter_1 = require("../inputs/VotesOnVisionListRelationFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseListRelationFilter_1.PremiseListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseListRelationFilter_1.PremiseListRelationFilter)
], UserWhereInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadListRelationFilter_1.ThreadListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadListRelationFilter_1.ThreadListRelationFilter)
], UserWhereInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionListRelationFilter_1.VisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionListRelationFilter_1.VisionListRelationFilter)
], UserWhereInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineListRelationFilter_1.TimelineListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineListRelationFilter_1.TimelineListRelationFilter)
], UserWhereInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter)
], UserWhereInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter)
], UserWhereInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter)
], UserWhereInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionListRelationFilter_1.VotesOnVisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionListRelationFilter_1.VotesOnVisionListRelationFilter)
], UserWhereInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineListRelationFilter_1.VotesOnTimelineListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineListRelationFilter_1.VotesOnTimelineListRelationFilter)
], UserWhereInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseListRelationFilter_1.VotesOnPremiseListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseListRelationFilter_1.VotesOnPremiseListRelationFilter)
], UserWhereInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadListRelationFilter_1.VotesOnThreadListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadListRelationFilter_1.VotesOnThreadListRelationFilter)
], UserWhereInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesListRelationFilter_1.SubscriptionsOnPremisesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesListRelationFilter_1.SubscriptionsOnPremisesListRelationFilter)
], UserWhereInput.prototype, "subscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesListRelationFilter_1.SubscriptionsOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesListRelationFilter_1.SubscriptionsOnTimelinesListRelationFilter)
], UserWhereInput.prototype, "subscriptionsOnTimelines", void 0);
UserWhereInput = UserWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
