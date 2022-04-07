"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreads = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../enums/Reaction");
let ReactionOnThreads = class ReactionOnThreads {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreads.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreads.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreads.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreads.prototype, "createdAt", void 0);
ReactionOnThreads = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnThreads", {
        isAbstract: true
    })
], ReactionOnThreads);
exports.ReactionOnThreads = ReactionOnThreads;
