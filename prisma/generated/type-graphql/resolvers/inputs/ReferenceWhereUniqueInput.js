"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceWhereUniqueInput = class ReferenceWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceWhereUniqueInput.prototype, "id", void 0);
ReferenceWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceWhereUniqueInput", {
        isAbstract: true
    })
], ReferenceWhereUniqueInput);
exports.ReferenceWhereUniqueInput = ReferenceWhereUniqueInput;
