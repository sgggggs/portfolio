---
to: <%= abs_path %>/index.tsx
---
import type { FC } from "react";
<% if (have_style) { -%>
import * as styles from "./style.css"
<% } -%>
<% if (have_props) { -%>

type Props = Readonly<{

}>;
<% } -%>

export const <%= component_name %>: <%- type_annotate %> = <%= props %> => {
  return (
<% if (have_style) { -%>
    <<%= tag %> className={styles.container}>
<% } else { -%>
    <<%= tag %>>
<% } -%>

    </<%= tag %>>
  );
}