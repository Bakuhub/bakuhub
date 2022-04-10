"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertVotesOnVisionArgs_1 = require("./args/UpsertVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let UpsertVotesOnVisionResolver = class UpsertVotesOnVisionResolver {
    async upsertVotesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVotesOnVisionArgs_1.UpsertVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertVotesOnVisionResolver.prototype, "upsertVotesOnVision", null);
UpsertVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], UpsertVotesOnVisionResolver);
exports.UpsertVotesOnVisionResolver = UpsertVotesOnVisionResolver;
