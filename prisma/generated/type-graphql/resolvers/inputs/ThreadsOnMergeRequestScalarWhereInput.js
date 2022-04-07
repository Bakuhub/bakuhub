"use strict";
var ThreadsOnMergeRequestScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ThreadsOnMergeRequestScalarWhereInput = ThreadsOnMergeRequestScalarWhereInput_1 = class ThreadsOnMergeRequestScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "mergeRequestId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnMergeRequestScalarWhereInput.prototype, "assignedAt", void 0);
ThreadsOnMergeRequestScalarWhereInput = ThreadsOnMergeRequestScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestScalarWhereInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestScalarWhereInput);
exports.ThreadsOnMergeRequestScalarWhereInput = ThreadsOnMergeRequestScalarWhereInput;
