"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateManyUserInput = class ReactionOnThreadsCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyUserInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateManyUserInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateManyUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateManyUserInput);
exports.ReactionOnThreadsCreateManyUserInput = ReactionOnThreadsCreateManyUserInput;
