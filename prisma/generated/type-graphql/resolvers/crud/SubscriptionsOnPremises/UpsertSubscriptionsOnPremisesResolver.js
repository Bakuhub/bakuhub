"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSubscriptionsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSubscriptionsOnPremisesArgs_1 = require("./args/UpsertSubscriptionsOnPremisesArgs");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const helpers_1 = require("../../../helpers");
let UpsertSubscriptionsOnPremisesResolver = class UpsertSubscriptionsOnPremisesResolver {
    async upsertSubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SubscriptionsOnPremises_1.SubscriptionsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSubscriptionsOnPremisesArgs_1.UpsertSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSubscriptionsOnPremisesResolver.prototype, "upsertSubscriptionsOnPremises", null);
UpsertSubscriptionsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnPremises_1.SubscriptionsOnPremises)
], UpsertSubscriptionsOnPremisesResolver);
exports.UpsertSubscriptionsOnPremisesResolver = UpsertSubscriptionsOnPremisesResolver;
