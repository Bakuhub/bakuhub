"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTagsOnTimelinesArgs_1 = require("./args/FindFirstTagsOnTimelinesArgs");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const helpers_1 = require("../../../helpers");
let FindFirstTagsOnTimelinesResolver = class FindFirstTagsOnTimelinesResolver {
    async findFirstTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOnTimelinesArgs_1.FindFirstTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTagsOnTimelinesResolver.prototype, "findFirstTagsOnTimelines", null);
FindFirstTagsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], FindFirstTagsOnTimelinesResolver);
exports.FindFirstTagsOnTimelinesResolver = FindFirstTagsOnTimelinesResolver;
