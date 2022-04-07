"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput = class ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput)
], ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput);
exports.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput = ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput;
