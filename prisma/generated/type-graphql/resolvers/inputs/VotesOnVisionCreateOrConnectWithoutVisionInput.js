"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateOrConnectWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnVisionCreateWithoutVisionInput_1 = require("../inputs/VotesOnVisionCreateWithoutVisionInput");
const VotesOnVisionWhereUniqueInput_1 = require("../inputs/VotesOnVisionWhereUniqueInput");
let VotesOnVisionCreateOrConnectWithoutVisionInput = class VotesOnVisionCreateOrConnectWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionWhereUniqueInput_1.VotesOnVisionWhereUniqueInput)
], VotesOnVisionCreateOrConnectWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnVisionCreateWithoutVisionInput_1.VotesOnVisionCreateWithoutVisionInput)
], VotesOnVisionCreateOrConnectWithoutVisionInput.prototype, "create", void 0);
VotesOnVisionCreateOrConnectWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateOrConnectWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionCreateOrConnectWithoutVisionInput);
exports.VotesOnVisionCreateOrConnectWithoutVisionInput = VotesOnVisionCreateOrConnectWithoutVisionInput;
