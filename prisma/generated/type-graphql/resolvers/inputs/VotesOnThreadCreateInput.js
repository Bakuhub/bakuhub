"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateNestedOneWithoutVotesOnThreadInput_1 = require("../inputs/ThreadCreateNestedOneWithoutVotesOnThreadInput");
const UserCreateNestedOneWithoutVotesOnThreadInput_1 = require("../inputs/UserCreateNestedOneWithoutVotesOnThreadInput");
let VotesOnThreadCreateInput = class VotesOnThreadCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVotesOnThreadInput_1.UserCreateNestedOneWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutVotesOnThreadInput_1.UserCreateNestedOneWithoutVotesOnThreadInput)
], VotesOnThreadCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateNestedOneWithoutVotesOnThreadInput_1.ThreadCreateNestedOneWithoutVotesOnThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadCreateNestedOneWithoutVotesOnThreadInput_1.ThreadCreateNestedOneWithoutVotesOnThreadInput)
], VotesOnThreadCreateInput.prototype, "thread", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateInput.prototype, "updatedAt", void 0);
VotesOnThreadCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateInput", {
        isAbstract: true
    })
], VotesOnThreadCreateInput);
exports.VotesOnThreadCreateInput = VotesOnThreadCreateInput;
