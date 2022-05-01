"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadCreateManyInput = class VotesOnThreadCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadCreateManyInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadCreateManyInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadCreateManyInput.prototype, "updatedAt", void 0);
VotesOnThreadCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateManyInput", {
        isAbstract: true
    })
], VotesOnThreadCreateManyInput);
exports.VotesOnThreadCreateManyInput = VotesOnThreadCreateManyInput;
