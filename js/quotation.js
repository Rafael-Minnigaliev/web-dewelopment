'use strict'

const str = `Lorem ipsum dolor, sit 'amet' consectetur adipisicing eli't. 
Recusanda'e tempore 'omni's' aut cupiditate neque blanditiis 'mollitia' at 
aliquam necessitatibus, obcaecati ut inventore 'deleniti' exceptur'i sit
iure dolores, 'facili' pariatu'r aperiam!`;

const newStr = str.replace(/\s'/gm, ' "').replace(/'\s/gm, '" ');

console.log(newStr);
