const obj = {
    // property

    name : "Pyae Sone Phone Myint",
    age : 22,
    RS : false,

    // method

    canDo : function (language, code){
        return "I can speak " + language + " and code " + code;
    },
    // method ES6

    learn(anything="anything") {
        return `${this.canDo("Japanese", "JS")}`
    },

    showThis : function(){
        console.log(this.learn)
    }
};

// console.log(obj.canDo("Japanese", "Javascript"));
// console.log(obj.RS);
console.log(obj.learn());

// console.log(obj.showThis());