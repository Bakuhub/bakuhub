"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateManyInput_1 = require("../../../inputs/PremisesOnTimelinesCreateManyInput");
let CreateManyPremisesOnTimelinesArgs = class CreateManyPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PremisesOnTimelinesCreateManyInput_1.PremisesOnTimelinesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPremisesOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyPremisesOnTimelinesArgs.prototype, "skipDuplicates", void 0);
CreateManyPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPremisesOnTimelinesArgs);
exports.CreateManyPremisesOnTimelinesArgs = CreateManyPremisesOnTimelinesArgs;
