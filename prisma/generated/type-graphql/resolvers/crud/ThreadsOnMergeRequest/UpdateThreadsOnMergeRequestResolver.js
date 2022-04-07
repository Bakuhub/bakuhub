"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateThreadsOnMergeRequestArgs_1 = require("./args/UpdateThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let UpdateThreadsOnMergeRequestResolver = class UpdateThreadsOnMergeRequestResolver {
    async updateThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateThreadsOnMergeRequestArgs_1.UpdateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateThreadsOnMergeRequestResolver.prototype, "updateThreadsOnMergeRequest", null);
UpdateThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], UpdateThreadsOnMergeRequestResolver);
exports.UpdateThreadsOnMergeRequestResolver = UpdateThreadsOnMergeRequestResolver;
