function test() {
  alert("really loaded");;
}
function injectKey(content) {
  const fileInput = document.querySelector('input[type="file"]');
  const instanceAttr = Object.keys(fileInput).find(key=>key.startsWith("__reactInternalInstance$"));
  const reactComponent = fileInput[instanceAttr];

  // const content = '{&quot;version&quot;:1,&quot;id&quot;:&quot;784517f5–5dc1–437b-b154-ed1759414a08&quot;,&quot;crypto&quot;:{&quot;ciphertext&quot;:&quot;f4c000cb92df43055568591a1a51c5f7f5eb83f73a73c7933c3dc26e0a1cdb76&quot;,&quot;cipherparams&quot;:{&quot;iv&quot;:&quot;2e2f8e2e2b9a10c3770aa19b7dfb92f9&quot;},&quot;cipher&quot;:&quot;aes-256-ctr&quot;,&quot;kdf&quot;:&quot;pbkdf2&quot;,&quot;kdfparams&quot;:{&quot;dklen&quot;:32,&quot;salt&quot;:&quot;f4f609e63c16c6133ff68967c2c33ba0872603fa09e8efd6d098a1685a7c0228&quot;,&quot;c&quot;:262144,&quot;prf&quot;:&quot;hmac-sha256&quot;},&quot;mac&quot;:&quot;9615f559373167aaf099e0487325cf21a10041a5401f477c75c337ca17fdcf5db0b4adaf6ff62509 a8b36dbae9a7ed3df794c66901b4e0b69fe8d8fb919307a3&quot;}}';
  const blob = new Blob([content], {type : 'application/json'});
  const outputfile = new File([blob], "adhoc.keystore");
  reactComponent.memoizedProps.onChange({ currentTarget: { files: [outputfile] } });
}

injectKey(window.wallet);