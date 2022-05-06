"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput_1 = require("../inputs/ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput");
let ThreadsOnPremiseWhereUniqueInput = class ThreadsOnPremiseWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThreadsOnPremiseWhereUniqueInput.prototype, "threadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput_1.ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput_1.ThreadsOnPremiseThreadIdPremiseIdCompoundUniqueInput)
], ThreadsOnPremiseWhereUniqueInput.prototype, "threadId_premiseId", void 0);
ThreadsOnPremiseWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseWhereUniqueInput", {
        isAbstract: true
    })
], ThreadsOnPremiseWhereUniqueInput);
exports.ThreadsOnPremiseWhereUniqueInput = ThreadsOnPremiseWhereUniqueInput;
