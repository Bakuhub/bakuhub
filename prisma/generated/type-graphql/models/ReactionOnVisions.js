"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisions = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../enums/Reaction");
let ReactionOnVisions = class ReactionOnVisions {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisions.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisions.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisions.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisions.prototype, "createdAt", void 0);
ReactionOnVisions = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnVisions", {
        isAbstract: true
    })
], ReactionOnVisions);
exports.ReactionOnVisions = ReactionOnVisions;
