"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionOnVisionsArgs_1 = require("./args/AggregateReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const AggregateReactionOnVisions_1 = require("../../outputs/AggregateReactionOnVisions");
const helpers_1 = require("../../../helpers");
let AggregateReactionOnVisionsResolver = class AggregateReactionOnVisionsResolver {
    async aggregateReactionOnVisions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReactionOnVisions_1.AggregateReactionOnVisions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionOnVisionsArgs_1.AggregateReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReactionOnVisionsResolver.prototype, "aggregateReactionOnVisions", null);
AggregateReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], AggregateReactionOnVisionsResolver);
exports.AggregateReactionOnVisionsResolver = AggregateReactionOnVisionsResolver;
