"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTagsOnVisionsArgs_1 = require("./args/FindUniqueTagsOnVisionsArgs");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const helpers_1 = require("../../../helpers");
let FindUniqueTagsOnVisionsResolver = class FindUniqueTagsOnVisionsResolver {
    async findUniqueTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnVisionsArgs_1.FindUniqueTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTagsOnVisionsResolver.prototype, "findUniqueTagsOnVisions", null);
FindUniqueTagsOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnVisions_1.TagsOnVisions)
], FindUniqueTagsOnVisionsResolver);
exports.FindUniqueTagsOnVisionsResolver = FindUniqueTagsOnVisionsResolver;
