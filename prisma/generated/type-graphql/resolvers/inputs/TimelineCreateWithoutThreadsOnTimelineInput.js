"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutThreadsOnTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput");
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput");
const TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/TagsOnTimelinesCreateNestedManyWithoutTimelineInput");
const UserCreateNestedOneWithoutTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutTimelinesInput");
const VotesOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/VotesOnTimelineCreateNestedManyWithoutTimelineInput");
let TimelineCreateWithoutThreadsOnTimelineInput = class TimelineCreateWithoutThreadsOnTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesCreateNestedManyWithoutTimelineInput_1.TagsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineCreateNestedManyWithoutTimelineInput_1.VotesOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "votesOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput_1.SupscriptionsOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutThreadsOnTimelineInput.prototype, "SupscriptionsOnTimelines", void 0);
TimelineCreateWithoutThreadsOnTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutThreadsOnTimelineInput", {
        isAbstract: true
    })
], TimelineCreateWithoutThreadsOnTimelineInput);
exports.TimelineCreateWithoutThreadsOnTimelineInput = TimelineCreateWithoutThreadsOnTimelineInput;
