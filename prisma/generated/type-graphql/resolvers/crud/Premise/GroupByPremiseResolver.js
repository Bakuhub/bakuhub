"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPremiseArgs_1 = require("./args/GroupByPremiseArgs");
const Premise_1 = require("../../../models/Premise");
const PremiseGroupBy_1 = require("../../outputs/PremiseGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPremiseResolver = class GroupByPremiseResolver {
    async groupByPremise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PremiseGroupBy_1.PremiseGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPremiseArgs_1.GroupByPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByPremiseResolver.prototype, "groupByPremise", null);
GroupByPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], GroupByPremiseResolver);
exports.GroupByPremiseResolver = GroupByPremiseResolver;
