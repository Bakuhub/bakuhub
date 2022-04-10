"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateWithoutUserInput");
const VotesOnThreadUpdateWithoutUserInput_1 = require("../inputs/VotesOnThreadUpdateWithoutUserInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpsertWithWhereUniqueWithoutUserInput = class VotesOnThreadUpsertWithWhereUniqueWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutUserInput_1.VotesOnThreadUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateWithoutUserInput_1.VotesOnThreadUpdateWithoutUserInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
VotesOnThreadUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpsertWithWhereUniqueWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadUpsertWithWhereUniqueWithoutUserInput);
exports.VotesOnThreadUpsertWithWhereUniqueWithoutUserInput = VotesOnThreadUpsertWithWhereUniqueWithoutUserInput;
