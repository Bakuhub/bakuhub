"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadCreateNestedManyWithoutParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadCreateManyParentThreadInputEnvelope_1 = require("../inputs/ThreadCreateManyParentThreadInputEnvelope");
const ThreadCreateOrConnectWithoutParentThreadInput_1 = require("../inputs/ThreadCreateOrConnectWithoutParentThreadInput");
const ThreadCreateWithoutParentThreadInput_1 = require("../inputs/ThreadCreateWithoutParentThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadCreateNestedManyWithoutParentThreadInput = class ThreadCreateNestedManyWithoutParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateWithoutParentThreadInput_1.ThreadCreateWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutParentThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadCreateOrConnectWithoutParentThreadInput_1.ThreadCreateOrConnectWithoutParentThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutParentThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadCreateManyParentThreadInputEnvelope_1.ThreadCreateManyParentThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadCreateManyParentThreadInputEnvelope_1.ThreadCreateManyParentThreadInputEnvelope)
], ThreadCreateNestedManyWithoutParentThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadWhereUniqueInput_1.ThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadCreateNestedManyWithoutParentThreadInput.prototype, "connect", void 0);
ThreadCreateNestedManyWithoutParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadCreateNestedManyWithoutParentThreadInput", {
        isAbstract: true
    })
], ThreadCreateNestedManyWithoutParentThreadInput);
exports.ThreadCreateNestedManyWithoutParentThreadInput = ThreadCreateNestedManyWithoutParentThreadInput;
