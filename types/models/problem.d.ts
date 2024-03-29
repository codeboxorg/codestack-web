interface Problem {
    id: number
    title: string
    context: string
    maxCpuTime: number
    maxMemory: number
    submission: number
    accepted: number
    languages: Language[]
}

type Problems = Record<'problems', Pagination<Problem>>

interface ProblemSubmitRequest {
    languageId: number
    sourceCode: string
}

interface ProblemSubmitResponse {
    createSubmission: {
        id: number
        source_code: string
    }
}
