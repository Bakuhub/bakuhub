"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadWhereInput_1 = require("../inputs/ThreadWhereInput");
let ThreadListRelationFilter = class ThreadListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], ThreadListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], ThreadListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereInput_1.ThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadWhereInput_1.ThreadWhereInput)
], ThreadListRelationFilter.prototype, "none", void 0);
ThreadListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadListRelationFilter", {
        isAbstract: true
    })
], ThreadListRelationFilter);
exports.ThreadListRelationFilter = ThreadListRelationFilter;
