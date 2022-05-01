"use strict";
var PremiseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumPremiseStatusFilter_1 = require("../inputs/EnumPremiseStatusFilter");
const PremisesOnTimelinesListRelationFilter_1 = require("../inputs/PremisesOnTimelinesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const SubscriptionsOnPremisesListRelationFilter_1 = require("../inputs/SubscriptionsOnPremisesListRelationFilter");
const TagsOnPremisesListRelationFilter_1 = require("../inputs/TagsOnPremisesListRelationFilter");
const ThreadsOnPremiseListRelationFilter_1 = require("../inputs/ThreadsOnPremiseListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
const VisionListRelationFilter_1 = require("../inputs/VisionListRelationFilter");
const VotesOnPremiseListRelationFilter_1 = require("../inputs/VotesOnPremiseListRelationFilter");
let PremiseWhereInput = PremiseWhereInput_1 = class PremiseWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremiseWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PremiseWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PremiseWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], PremiseWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPremiseStatusFilter_1.EnumPremiseStatusFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPremiseStatusFilter_1.EnumPremiseStatusFilter)
], PremiseWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PremiseWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PremiseWhereInput.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionListRelationFilter_1.VisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionListRelationFilter_1.VisionListRelationFilter)
], PremiseWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesListRelationFilter_1.PremisesOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesListRelationFilter_1.PremisesOnTimelinesListRelationFilter)
], PremiseWhereInput.prototype, "premisesOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOnPremisesListRelationFilter_1.TagsOnPremisesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOnPremisesListRelationFilter_1.TagsOnPremisesListRelationFilter)
], PremiseWhereInput.prototype, "tagsOnPremises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseListRelationFilter_1.ThreadsOnPremiseListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseListRelationFilter_1.ThreadsOnPremiseListRelationFilter)
], PremiseWhereInput.prototype, "threadsOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseListRelationFilter_1.VotesOnPremiseListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseListRelationFilter_1.VotesOnPremiseListRelationFilter)
], PremiseWhereInput.prototype, "votesOnPremise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubscriptionsOnPremisesListRelationFilter_1.SubscriptionsOnPremisesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubscriptionsOnPremisesListRelationFilter_1.SubscriptionsOnPremisesListRelationFilter)
], PremiseWhereInput.prototype, "SubscriptionsOnPremises", void 0);
PremiseWhereInput = PremiseWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseWhereInput", {
        isAbstract: true
    })
], PremiseWhereInput);
exports.PremiseWhereInput = PremiseWhereInput;
