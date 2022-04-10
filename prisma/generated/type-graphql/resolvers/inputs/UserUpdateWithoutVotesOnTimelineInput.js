"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutVotesOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremiseUpdateManyWithoutAuthorInput_1 = require("../inputs/PremiseUpdateManyWithoutAuthorInput");
const ReactionOnThreadsUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithoutUserInput");
const ReactionOnTimelinesUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput");
const ReactionOnVisionsUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutUserInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadUpdateManyWithoutAuthorInput_1 = require("../inputs/ThreadUpdateManyWithoutAuthorInput");
const TimelineUpdateManyWithoutAuthorInput_1 = require("../inputs/TimelineUpdateManyWithoutAuthorInput");
const VisionUpdateManyWithoutAuthorInput_1 = require("../inputs/VisionUpdateManyWithoutAuthorInput");
const VotesOnPremiseUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutUserInput");
const VotesOnThreadUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutUserInput");
const VotesOnVisionUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutUserInput");
let UserUpdateWithoutVotesOnTimelineInput = class UserUpdateWithoutVotesOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput)
], UserUpdateWithoutVotesOnTimelineInput.prototype, "votesOnThread", void 0);
UserUpdateWithoutVotesOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutVotesOnTimelineInput", {
        isAbstract: true
    })
], UserUpdateWithoutVotesOnTimelineInput);
exports.UserUpdateWithoutVotesOnTimelineInput = UserUpdateWithoutVotesOnTimelineInput;
