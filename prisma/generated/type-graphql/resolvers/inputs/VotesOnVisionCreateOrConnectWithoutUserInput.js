"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateWithoutUserInput_1 = require("../inputs/VotesOnVisionCreateWithoutUserInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionCreateOrConnectWithoutUserInput = class VotesOnVisionCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateWithoutUserInput_1.VotesOnVisionCreateWithoutUserInput)
], VotesOnVisionCreateOrConnectWithoutUserInput.prototype, "create", void 0);
VotesOnVisionCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionCreateOrConnectWithoutUserInput);
exports.VotesOnVisionCreateOrConnectWithoutUserInput = VotesOnVisionCreateOrConnectWithoutUserInput;
