"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateThreadsOnMergeRequestArgs_1 = require("./args/CreateThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const helpers_1 = require("../../../helpers");
let CreateThreadsOnMergeRequestResolver = class CreateThreadsOnMergeRequestResolver {
    async createThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateThreadsOnMergeRequestArgs_1.CreateThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateThreadsOnMergeRequestResolver.prototype, "createThreadsOnMergeRequest", null);
CreateThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], CreateThreadsOnMergeRequestResolver);
exports.CreateThreadsOnMergeRequestResolver = CreateThreadsOnMergeRequestResolver;
