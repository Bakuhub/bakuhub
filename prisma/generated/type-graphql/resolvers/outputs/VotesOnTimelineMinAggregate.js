"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineMinAggregate = class VotesOnTimelineMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineMinAggregate.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineMinAggregate.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineMinAggregate.prototype, "updatedAt", void 0);
VotesOnTimelineMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("VotesOnTimelineMinAggregate", {
        isAbstract: true
    })
], VotesOnTimelineMinAggregate);
exports.VotesOnTimelineMinAggregate = VotesOnTimelineMinAggregate;
