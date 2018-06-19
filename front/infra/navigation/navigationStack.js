import { createStackNavigator } from "react-navigation";

import OfferList from "../../app/usecases/offer/containers/offerListScreen"
import OfferSearch from "../../app/usecases/offer/containers/offerSearch"
import OfferDetail from "../../app/usecases/offer/containers/offerDetail"

const navigator = createStackNavigator({
  offerlist: { screen: OfferList },
  offerdetail: { screen: OfferDetail },
  offersearch: { screen: OfferSearch },
},
  {
    initialRouteName: 'offerlist',
    
  }
);

export default navigator;
