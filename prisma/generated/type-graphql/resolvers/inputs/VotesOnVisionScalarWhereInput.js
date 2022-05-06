"use strict";
var VotesOnVisionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VotesOnVisionScalarWhereInput = VotesOnVisionScalarWhereInput_1 = class VotesOnVisionScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnVisionScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnVisionScalarWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnVisionScalarWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnVisionScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnVisionScalarWhereInput.prototype, "updatedAt", void 0);
VotesOnVisionScalarWhereInput = VotesOnVisionScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionScalarWhereInput", {
        isAbstract: true
    })
], VotesOnVisionScalarWhereInput);
exports.VotesOnVisionScalarWhereInput = VotesOnVisionScalarWhereInput;
