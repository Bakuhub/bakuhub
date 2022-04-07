"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsUpdateWithoutThreadInput_1 = require("../inputs/ReactionOnThreadsUpdateWithoutThreadInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput = class ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutThreadInput_1.ReactionOnThreadsUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateWithoutThreadInput_1.ReactionOnThreadsUpdateWithoutThreadInput)
], ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput.prototype, "data", void 0);
ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput);
exports.ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput = ReactionOnThreadsUpdateWithWhereUniqueWithoutThreadInput;
