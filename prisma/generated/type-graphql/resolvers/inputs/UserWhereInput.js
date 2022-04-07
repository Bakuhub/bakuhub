"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const PremiseListRelationFilter_1 = require("../inputs/PremiseListRelationFilter");
const ReactionOnThreadsListRelationFilter_1 = require("../inputs/ReactionOnThreadsListRelationFilter");
const ReactionOnTimelinesListRelationFilter_1 = require("../inputs/ReactionOnTimelinesListRelationFilter");
const ReactionOnVisionsListRelationFilter_1 = require("../inputs/ReactionOnVisionsListRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const ThreadListRelationFilter_1 = require("../inputs/ThreadListRelationFilter");
const TimelineListRelationFilter_1 = require("../inputs/TimelineListRelationFilter");
const VisionListRelationFilter_1 = require("../inputs/VisionListRelationFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseListRelationFilter_1.PremiseListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseListRelationFilter_1.PremiseListRelationFilter)
], UserWhereInput.prototype, "premises", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadListRelationFilter_1.ThreadListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadListRelationFilter_1.ThreadListRelationFilter)
], UserWhereInput.prototype, "threads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionListRelationFilter_1.VisionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionListRelationFilter_1.VisionListRelationFilter)
], UserWhereInput.prototype, "visions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineListRelationFilter_1.TimelineListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineListRelationFilter_1.TimelineListRelationFilter)
], UserWhereInput.prototype, "timelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsListRelationFilter_1.ReactionOnThreadsListRelationFilter)
], UserWhereInput.prototype, "ReactionOnThreads", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesListRelationFilter_1.ReactionOnTimelinesListRelationFilter)
], UserWhereInput.prototype, "ReactionOnTimelines", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsListRelationFilter_1.ReactionOnVisionsListRelationFilter)
], UserWhereInput.prototype, "ReactionOnVisions", void 0);
UserWhereInput = UserWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
