"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const PremiseCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PremiseCreateNestedManyWithoutAuthorInput");
const ReactionOnThreadsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput");
const ReactionOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput");
const ReactionOnVisionsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesCreateNestedManyWithoutUserInput");
const SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput");
const ThreadCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ThreadCreateNestedManyWithoutAuthorInput");
const VisionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VisionCreateNestedManyWithoutAuthorInput");
const VotesOnPremiseCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput");
const VotesOnThreadCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutUserInput");
const VotesOnTimelineCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput");
const VotesOnVisionCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutUserInput");
let UserCreateWithoutTimelinesInput = class UserCreateWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTimelinesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTimelinesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTimelinesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutTimelinesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutTimelinesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutTimelinesInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutTimelinesInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutTimelinesInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesCreateNestedManyWithoutUserInput_1.SubscriptionsOnPremisesCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "SubscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput_1.SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutTimelinesInput.prototype, "SupscriptionsOnTimelines", void 0);
UserCreateWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutTimelinesInput", {
        isAbstract: true
    })
], UserCreateWithoutTimelinesInput);
exports.UserCreateWithoutTimelinesInput = UserCreateWithoutTimelinesInput;
