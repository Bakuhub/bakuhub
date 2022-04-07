"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesWhereInput_1 = require("../inputs/PremisesOnTimelinesWhereInput");
let PremisesOnTimelinesListRelationFilter = class PremisesOnTimelinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], PremisesOnTimelinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], PremisesOnTimelinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], PremisesOnTimelinesListRelationFilter.prototype, "none", void 0);
PremisesOnTimelinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesListRelationFilter", {
        isAbstract: true
    })
], PremisesOnTimelinesListRelationFilter);
exports.PremisesOnTimelinesListRelationFilter = PremisesOnTimelinesListRelationFilter;
