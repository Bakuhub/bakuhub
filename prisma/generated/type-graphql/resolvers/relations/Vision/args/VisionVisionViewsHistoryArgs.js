"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionVisionViewsHistoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionViewsHistoryOrderByWithRelationInput_1 = require("../../../inputs/VisionViewsHistoryOrderByWithRelationInput");
const VisionViewsHistoryWhereInput_1 = require("../../../inputs/VisionViewsHistoryWhereInput");
const VisionViewsHistoryWhereUniqueInput_1 = require("../../../inputs/VisionViewsHistoryWhereUniqueInput");
const VisionViewsHistoryScalarFieldEnum_1 = require("../../../../enums/VisionViewsHistoryScalarFieldEnum");
let VisionVisionViewsHistoryArgs = class VisionVisionViewsHistoryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereInput_1.VisionViewsHistoryWhereInput)
], VisionVisionViewsHistoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryOrderByWithRelationInput_1.VisionViewsHistoryOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionVisionViewsHistoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionViewsHistoryWhereUniqueInput_1.VisionViewsHistoryWhereUniqueInput)
], VisionVisionViewsHistoryArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VisionVisionViewsHistoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VisionVisionViewsHistoryArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionViewsHistoryScalarFieldEnum_1.VisionViewsHistoryScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionVisionViewsHistoryArgs.prototype, "distinct", void 0);
VisionVisionViewsHistoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], VisionVisionViewsHistoryArgs);
exports.VisionVisionViewsHistoryArgs = VisionVisionViewsHistoryArgs;
