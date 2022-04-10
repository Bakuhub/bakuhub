"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnVisionMinAggregate = class VotesOnVisionMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnVisionMinAggregate.prototype, "visionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionMinAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnVisionMinAggregate.prototype, "createdAt", void 0);
VotesOnVisionMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnVisionMinAggregate", {
        isAbstract: true
    })
], VotesOnVisionMinAggregate);
exports.VotesOnVisionMinAggregate = VotesOnVisionMinAggregate;
