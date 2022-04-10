"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnThreadInput");
let VotesOnThreadCreateWithoutThreadInput = class VotesOnThreadCreateWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnThreadInput_1.UserCreateNestedOneWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnThreadInput_1.UserCreateNestedOneWithoutVotesOnThreadInput)
], VotesOnThreadCreateWithoutThreadInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateWithoutThreadInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateWithoutThreadInput.prototype, "createdAt", void 0);
VotesOnThreadCreateWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadCreateWithoutThreadInput);
exports.VotesOnThreadCreateWithoutThreadInput = VotesOnThreadCreateWithoutThreadInput;
