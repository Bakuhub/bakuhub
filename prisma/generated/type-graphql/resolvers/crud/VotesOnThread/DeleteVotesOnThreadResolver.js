"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVotesOnThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteVotesOnThreadArgs_1 = require("./args/DeleteVotesOnThreadArgs");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const helpers_1 = require("../../../helpers");
let DeleteVotesOnThreadResolver = class DeleteVotesOnThreadResolver {
    async deleteVotesOnThread(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnThread_1.VotesOnThread, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVotesOnThreadArgs_1.DeleteVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteVotesOnThreadResolver.prototype, "deleteVotesOnThread", null);
DeleteVotesOnThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], DeleteVotesOnThreadResolver);
exports.DeleteVotesOnThreadResolver = DeleteVotesOnThreadResolver;
