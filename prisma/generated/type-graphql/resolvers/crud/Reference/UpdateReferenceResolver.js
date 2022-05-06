"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReferenceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateReferenceArgs_1 = require("./args/UpdateReferenceArgs");
const Reference_1 = require("../../../models/Reference");
const helpers_1 = require("../../../helpers");
let UpdateReferenceResolver = class UpdateReferenceResolver {
    async updateReference(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reference.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reference_1.Reference, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReferenceArgs_1.UpdateReferenceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateReferenceResolver.prototype, "updateReference", null);
UpdateReferenceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reference_1.Reference)
], UpdateReferenceResolver);
exports.UpdateReferenceResolver = UpdateReferenceResolver;
