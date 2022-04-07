"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePremiseArgs_1 = require("./args/AggregatePremiseArgs");
const Premise_1 = require("../../../models/Premise");
const AggregatePremise_1 = require("../../outputs/AggregatePremise");
const helpers_1 = require("../../../helpers");
let AggregatePremiseResolver = class AggregatePremiseResolver {
    async aggregatePremise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePremise_1.AggregatePremise, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePremiseArgs_1.AggregatePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregatePremiseResolver.prototype, "aggregatePremise", null);
AggregatePremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], AggregatePremiseResolver);
exports.AggregatePremiseResolver = AggregatePremiseResolver;
