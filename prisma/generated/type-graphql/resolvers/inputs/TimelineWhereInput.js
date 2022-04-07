"use strict";
var TimelineWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesListRelationFilter_1 = require("../inputs/PremisesOnTimelinesListRelationFilter");
const ReactionOnTimelinesListRelationFilter_1 = require("../inputs/ReactionOnTimelinesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TagsOnTimelinesListRelationFilter_1 = require("../inputs/TagsOnTimelinesListRelationFilter");
const ThreadsOnTimelineListRelationFilter_1 = require("../inputs/ThreadsOnTimelineListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TimelineWhereInput = TimelineWhereInput_1 = class TimelineWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TimelineWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TimelineWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TimelineWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TimelineWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TimelineWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TimelineWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesListRelationFilter_1.PremisesOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesListRelationFilter_1.PremisesOnTimelinesListRelationFilter)
], TimelineWhereInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnTimelinesListRelationFilter_1.TagsOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnTimelinesListRelationFilter_1.TagsOnTimelinesListRelationFilter)
], TimelineWhereInput.prototype, "tagsOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineListRelationFilter_1.ThreadsOnTimelineListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineListRelationFilter_1.ThreadsOnTimelineListRelationFilter)
], TimelineWhereInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter)
], TimelineWhereInput.prototype, "ReactionOnTimelines", void 0);
TimelineWhereInput = TimelineWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineWhereInput", {
        isAbstract: true
    })
], TimelineWhereInput);
exports.TimelineWhereInput = TimelineWhereInput;
