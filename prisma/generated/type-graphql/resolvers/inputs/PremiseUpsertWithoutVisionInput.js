"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseUpsertWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutVisionInput_1 = require("../inputs/PremiseCreateWithoutVisionInput");
const PremiseUpdateWithoutVisionInput_1 = require("../inputs/PremiseUpdateWithoutVisionInput");
let PremiseUpsertWithoutVisionInput = class PremiseUpsertWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseUpdateWithoutVisionInput_1.PremiseUpdateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseUpdateWithoutVisionInput_1.PremiseUpdateWithoutVisionInput)
], PremiseUpsertWithoutVisionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput)
], PremiseUpsertWithoutVisionInput.prototype, "create", void 0);
PremiseUpsertWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseUpsertWithoutVisionInput", {
        isAbstract: true
    })
], PremiseUpsertWithoutVisionInput);
exports.PremiseUpsertWithoutVisionInput = PremiseUpsertWithoutVisionInput;
