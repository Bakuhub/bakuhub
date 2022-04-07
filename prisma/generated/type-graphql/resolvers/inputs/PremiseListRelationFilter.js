"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseWhereInput_1 = require("../inputs/PremiseWhereInput");
let PremiseListRelationFilter = class PremiseListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], PremiseListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], PremiseListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereInput_1.PremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereInput_1.PremiseWhereInput)
], PremiseListRelationFilter.prototype, "none", void 0);
PremiseListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseListRelationFilter", {
        isAbstract: true
    })
], PremiseListRelationFilter);
exports.PremiseListRelationFilter = PremiseListRelationFilter;
