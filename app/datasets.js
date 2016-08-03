
module.exports = {

    functions: function() {
        
       /* function funkcja1() {
            this.square=('square');
        }

        funkcja1.prototype.cube=function (x) {
            return x;
        }; */
        return [{'square':function () {
            
        }}];
    },

    functionsIn: function() {
        function object2() {
            this.square=function () {
            };
        }

        object2.prototype.cube=function () {

        }


        return [new object2];
    },

    pick1: function() {
        /*function obj() {
        }
*/
        return [{'red':1,'yellow':4},['red','yellow']];
    },

    pick2: function() {
        return [{'green':2},'green'];
    },
    
    pickBy2: function() {
        return [{'x':16},function (o) {
            return o;
        }];
    },

    set1: function() {
        var obj={'rectangle': [{
            'rect1': {
                'width': 4,
                'height': 4
            },
            'rect2': {
                'width': 6,
                'height': 6
            }
        }]};


        return [obj,'rectangle[0].rect1.height',8];
    },

    set2: function() {

        var obj={'rectangle': [{
            'rect1': {
                'width': 4,
                'height': 4
            },
            'rect2': {
                'width': 6,
                'height': 6
            }
        }]}

        return [obj,['rectangle','0','rect1','height'],8];
    },

    setWith: function() {
        return [{},'num',7,Object];
    },

    toPairs: function() {
        function obj() {
            this.apple='green'
            this.banana='yellow'
        }

        obj.prototype.cherry='red'

        return [new obj];
    },

    toPairsIn: function() {
        function obj() {
            this.weight=0.2;
        }

        obj.prototype.eatable=true;

        return [new obj];
    },

    transform1: function() {
        return [[3,5,7,-5,-10],function (result,n) {
            if(n>0){
                result.push(n.toString());
            }
            return n>2;
        },[] ];
    },

    transform2: function() {
        return [ {"width": ["5"],"weight": ["10"],"height": ["600"] } , function(result, value, key) {
            (result[value] || (result[value] = [])).push(key);
        }, {} ];
    },

    unset1: function() {
        var object = {"rectangle":[{"square":{"height": 4}}] };
        return [ object, 'rectangle[0].square.height' ];
    },

    unset2: function() {
        var object = {"triangle":[{"deminsions":{"d": 5}}] };
        return [object,['triangle','0','deminsions','d']];
    },

    update: function() {
        var obj = { 'rectangle': [{ 'rect1': { 'width': 4, 'height': 4}}] };
        var str = 'rectangle[0].rect1.height';
        var fun = function(n){return 2*n;};
        return [obj, str, fun];
    },

    updateWith: function() {
        var object = {"rectangle":[ {"rect2": {"height": 6, "width":4} } ] };
        var str='rectangle[0].rect2.height';
        var fun = function(n){return 2*n;};
        return [ object, str, fun];
    },

    values: function() {
        function Foo() {
            this.a = null;
            this.b = 2;
            //this.c = 3;
        }

        Foo.prototype.c = '3';
        return [new Foo];
    },
    
    valuesIn: function() {
        function Foo() {
            this.a = 6;
        }

        Foo.prototype.c = 7;
        return [new Foo];
    },

};
