"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionWhereInput_1 = require("../inputs/ThreadsOnVisionWhereInput");
let ThreadsOnVisionRelationFilter = class ThreadsOnVisionRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], ThreadsOnVisionRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionWhereInput_1.ThreadsOnVisionWhereInput)
], ThreadsOnVisionRelationFilter.prototype, "isNot", void 0);
ThreadsOnVisionRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionRelationFilter", {
        isAbstract: true
    })
], ThreadsOnVisionRelationFilter);
exports.ThreadsOnVisionRelationFilter = ThreadsOnVisionRelationFilter;
