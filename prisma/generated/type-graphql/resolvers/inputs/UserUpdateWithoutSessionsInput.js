"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutSessionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserInput_1 = require("../inputs/AccountUpdateManyWithoutUserInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremiseUpdateManyWithoutAuthorInput_1 = require("../inputs/PremiseUpdateManyWithoutAuthorInput");
const ReactionOnThreadsUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateManyWithoutUserInput");
const ReactionOnTimelinesUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutUserInput");
const ReactionOnVisionsUpdateManyWithoutUserInput_1 = require("../inputs/ReactionOnVisionsUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnPremisesUpdateManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithoutUserInput");
const SubscriptionsOnTimelinesUpdateManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithoutUserInput");
const ThreadUpdateManyWithoutAuthorInput_1 = require("../inputs/ThreadUpdateManyWithoutAuthorInput");
const TimelineUpdateManyWithoutAuthorInput_1 = require("../inputs/TimelineUpdateManyWithoutAuthorInput");
const VisionUpdateManyWithoutAuthorInput_1 = require("../inputs/VisionUpdateManyWithoutAuthorInput");
const VisionViewsHistoryUpdateManyWithoutUserInput_1 = require("../inputs/VisionViewsHistoryUpdateManyWithoutUserInput");
const VotesOnPremiseUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutUserInput");
const VotesOnThreadUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutUserInput");
const VotesOnTimelineUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutUserInput");
const VotesOnVisionUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutUserInput");
let UserUpdateWithoutSessionsInput = class UserUpdateWithoutSessionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutSessionsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput)
], UserUpdateWithoutSessionsInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput)
], UserUpdateWithoutSessionsInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutSessionsInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineUpdateManyWithoutAuthorInput_1.TimelineUpdateManyWithoutAuthorInput)
], UserUpdateWithoutSessionsInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "reactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "reactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyWithoutUserInput_1.SubscriptionsOnPremisesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyWithoutUserInput_1.SubscriptionsOnPremisesUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "subscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutUserInput_1.SubscriptionsOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyWithoutUserInput_1.SubscriptionsOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "subscriptionsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryUpdateManyWithoutUserInput_1.VisionViewsHistoryUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryUpdateManyWithoutUserInput_1.VisionViewsHistoryUpdateManyWithoutUserInput)
], UserUpdateWithoutSessionsInput.prototype, "visionViewsHistory", void 0);
UserUpdateWithoutSessionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutSessionsInput", {
        isAbstract: true
    })
], UserUpdateWithoutSessionsInput);
exports.UserUpdateWithoutSessionsInput = UserUpdateWithoutSessionsInput;
