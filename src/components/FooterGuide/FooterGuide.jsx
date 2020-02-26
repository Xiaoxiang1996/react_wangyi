import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './FooterGuide.styl'

export default class FooterGuide extends Component {
    render() {
        return (
            <div id="FooterGuideContainer">
            <NavLink className="footerItem" to="/home">
              <span className="iconfont icon-tab-sy"></span>
              <p className="text">首页</p>
            </NavLink>
            <NavLink className="footerItem" to="/sort">
              <span className="iconfont icon-fenlei-0"></span>
              <p className="text">分类</p>
            </NavLink>
            <NavLink className="footerItem" to='/worth'>
              <span className="iconfont icon-shimozhidemai"></span>
              <p className="text">值得买</p>
            </NavLink>
            <NavLink className="footerItem" to='/shop'>
              <span className="iconfont icon-gouwuche"></span>
              <p className="text">购物车</p>
            </NavLink>
            <NavLink className="footerItem" to="/personal">
              <span className="iconfont icon-geren"></span>
              <p className="text">个人</p>
            </NavLink>
          </div>
        )
    }
}
