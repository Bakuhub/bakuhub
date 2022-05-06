"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByVotesOnThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByVotesOnThreadArgs_1 = require("./args/GroupByVotesOnThreadArgs");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const VotesOnThreadGroupBy_1 = require("../../outputs/VotesOnThreadGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByVotesOnThreadResolver = class GroupByVotesOnThreadResolver {
    async groupByVotesOnThread(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnThreadGroupBy_1.VotesOnThreadGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVotesOnThreadArgs_1.GroupByVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByVotesOnThreadResolver.prototype, "groupByVotesOnThread", null);
GroupByVotesOnThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], GroupByVotesOnThreadResolver);
exports.GroupByVotesOnThreadResolver = GroupByVotesOnThreadResolver;
