"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyThreadsOnMergeRequestArgs_1 = require("./args/FindManyThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let FindManyThreadsOnMergeRequestResolver = class FindManyThreadsOnMergeRequestResolver {
    async threadsOnMergeRequests(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnMergeRequest_1.ThreadsOnMergeRequest], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyThreadsOnMergeRequestArgs_1.FindManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyThreadsOnMergeRequestResolver.prototype, "threadsOnMergeRequests", null);
FindManyThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], FindManyThreadsOnMergeRequestResolver);
exports.FindManyThreadsOnMergeRequestResolver = FindManyThreadsOnMergeRequestResolver;
