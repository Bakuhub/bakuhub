"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnTimelineListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnTimelineWhereInput_1 = require("../inputs/VotesOnTimelineWhereInput");
let VotesOnTimelineListRelationFilter = class VotesOnTimelineListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], VotesOnTimelineListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], VotesOnTimelineListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnTimelineWhereInput_1.VotesOnTimelineWhereInput)
], VotesOnTimelineListRelationFilter.prototype, "none", void 0);
VotesOnTimelineListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnTimelineListRelationFilter", {
        isAbstract: true
    })
], VotesOnTimelineListRelationFilter);
exports.VotesOnTimelineListRelationFilter = VotesOnTimelineListRelationFilter;
