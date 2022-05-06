"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithoutPremiseInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput = class PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutPremiseInput_1.PremisesOnTimelinesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateWithoutPremiseInput_1.PremisesOnTimelinesUpdateWithoutPremiseInput)
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput);
exports.PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput = PremisesOnTimelinesUpdateWithWhereUniqueWithoutPremiseInput;
