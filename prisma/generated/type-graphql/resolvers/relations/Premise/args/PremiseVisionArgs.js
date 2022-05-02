"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionOrderByWithRelationInput_1 = require("../../../inputs/VisionOrderByWithRelationInput");
const VisionWhereInput_1 = require("../../../inputs/VisionWhereInput");
const VisionWhereUniqueInput_1 = require("../../../inputs/VisionWhereUniqueInput");
const VisionScalarFieldEnum_1 = require("../../../../enums/VisionScalarFieldEnum");
let PremiseVisionArgs = class PremiseVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereInput_1.VisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereInput_1.VisionWhereInput)
], PremiseVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionOrderByWithRelationInput_1.VisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionWhereUniqueInput_1.VisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionWhereUniqueInput_1.VisionWhereUniqueInput)
], PremiseVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PremiseVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PremiseVisionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VisionScalarFieldEnum_1.VisionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseVisionArgs.prototype, "distinct", void 0);
PremiseVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PremiseVisionArgs);
exports.PremiseVisionArgs = PremiseVisionArgs;