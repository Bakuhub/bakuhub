"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPremiseArgs_1 = require("./args/FindFirstPremiseArgs");
const Premise_1 = require("../../../models/Premise");
const helpers_1 = require("../../../helpers");
let FindFirstPremiseResolver = class FindFirstPremiseResolver {
    async findFirstPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Premise_1.Premise, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPremiseArgs_1.FindFirstPremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPremiseResolver.prototype, "findFirstPremise", null);
FindFirstPremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], FindFirstPremiseResolver);
exports.FindFirstPremiseResolver = FindFirstPremiseResolver;
