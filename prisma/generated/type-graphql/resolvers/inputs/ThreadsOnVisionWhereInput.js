"use strict";
var ThreadsOnVisionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const ThreadRelationFilter_1 = require("../inputs/ThreadRelationFilter");
const VisionRelationFilter_1 = require("../inputs/VisionRelationFilter");
let ThreadsOnVisionWhereInput = ThreadsOnVisionWhereInput_1 = class ThreadsOnVisionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadRelationFilter_1.ThreadRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadRelationFilter_1.ThreadRelationFilter)
], ThreadsOnVisionWhereInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnVisionWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionRelationFilter_1.VisionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VisionRelationFilter_1.VisionRelationFilter)
], ThreadsOnVisionWhereInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnVisionWhereInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnVisionWhereInput.prototype, "assignedAt", void 0);
ThreadsOnVisionWhereInput = ThreadsOnVisionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionWhereInput", {
        isAbstract: true
    })
], ThreadsOnVisionWhereInput);
exports.ThreadsOnVisionWhereInput = ThreadsOnVisionWhereInput;
