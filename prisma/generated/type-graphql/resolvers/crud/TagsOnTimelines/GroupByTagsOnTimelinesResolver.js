"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTagsOnTimelinesArgs_1 = require("./args/GroupByTagsOnTimelinesArgs");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const TagsOnTimelinesGroupBy_1 = require("../../outputs/TagsOnTimelinesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTagsOnTimelinesResolver = class GroupByTagsOnTimelinesResolver {
    async groupByTagsOnTimelines(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnTimelinesGroupBy_1.TagsOnTimelinesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsOnTimelinesArgs_1.GroupByTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTagsOnTimelinesResolver.prototype, "groupByTagsOnTimelines", null);
GroupByTagsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], GroupByTagsOnTimelinesResolver);
exports.GroupByTagsOnTimelinesResolver = GroupByTagsOnTimelinesResolver;
