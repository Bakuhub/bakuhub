"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReactionOnThreadsCountAggregate = class ReactionOnThreadsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnThreadsCountAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnThreadsCountAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnThreadsCountAggregate.prototype, "reaction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnThreadsCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReactionOnThreadsCountAggregate.prototype, "_all", void 0);
ReactionOnThreadsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReactionOnThreadsCountAggregate", {
        isAbstract: true
    })
], ReactionOnThreadsCountAggregate);
exports.ReactionOnThreadsCountAggregate = ReactionOnThreadsCountAggregate;
