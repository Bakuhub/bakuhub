"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsCreateManyInput = class ReactionOnThreadsCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsCreateManyInput.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsCreateManyInput.prototype, "createdAt", void 0);
ReactionOnThreadsCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsCreateManyInput", {
        isAbstract: true
    })
], ReactionOnThreadsCreateManyInput);
exports.ReactionOnThreadsCreateManyInput = ReactionOnThreadsCreateManyInput;
