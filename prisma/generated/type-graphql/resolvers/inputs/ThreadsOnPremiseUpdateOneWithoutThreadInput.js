"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateOrConnectWithoutThreadInput");
const ThreadsOnPremiseCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutThreadInput");
const ThreadsOnPremiseUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpdateWithoutThreadInput");
const ThreadsOnPremiseUpsertWithoutThreadInput_1 = require("../inputs/ThreadsOnPremiseUpsertWithoutThreadInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseUpdateOneWithoutThreadInput = class ThreadsOnPremiseUpdateOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutThreadInput_1.ThreadsOnPremiseCreateWithoutThreadInput)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1.ThreadsOnPremiseCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateOrConnectWithoutThreadInput_1.ThreadsOnPremiseCreateOrConnectWithoutThreadInput)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpsertWithoutThreadInput_1.ThreadsOnPremiseUpsertWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpsertWithoutThreadInput_1.ThreadsOnPremiseUpsertWithoutThreadInput)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutThreadInput_1.ThreadsOnPremiseUpdateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateWithoutThreadInput_1.ThreadsOnPremiseUpdateWithoutThreadInput)
], ThreadsOnPremiseUpdateOneWithoutThreadInput.prototype, "update", void 0);
ThreadsOnPremiseUpdateOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateOneWithoutThreadInput);
exports.ThreadsOnPremiseUpdateOneWithoutThreadInput = ThreadsOnPremiseUpdateOneWithoutThreadInput;
