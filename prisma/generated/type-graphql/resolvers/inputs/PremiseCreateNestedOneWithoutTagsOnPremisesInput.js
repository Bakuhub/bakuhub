"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutTagsOnPremisesInput");
const PremiseCreateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutTagsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutTagsOnPremisesInput = class PremiseCreateNestedOneWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput)
], PremiseCreateNestedOneWithoutTagsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutTagsOnPremisesInput_1.PremiseCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutTagsOnPremisesInput_1.PremiseCreateOrConnectWithoutTagsOnPremisesInput)
], PremiseCreateNestedOneWithoutTagsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutTagsOnPremisesInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutTagsOnPremisesInput);
exports.PremiseCreateNestedOneWithoutTagsOnPremisesInput = PremiseCreateNestedOneWithoutTagsOnPremisesInput;
