"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../enums/Reaction");
let ReactionOnTimelines = class ReactionOnTimelines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelines.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelines.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelines.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelines.prototype, "createdAt", void 0);
ReactionOnTimelines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnTimelines", {
        isAbstract: true
    })
], ReactionOnTimelines);
exports.ReactionOnTimelines = ReactionOnTimelines;
