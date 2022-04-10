"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnThreadCreateNestedManyWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const VotesOnThreadCreateManyThreadInputEnvelope_1 = require("../inputs/VotesOnThreadCreateManyThreadInputEnvelope");
const VotesOnThreadCreateOrConnectWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateOrConnectWithoutThreadInput");
const VotesOnThreadCreateWithoutThreadInput_1 = require("../inputs/VotesOnThreadCreateWithoutThreadInput");
const VotesOnThreadWhereUniqueInput_1 = require("../inputs/VotesOnThreadWhereUniqueInput");
let VotesOnThreadCreateNestedManyWithoutThreadInput = class VotesOnThreadCreateNestedManyWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateWithoutThreadInput_1.VotesOnThreadCreateWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadCreateOrConnectWithoutThreadInput_1.VotesOnThreadCreateOrConnectWithoutThreadInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => VotesOnThreadCreateManyThreadInputEnvelope_1.VotesOnThreadCreateManyThreadInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", VotesOnThreadCreateManyThreadInputEnvelope_1.VotesOnThreadCreateManyThreadInputEnvelope)
], VotesOnThreadCreateNestedManyWithoutThreadInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VotesOnThreadWhereUniqueInput_1.VotesOnThreadWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VotesOnThreadCreateNestedManyWithoutThreadInput.prototype, "connect", void 0);
VotesOnThreadCreateNestedManyWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VotesOnThreadCreateNestedManyWithoutThreadInput", {
        isAbstract: true
    })
], VotesOnThreadCreateNestedManyWithoutThreadInput);
exports.VotesOnThreadCreateNestedManyWithoutThreadInput = VotesOnThreadCreateNestedManyWithoutThreadInput;
