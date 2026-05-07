/**
 * Renders JSON-LD safely. Use one <JsonLd /> per schema graph.
 */
export function JsonLd({ data, id }: { data: object | object[]; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
