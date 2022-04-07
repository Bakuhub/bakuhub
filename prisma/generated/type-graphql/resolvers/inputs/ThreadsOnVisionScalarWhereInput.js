"use strict";
var ThreadsOnVisionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ThreadsOnVisionScalarWhereInput = ThreadsOnVisionScalarWhereInput_1 = class ThreadsOnVisionScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnVisionScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnVisionScalarWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnVisionScalarWhereInput.prototype, "assignedAt", void 0);
ThreadsOnVisionScalarWhereInput = ThreadsOnVisionScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionScalarWhereInput", {
        isAbstract: true
    })
], ThreadsOnVisionScalarWhereInput);
exports.ThreadsOnVisionScalarWhereInput = ThreadsOnVisionScalarWhereInput;
