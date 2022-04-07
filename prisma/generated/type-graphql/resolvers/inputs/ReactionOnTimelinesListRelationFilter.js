"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnTimelinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnTimelinesWhereInput_1 = require("../inputs/ReactionOnTimelinesWhereInput");
let ReactionOnTimelinesListRelationFilter = class ReactionOnTimelinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], ReactionOnTimelinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], ReactionOnTimelinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnTimelinesWhereInput_1.ReactionOnTimelinesWhereInput)
], ReactionOnTimelinesListRelationFilter.prototype, "none", void 0);
ReactionOnTimelinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnTimelinesListRelationFilter", {
        isAbstract: true
    })
], ReactionOnTimelinesListRelationFilter);
exports.ReactionOnTimelinesListRelationFilter = ReactionOnTimelinesListRelationFilter;
