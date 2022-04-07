"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput = class ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput)
], ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput.prototype, "create", void 0);
ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput = ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput;
