"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutSupscriptionsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput");
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput");
const ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput");
const UserCreateNestedOneWithoutTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutTimelinesInput");
const VotesOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput");
let TimelineCreateWithoutSupscriptionsOnTimelinesInput = class TimelineCreateWithoutSupscriptionsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutSupscriptionsOnTimelinesInput.prototype, "votesOnTimeline", void 0);
TimelineCreateWithoutSupscriptionsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutSupscriptionsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateWithoutSupscriptionsOnTimelinesInput);
exports.TimelineCreateWithoutSupscriptionsOnTimelinesInput = TimelineCreateWithoutSupscriptionsOnTimelinesInput;
