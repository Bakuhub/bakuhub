"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertVisionViewsHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertVisionViewsHistoryArgs_1 = require("./args/UpsertVisionViewsHistoryArgs");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const helpers_1 = require("../../../helpers");
let UpsertVisionViewsHistoryResolver = class UpsertVisionViewsHistoryResolver {
    async upsertVisionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.upsert({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertVisionViewsHistoryArgs_1.UpsertVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertVisionViewsHistoryResolver.prototype, "upsertVisionViewsHistory", null);
UpsertVisionViewsHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], UpsertVisionViewsHistoryResolver);
exports.UpsertVisionViewsHistoryResolver = UpsertVisionViewsHistoryResolver;
