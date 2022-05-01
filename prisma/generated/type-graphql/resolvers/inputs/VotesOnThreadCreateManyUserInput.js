"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadCreateManyUserInput = class VotesOnThreadCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCreateManyUserInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateManyUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateManyUserInput.prototype, "updatedAt", void 0);
VotesOnThreadCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateManyUserInput", {
        isAbstract: true
    })
], VotesOnThreadCreateManyUserInput);
exports.VotesOnThreadCreateManyUserInput = VotesOnThreadCreateManyUserInput;
