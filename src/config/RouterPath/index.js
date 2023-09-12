import React from 'react';
import { Offline, Online } from "react-detect-offline";
import {
  Route, Switch
} from "react-router-dom";
import { About, Career, CareerDetail, Coin, FAQ, GICAffiliate, GICTradeV2, Home, Login, NotFound, OfflinePage, PrivacyPolice, Register, SocialTrade, TermsCondition, UnderDevelop } from '../../containers/pages';


const RouterPath = () => {
    return (
        <>
          <Online>
            <Switch>
              {/* Login Page */}
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>


              {/* Home Page */}
              <Route exact path="/" component={Home}/>
              
              {/* Introduction */}
              <Route exact path="/introduction/about-us" component={About} />
              <Route exact path="/introduction/gict-coin" component={Coin} />

              {/* Product */}
              <Route exact path="/products/gic-trade" component={GICTradeV2} />
              <Route exact path="/products/social-trade" component={SocialTrade} />
              <Route exact path="/products/gic-affiliate" component={GICAffiliate} />

              {/* Legacy */}
              <Route exact path="/support/terms-condition" component={TermsCondition} />
              <Route exact path="/support/privacy-police" component={PrivacyPolice} />
              <Route exact path="/support/career" component={Career} />
              <Route exact path="/support/career/career-detail/:id" component={CareerDetail} />
              <Route exact path="/support/faq" component={FAQ} />

              {/* Not Match */}
              <Route path='/under-develop' component={UnderDevelop} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Online>

          <Offline>
            <OfflinePage />
          </Offline>
        </>
    )
}

export default RouterPath;