"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePremiseArgs_1 = require("./args/FindUniquePremiseArgs");
const Premise_1 = require("../../../models/Premise");
const helpers_1 = require("../../../helpers");
let FindUniquePremiseResolver = class FindUniquePremiseResolver {
    async premise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePremiseArgs_1.FindUniquePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePremiseResolver.prototype, "premise", null);
FindUniquePremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], FindUniquePremiseResolver);
exports.FindUniquePremiseResolver = FindUniquePremiseResolver;
