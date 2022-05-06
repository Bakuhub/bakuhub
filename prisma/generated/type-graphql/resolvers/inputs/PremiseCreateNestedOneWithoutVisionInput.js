"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiseCreateNestedOneWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PremiseCreateOrConnectWithoutVisionInput_1 = require("../inputs/PremiseCreateOrConnectWithoutVisionInput");
const PremiseCreateWithoutVisionInput_1 = require("../inputs/PremiseCreateWithoutVisionInput");
const PremiseWhereUniqueInput_1 = require("../inputs/PremiseWhereUniqueInput");
let PremiseCreateNestedOneWithoutVisionInput = class PremiseCreateNestedOneWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateWithoutVisionInput_1.PremiseCreateWithoutVisionInput)
], PremiseCreateNestedOneWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseCreateOrConnectWithoutVisionInput_1.PremiseCreateOrConnectWithoutVisionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseCreateOrConnectWithoutVisionInput_1.PremiseCreateOrConnectWithoutVisionInput)
], PremiseCreateNestedOneWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PremiseWhereUniqueInput_1.PremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PremiseWhereUniqueInput_1.PremiseWhereUniqueInput)
], PremiseCreateNestedOneWithoutVisionInput.prototype, "connect", void 0);
PremiseCreateNestedOneWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PremiseCreateNestedOneWithoutVisionInput", {
        isAbstract: true
    })
], PremiseCreateNestedOneWithoutVisionInput);
exports.PremiseCreateNestedOneWithoutVisionInput = PremiseCreateNestedOneWithoutVisionInput;
