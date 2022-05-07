"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTagsOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyTagsOnVisionsArgs_1 = require("./args/FindManyTagsOnVisionsArgs");
const TagsOnVisions_1 = require("../../../models/TagsOnVisions");
const helpers_1 = require("../../../helpers");
let FindManyTagsOnVisionsResolver = class FindManyTagsOnVisionsResolver {
    async findManyTagsOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnVisions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsOnVisions_1.TagsOnVisions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTagsOnVisionsArgs_1.FindManyTagsOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTagsOnVisionsResolver.prototype, "findManyTagsOnVisions", null);
FindManyTagsOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnVisions_1.TagsOnVisions)
], FindManyTagsOnVisionsResolver);
exports.FindManyTagsOnVisionsResolver = FindManyTagsOnVisionsResolver;
