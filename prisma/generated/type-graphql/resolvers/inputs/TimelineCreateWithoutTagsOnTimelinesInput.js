"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateWithoutTagsOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/PremisesOnTimelinesCreateNestedManyWithoutTimelineInput");
const ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ReactionOnTimelinesCreateNestedManyWithoutTimelineInput");
const ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1 = require("../inputs/ThreadsOnTimelineCreateNestedManyWithoutTimelineInput");
const UserCreateNestedOneWithoutTimelinesInput_1 = require("../inputs/UserCreateNestedOneWithoutTimelinesInput");
let TimelineCreateWithoutTagsOnTimelinesInput = class TimelineCreateWithoutTagsOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTimelinesInput_1.UserCreateNestedOneWithoutTimelinesInput)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateNestedManyWithoutTimelineInput_1.PremisesOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateNestedManyWithoutTimelineInput_1.ThreadsOnTimelineCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesCreateNestedManyWithoutTimelineInput_1.ReactionOnTimelinesCreateNestedManyWithoutTimelineInput)
], TimelineCreateWithoutTagsOnTimelinesInput.prototype, "ReactionOnTimelines", void 0);
TimelineCreateWithoutTagsOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateWithoutTagsOnTimelinesInput", {
        isAbstract: true
    })
], TimelineCreateWithoutTagsOnTimelinesInput);
exports.TimelineCreateWithoutTagsOnTimelinesInput = TimelineCreateWithoutTagsOnTimelinesInput;
