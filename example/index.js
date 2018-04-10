const Menhera = require("menhera").default;
const CLI = require("../src").default;

const _ = new Menhera({
  _mount: {
    cli: [CLI]
  },
  CLI: {
    options: {
      t: {
        alias: "test",
        desc: "test desc"
      }
    },
    commands: {
      "*"({ test, h }) {
        test && console.log(test);
        h && console.log("Test help");
      },
      "serve [port]"({ port }) {
        console.log(`server running on port:${port}`);
      }
    },
    config: {
      version: "0.0.1"
    }
  }
}).$use({
  CLI: {
    config: {
      start: true
    }
  }
});
