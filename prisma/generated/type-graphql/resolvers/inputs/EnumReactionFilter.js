"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumReactionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumReactionFilter_1 = require("../inputs/NestedEnumReactionFilter");
const Reaction_1 = require("../../enums/Reaction");
let EnumReactionFilter = class EnumReactionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumReactionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumReactionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumReactionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1.NestedEnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter_1.NestedEnumReactionFilter)
], EnumReactionFilter.prototype, "not", void 0);
EnumReactionFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumReactionFilter", {
        isAbstract: true
    })
], EnumReactionFilter);
exports.EnumReactionFilter = EnumReactionFilter;
