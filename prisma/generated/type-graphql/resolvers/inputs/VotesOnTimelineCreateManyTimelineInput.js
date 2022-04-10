"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineCreateManyTimelineInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let VotesOnTimelineCreateManyTimelineInput = class VotesOnTimelineCreateManyTimelineInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], VotesOnTimelineCreateManyTimelineInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], VotesOnTimelineCreateManyTimelineInput.prototype, "vote", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], VotesOnTimelineCreateManyTimelineInput.prototype, "createdAt", void 0);
VotesOnTimelineCreateManyTimelineInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineCreateManyTimelineInput", {
        isAbstract: true
    })
], VotesOnTimelineCreateManyTimelineInput);
exports.VotesOnTimelineCreateManyTimelineInput = VotesOnTimelineCreateManyTimelineInput;
