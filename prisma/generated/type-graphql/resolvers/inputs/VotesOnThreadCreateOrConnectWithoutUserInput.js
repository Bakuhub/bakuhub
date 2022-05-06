"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateWithoutUserInput_1 = require("../inputs/VotesOnThreadCreateWithoutUserInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadCreateOrConnectWithoutUserInput = class VotesOnThreadCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateWithoutUserInput_1.VotesOnThreadCreateWithoutUserInput)
], VotesOnThreadCreateOrConnectWithoutUserInput.prototype, "create", void 0);
VotesOnThreadCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], VotesOnThreadCreateOrConnectWithoutUserInput);
exports.VotesOnThreadCreateOrConnectWithoutUserInput = VotesOnThreadCreateOrConnectWithoutUserInput;
