"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsScalarWhereInput_1 = require("../inputs/ReactionOnThreadsScalarWhereInput");
const ReactionOnThreadsUpdateManyMutationInput_1 = require("../inputs/ReactionOnThreadsUpdateManyMutationInput");
let ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput = class ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsScalarWhereInput_1.ReactionOnThreadsScalarWhereInput)
], ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateManyMutationInput_1.ReactionOnThreadsUpdateManyMutationInput)
], ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput.prototype, "data", void 0);
ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput);
exports.ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput = ReactionOnThreadsUpdateManyWithWhereWithoutThreadInput;
