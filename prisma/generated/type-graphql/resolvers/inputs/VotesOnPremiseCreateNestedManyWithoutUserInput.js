"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnPremiseCreateManyUserInputEnvelope");
const VotesOnPremiseCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateOrConnectWithoutUserInput");
const VotesOnPremiseCreateWithoutUserInput_1 = require("../inputs/VotesOnPremiseCreateWithoutUserInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseCreateNestedManyWithoutUserInput = class VotesOnPremiseCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutUserInput_1.VotesOnPremiseCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutUserInput_1.VotesOnPremiseCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateManyUserInputEnvelope_1.VotesOnPremiseCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateManyUserInputEnvelope_1.VotesOnPremiseCreateManyUserInputEnvelope)
], VotesOnPremiseCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
VotesOnPremiseCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateNestedManyWithoutUserInput);
exports.VotesOnPremiseCreateNestedManyWithoutUserInput = VotesOnPremiseCreateNestedManyWithoutUserInput;
