"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateTagsOnPremisesArgs_1 = require("./args/CreateTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const helpers_1 = require("../../../helpers");
let CreateTagsOnPremisesResolver = class CreateTagsOnPremisesResolver {
    async createTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TagsOnPremises_1.TagsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTagsOnPremisesArgs_1.CreateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateTagsOnPremisesResolver.prototype, "createTagsOnPremises", null);
CreateTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], CreateTagsOnPremisesResolver);
exports.CreateTagsOnPremisesResolver = CreateTagsOnPremisesResolver;
