"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsWhereInput_1 = require("../inputs/ReactionOnThreadsWhereInput");
let ReactionOnThreadsListRelationFilter = class ReactionOnThreadsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], ReactionOnThreadsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], ReactionOnThreadsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereInput_1.ReactionOnThreadsWhereInput)
], ReactionOnThreadsListRelationFilter.prototype, "none", void 0);
ReactionOnThreadsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsListRelationFilter", {
        isAbstract: true
    })
], ReactionOnThreadsListRelationFilter);
exports.ReactionOnThreadsListRelationFilter = ReactionOnThreadsListRelationFilter;
