"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutTagsOnPremisesInput");
const PremiseCreateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutTagsOnPremisesInput");
const PremiseUpdateWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseUpdateWithoutTagsOnPremisesInput");
const PremiseUpsertWithoutTagsOnPremisesInput_1 = require("../inputs/PremiseUpsertWithoutTagsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutTagsOnPremisesInput = class PremiseUpdateOneRequiredWithoutTagsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutTagsOnPremisesInput_1.PremiseCreateWithoutTagsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutTagsOnPremisesInput_1.PremiseCreateOrConnectWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutTagsOnPremisesInput_1.PremiseCreateOrConnectWithoutTagsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutTagsOnPremisesInput_1.PremiseUpsertWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutTagsOnPremisesInput_1.PremiseUpsertWithoutTagsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutTagsOnPremisesInput_1.PremiseUpdateWithoutTagsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutTagsOnPremisesInput_1.PremiseUpdateWithoutTagsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutTagsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutTagsOnPremisesInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutTagsOnPremisesInput);
exports.PremiseUpdateOneRequiredWithoutTagsOnPremisesInput = PremiseUpdateOneRequiredWithoutTagsOnPremisesInput;
