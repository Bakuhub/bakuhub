"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceWhereInput_1 = require("../inputs/ReferenceWhereInput");
let ReferenceListRelationFilter = class ReferenceListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], ReferenceListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], ReferenceListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceWhereInput_1.ReferenceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReferenceWhereInput_1.ReferenceWhereInput)
], ReferenceListRelationFilter.prototype, "none", void 0);
ReferenceListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceListRelationFilter", {
        isAbstract: true
    })
], ReferenceListRelationFilter);
exports.ReferenceListRelationFilter = ReferenceListRelationFilter;
