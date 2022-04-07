"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyPremiseInputEnvelope_1 = require("../inputs/PremisesOnTimelinesCreateManyPremiseInputEnvelope");
const PremisesOnTimelinesCreateOrConnectWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateOrConnectWithoutPremiseInput");
const PremisesOnTimelinesCreateWithoutPremiseInput_1 = require("../inputs/PremisesOnTimelinesCreateWithoutPremiseInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../inputs/PremisesOnTimelinesWhereUniqueInput");
let PremisesOnTimelinesCreateNestedManyWithoutPremiseInput = class PremisesOnTimelinesCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateWithoutPremiseInput_1.PremisesOnTimelinesCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateOrConnectWithoutPremiseInput_1.PremisesOnTimelinesCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateManyPremiseInputEnvelope_1.PremisesOnTimelinesCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateManyPremiseInputEnvelope_1.PremisesOnTimelinesCreateManyPremiseInputEnvelope)
], PremisesOnTimelinesCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PremisesOnTimelinesCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
PremisesOnTimelinesCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremisesOnTimelinesCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], PremisesOnTimelinesCreateNestedManyWithoutPremiseInput);
exports.PremisesOnTimelinesCreateNestedManyWithoutPremiseInput = PremisesOnTimelinesCreateNestedManyWithoutPremiseInput;
