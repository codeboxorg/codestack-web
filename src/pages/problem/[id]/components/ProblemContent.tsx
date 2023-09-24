import { ComponentProps } from 'react'
import { css } from 'twin.macro'

const problemBodyStyle = css`
    h1 {
        font-size: x-large;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 30px;
    }

    .sample-item {
        width: 100%;
        gap: 15px;
        display: flex;
        margin-top: 35px;
        justify-content: space-between;
        & > div {
            width: 50%;
        }
    }

    .sample-item-header {
        display: flex;
        align-items: center;
        gap: 10px;
        div {
            font-size: large;
            font-weight: 600;
        }
        button {
            border: 1px solid rgb(190, 190, 190);
            border-radius: 5px;
            padding: 2px 10px;
            font-size: small;
        }
    }

    .sample-data {
        margin-top: 10px;
        border-radius: 5px;
        background-color: rgb(244, 244, 244);
        border: 1px solid rgb(190, 190, 190);
        padding: 10px 7px;
        text-align: justify;
        white-space: pre;
        overflow-x: scroll;
    }

    @media only screen and (max-width: 767px) {
        .sample-item {
            display: flex;
            flex-wrap: wrap;
            & > div {
                width: 100%;
            }
        }
    }
`

interface Props extends ComponentProps<'section'> {
    contentHtml: string
}

function ProblemBody({ contentHtml }: Props) {
    // eslint-disable-next-line react/no-danger
    return <section css={problemBodyStyle} dangerouslySetInnerHTML={{ __html: contentHtml }} />
}

export default ProblemBody
