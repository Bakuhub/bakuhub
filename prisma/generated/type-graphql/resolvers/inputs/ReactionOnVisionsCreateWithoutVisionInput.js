"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnVisionsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsCreateWithoutVisionInput = class ReactionOnVisionsCreateWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnVisionsInput_1.UserCreateNestedOneWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnVisionsInput_1.UserCreateNestedOneWithoutReactionOnVisionsInput)
], ReactionOnVisionsCreateWithoutVisionInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateWithoutVisionInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsCreateWithoutVisionInput.prototype, "createdAt", void 0);
ReactionOnVisionsCreateWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateWithoutVisionInput);
exports.ReactionOnVisionsCreateWithoutVisionInput = ReactionOnVisionsCreateWithoutVisionInput;
