"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesOnVisionRelationsResolver = exports.VotesOnTimelineRelationsResolver = exports.VotesOnThreadRelationsResolver = exports.VotesOnPremiseRelationsResolver = exports.VisionRelationsResolver = exports.UserRelationsResolver = exports.TimelineRelationsResolver = exports.ThreadsOnVisionRelationsResolver = exports.ThreadsOnTimelineRelationsResolver = exports.ThreadsOnPremiseRelationsResolver = exports.ThreadsOnMergeRequestRelationsResolver = exports.ThreadRelationsResolver = exports.TagsOnTimelinesRelationsResolver = exports.TagsOnPremisesRelationsResolver = exports.TagRelationsResolver = exports.SnapshotRelationsResolver = exports.SessionRelationsResolver = exports.ReferenceRelationsResolver = exports.ReactionOnVisionsRelationsResolver = exports.ReactionOnTimelinesRelationsResolver = exports.ReactionOnThreadsRelationsResolver = exports.PremisesOnTimelinesRelationsResolver = exports.PremiseRelationsResolver = exports.MergeRequestRelationsResolver = exports.AccountRelationsResolver = void 0;
var AccountRelationsResolver_1 = require("./Account/AccountRelationsResolver");
Object.defineProperty(exports, "AccountRelationsResolver", { enumerable: true, get: function () { return AccountRelationsResolver_1.AccountRelationsResolver; } });
var MergeRequestRelationsResolver_1 = require("./MergeRequest/MergeRequestRelationsResolver");
Object.defineProperty(exports, "MergeRequestRelationsResolver", { enumerable: true, get: function () { return MergeRequestRelationsResolver_1.MergeRequestRelationsResolver; } });
var PremiseRelationsResolver_1 = require("./Premise/PremiseRelationsResolver");
Object.defineProperty(exports, "PremiseRelationsResolver", { enumerable: true, get: function () { return PremiseRelationsResolver_1.PremiseRelationsResolver; } });
var PremisesOnTimelinesRelationsResolver_1 = require("./PremisesOnTimelines/PremisesOnTimelinesRelationsResolver");
Object.defineProperty(exports, "PremisesOnTimelinesRelationsResolver", { enumerable: true, get: function () { return PremisesOnTimelinesRelationsResolver_1.PremisesOnTimelinesRelationsResolver; } });
var ReactionOnThreadsRelationsResolver_1 = require("./ReactionOnThreads/ReactionOnThreadsRelationsResolver");
Object.defineProperty(exports, "ReactionOnThreadsRelationsResolver", { enumerable: true, get: function () { return ReactionOnThreadsRelationsResolver_1.ReactionOnThreadsRelationsResolver; } });
var ReactionOnTimelinesRelationsResolver_1 = require("./ReactionOnTimelines/ReactionOnTimelinesRelationsResolver");
Object.defineProperty(exports, "ReactionOnTimelinesRelationsResolver", { enumerable: true, get: function () { return ReactionOnTimelinesRelationsResolver_1.ReactionOnTimelinesRelationsResolver; } });
var ReactionOnVisionsRelationsResolver_1 = require("./ReactionOnVisions/ReactionOnVisionsRelationsResolver");
Object.defineProperty(exports, "ReactionOnVisionsRelationsResolver", { enumerable: true, get: function () { return ReactionOnVisionsRelationsResolver_1.ReactionOnVisionsRelationsResolver; } });
var ReferenceRelationsResolver_1 = require("./Reference/ReferenceRelationsResolver");
Object.defineProperty(exports, "ReferenceRelationsResolver", { enumerable: true, get: function () { return ReferenceRelationsResolver_1.ReferenceRelationsResolver; } });
var SessionRelationsResolver_1 = require("./Session/SessionRelationsResolver");
Object.defineProperty(exports, "SessionRelationsResolver", { enumerable: true, get: function () { return SessionRelationsResolver_1.SessionRelationsResolver; } });
var SnapshotRelationsResolver_1 = require("./Snapshot/SnapshotRelationsResolver");
Object.defineProperty(exports, "SnapshotRelationsResolver", { enumerable: true, get: function () { return SnapshotRelationsResolver_1.SnapshotRelationsResolver; } });
var TagRelationsResolver_1 = require("./Tag/TagRelationsResolver");
Object.defineProperty(exports, "TagRelationsResolver", { enumerable: true, get: function () { return TagRelationsResolver_1.TagRelationsResolver; } });
var TagsOnPremisesRelationsResolver_1 = require("./TagsOnPremises/TagsOnPremisesRelationsResolver");
Object.defineProperty(exports, "TagsOnPremisesRelationsResolver", { enumerable: true, get: function () { return TagsOnPremisesRelationsResolver_1.TagsOnPremisesRelationsResolver; } });
var TagsOnTimelinesRelationsResolver_1 = require("./TagsOnTimelines/TagsOnTimelinesRelationsResolver");
Object.defineProperty(exports, "TagsOnTimelinesRelationsResolver", { enumerable: true, get: function () { return TagsOnTimelinesRelationsResolver_1.TagsOnTimelinesRelationsResolver; } });
var ThreadRelationsResolver_1 = require("./Thread/ThreadRelationsResolver");
Object.defineProperty(exports, "ThreadRelationsResolver", { enumerable: true, get: function () { return ThreadRelationsResolver_1.ThreadRelationsResolver; } });
var ThreadsOnMergeRequestRelationsResolver_1 = require("./ThreadsOnMergeRequest/ThreadsOnMergeRequestRelationsResolver");
Object.defineProperty(exports, "ThreadsOnMergeRequestRelationsResolver", { enumerable: true, get: function () { return ThreadsOnMergeRequestRelationsResolver_1.ThreadsOnMergeRequestRelationsResolver; } });
var ThreadsOnPremiseRelationsResolver_1 = require("./ThreadsOnPremise/ThreadsOnPremiseRelationsResolver");
Object.defineProperty(exports, "ThreadsOnPremiseRelationsResolver", { enumerable: true, get: function () { return ThreadsOnPremiseRelationsResolver_1.ThreadsOnPremiseRelationsResolver; } });
var ThreadsOnTimelineRelationsResolver_1 = require("./ThreadsOnTimeline/ThreadsOnTimelineRelationsResolver");
Object.defineProperty(exports, "ThreadsOnTimelineRelationsResolver", { enumerable: true, get: function () { return ThreadsOnTimelineRelationsResolver_1.ThreadsOnTimelineRelationsResolver; } });
var ThreadsOnVisionRelationsResolver_1 = require("./ThreadsOnVision/ThreadsOnVisionRelationsResolver");
Object.defineProperty(exports, "ThreadsOnVisionRelationsResolver", { enumerable: true, get: function () { return ThreadsOnVisionRelationsResolver_1.ThreadsOnVisionRelationsResolver; } });
var TimelineRelationsResolver_1 = require("./Timeline/TimelineRelationsResolver");
Object.defineProperty(exports, "TimelineRelationsResolver", { enumerable: true, get: function () { return TimelineRelationsResolver_1.TimelineRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });
var VisionRelationsResolver_1 = require("./Vision/VisionRelationsResolver");
Object.defineProperty(exports, "VisionRelationsResolver", { enumerable: true, get: function () { return VisionRelationsResolver_1.VisionRelationsResolver; } });
var VotesOnPremiseRelationsResolver_1 = require("./VotesOnPremise/VotesOnPremiseRelationsResolver");
Object.defineProperty(exports, "VotesOnPremiseRelationsResolver", { enumerable: true, get: function () { return VotesOnPremiseRelationsResolver_1.VotesOnPremiseRelationsResolver; } });
var VotesOnThreadRelationsResolver_1 = require("./VotesOnThread/VotesOnThreadRelationsResolver");
Object.defineProperty(exports, "VotesOnThreadRelationsResolver", { enumerable: true, get: function () { return VotesOnThreadRelationsResolver_1.VotesOnThreadRelationsResolver; } });
var VotesOnTimelineRelationsResolver_1 = require("./VotesOnTimeline/VotesOnTimelineRelationsResolver");
Object.defineProperty(exports, "VotesOnTimelineRelationsResolver", { enumerable: true, get: function () { return VotesOnTimelineRelationsResolver_1.VotesOnTimelineRelationsResolver; } });
var VotesOnVisionRelationsResolver_1 = require("./VotesOnVision/VotesOnVisionRelationsResolver");
Object.defineProperty(exports, "VotesOnVisionRelationsResolver", { enumerable: true, get: function () { return VotesOnVisionRelationsResolver_1.VotesOnVisionRelationsResolver; } });
