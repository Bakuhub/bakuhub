"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1 = require("../inputs/SupscriptionsOnTimelinesCreateManyUserInputEnvelope");
const SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput");
const SupscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput = class SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput_1.SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SupscriptionsOnTimelinesCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateManyUserInputEnvelope_1.SupscriptionsOnTimelinesCreateManyUserInputEnvelope)
], SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput);
exports.SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput = SupscriptionsOnTimelinesCreateNestedManyWithoutUserInput;
