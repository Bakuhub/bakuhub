"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateInput_1 = require("../../../inputs/PremisesOnTimelinesCreateInput");
let CreatePremisesOnTimelinesArgs = class CreatePremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateInput_1.PremisesOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateInput_1.PremisesOnTimelinesCreateInput)
], CreatePremisesOnTimelinesArgs.prototype, "data", void 0);
CreatePremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePremisesOnTimelinesArgs);
exports.CreatePremisesOnTimelinesArgs = CreatePremisesOnTimelinesArgs;
