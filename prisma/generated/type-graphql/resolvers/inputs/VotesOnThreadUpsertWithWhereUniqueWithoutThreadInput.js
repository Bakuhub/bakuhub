"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateWithoutThreadInput");
const VotesOnThreadUpdateWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateWithoutThreadInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput = class VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutThreadInput_1.VotesOnThreadUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateWithoutThreadInput_1.VotesOnThreadUpdateWithoutThreadInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput)
], VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput.prototype, "create", void 0);
VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput);
exports.VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput = VotesOnThreadUpsertWithWhereUniqueWithoutThreadInput;
