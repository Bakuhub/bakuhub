"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceCreateNestedManyWithoutSnapshotsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateOrConnectWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateOrConnectWithoutSnapshotsInput");
const ReferenceCreateWithoutSnapshotsInput_1 = require("../inputs/ReferenceCreateWithoutSnapshotsInput");
const ReferenceWhereUniqueInput_1 = require("../inputs/ReferenceWhereUniqueInput");
let ReferenceCreateNestedManyWithoutSnapshotsInput = class ReferenceCreateNestedManyWithoutSnapshotsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceCreateWithoutSnapshotsInput_1.ReferenceCreateWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceCreateNestedManyWithoutSnapshotsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceCreateOrConnectWithoutSnapshotsInput_1.ReferenceCreateOrConnectWithoutSnapshotsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceCreateNestedManyWithoutSnapshotsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReferenceWhereUniqueInput_1.ReferenceWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReferenceCreateNestedManyWithoutSnapshotsInput.prototype, "connect", void 0);
ReferenceCreateNestedManyWithoutSnapshotsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReferenceCreateNestedManyWithoutSnapshotsInput", {
        isAbstract: true
    })
], ReferenceCreateNestedManyWithoutSnapshotsInput);
exports.ReferenceCreateNestedManyWithoutSnapshotsInput = ReferenceCreateNestedManyWithoutSnapshotsInput;
