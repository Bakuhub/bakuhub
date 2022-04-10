"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PremiseCreateNestedManyWithoutAuthorInput");
const ReactionOnThreadsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateNestedManyWithoutUserInput");
const ReactionOnTimelinesCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutUserInput");
const ReactionOnVisionsCreateNestedManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsCreateNestedManyWithoutUserInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const ThreadCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ThreadCreateNestedManyWithoutAuthorInput");
const TimelineCreateNestedManyWithoutAuthorInput_1 = require("../inputs/TimelineCreateNestedManyWithoutAuthorInput");
const VisionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/VisionCreateNestedManyWithoutAuthorInput");
const VotesOnPremiseCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateNestedManyWithoutUserInput");
const VotesOnThreadCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateNestedManyWithoutUserInput");
const VotesOnTimelineCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutUserInput");
const VotesOnVisionCreateNestedManyWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateNestedManyWithoutAuthorInput_1.PremiseCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAccountsInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedManyWithoutAuthorInput_1.ThreadCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAccountsInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedManyWithoutAuthorInput_1.VisionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAccountsInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateNestedManyWithoutAuthorInput_1.TimelineCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutAccountsInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateNestedManyWithoutUserInput_1.ReactionOnThreadsCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutUserInput_1.ReactionOnTimelinesCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateNestedManyWithoutUserInput_1.ReactionOnVisionsCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateNestedManyWithoutUserInput_1.VotesOnVisionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutUserInput_1.VotesOnTimelineCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateNestedManyWithoutUserInput_1.VotesOnPremiseCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateNestedManyWithoutUserInput_1.VotesOnThreadCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "votesOnThread", void 0);
UserCreateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
        isAbstract: true
    })
], UserCreateWithoutAccountsInput);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
