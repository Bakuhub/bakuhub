"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineCreateManyUserInput = class VotesOnTimelineCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineCreateManyUserInput.prototype, "timelineId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateManyUserInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateManyUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateManyUserInput.prototype, "updatedAt", void 0);
VotesOnTimelineCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateManyUserInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateManyUserInput);
exports.VotesOnTimelineCreateManyUserInput = VotesOnTimelineCreateManyUserInput;
