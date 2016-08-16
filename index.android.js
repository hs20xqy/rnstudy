/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ScrollView,
  ToolbarAndroid,
  Switch,
  Picker,
  ViewPagerAndroid,
  TouchableHighlight,
  TouchableOpacity,
  ListView,
  Image,
  PullToRefreshViewAndroid,
  RefreshControl,
  WebView,
  Navigator
} from 'react-native';

import FirstHomePage from './FirstHomePage'

/** DrawerLayoutAndroid Test */
class MyDrawerLayoutAndroid extends Component {
    render(){
      var navigationview = (
          <View style={{flex: 1,backgroundColor: '#fff'}}>
            <Text>I'm in the Drawer!</Text>
          </View>
      );

      return(
        <DrawerLayoutAndroid
          drawerWidth={250}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          renderNavigationView={() => navigationview}>
          <View>
            <Text>hello</Text>
            <Text>world!</Text>
          </View>
        </DrawerLayoutAndroid>
      );
    }
}

/** ScrollView Test */
class MyScrollView extends Component {
  render(){
    return(
      <View>
        <Text>ScrollView</Text>
        <ScrollView showsHorizontalScrollIndicator={true}
          style={{height:200}}>
          <Text>
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
            MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test MyScrollView Test
          </Text>
        </ScrollView>
      </View>
    );
  }
}

/** ToolbarAndroid Test */
class MyToolbarAndroid extends Component {
  render(){
    return(
      <ToolbarAndroid 
        logo={require('./images/app_logo.png')}
        title="AwesomeApp"
        actions={[{title:'Setting'}]}/>
    );
  }
}

/** Switch Test */
class MySwitch extends Component {
  constructor(props){
    super(props);
    this.state = {trueSwitchIsOn: true,falseSwitchIsOn: false}
  };
  render(){
    return(
      <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Switch Test</Text>
        <Switch
          disabled={true}
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          value={this.state.falseSwitchIsOn}
          style={{marginTop: 10, marginBottom: 10}}/>
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn}/>
      </View>
    );
  }
}

/** Picker Test */
class MyPicker extends Component {
  constructor(props){
    super(props);
    this.state = {language:'',index: ''}
  }
  render(){
    return(
      <View style={{flex: 1, justifyContent: 'center' ,alignItems: 'center'}}>
        <Text >
          Picker选择器实例
        </Text>
        <Picker
          style={{width:200}}
          selectedValue={this.state.language}
          onValueChange={(value, position) => this.setState({language: value, index: position})}
          // mode={'dropdown'}
          prompt={'请选择语言'}>
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="JavaScript" value="javaScript"/>
        </Picker>
        <Text>您当选择的是：{this.state.language} + {this.state.index}</Text>
      </View>
    );
  }
}

/** MyViewPagerAndroid Test */
class MyViewPagerAndroid extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage : 0,
      totalPage   : 3
    }
    setInterval(() => {
      if(this.state.currentPage + 1 <= this.state.totalPage) {
        this.viewPager.setPage(this.state.currentPage++);
      }else{
        this.state.currentPage = 0;
        this.viewPager.setPage(0);
      }
    }, 5000);
  };
  render(){
    return(
      <View style={{flex: 1}}>
        <Text>
          ViewPagerAndroid实例
        </Text>
        <ViewPagerAndroid
          style={{height: 200}}
          // initialPage={1}
          ref={viewPager => { this.viewPager = viewPager; }}
          // onPageSelected={(position) => {this.state.currentPage = position}}
          >
          <View style={{backgroundColor: 'red'}}>
            <Text>first Page</Text>
          </View>
          <View style={{backgroundColor: 'blue'}}>
            <Text>second Page</Text>
          </View>
          <View style={{backgroundColor: 'yellow'}}>
            <Text>three Page</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }
}

/** MyTouchableDemo Test */
class MyTouchableDemo extends Component {
  
  constructor(){
    super();
    this.state = {
      eventName: '',
      eventLog:[]
    };
  }

