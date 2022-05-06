"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput");
const PremiseCreateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseCreateWithoutSubscriptionsOnPremisesInput");
const PremiseUpdateWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseUpdateWithoutSubscriptionsOnPremisesInput");
const PremiseUpsertWithoutSubscriptionsOnPremisesInput_1 = require("../inputs/PremiseUpsertWithoutSubscriptionsOnPremisesInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = class PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutSubscriptionsOnPremisesInput_1.PremiseCreateWithoutSubscriptionsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput_1.PremiseCreateOrConnectWithoutSubscriptionsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutSubscriptionsOnPremisesInput_1.PremiseUpsertWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutSubscriptionsOnPremisesInput_1.PremiseUpsertWithoutSubscriptionsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateWithoutSubscriptionsOnPremisesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutSubscriptionsOnPremisesInput_1.PremiseUpdateWithoutSubscriptionsOnPremisesInput)
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput);
exports.PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput = PremiseUpdateOneRequiredWithoutSubscriptionsOnPremisesInput;
