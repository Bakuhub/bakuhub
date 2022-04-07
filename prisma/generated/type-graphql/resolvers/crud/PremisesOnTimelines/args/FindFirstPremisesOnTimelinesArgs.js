"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesOrderByWithRelationInput_1 = require("../../../inputs/PremisesOnTimelinesOrderByWithRelationInput");
const PremisesOnTimelinesWhereInput_1 = require("../../../inputs/PremisesOnTimelinesWhereInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../../../inputs/PremisesOnTimelinesWhereUniqueInput");
const PremisesOnTimelinesScalarFieldEnum_1 = require("../../../../enums/PremisesOnTimelinesScalarFieldEnum");
let FindFirstPremisesOnTimelinesArgs = class FindFirstPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], FindFirstPremisesOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesOrderByWithRelationInput_1.PremisesOnTimelinesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPremisesOnTimelinesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], FindFirstPremisesOnTimelinesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPremisesOnTimelinesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstPremisesOnTimelinesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesScalarFieldEnum_1.PremisesOnTimelinesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstPremisesOnTimelinesArgs.prototype, "distinct", void 0);
FindFirstPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstPremisesOnTimelinesArgs);
exports.FindFirstPremisesOnTimelinesArgs = FindFirstPremisesOnTimelinesArgs;
