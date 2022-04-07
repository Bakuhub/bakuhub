"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueThreadsOnMergeRequestArgs_1 = require("./args/FindUniqueThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let FindUniqueThreadsOnMergeRequestResolver = class FindUniqueThreadsOnMergeRequestResolver {
    async threadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueThreadsOnMergeRequestArgs_1.FindUniqueThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueThreadsOnMergeRequestResolver.prototype, "threadsOnMergeRequest", null);
FindUniqueThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], FindUniqueThreadsOnMergeRequestResolver);
exports.FindUniqueThreadsOnMergeRequestResolver = FindUniqueThreadsOnMergeRequestResolver;
