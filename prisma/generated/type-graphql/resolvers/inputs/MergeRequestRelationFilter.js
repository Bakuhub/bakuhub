"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeRequestRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MergeRequestWhereInput_1 = require("../inputs/MergeRequestWhereInput");
let MergeRequestRelationFilter = class MergeRequestRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], MergeRequestRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MergeRequestWhereInput_1.MergeRequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MergeRequestWhereInput_1.MergeRequestWhereInput)
], MergeRequestRelationFilter.prototype, "isNot", void 0);
MergeRequestRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("MergeRequestRelationFilter", {
        isAbstract: true
    })
], MergeRequestRelationFilter);
exports.MergeRequestRelationFilter = MergeRequestRelationFilter;
