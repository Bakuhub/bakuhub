"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutReactionOnVisionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const PremiseCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PremiseCreateNestedManyWithoutAuthorInput");
const ReactionOnThreadsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput");
const ReactionOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput");
const SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput");
const ThreadCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ThreadCreateNestedManyWithoutAuthorInput");
const TimelineCreateNestedManyWithoutAuthorInput_1 = require("../inputs/TimelineCreateNestedManyWithoutAuthorInput");
const VisionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VisionCreateNestedManyWithoutAuthorInput");
const VisionViewsHistoryCreateNestedManyWithoutUserInput_1 = require("../inputs/VisionViewsHistoryCreateNestedManyWithoutUserInput");
const VotesOnPremiseCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput");
const VotesOnThreadCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutUserInput");
const VotesOnTimelineCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput");
const VotesOnVisionCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutUserInput");
let UserCreateWithoutReactionOnVisionsInput = class UserCreateWithoutReactionOnVisionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnVisionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnVisionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnVisionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionOnVisionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionOnVisionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnVisionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "subscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "subscriptionsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryCreateNestedManyWithoutUserInput_1.VisionViewsHistoryCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryCreateNestedManyWithoutUserInput_1.VisionViewsHistoryCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnVisionsInput.prototype, "visionViewsHistory", void 0);
UserCreateWithoutReactionOnVisionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutReactionOnVisionsInput", {
        isAbstract: true
    })
], UserCreateWithoutReactionOnVisionsInput);
exports.UserCreateWithoutReactionOnVisionsInput = UserCreateWithoutReactionOnVisionsInput;
