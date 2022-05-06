"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyVotesOnVisionArgs_1 = require("./args/FindManyVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const helpers_1 = require("../../../helpers");
let FindManyVotesOnVisionResolver = class FindManyVotesOnVisionResolver {
    async votesOnVisions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VotesOnVision_1.VotesOnVision], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVotesOnVisionArgs_1.FindManyVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyVotesOnVisionResolver.prototype, "votesOnVisions", null);
FindManyVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], FindManyVotesOnVisionResolver);
exports.FindManyVotesOnVisionResolver = FindManyVotesOnVisionResolver;
