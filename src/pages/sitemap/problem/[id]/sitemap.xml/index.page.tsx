import { API } from '@client/index'
import { GetServerSideProps } from 'next'
import { getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = Number(ctx.params!.id)
    const problem = await API.problemService.problemList(id)
    const fields = problem.content.map((element) => ({
        loc: `${process.env.NEXT_SERVER_BASE_URL}/problem/${element.id}`,
        lastmod: new Date().toISOString(),
    }))

    return getServerSideSitemapLegacy(ctx, fields)
}

export default function Sitemap() {}
