"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput");
const TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput");
const ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput");
const UserCreateNestedOneWithoutTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutTimelinesInput");
const VotesOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput");
let TimelineCreateWithoutPremisesOnTimelinesInput = class TimelineCreateWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SubscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutPremisesOnTimelinesInput.prototype, "subscriptionsOnTimelines", void 0);
TimelineCreateWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateWithoutPremisesOnTimelinesInput);
exports.TimelineCreateWithoutPremisesOnTimelinesInput = TimelineCreateWithoutPremisesOnTimelinesInput;
