"use strict";
var NestedEnumReactionWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumReactionWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedEnumReactionFilter_1 = require("../inputs/NestedEnumReactionFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Reaction_1 = require("../../enums/Reaction");
let NestedEnumReactionWithAggregatesFilter = NestedEnumReactionWithAggregatesFilter_1 = class NestedEnumReactionWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumReactionWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumReactionWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumReactionWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionWithAggregatesFilter)
], NestedEnumReactionWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumReactionWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1.NestedEnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter_1.NestedEnumReactionFilter)
], NestedEnumReactionWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1.NestedEnumReactionFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter_1.NestedEnumReactionFilter)
], NestedEnumReactionWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumReactionWithAggregatesFilter = NestedEnumReactionWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumReactionWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumReactionWithAggregatesFilter);
exports.NestedEnumReactionWithAggregatesFilter = NestedEnumReactionWithAggregatesFilter;
