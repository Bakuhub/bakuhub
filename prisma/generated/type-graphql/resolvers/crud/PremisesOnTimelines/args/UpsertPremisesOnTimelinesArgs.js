"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPremisesOnTimelinesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremisesOnTimelinesCreateInput_1 = require("../../../inputs/PremisesOnTimelinesCreateInput");
const PremisesOnTimelinesUpdateInput_1 = require("../../../inputs/PremisesOnTimelinesUpdateInput");
const PremisesOnTimelinesWhereUniqueInput_1 = require("../../../inputs/PremisesOnTimelinesWhereUniqueInput");
let UpsertPremisesOnTimelinesArgs = class UpsertPremisesOnTimelinesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesWhereUniqueInput_1.PremisesOnTimelinesWhereUniqueInput)
], UpsertPremisesOnTimelinesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesCreateInput_1.PremisesOnTimelinesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesCreateInput_1.PremisesOnTimelinesCreateInput)
], UpsertPremisesOnTimelinesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremisesOnTimelinesUpdateInput_1.PremisesOnTimelinesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremisesOnTimelinesUpdateInput_1.PremisesOnTimelinesUpdateInput)
], UpsertPremisesOnTimelinesArgs.prototype, "update", void 0);
UpsertPremisesOnTimelinesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPremisesOnTimelinesArgs);
exports.UpsertPremisesOnTimelinesArgs = UpsertPremisesOnTimelinesArgs;
