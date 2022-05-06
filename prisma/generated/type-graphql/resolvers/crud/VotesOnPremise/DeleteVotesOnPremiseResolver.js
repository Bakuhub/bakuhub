"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteVotesOnPremiseArgs_1 = require("./args/DeleteVotesOnPremiseArgs");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const helpers_1 = require("../../../helpers");
let DeleteVotesOnPremiseResolver = class DeleteVotesOnPremiseResolver {
    async deleteVotesOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnPremise_1.VotesOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnPremiseArgs_1.DeleteVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteVotesOnPremiseResolver.prototype, "deleteVotesOnPremise", null);
DeleteVotesOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], DeleteVotesOnPremiseResolver);
exports.DeleteVotesOnPremiseResolver = DeleteVotesOnPremiseResolver;
