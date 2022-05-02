"use strict";
var VisionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const MergeRequestRelationFilter_1 = require("../inputs/MergeRequestRelationFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const ReactionOnVisionsListRelationFilter_1 = require("../inputs/ReactionOnVisionsListRelationFilter");
const ReferenceRelationFilter_1 = require("../inputs/ReferenceRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const ThreadsOnVisionListRelationFilter_1 = require("../inputs/ThreadsOnVisionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VisionListRelationFilter_1 = require("../inputs/VisionListRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
const VotesOnVisionListRelationFilter_1 = require("../inputs/VotesOnVisionListRelationFilter");
let VisionWhereInput = VisionWhereInput_1 = class VisionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], VisionWhereInput.prototype, "activityDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VisionWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VisionWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VisionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceRelationFilter_1.ReferenceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceRelationFilter_1.ReferenceRelationFilter)
], VisionWhereInput.prototype, "reference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VisionWhereInput.prototype, "referenceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VisionWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VisionWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], VisionWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VisionWhereInput.prototype, "thumbnail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VisionWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], VisionWhereInput.prototype, "draftMode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], VisionWhereInput.prototype, "prevVisionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], VisionWhereInput.prototype, "prevVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionListRelationFilter_1.VisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionListRelationFilter_1.VisionListRelationFilter)
], VisionWhereInput.prototype, "nextVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionListRelationFilter_1.ThreadsOnVisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionListRelationFilter_1.ThreadsOnVisionListRelationFilter)
], VisionWhereInput.prototype, "threadsOnVision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestRelationFilter_1.MergeRequestRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestRelationFilter_1.MergeRequestRelationFilter)
], VisionWhereInput.prototype, "mergeRequest", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter)
], VisionWhereInput.prototype, "ReactionOnVisions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionListRelationFilter_1.VotesOnVisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionListRelationFilter_1.VotesOnVisionListRelationFilter)
], VisionWhereInput.prototype, "votesOnVision", void 0);
VisionWhereInput = VisionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VisionWhereInput", {
        isAbstract: true
    })
], VisionWhereInput);
exports.VisionWhereInput = VisionWhereInput;
