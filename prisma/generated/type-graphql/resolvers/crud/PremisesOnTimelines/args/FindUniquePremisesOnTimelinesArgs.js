"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesWhereUniqueInput_1 = require("../../../inputs/PremisesOnTimelinesWhereUniqueInput");
let FindUniquePremisesOnTimelinesArgs = class FindUniquePremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], FindUniquePremisesOnTimelinesArgs.prototype, "where", void 0);
FindUniquePremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePremisesOnTimelinesArgs);
exports.FindUniquePremisesOnTimelinesArgs = FindUniquePremisesOnTimelinesArgs;
