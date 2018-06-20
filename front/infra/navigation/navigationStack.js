import { createStackNavigator } from "react-navigation";

import OfferList from "../../app/usecases/offer/containers/offerList"
import OfferSearch from "../../app/usecases/offer/containers/offerSearch"
import OfferDetail from "../../app/usecases/offer/containers/offerDetail"

const navigator = createStackNavigator({
  offerlist: OfferList,
  offerdetail: OfferDetail,
  offersearch: OfferSearch
},
  {
    initialRouteName: 'offerlist',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0F9BB1',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

export default navigator;
