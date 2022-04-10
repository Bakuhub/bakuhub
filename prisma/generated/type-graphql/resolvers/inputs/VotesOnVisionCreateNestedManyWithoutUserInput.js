"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateManyUserInputEnvelope_1 = require("../inputs/VotesOnVisionCreateManyUserInputEnvelope");
const VotesOnVisionCreateOrConnectWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateOrConnectWithoutUserInput");
const VotesOnVisionCreateWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateWithoutUserInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionCreateNestedManyWithoutUserInput = class VotesOnVisionCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionCreateOrConnectWithoutUserInput_1.VotesOnVisionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateManyUserInputEnvelope_1.VotesOnVisionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateManyUserInputEnvelope_1.VotesOnVisionCreateManyUserInputEnvelope)
], VotesOnVisionCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnVisionCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
VotesOnVisionCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionCreateNestedManyWithoutUserInput);
exports.VotesOnVisionCreateNestedManyWithoutUserInput = VotesOnVisionCreateNestedManyWithoutUserInput;
