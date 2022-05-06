"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsScalarWhereInput_1 = require("../inputs/ReactionOnThreadsScalarWhereInput");
const ReactionOnThreadsUpdateManyMutationInput_1 = require("../inputs/ReactionOnThreadsUpdateManyMutationInput");
let ReactionOnThreadsUpdateManyWithWhereWithoutUserInput = class ReactionOnThreadsUpdateManyWithWhereWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput)
], ReactionOnThreadsUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput)
], ReactionOnThreadsUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
ReactionOnThreadsUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithWhereWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateManyWithWhereWithoutUserInput);
exports.ReactionOnThreadsUpdateManyWithWhereWithoutUserInput = ReactionOnThreadsUpdateManyWithWhereWithoutUserInput;
