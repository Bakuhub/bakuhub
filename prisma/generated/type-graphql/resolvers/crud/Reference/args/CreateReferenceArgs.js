"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReferenceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReferenceCreateInput_1 = require("../../../inputs/ReferenceCreateInput");
let CreateReferenceArgs = class CreateReferenceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReferenceCreateInput_1.ReferenceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReferenceCreateInput_1.ReferenceCreateInput)
], CreateReferenceArgs.prototype, "data", void 0);
CreateReferenceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateReferenceArgs);
exports.CreateReferenceArgs = CreateReferenceArgs;
