"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let ReactionOnThreadsMinAggregate = class ReactionOnThreadsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReactionOnThreadsMinAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReactionOnThreadsMinAggregate.prototype, "createdAt", void 0);
ReactionOnThreadsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnThreadsMinAggregate", {
        isAbstract: true
    })
], ReactionOnThreadsMinAggregate);
exports.ReactionOnThreadsMinAggregate = ReactionOnThreadsMinAggregate;
