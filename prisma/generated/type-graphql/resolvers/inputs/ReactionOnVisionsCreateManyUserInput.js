"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsCreateManyUserInput = class ReactionOnVisionsCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateManyUserInput.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateManyUserInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsCreateManyUserInput.prototype, "createdAt", void 0);
ReactionOnVisionsCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateManyUserInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateManyUserInput);
exports.ReactionOnVisionsCreateManyUserInput = ReactionOnVisionsCreateManyUserInput;
