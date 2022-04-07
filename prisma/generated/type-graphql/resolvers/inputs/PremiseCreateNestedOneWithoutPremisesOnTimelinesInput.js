"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput");
const PremiseCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateWithoutPremisesOnTimelinesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutPremisesOnTimelinesInput = class PremiseCreateNestedOneWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput)
], PremiseCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput)
], PremiseCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutPremisesOnTimelinesInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutPremisesOnTimelinesInput);
exports.PremiseCreateNestedOneWithoutPremisesOnTimelinesInput = PremiseCreateNestedOneWithoutPremisesOnTimelinesInput;
