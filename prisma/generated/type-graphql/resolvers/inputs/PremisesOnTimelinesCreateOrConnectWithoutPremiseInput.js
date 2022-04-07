"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutPremiseInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesCreateOrConnectWithoutPremiseInput = class PremisesOnTimelinesCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], PremisesOnTimelinesCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput)
], PremisesOnTimelinesCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
PremisesOnTimelinesCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateOrConnectWithoutPremiseInput);
exports.PremisesOnTimelinesCreateOrConnectWithoutPremiseInput = PremisesOnTimelinesCreateOrConnectWithoutPremiseInput;
