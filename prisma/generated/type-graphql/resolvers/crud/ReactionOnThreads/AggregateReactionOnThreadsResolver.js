"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnThreadsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionOnThreadsArgs_1 = require("./args/AggregateReactionOnThreadsArgs");
const ReactionOnThreads_1 = require("../../../models/ReactionOnThreads");
const AggregateReactionOnThreads_1 = require("../../outputs/AggregateReactionOnThreads");
const helpers_1 = require("../../../helpers");
let AggregateReactionOnThreadsResolver = class AggregateReactionOnThreadsResolver {
    async aggregateReactionOnThreads(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnThreads.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReactionOnThreads_1.AggregateReactionOnThreads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionOnThreadsArgs_1.AggregateReactionOnThreadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReactionOnThreadsResolver.prototype, "aggregateReactionOnThreads", null);
AggregateReactionOnThreadsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnThreads_1.ReactionOnThreads)
], AggregateReactionOnThreadsResolver);
exports.AggregateReactionOnThreadsResolver = AggregateReactionOnThreadsResolver;
