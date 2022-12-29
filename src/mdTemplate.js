export default function mdTemplate(title, url) {
  return `---
title: ${title}
yt_link: https://www.youtube.com/watch?v=${url}
create: ${new Date().toISOString().slice(0, 19)}
tags: ["TODO", ""]
links: [[]]
status: n
---
#review

\`\`\`bash
yt-dlp 'https://www.youtube.com/watch?v=${url}' -o - | mpv -
\`\`\`

## 🚀 Q/E/C

### Question

<% tp.file.cursor() %>

### Evidence

<% tp.file.cursor() %>

### Conclusion

<% tp.file.cursor() %>

## 💡 Key Ideas

1. <% tp.file.cursor() %>

2. <% tp.file.cursor() %>

3. <% tp.file.cursor() %>

## ☘️ How this video changed me?

How my life / behavior / thoughts / ideas have changed as a result of this video?

<% tp.file.cursor() %>

`;
}
