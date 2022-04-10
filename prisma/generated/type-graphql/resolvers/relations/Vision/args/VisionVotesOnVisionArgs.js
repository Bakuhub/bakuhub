"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisionVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionOrderByWithRelationInput_1 = require("../../../inputs/VotesOnVisionOrderByWithRelationInput");
const VotesOnVisionWhereInput_1 = require("../../../inputs/VotesOnVisionWhereInput");
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
const VotesOnVisionScalarFieldEnum_1 = require("../../../../enums/VotesOnVisionScalarFieldEnum");
let VisionVotesOnVisionArgs = class VisionVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], VisionVotesOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionOrderByWithRelationInput_1.VotesOnVisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionVotesOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VisionVotesOnVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VisionVotesOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VisionVotesOnVisionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarFieldEnum_1.VotesOnVisionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VisionVotesOnVisionArgs.prototype, "distinct", void 0);
VisionVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], VisionVotesOnVisionArgs);
exports.VisionVotesOnVisionArgs = VisionVotesOnVisionArgs;
