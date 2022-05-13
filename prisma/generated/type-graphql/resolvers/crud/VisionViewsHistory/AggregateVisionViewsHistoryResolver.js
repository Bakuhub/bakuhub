"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVisionViewsHistoryResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisionViewsHistoryArgs_1 = require("./args/AggregateVisionViewsHistoryArgs");
const VisionViewsHistory_1 = require("../../../models/VisionViewsHistory");
const AggregateVisionViewsHistory_1 = require("../../outputs/AggregateVisionViewsHistory");
const helpers_1 = require("../../../helpers");
let AggregateVisionViewsHistoryResolver = class AggregateVisionViewsHistoryResolver {
    async aggregateVisionViewsHistory(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).visionViewsHistory.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVisionViewsHistory_1.AggregateVisionViewsHistory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisionViewsHistoryArgs_1.AggregateVisionViewsHistoryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVisionViewsHistoryResolver.prototype, "aggregateVisionViewsHistory", null);
AggregateVisionViewsHistoryResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => VisionViewsHistory_1.VisionViewsHistory)
], AggregateVisionViewsHistoryResolver);
exports.AggregateVisionViewsHistoryResolver = AggregateVisionViewsHistoryResolver;
