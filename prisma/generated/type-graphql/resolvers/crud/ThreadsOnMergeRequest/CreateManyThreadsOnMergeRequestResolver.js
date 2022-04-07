"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyThreadsOnMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyThreadsOnMergeRequestArgs_1 = require("./args/CreateManyThreadsOnMergeRequestArgs");
const ThreadsOnMergeRequest_1 = require("../../../models/ThreadsOnMergeRequest");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyThreadsOnMergeRequestResolver = class CreateManyThreadsOnMergeRequestResolver {
    async createManyThreadsOnMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnMergeRequest.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyThreadsOnMergeRequestArgs_1.CreateManyThreadsOnMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyThreadsOnMergeRequestResolver.prototype, "createManyThreadsOnMergeRequest", null);
CreateManyThreadsOnMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnMergeRequest_1.ThreadsOnMergeRequest)
], CreateManyThreadsOnMergeRequestResolver);
exports.CreateManyThreadsOnMergeRequestResolver = CreateManyThreadsOnMergeRequestResolver;
