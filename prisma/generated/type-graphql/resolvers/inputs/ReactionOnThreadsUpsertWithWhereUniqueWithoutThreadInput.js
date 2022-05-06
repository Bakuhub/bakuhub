"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsCreateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsCreateWithoutThreadInput");
const ReactionOnThreadsUpdateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateWithoutThreadInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput = class ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutThreadInput_1.ReactionOnThreadsUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateWithoutThreadInput_1.ReactionOnThreadsUpdateWithoutThreadInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsCreateWithoutThreadInput_1.ReactionOnThreadsCreateWithoutThreadInput)
], ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput.prototype, "create", void 0);
ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput);
exports.ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput = ReactionOnThreadsUpsertWithWhereUniqueWithoutThreadInput;
