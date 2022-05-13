import { User } from "../../../models/User";
import { Vision } from "../../../models/Vision";
import { VisionViewsHistory } from "../../../models/VisionViewsHistory";
export declare class VisionViewsHistoryRelationsResolver {
    vision(visionViewsHistory: VisionViewsHistory, ctx: any): Promise<Vision>;
    user(visionViewsHistory: VisionViewsHistory, ctx: any): Promise<User>;
}
