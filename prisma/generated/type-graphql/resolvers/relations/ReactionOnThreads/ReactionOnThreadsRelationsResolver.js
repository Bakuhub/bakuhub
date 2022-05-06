"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const Thread_1 = require("../../../models/Thread");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ReactionOnThreadsRelationsResolver = class ReactionOnThreadsRelationsResolver {
    async user(reactionOnThreads, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findUnique({
            where: {
                userId_threadId: {
                    userId: reactionOnThreads.userId,
                    threadId: reactionOnThreads.threadId,
                },
            },
        }).user({});
    }
    async thread(reactionOnThreads, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.findUnique({
            where: {
                userId_threadId: {
                    userId: reactionOnThreads.userId,
                    threadId: reactionOnThreads.threadId,
                },
            },
        }).thread({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReactionOnThreads_1.ReactionOnThreads, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReactionOnThreads_1.ReactionOnThreads, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnThreadsRelationsResolver.prototype, "thread", null);
ReactionOnThreadsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], ReactionOnThreadsRelationsResolver);
exports.ReactionOnThreadsRelationsResolver = ReactionOnThreadsRelationsResolver;
