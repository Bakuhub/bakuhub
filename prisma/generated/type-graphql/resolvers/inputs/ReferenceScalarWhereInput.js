"use strict";
var ReferenceScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
let ReferenceScalarWhereInput = ReferenceScalarWhereInput_1 = class ReferenceScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReferenceScalarWhereInput.prototype, "id", void 0);
ReferenceScalarWhereInput = ReferenceScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceScalarWhereInput", {
        isAbstract: true
    })
], ReferenceScalarWhereInput);
exports.ReferenceScalarWhereInput = ReferenceScalarWhereInput;