  _appendEvent (eName) {
    let limit = 6;
    let eventLog = this.state.eventLog.slice(0, limit - 1);
    eventLog.unshift(eName);
    this.setState(eventLog);
    this.setState({eventLog: eventLog});
  };

  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{ alignItems: 'center'}}>
          <Text>TouchableHighlight Test</Text>
          <TouchableHighlight
            underlayColor="#CD6889"
            activeOpacity={0.5}
            style={{marginTop: 10, borderRadius: 5, backgroundColor: '#CFCFCF', padding: 5}}>
            <Text style={{fontSize: 16,}}>**点我高亮**</Text>
          </TouchableHighlight>
        </View>

        <View style={{ alignItems: 'center'}}>
          <Text>TouchableOpacity Test</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{marginTop: 10, borderRadius: 5, backgroundColor: '#CFCFCF', padding: 5}}>
            <Text style={{fontSize: 16}}>**点我透明**</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>TouchableHighlight Test</Text>
            <TouchableHighlight
              activeOpacity={0.6} 
              underlayColor="#CD6889"
              style={{marginTop: 10, borderRadius: 5, backgroundColor: '#CFCFCF', padding: 5}}
              onPress={() => this._appendEvent('press')}
              onPressIn={() => this._appendEvent('pressIn')}
              onLongPress={() => this._appendEvent('longPress')}
              onPressOut={() => this._appendEvent('pressOut')}>
              <Text style={{fontSize: 16}}>**点我高亮**</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            <Text>{this.state.eventLog.map((e, ii) => <Text key={ii}>{e}</Text>)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

/** MyListView Test */
var THUMB_URLS = [
  require('./images/like.png'),
  require('./images/dislike.png'),
  require('./images/call.png'),
  require('./images/fist.png'),
  require('./images/bandaged.png'),
  require('./images/flowers.png'),
  require('./images/heart.png'),
  require('./images/liking.png'),
  require('./images/party.png'),
  require('./images/poke.png'),
  require('./images/superlike.png'),
  require('./images/victory.png'),
  ];


class MyListView extends Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      // dataSource: ds.cloneWithRows([
      //   'row1', 'row2', 'row3', 'row4', 'row5', 'row6', 'row7', 'row8', 'row9', 'row10', 'row11', 'row12'
      //   ])
      dataSource: ds.cloneWithRows(this._genRows({}))
    }
  }
  _genRows(){
    var dataBlob = [];
    for(let ii = 0; ii < THUMB_URLS.length; ii++) {
      dataBlob.push('单元格' + ii);
    }
    return dataBlob;
  }
  _renderRow(rowData: string, sectionID: number, rowID: number){
    let imgSource = THUMB_URLS[rowID];
    return (
      // <TouchableOpacity>
      //   <View>
      //     <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      //       <Image source={imgSource} style={{height: 80, width: 80}}/>
      //       <Text style={{fontSize: 16}}>我是测试行号哦!{rowID}</Text>
      //     </View>
      //   </View>
      // </TouchableOpacity>
        <View style={{width: 120, height: 120}}>
          <Image source={imgSource} style={{height: 80, width: 80}}/>
          <Text style={{fontSize: 16}}>{rowData}</Text>
        </View>
    );
  }
  render(){
    return(
        <ListView 
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}/>
    );
  }
}

/** MyPullToRefreshViewAndroid failed and RefreshControl Test */
class Row extends Component {
  render(){
    return(
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: '#FFC0CB', margin: 10}}>
        <Text>{this.props.data.text}</Text>
      </View>
    );
  }
}
class MyPullToRefreshViewAndroid extends Component {
  constructor(){
    super();
    this.state = {
      isRefreshing: false,
      loaded: 0,
      rowData: Array.from({length: 20}).map((val, i) => ({text: '初始行' + i}))
    }
    this._onRefresh = this._onRefresh.bind(this); //在初始化方法中传递this对象
  }
  render(){
    const rows = this.state.rowData.map((row, ii) => {return <Row key={ii} data={row}/>});
    return(
      /** <PullToRefreshViewAndroid
        refreshing={this.state.isRefreshing}
        onRefresh={this._onRefresh}
        > */
        <ScrollView
          refreshControl={
            <RefreshControl 
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh}  //使用bind传入this
              colors={['#ff0000']}
            />
          }  
        >
          {rows}
        </ScrollView>
      /** </PullToRefreshViewAndroid> */
    );
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      //准备5行新数据
      const rowData = Array.from({length: 5}).map((val, i) => ({text: '新增的行' + (this.state.loaded + i)})).concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 5,
        isRefreshing: false,
        rowData: rowData
      });
    }, 2000);
  }
}

const DEFAULT_URL = 'http://www.lcode.org';
/** MyWebView Test */
class MyWebView extends Component {
  render(){
    return(
      <WebView 
        source={{uri: DEFAULT_URL}}
      />
    );
  }
}

/** MyNavigator Test */
class NavButton extends Component {
  
}
class NavMenu extends Component {
  render(){
    return(
      <View>
        <Text>this.props.messgae</Text>
        <NavButton 
          onPress={() => {
            this.props.navi
          }}
        />
      </View>
    );
  }
}

class rnstudy extends Component {
  render() {
    return (
      <FirstHomePage />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  row: {
    justifyContent: 'center',
    width: 100,
    height: 100,
  }
});

AppRegistry.registerComponent('rnstudy', () => rnstudy);