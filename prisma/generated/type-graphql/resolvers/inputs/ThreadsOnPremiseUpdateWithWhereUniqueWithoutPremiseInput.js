"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseUpdateWithoutPremiseInput_1 = require("../inputs/ThreadsOnPremiseUpdateWithoutPremiseInput");
const ThreadsOnPremiseWhereUniqueInput_1 = require("../inputs/ThreadsOnPremiseWhereUniqueInput");
let ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = class ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseWhereUniqueInput_1.ThreadsOnPremiseWhereUniqueInput)
], ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateWithoutPremiseInput_1.ThreadsOnPremiseUpdateWithoutPremiseInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateWithoutPremiseInput_1.ThreadsOnPremiseUpdateWithoutPremiseInput)
], ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput.prototype, "data", void 0);
ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput);
exports.ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput = ThreadsOnPremiseUpdateWithWhereUniqueWithoutPremiseInput;
