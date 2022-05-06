"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTagsOnPremisesArgs_1 = require("./args/GroupByTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const TagsOnPremisesGroupBy_1 = require("../../outputs/TagsOnPremisesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTagsOnPremisesResolver = class GroupByTagsOnPremisesResolver {
    async groupByTagsOnPremises(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnPremisesGroupBy_1.TagsOnPremisesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsOnPremisesArgs_1.GroupByTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTagsOnPremisesResolver.prototype, "groupByTagsOnPremises", null);
GroupByTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], GroupByTagsOnPremisesResolver);
exports.GroupByTagsOnPremisesResolver = GroupByTagsOnPremisesResolver;
