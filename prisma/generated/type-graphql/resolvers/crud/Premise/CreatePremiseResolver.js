"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePremiseResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreatePremiseArgs_1 = require("./args/CreatePremiseArgs");
const Premise_1 = require("../../../models/Premise");
const helpers_1 = require("../../../helpers");
let CreatePremiseResolver = class CreatePremiseResolver {
    async createPremise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premise.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePremiseArgs_1.CreatePremiseArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreatePremiseResolver.prototype, "createPremise", null);
CreatePremiseResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Premise_1.Premise)
], CreatePremiseResolver);
exports.CreatePremiseResolver = CreatePremiseResolver;
