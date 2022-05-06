"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionScalarWhereInput_1 = require("../inputs/ThreadsOnVisionScalarWhereInput");
const ThreadsOnVisionUpdateManyMutationInput_1 = require("../inputs/ThreadsOnVisionUpdateManyMutationInput");
let ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput = class ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionScalarWhereInput_1.ThreadsOnVisionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionScalarWhereInput_1.ThreadsOnVisionScalarWhereInput)
], ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionUpdateManyMutationInput_1.ThreadsOnVisionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionUpdateManyMutationInput_1.ThreadsOnVisionUpdateManyMutationInput)
], ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput.prototype, "data", void 0);
ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput);
exports.ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput = ThreadsOnVisionUpdateManyWithWhereWithoutVisionInput;
