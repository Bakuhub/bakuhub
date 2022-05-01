"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineCreateManyInput = class VotesOnTimelineCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineCreateManyInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateManyInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateManyInput.prototype, "updatedAt", void 0);
VotesOnTimelineCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateManyInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateManyInput);
exports.VotesOnTimelineCreateManyInput = VotesOnTimelineCreateManyInput;
