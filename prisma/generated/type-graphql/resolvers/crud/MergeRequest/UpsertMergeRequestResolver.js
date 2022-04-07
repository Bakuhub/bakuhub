"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertMergeRequestArgs_1 = require("./args/UpsertMergeRequestArgs");
const MergeRequest_1 = require("../../../models/MergeRequest");
const helpers_1 = require("../../../helpers");
let UpsertMergeRequestResolver = class UpsertMergeRequestResolver {
    async upsertMergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MergeRequest_1.MergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMergeRequestArgs_1.UpsertMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertMergeRequestResolver.prototype, "upsertMergeRequest", null);
UpsertMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], UpsertMergeRequestResolver);
exports.UpsertMergeRequestResolver = UpsertMergeRequestResolver;
