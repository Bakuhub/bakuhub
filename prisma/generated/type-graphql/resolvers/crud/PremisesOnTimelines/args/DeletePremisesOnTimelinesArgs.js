"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesWhereUniqueInput_1 = require("../../../inputs/PremisesOnTimelinesWhereUniqueInput");
let DeletePremisesOnTimelinesArgs = class DeletePremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], DeletePremisesOnTimelinesArgs.prototype, "where", void 0);
DeletePremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePremisesOnTimelinesArgs);
exports.DeletePremisesOnTimelinesArgs = DeletePremisesOnTimelinesArgs;
