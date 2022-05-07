"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTagsOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstTagsOnVisionsArgs_1 = require("./args/FindFirstTagsOnVisionsArgs");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const helpers_1 = require("../../../helpers");
let FindFirstTagsOnVisionsResolver = class FindFirstTagsOnVisionsResolver {
    async findFirstTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnVisions_1.TagsOnVisions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTagsOnVisionsArgs_1.FindFirstTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTagsOnVisionsResolver.prototype, "findFirstTagsOnVisions", null);
FindFirstTagsOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnVisions_1.TagsOnVisions)
], FindFirstTagsOnVisionsResolver);
exports.FindFirstTagsOnVisionsResolver = FindFirstTagsOnVisionsResolver;
