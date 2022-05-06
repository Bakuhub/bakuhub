"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateManyPremiseInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateManyPremiseInput");
let PremisesOnTimelinesCreateManyPremiseInputEnvelope = class PremisesOnTimelinesCreateManyPremiseInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateManyPremiseInput_1.PremisesOnTimelinesCreateManyPremiseInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateManyPremiseInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PremisesOnTimelinesCreateManyPremiseInputEnvelope.prototype, "skipDuplicates", void 0);
PremisesOnTimelinesCreateManyPremiseInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateManyPremiseInputEnvelope", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateManyPremiseInputEnvelope);
exports.PremisesOnTimelinesCreateManyPremiseInputEnvelope = PremisesOnTimelinesCreateManyPremiseInputEnvelope;
