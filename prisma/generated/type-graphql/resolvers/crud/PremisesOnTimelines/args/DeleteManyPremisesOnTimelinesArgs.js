"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesWhereInput_1 = require("../../../inputs/PremisesOnTimelinesWhereInput");
let DeleteManyPremisesOnTimelinesArgs = class DeleteManyPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], DeleteManyPremisesOnTimelinesArgs.prototype, "where", void 0);
DeleteManyPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPremisesOnTimelinesArgs);
exports.DeleteManyPremisesOnTimelinesArgs = DeleteManyPremisesOnTimelinesArgs;
