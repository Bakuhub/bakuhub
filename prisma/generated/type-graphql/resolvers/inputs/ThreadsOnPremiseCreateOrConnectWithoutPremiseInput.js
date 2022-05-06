"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateOrConnectWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutPremiseInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseCreateOrConnectWithoutPremiseInput = class ThreadsOnPremiseCreateOrConnectWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseCreateOrConnectWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput)
], ThreadsOnPremiseCreateOrConnectWithoutPremiseInput.prototype, "create", void 0);
ThreadsOnPremiseCreateOrConnectWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateOrConnectWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateOrConnectWithoutPremiseInput);
exports.ThreadsOnPremiseCreateOrConnectWithoutPremiseInput = ThreadsOnPremiseCreateOrConnectWithoutPremiseInput;
