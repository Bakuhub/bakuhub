"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput = class ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput.prototype, "premiseId", void 0);
ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput", {
        isAbstract: true
    })
], ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput);
exports.ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput = ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput;
