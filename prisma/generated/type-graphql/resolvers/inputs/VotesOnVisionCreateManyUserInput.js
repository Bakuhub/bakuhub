"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnVisionCreateManyUserInput = class VotesOnVisionCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionCreateManyUserInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionCreateManyUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionCreateManyUserInput.prototype, "updatedAt", void 0);
VotesOnVisionCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnVisionCreateManyUserInput", {
        isAbstract: true
    })
], VotesOnVisionCreateManyUserInput);
exports.VotesOnVisionCreateManyUserInput = VotesOnVisionCreateManyUserInput;
