"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutReactionOnThreadsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremiseUpdateManyWithoutAuthorInput_1 = require("../inputs/PremiseUpdateManyWithoutAuthorInput");
const ReactionOnTimelinesUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput");
const ReactionOnVisionsUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutUserInput");
const SessionUpdateManyWithoutUserInput_1 = require("../inputs/SessionUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const ThreadUpdateManyWithoutAuthorInput_1 = require("../inputs/ThreadUpdateManyWithoutAuthorInput");
const TimelineUpdateManyWithoutAuthorInput_1 = require("../inputs/TimelineUpdateManyWithoutAuthorInput");
const VisionUpdateManyWithoutAuthorInput_1 = require("../inputs/VisionUpdateManyWithoutAuthorInput");
const VotesOnPremiseUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutUserInput");
const VotesOnThreadUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutUserInput");
const VotesOnTimelineUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutUserInput");
const VotesOnVisionUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutUserInput");
let UserUpdateWithoutReactionOnThreadsInput = class UserUpdateWithoutReactionOnThreadsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput)
], UserUpdateWithoutReactionOnThreadsInput.prototype, "votesOnThread", void 0);
UserUpdateWithoutReactionOnThreadsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutReactionOnThreadsInput", {
        isAbstract: true
    })
], UserUpdateWithoutReactionOnThreadsInput);
exports.UserUpdateWithoutReactionOnThreadsInput = UserUpdateWithoutReactionOnThreadsInput;
