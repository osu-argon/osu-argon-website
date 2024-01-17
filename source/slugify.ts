export const slugify = (title: string | null) => `${title?.toLowerCase().replace(/ /g, '-')}`;