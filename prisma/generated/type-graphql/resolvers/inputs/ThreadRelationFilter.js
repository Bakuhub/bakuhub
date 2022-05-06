"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadWhereInput_1 = require("../inputs/ThreadWhereInput");
let ThreadRelationFilter = class ThreadRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], ThreadRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], ThreadRelationFilter.prototype, "isNot", void 0);
ThreadRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadRelationFilter", {
        isAbstract: true
    })
], ThreadRelationFilter);
exports.ThreadRelationFilter = ThreadRelationFilter;
