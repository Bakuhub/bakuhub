"use strict";
var ThreadsOnPremiseScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ThreadsOnPremiseScalarWhereInput = ThreadsOnPremiseScalarWhereInput_1 = class ThreadsOnPremiseScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnPremiseScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnPremiseScalarWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnPremiseScalarWhereInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseScalarWhereInput = ThreadsOnPremiseScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseScalarWhereInput", {
        isAbstract: true
    })
], ThreadsOnPremiseScalarWhereInput);
exports.ThreadsOnPremiseScalarWhereInput = ThreadsOnPremiseScalarWhereInput;
