"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateManyThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadCreateManyThreadInput = class VotesOnThreadCreateManyThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCreateManyThreadInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateManyThreadInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateManyThreadInput.prototype, "createdAt", void 0);
VotesOnThreadCreateManyThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateManyThreadInput", {
        isAbstract: true
    })
], VotesOnThreadCreateManyThreadInput);
exports.VotesOnThreadCreateManyThreadInput = VotesOnThreadCreateManyThreadInput;
