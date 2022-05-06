"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateManyPremiseInputEnvelope_1 = require("../inputs/ThreadsOnPremiseCreateManyPremiseInputEnvelope");
const ThreadsOnPremiseCreateOrConnectWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateOrConnectWithoutPremiseInput");
const ThreadsOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutPremiseInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseCreateNestedManyWithoutPremiseInput = class ThreadsOnPremiseCreateNestedManyWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseCreateOrConnectWithoutPremiseInput_1.ThreadsOnPremiseCreateOrConnectWithoutPremiseInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateManyPremiseInputEnvelope_1.ThreadsOnPremiseCreateManyPremiseInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateManyPremiseInputEnvelope_1.ThreadsOnPremiseCreateManyPremiseInputEnvelope)
], ThreadsOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnPremiseCreateNestedManyWithoutPremiseInput.prototype, "connect", void 0);
ThreadsOnPremiseCreateNestedManyWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseCreateNestedManyWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseCreateNestedManyWithoutPremiseInput);
exports.ThreadsOnPremiseCreateNestedManyWithoutPremiseInput = ThreadsOnPremiseCreateNestedManyWithoutPremiseInput;
