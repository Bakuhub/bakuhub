"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumReactionWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumReactionFilter_1 = require("../inputs/NestedEnumReactionFilter");
const NestedEnumReactionWithAggregatesFilter_1 = require("../inputs/NestedEnumReactionWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Reaction_1 = require("../../enums/Reaction");
let EnumReactionWithAggregatesFilter = class EnumReactionWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumReactionWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumReactionWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EnumReactionWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionWithAggregatesFilter_1.NestedEnumReactionWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionWithAggregatesFilter_1.NestedEnumReactionWithAggregatesFilter)
], EnumReactionWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumReactionWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1.NestedEnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter_1.NestedEnumReactionFilter)
], EnumReactionWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1.NestedEnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter_1.NestedEnumReactionFilter)
], EnumReactionWithAggregatesFilter.prototype, "_max", void 0);
EnumReactionWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumReactionWithAggregatesFilter", {
        isAbstract: true
    })
], EnumReactionWithAggregatesFilter);
exports.EnumReactionWithAggregatesFilter = EnumReactionWithAggregatesFilter;
