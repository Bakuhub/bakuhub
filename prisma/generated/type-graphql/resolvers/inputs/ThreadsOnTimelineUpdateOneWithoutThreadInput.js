"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsOnTimelineUpdateOneWithoutThreadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateOrConnectWithoutThreadInput");
const ThreadsOnTimelineCreateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineCreateWithoutThreadInput");
const ThreadsOnTimelineUpdateWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpdateWithoutThreadInput");
const ThreadsOnTimelineUpsertWithoutThreadInput_1 = require("../inputs/ThreadsOnTimelineUpsertWithoutThreadInput");
const ThreadsOnTimelineWhereUniqueInput_1 = require("../inputs/ThreadsOnTimelineWhereUniqueInput");
let ThreadsOnTimelineUpdateOneWithoutThreadInput = class ThreadsOnTimelineUpdateOneWithoutThreadInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateWithoutThreadInput_1.ThreadsOnTimelineCreateWithoutThreadInput)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1.ThreadsOnTimelineCreateOrConnectWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineCreateOrConnectWithoutThreadInput_1.ThreadsOnTimelineCreateOrConnectWithoutThreadInput)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpsertWithoutThreadInput_1.ThreadsOnTimelineUpsertWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpsertWithoutThreadInput_1.ThreadsOnTimelineUpsertWithoutThreadInput)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineWhereUniqueInput_1.ThreadsOnTimelineWhereUniqueInput)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThreadsOnTimelineUpdateWithoutThreadInput_1.ThreadsOnTimelineUpdateWithoutThreadInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThreadsOnTimelineUpdateWithoutThreadInput_1.ThreadsOnTimelineUpdateWithoutThreadInput)
], ThreadsOnTimelineUpdateOneWithoutThreadInput.prototype, "update", void 0);
ThreadsOnTimelineUpdateOneWithoutThreadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThreadsOnTimelineUpdateOneWithoutThreadInput", {
        isAbstract: true
    })
], ThreadsOnTimelineUpdateOneWithoutThreadInput);
exports.ThreadsOnTimelineUpdateOneWithoutThreadInput = ThreadsOnTimelineUpdateOneWithoutThreadInput;
