"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutThreadsOnPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseCreateWithoutThreadsOnPremiseInput");
const PremiseUpdateWithoutThreadsOnPremiseInput_1 = require("../inputs/PremiseUpdateWithoutThreadsOnPremiseInput");
let PremiseUpsertWithoutThreadsOnPremiseInput = class PremiseUpsertWithoutThreadsOnPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutThreadsOnPremiseInput_1.PremiseUpdateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutThreadsOnPremiseInput_1.PremiseUpdateWithoutThreadsOnPremiseInput)
], PremiseUpsertWithoutThreadsOnPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutThreadsOnPremiseInput_1.PremiseCreateWithoutThreadsOnPremiseInput)
], PremiseUpsertWithoutThreadsOnPremiseInput.prototype, "create", void 0);
PremiseUpsertWithoutThreadsOnPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutThreadsOnPremiseInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutThreadsOnPremiseInput);
exports.PremiseUpsertWithoutThreadsOnPremiseInput = PremiseUpsertWithoutThreadsOnPremiseInput;
