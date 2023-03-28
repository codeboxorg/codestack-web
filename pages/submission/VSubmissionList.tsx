import BaseTable from '@components/shared/BaseTable'
import { Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

type SubmissionRow = Submission & { handleRowClick: () => void }
type SubmissionColumns = ColumnsType<SubmissionRow>

export type VSubmissionListProps = {
  list: SubmissionRow[]
}

const SubmissionResultTag = ({ status }: { status: SubmissionStatus }) => {
  if (status === 'AC') return <Tag color="green">정답</Tag>
  if (status === 'WA') return <Tag color="red">오답</Tag>
  if (status === 'PE') return <Tag color="yellow">출력 형식 다름</Tag>
  if (status === 'TLE') return <Tag color="red">시간 초과</Tag>
  if (status === 'MLE') return <Tag color="red">메모리 초과</Tag>
  if (status === 'OLE') return <Tag color="yellow">값 출력 초과</Tag>
  return <Tag color="red">런타임 에러</Tag>
}

const columns: SubmissionColumns = [
  {
    title: '제출 번호',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '문제',
    dataIndex: 'problem',
    key: 'problem',
    render: (problem: SubmissionRow['problem']) => problem.title,
  },
  {
    title: '제출자',
    dataIndex: 'member',
    key: 'member',
    render: (member: SubmissionRow['member']) => member.nickname,
  },
  {
    title: '메모리 사용',
    dataIndex: 'memory_usage',
    key: 'memory_usage',
  },
  {
    title: '실행 시간',
    dataIndex: 'cpu_time',
    key: 'cpu_time',
  },
  {
    title: '제출 결과',
    dataIndex: 'status_code',
    key: 'status_code',
    render: (status: SubmissionRow['status_code']) => {
      return <SubmissionResultTag status={status} />
    },
  },
]

const VSubmissionList = ({ list }: VSubmissionListProps) => {
  return (
    <BaseTable
      className="border-1 border-neutral-200 rounded-md px-1"
      rowClassName="cursor-pointer"
      onRow={(row) => ({
        onClick: row.handleRowClick,
      })}
      rowKey={(row) => row.id}
      dataSource={list}
      columns={columns}
      pagination={false}
    />
  )
}

export default VSubmissionList
