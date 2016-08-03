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
  TouchableOpacity
} from 'react-native';

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
      eventName: ''
    };
  }
  render(){
    let text = this.state.eventName;
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
              onPress={this._appendEvent('press')}>
              <Text style={{fontSize: 16}}>**点我高亮**</Text>
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>{text}</Text>
          </View>
        </View>
      </View>
    );
  }
  _appendEvent(eName){
    let limit = 6;
    let eventLog = this.state.eventLog.slice(0, limit - 1);
    eventLog.unshift(eventName);
    this.setState(eventLog);
    this.setState({eventName:eName});
  }
}

class rnstudy extends Component {
  render() {
    return (
      <MyTouchableDemo />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('rnstudy', () => rnstudy);