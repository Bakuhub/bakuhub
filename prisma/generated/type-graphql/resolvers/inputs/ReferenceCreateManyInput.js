"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReferenceCreateManyInput = class ReferenceCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReferenceCreateManyInput.prototype, "id", void 0);
ReferenceCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateManyInput", {
        isAbstract: true
    })
], ReferenceCreateManyInput);
exports.ReferenceCreateManyInput = ReferenceCreateManyInput;
