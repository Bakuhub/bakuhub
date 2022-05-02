"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutSubscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput");
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput");
const ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput");
const UserCreateNestedOneWithoutTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutTimelinesInput");
const VotesOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput");
let TimelineCreateWithoutSubscriptionsOnTimelinesInput = class TimelineCreateWithoutSubscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "reactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSubscriptionsOnTimelinesInput.prototype, "votesOnTimeline", void 0);
TimelineCreateWithoutSubscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutSubscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateWithoutSubscriptionsOnTimelinesInput);
exports.TimelineCreateWithoutSubscriptionsOnTimelinesInput = TimelineCreateWithoutSubscriptionsOnTimelinesInput;
