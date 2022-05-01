"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadMinAggregate = class VotesOnThreadMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnThreadMinAggregate.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadMinAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnThreadMinAggregate.prototype, "updatedAt", void 0);
VotesOnThreadMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnThreadMinAggregate", {
        isAbstract: true
    })
], VotesOnThreadMinAggregate);
exports.VotesOnThreadMinAggregate = VotesOnThreadMinAggregate;
