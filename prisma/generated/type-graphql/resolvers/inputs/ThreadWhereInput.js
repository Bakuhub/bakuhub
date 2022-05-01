"use strict";
var ThreadWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const ReactionOnThreadsListRelationFilter_1 = require("../inputs/ReactionOnThreadsListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const ThreadListRelationFilter_1 = require("../inputs/ThreadListRelationFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
const ThreadsOnMergeRequestRelationFilter_1 = require("../inputs/ThreadsOnMergeRequestRelationFilter");
const ThreadsOnPremiseRelationFilter_1 = require("../inputs/ThreadsOnPremiseRelationFilter");
const ThreadsOnTimelineRelationFilter_1 = require("../inputs/ThreadsOnTimelineRelationFilter");
const ThreadsOnVisionRelationFilter_1 = require("../inputs/ThreadsOnVisionRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VotesOnThreadListRelationFilter_1 = require("../inputs/VotesOnThreadListRelationFilter");
let ThreadWhereInput = ThreadWhereInput_1 = class ThreadWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ThreadWhereInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThreadWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThreadWhereInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ThreadWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThreadWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ThreadWhereInput.prototype, "parentThreadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], ThreadWhereInput.prototype, "parentThread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadListRelationFilter_1.ThreadListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadListRelationFilter_1.ThreadListRelationFilter)
], ThreadWhereInput.prototype, "childThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseRelationFilter_1.ThreadsOnPremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseRelationFilter_1.ThreadsOnPremiseRelationFilter)
], ThreadWhereInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineRelationFilter_1.ThreadsOnTimelineRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineRelationFilter_1.ThreadsOnTimelineRelationFilter)
], ThreadWhereInput.prototype, "threadsOnTimeline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionRelationFilter_1.ThreadsOnVisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionRelationFilter_1.ThreadsOnVisionRelationFilter)
], ThreadWhereInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestRelationFilter_1.ThreadsOnMergeRequestRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestRelationFilter_1.ThreadsOnMergeRequestRelationFilter)
], ThreadWhereInput.prototype, "threadsOnMergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter)
], ThreadWhereInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadListRelationFilter_1.VotesOnThreadListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadListRelationFilter_1.VotesOnThreadListRelationFilter)
], ThreadWhereInput.prototype, "votesOnThread", void 0);
ThreadWhereInput = ThreadWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadWhereInput", {
        isAbstract: true
    })
], ThreadWhereInput);
exports.ThreadWhereInput = ThreadWhereInput;
