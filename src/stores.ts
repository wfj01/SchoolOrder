import { BusinessListViewDoMainStore } from "./businessView/domainStore";
import { CustomerListDomainStores } from "./businessView/MiddleView/customerList/domainStore";
import CustomerListStores from "./businessView/MiddleView/customerList/stores";
import { ManageGoodsDomainStore } from "./businessView/MiddleView/manageGoods/domainStore";
import ManabeGoodsStores from "./businessView/MiddleView/manageGoods/store";
import { OnlineOrderDoMainStore } from "./businessView/MiddleView/onlineOrder/domainStore";
import OnlineOrderStores from "./businessView/MiddleView/onlineOrder/stores";
import { PersonaldataDoMainStore } from "./businessView/MiddleView/personaldata/domainStore";
import PersonaldataStore from "./businessView/MiddleView/personaldata/stores";
import { SellGoodsDoMainStore } from "./businessView/MiddleView/sellingGoods/domainStore";
import SellGoodsStores from "./businessView/MiddleView/sellingGoods/stores";
import { StudentListDomainStores } from "./businessView/MiddleView/studentlist/domainStore";
import StudentListStores from "./businessView/MiddleView/studentlist/stores";
import BusinessListViewStores from "./businessView/stores";
import { ListViewDoMainStore } from "./listview/domainStore";
import ListViewStore from "./listview/stores";
import { LoginPageStore } from "./loginPage/domainStore";
import LoginStores from "./loginPage/stores";
import { RegisterPageDomainStore } from "./registerPage/domainStore";
import RegisterPageStores from "./registerPage/stores";
import { CollegeTownDoMainStore } from "./studentView/rightView/afterSchool/collegeTown/domainStore";
import CollegeTownStores from "./studentView/rightView/afterSchool/collegeTown/stores";
import { SouthSnackDoMainStore } from "./studentView/rightView/afterSchool/southSnack/domainStore";
import SouthSnackStores from "./studentView/rightView/afterSchool/southSnack/stores";
import { StepsViewDomainStore } from "./studentView/rightView/cartManage/domainStore";
import { OrderManagementDoMainStore } from "./studentView/rightView/cartManage/ordermanage/domainStore";
import OrderManagementStore from "./studentView/rightView/cartManage/ordermanage/stores";
import { MymessageViewDomainStoress } from "./studentView/rightView/cartManage/shoppingCart/myMessage/doMainStore";
import MymessageViewStoress from "./studentView/rightView/cartManage/shoppingCart/myMessage/stores";
import StepsViewStore from "./studentView/rightView/cartManage/stores";
import { FirstRestaurantDoMainStore } from "./studentView/rightView/firstRestaurant/domainStore";
import FirstRestaurant from "./studentView/rightView/firstRestaurant/stores";
import { MymessageViewDomainStores } from "./studentView/rightView/myMessage/doMainStore";
import MymessageViewStores from "./studentView/rightView/myMessage/stores";
import { OrderManagementviewDoMainStore } from "./studentView/rightView/ordermanage/domainStore";
import OrderManagementviewStore from "./studentView/rightView/ordermanage/stores";
import { SecondRestaurantDomainStore } from "./studentView/rightView/secondRestaurant/domainStore";
import SecondRestaurant from "./studentView/rightView/secondRestaurant/stores";
import { TadayRecommendDomainStore } from "./studentView/rightView/tadayRecommend/domainstore";
import { LastWeekDomainStore } from "./studentView/rightView/tadayRecommend/lastweekView/domainstore";
import LastWeekStores from "./studentView/rightView/tadayRecommend/lastweekView/store";
import TadayRecommendStores from "./studentView/rightView/tadayRecommend/store";


interface IDemoProps {
    GlobalFirstDoMainStore: FirstRestaurantDoMainStore;
    GlobalSecondDoMainStore: SecondRestaurantDomainStore;
    GlobalCollegeTownDoMainStore: CollegeTownDoMainStore;
    GlobalSouthSnackDoMainStore: SouthSnackDoMainStore;
    GlobalLoginPageStore: LoginPageStore;
    GlobalStepsViewDomainStore: StepsViewDomainStore;
    GlobalTadayRecommendDomainStore: TadayRecommendDomainStore;
    GlobalListViewDoMainStore: ListViewDoMainStore;
    GlobalRegisterPageDomainStore: RegisterPageDomainStore;
    GlobalManageGoodsDomainStore: ManageGoodsDomainStore;
    GlobalSellGoodsDoMainStore: SellGoodsDoMainStore;
    GlobalLastWeekDomainStore: LastWeekDomainStore;
    GlobalBusinessListViewDoMainStore: BusinessListViewDoMainStore;
    GlobalOnlineOrderDoMainStore: OnlineOrderDoMainStore;
    GlobalOrderManagementDoMainStore: OrderManagementDoMainStore;
    GlobalPersonaldataDoMainStore: PersonaldataDoMainStore;
    GlobalOrderManagementviewDoMainStore: OrderManagementviewDoMainStore;
    GlobalMymessageViewStores:MymessageViewDomainStores;
    GlobalMymessageViewStoress:MymessageViewDomainStoress;
    GlobalCustomerListDomainStores: CustomerListDomainStores;
    GlobalStudentListDomainStores: StudentListDomainStores;
}

const DemoStore: IDemoProps = {
    ...FirstRestaurant,
    ...SecondRestaurant,
    ...CollegeTownStores,
    ...SouthSnackStores,
    ...LoginStores,
    ...TadayRecommendStores,
    ...StepsViewStore,
    ...ListViewStore,
    ...RegisterPageStores,
    ...ManabeGoodsStores,
    ...SellGoodsStores,
    ...LastWeekStores,
    ...BusinessListViewStores,
    ...OnlineOrderStores,
    ...OrderManagementStore,
    ...PersonaldataStore,
    ...OrderManagementviewStore,
    ...MymessageViewStores,
    ...CustomerListStores,
    ...MymessageViewStoress,
    ...StudentListStores
}


export default DemoStore;