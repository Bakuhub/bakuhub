"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteTagsOnPremisesArgs_1 = require("./args/DeleteTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const helpers_1 = require("../../../helpers");
let DeleteTagsOnPremisesResolver = class DeleteTagsOnPremisesResolver {
    async deleteTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTagsOnPremisesArgs_1.DeleteTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteTagsOnPremisesResolver.prototype, "deleteTagsOnPremises", null);
DeleteTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], DeleteTagsOnPremisesResolver);
exports.DeleteTagsOnPremisesResolver = DeleteTagsOnPremisesResolver;
