"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnVisionCreateNestedManyWithoutVisionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnVisionCreateManyVisionInputEnvelope_1 = require("../inputs/ThreadsOnVisionCreateManyVisionInputEnvelope");
const ThreadsOnVisionCreateOrConnectWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateOrConnectWithoutVisionInput");
const ThreadsOnVisionCreateWithoutVisionInput_1 = require("../inputs/ThreadsOnVisionCreateWithoutVisionInput");
const ThreadsOnVisionWhereUniqueInput_1 = require("../inputs/ThreadsOnVisionWhereUniqueInput");
let ThreadsOnVisionCreateNestedManyWithoutVisionInput = class ThreadsOnVisionCreateNestedManyWithoutVisionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateWithoutVisionInput_1.ThreadsOnVisionCreateWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionCreateNestedManyWithoutVisionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionCreateOrConnectWithoutVisionInput_1.ThreadsOnVisionCreateOrConnectWithoutVisionInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionCreateNestedManyWithoutVisionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnVisionCreateManyVisionInputEnvelope_1.ThreadsOnVisionCreateManyVisionInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnVisionCreateManyVisionInputEnvelope_1.ThreadsOnVisionCreateManyVisionInputEnvelope)
], ThreadsOnVisionCreateNestedManyWithoutVisionInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThreadsOnVisionWhereUniqueInput_1.ThreadsOnVisionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ThreadsOnVisionCreateNestedManyWithoutVisionInput.prototype, "connect", void 0);
ThreadsOnVisionCreateNestedManyWithoutVisionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnVisionCreateNestedManyWithoutVisionInput", {
        isAbstract: true
    })
], ThreadsOnVisionCreateNestedManyWithoutVisionInput);
exports.ThreadsOnVisionCreateNestedManyWithoutVisionInput = ThreadsOnVisionCreateNestedManyWithoutVisionInput;
