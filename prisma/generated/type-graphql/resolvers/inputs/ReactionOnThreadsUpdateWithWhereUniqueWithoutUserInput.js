"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnThreadsUpdateWithoutUserInput_1 = require("../inputs/ReactionOnThreadsUpdateWithoutUserInput");
const ReactionOnThreadsWhereUniqueInput_1 = require("../inputs/ReactionOnThreadsWhereUniqueInput");
let ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput = class ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsWhereUniqueInput_1.ReactionOnThreadsWhereUniqueInput)
], ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnThreadsUpdateWithoutUserInput_1.ReactionOnThreadsUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReactionOnThreadsUpdateWithoutUserInput_1.ReactionOnThreadsUpdateWithoutUserInput)
], ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput);
exports.ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput = ReactionOnThreadsUpdateWithWhereUniqueWithoutUserInput;
