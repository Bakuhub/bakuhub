"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReactionOnVisionsCountAggregate = class ReactionOnVisionsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnVisionsCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnVisionsCountAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnVisionsCountAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnVisionsCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnVisionsCountAggregate.prototype, "_all", void 0);
ReactionOnVisionsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnVisionsCountAggregate", {
        isAbstract: true
    })
], ReactionOnVisionsCountAggregate);
exports.ReactionOnVisionsCountAggregate = ReactionOnVisionsCountAggregate;
