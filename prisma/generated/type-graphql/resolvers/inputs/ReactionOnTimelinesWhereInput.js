"use strict";
var ReactionOnTimelinesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumReactionFilter_1 = require("../inputs/EnumReactionFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TimelineRelationFilter_1 = require("../inputs/TimelineRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ReactionOnTimelinesWhereInput = ReactionOnTimelinesWhereInput_1 = class ReactionOnTimelinesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnTimelinesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnTimelinesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ReactionOnTimelinesWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnTimelinesWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineRelationFilter_1.TimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineRelationFilter_1.TimelineRelationFilter)
], ReactionOnTimelinesWhereInput.prototype, "timeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReactionOnTimelinesWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumReactionFilter_1.EnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumReactionFilter_1.EnumReactionFilter)
], ReactionOnTimelinesWhereInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReactionOnTimelinesWhereInput.prototype, "createdAt", void 0);
ReactionOnTimelinesWhereInput = ReactionOnTimelinesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesWhereInput", {
        isAbstract: true
    })
], ReactionOnTimelinesWhereInput);
exports.ReactionOnTimelinesWhereInput = ReactionOnTimelinesWhereInput;
