"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const helpers_1 = require("../../../helpers");
let ReactionOnVisionsRelationsResolver = class ReactionOnVisionsRelationsResolver {
    async user(reactionOnVisions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findUnique({
            where: {
                userId_visionId: {
                    userId: reactionOnVisions.userId,
                    visionId: reactionOnVisions.visionId,
                },
            },
        }).user({});
    }
    async vision(reactionOnVisions, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.findUnique({
            where: {
                userId_visionId: {
                    userId: reactionOnVisions.userId,
                    visionId: reactionOnVisions.visionId,
                },
            },
        }).vision({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReactionOnVisions_1.ReactionOnVisions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReactionOnVisions_1.ReactionOnVisions, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionOnVisionsRelationsResolver.prototype, "vision", null);
ReactionOnVisionsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], ReactionOnVisionsRelationsResolver);
exports.ReactionOnVisionsRelationsResolver = ReactionOnVisionsRelationsResolver;
