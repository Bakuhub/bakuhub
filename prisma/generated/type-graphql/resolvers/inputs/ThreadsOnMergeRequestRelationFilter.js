"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestWhereInput_1 = require("../inputs/ThreadsOnMergeRequestWhereInput");
let ThreadsOnMergeRequestRelationFilter = class ThreadsOnMergeRequestRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], ThreadsOnMergeRequestRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], ThreadsOnMergeRequestRelationFilter.prototype, "isNot", void 0);
ThreadsOnMergeRequestRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestRelationFilter", {
        isAbstract: true
    })
], ThreadsOnMergeRequestRelationFilter);
exports.ThreadsOnMergeRequestRelationFilter = ThreadsOnMergeRequestRelationFilter;
