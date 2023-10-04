/**
 *
 * @param {*[]} content Array of any content, with a _lang property
 * @param {boolean} coalesce Whether to combine results into an array
 * @return {Object} Object of items grouped by language
 */
export function groupByLanguage(content: Array<any>, coalesce = true) {
  return content.reduce((acc, cur) => {
    if (coalesce) {
      if (!acc[cur._lang]) {
        acc[cur._lang] = [];
      }
      acc[cur._lang].push(cur);
    } else {
      acc[cur?._lang] = cur;
    }
    return acc;
  }, {});
}

/**
 * Transforms image assets to CMS links
 * @param {*} content Content to transform
 */
export function cleanup(content: any) {
  // Theme cleanup
  if (content.theme) {
    if (content.theme.icon?._ref) {
      content.theme.icon = `cms://${content.theme.icon._ref}`;
    }
    if (content.theme.backgrounds) {
      if (content.theme.backgrounds.large?._ref) {
        content.theme.backgrounds.large = `cms://${content.theme.backgrounds.large._ref}`;
      }
      if (content.theme.backgrounds.small?._ref) {
        content.theme.backgrounds.small = `cms://${content.theme.backgrounds.small._ref}`;
      }
    }
  }

  // Feature cleanup
  if (content.featured?.media?.image?._ref) {
    content.featured.media.image = `cms://${content.featured.media.image._ref}`;
  }
}
