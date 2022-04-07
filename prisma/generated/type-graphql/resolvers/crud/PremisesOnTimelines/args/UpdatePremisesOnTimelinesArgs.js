"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesUpdateInput_1 = require("../../../inputs/PremisesOnTimelinesUpdateInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../../../inputs/PremisesOnTimelinesWhereUniqueInput");
let UpdatePremisesOnTimelinesArgs = class UpdatePremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateInput_1.PremisesOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateInput_1.PremisesOnTimelinesUpdateInput)
], UpdatePremisesOnTimelinesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], UpdatePremisesOnTimelinesArgs.prototype, "where", void 0);
UpdatePremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdatePremisesOnTimelinesArgs);
exports.UpdatePremisesOnTimelinesArgs = UpdatePremisesOnTimelinesArgs;
