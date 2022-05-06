"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyAuthorInputEnvelope_1 = require("../inputs/ThreadCreateManyAuthorInputEnvelope");
const ThreadCreateOrConnectWithoutAuthorInput_1 = require("../inputs/ThreadCreateOrConnectWithoutAuthorInput");
const ThreadCreateWithoutAuthorInput_1 = require("../inputs/ThreadCreateWithoutAuthorInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedManyWithoutAuthorInput = class ThreadCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateWithoutAuthorInput_1.ThreadCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutAuthorInput_1.ThreadCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateManyAuthorInputEnvelope_1.ThreadCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateManyAuthorInputEnvelope_1.ThreadCreateManyAuthorInputEnvelope)
], ThreadCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
ThreadCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadCreateNestedManyWithoutAuthorInput);
exports.ThreadCreateNestedManyWithoutAuthorInput = ThreadCreateNestedManyWithoutAuthorInput;
