"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineWhereInput_1 = require("../inputs/TimelineWhereInput");
let TimelineListRelationFilter = class TimelineListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], TimelineListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], TimelineListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereInput_1.TimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineWhereInput_1.TimelineWhereInput)
], TimelineListRelationFilter.prototype, "none", void 0);
TimelineListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineListRelationFilter", {
        isAbstract: true
    })
], TimelineListRelationFilter);
exports.TimelineListRelationFilter = TimelineListRelationFilter;
