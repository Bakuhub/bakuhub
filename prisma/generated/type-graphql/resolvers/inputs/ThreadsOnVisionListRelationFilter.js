"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionWhereInput_1 = require("../inputs/ThreadsOnVisionWhereInput");
let ThreadsOnVisionListRelationFilter = class ThreadsOnVisionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], ThreadsOnVisionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], ThreadsOnVisionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], ThreadsOnVisionListRelationFilter.prototype, "none", void 0);
ThreadsOnVisionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionListRelationFilter", {
        isAbstract: true
    })
], ThreadsOnVisionListRelationFilter);
exports.ThreadsOnVisionListRelationFilter = ThreadsOnVisionListRelationFilter;
