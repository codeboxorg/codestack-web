import { api } from '@api/index'
import { useRootState } from '@hooks/useRootSelector'
import withGssp from '@server/utils/withGssp'
import wrapper from '@store/configureStore'
import { Button } from 'antd'
import Head from 'next/head'
import Link from 'next/link'
import { setProblem } from '../problemSlice'
import ProblemDetail from './ProblemDetail'

const ProblemDetailPage = () => {
  const { id, title } = useRootState((state) => state.problem.problem)

  return (
    <>
      <Head>
        <title>
          {id} : {title}
        </title>
      </Head>
      <div className="pt-50 flex">
        <ProblemDetail />
      </div>
      <div className="mt-10 flex justify-end">
        <Link href={`/problem/${id}/submit`}>
          <Button>풀이 제출</Button>
        </Link>
      </div>
    </>
  )
}

export default ProblemDetailPage
export const getServerSideProps = withGssp(
  wrapper.getServerSideProps((store) => async (context) => {
    const problem = await api.problemService.problemDetail(
      Number(context.params!.id)
    )
    store.dispatch(setProblem(problem))
    return {
      props: {},
    }
  })
)
