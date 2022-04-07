"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutTagsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutTagsOnPremisesInput = class PremiseCreateOrConnectWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutTagsOnPremisesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput)
], PremiseCreateOrConnectWithoutTagsOnPremisesInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutTagsOnPremisesInput);
exports.PremiseCreateOrConnectWithoutTagsOnPremisesInput = PremiseCreateOrConnectWithoutTagsOnPremisesInput;
