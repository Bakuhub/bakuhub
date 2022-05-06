"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyThreadsOnVisionArgs_1 = require("./args/DeleteManyThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyThreadsOnVisionResolver = class DeleteManyThreadsOnVisionResolver {
    async deleteManyThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyThreadsOnVisionArgs_1.DeleteManyThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyThreadsOnVisionResolver.prototype, "deleteManyThreadsOnVision", null);
DeleteManyThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], DeleteManyThreadsOnVisionResolver);
exports.DeleteManyThreadsOnVisionResolver = DeleteManyThreadsOnVisionResolver;
