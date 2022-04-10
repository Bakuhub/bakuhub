"use strict";
var VotesOnPremiseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let VotesOnPremiseWhereInput = VotesOnPremiseWhereInput_1 = class VotesOnPremiseWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], VotesOnPremiseWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnPremiseWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], VotesOnPremiseWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnPremiseWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnPremiseWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnPremiseWhereInput.prototype, "createdAt", void 0);
VotesOnPremiseWhereInput = VotesOnPremiseWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseWhereInput", {
        isAbstract: true
    })
], VotesOnPremiseWhereInput);
exports.VotesOnPremiseWhereInput = VotesOnPremiseWhereInput;
