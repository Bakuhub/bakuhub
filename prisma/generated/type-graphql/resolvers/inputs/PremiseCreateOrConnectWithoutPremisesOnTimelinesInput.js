"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateWithoutPremisesOnTimelinesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutPremisesOnTimelinesInput = class PremiseCreateOrConnectWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutPremisesOnTimelinesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput)
], PremiseCreateOrConnectWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutPremisesOnTimelinesInput);
exports.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput = PremiseCreateOrConnectWithoutPremisesOnTimelinesInput;
