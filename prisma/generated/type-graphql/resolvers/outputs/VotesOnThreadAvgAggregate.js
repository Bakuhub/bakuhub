"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadAvgAggregate = class VotesOnThreadAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadAvgAggregate.prototype, "vote", void 0);
VotesOnThreadAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnThreadAvgAggregate", {
        isAbstract: true
    })
], VotesOnThreadAvgAggregate);
exports.VotesOnThreadAvgAggregate = VotesOnThreadAvgAggregate;
