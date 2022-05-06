"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnPremiseScalarWhereInput_1 = require("../inputs/ThreadsOnPremiseScalarWhereInput");
const ThreadsOnPremiseUpdateManyMutationInput_1 = require("../inputs/ThreadsOnPremiseUpdateManyMutationInput");
let ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput = class ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseScalarWhereInput_1.ThreadsOnPremiseScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseScalarWhereInput_1.ThreadsOnPremiseScalarWhereInput)
], ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnPremiseUpdateManyMutationInput_1.ThreadsOnPremiseUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ThreadsOnPremiseUpdateManyMutationInput_1.ThreadsOnPremiseUpdateManyMutationInput)
], ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput.prototype, "data", void 0);
ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput", {
        isAbstract: true
    })
], ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput);
exports.ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput = ThreadsOnPremiseUpdateManyWithWhereWithoutPremiseInput;
