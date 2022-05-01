"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySupscriptionsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupBySupscriptionsOnTimelinesArgs_1 = require("./args/GroupBySupscriptionsOnTimelinesArgs");
const SupscriptionsOnTimelines_1 = require("../../../models/SupscriptionsOnTimelines");
const SupscriptionsOnTimelinesGroupBy_1 = require("../../outputs/SupscriptionsOnTimelinesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySupscriptionsOnTimelinesResolver = class GroupBySupscriptionsOnTimelinesResolver {
    async groupBySupscriptionsOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).supscriptionsOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SupscriptionsOnTimelinesGroupBy_1.SupscriptionsOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySupscriptionsOnTimelinesArgs_1.GroupBySupscriptionsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySupscriptionsOnTimelinesResolver.prototype, "groupBySupscriptionsOnTimelines", null);
GroupBySupscriptionsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SupscriptionsOnTimelines_1.SupscriptionsOnTimelines)
], GroupBySupscriptionsOnTimelinesResolver);
exports.GroupBySupscriptionsOnTimelinesResolver = GroupBySupscriptionsOnTimelinesResolver;
