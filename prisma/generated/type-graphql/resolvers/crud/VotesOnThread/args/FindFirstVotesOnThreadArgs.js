"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstVotesOnThreadArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadOrderByWithRelationInput_1 = require("../../../inputs/VotesOnThreadOrderByWithRelationInput");
const VotesOnThreadWhereInput_1 = require("../../../inputs/VotesOnThreadWhereInput");
const VotesOnThreadWhereUniqueInput_1 = require("../../../inputs/VotesOnThreadWhereUniqueInput");
const VotesOnThreadScalarFieldEnum_1 = require("../../../../enums/VotesOnThreadScalarFieldEnum");
let FindFirstVotesOnThreadArgs = class FindFirstVotesOnThreadArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], FindFirstVotesOnThreadArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadOrderByWithRelationInput_1.VotesOnThreadOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnThreadArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], FindFirstVotesOnThreadArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnThreadArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstVotesOnThreadArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarFieldEnum_1.VotesOnThreadScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstVotesOnThreadArgs.prototype, "distinct", void 0);
FindFirstVotesOnThreadArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstVotesOnThreadArgs);
exports.FindFirstVotesOnThreadArgs = FindFirstVotesOnThreadArgs;
