"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateVisionArgs_1 = require("./args/UpdateVisionArgs");
const Vision_1 = require("../../../models/Vision");
const helpers_1 = require("../../../helpers");
let UpdateVisionResolver = class UpdateVisionResolver {
    async updateVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVisionArgs_1.UpdateVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateVisionResolver.prototype, "updateVision", null);
UpdateVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vision_1.Vision)
], UpdateVisionResolver);
exports.UpdateVisionResolver = UpdateVisionResolver;
