let colorVal;
document.querySelector("#color").onchange = e => {
    const wrapper = document.querySelector('#wrap');
    colorVal = e.target.value;
    let colorString = colorVal.substring(1);
    let textR = colorString.substring(0, 2);
    let textG = colorString.substring(2, 4);
    let textB = colorString.substring(4, 6);
    textR = parseInt(textR, 16);
    textG = parseInt(textG, 16);
    textB = parseInt(textB, 16);
    textR = 255 - textR;
    textG = 255 - textG;
    textB = 255 - textB;
    const styles = {
        color: 'rgb('+ textR +','+ textG +','+ textB +')',
        backgroundColor: colorVal
      }
    Object.assign(wrapper.style, styles);
 }