"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByVotesOnVisionArgs_1 = require("./args/GroupByVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const VotesOnVisionGroupBy_1 = require("../../outputs/VotesOnVisionGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVotesOnVisionResolver = class GroupByVotesOnVisionResolver {
    async groupByVotesOnVision(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnVisionGroupBy_1.VotesOnVisionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnVisionArgs_1.GroupByVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByVotesOnVisionResolver.prototype, "groupByVotesOnVision", null);
GroupByVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], GroupByVotesOnVisionResolver);
exports.GroupByVotesOnVisionResolver = GroupByVotesOnVisionResolver;
