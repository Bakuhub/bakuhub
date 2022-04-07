"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertPremiseArgs_1 = require("./args/UpsertPremiseArgs");
const Premise_1 = require("../../../models/Premise");
const helpers_1 = require("../../../helpers");
let UpsertPremiseResolver = class UpsertPremiseResolver {
    async upsertPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Premise_1.Premise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPremiseArgs_1.UpsertPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertPremiseResolver.prototype, "upsertPremise", null);
UpsertPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], UpsertPremiseResolver);
exports.UpsertPremiseResolver = UpsertPremiseResolver;
