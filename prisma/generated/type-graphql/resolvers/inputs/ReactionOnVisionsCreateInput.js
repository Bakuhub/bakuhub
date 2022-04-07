"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutReactionOnVisionsInput_1 = require("../inputs/UserCreateNestedOneWithoutReactionOnVisionsInput");
const VisionCreateNestedOneWithoutReactionOnVisionsInput_1 = require("../inputs/VisionCreateNestedOneWithoutReactionOnVisionsInput");
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsCreateInput = class ReactionOnVisionsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReactionOnVisionsInput_1.UserCreateNestedOneWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReactionOnVisionsInput_1.UserCreateNestedOneWithoutReactionOnVisionsInput)
], ReactionOnVisionsCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VisionCreateNestedOneWithoutReactionOnVisionsInput_1.VisionCreateNestedOneWithoutReactionOnVisionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VisionCreateNestedOneWithoutReactionOnVisionsInput_1.VisionCreateNestedOneWithoutReactionOnVisionsInput)
], ReactionOnVisionsCreateInput.prototype, "vision", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsCreateInput.prototype, "createdAt", void 0);
ReactionOnVisionsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateInput);
exports.ReactionOnVisionsCreateInput = ReactionOnVisionsCreateInput;
