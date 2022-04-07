"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceWhereInput_1 = require("../inputs/ReferenceWhereInput");
let ReferenceRelationFilter = class ReferenceRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], ReferenceRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], ReferenceRelationFilter.prototype, "isNot", void 0);
ReferenceRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceRelationFilter", {
        isAbstract: true
    })
], ReferenceRelationFilter);
exports.ReferenceRelationFilter = ReferenceRelationFilter;
