"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueVotesOnVisionArgs_1 = require("./args/FindUniqueVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let FindUniqueVotesOnVisionResolver = class FindUniqueVotesOnVisionResolver {
    async votesOnVision(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VotesOnVision_1.VotesOnVision, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVotesOnVisionArgs_1.FindUniqueVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVotesOnVisionResolver.prototype, "votesOnVision", null);
FindUniqueVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], FindUniqueVotesOnVisionResolver);
exports.FindUniqueVotesOnVisionResolver = FindUniqueVotesOnVisionResolver;
