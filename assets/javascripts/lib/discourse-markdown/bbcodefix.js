import { registerOption } from "pretty-text/pretty-text";

registerOption((siteSettings, opts) => {
  opts.features["bbcode-fix"] = true;
});

function fix(text) {
  return text
    .replace(/\[font=(\w+\s\w+)\]/gi, "[font='$1']");
}

export function setup(helper) {
  helper.addPreProcessor(fix);
}