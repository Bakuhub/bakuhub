"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseOrderByWithRelationInput_1 = require("../../../inputs/VotesOnPremiseOrderByWithRelationInput");
const VotesOnPremiseWhereInput_1 = require("../../../inputs/VotesOnPremiseWhereInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
const VotesOnPremiseScalarFieldEnum_1 = require("../../../../enums/VotesOnPremiseScalarFieldEnum");
let PremiseVotesOnPremiseArgs = class PremiseVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], PremiseVotesOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseOrderByWithRelationInput_1.VotesOnPremiseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseVotesOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], PremiseVotesOnPremiseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PremiseVotesOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PremiseVotesOnPremiseArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarFieldEnum_1.VotesOnPremiseScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremiseVotesOnPremiseArgs.prototype, "distinct", void 0);
PremiseVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], PremiseVotesOnPremiseArgs);
exports.PremiseVotesOnPremiseArgs = PremiseVotesOnPremiseArgs;
