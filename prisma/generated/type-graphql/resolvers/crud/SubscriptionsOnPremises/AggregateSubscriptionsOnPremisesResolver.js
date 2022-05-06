"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSubscriptionsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSubscriptionsOnPremisesArgs_1 = require("./args/AggregateSubscriptionsOnPremisesArgs");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const AggregateSubscriptionsOnPremises_1 = require("../../outputs/AggregateSubscriptionsOnPremises");
const helpers_1 = require("../../../helpers");
let AggregateSubscriptionsOnPremisesResolver = class AggregateSubscriptionsOnPremisesResolver {
    async aggregateSubscriptionsOnPremises(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSubscriptionsOnPremises_1.AggregateSubscriptionsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSubscriptionsOnPremisesArgs_1.AggregateSubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateSubscriptionsOnPremisesResolver.prototype, "aggregateSubscriptionsOnPremises", null);
AggregateSubscriptionsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnPremises_1.SubscriptionsOnPremises)
], AggregateSubscriptionsOnPremisesResolver);
exports.AggregateSubscriptionsOnPremisesResolver = AggregateSubscriptionsOnPremisesResolver;
