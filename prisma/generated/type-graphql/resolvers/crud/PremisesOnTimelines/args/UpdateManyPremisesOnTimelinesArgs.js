"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateManyMutationInput_1 = require("../../../inputs/PremisesOnTimelinesUpdateManyMutationInput");
const PremisesOnTimelinesWhereInput_1 = require("../../../inputs/PremisesOnTimelinesWhereInput");
let UpdateManyPremisesOnTimelinesArgs = class UpdateManyPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateManyMutationInput_1.PremisesOnTimelinesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateManyMutationInput_1.PremisesOnTimelinesUpdateManyMutationInput)
], UpdateManyPremisesOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereInput_1.PremisesOnTimelinesWhereInput)
], UpdateManyPremisesOnTimelinesArgs.prototype, "where", void 0);
UpdateManyPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPremisesOnTimelinesArgs);
exports.UpdateManyPremisesOnTimelinesArgs = UpdateManyPremisesOnTimelinesArgs;
