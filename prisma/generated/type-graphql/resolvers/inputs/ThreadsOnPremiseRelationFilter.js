"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseWhereInput_1 = require("../inputs/ThreadsOnPremiseWhereInput");
let ThreadsOnPremiseRelationFilter = class ThreadsOnPremiseRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], ThreadsOnPremiseRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], ThreadsOnPremiseRelationFilter.prototype, "isNot", void 0);
ThreadsOnPremiseRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseRelationFilter", {
        isAbstract: true
    })
], ThreadsOnPremiseRelationFilter);
exports.ThreadsOnPremiseRelationFilter = ThreadsOnPremiseRelationFilter;
