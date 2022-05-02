"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadsOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteThreadsOnVisionArgs_1 = require("./args/DeleteThreadsOnVisionArgs");
const ThreadsOnVision_1 = require("../../../models/ThreadsOnVision");
const helpers_1 = require("../../../helpers");
let DeleteThreadsOnVisionResolver = class DeleteThreadsOnVisionResolver {
    async deleteThreadsOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnVision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnVision_1.ThreadsOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnVisionArgs_1.DeleteThreadsOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteThreadsOnVisionResolver.prototype, "deleteThreadsOnVision", null);
DeleteThreadsOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnVision_1.ThreadsOnVision)
], DeleteThreadsOnVisionResolver);
exports.DeleteThreadsOnVisionResolver = DeleteThreadsOnVisionResolver;