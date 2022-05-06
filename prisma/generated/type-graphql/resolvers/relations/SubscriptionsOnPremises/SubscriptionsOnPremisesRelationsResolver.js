"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsOnPremisesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Premise_1 = require("../../../models/Premise");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SubscriptionsOnPremisesRelationsResolver = class SubscriptionsOnPremisesRelationsResolver {
    async user(subscriptionsOnPremises, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.findUnique({
            where: {
                userId_premiseId: {
                    userId: subscriptionsOnPremises.userId,
                    premiseId: subscriptionsOnPremises.premiseId,
                },
            },
        }).user({});
    }
    async premise(subscriptionsOnPremises, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.findUnique({
            where: {
                userId_premiseId: {
                    userId: subscriptionsOnPremises.userId,
                    premiseId: subscriptionsOnPremises.premiseId,
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
    tslib_1.__metadata("design:paramtypes", [SubscriptionsOnPremises_1.SubscriptionsOnPremises, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SubscriptionsOnPremises_1.SubscriptionsOnPremises, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SubscriptionsOnPremisesRelationsResolver.prototype, "premise", null);
SubscriptionsOnPremisesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnPremises_1.SubscriptionsOnPremises)
], SubscriptionsOnPremisesRelationsResolver);
exports.SubscriptionsOnPremisesRelationsResolver = SubscriptionsOnPremisesRelationsResolver;
