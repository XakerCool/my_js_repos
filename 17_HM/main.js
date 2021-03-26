const root = {
    name: "C:",
    children: [
        {
            name: "Folder 1",
            children: [
                {
                    name: "Folder 1.1",
                    children: []
                },
                {
                    name: "Folder 1.2",
                    children: [
                        {
                            name: "Folder 1.2.1",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            name: "Folder 2",
            children: [
                {
                    name: "Folder 2.1",
                    children: []
                }
            ]
        }
    ]
}

//1 задание
console.log("1 задание");
console.log("-----------------");
const getAllFolders = (folder, spaces = "", withSymbols = "") => {
    //а
    // const totalSpaces = spaces + "  ";
    // return [spaces + folder.name, folder.children.map(subfolder => getAllFolders(subfolder, totalSpaces))].flat(Infinity);
    //б
    let totalSpaces = "";
    if(withSymbols.includes('+-')) {
        totalSpaces = "|" + spaces + "+-";
    } else {
        totalSpaces = spaces + "+-";
    }

    //не знаю как сделать последнюю строку, сделаю её так
    if(folder.name === "Folder 2.1") {
        withSymbols = spaces;
    }
    //Это никуда не годится, но я уже не знаю как сделать как надо

    spaces = spaces + " ";
    return [withSymbols + folder.name, folder.children.map(subfolder => getAllFolders(subfolder, spaces, totalSpaces))].flat(Infinity);
}
let tree = getAllFolders(root);
for (let i = 0; i < tree.length; i++) {
    console.log(tree[i]);  
}


