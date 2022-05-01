"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesWhereInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereInput");
let SupscriptionsOnTimelinesListRelationFilter = class SupscriptionsOnTimelinesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], SupscriptionsOnTimelinesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], SupscriptionsOnTimelinesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereInput_1.SupscriptionsOnTimelinesWhereInput)
], SupscriptionsOnTimelinesListRelationFilter.prototype, "none", void 0);
SupscriptionsOnTimelinesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesListRelationFilter", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesListRelationFilter);
exports.SupscriptionsOnTimelinesListRelationFilter = SupscriptionsOnTimelinesListRelationFilter;
