"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVotesOnVisionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionOrderByWithRelationInput_1 = require("../../../inputs/VotesOnVisionOrderByWithRelationInput");
const VotesOnVisionWhereInput_1 = require("../../../inputs/VotesOnVisionWhereInput");
const VotesOnVisionWhereUniqueInput_1 = require("../../../inputs/VotesOnVisionWhereUniqueInput");
const VotesOnVisionScalarFieldEnum_1 = require("../../../../enums/VotesOnVisionScalarFieldEnum");
let FindFirstVotesOnVisionArgs = class FindFirstVotesOnVisionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], FindFirstVotesOnVisionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionOrderByWithRelationInput_1.VotesOnVisionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnVisionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], FindFirstVotesOnVisionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnVisionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnVisionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarFieldEnum_1.VotesOnVisionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnVisionArgs.prototype, "distinct", void 0);
FindFirstVotesOnVisionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstVotesOnVisionArgs);
exports.FindFirstVotesOnVisionArgs = FindFirstVotesOnVisionArgs;
