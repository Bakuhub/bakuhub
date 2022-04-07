"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVisionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateVisionArgs_1 = require("./args/AggregateVisionArgs");
const Vision_1 = require("../../../models/Vision");
const AggregateVision_1 = require("../../outputs/AggregateVision");
const helpers_1 = require("../../../helpers");
let AggregateVisionResolver = class AggregateVisionResolver {
    async aggregateVision(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vision.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVision_1.AggregateVision, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVisionArgs_1.AggregateVisionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateVisionResolver.prototype, "aggregateVision", null);
AggregateVisionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vision_1.Vision)
], AggregateVisionResolver);
exports.AggregateVisionResolver = AggregateVisionResolver;
