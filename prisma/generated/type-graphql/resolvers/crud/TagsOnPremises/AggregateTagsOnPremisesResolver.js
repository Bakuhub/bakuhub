"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTagsOnPremisesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTagsOnPremisesArgs_1 = require("./args/AggregateTagsOnPremisesArgs");
const TagsOnPremises_1 = require("../../../models/TagsOnPremises");
const AggregateTagsOnPremises_1 = require("../../outputs/AggregateTagsOnPremises");
const helpers_1 = require("../../../helpers");
let AggregateTagsOnPremisesResolver = class AggregateTagsOnPremisesResolver {
    async aggregateTagsOnPremises(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).tagsOnPremises.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTagsOnPremises_1.AggregateTagsOnPremises, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTagsOnPremisesArgs_1.AggregateTagsOnPremisesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTagsOnPremisesResolver.prototype, "aggregateTagsOnPremises", null);
AggregateTagsOnPremisesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TagsOnPremises_1.TagsOnPremises)
], AggregateTagsOnPremisesResolver);
exports.AggregateTagsOnPremisesResolver = AggregateTagsOnPremisesResolver;
