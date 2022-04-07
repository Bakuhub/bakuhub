"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseCreateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseCreateWithoutPremiseInput");
const ThreadsOnPremiseUpdateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateWithoutPremiseInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = class ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutPremiseInput_1.ThreadsOnPremiseUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateWithoutPremiseInput_1.ThreadsOnPremiseUpdateWithoutPremiseInput)
], ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseCreateWithoutPremiseInput_1.ThreadsOnPremiseCreateWithoutPremiseInput)
], ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput.prototype, "create", void 0);
ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput);
exports.ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput = ThreadsOnPremiseUpsertWithWhereUniqueWithoutPremiseInput;
