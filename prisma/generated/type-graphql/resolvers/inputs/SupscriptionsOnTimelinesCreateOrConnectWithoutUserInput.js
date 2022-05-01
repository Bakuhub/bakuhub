"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SupscriptionsOnTimelinesCreateWithoutUserInput_1 = require("../inputs/SupscriptionsOnTimelinesCreateWithoutUserInput");
const SupscriptionsOnTimelinesWhereUniqueInput_1 = require("../inputs/SupscriptionsOnTimelinesWhereUniqueInput");
let SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput = class SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesWhereUniqueInput_1.SupscriptionsOnTimelinesWhereUniqueInput)
], SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SupscriptionsOnTimelinesCreateWithoutUserInput_1.SupscriptionsOnTimelinesCreateWithoutUserInput)
], SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput.prototype, "create", void 0);
SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput);
exports.SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput = SupscriptionsOnTimelinesCreateOrConnectWithoutUserInput;
