"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput");
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput");
const TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput");
const ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput");
const VotesOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput");
let TimelineCreateWithoutAuthorInput = class TimelineCreateWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutAuthorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutAuthorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutAuthorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutAuthorInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutAuthorInput.prototype, "subscriptionsOnTimelines", void 0);
TimelineCreateWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineCreateWithoutAuthorInput);
exports.TimelineCreateWithoutAuthorInput = TimelineCreateWithoutAuthorInput;
