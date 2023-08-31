export async function load({ params }) {
  const mdComp = await import(`../md/${params.comp}.md`);
  const { default: page, metadata } = mdComp;

  if (!page) {
    return {
      status: 404,
    };
  }

  return {
    metadata,
    page,
  };
}
