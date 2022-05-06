"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutUserInput");
const ReactionOnThreadsUpdateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateWithoutUserInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput = class ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutUserInput_1.ReactionOnThreadsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateWithoutUserInput_1.ReactionOnThreadsUpdateWithoutUserInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateWithoutUserInput_1.ReactionOnThreadsCreateWithoutUserInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput);
exports.ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput = ReactionOnThreadsUpsertWithWhereUniqueWithoutUserInput;
