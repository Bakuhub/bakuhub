"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePremisesOnTimelinesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreatePremisesOnTimelinesArgs_1 = require("./args/CreatePremisesOnTimelinesArgs");
const PremisesOnTimelines_1 = require("../../../models/PremisesOnTimelines");
const helpers_1 = require("../../../helpers");
let CreatePremisesOnTimelinesResolver = class CreatePremisesOnTimelinesResolver {
    async createPremisesOnTimelines(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).premisesOnTimelines.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PremisesOnTimelines_1.PremisesOnTimelines, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePremisesOnTimelinesArgs_1.CreatePremisesOnTimelinesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreatePremisesOnTimelinesResolver.prototype, "createPremisesOnTimelines", null);
CreatePremisesOnTimelinesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PremisesOnTimelines_1.PremisesOnTimelines)
], CreatePremisesOnTimelinesResolver);
exports.CreatePremisesOnTimelinesResolver = CreatePremisesOnTimelinesResolver;
