"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnVisionsMaxAggregate = class ReactionOnVisionsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnVisionsMaxAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnVisionsMaxAggregate.prototype, "createdAt", void 0);
ReactionOnVisionsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnVisionsMaxAggregate", {
        isAbstract: true
    })
], ReactionOnVisionsMaxAggregate);
exports.ReactionOnVisionsMaxAggregate = ReactionOnVisionsMaxAggregate;
