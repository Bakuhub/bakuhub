"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueVisionViewsHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueVisionViewsHistoryArgs_1 = require("./args/FindUniqueVisionViewsHistoryArgs");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const helpers_1 = require("../../../helpers");
let FindUniqueVisionViewsHistoryResolver = class FindUniqueVisionViewsHistoryResolver {
    async visionViewsHistory(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => VisionViewsHistory_1.VisionViewsHistory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVisionViewsHistoryArgs_1.FindUniqueVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueVisionViewsHistoryResolver.prototype, "visionViewsHistory", null);
FindUniqueVisionViewsHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], FindUniqueVisionViewsHistoryResolver);
exports.FindUniqueVisionViewsHistoryResolver = FindUniqueVisionViewsHistoryResolver;
