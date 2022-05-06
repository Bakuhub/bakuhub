"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequest_1 = require("../../../models/MergeRequest");
const Premise_1 = require("../../../models/Premise");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const Reference_1 = require("../../../models/Reference");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const VisionNextVisionsArgs_1 = require("./args/VisionNextVisionsArgs");
const VisionReactionOnVisionsArgs_1 = require("./args/VisionReactionOnVisionsArgs");
const VisionThreadsOnVisionArgs_1 = require("./args/VisionThreadsOnVisionArgs");
const VisionVotesOnVisionArgs_1 = require("./args/VisionVotesOnVisionArgs");
const helpers_1 = require("../../../helpers");
let VisionRelationsResolver = class VisionRelationsResolver {
    async reference(vision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).reference({});
    }
    async author(vision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).author({});
    }
    async premise(vision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).premise({});
    }
    async prevVision(vision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).prevVision({});
    }
    async nextVisions(vision, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).nextVisions(args);
    }
    async threadsOnVision(vision, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).threadsOnVision(args);
    }
    async mergeRequest(vision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).mergeRequest({});
    }
    async reactionOnVisions(vision, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).reactionOnVisions(args);
    }
    async votesOnVision(vision, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.findUnique({
            where: {
                id: vision.id,
            },
        }).votesOnVision(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "reference", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "premise", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "prevVision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Vision_1.Vision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object, VisionNextVisionsArgs_1.VisionNextVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "nextVisions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ThreadsOnVision_1.ThreadsOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object, VisionThreadsOnVisionArgs_1.VisionThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "threadsOnVision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "mergeRequest", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ReactionOnVisions_1.ReactionOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object, VisionReactionOnVisionsArgs_1.VisionReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "reactionOnVisions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnVision_1.VotesOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Vision_1.Vision, Object, VisionVotesOnVisionArgs_1.VisionVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VisionRelationsResolver.prototype, "votesOnVision", null);
VisionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vision_1.Vision)
], VisionRelationsResolver);
exports.VisionRelationsResolver = VisionRelationsResolver;
