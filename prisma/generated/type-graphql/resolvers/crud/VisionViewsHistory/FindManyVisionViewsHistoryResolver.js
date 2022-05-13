"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyVisionViewsHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyVisionViewsHistoryArgs_1 = require("./args/FindManyVisionViewsHistoryArgs");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const helpers_1 = require("../../../helpers");
let FindManyVisionViewsHistoryResolver = class FindManyVisionViewsHistoryResolver {
    async visionViewsHistories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VisionViewsHistory_1.VisionViewsHistory], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVisionViewsHistoryArgs_1.FindManyVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyVisionViewsHistoryResolver.prototype, "visionViewsHistories", null);
FindManyVisionViewsHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], FindManyVisionViewsHistoryResolver);
exports.FindManyVisionViewsHistoryResolver = FindManyVisionViewsHistoryResolver;
