// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { api } from '@api/index'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const problem = await api.problemService.problemList(0)
  const fields = Array.from(Array(problem.total_pages).keys()).map((index) => ({
    loc: process.env.NEXT_SERVER_BASE_URL + `/sitemap/problem/${index}.xml`, // Absolute url
    lastmod: new Date().toISOString(),
  }))

  return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}