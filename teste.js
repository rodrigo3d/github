const str = "one,two,tree"



const getS = (param) => {
  let txt = "";
  for (let i = 0; i < param.split(',').length; i++) {
    txt += '"' + param.split(',')[i] + '"' + ',';
  }
  return txt.substr(0,(txt.length - 1)).replace(/,/gm, "\n- ");
}






const ret = getS(str)
console.log(ret)
