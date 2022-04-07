"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateTagsOnPremisesArgs_1 = require("./args/UpdateTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const helpers_1 = require("../../../helpers");
let UpdateTagsOnPremisesResolver = class UpdateTagsOnPremisesResolver {
    async updateTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTagsOnPremisesArgs_1.UpdateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateTagsOnPremisesResolver.prototype, "updateTagsOnPremises", null);
UpdateTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], UpdateTagsOnPremisesResolver);
exports.UpdateTagsOnPremisesResolver = UpdateTagsOnPremisesResolver;
