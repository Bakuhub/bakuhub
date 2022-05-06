"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePremiseArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateInput_1 = require("../../../inputs/PremiseCreateInput");
let CreatePremiseArgs = class CreatePremiseArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateInput_1.PremiseCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateInput_1.PremiseCreateInput)
], CreatePremiseArgs.prototype, "data", void 0);
CreatePremiseArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePremiseArgs);
exports.CreatePremiseArgs = CreatePremiseArgs;
