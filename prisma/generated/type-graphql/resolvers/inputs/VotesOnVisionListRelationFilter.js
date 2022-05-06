"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionWhereInput_1 = require("../inputs/VotesOnVisionWhereInput");
let VotesOnVisionListRelationFilter = class VotesOnVisionListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], VotesOnVisionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], VotesOnVisionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereInput_1.VotesOnVisionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereInput_1.VotesOnVisionWhereInput)
], VotesOnVisionListRelationFilter.prototype, "none", void 0);
VotesOnVisionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionListRelationFilter", {
        isAbstract: true
    })
], VotesOnVisionListRelationFilter);
exports.VotesOnVisionListRelationFilter = VotesOnVisionListRelationFilter;
