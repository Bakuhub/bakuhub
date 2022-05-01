"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const User_1 = require("../../../models/User");
const Vision_1 = require("../../../models/Vision");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const PremisePremisesOnTimelinesArgs_1 = require("./args/PremisePremisesOnTimelinesArgs");
const PremiseSubscriptionsOnPremisesArgs_1 = require("./args/PremiseSubscriptionsOnPremisesArgs");
const PremiseTagsOnPremisesArgs_1 = require("./args/PremiseTagsOnPremisesArgs");
const PremiseThreadsOnPremiseArgs_1 = require("./args/PremiseThreadsOnPremiseArgs");
const PremiseVisionArgs_1 = require("./args/PremiseVisionArgs");
const PremiseVotesOnPremiseArgs_1 = require("./args/PremiseVotesOnPremiseArgs");
const helpers_1 = require("../../../helpers");
let PremiseRelationsResolver = class PremiseRelationsResolver {
    async author(premise, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).author({});
    }
    async vision(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).vision(args);
    }
    async premisesOnTimelines(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).premisesOnTimelines(args);
    }
    async tagsOnPremises(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).tagsOnPremises(args);
    }
    async threadsOnPremise(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).threadsOnPremise(args);
    }
    async votesOnPremise(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).votesOnPremise(args);
    }
    async SubscriptionsOnPremises(premise, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
            where: {
                id: premise.id,
            },
        }).SubscriptionsOnPremises(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Vision_1.Vision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremiseVisionArgs_1.PremiseVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "vision", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [PremisesOnTimelines_1.PremisesOnTimelines], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremisePremisesOnTimelinesArgs_1.PremisePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "premisesOnTimelines", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TagsOnPremises_1.TagsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremiseTagsOnPremisesArgs_1.PremiseTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "tagsOnPremises", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ThreadsOnPremise_1.ThreadsOnPremise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremiseThreadsOnPremiseArgs_1.PremiseThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "threadsOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [VotesOnPremise_1.VotesOnPremise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremiseVotesOnPremiseArgs_1.PremiseVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "votesOnPremise", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [SubscriptionsOnPremises_1.SubscriptionsOnPremises], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Premise_1.Premise, Object, PremiseSubscriptionsOnPremisesArgs_1.PremiseSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PremiseRelationsResolver.prototype, "SubscriptionsOnPremises", null);
PremiseRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], PremiseRelationsResolver);
exports.PremiseRelationsResolver = PremiseRelationsResolver;
