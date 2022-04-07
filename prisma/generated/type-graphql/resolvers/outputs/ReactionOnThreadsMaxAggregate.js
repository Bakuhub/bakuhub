"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsMaxAggregate = class ReactionOnThreadsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMaxAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsMaxAggregate.prototype, "createdAt", void 0);
ReactionOnThreadsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnThreadsMaxAggregate", {
        isAbstract: true
    })
], ReactionOnThreadsMaxAggregate);
exports.ReactionOnThreadsMaxAggregate = ReactionOnThreadsMaxAggregate;
