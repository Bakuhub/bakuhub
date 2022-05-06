"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueMergeRequestArgs_1 = require("./args/FindUniqueMergeRequestArgs");
const MergeRequest_1 = require("../../../models/MergeRequest");
const helpers_1 = require("../../../helpers");
let FindUniqueMergeRequestResolver = class FindUniqueMergeRequestResolver {
    async mergeRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MergeRequest_1.MergeRequest, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMergeRequestArgs_1.FindUniqueMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueMergeRequestResolver.prototype, "mergeRequest", null);
FindUniqueMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], FindUniqueMergeRequestResolver);
exports.FindUniqueMergeRequestResolver = FindUniqueMergeRequestResolver;
