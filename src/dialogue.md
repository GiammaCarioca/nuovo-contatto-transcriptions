---
title: "Dialogue"
layout: "base.njk"
---

## Dialogue transcripts

<ul>
  {% for dialogue in collections.dialogues %}
  <li>
    <a href="{{ dialogue.url }}">
      {{ dialogue.data.title }}
    </a>
  </li>
  {% endfor %}
</ul>
