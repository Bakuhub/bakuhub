"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadUpdateWithoutThreadInput_1 = require("../inputs/VotesOnThreadUpdateWithoutThreadInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput = class VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadUpdateWithoutThreadInput_1.VotesOnThreadUpdateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadUpdateWithoutThreadInput_1.VotesOnThreadUpdateWithoutThreadInput)
], VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput.prototype, "data", void 0);
VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput);
exports.VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput = VotesOnThreadUpdateWithWhereUniqueWithoutThreadInput;
