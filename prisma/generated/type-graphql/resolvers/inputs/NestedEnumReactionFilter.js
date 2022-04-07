"use strict";
var NestedEnumReactionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumReactionFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Reaction_1 = require("../../enums/Reaction");
let NestedEnumReactionFilter = NestedEnumReactionFilter_1 = class NestedEnumReactionFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedEnumReactionFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumReactionFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Reaction_1.Reaction], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedEnumReactionFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedEnumReactionFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedEnumReactionFilter)
], NestedEnumReactionFilter.prototype, "not", void 0);
NestedEnumReactionFilter = NestedEnumReactionFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedEnumReactionFilter", {
        isAbstract: true
    })
], NestedEnumReactionFilter);
exports.NestedEnumReactionFilter = NestedEnumReactionFilter;
