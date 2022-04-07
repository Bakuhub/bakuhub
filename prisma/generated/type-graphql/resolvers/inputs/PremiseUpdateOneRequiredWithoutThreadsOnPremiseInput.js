"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateOrConnectWithoutThreadsOnPremiseInput");
const PremiseCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutThreadsOnPremiseInput");
const PremiseUpdateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseUpdateWithoutThreadsOnPremiseInput");
const PremiseUpsertWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseUpsertWithoutThreadsOnPremiseInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput = class PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput)
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1.PremiseCreateOrConnectWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutThreadsOnPremiseInput_1.PremiseCreateOrConnectWithoutThreadsOnPremiseInput)
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpsertWithoutThreadsOnPremiseInput_1.PremiseUpsertWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpsertWithoutThreadsOnPremiseInput_1.PremiseUpsertWithoutThreadsOnPremiseInput)
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadsOnPremiseInput_1.PremiseUpdateWithoutThreadsOnPremiseInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutThreadsOnPremiseInput_1.PremiseUpdateWithoutThreadsOnPremiseInput)
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput.prototype, "update", void 0);
PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput);
exports.PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput = PremiseUpdateOneRequiredWithoutThreadsOnPremiseInput;
