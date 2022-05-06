"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionOnVisionsCreateNestedManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionOnVisionsCreateManyVisionInputEnvelope_1 = require("../inputs/ReactionOnVisionsCreateManyVisionInputEnvelope");
const ReactionOnVisionsCreateOrConnectWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateOrConnectWithoutVisionInput");
const ReactionOnVisionsCreateWithoutVisionInput_1 = require("../inputs/ReactionOnVisionsCreateWithoutVisionInput");
const ReactionOnVisionsWhereUniqueInput_1 = require("../inputs/ReactionOnVisionsWhereUniqueInput");
let ReactionOnVisionsCreateNestedManyWithoutVisionInput = class ReactionOnVisionsCreateNestedManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateWithoutVisionInput_1.ReactionOnVisionsCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsCreateOrConnectWithoutVisionInput_1.ReactionOnVisionsCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOnVisionsCreateManyVisionInputEnvelope_1.ReactionOnVisionsCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOnVisionsCreateManyVisionInputEnvelope_1.ReactionOnVisionsCreateManyVisionInputEnvelope)
], ReactionOnVisionsCreateNestedManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReactionOnVisionsWhereUniqueInput_1.ReactionOnVisionsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReactionOnVisionsCreateNestedManyWithoutVisionInput.prototype, "connect", void 0);
ReactionOnVisionsCreateNestedManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReactionOnVisionsCreateNestedManyWithoutVisionInput", {
        isAbstract: true
    })
], ReactionOnVisionsCreateNestedManyWithoutVisionInput);
exports.ReactionOnVisionsCreateNestedManyWithoutVisionInput = ReactionOnVisionsCreateNestedManyWithoutVisionInput;
