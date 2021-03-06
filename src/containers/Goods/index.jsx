import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

/** 组件 **/
import HomeFooter from '../../components/HomeFooter/index';
import SearchInput from '../../components/SearchInput';
import GoodsList from  '../../components/GoosList/index';

class Goods extends React.Component{
    constructor(props){
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }

    render(){
        return(
           <div>
               <SearchInput />
               <GoodsList />
               <HomeFooter navIndex="2" />
           </div>
        )
    }
}

/**
 * action中的数据
 * **/
let mapStateToProps = (state)=>{
 return {

 }
}
/**
 * actions中的方法
 * **/
let mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Goods);
