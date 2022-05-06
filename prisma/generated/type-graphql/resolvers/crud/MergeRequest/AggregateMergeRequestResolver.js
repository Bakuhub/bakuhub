"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMergeRequestArgs_1 = require("./args/AggregateMergeRequestArgs");
const MergeRequest_1 = require("../../../models/MergeRequest");
const AggregateMergeRequest_1 = require("../../outputs/AggregateMergeRequest");
const helpers_1 = require("../../../helpers");
let AggregateMergeRequestResolver = class AggregateMergeRequestResolver {
    async aggregateMergeRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMergeRequest_1.AggregateMergeRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMergeRequestArgs_1.AggregateMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateMergeRequestResolver.prototype, "aggregateMergeRequest", null);
AggregateMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], AggregateMergeRequestResolver);
exports.AggregateMergeRequestResolver = AggregateMergeRequestResolver;
