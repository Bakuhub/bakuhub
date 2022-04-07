"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTagsOnTimelinesArgs_1 = require("./args/FindUniqueTagsOnTimelinesArgs");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindUniqueTagsOnTimelinesResolver = class FindUniqueTagsOnTimelinesResolver {
    async findUniqueTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnTimelines_1.TagsOnTimelines, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnTimelinesArgs_1.FindUniqueTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTagsOnTimelinesResolver.prototype, "findUniqueTagsOnTimelines", null);
FindUniqueTagsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], FindUniqueTagsOnTimelinesResolver);
exports.FindUniqueTagsOnTimelinesResolver = FindUniqueTagsOnTimelinesResolver;
