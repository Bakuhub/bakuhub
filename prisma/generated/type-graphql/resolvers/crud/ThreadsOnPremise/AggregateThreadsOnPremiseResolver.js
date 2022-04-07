"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateThreadsOnPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateThreadsOnPremiseArgs_1 = require("./args/AggregateThreadsOnPremiseArgs");
const ThreadsOnPremise_1 = require("../../../models/ThreadsOnPremise");
const AggregateThreadsOnPremise_1 = require("../../outputs/AggregateThreadsOnPremise");
const helpers_1 = require("../../../helpers");
let AggregateThreadsOnPremiseResolver = class AggregateThreadsOnPremiseResolver {
    async aggregateThreadsOnPremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).threadsOnPremise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateThreadsOnPremise_1.AggregateThreadsOnPremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateThreadsOnPremiseArgs_1.AggregateThreadsOnPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateThreadsOnPremiseResolver.prototype, "aggregateThreadsOnPremise", null);
AggregateThreadsOnPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ThreadsOnPremise_1.ThreadsOnPremise)
], AggregateThreadsOnPremiseResolver);
exports.AggregateThreadsOnPremiseResolver = AggregateThreadsOnPremiseResolver;
