"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyThreadsOnPremiseArgs_1 = require("./args/DeleteManyThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyThreadsOnPremiseResolver = class DeleteManyThreadsOnPremiseResolver {
    async deleteManyThreadsOnPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnPremiseArgs_1.DeleteManyThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyThreadsOnPremiseResolver.prototype, "deleteManyThreadsOnPremise", null);
DeleteManyThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], DeleteManyThreadsOnPremiseResolver);
exports.DeleteManyThreadsOnPremiseResolver = DeleteManyThreadsOnPremiseResolver;
