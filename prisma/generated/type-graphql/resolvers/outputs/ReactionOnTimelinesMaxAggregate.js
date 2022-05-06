"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnTimelinesMaxAggregate = class ReactionOnTimelinesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMaxAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnTimelinesMaxAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnTimelinesMaxAggregate.prototype, "createdAt", void 0);
ReactionOnTimelinesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnTimelinesMaxAggregate", {
        isAbstract: true
    })
], ReactionOnTimelinesMaxAggregate);
exports.ReactionOnTimelinesMaxAggregate = ReactionOnTimelinesMaxAggregate;
