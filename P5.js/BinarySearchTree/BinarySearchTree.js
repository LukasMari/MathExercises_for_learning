var tree;
var n = 25;

function setup() {
    noCanvas();
    tree = new Tree();

    for (var i = 0; i < n ; i++) {
       tree.addValue(Math.floor(random(0,100)));
        
    }
    

    console.log(tree);
    tree.traverse();
}







