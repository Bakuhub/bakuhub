"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseWhereInput_1 = require("../inputs/ThreadsOnPremiseWhereInput");
let ThreadsOnPremiseListRelationFilter = class ThreadsOnPremiseListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], ThreadsOnPremiseListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], ThreadsOnPremiseListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereInput_1.ThreadsOnPremiseWhereInput)
], ThreadsOnPremiseListRelationFilter.prototype, "none", void 0);
ThreadsOnPremiseListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseListRelationFilter", {
        isAbstract: true
    })
], ThreadsOnPremiseListRelationFilter);
exports.ThreadsOnPremiseListRelationFilter = ThreadsOnPremiseListRelationFilter;
