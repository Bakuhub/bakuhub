"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TimelineCreateManyAuthorInputEnvelope_1 = require("../inputs/TimelineCreateManyAuthorInputEnvelope");
const TimelineCreateOrConnectWithoutAuthorInput_1 = require("../inputs/TimelineCreateOrConnectWithoutAuthorInput");
const TimelineCreateWithoutAuthorInput_1 = require("../inputs/TimelineCreateWithoutAuthorInput");
const TimelineWhereUniqueInput_1 = require("../inputs/TimelineWhereUniqueInput");
let TimelineCreateNestedManyWithoutAuthorInput = class TimelineCreateNestedManyWithoutAuthorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateWithoutAuthorInput_1.TimelineCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineCreateOrConnectWithoutAuthorInput_1.TimelineCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TimelineCreateManyAuthorInputEnvelope_1.TimelineCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TimelineCreateManyAuthorInputEnvelope_1.TimelineCreateManyAuthorInputEnvelope)
], TimelineCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TimelineWhereUniqueInput_1.TimelineWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TimelineCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
TimelineCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TimelineCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], TimelineCreateNestedManyWithoutAuthorInput);
exports.TimelineCreateNestedManyWithoutAuthorInput = TimelineCreateNestedManyWithoutAuthorInput;
