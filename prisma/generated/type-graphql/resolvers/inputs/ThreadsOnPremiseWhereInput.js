"use strict";
var ThreadsOnPremiseWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PremiseRelationFilter_1 = require("../inputs/PremiseRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
let ThreadsOnPremiseWhereInput = ThreadsOnPremiseWhereInput_1 = class ThreadsOnPremiseWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], ThreadsOnPremiseWhereInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnPremiseWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseRelationFilter_1.PremiseRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseRelationFilter_1.PremiseRelationFilter)
], ThreadsOnPremiseWhereInput.prototype, "premise", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnPremiseWhereInput.prototype, "premiseId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnPremiseWhereInput.prototype, "assignedAt", void 0);
ThreadsOnPremiseWhereInput = ThreadsOnPremiseWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseWhereInput", {
        isAbstract: true
    })
], ThreadsOnPremiseWhereInput);
exports.ThreadsOnPremiseWhereInput = ThreadsOnPremiseWhereInput;
