"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnVisionSumAggregate = class VotesOnVisionSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnVisionSumAggregate.prototype, "vote", void 0);
VotesOnVisionSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnVisionSumAggregate", {
        isAbstract: true
    })
], VotesOnVisionSumAggregate);
exports.VotesOnVisionSumAggregate = VotesOnVisionSumAggregate;
