"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineWhereInput_1 = require("../inputs/TimelineWhereInput");
let TimelineRelationFilter = class TimelineRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], TimelineRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], TimelineRelationFilter.prototype, "isNot", void 0);
TimelineRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineRelationFilter", {
        isAbstract: true
    })
], TimelineRelationFilter);
exports.TimelineRelationFilter = TimelineRelationFilter;
