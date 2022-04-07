"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutPremisesOnTimelinesInput");
const PremiseCreateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseCreateWithoutPremisesOnTimelinesInput");
const PremiseUpdateWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseUpdateWithoutPremisesOnTimelinesInput");
const PremiseUpsertWithoutPremisesOnTimelinesInput_1 = require("../inputs/PremiseUpsertWithoutPremisesOnTimelinesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput = class PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutPremisesOnTimelinesInput_1.PremiseCreateWithoutPremisesOnTimelinesInput)
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutPremisesOnTimelinesInput_1.PremiseCreateOrConnectWithoutPremisesOnTimelinesInput)
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutPremisesOnTimelinesInput_1.PremiseUpsertWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutPremisesOnTimelinesInput_1.PremiseUpsertWithoutPremisesOnTimelinesInput)
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutPremisesOnTimelinesInput_1.PremiseUpdateWithoutPremisesOnTimelinesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutPremisesOnTimelinesInput_1.PremiseUpdateWithoutPremisesOnTimelinesInput)
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput);
exports.PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput = PremiseUpdateOneRequiredWithoutPremisesOnTimelinesInput;
