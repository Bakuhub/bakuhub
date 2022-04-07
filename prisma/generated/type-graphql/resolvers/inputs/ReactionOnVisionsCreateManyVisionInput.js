"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateManyVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsCreateManyVisionInput = class ReactionOnVisionsCreateManyVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateManyVisionInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsCreateManyVisionInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsCreateManyVisionInput.prototype, "createdAt", void 0);
ReactionOnVisionsCreateManyVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateManyVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateManyVisionInput);
exports.ReactionOnVisionsCreateManyVisionInput = ReactionOnVisionsCreateManyVisionInput;
