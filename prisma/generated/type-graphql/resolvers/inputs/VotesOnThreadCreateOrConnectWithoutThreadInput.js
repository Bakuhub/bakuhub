"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateOrConnectWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateWithoutThreadInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadCreateOrConnectWithoutThreadInput = class VotesOnThreadCreateOrConnectWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput)
], VotesOnThreadCreateOrConnectWithoutThreadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput)
], VotesOnThreadCreateOrConnectWithoutThreadInput.prototype, "create", void 0);
VotesOnThreadCreateOrConnectWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateOrConnectWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadCreateOrConnectWithoutThreadInput);
exports.VotesOnThreadCreateOrConnectWithoutThreadInput = VotesOnThreadCreateOrConnectWithoutThreadInput;
