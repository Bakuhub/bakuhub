"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateNestedManyWithoutUserInput_1 = require("../inputs/AccountCreateNestedManyWithoutUserInput");
const PremiseCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PremiseCreateNestedManyWithoutAuthorInput");
const ReactionOnThreadsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput");
const ReactionOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput");
const ReactionOnVisionsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const ThreadCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ThreadCreateNestedManyWithoutAuthorInput");
const TimelineCreateNestedManyWithoutAuthorInput_1 = require("../inputs/TimelineCreateNestedManyWithoutAuthorInput");
const VisionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VisionCreateNestedManyWithoutAuthorInput");
const VotesOnThreadCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutUserInput");
const VotesOnTimelineCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput");
const VotesOnVisionCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutUserInput");
let UserCreateWithoutVotesOnPremiseInput = class UserCreateWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutVotesOnPremiseInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutVotesOnPremiseInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutVotesOnPremiseInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutVotesOnPremiseInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutVotesOnPremiseInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutVotesOnPremiseInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateNestedManyWithoutUserInput_1.AccountCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput)
], UserCreateWithoutVotesOnPremiseInput.prototype, "votesOnThread", void 0);
UserCreateWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], UserCreateWithoutVotesOnPremiseInput);
exports.UserCreateWithoutVotesOnPremiseInput = UserCreateWithoutVotesOnPremiseInput;
