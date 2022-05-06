"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVotesOnTimelineArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineOrderByWithRelationInput_1 = require("../../../inputs/VotesOnTimelineOrderByWithRelationInput");
const VotesOnTimelineWhereInput_1 = require("../../../inputs/VotesOnTimelineWhereInput");
const VotesOnTimelineWhereUniqueInput_1 = require("../../../inputs/VotesOnTimelineWhereUniqueInput");
const VotesOnTimelineScalarFieldEnum_1 = require("../../../../enums/VotesOnTimelineScalarFieldEnum");
let FindFirstVotesOnTimelineArgs = class FindFirstVotesOnTimelineArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], FindFirstVotesOnTimelineArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineOrderByWithRelationInput_1.VotesOnTimelineOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnTimelineArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereUniqueInput_1.VotesOnTimelineWhereUniqueInput)
], FindFirstVotesOnTimelineArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnTimelineArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnTimelineArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnTimelineScalarFieldEnum_1.VotesOnTimelineScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnTimelineArgs.prototype, "distinct", void 0);
FindFirstVotesOnTimelineArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstVotesOnTimelineArgs);
exports.FindFirstVotesOnTimelineArgs = FindFirstVotesOnTimelineArgs;
