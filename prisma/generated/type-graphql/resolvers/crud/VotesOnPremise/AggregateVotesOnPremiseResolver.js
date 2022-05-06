"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnPremiseArgs_1 = require("./args/AggregateVotesOnPremiseArgs");
const VotesOnPremise_1 = require("../../../models/VotesOnPremise");
const AggregateVotesOnPremise_1 = require("../../outputs/AggregateVotesOnPremise");
const helpers_1 = require("../../../helpers");
let AggregateVotesOnPremiseResolver = class AggregateVotesOnPremiseResolver {
    async aggregateVotesOnPremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnPremise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnPremise_1.AggregateVotesOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnPremiseArgs_1.AggregateVotesOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVotesOnPremiseResolver.prototype, "aggregateVotesOnPremise", null);
AggregateVotesOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnPremise_1.VotesOnPremise)
], AggregateVotesOnPremiseResolver);
exports.AggregateVotesOnPremiseResolver = AggregateVotesOnPremiseResolver;
