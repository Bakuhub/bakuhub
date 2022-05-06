"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateWithWhereUniqueWithoutParentThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadUpdateWithoutParentThreadInput_1 = require("../inputs/ThreadUpdateWithoutParentThreadInput");
const ThreadWhereUniqueInput_1 = require("../inputs/ThreadWhereUniqueInput");
let ThreadUpdateWithWhereUniqueWithoutParentThreadInput = class ThreadUpdateWithWhereUniqueWithoutParentThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadWhereUniqueInput_1.ThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadWhereUniqueInput_1.ThreadWhereUniqueInput)
], ThreadUpdateWithWhereUniqueWithoutParentThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateWithoutParentThreadInput_1.ThreadUpdateWithoutParentThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateWithoutParentThreadInput_1.ThreadUpdateWithoutParentThreadInput)
], ThreadUpdateWithWhereUniqueWithoutParentThreadInput.prototype, "data", void 0);
ThreadUpdateWithWhereUniqueWithoutParentThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateWithWhereUniqueWithoutParentThreadInput", {
        isAbstract: true
    })
], ThreadUpdateWithWhereUniqueWithoutParentThreadInput);
exports.ThreadUpdateWithWhereUniqueWithoutParentThreadInput = ThreadUpdateWithWhereUniqueWithoutParentThreadInput;
