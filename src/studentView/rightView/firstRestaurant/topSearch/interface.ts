import { ListViewDoMainStore } from "../../../../listview/domainStore";
import { FirstRestaurantDoMainStore } from "../domainStore";

export interface ITopSearchViewProps {
    GlobalFirstDoMainStore?: FirstRestaurantDoMainStore;

    GlobalListViewDoMainStore?:ListViewDoMainStore;
}