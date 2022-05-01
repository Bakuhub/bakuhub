"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimeline = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimeline = class VotesOnTimeline {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimeline.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimeline.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimeline.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimeline.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimeline.prototype, "updatedAt", void 0);
VotesOnTimeline = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimeline", {
        isAbstract: true
    })
], VotesOnTimeline);
exports.VotesOnTimeline = VotesOnTimeline;
