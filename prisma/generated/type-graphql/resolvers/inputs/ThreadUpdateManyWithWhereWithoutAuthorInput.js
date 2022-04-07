"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadUpdateManyWithWhereWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadScalarWhereInput_1 = require("../inputs/ThreadScalarWhereInput");
const ThreadUpdateManyMutationInput_1 = require("../inputs/ThreadUpdateManyMutationInput");
let ThreadUpdateManyWithWhereWithoutAuthorInput = class ThreadUpdateManyWithWhereWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadScalarWhereInput_1.ThreadScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadScalarWhereInput_1.ThreadScalarWhereInput)
], ThreadUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadUpdateManyMutationInput_1.ThreadUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadUpdateManyMutationInput_1.ThreadUpdateManyMutationInput)
], ThreadUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
ThreadUpdateManyWithWhereWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadUpdateManyWithWhereWithoutAuthorInput", {
        isAbstract: true
    })
], ThreadUpdateManyWithWhereWithoutAuthorInput);
exports.ThreadUpdateManyWithWhereWithoutAuthorInput = ThreadUpdateManyWithWhereWithoutAuthorInput;
