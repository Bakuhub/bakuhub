"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput");
const ThreadsOnMergeRequestCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput = class ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput)
], ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput)
], ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput.prototype, "connect", void 0);
ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput);
exports.ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput = ThreadsOnMergeRequestCreateNestedOneWithoutThreadInput;
