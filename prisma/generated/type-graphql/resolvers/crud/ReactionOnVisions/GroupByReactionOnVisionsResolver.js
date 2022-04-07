"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReactionOnVisionsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByReactionOnVisionsArgs_1 = require("./args/GroupByReactionOnVisionsArgs");
const ReactionOnVisions_1 = require("../../../models/ReactionOnVisions");
const ReactionOnVisionsGroupBy_1 = require("../../outputs/ReactionOnVisionsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReactionOnVisionsResolver = class GroupByReactionOnVisionsResolver {
    async groupByReactionOnVisions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reactionOnVisions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionOnVisionsGroupBy_1.ReactionOnVisionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionOnVisionsArgs_1.GroupByReactionOnVisionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReactionOnVisionsResolver.prototype, "groupByReactionOnVisions", null);
GroupByReactionOnVisionsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ReactionOnVisions_1.ReactionOnVisions)
], GroupByReactionOnVisionsResolver);
exports.GroupByReactionOnVisionsResolver = GroupByReactionOnVisionsResolver;
