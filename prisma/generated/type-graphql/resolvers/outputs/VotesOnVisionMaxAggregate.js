"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnVisionMaxAggregate = class VotesOnVisionMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMaxAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionMaxAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionMaxAggregate.prototype, "updatedAt", void 0);
VotesOnVisionMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnVisionMaxAggregate", {
        isAbstract: true
    })
], VotesOnVisionMaxAggregate);
exports.VotesOnVisionMaxAggregate = VotesOnVisionMaxAggregate;
