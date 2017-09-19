console.log("HELLO!!!");

window.requirejs.config({
  paths: {
    in: "./bundle.in.url"
  }
});

window.requirejs(["in"]);
