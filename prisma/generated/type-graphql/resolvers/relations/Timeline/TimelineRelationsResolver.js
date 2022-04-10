"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const TimelinePremisesOnTimelinesArgs_1 = require("./args/TimelinePremisesOnTimelinesArgs");
const TimelineReactionOnTimelinesArgs_1 = require("./args/TimelineReactionOnTimelinesArgs");
const TimelineTagsOnTimelinesArgs_1 = require("./args/TimelineTagsOnTimelinesArgs");
const TimelineThreadsOnTimelineArgs_1 = require("./args/TimelineThreadsOnTimelineArgs");
const TimelineVotesOnTimelineArgs_1 = require("./args/TimelineVotesOnTimelineArgs");
const helpers_1 = require("../../../helpers");
let TimelineRelationsResolver = class TimelineRelationsResolver {
    async author(timeline, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).author({});
    }
    async premisesOnTimelines(timeline, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).premisesOnTimelines(args);
    }
    async tagsOnTimelines(timeline, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).tagsOnTimelines(args);
    }
    async threadsOnTimeline(timeline, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).threadsOnTimeline(args);
    }
    async ReactionOnTimelines(timeline, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).ReactionOnTimelines(args);
    }
    async votesOnTimeline(timeline, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).timeline.findUnique({
            where: {
                id: timeline.id,
            },
        }).votesOnTimeline(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [PremisesOnTimelines_1.PremisesOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object, TimelinePremisesOnTimelinesArgs_1.TimelinePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "premisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TagsOnTimelines_1.TagsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object, TimelineTagsOnTimelinesArgs_1.TimelineTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "tagsOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ThreadsOnTimeline_1.ThreadsOnTimeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object, TimelineThreadsOnTimelineArgs_1.TimelineThreadsOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "threadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnTimelines_1.ReactionOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object, TimelineReactionOnTimelinesArgs_1.TimelineReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "ReactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnTimeline_1.VotesOnTimeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Timeline_1.Timeline, Object, TimelineVotesOnTimelineArgs_1.TimelineVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TimelineRelationsResolver.prototype, "votesOnTimeline", null);
TimelineRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Timeline_1.Timeline)
], TimelineRelationsResolver);
exports.TimelineRelationsResolver = TimelineRelationsResolver;
