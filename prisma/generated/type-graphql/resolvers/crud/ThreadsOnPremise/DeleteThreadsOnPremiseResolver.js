"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteThreadsOnPremiseArgs_1 = require("./args/DeleteThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const helpers_1 = require("../../../helpers");
let DeleteThreadsOnPremiseResolver = class DeleteThreadsOnPremiseResolver {
    async deleteThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnPremise_1.ThreadsOnPremise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnPremiseArgs_1.DeleteThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteThreadsOnPremiseResolver.prototype, "deleteThreadsOnPremise", null);
DeleteThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], DeleteThreadsOnPremiseResolver);
exports.DeleteThreadsOnPremiseResolver = DeleteThreadsOnPremiseResolver;
