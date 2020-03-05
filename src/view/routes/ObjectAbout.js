import React, { Component, Children } from 'react'
import { Button } from 'antd';
import style from './style.less'
function GcObj() {
  var obj = {
    name: '工厂模式',
    getName() { console.log(this.name) },
  }
  return obj
}
function GzObj() {
  this.name = '构造函数';
  this.getName = () => console.log('我的名字叫' + this.name);
}
function YxObj() {
  this.name = '原型模式'

  YxObj.prototype.getName = function () {
    console.log('我的名字叫' + this.name);
  }
}
function YxAndGzObj(name) {
  this.name = name;
  YxAndGzObj.prototype.getName = function () {
    console.log(this.name)
  }
}
function DyObj(name) {
  this.name = name;
  if (typeof this.getName != 'function') {
    DyObj.prototype.getName = function () {
      console.log('我的名字叫' + this.name)
    }
  }
}
function JyObj() {
  var obj = new Array();
  obj.push(...arguments);
  obj.extraFunc = function () {
    return this.join('|')
  }
  return obj;
}
function WtObj(name) {
  var obj = new Object();
  obj.getName = function () {
    console.log(name)
  }
  return obj
}

function FatherObj(name) {
  this.name = name || '父对象';
}
FatherObj.prototype.getName = function () {
  console.log(this.name);
}
function createObj(o) {
  function F() { }
  F.prototype = o;
  return new F();
}
export default class ObjectAbout extends Component {
  constructor(props) {
    super(props);
  }
  //工厂
  createObjGc = () => {
    var obj = GcObj();
    obj.getName();
    console.log(obj)
  }
  //构造
  createObjGz = () => {
    var obj = new GzObj();
    obj.getName();
    console.log(obj)
  }
  //原型
  createObjYx = () => {
    var obj = new YxObj();
    obj.name = '实例1属性';
    obj.getName();

    var obj2 = new YxObj();
    obj2.name = '实例2属性'
    obj2.getName();
    console.log(obj, obj2);


    //是否是实例的属性
    var tag1 = YxObj.prototype.isPrototypeOf(obj);
    var tag2 = YxObj.prototype.isPrototypeOf(obj2);

    console.log(tag1, tag2);


    var tag3 = obj.hasOwnProperty('name');
    var tag4 = obj2.hasOwnProperty('name');
    console.log(tag3, tag4)

    //是否为原型属性
    var hasPrototypeProterty = function (obj, proerty) {
      return proerty in obj && !obj.hasOwnProperty(proerty);
    }

    var tag5 = hasPrototypeProterty(obj, 'name');
    console.log(tag5)


  }
  //原型与构造混合，基本属性方法原型中共享；特殊的属性方法作为参数传如实例
  createObjYxAndGz = () => {
    var obj = new YxAndGzObj('实例1');
    var obj2 = new YxAndGzObj('实例2')
    obj.getName();
    obj2.getName();
    console.log(obj, obj2)
  }
  //动态原型
  createObjDy = () => {
    var obj = new DyObj('动态原型');
    obj.getName();
  }
  //借用构造函数()
  createObjJy = () => {
    var obj = new JyObj(1, 2, 3, 4, 5)
    var res = obj.extraFunc();
    console.log(obj);
    console.log(res)
  }
  //稳妥构造函数
  createObjWt = () => {
    var obj = WtObj('私有的参数');
    var obj1 = new WtObj('私有的参数2')
    obj.getName();
    obj1.getName();
    console.log(obj, obj1)
  }


