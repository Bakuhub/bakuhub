"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnThreadResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVotesOnThreadArgs_1 = require("./args/AggregateVotesOnThreadArgs");
const VotesOnThread_1 = require("../../../models/VotesOnThread");
const AggregateVotesOnThread_1 = require("../../outputs/AggregateVotesOnThread");
const helpers_1 = require("../../../helpers");
let AggregateVotesOnThreadResolver = class AggregateVotesOnThreadResolver {
    async aggregateVotesOnThread(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).votesOnThread.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVotesOnThread_1.AggregateVotesOnThread, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVotesOnThreadArgs_1.AggregateVotesOnThreadArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVotesOnThreadResolver.prototype, "aggregateVotesOnThread", null);
AggregateVotesOnThreadResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VotesOnThread_1.VotesOnThread)
], AggregateVotesOnThreadResolver);
exports.AggregateVotesOnThreadResolver = AggregateVotesOnThreadResolver;
