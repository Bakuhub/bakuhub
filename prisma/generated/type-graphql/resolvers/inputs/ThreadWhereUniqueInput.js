"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadWhereUniqueInput = class ThreadWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadWhereUniqueInput.prototype, "id", void 0);
ThreadWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadWhereUniqueInput", {
        isAbstract: true
    })
], ThreadWhereUniqueInput);
exports.ThreadWhereUniqueInput = ThreadWhereUniqueInput;
