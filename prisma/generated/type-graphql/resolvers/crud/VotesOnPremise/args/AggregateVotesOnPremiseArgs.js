"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnPremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseOrderByWithRelationInput_1 = require("../../../inputs/VotesOnPremiseOrderByWithRelationInput");
const VotesOnPremiseWhereInput_1 = require("../../../inputs/VotesOnPremiseWhereInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../../../inputs/VotesOnPremiseWhereUniqueInput");
let AggregateVotesOnPremiseArgs = class AggregateVotesOnPremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], AggregateVotesOnPremiseArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseOrderByWithRelationInput_1.VotesOnPremiseOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateVotesOnPremiseArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput)
], AggregateVotesOnPremiseArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVotesOnPremiseArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVotesOnPremiseArgs.prototype, "skip", void 0);
AggregateVotesOnPremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateVotesOnPremiseArgs);
exports.AggregateVotesOnPremiseArgs = AggregateVotesOnPremiseArgs;
