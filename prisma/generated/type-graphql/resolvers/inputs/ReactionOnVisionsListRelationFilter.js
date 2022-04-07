"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsWhereInput_1 = require("../inputs/ReactionOnVisionsWhereInput");
let ReactionOnVisionsListRelationFilter = class ReactionOnVisionsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], ReactionOnVisionsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], ReactionOnVisionsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsWhereInput_1.ReactionOnVisionsWhereInput)
], ReactionOnVisionsListRelationFilter.prototype, "none", void 0);
ReactionOnVisionsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsListRelationFilter", {
        isAbstract: true
    })
], ReactionOnVisionsListRelationFilter);
exports.ReactionOnVisionsListRelationFilter = ReactionOnVisionsListRelationFilter;
