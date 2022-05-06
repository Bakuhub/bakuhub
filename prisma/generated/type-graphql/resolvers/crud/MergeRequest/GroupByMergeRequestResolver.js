"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMergeRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByMergeRequestArgs_1 = require("./args/GroupByMergeRequestArgs");
const MergeRequest_1 = require("../../../models/MergeRequest");
const MergeRequestGroupBy_1 = require("../../outputs/MergeRequestGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByMergeRequestResolver = class GroupByMergeRequestResolver {
    async groupByMergeRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mergeRequest.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MergeRequestGroupBy_1.MergeRequestGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMergeRequestArgs_1.GroupByMergeRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByMergeRequestResolver.prototype, "groupByMergeRequest", null);
GroupByMergeRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MergeRequest_1.MergeRequest)
], GroupByMergeRequestResolver);
exports.GroupByMergeRequestResolver = GroupByMergeRequestResolver;
