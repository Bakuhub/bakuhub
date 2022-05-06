"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReferenceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReferenceArgs_1 = require("./args/AggregateReferenceArgs");
const Reference_1 = require("../../../models/Reference");
const AggregateReference_1 = require("../../outputs/AggregateReference");
const helpers_1 = require("../../../helpers");
let AggregateReferenceResolver = class AggregateReferenceResolver {
    async aggregateReference(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReference_1.AggregateReference, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReferenceArgs_1.AggregateReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReferenceResolver.prototype, "aggregateReference", null);
AggregateReferenceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reference_1.Reference)
], AggregateReferenceResolver);
exports.AggregateReferenceResolver = AggregateReferenceResolver;
