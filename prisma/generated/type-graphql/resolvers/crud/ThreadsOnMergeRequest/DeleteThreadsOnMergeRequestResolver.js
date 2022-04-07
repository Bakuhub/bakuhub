"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteThreadsOnMergeRequestArgs_1 = require("./args/DeleteThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let DeleteThreadsOnMergeRequestResolver = class DeleteThreadsOnMergeRequestResolver {
    async deleteThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteThreadsOnMergeRequestArgs_1.DeleteThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteThreadsOnMergeRequestResolver.prototype, "deleteThreadsOnMergeRequest", null);
DeleteThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], DeleteThreadsOnMergeRequestResolver);
exports.DeleteThreadsOnMergeRequestResolver = DeleteThreadsOnMergeRequestResolver;
