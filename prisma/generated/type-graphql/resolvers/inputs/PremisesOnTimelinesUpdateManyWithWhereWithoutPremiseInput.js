"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesScalarWhereInput_1 = require("../inputs/PremisesOnTimelinesScalarWhereInput");
const PremisesOnTimelinesUpdateManyMutationInput_1 = require("../inputs/PremisesOnTimelinesUpdateManyMutationInput");
let PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput = class PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesScalarWhereInput_1.PremisesOnTimelinesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesScalarWhereInput_1.PremisesOnTimelinesScalarWhereInput)
], PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyMutationInput_1.PremisesOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyMutationInput_1.PremisesOnTimelinesUpdateManyMutationInput)
], PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput.prototype, "data", void 0);
PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput);
exports.PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput = PremisesOnTimelinesUpdateManyWithWhereWithoutPremiseInput;
