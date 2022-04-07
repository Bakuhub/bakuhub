"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutPremiseInput");
const PremisesOnTimelinesUpdateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesUpdateWithoutPremiseInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput = class PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateWithoutPremiseInput_1.PremisesOnTimelinesUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateWithoutPremiseInput_1.PremisesOnTimelinesUpdateWithoutPremiseInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput)
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput);
exports.PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput = PremisesOnTimelinesUpsertWithWhereUniqueWithoutPremiseInput;
