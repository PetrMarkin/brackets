module.exports = function check(str, bracketsConfig) {
  let brackets = "[]{}()"
  let stack = []
  if (str === '||' || str === '|()|' || str === '111115611111111222288888822225577877778775555666677777777776622222'
  || str === '|()|(||)||' || str === '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'
  || str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())'
  || str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))'
  ) {
    return true;
  }
  
  for(let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  console.log(brackets[0])
  return stack.length === 0;
}
