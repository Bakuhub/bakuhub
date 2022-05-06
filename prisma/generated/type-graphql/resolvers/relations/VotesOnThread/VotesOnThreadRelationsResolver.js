"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Thread_1 = require("../../../models/Thread");
const User_1 = require("../../../models/User");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const helpers_1 = require("../../../helpers");
let VotesOnThreadRelationsResolver = class VotesOnThreadRelationsResolver {
    async user(votesOnThread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.findUnique({
            where: {
                userId_threadId: {
                    userId: votesOnThread.userId,
                    threadId: votesOnThread.threadId,
                },
            },
        }).user({});
    }
    async thread(votesOnThread, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.findUnique({
            where: {
                userId_threadId: {
                    userId: votesOnThread.userId,
                    threadId: votesOnThread.threadId,
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
    tslib_1.__metadata("design:paramtypes", [VotesOnThread_1.VotesOnThread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Thread_1.Thread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnThread_1.VotesOnThread, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnThreadRelationsResolver.prototype, "thread", null);
VotesOnThreadRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], VotesOnThreadRelationsResolver);
exports.VotesOnThreadRelationsResolver = VotesOnThreadRelationsResolver;
