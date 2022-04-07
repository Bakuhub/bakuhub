"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineWhereInput_1 = require("../inputs/ThreadsOnTimelineWhereInput");
let ThreadsOnTimelineListRelationFilter = class ThreadsOnTimelineListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], ThreadsOnTimelineListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], ThreadsOnTimelineListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereInput_1.ThreadsOnTimelineWhereInput)
], ThreadsOnTimelineListRelationFilter.prototype, "none", void 0);
ThreadsOnTimelineListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineListRelationFilter", {
        isAbstract: true
    })
], ThreadsOnTimelineListRelationFilter);
exports.ThreadsOnTimelineListRelationFilter = ThreadsOnTimelineListRelationFilter;
