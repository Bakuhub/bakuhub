"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1 = require("../inputs/ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope");
const ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput");
const ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutMergeRequestInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput = class ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutMergeRequestInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope_1.ThreadsOnMergeRequestCreateManyMergeRequestInputEnvelope)
], ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput.prototype, "connect", void 0);
ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput);
exports.ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput = ThreadsOnMergeRequestCreateNestedManyWithoutMergeRequestInput;
