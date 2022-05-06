"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadMaxAggregate = class VotesOnThreadMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMaxAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadMaxAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadMaxAggregate.prototype, "updatedAt", void 0);
VotesOnThreadMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnThreadMaxAggregate", {
        isAbstract: true
    })
], VotesOnThreadMaxAggregate);
exports.VotesOnThreadMaxAggregate = VotesOnThreadMaxAggregate;
