"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateWithoutAuthorInput_1 = require("../inputs/TimelineCreateWithoutAuthorInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateOrConnectWithoutAuthorInput = class TimelineCreateOrConnectWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineWhereUniqueInput_1.TimelineWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineWhereUniqueInput_1.TimelineWhereUniqueInput)
], TimelineCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput)
], TimelineCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
TimelineCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateOrConnectWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineCreateOrConnectWithoutAuthorInput);
exports.TimelineCreateOrConnectWithoutAuthorInput = TimelineCreateOrConnectWithoutAuthorInput;
