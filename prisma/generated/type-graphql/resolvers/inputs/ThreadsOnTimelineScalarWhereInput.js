"use strict";
var ThreadsOnTimelineScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ThreadsOnTimelineScalarWhereInput = ThreadsOnTimelineScalarWhereInput_1 = class ThreadsOnTimelineScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnTimelineScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnTimelineScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnTimelineScalarWhereInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ThreadsOnTimelineScalarWhereInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ThreadsOnTimelineScalarWhereInput.prototype, "assignedAt", void 0);
ThreadsOnTimelineScalarWhereInput = ThreadsOnTimelineScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineScalarWhereInput", {
        isAbstract: true
    })
], ThreadsOnTimelineScalarWhereInput);
exports.ThreadsOnTimelineScalarWhereInput = ThreadsOnTimelineScalarWhereInput;
