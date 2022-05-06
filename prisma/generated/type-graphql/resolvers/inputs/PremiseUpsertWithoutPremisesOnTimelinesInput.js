"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateWithoutPremisesOnTimelinesInput");
const PremiseUpdateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseUpdateWithoutPremisesOnTimelinesInput");
let PremiseUpsertWithoutPremisesOnTimelinesInput = class PremiseUpsertWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutPremisesOnTimelinesInput_1.PremiseUpdateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutPremisesOnTimelinesInput_1.PremiseUpdateWithoutPremisesOnTimelinesInput)
], PremiseUpsertWithoutPremisesOnTimelinesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput)
], PremiseUpsertWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
PremiseUpsertWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutPremisesOnTimelinesInput);
exports.PremiseUpsertWithoutPremisesOnTimelinesInput = PremiseUpsertWithoutPremisesOnTimelinesInput;
