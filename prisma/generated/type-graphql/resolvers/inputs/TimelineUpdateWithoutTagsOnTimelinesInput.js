"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput");
const ReactionOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput");
const ThreadsOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput");
const UserUpdateOneRequiredWithoutTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTimelinesInput");
const VotesOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput");
let TimelineUpdateWithoutTagsOnTimelinesInput = class TimelineUpdateWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutTagsOnTimelinesInput.prototype, "subscriptionsOnTimelines", void 0);
TimelineUpdateWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateWithoutTagsOnTimelinesInput);
exports.TimelineUpdateWithoutTagsOnTimelinesInput = TimelineUpdateWithoutTagsOnTimelinesInput;
