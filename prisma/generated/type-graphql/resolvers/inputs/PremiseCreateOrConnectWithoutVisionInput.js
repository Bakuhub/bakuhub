"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateWithoutVisionInput_1 = require("../inputs/PremiseCreateWithoutVisionInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateOrConnectWithoutVisionInput = class PremiseCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput)
], PremiseCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
PremiseCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], PremiseCreateOrConnectWithoutVisionInput);
exports.PremiseCreateOrConnectWithoutVisionInput = PremiseCreateOrConnectWithoutVisionInput;
