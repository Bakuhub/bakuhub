"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutTagsOnPremisesInput");
const PremiseUpdateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseUpdateWithoutTagsOnPremisesInput");
let PremiseUpsertWithoutTagsOnPremisesInput = class PremiseUpsertWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutTagsOnPremisesInput_1.PremiseUpdateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutTagsOnPremisesInput_1.PremiseUpdateWithoutTagsOnPremisesInput)
], PremiseUpsertWithoutTagsOnPremisesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput)
], PremiseUpsertWithoutTagsOnPremisesInput.prototype, "create", void 0);
PremiseUpsertWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutTagsOnPremisesInput);
exports.PremiseUpsertWithoutTagsOnPremisesInput = PremiseUpsertWithoutTagsOnPremisesInput;
