"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseWhereInput_1 = require("../inputs/VotesOnPremiseWhereInput");
let VotesOnPremiseListRelationFilter = class VotesOnPremiseListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], VotesOnPremiseListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], VotesOnPremiseListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseWhereInput_1.VotesOnPremiseWhereInput)
], VotesOnPremiseListRelationFilter.prototype, "none", void 0);
VotesOnPremiseListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseListRelationFilter", {
        isAbstract: true
    })
], VotesOnPremiseListRelationFilter);
exports.VotesOnPremiseListRelationFilter = VotesOnPremiseListRelationFilter;
