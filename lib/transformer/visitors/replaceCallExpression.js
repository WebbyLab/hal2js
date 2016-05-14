module.exports = {
    CallExpression(path) {
        console.log(path.node);
        path.node = {  
          callee:{  
            type:"MemberExpression",
            object:{  
              type:"Identifier",
              name:"hal"
            },
          property:{  
            type:"Identifier",
            name:"getDay"
          },
          computed:false
       },
       arguments:[  

       ]
    }
  }
};

