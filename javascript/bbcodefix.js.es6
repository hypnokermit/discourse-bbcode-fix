function fix(text) {
  return text.replace(/\[font=(\w+\s\w+)\]/gi, "[font='$1']");
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = fix(text[i]);
    }
  }
  return text;
});
