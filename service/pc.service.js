const fs = require("fs");

let getAllPc = () => {
    let data = JSON.parse(fs.readFileSync("./config/computers.json", "utf8"));
    return data;
  };

let addNewPc = (data) => {
    let pc = JSON.parse(fs.readFileSync("./config/computers.json", "utf8"));
    let {name, brand} = data
    if(!name || !brand)throw new Error("To'liq ma'lumot kiriting");
    let newPc = {id: pc.length + 1, name, brand};
    pc.push(newPc);
    fs.writeFileSync("./config/computers.json", JSON.stringify(pc));
  };

  let deletePc = (id) => {
    let pc = JSON.parse(fs.readFileSync("./config/computers.json", "utf8"));
    let newPc = pc.filter(item => item.id != id);
    fs.writeFileSync("./config/computers.json", JSON.stringify(newPc));
  };

module.exports = { getAllPc, addNewPc, deletePc };