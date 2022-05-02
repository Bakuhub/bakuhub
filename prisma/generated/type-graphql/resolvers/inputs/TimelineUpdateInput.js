"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput");
const ReactionOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput");
const TagsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput");
const ThreadsOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput");
const UserUpdateOneRequiredWithoutTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTimelinesInput");
const VotesOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput");
let TimelineUpdateInput = class TimelineUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput)
], TimelineUpdateInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput_1.SubscriptionsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateInput.prototype, "SubscriptionsOnTimelines", void 0);
TimelineUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateInput", {
        isAbstract: true
    })
], TimelineUpdateInput);
exports.TimelineUpdateInput = TimelineUpdateInput;
