"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadUpdateWithoutAuthorInput_1 = require("../inputs/ThreadUpdateWithoutAuthorInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateWithWhereUniqueWithoutAuthorInput = class ThreadUpdateWithWhereUniqueWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutAuthorInput_1.ThreadUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutAuthorInput_1.ThreadUpdateWithoutAuthorInput)
], ThreadUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
ThreadUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadUpdateWithWhereUniqueWithoutAuthorInput);
exports.ThreadUpdateWithWhereUniqueWithoutAuthorInput = ThreadUpdateWithWhereUniqueWithoutAuthorInput;
