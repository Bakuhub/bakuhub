"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineSumAggregate = class VotesOnTimelineSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineSumAggregate.prototype, "vote", void 0);
VotesOnTimelineSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineSumAggregate", {
        isAbstract: true
    })
], VotesOnTimelineSumAggregate);
exports.VotesOnTimelineSumAggregate = VotesOnTimelineSumAggregate;
