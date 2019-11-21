function MyWallet() {
  let _encrypted = null;

  this.findComponent = function() {
    document.querySelector('[data-cy="menu-KeyStore File"]').click();

    const fileInput = document.querySelector('input[type="file"]');
    const instanceAttr = Object.keys(fileInput).find(key => key.startsWith("__reactInternalInstance$"));
    const reactComponent = fileInput[instanceAttr];
    return reactComponent;
  }

  this.mount = function(encrypted) {
    console.log("mount", encrypted);

    // password: passwordA1!
    _encrypted = encrypted;
    const blob = new Blob([_encrypted], {type : 'application/json'});
    const file = new File([blob], "adhoc.keystore");

    const component = this.findComponent();
    component.memoizedProps.onChange({ currentTarget: { files: [file] } });
  }

  this.unmount = function() {
    console.log("unmount", _encrypted);
    _encrypted = null;
  }
}

window.myWallet = new MyWallet();