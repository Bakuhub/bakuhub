"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySubscriptionsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManySubscriptionsOnPremisesArgs_1 = require("./args/UpdateManySubscriptionsOnPremisesArgs");
const SubscriptionsOnPremises_1 = require("../../../models/SubscriptionsOnPremises");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManySubscriptionsOnPremisesResolver = class UpdateManySubscriptionsOnPremisesResolver {
    async updateManySubscriptionsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).subscriptionsOnPremises.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySubscriptionsOnPremisesArgs_1.UpdateManySubscriptionsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManySubscriptionsOnPremisesResolver.prototype, "updateManySubscriptionsOnPremises", null);
UpdateManySubscriptionsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SubscriptionsOnPremises_1.SubscriptionsOnPremises)
], UpdateManySubscriptionsOnPremisesResolver);
exports.UpdateManySubscriptionsOnPremisesResolver = UpdateManySubscriptionsOnPremisesResolver;
