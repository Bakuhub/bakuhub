"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadOrderByWithRelationInput_1 = require("../../../inputs/VotesOnThreadOrderByWithRelationInput");
const VotesOnThreadWhereInput_1 = require("../../../inputs/VotesOnThreadWhereInput");
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
let AggregateVotesOnThreadArgs = class AggregateVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], AggregateVotesOnThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadOrderByWithRelationInput_1.VotesOnThreadOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateVotesOnThreadArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], AggregateVotesOnThreadArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVotesOnThreadArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateVotesOnThreadArgs.prototype, "skip", void 0);
AggregateVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateVotesOnThreadArgs);
exports.AggregateVotesOnThreadArgs = AggregateVotesOnThreadArgs;
