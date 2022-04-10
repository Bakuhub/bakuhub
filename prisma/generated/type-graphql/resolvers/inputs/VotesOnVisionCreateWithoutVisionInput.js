"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVotesOnVisionInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnVisionInput");
let VotesOnVisionCreateWithoutVisionInput = class VotesOnVisionCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnVisionInput_1.UserCreateNestedOneWithoutVotesOnVisionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnVisionInput_1.UserCreateNestedOneWithoutVotesOnVisionInput)
], VotesOnVisionCreateWithoutVisionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionCreateWithoutVisionInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateWithoutVisionInput.prototype, "createdAt", void 0);
VotesOnVisionCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateWithoutVisionInput", {
        isAbstract: true
    })
], VotesOnVisionCreateWithoutVisionInput);
exports.VotesOnVisionCreateWithoutVisionInput = VotesOnVisionCreateWithoutVisionInput;
