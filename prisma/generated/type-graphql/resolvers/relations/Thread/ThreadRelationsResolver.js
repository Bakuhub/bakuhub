"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const Thread_1 = require("../../../models/Thread");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const ThreadsOnTimeline_1 = require("../../../models/ThreadsOnTimeline");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const User_1 = require("../../../models/User");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const ThreadChildThreadsArgs_1 = require("./args/ThreadChildThreadsArgs");
const ThreadReactionOnThreadsArgs_1 = require("./args/ThreadReactionOnThreadsArgs");
const ThreadVotesOnThreadArgs_1 = require("./args/ThreadVotesOnThreadArgs");
const helpers_1 = require("../../../helpers");
let ThreadRelationsResolver = class ThreadRelationsResolver {
    async author(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).author({});
    }
    async parentThread(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).parentThread({});
    }
    async childThreads(thread, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).childThreads(args);
    }
    async threadsOnPremise(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).threadsOnPremise({});
    }
    async threadsOnTimeline(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).threadsOnTimeline({});
    }
    async threadsOnVision(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).threadsOnVision({});
    }
    async threadsOnMergeRequest(thread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).threadsOnMergeRequest({});
    }
    async ReactionOnThreads(thread, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).ReactionOnThreads(args);
    }
    async votesOnThread(thread, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).thread.findUnique({
            where: {
                id: thread.id,
            },
        }).votesOnThread(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "parentThread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Thread_1.Thread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object, ThreadChildThreadsArgs_1.ThreadChildThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "childThreads", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "threadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ThreadsOnTimeline_1.ThreadsOnTimeline, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "threadsOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "threadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "threadsOnMergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnThreads_1.ReactionOnThreads], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object, ThreadReactionOnThreadsArgs_1.ThreadReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "ReactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnThread_1.VotesOnThread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Thread_1.Thread, Object, ThreadVotesOnThreadArgs_1.ThreadVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ThreadRelationsResolver.prototype, "votesOnThread", null);
ThreadRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Thread_1.Thread)
], ThreadRelationsResolver);
exports.ThreadRelationsResolver = ThreadRelationsResolver;
