"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueTagsOnPremisesArgs_1 = require("./args/FindUniqueTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const helpers_1 = require("../../../helpers");
let FindUniqueTagsOnPremisesResolver = class FindUniqueTagsOnPremisesResolver {
    async findUniqueTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTagsOnPremisesArgs_1.FindUniqueTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTagsOnPremisesResolver.prototype, "findUniqueTagsOnPremises", null);
FindUniqueTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], FindUniqueTagsOnPremisesResolver);
exports.FindUniqueTagsOnPremisesResolver = FindUniqueTagsOnPremisesResolver;
