"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineWhereInput_1 = require("../inputs/ThreadsOnTimelineWhereInput");
let ThreadsOnTimelineRelationFilter = class ThreadsOnTimelineRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], ThreadsOnTimelineRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], ThreadsOnTimelineRelationFilter.prototype, "isNot", void 0);
ThreadsOnTimelineRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineRelationFilter", {
        isAbstract: true
    })
], ThreadsOnTimelineRelationFilter);
exports.ThreadsOnTimelineRelationFilter = ThreadsOnTimelineRelationFilter;
