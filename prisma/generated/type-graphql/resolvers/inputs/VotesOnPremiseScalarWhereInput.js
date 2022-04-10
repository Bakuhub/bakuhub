"use strict";
var VotesOnPremiseScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VotesOnPremiseScalarWhereInput = VotesOnPremiseScalarWhereInput_1 = class VotesOnPremiseScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnPremiseScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnPremiseScalarWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnPremiseScalarWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnPremiseScalarWhereInput.prototype, "createdAt", void 0);
VotesOnPremiseScalarWhereInput = VotesOnPremiseScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseScalarWhereInput", {
        isAbstract: true
    })
], VotesOnPremiseScalarWhereInput);
exports.VotesOnPremiseScalarWhereInput = VotesOnPremiseScalarWhereInput;
