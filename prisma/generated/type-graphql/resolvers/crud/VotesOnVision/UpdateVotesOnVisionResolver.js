"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateVotesOnVisionArgs_1 = require("./args/UpdateVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let UpdateVotesOnVisionResolver = class UpdateVotesOnVisionResolver {
    async updateVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateVotesOnVisionArgs_1.UpdateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateVotesOnVisionResolver.prototype, "updateVotesOnVision", null);
UpdateVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], UpdateVotesOnVisionResolver);
exports.UpdateVotesOnVisionResolver = UpdateVotesOnVisionResolver;
