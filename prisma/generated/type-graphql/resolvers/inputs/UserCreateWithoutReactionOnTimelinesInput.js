"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const PremiseCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PremiseCreateNestedManyWithoutAuthorInput");
const ReactionOnThreadsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput");
const ReactionOnVisionsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput");
const SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput");
const ThreadCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ThreadCreateNestedManyWithoutAuthorInput");
const TimelineCreateNestedManyWithoutAuthorInput_1 = require("../inputs/TimelineCreateNestedManyWithoutAuthorInput");
const VisionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VisionCreateNestedManyWithoutAuthorInput");
const VotesOnPremiseCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput");
const VotesOnThreadCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutUserInput");
const VotesOnTimelineCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput");
const VotesOnVisionCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutUserInput");
let UserCreateWithoutReactionOnTimelinesInput = class UserCreateWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "subscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionOnTimelinesInput.prototype, "subscriptionsOnTimelines", void 0);
UserCreateWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], UserCreateWithoutReactionOnTimelinesInput);
exports.UserCreateWithoutReactionOnTimelinesInput = UserCreateWithoutReactionOnTimelinesInput;
