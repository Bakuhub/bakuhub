"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateNestedOneWithoutVotesOnThreadInput");
let VotesOnThreadCreateWithoutUserInput = class VotesOnThreadCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutVotesOnThreadInput_1.ThreadCreateNestedOneWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutVotesOnThreadInput_1.ThreadCreateNestedOneWithoutVotesOnThreadInput)
], VotesOnThreadCreateWithoutUserInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateWithoutUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateWithoutUserInput.prototype, "createdAt", void 0);
VotesOnThreadCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadCreateWithoutUserInput);
exports.VotesOnThreadCreateWithoutUserInput = VotesOnThreadCreateWithoutUserInput;