  //原型链继承
  createChildYxObj = () => {
    function ChildObj() {
    }
    ChildObj.prototype = new FatherObj();
    var obj1 = new ChildObj();
    obj1.getName();
    obj1.name = '孩子1';
    var obj2 = new ChildObj();
    obj2.getName();
    console.log(obj1)

    var tag1 = obj1 instanceof (Object);
    var tag2 = obj1 instanceof (FatherObj);
    var tag3 = obj1 instanceof (ChildObj);
    var tag4 = FatherObj.prototype.isPrototypeOf(obj1);
    var tag5 = ChildObj.prototype.isPrototypeOf(obj1);
    console.log(tag1, tag2, tag3, tag4, tag5);
  }
  //借用构造继承
  createChildJyObj = () => {
    function ChildObj() {
      FatherObj.call(this);
    }
    var child1 = new ChildObj();
    var child2 = new ChildObj();
    child2.name = '孩子2'
    console.log(child1, child2)
  }
  //借用原型链混合继承
  createChildJyAndYxObj = () => {
    function ChildObj() {
      FatherObj.call(this, '我是子对象');
    }
    ChildObj.prototype = new FatherObj();
    ChildObj.prototype.constructor = ChildObj;
    ChildObj.prototype.getChildName = function () {
      console.log(this.name);
    }
    var child1 = new ChildObj();
    child1.getChildName();
    child1.getName();
    console.log(child1)
  }
  //原型继承
  createChildYx = () => {
    var obj1 = createObj(FatherObj.prototype);
    obj1.name = '对象1';
    var obj2 = createObj(FatherObj.prototype);
    obj2.name = '对象2';
    console.log(obj1, obj2);
  }

  //寄生组合式继承
  createChildJsZh = ()=>{
    var prototype = createObj(FatherObj.prototype);
    function ChildObj (){
      this.name = '子函数'
    }
    ChildObj.prototype = prototype;
    prototype.constructor = ChildObj;
    var obj = new ChildObj();
    obj.getName();
    console.log(obj)
  }
  style1 = () => {
    return {
      marginBottom: 10,
    }
  }
  render() {

    return (
      <div>
        <div className={style.marginB30}>
          <p className={style.marginB10 + ' ' + style.point}>封装</p>
          <div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjGc()}>工厂模式</Button><br />
            </div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjGz()}>构造模式</Button><br />
            </div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjYx()}>原型模式</Button><br />
            </div>
            <div className={style.marginB10}>
              <Button type='primary' onClick={() => this.createObjYxAndGz()}>原型构造混合模式</Button><br />
              <p className={style.red}>最核心的构造对象的方法</p>
            </div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjDy()}>动态原型模式</Button><br />
            </div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjJy()}>借用构造模式</Button><br />
              <p className={style.red}>在不改变原对象属性方法的条件下，增加特有的方法</p>
            </div>
            <div className={style.marginB10}>
              <Button onClick={() => this.createObjWt()}>稳妥构造模式</Button><br />
              <p className={style.red}>构造函数中不使用this，只能使用构造方法访问参数</p>
            </div>
          </div>
        </div>

        <div className={style.marginB30}>
          <p className={style.marginB10 + ' ' + style.point}>继承</p>
          <div className={style.marginB10}>
            <Button onClick={this.createChildYxObj}>原型链继承</Button><br />
            <p className={style.red}>父对象的实例属性方法变成了子对象的实例实现方法，导致引用属性共享</p>
          </div>
          <div className={style.marginB10}>
            <Button onClick={this.createChildJyObj}>借用构造继承</Button><br />
            <p className={style.red}>子对象调用父对象的构造方法</p>
          </div>
          <div className={style.marginB10}>
            <Button onClick={this.createChildJyAndYxObj}>借用构造混合原型链继承</Button><br />
            <p className={style.red}>子对象的原型对象的constructor属性指向子对象；构造函数运行了两次，一次是继承的时候，一次是借用的时候</p>
          </div>
          <div className={style.marginB10}>
            <Button onClick={this.createChildYx}>原型继承</Button><br />
          </div>
          <div className={style.marginB10}>
            <Button onClick={this.createChildJsZh}>寄生式组合继承</Button><br />
            <p className={style.red}>最优解决方案（构造一个空函数，空函数的实例指向超类的原型对象，避免执行超类的构造函数）</p>
          </div>
        </div>
      </div >
    )
  }
}
