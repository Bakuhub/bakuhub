"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadWhereInput_1 = require("../inputs/VotesOnThreadWhereInput");
let VotesOnThreadListRelationFilter = class VotesOnThreadListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], VotesOnThreadListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], VotesOnThreadListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereInput_1.VotesOnThreadWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereInput_1.VotesOnThreadWhereInput)
], VotesOnThreadListRelationFilter.prototype, "none", void 0);
VotesOnThreadListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadListRelationFilter", {
        isAbstract: true
    })
], VotesOnThreadListRelationFilter);
exports.VotesOnThreadListRelationFilter = VotesOnThreadListRelationFilter;
