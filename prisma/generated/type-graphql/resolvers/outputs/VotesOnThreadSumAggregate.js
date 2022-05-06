"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnThreadSumAggregate = class VotesOnThreadSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnThreadSumAggregate.prototype, "vote", void 0);
VotesOnThreadSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnThreadSumAggregate", {
        isAbstract: true
    })
], VotesOnThreadSumAggregate);
exports.VotesOnThreadSumAggregate = VotesOnThreadSumAggregate;
