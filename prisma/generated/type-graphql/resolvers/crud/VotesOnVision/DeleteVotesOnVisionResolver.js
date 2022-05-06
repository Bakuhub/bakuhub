"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteVotesOnVisionArgs_1 = require("./args/DeleteVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let DeleteVotesOnVisionResolver = class DeleteVotesOnVisionResolver {
    async deleteVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnVisionArgs_1.DeleteVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteVotesOnVisionResolver.prototype, "deleteVotesOnVision", null);
DeleteVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], DeleteVotesOnVisionResolver);
exports.DeleteVotesOnVisionResolver = DeleteVotesOnVisionResolver;
