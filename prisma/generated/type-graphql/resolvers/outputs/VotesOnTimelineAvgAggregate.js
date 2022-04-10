"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineAvgAggregate = class VotesOnTimelineAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineAvgAggregate.prototype, "vote", void 0);
VotesOnTimelineAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineAvgAggregate", {
        isAbstract: true
    })
], VotesOnTimelineAvgAggregate);
exports.VotesOnTimelineAvgAggregate = VotesOnTimelineAvgAggregate;
