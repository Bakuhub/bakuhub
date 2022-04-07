"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsMinAggregate = class ReactionOnVisionsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMinAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsMinAggregate.prototype, "createdAt", void 0);
ReactionOnVisionsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnVisionsMinAggregate", {
        isAbstract: true
    })
], ReactionOnVisionsMinAggregate);
exports.ReactionOnVisionsMinAggregate = ReactionOnVisionsMinAggregate;
