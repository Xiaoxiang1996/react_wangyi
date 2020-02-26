import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import FooterGuide from './components/FooterGuide/FooterGuide'
import Home from './container/Home/Home'
import Sort from './container/Sort/Sort'
import Worth from './container/Worth/Worth'
import Shop from './container/Shop/Shop'
import Personal from './container/Personal/Personal'

export default class App extends Component {
  render() {
		return (
       <div>
          <Switch>
            {/* 注册路由 */}
            <Route path='/home' component={Home}></Route>
            <Route path='/sort' component={Sort}></Route>
            <Route path='/worth' component={Worth}></Route>
            <Route path='/shop' component={Shop}></Route>
            <Route path='/personal' component={Personal}></Route>
            {/* 路由重定向 */}
            <Redirect to="/home"></Redirect>
          </Switch>
          <FooterGuide></FooterGuide>
       </div>
		)
	}
}
