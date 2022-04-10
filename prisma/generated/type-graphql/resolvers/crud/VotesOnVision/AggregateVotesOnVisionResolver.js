"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnVisionArgs_1 = require("./args/AggregateVotesOnVisionArgs");
const VotesOnVision_1 = require("../../../models/VotesOnVision");
const AggregateVotesOnVision_1 = require("../../outputs/AggregateVotesOnVision");
const helpers_1 = require("../../../helpers");
let AggregateVotesOnVisionResolver = class AggregateVotesOnVisionResolver {
    async aggregateVotesOnVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnVision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnVision_1.AggregateVotesOnVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnVisionArgs_1.AggregateVotesOnVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVotesOnVisionResolver.prototype, "aggregateVotesOnVision", null);
AggregateVotesOnVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnVision_1.VotesOnVision)
], AggregateVotesOnVisionResolver);
exports.AggregateVotesOnVisionResolver = AggregateVotesOnVisionResolver;
