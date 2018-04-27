#!/usr/bin/env node
import Mhr from "menhera";
import CLI from "../core";
import * as messages from "./messages";
import * as commands from "./commands";
import Message from "menhera-message";

export default Mhr.$use({
  _mount: {
    CLI,
    Message
  },
  messages,
  CLI: {
    commands,
    config: {
      name: "mhr",
      version: "0.0.1",
      start: true
    }
  }
});
