"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateOrConnectWithoutVotesOnPremiseInput");
const PremiseCreateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutVotesOnPremiseInput");
const PremiseUpdateWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseUpdateWithoutVotesOnPremiseInput");
const PremiseUpsertWithoutVotesOnPremiseInput_1 = require("../inputs/PremiseUpsertWithoutVotesOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutVotesOnPremiseInput = class PremiseUpdateOneRequiredWithoutVotesOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVotesOnPremiseInput_1.PremiseCreateWithoutVotesOnPremiseInput)
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVotesOnPremiseInput_1.PremiseCreateOrConnectWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutVotesOnPremiseInput_1.PremiseCreateOrConnectWithoutVotesOnPremiseInput)
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutVotesOnPremiseInput_1.PremiseUpsertWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutVotesOnPremiseInput_1.PremiseUpsertWithoutVotesOnPremiseInput)
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutVotesOnPremiseInput_1.PremiseUpdateWithoutVotesOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutVotesOnPremiseInput_1.PremiseUpdateWithoutVotesOnPremiseInput)
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutVotesOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutVotesOnPremiseInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutVotesOnPremiseInput);
exports.PremiseUpdateOneRequiredWithoutVotesOnPremiseInput = PremiseUpdateOneRequiredWithoutVotesOnPremiseInput;
