"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PremisesOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput");
const ReactionOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput");
const TagsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput");
const UserUpdateOneRequiredWithoutTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTimelinesInput");
const VotesOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput");
let TimelineUpdateWithoutThreadsOnTimelineInput = class TimelineUpdateWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutThreadsOnTimelineInput.prototype, "subscriptionsOnTimelines", void 0);
TimelineUpdateWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineUpdateWithoutThreadsOnTimelineInput);
exports.TimelineUpdateWithoutThreadsOnTimelineInput = TimelineUpdateWithoutThreadsOnTimelineInput;
