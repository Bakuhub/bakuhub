"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReferenceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyReferenceArgs_1 = require("./args/FindManyReferenceArgs");
const Reference_1 = require("../../../models/Reference");
const helpers_1 = require("../../../helpers");
let FindManyReferenceResolver = class FindManyReferenceResolver {
    async references(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reference_1.Reference], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReferenceArgs_1.FindManyReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyReferenceResolver.prototype, "references", null);
FindManyReferenceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reference_1.Reference)
], FindManyReferenceResolver);
exports.FindManyReferenceResolver = FindManyReferenceResolver;
