"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVisionViewsHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateVisionViewsHistoryArgs_1 = require("./args/CreateVisionViewsHistoryArgs");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const helpers_1 = require("../../../helpers");
let CreateVisionViewsHistoryResolver = class CreateVisionViewsHistoryResolver {
    async createVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateVisionViewsHistoryArgs_1.CreateVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateVisionViewsHistoryResolver.prototype, "createVisionViewsHistory", null);
CreateVisionViewsHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], CreateVisionViewsHistoryResolver);
exports.CreateVisionViewsHistoryResolver = CreateVisionViewsHistoryResolver;
