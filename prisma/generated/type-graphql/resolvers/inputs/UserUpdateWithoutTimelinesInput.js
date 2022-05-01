"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutTimelinesInput = void 0;
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
const SubscriptionsOnPremisesUpdateManyWithoutUserInput_1 = require("../inputs/SubscriptionsOnPremisesUpdateManyWithoutUserInput");
const SupscriptionsOnTimelinesUpdateManyWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesUpdateManyWithoutUserInput");
const ThreadUpdateManyWithoutAuthorInput_1 = require("../inputs/ThreadUpdateManyWithoutAuthorInput");
const VisionUpdateManyWithoutAuthorInput_1 = require("../inputs/VisionUpdateManyWithoutAuthorInput");
const VotesOnPremiseUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnPremiseUpdateManyWithoutUserInput");
const VotesOnThreadUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateManyWithoutUserInput");
const VotesOnTimelineUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutUserInput");
const VotesOnVisionUpdateManyWithoutUserInput_1 = require("../inputs/VotesOnVisionUpdateManyWithoutUserInput");
let UserUpdateWithoutTimelinesInput = class UserUpdateWithoutTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTimelinesInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserInput_1.AccountUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserInput_1.SessionUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateManyWithoutAuthorInput_1.PremiseUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTimelinesInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyWithoutAuthorInput_1.ThreadUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTimelinesInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionUpdateManyWithoutAuthorInput_1.VisionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTimelinesInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyWithoutUserInput_1.ReactionOnThreadsUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutUserInput_1.ReactionOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsUpdateManyWithoutUserInput_1.ReactionOnVisionsUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionUpdateManyWithoutUserInput_1.VotesOnVisionUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "votesOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutUserInput_1.VotesOnTimelineUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseUpdateManyWithoutUserInput_1.VotesOnPremiseUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateManyWithoutUserInput_1.VotesOnThreadUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "votesOnThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesUpdateManyWithoutUserInput_1.SubscriptionsOnPremisesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesUpdateManyWithoutUserInput_1.SubscriptionsOnPremisesUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "SubscriptionsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesUpdateManyWithoutUserInput_1.SupscriptionsOnTimelinesUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesUpdateManyWithoutUserInput_1.SupscriptionsOnTimelinesUpdateManyWithoutUserInput)
], UserUpdateWithoutTimelinesInput.prototype, "SupscriptionsOnTimelines", void 0);
UserUpdateWithoutTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutTimelinesInput", {
        isAbstract: true
    })
], UserUpdateWithoutTimelinesInput);
exports.UserUpdateWithoutTimelinesInput = UserUpdateWithoutTimelinesInput;
