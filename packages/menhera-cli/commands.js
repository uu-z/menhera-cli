import path from "path";
import { forceDownload, Message } from "./utils";

export const _ = {
  args: ["command"],
  exec({ _, command, _key }) {
    if (!command) {
      _.$use({ CLI: { help: _key } });
    }
  }
};

export const init = {
  desc: "Init Project",
  args: ["templateName", "projectName"],
  options: {
    clone: {
      alias: "c",
      desc: "clone repo"
    }
  },
  async exec(data) {
    const { _, _key, $0, $1, clone = false, h } = data;
    if (!$0 || !$1) {
      _.$use({ CLI: { usage: _key } });
      return;
    }

    let desc = path.join(process.cwd(), $1);
    let err = await forceDownload($0, desc, { clone });
    _.$use({
      CLI: { Message: { download: err ? "fail" : "success" } }
    });
  }
};
