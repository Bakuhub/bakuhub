"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsOnTimelinesArgs_1 = require("./args/AggregateTagsOnTimelinesArgs");
const TagsOnTimelines_1 = require("../../../models/TagsOnTimelines");
const AggregateTagsOnTimelines_1 = require("../../outputs/AggregateTagsOnTimelines");
const helpers_1 = require("../../../helpers");
let AggregateTagsOnTimelinesResolver = class AggregateTagsOnTimelinesResolver {
    async aggregateTagsOnTimelines(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnTimelines.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTagsOnTimelines_1.AggregateTagsOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsOnTimelinesArgs_1.AggregateTagsOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTagsOnTimelinesResolver.prototype, "aggregateTagsOnTimelines", null);
AggregateTagsOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnTimelines_1.TagsOnTimelines)
], AggregateTagsOnTimelinesResolver);
exports.AggregateTagsOnTimelinesResolver = AggregateTagsOnTimelinesResolver;
