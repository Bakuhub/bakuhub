"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseWhereInput_1 = require("../inputs/PremiseWhereInput");
let PremiseRelationFilter = class PremiseRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], PremiseRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], PremiseRelationFilter.prototype, "isNot", void 0);
PremiseRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseRelationFilter", {
        isAbstract: true
    })
], PremiseRelationFilter);
exports.PremiseRelationFilter = PremiseRelationFilter;
