"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUpdateWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyWithoutTimelineInput");
const ReactionOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesUpdateManyWithoutTimelineInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TagsOnTimelinesUpdateManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesUpdateManyWithoutTimelineInput");
const ThreadsOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineUpdateManyWithoutTimelineInput");
const UserUpdateOneRequiredWithoutTimelinesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTimelinesInput");
const VotesOnTimelineUpdateManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineUpdateManyWithoutTimelineInput");
let TimelineUpdateWithoutSubscriptionsOnTimelinesInput = class TimelineUpdateWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTimelinesInput_1.UserUpdateOneRequiredWithoutTimelinesInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyWithoutTimelineInput_1.PremisesOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesUpdateManyWithoutTimelineInput_1.TagsOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateManyWithoutTimelineInput_1.ThreadsOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesUpdateManyWithoutTimelineInput_1.ReactionOnTimelinesUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineUpdateManyWithoutTimelineInput_1.VotesOnTimelineUpdateManyWithoutTimelineInput)
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput.prototype, "votesOnTimeline", void 0);
TimelineUpdateWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineUpdateWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineUpdateWithoutSubscriptionsOnTimelinesInput);
exports.TimelineUpdateWithoutSubscriptionsOnTimelinesInput = TimelineUpdateWithoutSubscriptionsOnTimelinesInput;
