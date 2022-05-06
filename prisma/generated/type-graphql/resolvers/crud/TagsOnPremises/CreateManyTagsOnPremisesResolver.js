"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyTagsOnPremisesArgs_1 = require("./args/CreateManyTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTagsOnPremisesResolver = class CreateManyTagsOnPremisesResolver {
    async createManyTagsOnPremises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsOnPremisesArgs_1.CreateManyTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTagsOnPremisesResolver.prototype, "createManyTagsOnPremises", null);
CreateManyTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], CreateManyTagsOnPremisesResolver);
exports.CreateManyTagsOnPremisesResolver = CreateManyTagsOnPremisesResolver;
