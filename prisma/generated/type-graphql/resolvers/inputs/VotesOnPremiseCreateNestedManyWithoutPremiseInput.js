"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnPremiseCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnPremiseCreateManyPremiseInputEnvelope_1 = require("../inputs/VotesOnPremiseCreateManyPremiseInputEnvelope");
const VotesOnPremiseCreateOrConnectWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateOrConnectWithoutPremiseInput");
const VotesOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/VotesOnPremiseCreateWithoutPremiseInput");
const VotesOnPremiseWhereUniqueInput_1 = require("../inputs/VotesOnPremiseWhereUniqueInput");
let VotesOnPremiseCreateNestedManyWithoutPremiseInput = class VotesOnPremiseCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateWithoutPremiseInput_1.VotesOnPremiseCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseCreateOrConnectWithoutPremiseInput_1.VotesOnPremiseCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnPremiseCreateManyPremiseInputEnvelope_1.VotesOnPremiseCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnPremiseCreateManyPremiseInputEnvelope_1.VotesOnPremiseCreateManyPremiseInputEnvelope)
], VotesOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnPremiseWhereUniqueInput_1.VotesOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
VotesOnPremiseCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnPremiseCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], VotesOnPremiseCreateNestedManyWithoutPremiseInput);
exports.VotesOnPremiseCreateNestedManyWithoutPremiseInput = VotesOnPremiseCreateNestedManyWithoutPremiseInput;
