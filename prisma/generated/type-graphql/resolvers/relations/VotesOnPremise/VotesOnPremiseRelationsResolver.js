"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const User_1 = require("../../../models/User");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const helpers_1 = require("../../../helpers");
let VotesOnPremiseRelationsResolver = class VotesOnPremiseRelationsResolver {
    async user(votesOnPremise, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.findUnique({
            where: {
                userId_premiseId: {
                    userId: votesOnPremise.userId,
                    premiseId: votesOnPremise.premiseId,
                },
            },
        }).user({});
    }
    async premise(votesOnPremise, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.findUnique({
            where: {
                userId_premiseId: {
                    userId: votesOnPremise.userId,
                    premiseId: votesOnPremise.premiseId,
                },
            },
        }).premise({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnPremise_1.VotesOnPremise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [VotesOnPremise_1.VotesOnPremise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VotesOnPremiseRelationsResolver.prototype, "premise", null);
VotesOnPremiseRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], VotesOnPremiseRelationsResolver);
exports.VotesOnPremiseRelationsResolver = VotesOnPremiseRelationsResolver;
