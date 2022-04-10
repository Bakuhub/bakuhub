"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let VotesOnVisionRelationsResolver = class VotesOnVisionRelationsResolver {
    async user(votesOnVision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findUnique({
            where: {
                userId_visionId: {
                    userId: votesOnVision.userId,
                    visionId: votesOnVision.visionId,
                },
            },
        }).user({});
    }
    async vision(votesOnVision, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findUnique({
            where: {
                userId_visionId: {
                    userId: votesOnVision.userId,
                    visionId: votesOnVision.visionId,
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
    tslib_1.__metadata("design:paramtypes", [VotesOnVision_1.VotesOnVision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Vision_1.Vision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnVision_1.VotesOnVision, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnVisionRelationsResolver.prototype, "vision", null);
VotesOnVisionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], VotesOnVisionRelationsResolver);
exports.VotesOnVisionRelationsResolver = VotesOnVisionRelationsResolver;
