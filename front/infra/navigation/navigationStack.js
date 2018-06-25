import {createStackNavigator} from "react-navigation";

import OfferList from "../../app/usecases/offer/containers/offerListScreen"
import OfferSearch from "../../app/usecases/offer/containers/offerSearch"
import OfferDetail from "../../app/usecases/offer/containers/offerDetail"
import OfferFilter from "../../app/usecases/offer/containers/offerFilterScreen"

const navigator = createStackNavigator({
        offerlist: {screen: OfferList},
        offerdetail: {screen: OfferDetail},
        offersearch: {screen: OfferSearch},
        offerfilter: {screen: OfferFilter},
    },
    {
        initialRouteName: 'offerlist',

    }
);

export default navigator;
