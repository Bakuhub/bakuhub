"use strict";
var VotesOnThreadScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VotesOnThreadScalarWhereInput = VotesOnThreadScalarWhereInput_1 = class VotesOnThreadScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnThreadScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VotesOnThreadScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], VotesOnThreadScalarWhereInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnThreadScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VotesOnThreadScalarWhereInput.prototype, "updatedAt", void 0);
VotesOnThreadScalarWhereInput = VotesOnThreadScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadScalarWhereInput", {
        isAbstract: true
    })
], VotesOnThreadScalarWhereInput);
exports.VotesOnThreadScalarWhereInput = VotesOnThreadScalarWhereInput;
