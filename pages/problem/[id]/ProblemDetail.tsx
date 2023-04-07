import { useRootState } from '@hooks/useRootSelector'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import VProblemDetail, { VProblemDetailProps } from './VProblemDetail'
import { convertByte, convertMS } from '@utils/convert/convertByte'

const VAC = dynamic(import('react-vac'), { ssr: false })

const ProblemDetail = () => {
  const { max_cpu_time, max_memory, ...rest } = useRootState(
    (state) => state.problem.problem
  )

  const vProblemDetailProps: VProblemDetailProps = {
    ...rest,
    max_memory: `${convertByte(max_memory, 'MB')} MB`,
    max_cpu_time: `${convertMS(max_cpu_time, 'SEC')} 초`,
    possibleLanguage: rest.language.map(({ name }) => name).join(', '),
  }

  return (
    <>
      <VProblemDetail {...vProblemDetailProps} />
      <div className="mt-30">
        <Suspense>
          <VAC name="VProblemDetail" data={vProblemDetailProps} />
        </Suspense>
      </div>
    </>
  )
}

export default ProblemDetail
