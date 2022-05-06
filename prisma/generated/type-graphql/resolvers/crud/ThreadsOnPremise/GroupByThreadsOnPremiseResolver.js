"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByThreadsOnPremiseArgs_1 = require("./args/GroupByThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const ThreadsOnPremiseGroupBy_1 = require("../../outputs/ThreadsOnPremiseGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByThreadsOnPremiseResolver = class GroupByThreadsOnPremiseResolver {
    async groupByThreadsOnPremise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ThreadsOnPremiseGroupBy_1.ThreadsOnPremiseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByThreadsOnPremiseArgs_1.GroupByThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByThreadsOnPremiseResolver.prototype, "groupByThreadsOnPremise", null);
GroupByThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], GroupByThreadsOnPremiseResolver);
exports.GroupByThreadsOnPremiseResolver = GroupByThreadsOnPremiseResolver;
