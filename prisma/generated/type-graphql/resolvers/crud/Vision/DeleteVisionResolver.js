"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteVisionArgs_1 = require("./args/DeleteVisionArgs");
const Vision_1 = require("../../../models/Vision");
const helpers_1 = require("../../../helpers");
let DeleteVisionResolver = class DeleteVisionResolver {
    async deleteVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vision_1.Vision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteVisionArgs_1.DeleteVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteVisionResolver.prototype, "deleteVision", null);
DeleteVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vision_1.Vision)
], DeleteVisionResolver);
exports.DeleteVisionResolver = DeleteVisionResolver;
