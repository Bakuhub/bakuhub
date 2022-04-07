"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateManyThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateManyThreadInput = class ReactionOnThreadsCreateManyThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyThreadInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyThreadInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateManyThreadInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateManyThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateManyThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateManyThreadInput);
exports.ReactionOnThreadsCreateManyThreadInput = ReactionOnThreadsCreateManyThreadInput;
