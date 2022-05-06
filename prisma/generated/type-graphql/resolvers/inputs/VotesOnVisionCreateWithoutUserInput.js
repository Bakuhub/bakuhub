"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VisionCreateNestedOneWithoutVotesOnVisionInput_1 = require("../inputs/VisionCreateNestedOneWithoutVotesOnVisionInput");
let VotesOnVisionCreateWithoutUserInput = class VotesOnVisionCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutVotesOnVisionInput_1.VisionCreateNestedOneWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutVotesOnVisionInput_1.VisionCreateNestedOneWithoutVotesOnVisionInput)
], VotesOnVisionCreateWithoutUserInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionCreateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateWithoutUserInput.prototype, "updatedAt", void 0);
VotesOnVisionCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnVisionCreateWithoutUserInput);
exports.VotesOnVisionCreateWithoutUserInput = VotesOnVisionCreateWithoutUserInput;
