"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestWhereInput_1 = require("../inputs/ThreadsOnMergeRequestWhereInput");
let ThreadsOnMergeRequestListRelationFilter = class ThreadsOnMergeRequestListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], ThreadsOnMergeRequestListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], ThreadsOnMergeRequestListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereInput_1.ThreadsOnMergeRequestWhereInput)
], ThreadsOnMergeRequestListRelationFilter.prototype, "none", void 0);
ThreadsOnMergeRequestListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestListRelationFilter", {
        isAbstract: true
    })
], ThreadsOnMergeRequestListRelationFilter);
exports.ThreadsOnMergeRequestListRelationFilter = ThreadsOnMergeRequestListRelationFilter;
