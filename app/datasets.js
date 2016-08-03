'use strict';


module.exports = {

    assign: function(){
        
        

        function object1(){
            this.number=5;
            this.square=25;
            this.ping=function(){
                return 'Number: '+ this.number;
            }
            this.pong=function(){
                return 'Number: 25';
            }
        }

        function object2(){
            this.number=6;
            this.string='default';
        }

        object2.prototype.square=36;



        return [new object1,new object2];
    },

    //alias _.extend
    assignIn: function(){

        function object1() {
            this.number=5;
            this.square=function () {
                return 'Square: '+NaN;
            }
        }

        function object2() {
            this.number=4;
            this.cube=64;
            //this.fourthPower=256;
            /*this.square=function () {
                return 'Square: '+NaN;
            }*/
        }

        object2.prototype.square=function () {
            return 'Square: '+NaN;
        }
        object2.prototype.fourthPower=256;

        return [new object1,new object2];
    },

    at1: function(obj){

        //var obj = {'book': [{ 'count': randCover(), 'other': { 'pages': rand() }, 'ISBN': true}]};

        return [obj,['book[0].other.pages','book[0].count']];
    },

    at2: function(){

        return [['mate','companion','fellow','worker','friend','helper'],[[0],[4]]];
    },

    defaults: function(){

        return [{'name':'John','surname':'Smith','age':25},{'name':'Tom','gender':'male'},{'surname':'Twist'}];
    },

    defaultsDeep: function(){


        return [{'data':{'text':'Tim','reversedText':'miT'}},{'data':{'text':'mouse','reversedText':'esuom','lengthText':function () {
            return 5;
        }}}];
    },

    findKey1: function(obj){

        return [obj,function (index) {
            return index.number>20;
        }];

    },

    findKey2: function(obj) {

        return [obj,{'number':15}];
    },

    findKey3: function(obj) {

        return [obj,[]];
    },

    findKey4: function(obj) {

        return [obj,''];
    },

    findLastKey1: function(obj){

        return [obj,function (index) {
            return;
        }];
    },

    findLastKey2: function(obj){

        return [obj,{}];
    },

    findLastKey3: function(obj){

        return [obj,[]];
    },

    findLastKey4: function(obj){

        return [obj,''];
    },

    forIn: function() {

        function obiekty() {
            this.arms = 4;
            this.legs = 4;
        }

        obiekty.prototype.head = 1;


        return [new obiekty,function (obj) {
            return obj*obj;
        }];
    },

    forInRight: function(){

        function obiekty() {
            this.arms=4;
            this.legs=4;
        }

        obiekty.prototype.head=1;

        return [new obiekty,function (obj) {
            var result=2*obj;
            obiekty.prototype.head=2;
            return result;
        }];
    },

    forOwn: function(){
        
        function obiekty() {
            this.r=7;
            this.d=14;
        }
        
        obiekty.prototype.l=4.4;

        return [new obiekty,function () {
            return 8;
        }];
    },

    forOwnRight: function(){
        
        function obiekty() {
            this.r=7;
            this.d=14
        }

        obiekty.prototype.l=4.4

        return [new obiekty,function () {
            return 8;
        }];
    },

    get1: function(obj){

        return [obj,'exercises.tasks[2].thirdTask'];
    },

    get2: function(obj) {

        return [obj,['exercises','tasks','2','thirdTask']];
    },

    get3: function(obj){

        return [obj,'tasks','default value'];
    },

    has1: function(){

        return [{'bike':{'wheels':2,'saddle':1}},'bike.wheels'];
    },

    has2: function(){

        return [{'bike':{'wheels':2,'saddle':1}},['bike','wheels']];
    },

    hasIn1: function(){

        return [{'bike':{'wheels':2,'saddle':1}},'bike.wheels'];
    },

    hasIn2: function(){

        return [{'bike':{'wheels':2,'saddle':1}},['bike','wheels']];
    },

    invert: function(obj1){

        return [obj1];
    },

    invertBy1: function(obj1){

        return [obj1];
    },

    invertBy2: function(obj){

        return [obj];
    },

    invoke1: function(obj){

        return [obj,'key[0].number.random.unshift',99];
    },

    invoke2: function(obj){

        return [obj,'key[0].number.random.pop'];
    },

    keys: function(){

        function obiekty() {
            this.teacher='Mr. Tom';
            this.students=27;
            this.girls=15;
            this.boys=12;
        }

        obiekty.prototype.animals=1;

        return [new obiekty];
    },

    keysIn: function(){

        function obiekty() {
            this.arms=4;
            this.legs=8;
            this.heads=2;
        }

        obiekty.prototype.limbs=function (x) {
            return 12;
        }
        obiekty.prototype.tails=1;

        return [new obiekty];
    },

    mapKeys2: function(obj){

        return [obj,function () {
            
        }];
    },

    mapValues1: function(obj){

        return [obj,function (o) {
            return o.vmax;
        }];
    },

    mapValues2: function(obj){

        return [obj,'name'];
    },

    merge: function(){

        var object1={
            'data':[{'owner':'Adam'},{'owner':'Tom'},{'owner':'John'}]
        };

        var object2={
            'data':[{'cats':3},{'dogs':5},{'ostrich':1}]
        };

        return [object1,object2];
    },

    mergeWith: function(){
        

        var object1={
            'website':['blog'],'technique':['HTML5']
        };

        var object2={
            'website':['shop'],'technique':['xHTML']
        };

        return [object1,object2,function (obj1,obj2) {
            return obj1.concat(obj2);
        }];
    },

    omit1: function(obj){

        return [obj,'number'];
    },

    omit2: function(obj){

        return [obj,['number']];
    },

    omitBy: function(obj, filter){

        return [obj,filter];
    },

    result1: function(obj){

        return [obj,'exercises.tasks[2].thirdTask'];
    },

    result2: function(obj) {

        return [obj,['exercises','tasks','2','thirdTask']];
    },

    result3: function(obj){

        return [obj,'exercises.tasks.thirdTask','default value'];
    },

    result4: function(obj){

        return [obj,'exercises.tasks.thirdTask',function () {
            return 'default value'
        }];
    }
};
