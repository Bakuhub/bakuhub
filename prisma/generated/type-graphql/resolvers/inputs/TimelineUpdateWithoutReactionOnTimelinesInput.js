"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateWithoutReactionOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremisesOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput");
const TagsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput");
const ThreadsOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput");
const UserUpdateOneRequiredWithoutTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTimelinesInput");
const VotesOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput");
let TimelineUpdateWithoutReactionOnTimelinesInput = class TimelineUpdateWithoutReactionOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutReactionOnTimelinesInput.prototype, "subscriptionsOnTimelines", void 0);
TimelineUpdateWithoutReactionOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateWithoutReactionOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateWithoutReactionOnTimelinesInput);
exports.TimelineUpdateWithoutReactionOnTimelinesInput = TimelineUpdateWithoutReactionOnTimelinesInput;
