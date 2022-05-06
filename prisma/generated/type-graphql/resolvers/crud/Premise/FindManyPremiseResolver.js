"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyPremiseArgs_1 = require("./args/FindManyPremiseArgs");
const Premise_1 = require("../../../models/Premise");
const helpers_1 = require("../../../helpers");
let FindManyPremiseResolver = class FindManyPremiseResolver {
    async premises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Premise_1.Premise], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPremiseArgs_1.FindManyPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyPremiseResolver.prototype, "premises", null);
FindManyPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], FindManyPremiseResolver);
exports.FindManyPremiseResolver = FindManyPremiseResolver;
