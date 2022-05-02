"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Account_1 = require("../../../models/Account");
const Premise_1 = require("../../../models/Premise");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const ReactionOnTimelines_1 = require("../../../models/ReactionOnTimelines");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const Session_1 = require("../../../models/Session");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const SubscriptionsOnTimelines_1 = require("../../../models/SubscriptionsOnTimelines");
const Thread_1 = require("../../../models/Thread");
const Timeline_1 = require("../../../models/Timeline");
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const VotesOnTimeline_1 = require("../../../models/VotesOnTimeline");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const UserAccountsArgs_1 = require("./args/UserAccountsArgs");
const UserPremisesArgs_1 = require("./args/UserPremisesArgs");
const UserReactionOnThreadsArgs_1 = require("./args/UserReactionOnThreadsArgs");
const UserReactionOnTimelinesArgs_1 = require("./args/UserReactionOnTimelinesArgs");
const UserReactionOnVisionsArgs_1 = require("./args/UserReactionOnVisionsArgs");
const UserSessionsArgs_1 = require("./args/UserSessionsArgs");
const UserSubscriptionsOnPremisesArgs_1 = require("./args/UserSubscriptionsOnPremisesArgs");
const UserSubscriptionsOnTimelinesArgs_1 = require("./args/UserSubscriptionsOnTimelinesArgs");
const UserThreadsArgs_1 = require("./args/UserThreadsArgs");
const UserTimelinesArgs_1 = require("./args/UserTimelinesArgs");
const UserVisionsArgs_1 = require("./args/UserVisionsArgs");
const UserVotesOnPremiseArgs_1 = require("./args/UserVotesOnPremiseArgs");
const UserVotesOnThreadArgs_1 = require("./args/UserVotesOnThreadArgs");
const UserVotesOnTimelineArgs_1 = require("./args/UserVotesOnTimelineArgs");
const UserVotesOnVisionArgs_1 = require("./args/UserVotesOnVisionArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async accounts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).accounts(args);
    }
    async sessions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).sessions(args);
    }
    async premises(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).premises(args);
    }
    async threads(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).threads(args);
    }
    async visions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).visions(args);
    }
    async timelines(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).timelines(args);
    }
    async reactionOnThreads(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).reactionOnThreads(args);
    }
    async reactionOnTimelines(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).reactionOnTimelines(args);
    }
    async reactionOnVisions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).reactionOnVisions(args);
    }
    async votesOnVision(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).votesOnVision(args);
    }
    async votesOnTimeline(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).votesOnTimeline(args);
    }
    async votesOnPremise(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).votesOnPremise(args);
    }
    async votesOnThread(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).votesOnThread(args);
    }
    async subscriptionsOnPremises(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).subscriptionsOnPremises(args);
    }
    async subscriptionsOnTimelines(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).subscriptionsOnTimelines(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Account_1.Account], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserAccountsArgs_1.UserAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "accounts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Session_1.Session], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserSessionsArgs_1.UserSessionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "sessions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Premise_1.Premise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserPremisesArgs_1.UserPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "premises", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Thread_1.Thread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserThreadsArgs_1.UserThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "threads", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Vision_1.Vision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserVisionsArgs_1.UserVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "visions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Timeline_1.Timeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserTimelinesArgs_1.UserTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "timelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnThreads_1.ReactionOnThreads], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserReactionOnThreadsArgs_1.UserReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "reactionOnThreads", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnTimelines_1.ReactionOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserReactionOnTimelinesArgs_1.UserReactionOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "reactionOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnVisions_1.ReactionOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserReactionOnVisionsArgs_1.UserReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "reactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnVision_1.VotesOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserVotesOnVisionArgs_1.UserVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "votesOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnTimeline_1.VotesOnTimeline], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserVotesOnTimelineArgs_1.UserVotesOnTimelineArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "votesOnTimeline", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnPremise_1.VotesOnPremise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserVotesOnPremiseArgs_1.UserVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "votesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnThread_1.VotesOnThread], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserVotesOnThreadArgs_1.UserVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "votesOnThread", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [SubscriptionsOnPremises_1.SubscriptionsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserSubscriptionsOnPremisesArgs_1.UserSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "subscriptionsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [SubscriptionsOnTimelines_1.SubscriptionsOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserSubscriptionsOnTimelinesArgs_1.UserSubscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "subscriptionsOnTimelines", null);
UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
