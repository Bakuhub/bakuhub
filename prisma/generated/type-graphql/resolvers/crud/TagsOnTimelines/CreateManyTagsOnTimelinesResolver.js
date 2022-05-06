"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTagsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateManyTagsOnTimelinesArgs_1 = require("./args/CreateManyTagsOnTimelinesArgs");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTagsOnTimelinesResolver = class CreateManyTagsOnTimelinesResolver {
    async createManyTagsOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTagsOnTimelinesArgs_1.CreateManyTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTagsOnTimelinesResolver.prototype, "createManyTagsOnTimelines", null);
CreateManyTagsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], CreateManyTagsOnTimelinesResolver);
exports.CreateManyTagsOnTimelinesResolver = CreateManyTagsOnTimelinesResolver;
