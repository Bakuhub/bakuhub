"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnMergeRequestUpdateOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput");
const ThreadsOnMergeRequestCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestCreateWithoutThreadInput");
const ThreadsOnMergeRequestUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpdateWithoutThreadInput");
const ThreadsOnMergeRequestUpsertWithoutThreadInput_1 = require("../inputs/ThreadsOnMergeRequestUpsertWithoutThreadInput");
const ThreadsOnMergeRequestWhereUniqueInput_1 = require("../inputs/ThreadsOnMergeRequestWhereUniqueInput");
let ThreadsOnMergeRequestUpdateOneWithoutThreadInput = class ThreadsOnMergeRequestUpdateOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateWithoutThreadInput_1.ThreadsOnMergeRequestCreateWithoutThreadInput)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput_1.ThreadsOnMergeRequestCreateOrConnectWithoutThreadInput)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpsertWithoutThreadInput_1.ThreadsOnMergeRequestUpsertWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpsertWithoutThreadInput_1.ThreadsOnMergeRequestUpsertWithoutThreadInput)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestWhereUniqueInput_1.ThreadsOnMergeRequestWhereUniqueInput)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnMergeRequestUpdateWithoutThreadInput_1.ThreadsOnMergeRequestUpdateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnMergeRequestUpdateWithoutThreadInput_1.ThreadsOnMergeRequestUpdateWithoutThreadInput)
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput.prototype, "update", void 0);
ThreadsOnMergeRequestUpdateOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnMergeRequestUpdateOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnMergeRequestUpdateOneWithoutThreadInput);
exports.ThreadsOnMergeRequestUpdateOneWithoutThreadInput = ThreadsOnMergeRequestUpdateOneWithoutThreadInput;
